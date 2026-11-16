#!/usr/bin/env python3
"""Fetch candidate photography from Wikimedia Commons for local art direction review.

Outputs:
  assets/img/raw/<slug>.jpg
  assets/img/manifest.json  (title, artist, licence, source url)
Nothing is published until it has been visually reviewed via a contact sheet.
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "assets", "img", "raw")
os.makedirs(RAW, exist_ok=True)

UA = "BeninCommuneTemplate/1.0 (design research; contact: local demo)"
API = "https://commons.wikimedia.org/w/api.php"

# (slug, mode, query, limit)
SOURCES = [
    ("cotonou-1", "search", "Cotonou skyline", 10),
    ("cotonou-2", "search", "Cotonou market", 10),
    ("cotonou-3", "search", "Cotonou street Benin", 10),
    ("portonovo-1", "search", "Porto-Novo Benin mosque", 10),
    ("portonovo-2", "search", "Porto-Novo Benin street", 10),
    ("portonovo-3", "search", "Porto-Novo palace Benin", 8),
    ("ouidah-1", "search", "Ouidah door of no return", 8),
    ("ouidah-2", "search", "Ouidah Benin temple python", 8),
    ("ouidah-3", "search", "Ouidah Benin beach", 8),
    ("abomey-1", "search", "Royal Palaces of Abomey", 12),
    ("abomey-2", "search", "Abomey Benin", 10),
    ("parakou-1", "search", "Parakou Benin", 12),
    ("natitingou-1", "search", "Natitingou Benin", 10),
    ("natitingou-2", "search", "Tata Somba Benin", 10),
    ("nikki-1", "search", "Nikki Benin palace", 10),
    ("nikki-2", "search", "Nikki Benin", 8),
    ("ganvie-1", "search", "Ganvie Benin", 12),
    ("benin-market-1", "search", "Dantokpa market", 8),
    ("benin-market-2", "search", "market women Benin", 10),
    ("benin-craft-1", "search", "Benin wax fabric textile", 8),
    ("benin-food-1", "search", "Benin food cuisine", 8),
    ("benin-mobility-1", "search", "zemidjan Benin motorbike", 6),
    ("benin-culture-1", "search", "Vodun festival Benin", 10),
    ("benin-landscape-1", "search", "Pendjari Benin landscape", 10),
    ("benin-people-1", "search", "Benin children school", 8),
    ("benin-architecture-1", "search", "Benin architecture building", 8),
]

BLOCK = re.compile(r"(nude|nudity|sex|genital|corpse|funeral|blood|wound|logo|coat of arms|flag of|map of|diagram)", re.I)


def api(params):
    params = dict(params)
    params.setdefault("format", "json")
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def candidates(mode, query, limit):
    if mode == "search":
        data = api({
            "action": "query", "generator": "search", "gsrsearch": query,
            "gsrnamespace": "6", "gsrlimit": str(limit),
            "prop": "imageinfo", "iiprop": "url|extmetadata|size",
            "iiurlwidth": "1400",
        })
    else:
        data = api({
            "action": "query", "generator": "categorymembers", "gcmtitle": "Category:" + query,
            "gcmtype": "file", "gcmlimit": str(limit),
            "prop": "imageinfo", "iiprop": "url|extmetadata|size",
            "iiurlwidth": "1400",
        })
    pages = list(data.get("query", {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 0))
    return pages


def meta_value(meta, key):
    v = meta.get(key, {}).get("value", "")
    v = re.sub(r"<[^>]+>", "", str(v))
    return re.sub(r"\s+", " ", v).strip()


def main():
    manifest_path = os.path.join(ROOT, "assets", "img", "manifest.json")
    manifest = {}
    if os.path.exists(manifest_path):
        with open(manifest_path) as f:
            manifest = json.load(f)

    for slug, mode, query, limit in SOURCES:
        print(f"== {slug}: {query}")
        try:
            pages = candidates(mode, query, limit)
        except Exception as e:
            print("  API error", e)
            continue
        n = 0
        for p in pages:
            info = p.get("imageinfo", [{}])[0]
            title = p.get("title", "").replace("File:", "")
            if not info or "thumburl" not in info:
                continue
            if BLOCK.search(title):
                continue
            w, h = info.get("width", 0), info.get("height", 0)
            if w < 900 or h < 600:
                continue
            if w / h < 0.75:  # skip strong portraits for hero/card use
                continue
            m = info.get("extmetadata", {})
            key = f"{slug}-{n}"
            dest = os.path.join(RAW, key + ".jpg")
            n += 1
            if not os.path.exists(dest):
                try:
                    req = urllib.request.Request(info["thumburl"], headers={"User-Agent": UA})
                    with urllib.request.urlopen(req, timeout=90) as r, open(dest, "wb") as f:
                        f.write(r.read())
                except Exception as e:
                    print("  download error", e)
                    continue
                time.sleep(0.2)
            manifest[key] = {
                "title": title,
                "artist": meta_value(m, "Artist"),
                "license": meta_value(m, "LicenseShortName"),
                "licenseUrl": meta_value(m, "LicenseUrl"),
                "source": info.get("descriptionurl", ""),
                "width": w, "height": h,
                "query": query,
            }
            print("  ", key, title[:70], "|", manifest[key]["license"])
        with open(manifest_path, "w") as f:
            json.dump(manifest, f, ensure_ascii=False, indent=1)
    print("done:", len(manifest))


if __name__ == "__main__":
    main()

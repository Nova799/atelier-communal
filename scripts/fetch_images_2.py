#!/usr/bin/env python3
"""Second pass: targeted categories, concurrent downloads."""
import json, os, re, urllib.parse, urllib.request, concurrent.futures

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "assets", "img", "raw")
os.makedirs(RAW, exist_ok=True)
UA = "BeninCommuneTemplate/1.0 (design research)"
API = "https://commons.wikimedia.org/w/api.php"

SOURCES = [
    ("parakou-3", "Category:Parakou", 24),
    ("parakou-4", "Parakou Benin market", 12),
    ("parakou-5", "Parakou Benin road", 12),
    ("ouidah-4", "Category:Ouidah", 24),
    ("benin-craft-2", "Category:Textiles of Benin", 20),
    ("benin-mobility-1", "Category:Motorcycle taxis in Benin", 12),
    ("benin-landscape-1", "Category:Pendjari National Park", 16),
    ("benin-people-1", "Category:Schools in Benin", 16),
    ("benin-culture-1", "Category:Festivals in Benin", 16),
    ("benin-architecture-1", "Category:Buildings in Benin", 16),
    ("benin-food-2", "Category:Cuisine of Benin", 20),
    ("benin-market-3", "Category:Markets in Benin", 16),
]
BLOCK = re.compile(r"(nude|nudity|sex|genital|corpse|funeral|blood|wound|logo|coat of arms|flag of|map of|diagram|stone|rock)", re.I)


def api(params):
    params = dict(params); params.setdefault("format", "json")
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(params), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.load(r)


def get(slug, query, limit):
    print(f"== {slug}: {query}", flush=True)
    try:
        if query.startswith("Category:"):
            data = api({"action":"query","generator":"categorymembers","gcmtitle":query,"gcmtype":"file",
                        "gcmlimit":str(limit),"prop":"imageinfo","iiprop":"url|extmetadata|size","iiurlwidth":"1400"})
        else:
            data = api({"action":"query","generator":"search","gsrsearch":query,"gsrnamespace":"6",
                        "gsrlimit":str(limit),"prop":"imageinfo","iiprop":"url|extmetadata|size","iiurlwidth":"1400"})
    except Exception as e:
        print(" api", e); return []
    pages = list(data.get("query", {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 0))
    out = []
    for p in pages:
        info = p.get("imageinfo", [{}])[0]
        title = p.get("title", "").replace("File:", "")
        if not info or "thumburl" not in info or BLOCK.search(title): continue
        w, h = info.get("width", 0), info.get("height", 0)
        if w < 1000 or h < 650 or w / h < 0.8: continue
        out.append((p, info, title))
    print(f"   {len(out)} candidates", flush=True)
    return out


def download(item):
    key, info, title, slug = item
    dest = os.path.join(RAW, key + ".jpg")
    if os.path.exists(dest): return None
    try:
        req = urllib.request.Request(info["thumburl"], headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as f:
            f.write(r.read())
        return key
    except Exception as e:
        print(" dl", key, e); return None


def main():
    manifest_path = os.path.join(ROOT, "assets", "img", "manifest.json")
    manifest = json.load(open(manifest_path)) if os.path.exists(manifest_path) else {}
    jobs = []
    for slug, query, limit in SOURCES:
        pages = get(slug, query, limit)
        for i, (p, info, title) in enumerate(pages):
            key = f"{slug}-{i}"
            m = info.get("extmetadata", {})
            def mv(k):
                v = re.sub(r"<[^>]+>", "", str(m.get(k, {}).get("value", "")))
                return re.sub(r"\s+", " ", v).strip()
            manifest[key] = {"title": title, "artist": mv("Artist"), "license": mv("LicenseShortName"),
                             "licenseUrl": mv("LicenseUrl"), "source": info.get("descriptionurl", ""),
                             "width": info.get("width"), "height": info.get("height"), "query": query}
            jobs.append((key, info, title, slug))
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
        done = [r for r in ex.map(download, jobs) if r]
    print("downloaded", len(done))


if __name__ == "__main__":
    main()

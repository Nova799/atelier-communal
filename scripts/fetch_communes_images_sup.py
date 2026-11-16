#!/usr/bin/env python3
"""Collecte complémentaire ciblée (catégories Commons) pour les communes minces.

Écrit assets/img/raw2/<slug>/1xx.jpg et fusionne assets/img/manifest-communes.json
sans écraser les fichiers déjà téléchargés.
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "assets", "img", "raw2")
MANIFEST = os.path.join(ROOT, "assets", "img", "manifest-communes.json")
os.makedirs(RAW, exist_ok=True)

UA = "AtelierCommunalDemo/1.0 (design research; demo site; contact local)"
API = "https://commons.wikimedia.org/w/api.php"

SOURCES = {
    "malanville": [
        "Category:Malanville (commune)",
        "Malanville Niger",
        "Malanville riz",
        "Malanville marché",
        "Malanville fleuve",
        "Malanville frontière",
        "Category:Garou, Benin",
        "Category:Guéné, Benin",
        "Lac de Guéné",
        "Marché de Garou",
    ],
    "banikoara": [
        "Category:Banikoara (commune)",
        "Banikoara coton",
        "Banikoara marché",
    ],
    "sakete": [
        "Category:Sakété",
        "Sakété marché",
        "Sakété Bénin",
        "Category:Ita-Djèbou",
        "Category:Takon",
        "Forêt sacrée de Takon",
        "Palais royal de Takon",
    ],
    "djougou": [
        "Category:Djougou",
        "Category:Lac de Djougou",
        "Djougou paysage",
        "Djougou route",
    ],
    "bembereke": [
        "Category:Bembèrèkè",
        "Bembèrèkè",
        "Bembereke marché",
    ],
    "dassa": [
        "Category:Dassa-Zoumé",
        "Category:Grotte Notre-Dame d'Arigbo",
        "Dassa-Zoumé collines",
        "Dassa-Zoumé marché",
    ],
    "savalou": [
        "Category:Savalou",
        "Savalou marché",
        "Savalou paysage",
    ],
    "ketou": [
        "Category:Kétou",
        "Kétou marché",
        "Kétou palais",
    ],
    "tchaourou": [
        "Category:Tchaourou",
        "Tchaourou forêt",
        "Tchaourou gare",
    ],
    "boukoumbe": [
        "Category:Boukoumbé",
        "Boukoumbé tata",
        "Boukoumbé paysage",
    ],
    "adjohoun": [
        "Category:Adjohoun",
        "Adjohoun Ouémé",
        "Adjohoun marché",
    ],
    "kandi": [
        "Category:Kandi, Benin",
        "Category:Kandi I",
        "Category:Kandi II",
        "Category:Kandi III",
    ],
    "allada": [
        "Category:Allada",
        "Allada Bénin",
        "Palais royal Allada",
        "Allada marché",
    ],
    "cove": [
        "Category:Covè",
        "Covè Bénin",
        "Collège Covè Bénin",
        "Covè marché",
    ],
    "dogbo": [
        "Category:Dogbo",
        "Dogbo Bénin",
        "Dogbo Tota",
        "Colline Tota Bénin",
        "Dogbo marché",
    ],
}

BLOCK = re.compile(
    r"(map|carte|coat of arms|blason|flag of|drapeau|diagram|schema|plan of|logo|"
    r"stamp|timbre|banknote|coin|portrait|selfie|nude|corpse|grave|tombe|funeral|"
    r"wound|blood|insect|plant|flower|fungus|bird|fish|lane cove|australia|ignore|svg|"
    r"bust|statue|monument|army|soldier|military|mayor|maire|diocese|bishop|"
    r"\.webm|\.ogg|\.pdf)",
    re.I,
)
ALLOWED = ("cc0", "cc by", "cc-by", "public domain", "pd-", "pd ")


def api(params):
    params = dict(params)
    params.setdefault("format", "json")
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=45) as r:
                return json.load(r)
        except Exception as e:
            wait = 10 * (attempt + 1)
            print(f"   retry {attempt + 1} ({e}) dans {wait}s", flush=True)
            time.sleep(wait)
    return {}


def extmeta(info):
    md = info.get("extmetadata") or {}

    def val(key):
        v = md.get(key, {}) or {}
        return re.sub(r"<[^>]+>", " ", str(v.get("value", ""))).strip()

    return {
        "artist": val("Artist") or "Auteur inconnu",
        "license": val("LicenseShortName"),
        "licenseUrl": val("LicenseUrl"),
        "description": val("ImageDescription")[:240],
    }


def candidates(query, limit):
    if query.startswith("Category:"):
        params = {"action": "query", "generator": "categorymembers", "gcmtitle": query,
                  "gcmtype": "file", "gcmlimit": str(limit), "prop": "imageinfo",
                  "iiprop": "url|extmetadata|size", "iiurlwidth": "1600"}
    else:
        params = {"action": "query", "generator": "search", "gsrsearch": query,
                  "gsrnamespace": "6", "gsrlimit": str(limit), "prop": "imageinfo",
                  "iiprop": "url|extmetadata|size", "iiurlwidth": "1600"}
    data = api(params)
    pages = list(data.get("query", {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 0))
    out = []
    for p in pages:
        title = p.get("title", "")[5:]
        if BLOCK.search(title):
            continue
        info = (p.get("imageinfo") or [{}])[0]
        if (info.get("width") or 0) < 900:
            continue
        w, h = info.get("width", 1), info.get("height", 1)
        if w / max(1, h) < 1.0:
            continue
        meta = extmeta(info)
        lic = meta["license"].lower()
        if not any(k in lic for k in ALLOWED):
            continue
        src = info.get("thumburl") or info.get("url")
        if not src:
            continue
        out.append({
            "title": title,
            "source": "https://commons.wikimedia.org/wiki/File:" + urllib.parse.quote(title.replace(" ", "_")),
            "thumb": src,
            "width": info.get("width"),
            "height": info.get("height"),
            **meta,
        })
    return out


def main():
    manifest = json.load(open(MANIFEST, encoding="utf8")) if os.path.exists(MANIFEST) else []
    known = {(x["slug"], x["n"]) for x in manifest}
    added = []

    def save():
        with open(MANIFEST, "w", encoding="utf8") as f:
            json.dump(manifest, f, ensure_ascii=False, indent=1)

    def record(item):
        manifest.append(item)
        added.append(item)
        save()
    wanted = set(sys.argv[1:])
    sources = {k: v for k, v in SOURCES.items() if not wanted or k in wanted}
    for slug, queries in sources.items():
        seen = set()
        pool = []
        for q in queries:
            for c in candidates(q, 14):
                if c["title"] in seen:
                    continue
                seen.add(c["title"])
                pool.append(c)
            time.sleep(2.0)
        print(f"{slug:15} {len(pool):3} nouveaux candidats", flush=True)
        folder = os.path.join(RAW, slug)
        os.makedirs(folder, exist_ok=True)
        for i, cand in enumerate(pool):
            n = 100 + i
            if (slug, n) in known:
                continue
            path = os.path.join(folder, f"{n:03d}.jpg")
            if os.path.exists(path) and os.path.getsize(path) > 20000:
                record(cand | {"slug": slug, "n": n, "file": os.path.relpath(path, ROOT), "ok": True})
                continue
            for attempt in range(5):
                try:
                    req = urllib.request.Request(cand["thumb"], headers={"User-Agent": UA})
                    with urllib.request.urlopen(req, timeout=90) as r:
                        data = r.read()
                    if len(data) < 20000:
                        raise ValueError("fichier trop petit")
                    with open(path, "wb") as f:
                        f.write(data)
                    record(cand | {"slug": slug, "n": n,
                                   "file": os.path.relpath(path, ROOT),
                                   "ok": True, "bytes": len(data)})
                    time.sleep(2.0)
                    break
                except Exception:
                    time.sleep(5 * (attempt + 1))
    save()
    print(f"✓ {len(added)} images ajoutées, total {len(manifest)}")


if __name__ == "__main__":
    main()

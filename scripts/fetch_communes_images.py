#!/usr/bin/env python3
"""Collecte de photographies Commons pour les 20 nouvelles communes.

Écrit assets/img/raw2/<slug>/<n>.jpg + un manifeste JSON (titre, auteur,
licence, URL source). Rien n'est publié : la sélection se fait après
planche-contact et revue visuelle.

Usage : python3 scripts/fetch_communes_images.py
"""
import concurrent.futures
import json
import os
import re
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "assets", "img", "raw2")
MANIFEST = os.path.join(ROOT, "assets", "img", "manifest-communes.json")
os.makedirs(RAW, exist_ok=True)

UA = "AtelierCommunalDemo/1.0 (design research; demo site; contact local)"
API = "https://commons.wikimedia.org/w/api.php"

# slug: [requêtes, limite par requête]
SOURCES = {
    "abomey-calavi": ["Abomey-Calavi", "Université d'Abomey-Calavi", "Lac Nokoué Bénin"],
    "allada": ["Allada Bénin", "Palais royal Allada", "Allada town"],
    "bohicon": ["Bohicon", "Gare Bohicon Bénin", "Bohicon marché"],
    "cove": ["Covè Bénin", "Cové Zou Bénin", "Collège Covè Bénin"],
    "lokossa": ["Lokossa", "Cathédrale Lokossa", "Mono Bénin paysage"],
    "grand-popo": ["Grand-Popo", "Grand Popo plage", "Bouche du Mono"],
    "dogbo": ["Dogbo Bénin", "Dogbo Tota", "Tota Bénin"],
    "aplahoue": ["Aplahoué", "Aplahoue Bénin", "Couffo Bénin"],
    "djougou": ["Djougou", "Djougou Bénin marché", "Donga Bénin paysage"],
    "kandi": ["Kandi Bénin", "Kandi Benin town", "Alibori paysage"],
    "banikoara": ["Banikoara", "Banikoara coton", "Alibori coton"],
    "malanville": ["Malanville", "Fleuve Niger Malanville", "Malanville riz"],
    "tchaourou": ["Tchaourou", "Bétérou Bénin", "Tchaourou gare"],
    "bembereke": ["Bembéréké", "Bembereke Bénin", "Borgou route"],
    "dassa": ["Dassa-Zoumè", "Dassa Bénin collines", "Grotte Dassa"],
    "savalou": ["Savalou", "Savalou Bénin", "Collines Savalou"],
    "ketou": ["Kétou", "Kétou Bénin palais", "Ketu Nigeria Benin"],
    "sakete": ["Sakété Bénin", "Sakete Benin", "Plateau Bénin paysage"],
    "boukoumbe": ["Boukoumbé", "Tata Somba Boukoumbé", "Atacora paysage"],
    "adjohoun": ["Adjohoun", "Adjohoun Bénin", "Ouémé fleuve"],
}

BLOCK = re.compile(
    r"(map|carte|coat of arms|blason|flag of|drapeau|diagram|schema|plan of|logo|"
    r"stamp|timbre|banknote|coin|statue of liberty|portrait|selfie|nude|corpse|"
    r"grave|tombe|funeral|wound|blood|insect|plant|flower|fungus|bird|fish|"
    r"lane cove|australia|ignore|svg)",
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
        except Exception as e:  # 429, timeout, 5xx
            wait = 4 * (attempt + 1)
            print(f"   retry {attempt + 1} ({e}) dans {wait}s", flush=True)
            time.sleep(wait)
    return {}


def extmeta(info):
    md = (info.get("extmetadata") or {})
    def val(key):
        v = md.get(key, {}) or {}
        return re.sub(r"<[^>]+>", " ", str(v.get("value", ""))).strip()
    return {
        "artist": val("Artist") or "Auteur inconnu",
        "license": val("LicenseShortName"),
        "licenseUrl": val("LicenseUrl"),
        "description": val("ImageDescription")[:240],
    }


def candidates(query, limit, slug):
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
        if (info.get("width") or 0) < 1100:
            continue
        w, h = info.get("width", 1), info.get("height", 1)
        if w / max(1, h) < 1.05:  # paysage uniquement
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


def fetch_one(job):
    slug, idx, cand = job
    folder = os.path.join(RAW, slug)
    os.makedirs(folder, exist_ok=True)
    path = os.path.join(folder, f"{idx:02d}.jpg")
    if os.path.exists(path) and os.path.getsize(path) > 20000:
        return cand | {"slug": slug, "n": idx, "file": path, "ok": True}
    for attempt in range(4):
        try:
            req = urllib.request.Request(cand["thumb"], headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as r:
                data = r.read()
            if len(data) < 20000:
                raise ValueError("fichier trop petit")
            with open(path, "wb") as f:
                f.write(data)
            return cand | {"slug": slug, "n": idx, "file": path, "ok": True, "bytes": len(data)}
        except Exception as e:
            time.sleep(3 * (attempt + 1))
    return cand | {"slug": slug, "n": idx, "ok": False}


def main():
    queried = {}
    for slug, queries in SOURCES.items():
        seen, pool = set(), []
        for q in queries:
            for c in candidates(q, 12, slug):
                if c["title"] in seen:
                    continue
                seen.add(c["title"])
                pool.append(c)
            time.sleep(1.2)
        # priorité aux résultats de la première requête, puis diversité des titres
        queried[slug] = pool[:12]
        print(f"{slug:15} {len(pool):3} candidats", flush=True)

    jobs = []
    for slug, pool in queried.items():
        for i, c in enumerate(pool):
            jobs.append((slug, i, c))
    print(f"Téléchargements : {len(jobs)}", flush=True)
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
        for r in ex.map(fetch_one, jobs):
            results.append(r)
            if len(results) % 20 == 0:
                print(f"  {len(results)}/{len(jobs)}", flush=True)

    manifest = [r for r in results if r.get("ok")]
    for r in manifest:
        r["file"] = os.path.relpath(r["file"], ROOT)
    with open(MANIFEST, "w", encoding="utf8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    print(f"✓ {len(manifest)} images dans {MANIFEST}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Download self-hosted WOFF2 subsets (latin + latin-ext) from Google Fonts."""
import os, re, urllib.parse, urllib.request, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "fonts")
os.makedirs(OUT, exist_ok=True)
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"

FAMILIES = {
    "fraunces": ("Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900", "fraunces"),
    "instrument-sans": ("Instrument+Sans:ital,wght@0,400..700;1,400..700", "instrument-sans"),
    "jetbrains-mono": ("JetBrains+Mono:wght@400..700", "jetbrains-mono"),
    "bodoni-moda": ("Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900", "bodoni-moda"),
    "dm-sans": ("DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000", "dm-sans"),
    "literata": ("Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900", "literata"),
    "bricolage": ("Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800", "bricolage"),
    "sora": ("Sora:wght@100..800", "sora"),
    "archivo": ("Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900", "archivo"),
    "archivo-black": ("Archivo+Black", "archivo-black"),
    "syne": ("Syne:wght@400..800", "syne"),
}

def get_css(query):
    url = "https://fonts.googleapis.com/css2?family=" + query + "&display=swap"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode()

def parse(css):
    blocks = re.findall(r"/\*\s*([^*]+?)\s*\*/\s*@font-face\s*\{(.*?)\}", css, re.S)
    out = []
    for subset, body in blocks:
        subset = subset.strip()
        if subset not in ("latin", "latin-ext"):
            continue
        style = re.search(r"font-style:\s*(\w+)", body).group(1)
        weight = re.search(r"font-weight:\s*([^;]+);", body).group(1).strip()
        url = re.search(r"url\((https://[^)]+\.woff2)\)", body).group(1)
        rng = re.search(r"unicode-range:\s*([^;]+);", body).group(1).strip()
        out.append({"subset": subset, "style": style, "weight": weight, "url": url, "range": rng})
    return out

for slug, (query, family) in FAMILIES.items():
    css = get_css(query)
    faces = parse(css)
    entries = []
    for f in faces:
        name = f"{slug}-{f['style']}-{f['subset']}.woff2"
        dest = os.path.join(OUT, name)
        if not os.path.exists(dest):
            req = urllib.request.Request(f["url"], headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as fh:
                fh.write(r.read())
        entries.append(f"""@font-face {{
  font-family: '{family}';
  font-style: {f['style']};
  font-weight: {f['weight']};
  font-display: swap;
  src: url('/assets/fonts/{name}') format('woff2');
  unicode-range: {f['range']};
}}""")
    with open(os.path.join(OUT, slug + ".css"), "w") as fh:
        fh.write("\n".join(entries) + "\n")
    print(slug, len(entries), "faces", round(sum(os.path.getsize(os.path.join(OUT, n)) for n in os.listdir(OUT) if n.startswith(slug + "-"))/1024), "KB")

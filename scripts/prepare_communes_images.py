#!/usr/bin/env python3
"""Dérivés WebP + métadonnées pour les 20 nouvelles communes.

Fusionne les clés dans assets/img/library.json sans toucher aux 66 clés
existantes. Les fichiers source sont dans assets/img/raw2/<slug>/<n>.jpg et
leurs crédits dans assets/img/manifest-communes.json.
"""
import json
import os

from PIL import Image, ImageStat

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "assets", "img", "raw2")
OUT = os.path.join(ROOT, "assets", "img")
MANIFEST = os.path.join(OUT, "manifest-communes.json")
LIBRARY = os.path.join(OUT, "library.json")

# clé: (slug, n, alt, caption, lieu)
CURATED = {
    # Kandi
    "kandi-ville": ("kandi", 104,
        "Bureau de l'arrondissement de Kandi 1, devant la route",
        "Le bureau d'arrondissement de Kandi 1", "Kandi"),
    "kandi-site": ("kandi", 100,
        "Auberge et centre de formation UD-CVPC-Alibori, à Kandi",
        "Le centre de formation UD-CVPC", "Kandi"),
    "kandi-paysage": ("kandi", 112,
        "Concessions, arbres et savane aux portes de Kandi",
        "La savane et les concessions", "Kandi"),
    "kandi-vie": ("kandi", 116,
        "Portail de l'école maternelle publique de Kandi 1",
        "L'école maternelle de Kandi 1", "Kandi"),

    # Dogbo
    "dogbo-ville": ("dogbo", 1,
        "Entrée du site des hommes à queue, à Dogbo",
        "L'entrée du site", "Dogbo"),
    "dogbo-site": ("dogbo", 0,
        "Salle d'accueil au toit de chaume du site des hommes à queue",
        "L'accueil du site", "Dogbo"),
    "dogbo-paysage": ("dogbo", 2,
        "Galerie souterraine du site des hommes à queue",
        "La galerie souterraine", "Dogbo"),
    "dogbo-vie": ("dogbo", 6,
        "Entrée du campus des sciences et techniques agricoles de Dogbo",
        "Le campus agricole", "Dogbo"),

    # Abomey-Calavi
    "abomey-calavi-ville": ("abomey-calavi", 0,
        "Vue sur les axes routiers et les toits d'Abomey-Calavi",
        "Abomey-Calavi, ville en croissance", "Abomey-Calavi"),
    "abomey-calavi-site": ("abomey-calavi", 8,
        "Entrée de l'Université d'Abomey-Calavi",
        "Le campus universitaire", "Abomey-Calavi"),
    "abomey-calavi-paysage": ("abomey-calavi", 3,
        "Étals et circulation au marché d'Abomey-Calavi",
        "Le marché, au quotidien", "Abomey-Calavi"),
    "abomey-calavi-vie": ("abomey-calavi", 2,
        "Jeunes jouant au football sur un terrain de rue à Calavi",
        "Le football de rue", "Abomey-Calavi"),

    # Allada
    "allada-ville": ("allada", 1,
        "La voie inter-État traversant la dépression d'Allada",
        "La traversée d'Allada", "Allada"),
    "allada-site": ("allada", 11,
        "Portail du palais royal d'Allada",
        "Le palais royal", "Allada"),
    "allada-paysage": ("allada", 8,
        "Reliefs et végétation autour de la voie inter-État, à Allada",
        "La dépression d'Allada", "Allada"),
    "allada-vie": ("allada", 0,
        "Statue de divinité vodun au lac sacré d'Awouto, à Allada",
        "Le lac sacré d'Awouto", "Allada"),

    # Bohicon
    "bohicon-ville": ("bohicon", 1,
        "Carrefour et panneaux à l'entrée de Bohicon",
        "À l'entrée de Bohicon", "Bohicon"),
    "bohicon-site": ("bohicon", 10,
        "Le bâtiment de la gare de Bohicon",
        "La gare, mémoire du rail", "Bohicon"),
    "bohicon-paysage": ("bohicon", 6,
        "La voie inter-État et ses abords à Bohicon",
        "Les routes de Bohicon", "Bohicon"),
    "bohicon-vie": ("bohicon", 11,
        "Pains et biscuits exposés à la gare routière de Bohicon",
        "Les étals de la gare", "Bohicon"),

    # Covè
    "cove-ville": ("cove", 0,
        "Palmeraies et végétation aux abords du Zou, à Covè",
        "Les palmeraies de Covè", "Covè"),
    "cove-site": ("cove", 2,
        "Le Zou et ses berges dans la commune de Covè",
        "Le fleuve Zou", "Covè"),
    "cove-paysage": ("cove", 6,
        "Bas-fonds cultivés près du Nankava, à Covè",
        "Les bas-fonds du Nankava", "Covè"),
    "cove-vie": ("cove", 3,
        "Palmiers et cultures de la plaine à Covè",
        "La plaine des palmiers", "Covè"),

    # Lokossa
    "lokossa-ville": ("lokossa", 1,
        "Entrée de la préfecture de Lokossa",
        "Le centre administratif", "Lokossa"),
    "lokossa-site": ("lokossa", 11,
        "La cathédrale Saint-Pierre-Claver de Lokossa",
        "La cathédrale", "Lokossa"),
    "lokossa-paysage": ("lokossa", 3,
        "Étals et circulation dans une rue de Lokossa",
        "Scène de rue", "Lokossa"),
    "lokossa-vie": ("lokossa", 4,
        "Le marché et ses deux-roues au centre de Lokossa",
        "Le marché de Lokossa", "Lokossa"),

    # Grand-Popo
    "grand-popo-ville": ("grand-popo", 2,
        "La plage de Grand-Popo, entre océan et lagune",
        "La plage", "Grand-Popo"),
    "grand-popo-site": ("grand-popo", 0,
        "La passerelle de bois de Grand-Popo",
        "La passerelle vers la lagune", "Grand-Popo"),
    "grand-popo-paysage": ("grand-popo", 6,
        "Pirogue échouée sur la plage de Grand-Popo",
        "Pirogue et océan", "Grand-Popo"),
    "grand-popo-vie": ("grand-popo", 4,
        "Abri de plage et sacs de pêcheurs à Grand-Popo",
        "La vie de plage", "Grand-Popo"),

    # Aplahoué
    "aplahoue-ville": ("aplahoue", 2,
        "La mairie d'Aplahoué",
        "La mairie", "Aplahoué"),
    "aplahoue-site": ("aplahoue", 4,
        "La préfecture du Couffo à Aplahoué",
        "La préfecture", "Aplahoué"),
    "aplahoue-paysage": ("aplahoue", 0,
        "La place publique et le monument aux morts à Aplahoué",
        "La place publique", "Aplahoué"),
    "aplahoue-vie": ("aplahoue", 3,
        "L'hôpital de zone d'Aplahoué",
        "Le service de santé", "Aplahoué"),

    # Djougou
    "djougou-ville": ("djougou", 0,
        "Une rue de Djougou",
        "Scène de rue à Djougou", "Djougou"),
    "djougou-site": ("djougou", 2,
        "Le marché de Partago, dans la commune de Djougou",
        "Le marché de Partago", "Djougou"),
    "djougou-paysage": ("djougou", 101,
        "Vue sur la campagne verdoyante autour de Djougou",
        "La campagne de la Donga", "Djougou"),
    "djougou-vie": ("djougou", 10,
        "Poterie exposée au marché de Djougou",
        "Poterie du marché", "Djougou"),

    # Banikoara
    "banikoara-ville": ("banikoara", 101,
        "L'hôtel de ville de Banikoara",
        "Le centre administratif", "Banikoara"),
    "banikoara-site": ("banikoara", 0,
        "La route menant à Banikoara",
        "La route de Banikoara", "Banikoara"),
    "banikoara-paysage": ("banikoara", 1,
        "Savane et champs aux abords de Banikoara",
        "La savane cotonnière", "Banikoara"),
    "banikoara-vie": ("banikoara", 3,
        "Riziculture dans la plaine de Banikoara",
        "Les rizières", "Banikoara"),

    # Malanville
    "malanville-ville": ("malanville", 111,
        "Femmes portant des bassines sur le pont de Malanville",
        "Sur le pont, entre ville et fleuve", "Malanville"),
    "malanville-site": ("malanville", 113,
        "L'île de Lété sur le fleuve Niger, photographie d'archives",
        "L'île de Lété, sur le Niger (archive)", "Malanville"),
    "malanville-paysage": ("malanville", 132,
        "La lagune de Guéné, ses bananiers et ses berges cultivées",
        "La lagune de Guéné", "Guéné"),
    "malanville-vie": ("malanville", 129,
        "Femmes lavant le linge au bord de la lagune de Guéné",
        "La vie au bord de l'eau", "Guéné"),

    # Tchaourou
    "tchaourou-ville": ("tchaourou", 101,
        "Entrée de Tchaourou et sa route bordée de champs",
        "L'entrée de Tchaourou", "Tchaourou"),
    "tchaourou-site": ("tchaourou", 6,
        "Le pont de Bétérou sur l'Ouémé",
        "Le pont de Bétérou", "Tchaourou"),
    "tchaourou-paysage": ("tchaourou", 117,
        "Piste de latérite traversant la forêt de l'Ouémé supérieure",
        "La piste forestière", "Tchaourou"),
    "tchaourou-vie": ("tchaourou", 0,
        "Scène de marché à Tchaourou",
        "Le marché de Tchaourou", "Tchaourou"),

    # Bembéréké
    "bembereke-ville": ("bembereke", 101,
        "Panneau d'entrée de Bembéréké au bord de la route",
        "L'entrée de Bembéréké", "Bembéréké"),
    "bembereke-site": ("bembereke", 5,
        "Le foyer catholique de Bembéréké",
        "Le foyer catholique", "Bembéréké"),
    "bembereke-paysage": ("bembereke", 106,
        "Rizière et savane arborée autour de Bembéréké",
        "Les rizières du Borgou", "Bembéréké"),
    "bembereke-vie": ("bembereke", 3,
        "École primaire publique de Bembéréké",
        "L'école du village", "Bembéréké"),

    # Dassa-Zoumè
    "dassa-ville": ("dassa", 1,
        "Vue de Dassa-Zoumè depuis la colline des Princes",
        "Dassa vue des collines", "Dassa-Zoumè"),
    "dassa-site": ("dassa", 9,
        "La grotte Notre-Dame d'Arigbo",
        "La grotte d'Arigbo", "Dassa-Zoumè"),
    "dassa-paysage": ("dassa", 6,
        "Les collines de Dassa-Zoumè",
        "Les collines", "Dassa-Zoumè"),
    "dassa-vie": ("dassa", 2,
        "Cérémonie au calvaire de Dassa-Zoumè",
        "Au calvaire", "Dassa-Zoumè"),

    # Savalou
    "savalou-ville": ("savalou", 0,
        "Monument à Savalou",
        "Le monument, au centre-ville", "Savalou"),
    "savalou-site": ("savalou", 2,
        "Site vodun de Dancoli, à Savalou",
        "Le site de Dancoli", "Savalou"),
    "savalou-paysage": ("savalou", 108,
        "Vue sur la ville et les collines de Savalou",
        "Savalou et ses collines", "Savalou"),
    "savalou-vie": ("savalou", 106,
        "Femmes portant des pots sur une rue de Savalou",
        "Le transport des pots", "Savalou"),

    # Kétou
    "ketou-ville": ("ketou", 7,
        "Le musée Akaba Idena, ancien palais de Kétou",
        "Le palais et son musée", "Kétou"),
    "ketou-site": ("ketou", 3,
        "La cour du palais royal au musée Akaba Idena",
        "La cour du palais", "Kétou"),
    "ketou-paysage": ("ketou", 101,
        "Allée d'arbres à l'entrée de Kétou",
        "L'entrée de Kétou", "Kétou"),
    "ketou-vie": ("ketou", 0,
        "Sculpteurs sur bois à Kétou",
        "Les sculpteurs de Kétou", "Kétou"),

    # Sakété
    "sakete-ville": ("sakete", 100,
        "Entrée du centre universitaire de Sakété",
        "Le centre universitaire", "Sakété"),
    "sakete-site": ("sakete", 104,
        "La route de Sakété, photographie d'archives",
        "La route de Sakété (archive)", "Sakété"),
    "sakete-paysage": ("sakete", 4,
        "Vue du plateau d'Agony, photographie d'archives",
        "Le plateau d'Agony (archive)", "Sakété"),
    "sakete-vie": ("sakete", 3,
        "Une rue de Sakété, photographie d'archives",
        "Une rue de Sakété (archive)", "Sakété"),

    # Boukoumbé
    "boukoumbe-ville": ("boukoumbe", 104,
        "Rue commerçante de Boukoumbé",
        "La rue commerçante", "Boukoumbé"),
    "boukoumbe-site": ("boukoumbe", 113,
        "Tata de terre à toit de chaume, à Boukoumbé",
        "Le tata, architecture vivante", "Boukoumbé"),
    "boukoumbe-paysage": ("boukoumbe", 117,
        "Collines verdoyantes à l'entrée de Boukoumbé",
        "Les collines de l'Atacora", "Boukoumbé"),
    "boukoumbe-vie": ("boukoumbe", 108,
        "Rue du marché et échoppes de Boukoumbé",
        "Le marché de proximité", "Boukoumbé"),

    # Adjohoun
    "adjohoun-ville": ("adjohoun", 10,
        "Mototaxi dans la commune d'Adjohoun",
        "Le mototaxi, au quotidien", "Adjohoun"),
    "adjohoun-site": ("adjohoun", 11,
        "Le fleuve Ouémé et sa plaine inondable",
        "L'Ouémé et sa plaine", "Adjohoun"),
    "adjohoun-paysage": ("adjohoun", 0,
        "Oiseaux de la plaine inondée de l'Ouémé",
        "La plaine et ses oiseaux", "Adjohoun"),
    "adjohoun-vie": ("adjohoun", 4,
        "Cases rondes de la plaine de l'Ouémé, image d'archives",
        "Habitat de la plaine", "Adjohoun"),
}

HERO_SUFFIX = "-ville"


def main():
    manifest = json.load(open(MANIFEST, encoding="utf8"))
    index = {(entry["slug"], int(entry["n"])): entry for entry in manifest}
    library = json.load(open(LIBRARY, encoding="utf8")) if os.path.exists(LIBRARY) else {}

    added, skipped = 0, []
    for name, (slug, n, alt, caption, place) in CURATED.items():
        src = None
        for pattern in (f"{n:03d}.jpg", f"{n:02d}.jpg", f"{n}.jpg"):
            candidate = os.path.join(RAW, slug, pattern)
            if os.path.exists(candidate):
                src = candidate
                break
        if src is None:
            skipped.append(f"{name} (fichier absent dans {os.path.join(RAW, slug)})")
            continue
        meta = index.get((slug, n), {})
        im = Image.open(src).convert("RGB")
        if im.width < 640:
            skipped.append(f"{name} (largeur {im.width}px)")
            continue
        widths = [640, 1280] + ([1920] if name.endswith(HERO_SUFFIX) else [])
        made = []
        for w in widths:
            if im.width < w:
                continue
            h = round(im.height * (w / im.width))
            dest = os.path.join(OUT, f"{name}-{w}.webp")
            im.resize((w, h), Image.LANCZOS).save(dest, "WEBP", quality=80, method=6)
            made.append({"w": w, "h": h, "file": f"/assets/img/{name}-{w}.webp",
                         "bytes": os.path.getsize(dest)})
        tint = ImageStat.Stat(im.resize((1, 1))).mean
        library[name] = {
            "alt": alt,
            "caption": caption,
            "place": place,
            "sources": made,
            "tint": "#%02x%02x%02x" % tuple(int(max(0, min(255, c))) for c in tint),
            "credit": meta.get("artist") or "Wikimedia Commons",
            "license": meta.get("license") or "CC",
            "licenseUrl": meta.get("licenseUrl") or "",
            "source": meta.get("source") or "",
        }
        added += 1
        print(f"{name:28} {made[-1]['w']:>4}px")

    with open(LIBRARY, "w", encoding="utf8") as f:
        json.dump(library, f, ensure_ascii=False, indent=1)

    print(f"\n{added} clés préparées, {len(library)} au total")
    print(f"{sum(len(v['sources']) for v in library.values())} fichiers, "
          f"{round(sum(s['bytes'] for v in library.values() for s in v['sources']) / 1e6, 1)} Mo")
    if skipped:
        print("\nIGNORÉ:")
        for line in skipped:
            print(" -", line)


if __name__ == "__main__":
    main()

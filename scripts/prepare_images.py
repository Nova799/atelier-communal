#!/usr/bin/env python3
"""Crop-free responsive WebP derivatives + curated metadata for the demo site."""
import json, os
from PIL import Image, ImageStat

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "assets", "img", "raw")
OUT = os.path.join(ROOT, "assets", "img")
os.makedirs(OUT, exist_ok=True)

# name: (raw key, alt, caption, place)
CURATED = {
    "cotonou-boulevard": ("cotonou-2-2", "Vue sur les axes routiers et le marché de Dantokpa, à Cotonou", "Autour de Dantokpa, Cotonou", "Cotonou"),
    "cotonou-passerelle": ("cotonou-2-6", "Passerelle piétonne animée au-dessus du marché de Dantokpa", "La passerelle de Dantokpa", "Cotonou"),
    "cotonou-portage": ("cotonou-2-8", "Commerçantes portant leurs produits dans les escaliers de la passerelle", "Portage et commerce quotidien", "Cotonou"),
    "cotonou-axe": ("cotonou-2-0", "Circulation et étals sous la passerelle du marché de Dantokpa", "Sous la passerelle, l'économie informelle", "Cotonou"),
    "cotonou-lagune": ("cotonou-3-2", "Front de lagune et immeubles à Cotonou", "Le front de lagune", "Cotonou"),
    "cotonou-moto": ("benin-mobility-1-0", "Conducteurs de zémidjan casqués dans une rue de Cotonou", "Les zémidjans, mobilité du quotidien", "Cotonou"),
    "portonovo-mosquee": ("portonovo-1-2", "La Grande Mosquée de Porto-Novo, façade colorée et clochers", "La Grande Mosquée", "Porto-Novo"),
    "portonovo-porte": ("portonovo-1-5", "Porte verte de la Grande Mosquée de Porto-Novo", "Détail d'une porte de la Grande Mosquée", "Porto-Novo"),
    "portonovo-rue": ("portonovo-1-6", "Rue longeant la Grande Mosquée de Porto-Novo", "Au pied de la Grande Mosquée", "Porto-Novo"),
    "portonovo-portage": ("portonovo-2-2", "Jeunes vendeurs portant des paniers devant une maison de Porto-Novo", "Jeunes vendeurs, Porto-Novo", "Porto-Novo"),
    "portonovo-place": ("portonovo-1-0", "Place animée devant la Grande Mosquée de Porto-Novo", "La place de la Grande Mosquée", "Porto-Novo"),
    "portonovo-plaque": ("portonovo-2-0", "Plaque émaillée de la rue Delcassé à Porto-Novo", "Rue Delcassé", "Porto-Novo"),
    "ouidah-porte": ("ouidah-1-3", "Visiteurs devant le monument de la Porte du Non-Retour à Ouidah", "La Porte du Non-Retour", "Ouidah"),
    "ouidah-allee": ("ouidah-1-4", "Allée de la Route de l'Esclave menant à la Porte du Non-Retour", "L'allée de la mémoire", "Ouidah"),
    "ouidah-python": ("ouidah-2-0", "Entrée bleue et blanche du Temple des Pythons à Ouidah", "Le Temple des Pythons", "Ouidah"),
    "ouidah-danse": ("ouidah-4-10", "Danseuse en costume lors d'une cérémonie à Ouidah", "Danse rituelle à Ouidah", "Ouidah"),
    "ouidah-rituel": ("ouidah-4-6", "Adepte d'une divinité vodoun lors d'un rituel au Bénin", "Un rituel vodoun", "Ouidah"),
    "ouidah-rue": ("ouidah-4-13", "Rue bordée d'arbres à l'entrée de Ouidah", "À l'entrée de la ville", "Ouidah"),
    "ouidah-lagune": ("ouidah-4-1", "Lagune et végétation aux abords de Ouidah", "La lagune de Ouidah", "Ouidah"),
    "ouidah-plage": ("ouidah-3-2", "Coucher de soleil sur la plage de Ouidah", "La plage au coucher du soleil", "Ouidah"),
    "abomey-palais": ("abomey-1-0", "Cour et bâtiments des Palais royaux d'Abomey", "Les Palais royaux", "Abomey"),
    "abomey-cour": ("abomey-1-4", "Grande case aux murs décorés dans l'enceinte des Palais royaux d'Abomey", "Une case de l'enceinte royale", "Abomey"),
    "abomey-chefs": ("abomey-1-8", "Deux dignitaires en tenue de cérémonie aux Palais royaux d'Abomey", "Dignitaires et mémoire du royaume", "Abomey"),
    "abomey-case": ("abomey-1-7", "Case au toit de chaume dans les jardins des Palais royaux", "La case du trône", "Abomey"),
    "abomey-amazone": ("abomey-2-1", "Statue d'une Amazone du Dahomey sur la place Goho à Abomey", "L'Amazone du Dahomey", "Abomey"),
    "abomey-vodun": ("abomey-2-3", "Statuettes vodoun dans un autel à Abomey", "Autel vodoun, Abomey", "Abomey"),
    "abomey-artisan": ("abomey-1-6", "Artisan assis devant ses objets dans l'enceinte des Palais royaux", "Artisanat et transmission", "Abomey"),
    "parakou-numerique": ("parakou-3-14", "Jeunes participant à un atelier numérique à Parakou", "Atelier numérique pour la jeunesse", "Parakou"),
    "parakou-danse": ("parakou-3-12", "Enfants dansant dans une salle à Parakou", "Danse et jeunesse", "Parakou"),
    "parakou-savane": ("parakou-3-5", "Arbre isolé dans la savane autour de Parakou sous un ciel d'orage", "La savane aux portes de la ville", "Parakou"),
    "parakou-rue": ("parakou-3-0", "Rue et bâtiments du troisième arrondissement de Parakou", "Le troisième arrondissement", "Parakou"),
    "parakou-monument": ("parakou-1-7", "Monument de la place Bio Guerra à Parakou", "Place Bio Guerra", "Parakou"),
    "parakou-moto": ("parakou-5-1", "Famille à moto sur une route de Parakou", "Sur la route, au quotidien", "Parakou"),
    "parakou-marche": ("parakou-5-3", "Entrée du marché international Arzeke de Parakou", "Le marché international Arzeke", "Parakou"),
    "natitingou-collines": ("natitingou-1-0", "Vue sur les collines et la ville de Natitingou", "Natitingou et ses collines", "Natitingou"),
    "natitingou-mosquee": ("natitingou-1-1", "La mosquée centrale de Natitingou", "La mosquée centrale", "Natitingou"),
    "natitingou-tata": ("natitingou-2-3", "Façade décorée d'une construction tata somba près de Natitingou", "Motifs d'une Tata Somba", "Natitingou"),
    "natitingou-musee": ("natitingou-1-3", "Bâtiment du musée Kaba de Natitingou", "Le musée Kaba", "Natitingou"),
    "natitingou-statue": ("natitingou-1-7", "Statue de Kaba à Natitingou", "La statue de Kaba", "Natitingou"),
    "natitingou-case": ("natitingou-2-4", "Case traditionnelle dans le paysage de l'Atacora", "Habitat de l'Atacora", "Natitingou"),
    "nikki-gaani": ("nikki-2-0", "Cavaliers en tenue de fête lors de la Gaani à Nikki", "La Gaani, fête des chevaux", "Nikki"),
    "nikki-mosquee": ("nikki-2-2", "Mosquée du musée royal de Nikki", "La mosquée du palais", "Nikki"),
    "nikki-griot": ("nikki-2-3", "Griot en boubou blanc devant le palais de Nikki", "Un griot du palais", "Nikki"),
    "nikki-palais": ("nikki-2-4", "Entrée du musée royal de Nikki", "L'entrée du musée royal", "Nikki"),
    "nikki-musee": ("nikki-2-1", "Bâtiment du musée royal Danri de Nikki", "Le musée Danri", "Nikki"),
    "nikki-palais-roi": ("nikki-1-0", "Palais du roi de Nikki sous un grand arbre", "Le palais du roi", "Nikki"),
    "soava-voile": ("ganvie-1-0", "Pirogue à voile sur les eaux de Ganvié", "Pirogue à voile sur le lac Nokoué", "Sô-Ava"),
    "soava-village": ("ganvie-1-4", "Village lacustre sur pilotis à Ganvié", "Ganvié, village sur pilotis", "Sô-Ava"),
    "soava-marche": ("ganvie-1-6", "Marché sur l'eau à Ganvié", "Le marché sur l'eau", "Sô-Ava"),
    "soava-cases": ("ganvie-1-11", "Maisons en bois sur pilotis entourées de végétation aquatique", "Maisons sur pilotis", "Sô-Ava"),
    "soava-pirogue": ("ganvie-1-10", "Embarcadère et pirogues à Ganvié", "L'embarcadère", "Sô-Ava"),
    "soava-enfant": ("ganvie-1-2", "Jeune garçon manœuvrant une pirogue dans la végétation aquatique", "Sur l'eau, dès le plus jeune âge", "Sô-Ava"),
    "benin-tissu": ("benin-market-2-0", "Jeune garçon devant des tissus colorés dans une boutique de marché", "Tissus et commerce", "Bénin"),
    "benin-poissonniere": ("benin-market-2-6", "Marchande de poissons fumés souriante sur un marché béninois", "Poissonnière sur un marché", "Bénin"),
    "benin-marche": ("benin-market-2-9", "Scène animée de marché avec des paniers et des denrées", "Scène de marché", "Bénin"),
    "benin-marche-femmes": ("benin-market-2-2", "Jeune vendeuse dans une case ouverte sur un marché", "Jeunesse et commerce", "Bénin"),
    "benin-egungun": ("benin-culture-1-4", "Costumes d'Egungun colorés alignés lors d'un festival", "Egungun, mémoire et spectacle", "Bénin"),
    "benin-egungun-2": ("benin-culture-1-5", "Masques et costumes colorés lors d'un festival au Bénin", "Festival des masques", "Bénin"),
    "benin-wagasi": ("benin-food-1-7", "Plat de wagasi servi avec une sauce verte", "Wagasi et sauce", "Bénin"),
    "benin-beignets": ("benin-food-1-0", "Beignets dorés disposés sur un plateau", "Beignets de rue", "Bénin"),
    "benin-riz": ("benin-food-1-5", "Plat de riz et poisson frit de la cuisine béninoise", "Riz et poisson", "Bénin"),
    "benin-savane": ("benin-landscape-1-0", "Arbres isolés dans une savane verdoyante du Bénin", "La savane béninoise", "Bénin"),
    "benin-vallee": ("benin-landscape-1-1", "Vallée et relief de l'Atacora au Bénin", "Les reliefs de l'Atacora", "Bénin"),
    "benin-piste": ("benin-landscape-1-9", "Piste de terre au coucher du soleil dans le parc de la Pendjari", "Piste au coucher du soleil", "Bénin"),
    "benin-tata": ("benin-architecture-1-4", "Construction en terre aux toits de chaume dans le nord du Bénin", "Architecture de terre", "Bénin"),
    "benin-terre": ("benin-architecture-1-2", "Détail de murs en terre d'une construction traditionnelle", "La terre comme matériau", "Bénin"),
}

HEROES = {"cotonou-axe", "cotonou-lagune", "cotonou-boulevard", "portonovo-mosquee", "portonovo-place",
          "ouidah-plage", "ouidah-porte", "ouidah-danse", "abomey-palais", "abomey-chefs", "abomey-cour",
          "parakou-numerique", "parakou-savane", "natitingou-collines", "natitingou-tata", "nikki-gaani",
          "nikki-palais-roi", "soava-voile", "soava-village", "benin-egungun", "benin-tissu", "benin-savane",
          "benin-marche", "benin-vallee", "benin-piste"}

manifest = json.load(open(os.path.join(OUT, "manifest.json")))
library = {}

for name, (key, alt, caption, place) in CURATED.items():
    src = os.path.join(RAW, key + ".jpg")
    if not os.path.exists(src):
        print("MISSING", key); continue
    im = Image.open(src).convert("RGB")
    if im.width < 640:
        print("TOO SMALL", key); continue
    meta = manifest.get(key, {})
    widths = [640, 1280] + ([1920] if name in HEROES else [])
    made = []
    for w in widths:
        if im.width < w and made:
            continue
        h = round(im.height * (w / im.width))
        out = im.resize((w, h), Image.LANCZOS)
        dest = os.path.join(OUT, f"{name}-{w}.webp")
        out.save(dest, "WEBP", quality=80, method=6)
        made.append({"w": w, "h": h, "file": f"/assets/img/{name}-{w}.webp",
                     "bytes": os.path.getsize(dest)})
    tint = ImageStat.Stat(im.resize((1, 1))).mean
    library[name] = {
        "alt": alt, "caption": caption, "place": place,
        "sources": made,
        "tint": "#%02x%02x%02x" % tuple(int(max(0, min(255, c))) for c in tint),
        "credit": meta.get("artist") or "Wikimedia Commons",
        "license": meta.get("license") or "CC",
        "licenseUrl": meta.get("licenseUrl") or "",
        "source": meta.get("source") or "",
    }
    print(name, made[-1]["w"], library[name]["tint"])

with open(os.path.join(OUT, "library.json"), "w") as f:
    json.dump(library, f, ensure_ascii=False, indent=1)
print("images:", len(library), "files:", sum(len(v["sources"]) for v in library.values()),
      "MB:", round(sum(s["bytes"] for v in library.values() for s in v["sources"]) / 1e6, 1))

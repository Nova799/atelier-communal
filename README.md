# Atelier communal — vingt-deux directions pour les sites des communes du Bénin

Vingt-deux propositions de sites institutionnels pour 28 communes du Bénin, construites sur une seule couche de données, un socle d'accessibilité commun et 22 directions réellement distinctes. Démonstration statique, sans dépendance runtime, entièrement exécutable en local.

> **Démonstration.** Les 616 pages générées utilisent du contenu fictif rédigé pour le projet. Aucune donnée officielle n'est présentée comme telle : chaque page porte la mention « Démonstration · Contenus fictifs », chaque chiffre est annoté et les vingt-huit communes sont des *profils de démonstration*. Les photographies proviennent de Wikimedia Commons (licences CC ou domaine public), avec auteur et licence affichés, localement téléchargées et creditées dans `assets/img/library.json`.

## Démarrage rapide

Prérequis : **Node.js ≥ 20**. Aucune dépendance à installer (`node_modules` n'existe pas).

```bash
npm run build     # génère dist/ (616 pages + galerie + système + 404)
npm run serve     # sert dist/ sur http://127.0.0.1:4173
npm run dev       # build + serve
npm run check     # audit statique : liens, assets, alt, h1, ids uniques
npm run shoot     # passe Playwright : overflow horizontal, erreurs console, images, ×5 viewports
npm run verify    # build + check + shoot
npm run previews  # régénère les 20 aperçus de la galerie (serve requis)
```

Le `dist/` généré est statique : il peut être publié tel quel sur n'importe quel hébergement (Cloudflare Pages, Netlify, un bucket S3, un nginx d'administration communale).

## Ce que contient la démonstration

| Élément | Détail |
| --- | --- |
| Directions artistiques | 22 (voir le tableau ci-dessous) |
| Communes de démonstration | Cotonou, Porto-Novo, Ouidah, Abomey, Parakou, Natitingou, Nikki, Sô-Ava, Abomey-Calavi, Allada, Bohicon, Covè, Lokossa, Grand-Popo, Dogbo, Aplahoué, Djougou, Kandi, Banikoara, Malanville, Tchaourou, Bembéréké, Dassa-Zoumè, Savalou, Kétou, Sakété, Boukoumbé, Adjohoun |
| Pages générées | 616 pages `/t/<direction>/<commune>/` + galerie `/` + `/system.html` + 404 |
| Templates par page | ~92 Ko HTML, zéro framework, zéro requête tierce au runtime |
| Accessibilité | landmarks, focus visible, navigation clavier, attributs ARIA, `prefers-reduced-motion` |
| SEO | titles, meta descriptions, Open Graph, JSON-LD, sitemap, robots.txt (pages `noindex` : contenus fictifs) |
| Images | 146 photographies Wikimedia Commons, locales, WebP responsive (640/1280/1920 px) |
| Polices | 11 familles auto-hébergées (WOFF2 latin / latin-ext) |

## Les vingt-deux directions

| # | Direction | Famille | Concept en une phrase | Commune par défaut |
| --- | --- | --- | --- | --- |
| 1 | **Tambour** | Éditorial | Un magazine mémoriel : serif, filets, chapitres numérotés. | Ouidah |
| 2 | **Atlas** | Données | Un atlas administratif : grille, monospace, lecture cartographique. | Cotonou |
| 3 | **Le Seuil** | Immersif | Une traversée sombre : Bodoni immense, seuils cinématographiques. | Ouidah |
| 4 | **Registre** | Institutionnel | Une gazette communale : colonnes réglées, tampons, actes numérotés. | Porto-Novo |
| 5 | **Place Publique** | Radical | L'affichage civique : jaune signal, bandeaux, étiquettes manifestes. | Parakou |
| 6 | **Nova** | Données | La commune en centre de commande nocturne : indicateurs et grille lumineuse. | Cotonou |
| 7 | **Tissage** | Culture | Une trame tissée : bandes de couleur, cartes en bandes. | Abomey |
| 8 | **Racines** | Éditorial | Un site d'archive organique : arches, livres, chronologie en racines. | Abomey |
| 9 | **Kora** | Culture | Les saisons d'une veillée : programme musical, patrimoine, transmission. | Ouidah |
| 10 | **Marché** | Radical | La place du marché : annonces, prix, agenda, délibérations. | Parakou |
| 11 | **Horizon** | Immersif | L'horizon comme promesse : ciel ouvert, cap sur le nord. | Cotonou |
| 12 | **Le Fil** | Institutionnel | Le fil d'assemblée : délibérations, textes et comptes-rendus. | Porto-Novo |
| 13 | **Cadastre** | Données | Un cadastre habité : parcelles, relevés, plans schématiques. | Cotonou |
| 14 | **Village Global** | Immersif | La commune comme village-monde : identité, quartiers, horizons. | Sô-Ava |
| 15 | **Monolithe** | Radical | Un bloc brutaliste : masses, bords francs, solidité institutionnelle. | Natitingou |
| 16 | **Lagune** | Immersif | Une page amphibie : horizons d'eau, vagues, rivages. | Sô-Ava |
| 17 | **Griot** | Éditorial | Un récit en chapitres : voix, mémoire orale, veillée. | Nikki |
| 18 | **Signal** | Données | Une salle de rédaction : bandeau, masthead, fil horodaté. | Porto-Novo |
| 19 | **Terre** | Culture | Une édition rurale sensible : papier, argile, terroir. | Natitingou |
| 20 | **Studio** | Données | Une grille de studio : modules numérotés, identité en mouvement. | Cotonou |
| 21 | **Reflets** | Immersif | Une traversée WebGL : ciel et eau procéduraux (shaders GLSL), heure pilotée, pirogues en dérive. | Sô-Ava |
| 22 | **Relief** | Immersif | Un diorama 3D modeste : Tata Somba en Blender (GLB), caméra à dérive lente, « glisser pour regarder ». | Natitingou |

Chaque direction change réellement : grille, typographie (paire dédiée), palette logique, ordre des sections, traitement du header, image de héros et signature d'interaction — au-delà d'un simple changement de couleurs. Les directions **Reflets** (n°21) et **Relief** (n°22) sont les vitrines techniques : scènes WebGL/PixiJS — shaders ciel/eau pilotés par l'heure pour Reflets, diorama 3D réel généré par Blender et chargé en GLB pour Relief — posées sur la même structure institutionnelle complète.

> **PixiJS & @pixi/3d.** `assets/vendor/pixi.min.mjs` (v8.23.0, MIT) est livré localement et importé uniquement par les directions Reflets et Relief, en chargement dynamique ; Relief ajoute `pixijs-3d.min.mjs` + `pixijs-3d-webgl.min.mjs` (@pixi/3d v0.1.0, MIT) via un `importmap` inline propre à la page, et le diorama `assets/models/atakora-diorama.glb` (généré par `scripts/blender_atakora.py`, Blender headless). C'est tout ce que le site embarque de tiers au runtime ; tout le reste reste du HTML pré-rendu, sans framework.

## Structure du dépôt

```
benin-commune/
├── src/
│   ├── data/                 # Couche de données : commune/*.mjs + services, validation, helpers
│   ├── lib/                  # Fondations : html.mjs (échappement, images), icons, map, components, page
│   ├── styles/               # base.css (socle) + pages.css + templates/*.css (une feuille par direction)
│   ├── templates/            # meta.mjs (registre des directions) + registry.mjs + un module par direction
│   ├── pages/                # gallery.mjs, system.mjs (pages hors templates)
│   └── client/app.js         # Comportements partagés (nav, reveal, compteurs, carte, recherche guichet)
├── assets/                   # img/ (WebP + library.json), fonts/ (WOFF2 auto-hébergés), previews/
├── scripts/                  # build.mjs, serve.mjs, check.mjs, screenshot.mjs (+ outillage d'assets)
├── dist/                     # Sortie générée (publication statique)
├── README.md                 # Ce fichier
├── RESEARCH.md               # Recherche (contexte institutionnel, sources, analyse)
├── ARCHITECTURE.md           # Architecture technique (build, multi-commune, modèle de données)
├── DESIGN_SYSTEM.md          # Socle de design (tokens, typographie, grille, composants)
├── CREER-UN-SITE-COMMUNAL.md # Guide : ajouter une commune / adapter le système
└── REPORT.md                 # Rapport de clôture + addenda (Reflets, Relief)
```

## Fonctionnement multi-commune

Changer de commune **ne réécrit pas le code** : chaque commune fournit un fichier de données (identité visuelle, histoire, économie, services, actualités, budget, FAQ, lieux, carte…) dans `src/data/communes/`. Les vingt-deux directions consomment la même structure. Le lien « Une direction, 28 communes » en bas de chaque page régénère instantanément la démonstration.

```bash
# Voir la même direction pour une autre commune
npm run build   # puis ouvrir http://127.0.0.1:4173/t/signal/nikki/
```

Pour ajouter une vingt-neuvième commune : `CREER-UN-SITE-COMMUNAL.md`.

## Documentation

- `RESEARCH.md` — contexte institutionnel béninois, méthodes et sources, enseignements.
- `ARCHITECTURE.md` — architecture technique, décisions et compromis.
- `DESIGN_SYSTEM.md` — socle graphique, tokens, composants, thèmes.
- `CREER-UN-SITE-COMMUNAL.md` — guide pratique d'extension (commune, direction, contenu).
- `REPORT.md` — rapport de clôture : décisions, tests, limites connues.

## Limites assumées

- Contenu **fictif** : aucune mairie, budget, délibération ou statistique présenté n'est réel.
- Photographies génériques du Bénin (Wikimedia Commons), pas de prises de vue commandées ; vérifiez les licences avant tout réemploi hors de cette démonstration.
- Formulaires en mode démonstration (aucune soumission serveur) ; la carte est un SVG schématique, pas un SIG.

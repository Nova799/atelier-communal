# Rapport de clôture — Atelier communal

> Note de mise à jour — deux directions WebGL ont été ajoutées après la livraison initiale : la **21 « Reflets »** (scène 2D/WebGL, 16 novembre 2026) puis la **22 « Relief »** (diorama 3D réel, 16 novembre 2026). Les faits des trois livraisons sont consignés en bas de ce document ; l'état courant fait foi dans le README (`npm run verify`, 176 pages, 22 directions).

Projet : **20 directions de sites communaux pour le Bénin** · généré statiquement · zéro dépendance d'exécution.
Livré le 16 novembre 2026. Statut : **fonctionnel, vérifié, prêt à être montré**.

---

## 1. Sommaire

- **20 directions artistiques originales** (pas des déclinaisons de couleurs), chacune avec grille, typographie, paire de polices, ordre de sections, traitement du header et signature d'interaction propres.
- **8 communes de démonstration** — Cotonou, Porto-Novo, Ouidah, Abomey, Parakou, Natitingou, Nikki, Sô-Ava — servies par **une seule couche de données** : toute la maquette se recompose par changement de données.
- **160 pages** (`20 directions × 8 communes`) + galerie (`/`), page système (`/system.html`) et 404.
- **Build reproductible** (≈ 0,3 s), **zéro dépendance**, **zéro requête tierce** au runtime.
- **Tests automatisés** : audit statique de 163 pages (`scripts/check.mjs`) et passe Playwright sur **810 chargements** (163 pages × 5 viewports) — **0 échec** (`scripts/screenshot.mjs`).

## 2. Ce qui a été livré

| Élément | Détail |
| --- | --- |
| Générateur statique | Node ≥ 20, ESM, HTML pré-rendu (≈ 91 Ko/page) |
| Directions | Tambour, Atlas, Le Seuil, Registre, Place Publique, Nova, Tissage, Racines, Kora, Marché, Horizon, Le Fil, Cadastre, Village Global, Monolithe, Lagune, Griot, Signal, Terre, Studio |
| Familles | Éditorial (4), Données (5), Immersif (4), Culture (3), Radical (2), Institutionnel (2) |
| Communes démo | 8, avec identité propre (emblème géométrique, palette) et contenu complet |
| Images | 66 photographies Wikimedia Commons, WebP 640/1280/1920 px, créditées (auteur, licence, source) dans `assets/img/library.json` et sur `/system.html` |
| Polices | 11 familles, WOFF2 auto-hébergés (latin + latin-ext) |
| Galerie des 20 directions | `/` avec filtres par famille, commune d'élection, aperçus JPG (`assets/previews/`) |
| Docs | `README.md`, `RESEARCH.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `CREER-UN-SITE-COMMUNAL.md` (+ ce rapport) |
| Outillage | `build`, `serve`, `check`, `shoot`, `verify`, `previews` (voir `package.json`) |

## 3. Décisions structurantes

1. **Statique pré-rendu plutôt que SPA** — performance sur Android d'entrée de gamme, SEO, hébergement n'importe où, pas d'infrastructure.
2. **Une couche de données, 20 expressions** — changer de commune ne réécrit aucun code ; chaque direction consomme la même structure (`src/data/communes/*.mjs`), validée au build.
3. **Démo honnête** — bandeau « Démonstration · Contenus fictifs » sur chaque page, notes systématiques sur chiffres/stats, `noindex, nofollow`, mascottes et identités géométriques inventées. **Aucun contenu fictif n'est présenté comme officiel.**
4. **Photographies réelles et libres** — pas de stock générique ni d'IA ; chaque image porte auteur + licence + URL source.
5. **Accessibilité dans le socle** — landmarks, skip-link, focus visible, `prefers-reduced-motion`, `<dialog>`/`<details>` natifs, hiérarchie de titres vérifiée par `scripts/check.mjs`.
6. **SEO complet mais raisonné** — méta, OG, JSON-LD `GovernmentOrganization`, sitemap, robots, canonical ; pages de démo exclues de l'index.

## 4. Tests et résultats

| Vérification | Résultat |
| --- | --- |
| `npm run build` | 160 pages, 20 aperçus, 91,2 Ko moyens — **OK** (≈ 0,3 s) |
| `node scripts/check.mjs` | 163 pages auditées : ressources, ancres, `alt`, `<h1>` unique, `id` dupliqués, `lang`, `<title>`, description — **0 problème** |
| `node scripts/screenshot.mjs` | **810 chargements, 0 échec** : aucun défilement horizontal (375/768/1024/1440/1920), aucune erreur console/pageerror, aucune réponse ≥ 400, images chargées, un `<h1>` par page |
| Interactions clavier | skip-link, `<dialog>` (menu, changer de commune, signalement) — ouverture/Échap OK |
| Recherche guichet | filtrage temps réel OK (16 démarches) |
| Carte schématique | filtres par catégorie + zoom + liste accessible + état synchronisé OK |
| Visual review | les 20 directions revues en desktop, les 3 dernières (Signal, Terre, Studio) également en 375/768 + sections internes ; corrections appliquées |

`qa-last-run.json` conserve le détail du dernier audit. `npm run verify` rejoue build + check + shoot.

## 5. Problèmes rencontrés et corrigés

- **Débordements horizontaux historiques** : Monolithe (h1 trop large à 1440), Griot (filigrane chiffré remplacé par un bandeau « Chapitre I »), Lagune (légende photo repositionnée), Studio/index, Terre/saveurs (note de démo mal placée + contraste eyebrow sur fond terre), Atlas/Registre/Cadastre (tables 720 px non contenues : `minmax(0,…)` + `min-width:0` sur la grille transparence) — **tous résolus ; l'audit 810 pages ne remonte plus aucun débordement**.
- **Kora/Monolithe/Signal** : réglages fins de rythme, `.event__body { display:contents }` à largeur desktop, agenda en lignes.
- **images paresseuses dans les captures** : captures Playwright avec forçage `loading="eager"` + `decode()` pour éviter les artefacts de rendu.
- **Serveur `serve.mjs` tué entre deux passes QA** : rendu avec `setsid` ; l'audit final a été rejoué intégralement sans échec.
- **`scripts/check.mjs` trouvé un bug réel** : ancres `#direction-*` orphelines sur la galerie → `id` ajoutés aux cartes, audit vert.

## 6. Limites connues (à lire avant publication)

1. **Contenu fictif** — noms, chiffres, dates, budgets, rues, citations, emblèmes : œuvres de démonstration. Aucune page ne doit être présentée comme un site officiel.
2. **Photographies** — génériques du Bénin sous licences CC (BY/BY-SA/NC/SA) ; attribution obligatoire (`library.json` + `/system.html#credits`). Pas de photos exclusives ; les légendes sont descriptives, jamais des affirmations de lieu non vérifiées.
3. **`site.baseUrl` = `https://benin-commune.example`** — remplacer par le domaine réel + contenu réel avant mise en ligne ; alors seulement repasser les pages en `index`.
4. **Guichet & signalement** — aucun backend ; toute mise en production exige un branchement réel (API communale / plateforme nationale) ou une désactivation explicite.
5. **Carte** — SVG schématique, distances/positions indicatives ; pas un SIG.
6. **Pas de CI/CD livrée** — `npm run verify` est prêt pour une exécution en intégration continue ; le dépôt n'est pas un repo git et la sortie n'est pas minifiée.
7. **WCAG** — normes visées et outillées, pas de certification tierce ; la vérification se fait au clavier + Lighthouse en conditions réelles.
8. **Perf** : `dist/` ≈ 46 Mo (images 1920 px non compressées davantage) ; `preconnect`/compression Brotli à activer côté hébergeur.

## 7. Comment lancer

```bash
npm run build     # génère dist/
npm run serve     # http://127.0.0.1:4173
npm run verify    # build + audit statique + passe Playwright
```

Galerie : `http://127.0.0.1:4173/` · une direction pour une commune : `http://127.0.0.1:4173/t/kora/abomey/` · changer de commune/direction en bas de page.

Ajouter une commune ou une direction, ou mettre une commune en production : **`CREER-UN-SITE-COMMUNAL.md`**.

## 8. Ce qui reste pour une adoption réelle (hors scope de démonstration)

Charte officielle et logo de chaque commune réelle · contenus validés par chaque mairie · intégration e-démarches réelle · hébergement + domaine + HTTPS · politique de confidentialité / mentions légales · retrait des mentions de démonstration · mandat d'édition côté commune.

---

*Atelier communal — démonstration. Aucune donnée, aucun emblème, aucune photographie présentés ici ne constituent une communication officielle d'une commune béninoise.*

---

## Addendum 16 novembre 2026 — Direction 21 « Reflets »

**Demande.** Une proposition supplémentaire, encore plus ambitieuse que les 20, mêlant 2D et 3D, difficile à reproduire, avec liberté d'utiliser la compétence PixiJS et les outils disponibles.

**Livraison.** Direction n°21 `reflets` (famille Immersif, commune par défaut Sô-Ava) : une traversée WebGL du lac Nokoué.

- **Ciel procédural GLSL300** : dégradé aube→zénith→heure dorée→crépuscule, disque solaire/lunaire avec halo, étoiles scintillantes (hachage procédural, fondu nocturne), cirrus en fbm.
- **Eau procédurale GLSL300** : gradient de profondeur, houle en bandes sinusoïdales + fbm, colonne de paillettes solaires avec encombrement de grain, dérive lente, ligne d'horizon luminescente.
- **Cinq couches parallactiques** : collines lointaines (2 crêtes), village sur pilotis généré (RNG déterministe, ~40 habitations, pilotis, toits, fenêtres chaudes la nuit), lirière de rive, vols d'oiseaux, lanternes de pirogue (additive) — parallaxe pointeur lissée.
- **Pirogues vectorielles** en dérive (6), tangage sinusoïdal, sillage, rame animée.
- **Heure pilotée à l'écran** — 4 moments (aube 05:40 / zénith 12:00 / heure dorée 18:20 / crépuscule 19:45), lerpiés chaque frame pour une transition douce ciel/eau/silhouettes.
- **Carnet de traversée** incliné en perspective CSS suivant le pointeur (2D + 3D), avec `prefers-reduced-motion` respecté.
- **Démo comme les autres** : mêmes composants (guichet, carte, démarches, actualités…), bandeau démonstration, 168 pages cohérentes.

**Choix techniques consignés.**

- `assets/vendor/pixi.min.mjs` (PixiJS v8.23.0, MIT, ~890 Ko non compressé) vendu localement, importé **en dynamique** uniquement sur la page Reflets ; zéro CDN, zéro dépendance exécution pour le reste du site. `pixi.js` ajouté en `devDependency` (outil de build/vendoring uniquement).
- GLSL écrit pour WebGL (`#version 300 es`, premultiplied alpha) ; PixiJS en WebGL par défaut (`autoDetectRenderer` tombe sur WebGL ici).
- **Performance honnête.** En rendu logiciel headless (SwiftShader) : FPS initial ≈ 13 → cap ticker 30 fps + résolution interne initiale 0.8 → **qualité adaptative** (mesurée sur 80 frames ; réduction jusqu'à ~0.42× sous 30 fps) → **≈ 53 fps** mesurés en headless. Sur tout GPU réel, 60 fps à résolution native (1.75× DPR plafonnée). La scène est un fond, pas le contenu : un flou de sous-échantillonnage ne se voit pas.
- **Repli sans JavaScript / sans WebGL** : l'image de secours (photo Commons pleine page) reste visible sous le canvas ; la maquette se lit intégralement.
- Empreinte : +892 Ko WASM-free vendor chargé seulement sur `/t/reflets/<commune>/`, gz ≈ 240–260 Ko sur la route réseau.

**Tests.** `npm run verify` rejoué après l'ajout : build 168 pages — OK ; audit statique 163 pages → 0 problème ; passe Playwright **840 chargements (168 pages × 5 viewports) → 0 échec**, y compris les 8 pages Reflets (débordement horizontal nul, console propre, images OK). Captures revues à 1440/768/375 (héros, 4 moments du lac, sections, carnet, mobile). Aperçus galerie régénérés (`npm run previews`, 21 aperçus).

**Limites spécifiques à cette direction.**

- La boucle pointeur/lerpie redessine la lampe du ciel et de l'eau chaque frame (~2 passes plein écran) — attendu ; documenté.
- Le comptage adaptatif réduit la résolution interne, pas la qualité géométrique.
- Pas de `Gamepad`/son ; volontairement sobre sur mobile pour la batterie (`saveData` coupe la scène ; DPR plafonné).
- Le wording "3D" est assumé comme 3D de composition (perspective, profondeur, parallaxe) + 2D vectorielle dans WebGL ; il n'y a pas de moteur de rendu 3D généraliste (Three.js) dans le projet.

---

## Addendum 16 novembre 2026 — Direction 22 « Relief »

**Demande.** « C'est possible d'avoir une 22e direction ? En 3D mais sans trop en faire non plus et sans casser l'existant. » Contrainte de design : réel 3D, retenu, sans toucher aux 21 directions ni à la structure existante — la 22e reprend le socle commun.

**Livraison.** Direction n°22 `relief` (famille Immersif, commune par défaut Natitingou, Atacora) : **un diorama 3D modeste**.

- **Asset fabriqué sur mesure** — `scripts/blender_atakora.py` génère par Blender 4.3.2 headless (Cycles CPU pour l'aperçu) un terrain 44×44 à collines gaussiennes, une maison tata somba (deux cylindres de latérite, anneaux chaulés, toits de chaume coniques, porte et linteau chaulés), un chemin de sable collé au terrain par IK de hauteur, trois baobabs, trois rochers ; export GLB (≈ 143 Ko, aucun texture externe).
- **Rendu dans la maquette** — `@pixi/3d` v0.1.0 (vendorisé : `pixijs-3d.min.mjs` + `pixijs-3d-webgl.min.mjs` + `pixi.min.mjs`), monté via un `importmap` propre à la page. `View3D` en autoResize, `exp2` fog pour fondre le bord du terrain dans le ciel, `DirectionalLight` chaleur 3.15 avec ombres `castShadow` (desktop), tone mapping ACES, hémisphère chaude en `environment` + `background` (ciel procédural). Caméra à dérive lente + parallaxe pointeur + **« glisser pour regarder »** (pointer capture, `touch-action: pan-y` pour préserver le scroll tactile vertical). Aucun `OrbitCamera` : la dérive manuelle évite tout conflit d'entrée — retenu exprès.
- **Sobriété assumée** — pas d'heure pilotée, pas de carnet flottant, pas de particules, pas de Bloom : un seul plan de décor, une maison, du silence. Le contenu reste intégralement institutionnel (collines, sites, projets, actualités, carte, guichet, contact).
- **Performance honnête.** Ombres coupées hors GPU dédié ; résolution interne initiale 0.3× en GPU logiciel (0.3×375 ≈ 113 px géants, upscalés — rendu « maquette peinte » assumé, 41 fps mesurés en SwiftShader headless) ; ajustement adaptatif sous ~26 fps puis bascule sur la photo statique sous ~14 fps soutenus. Sur GPU réel : DPR ≤ 1.75, ombres `medium`, 60 fps.
- **Repli complet** — comme Reflets : sans WebGL, avec `saveData` ou avec `prefers-reduced-motion`, la photo de secours s'affiche et la page se lit intégralement ; le canvas est `aria-hidden`.
- **Un vrai bug trouvé et corrigé** — le canvas recevait `cssText` qui écrasait `style.width/height` posés par Pixi (`autoDensity`) : sur mobile le 3D ne remplissait qu'un coin du héros. Les deux directions WebGL sont corrigées (`Object.assign` positionnel seul). La composition desktop, préalablement rognée à gauche sans être visible à l'œil, est maintenant exacte.

**Tests.** `npm run verify` après l'ajout : build 176 pages — OK ; audit statique 179 pages → 0 problème ; passe Playwright **890 chargements (178 pages × 5 viewports) → 0 échec**. Captures revues à 1440/768/375 (héros, sections collines/sites/projets/actualités/carte/services/contact, interaction glisser, héros mobile "maquette de table", fps). Aperçus galerie régénérés (22 aperçus).

**Limites spécifiques.**

- Le diorama est un décor d'illustration assumé : positions, dimensions et itinéraires sont fictifs comme le reste ; l'asset est destiné à la démonstration, pas à un SIG ni à un panorama 360°.
- La qualité dépend du GPU ; en GPU logiciel la résolution tombe à ~300 px puis bascule en statique si nécessaire.
- `@pixi/3d` 0.1.0 est une API jeune : la solution s'appuie sur un sous-ensemble stable (View3D, Model3D, lights, fog) — pas de passes post-traitement, pas de Physique, pas d'extras expérimentaux.
- Blender n'est requis que pour régénérer l'asset (`scripts/blender_atakora.py`), jamais pour le build du site.

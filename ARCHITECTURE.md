# Architecture — Atelier communal

## 1. Vue d'ensemble

```
src/data (communes, services, bibliothèque d'images)
        ↓  importés par
src/templates/*.mjs (22 directions)   ← src/templates/meta.mjs (registre)
        ↓  rendent des fragments HTML (chaînes)
src/lib/page.mjs (coquille document : head, SEO, tokens, favicon)
        ↓  scripts/build.mjs
dist/  (160 pages statiques + galerie + système + 404 + assets)
```

Le système est un **générateur de site statique minimaliste**, volontairement sans dépendance : Node ≥ 20, ESM, aucun framework, aucun runtime côté client autre que `assets/app.js` (~12 Ko, vanilla). Les pages sont pré-rendues en HTML complet : le contenu est indexable (galerie), navigable au clavier et fonctionne sans JavaScript ; le JS n'ajoute que des améliorations progressives (menu mobile, compteurs, recherche du guichet, filtres de carte).

## 2. Decisions d'architecture

| Décision | Choix | Raison |
| --- | --- | --- |
| Rendu | HTML pré-généré en build | Performance (zéro boot client), SEO, hébergement statique possible partout, y compris sur un serveur administratif basique. |
| Templates | Fonctions JS pures `(commune, ctx) => html` | Palette d'entrée : une direction = une fonction + une feuille CSS. Pas de DSL, pas de classes magiques. |
| Styles | `base.css` (socle) + une feuille par direction | Le socle garantit l'accessibilité et les primitives communes ; chaque direction ne touche que son enveloppe. |
| Données | Un module par commune, schéma validé au démarrage | Changer de commune = changer de données, jamais de code. La validation échoue tôt (build) plutôt que de produire une page bancale. |
| Assets | Images locales WebP adaptatives, polices WOFF2 auto-hébergées | Zéro dépendance CDN (disponibilité, poids, cohérence visuelle). |
| Interaction | `assets/app.js` vanilla, dégradable | Aucune fonctionnalité critique n'exige JS ; le `<dialog>` natif sert de modale. |
| Démo | `noindex`, bandeau, notes, données fictives | Légal/éthique : ne pas faire passer la maquette pour un site officiel. |

## 3. Modèle de données

### 3.1 Commune (`src/data/communes/*.mjs`)

Clés **obligatoires** (validées au démarrage par `src/data/index.mjs`, qui lève une erreur si un champ manque) :

`slug, name, nameWithDe, nameWithA, department, region, motto, positioning, identity, hero, intro, stats, services, news, events, projects, budget, markets, documents, attractions, history, map, gastronomy, economy, culture, youth, contacts, mayor, faq, seo`

- `identity` : `{ primary, deep, accent, soft, paper, ink }` — injectée en CSS custom properties `--c-*` au niveau du `<body>` (`page.mjs`). Les directions composent leurs propres tons neutres autour.
- `map` : définition d'une carte schématique : arrondissements/points, chemins (pistes, voies), libellés, relief stylisé. Le rendu (`src/lib/map.mjs`) produit un SVG local avec marqueurs accessibles (liste + filtres + zoom + état actif synchronisé). **Ce ne sont pas des coordonnées réelles** : l'affichage est annoncé comme « carte schématique de démonstration ».
- `mayor` : jamais de nom/photo réels — le modèle fournit une formule (« Le Maire ») + note de démonstration.

### 3.2 Bibliothèque d'images (`assets/img/library.json`)

Chaque entrée : `alt, caption, place, sources[{w,h,file,bytes}], tint, credit, license, licenseUrl, source`. Générée par `scripts/fetch_images*.py` + `prepare_images.py` (téléchargement Wikimedia → redimensionnement 640/1280/1920 → WebP → `library.json`). `image()` (`src/lib/html.mjs`) choisit le `srcset`, réserve largeur/hauteur (zéro CLS) et pose une `background-color: tint` pendant le chargement.

### 3.3 Registre des directions (`src/templates/meta.mjs` + `registry.mjs`)

`meta.mjs` décrit pour les 22 directions : numéro, slug, nom, tagline, concept, famille, commune par défaut, polices utilisées et `fontLabel` (paire affichée), palette, signature visuelle, liste de sections. `registry.mjs` charge explicitement chaque module ; en mode strict (défaut hors `--partial`), une direction manquante fait échouer le build avec un message clair.

## 4. Pipeline de build

`scripts/build.mjs` (≈ 2 s pour 616 pages) :

1. `fs.rm(dist)` puis recréation de la structure ;
2. chargement des directions (strict) ;
3. rendu de chaque paire `direction × commune` via `communePage()` → `dist/t/<slug>/<commune>/index.html` ;
4. copie des assets : WebP, polices (`.woff2` + `.css`), styles (`src/styles` → `dist/assets/styles`), `app.js` ;
5. copie des aperçus `assets/previews/` (galerie) ;
6. génération du favicon SVG (initiale + couleurs de commune), OG default, `robots.txt`, `sitemap.xml` (hors pages démo), 404, galerie (`src/pages/gallery.mjs`) et `/system.html` (page de design system, `src/pages/system.mjs`) ;
7. rapport : nombre de pages, poids moyen (≈ 92 Ko), nombre d'aperçus.

Le build est déterministe et idempotent : supprimer `dist/` et relancer produit le même résultat.

## 5. Accessibilité — socle commun

- Pas de `div` magique : `header[data-header]`, `main#contenu`, `section[aria-labelledby]`, `footer`, skip-link.
- Un seul `<h1>` par page, titres de section en `<h2>`, titres de cartes en `<h3>` — audité par `scripts/check.mjs`.
- Focus visible : anneau `:focus-visible` partagé (défini dans `base.css`), contraste 4.5:1 visé, états `hover/active/focus` pour tous les contrôles.
- `prefers-reduced-motion` : révélations, compteurs, défilement du ticker (Signal) et transitions sont désactivés.
- Composants natifs : `<dialog>` (menu mobile, signalement, sélecteur de commune), `<details>` pour l'accordéon du guichet.
- Navigation carte : liste de points avec boutons (clavier), filtres par catégorie, zoom +/−, état `aria-pressed`/`is-active` synchronisé.

## 6. Performance

- HTML ≈ 92 Ko/page (gzip bien moins), aucune requête bloquante tierce.
- Polices : WOFF2 latin + latin-ext, `font-display: swap`, 7 à 11 familles au total (2 par direction + utilitaires).
- Images : `srcset` 3 largeurs, `sizes` ajusté au contexte, `loading="lazy"` sauf héros (`eager` + `fetchpriority="high"` + `rel=preload`).
- CSS : un fichier socle + une feuille par direction, chacune < 20 Ko.
- zéro layout shift : dimensions réservées pour 100 % des images.

## 7. SEO

- `<title>`, meta description, canonical, Open Graph, Twitter Card, JSON-LD `GovernmentOrganization` + `WebSite`, `theme-color`, `color-scheme`.
- Les pages de directions sont `noindex, nofollow` **volontairement** : elles utilisent des contenus fictifs. La galerie et le système sont indexables (site de démonstration).
- `sitemap.xml` et `robots.txt` générés ; `site.baseUrl` configurable dans `src/data/index.mjs` (`https://benin-commune.example` par défaut — placeholder).

## 8. Multi-commune : anatomie d'un changement

Changer de `?commune=` ou éditer `src/data/communes/nikki.mjs` :

- identité visuelle : `--c-*` → boutons, filets, emblème, gouttières de couleur, favicon data-URI ;
- textes : kicker, titre, lead, pitch d'introduction, citation, labels de sections (mêmes clés partout) ;
- chiffres : `stats` (avec `note` systématique « Donnée de démonstration ») ;
- contenu : actualités, projets, budget, FAQ, contacts, carte, gastronomie, histoire ;
- images : `hero.image`, `intro.image`, `news[].image`, etc. — résolues depuis `library.json`.

Aucune direction n'importe directement une commune ; toutes reçoivent la même structure.

## 9. Outillage QA

- `scripts/check.mjs` — audit statique de `dist/` : existence des ressources (`href`, `src`, `srcset`), ancres internes, `<img>` sans `alt`, `<h1>` unique, `id` dupliqués, `lang`/`<title>`/description.
- `scripts/screenshot.mjs` — passe Playwright : 163 pages × 5 viewports (375/768/1024/1440/1920), vérification de l'absence de défilement horizontal, d'erreurs console et de réponses ≥ 400, présence d'exactement un `<h1>` et d'images chargées ; export `qa-last-run.json` ; `--shots` capture la maquette de chaque direction.
- `npm run verify` enchaîne build + check + shoot.

## 10. Limites connues

- Formulaires décoratifs (pas d'envoi) ; compteur/reveals JS cosmétiques.
- Cartes schématiques SVG, pas d'intégration de tuiles ni de géocodage.
- `site.baseUrl` = `benin-commune.example` tant que le projet n'est pas publié ; ajuster avant tout déploiement réel, avec contenu réel et autorisations.
- `dist/` n'est pas minifié ; pour une mise en production réelle, ajouter un minificateur HTML/CSS et une CI.

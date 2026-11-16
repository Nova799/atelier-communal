# Design system — Atelier communal

Un socle graphiquement sobre (`base.css`) + 22 directions qui le surchargent (`templates/<slug>.css`). Ce document décrit le système partagé et la manière dont chaque direction s'en écarte délibérément.

## 1. Jetons (tokens)

### Couleur — couche commune

Chaque commune injecte au moment du build (via `<body style>` ou `documentShell`) :

```
--c-primary  couleur d'identité
--c-deep     variante profonde (titres, aplats)
--c-accent   accent (filets, étiquettes, focus ring)
--c-soft     fond doux
--c-paper    papier
--c-ink      encre
```

Le socle en dérive ses neutres :

```
--bg          : var(--c-paper)
--surface     : #fffdf8            (panneaux)
--fg          : var(--c-ink)
--muted       : fg 64 % vers bg
--faint       : fg 45 % vers bg    (méta, notes)
--line        : fg 15 % vers bg    (filets fins)
--line-strong : fg 32 % vers bg    (filets appuyés)
```

Les directions réinjectent en plus leurs propres neutres (ex. Signal : `--bg:#fbfbf9`, encre `#121212`, rouge signal `#c2102c`) — **jamais** en écrasant le jeu de la commune pour les éléments de contenu sémantique (boutons primaires, liens utilitaires), seulement pour la mise en page.

### Contraste et focus

- `:focus-visible { outline: 2px solid var(--c-accent); outline-offset: 3px }` — partagé.
- Cibles interactives ≥ 44 px (échelle tactile respectée ; `navtoggle`, `svc`, chips et lignes de tableau cliquables).
- `::selection` teinté par `--c-accent` sur fond clair (inversé sur sections sombres).

### Typographie

11 familles auto-hébergées (WOFF2 latin + latin-ext, `font-display: swap`). Chaque direction en mobilise 2 à 3 :

| Famille | Rôle | Directions |
| --- | --- | --- |
| Fraunces | serif de presse, optical sizes | Tambour, Kora, Horizon |
| Instrument Sans | sans neutre | défaut socle / nombreuses directions |
| JetBrains Mono | données, méta, tableaux | Atlas, Nova, Signal, Cadastre |
| Bodoni Moda | display contrasté | Le Seuil, Griot |
| Literata | serif de livre | Racines, Registre, Terre, Relief |
| Bricolage Grotesque | display chaleureux | Tissage |
| Sora | sans technique large | Nova, Studio |
| Archivo / Archivo Black | display civique | Place Publique, Monolithe |
| DM Sans | sans de lecture | Lagune, Griot (corps), Tissage (corps) |
| Syne | display anguleux | Lagune |
| Bodoni/Archivo/… | paires consignées dans `meta.mjs` (`fontLabel`) | toutes |

Échelle fluidiente (`--step--1` … `--step-6`) : `clamp()` entre 0.78 rem et 9.5 rem ; les directions composent en `em` autour (`.tNN-hero h1` etc.) ; `text-wrap: balance` sur les titres.

### Grille et espace

- `--maxw: 1320px` (Studio 1400, Signal 1440… surcharge locale), gouttière `clamp(1.15rem, 4vw, 4.5rem)`.
- `--section-y: clamp(4rem, 8vw, 8rem)` vertical de section ; `.section` en `padding-inline: var(--gutter)`.
- `--demo-h: 38px` (bandeau démonstration) — les en-têtes collants se calent en `top: var(--demo-h)` et `html { scroll-padding-top: calc(var(--demo-h) + var(--header-h) + 16px) }` ; chaque direction raffine sa valeur.
- Rayons : `--radius: 4px`, `--radius-lg: 14px` (Lagoon/Kora : 22px ; direction « papier » : 1–3px ; Signal/Studio/Monolithe : 0).
- Ombres : une seule `--shadow` (états posés, jamais décorative) ; transitions `--ease` / `--ease-out` (cubic-bezier(0.2,0.72,0.2,1) / cubic-bezier(0.16,1,0.3,1)).

## 2. Chrome partagé (toutes directions)

| Bloc | Classe(s) | Contenu |
| --- | --- | --- |
| Bandeau démonstration | `.demobar` | « Démonstration · Contenus fictifs » + direction + commune + boutons Galerie / Système / Changer (dialog natif). |
| Skip link | `.skip` | « Aller au contenu principal » (premier élément focusable). |
| En-tête collant | `[data-header].is-scrolled` | état ombre/backdrop géré par `app.js`. |
| Logo communal | `.brand`, `.brand__mark` (emblème SVG de commune) | généré depuis `commune.identity`. |
| Menu mobile | `.navtoggle` + `<dialog class="navsheet">` | liste complète + contact direct ; focus géré nativement. |
| Annotations | `.eyebrow`, `.eyebrow__mark`, `.demonote`, `.sec-head`, `.sec-head__lead` | repères systématiques : chaque section annonce son rôle (« Guichet · démarches »). |
| Boutons | `.btn`, `.btn--solid`, `.btn--ghost` | variations par direction. |
| Sélecteur « Une direction, 28 communes » | `.commune-rail` | régénère la démo dans la même direction. |
| Pied de page | `.footer` | mentions, contacts, avertissement démo, retour haut de page. |
| Dialog de signalement | `.report` (`<dialog>`) | formulaire de démonstration (aucun envoi). |

## 3. Composants de contenu (fournis par `src/lib/components.mjs`)

Variantes homogènes, même markup de base — chaque direction habille via ses classes de section (`#actualites`, `#projets`…) :

- **statsBand** `row | blocks` — 4 chiffres + notes (« Donnée de démonstration ») ; compteurs animés si JS actif.
- **serviceExplorer** `grid | compact | rows | chips` — recherche + filtres par domaine (`<details>` accordéon), 16 démarches issues de `src/data/services.mjs` (pièces, délais, coûts, en ligne/guichet).
- **newsSection** `editorial | cards | mosaic | stack | headline | feed` — featured puis secondaires ; horodatage `fr-FR`.
- **eventsSection** `agenda | tickets | cards` — date + catégorie + facts `<ul>` (lieu, heure, "Entrée libre").
- **projectsSection** `cards | rows | table` — statut tagué (`success`/`warning`), barre de progression `<div role="progressbar">`.
- **budgetSection** `bars | totals` — répartition + fonctionnement/investissement, intégré aux directions Données.
- **transparencySection** `table` — marchés publics + documents (réf., montant, statut).
- **mapSection** — SVG schématique accessible : liste `<button>` synchronisée, filtres (administration, marché, santé, culte, patrimoine, nature…), boutons `+ / −`, note « carte schématique ».
- **attractions / gastronomy / economy / culture / youth / history / mayor / faq / contactSection** — blocs éditoriaux et civiques.
- **footer / reportDialog / demoDialog / demoBar** — chrome.

Chaque section porte l'attribut `aria-labelledby` lié à son titre : les lecteurs d'écran naviguent par régions.

## 4. Comment chaque direction rompt avec le socle

Le socle n'impose **ni grille, ni header, ni héros** : il n'outille que les briques. Exemples de signatures :

- **Signal** — ticker d'édition noire 30 px, masthead découpé en trois étages, h1 700 Archivo, chiffres en JetBrains Mono, agenda en ligne simple filet, aucun `border-radius`.
- **Terre** — papier radial pointillé, cadre héros incliné (`rotate(-0.6deg)`) et « tape » semi-transparente, lettrine Literata, traits SVG à main levée, barres économiques hachurées.
- **Studio** — grille 6 colonnes hairline (`.t20-hero__grid`), modules `01…06` en `<nav>`, h1 outlined `-webkit-text-stroke`, lignes-repères Sora 300.
- **Lagune** — hero photo-bord de lagon, échelle de profondeur verticale, vagues SVG superposées, `::first-letter` lagon, panneaux `--deep`.
- **Griot** — chapitres `I…VI` verticaux, Bodoni italique, orfèvrerie `✦`/`❖`, colonne `.t17-chapter` en filet double.
- **Monolithe** — collant `.t15-index` + zone principale, casses Sora 800/Space mono, tracés droits, zéro arrondi.
- **Reflets** — ciel et eau **procéduraux en WebGL/PixiJS** (deux matériaux shader GLSL300 : gradient + soleil + étoiles ; eau avec houle, colonne de paillettes et dérive du courant), silhouettes de collines et de village sur pilotis en `Graphics`, pirogues vectorielles en dérive avec sillage, parallaxe pointeur sur cinq couches de profondeur, carnet de traversée incliné en perspective CSS (2D + 3D), heure pilotée à l'écran (aube/zénith/heure dorée/crépuscule) lerpiée chaque frame. Image de secours et `prefers-reduced-motion` : la scène n'est jamais indispensable au contenu.
- **Relief** — **diorama 3D réel** : maison tata somba, collines et chemin de sable générés par `scripts/blender_atakora.py` (Blender headless, terrain 44×44, matériaux latérite/paille/chaulage), exportés en GLB (≈ 143 Ko) puis chargés dans une scène `@pixi/3d` (`View3D`, lumière directionnelle chaude + ombres douces, `exp2` fog sur l'horizon, tone mapping ACES). Caméra à dérive lente + parallaxe pointeur + « glisser pour regarder » ; sur GPU logiciel, rétention progressive (ombres coupées, DPR réduit, bascule vers la photo statique en dernier recours). Image de secours et `prefers-reduced-motion` : la scène n'est jamais indispensable au contenu.
- **(cf. `meta.mjs` pour les 22 signatures consignées.)**

Règle d'or de surcharge : **une direction n'invente jamais de composant de contenu** ; elle choisit une variante, réordonne, et re-style. Si un composant manque, on l'ajoute dans `components.mjs` avec variantes, pas dans une page.

## 5. Emblems et identité

`emblem(commune)` (`src/lib/html.mjs`) dessine un motif géométrique déterministe depuis `commune.slug` (arc, trident, sommet, vague, trait). Ce sont des **marques de démonstration** : aucune commune n'usurpe un armoiries existant. Toute adoption réelle exige une charte validée par la commune et le retrait de la mention « démonstration ».

## 6. Accessibilité — vérification

- Structure : un `<h1>` par page, hiérarchie H2/H3, `main`, `header`, `footer`, `section[aria-labelledby]`.
- Clavier : `Tab` atteint skip-link, nav, CTA, dialog native ; `Esc` ferme les `<dialog>` ; focus visible partout (`:focus-visible`).
- Motion : `prefers-reduced-motion` coupe reveals, compteurs, tickers et transitions (`base.css` + overrides par direction).
- Images : `alt` renseignés depuis la bibliothèque, décoratives en `alt=""` + `aria-hidden="true"`.
- Couleurs : paires vérifiées ≥ 4.5:1 (texte courant) et ≥ 3:1 (texte large / UI). Sections sombres ré-assignent `--fg/--muted/--line*` localement.
- Audit automatisé : `node scripts/check.mjs` (statique) + passe Playwright ×5 viewports dans `scripts/screenshot.mjs`.

## 7. SEO — ce qui est volontaire

Les 168 maquettes sont en `noindex, nofollow` (contenus fictifs). Le système SEO complet existe quand même (canonical, OG, JSON-LD `GovernmentOrganization`, sitemap, robots) : repasser une page en `index` impose de remplacer 100 % du contenu fictif et l'emblème de démonstration par l'identité officielle.

## 8. PixiJS et @pixi/3d — vendor local, zéro CDN

Deux directions vendorisent des bibliothèques tierces localement (copiées vers `dist/assets/vendor/` au build, importées **en dynamique**, jamais sur les autres pages) :

- **Reflets** (n°21, Sô-Ava) : `pixi.min.mjs` (PixiJS v8.23.0, MIT). Deux matériaux shader GLSL300 écrits à la main, heure pilotée, parallaxe — voir `assets/reflets-scene.js`.
- **Relief** (n°22, Natitingou) : `pixi.min.mjs` + `pixijs-3d.min.mjs` v0.1.0 + `pixijs-3d-webgl.min.mjs` (@pixi/3d, MIT), montés via un `importmap` inline propre à la page ; le diorama `assets/models/atakora-diorama.glb` (généré par `scripts/blender_atakora.py`, Blender headless, ≈ 143 Ko) apporte la géométrie, les lumières restent dans le code (`DirectionalLight`, brouillard `exp2`, ACES). Voir `assets/relief-scene.js`.

Sur GPU logiciel (SwiftShader), les deux directions réduisent la résolution interne (détection + ajustement adaptatif sous ~30 fps), plafonnent le ticker et — pour Relief — coupent les ombres puis basculent sur la photo statique en dernier recours. Aucune requête tierce n'existe, y compris ici.

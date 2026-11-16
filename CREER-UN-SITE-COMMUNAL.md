# Créer un site communal à partir du système

Trois scénarios : **ajouter une commune** (données), **créer une direction artistique** (design), **mettre une commune en production** (contenus réels). Suivez l'ordre.

---

## A. Ajouter une 9ᵉ commune (données uniquement, aucune ligne de design)

### 1. Préparez les contenus

Un fichier `src/data/communes/<slug>.mjs`. Copiez la structure d'une commune existante proche (`natitingou` pour du rural, `cotonou` pour de l'urbain) :

```bash
cp src/data/communes/natitingou.mjs src/data/communes/<slug>.mjs
```

Champs à fournir — la validation du build (`src/data/index.mjs`) refuse un fichier incomplet (`[data] <slug>: champ manquant « X »`) :

| Champ | Contenu attendu | Points de vigilance |
| --- | --- | --- |
| `identity` | `{primary, deep, accent, soft, paper, ink}` | couleurs **réelles** de la commune (charte) ; pas l'emblème d'autrui |
| `hero` | `{kicker, title, titleAccent, lead, image, ctaPrimary, ctaSecondary}` | `image` = clé de `assets/img/library.json` |
| `stats` | 4 chiffres `{value, label, note}` | `note` obligatoire (« Découpage administratif », « Démo »…) |
| `news`, `events`, `projects` | actualités / agenda / projets, chacun avec `dateISO` | statuts `En cours` / `Livré` → couleurs de tags |
| `budget`, `markets`, `documents` | montants en FCFA | étiqueter la source si données réelles |
| `map` | `points`, `paths`, `labels`, `terrain` | **coordonnées schématiques**, jamais de positions inventées présentées comme exactes |
| `gastronomy`, `culture`, `economy`, `history`, `attractions`, `youth`, `faq` | collections éditoriales | textes rédigés/validés par la commune |
| `contacts` | `{address, phone, email, hours, arrondissements}` | téléphones/réels cochés, ou masqués |
| `mayor` | `{name, role, quote, signature}` | jamais de nom sans accord ; sinon `« Le Maire »` |
| `seo` | `{description}` | 155 caractères max, unique |

### 2. Déclarez-la

`src/data/index.mjs` :

```js
import <slug> from "./communes/<slug>.mjs";
export const communes = […, <slug>];
```

### 3. Ajoutez ses photographies

```bash
python3 scripts/fetch_images.py      # récupère depuis Wikimedia Commons (requiert le réseau)
python3 scripts/prepare_images.py    # redimensionne → WebP 640/1280/1920 + library.json
```

Chaque entrée `library.json` porte auteur, licence, URL source : ne validez que des images CC / domaine public, et vérifiez les attributions avant publication hors démonstration.

### 4. Build et vérification

```bash
npm run build        # 616 pages doivent être générées
npm run check        # liens, alt, h1…
npm run shoot        # 180 pages × 5 viewports
```

La galerie affiche alors la commune automatiquement ; toutes les directions l'utilisent.

---

## B. Créer une 21ᵉ direction artistique

1. **`src/templates/meta.mjs`** — ajoutez une entrée : `number: 21`, `slug`, `name`, `tagline`, `concept`, `family`, `defaultCommune`, paire `fonts` + `fontLabel`, `palette`, `signature`, `sections`.
2. **`src/templates/registry.mjs`** — `ma21direction: () => import("./ma21direction.mjs")`.
3. **`src/templates/ma21direction.mjs`** — exportez `meta` (depuis `meta.mjs`) et `render(commune, ctx)`. Construisez avec les primitives existantes (`demoBar`, `brand`, `navToggle`, `serviceExplorer`, `newsSection`, `mapSection`, `contactSection`, `footer`, `reportDialog`…). **Ne copiez jamais un bloc d'une autre direction pour simuler une nouveauté : pas de formulaire, de carte ou de footer ad hoc.**
4. **`src/styles/templates/ma21direction.css`** — socle + surcharge. Gardez : skip-link, `:focus-visible`, `prefers-reduced-motion`, un seul `<h1>`, heading order, contraste, `overflow-wrap`.
5. **Polices** — si une nouvelle famille est nécessaire : téléchargez les WOFF2 latin/latin-ext dans `assets/fonts/` + un fichier `assets/fonts/<famille>.css` (modèle des existants) ; sans WOFF2, réutilisez une famille existante.
6. **QA** — `npm run verify` ; capturez `node scripts/screenshot.mjs --shots` ; vérifiez les 28 communes × la direction, pas seulement celle par défaut.

Critères de validation d'une direction :

- au moins **une signature non présente** ailleurs (héros structurellement différent, grille, typographie, rythme, interaction) ;
- si elle utilise une librairie, celle-ci est vendorisée localement (`assets/vendor/`) et chargée uniquement sur ses pages ;
- même couche de données que les 22 autres ;
- responsive 375 → 1920 sans défilement horizontal ;
- contenu 100 % substituable d'une commune à l'autre (aucune chaîne en dur).

---

## C. Mettre une commune réelle en production

La démonstration n'est publiable qu'après transformation réelle :

1. **Contenu réel validé par la commune** : textes, chiffres, budgets, marchés publics, dates de conseil, nom/photo du maire, contacts officiels. Remplacez **toute** mention de démonstration.
2. **Identité officielle** : logo déposé, couleurs charte, emblème remplacé dans `emblem()`, favicon réel.
3. **Images officielles ou libres** : commandez des prises de vue ou licenciez correctement ; supprimez `assets/img/library.json` des credits fictifs et documentez chaque nouvelle source.
4. **SEO** : `site.baseUrl` = domaine réel ; pages devenues `index` (retirer `noindex` pour la commune concernée seulement) ; JSON-LD conforme ; `robots.txt`/`sitemap.xml` cohérents.
5. **Légal** : mentions légales de la commune (responsable de publication, hébergeur), politique de confidentialité si formulaire réel, conformité à la législation béninoise sur les données (ANPD).
6. **Fonctionnel réel** : brancher le guichet sur les télé-procédures existantes (ex. plateforme nationale) ou l'isoler clairement comme simple information ; valider les liens externes (ANCB, ministères, SIG, ANPE).
7. **Déploiement** — site 100 % statique :
   - **Cloudflare Pages** : `npm run build`, output `dist/`, aucune build variable ;
   - **Netlify / GitHub Pages / S3+CDN** : même sortie ;
   - **nginx administration** : `root /var/www/<commune>; try_files $uri $uri/ /404.html;`
   - Vérifiez les en-têtes (`Cache-Control` long sur `/assets/*`, `no-store` sur HTML), HTTPS, et un `security.txt`.
8. **Maintenance** : `npm run verify` en CI à chaque modification de contenu ; un propriétaire éditorial côté commune pour actualités/agenda ; revue des licences images annuelle.

---

## D. Check-list de livraison

- [ ] `npm run verify` vert (build + check + shoot)
- [ ] Galerie affiche la commune avec aperçus à jour (`node scripts/screenshot.mjs --shots` → `assets/previews/`)
- [ ] Tous les crédits photo listés sur `/system.html` et en pied de page
- [ ] Mentions légales / avertissement démo retirés (mise en production) ou conservés (démonstration)
- [ ] Test manuel clavier complet (Tab, Échap) + mobile réel (Android entrée de gamme)

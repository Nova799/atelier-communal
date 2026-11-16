import { documentShell } from "../lib/page.mjs";
import { communes, imageLibrary, site } from "../data/index.mjs";
import { esc, emblem, image, creditLine } from "../lib/html.mjs";
import { icon } from "../lib/icons.mjs";
import { mapBlock } from "../lib/map.mjs";

function mark() {
  return `<svg class="site-mark" viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <rect x="3" y="3" width="42" height="42" rx="1"/>
    <path d="M12 34V18l12-6 12 6v16M18 34V23h12v11M24 7v5"/>
    <circle cx="24" cy="27" r="2.6" fill="currentColor" stroke="none"/>
  </svg>`;
}

function header() {
  return `<header class="gal-head">
    <div class="gal-wrap gal-head__inner">
      <a class="gal-brand" href="/" aria-label="Atelier communal, accueil">
        ${mark()}
        <span><strong>Atelier communal</strong><span>Design system · démonstration</span></span>
      </a>
      <nav class="gal-head__nav" aria-label="Navigation du design system">
        <a href="/">Galerie</a>
        <a href="#jetons">Jetons</a>
        <a href="#composants">Composants</a>
        <a href="#accessibilite">Accessibilité</a>
        <a href="#creer">Créer un site</a>
      </nav>
      <p class="gal-head__status"><span aria-hidden="true"></span>Système</p>
    </div>
  </header>`;
}

function sectionHead(eyebrow, title, lead, id) {
  return `<header class="sys-head">
    <p class="gal-eyebrow"><span></span>${esc(eyebrow)}</p>
    <h2 id="${esc(id)}-title">${title}</h2>
    ${lead ? `<p class="sys-head__lead">${esc(lead)}</p>` : ""}
  </header>`;
}

export function renderSystem({ templates, communes: list }) {
  const identityCards = communes
    .map(
      (c) => `<div class="sys-identity" style="--p:${c.identity.primary};--a:${c.identity.accent};--s:${c.identity.soft}">
        <span class="sys-identity__emblem" style="color:${c.identity.deep}">${emblem(c, { size: 30 })}</span>
        <strong>${esc(c.name)}</strong>
        <span class="sys-identity__dept">${esc(c.department)}</span>
        <div class="sys-identity__swatches" aria-label="Palette de ${esc(c.name)}">
          <span style="background:${c.identity.primary}" title="Primaire ${c.identity.primary}"></span>
          <span style="background:${c.identity.deep}" title="Profonde ${c.identity.deep}"></span>
          <span style="background:${c.identity.accent}" title="Accent ${c.identity.accent}"></span>
          <span style="background:${c.identity.soft}" title="Douce ${c.identity.soft}"></span>
          <span style="background:${c.identity.paper}" title="Papier ${c.identity.paper}"></span>
          <span style="background:${c.identity.ink}" title="Encre ${c.identity.ink}"></span>
        </div>
        <code>${esc(c.identity.primary)} · ${esc(c.identity.accent)}</code>
      </div>`,
    )
    .join("");

  const credits = Object.entries(imageLibrary)
    .sort((a, b) => a[1].credit.localeCompare(b[1].credit))
    .map(
      ([key, v]) => `<li><span class="credits-list__title">${esc(v.caption || key)}</span><span class="credits-list__credit">${esc(creditLine(key))}</span>${v.source ? `<a href="${esc(v.source)}" rel="noopener">Wikimedia Commons</a>` : ""}</li>`,
    )
    .join("");

  const familyCounts = [...new Set(templates.map((t) => t.family))]
    .map((f) => `<li><span>${esc(f)}</span><strong>${templates.filter((t) => t.family === f).length}</strong></li>`)
    .join("");

  const body = `<div class="page-system" id="haut">
    ${header()}
    <main id="contenu">
      <section class="sys-hero">
        <div class="gal-wrap">
          <div class="sys-hero__top">
            <p class="gal-eyebrow"><span></span>Design system · version 1.0</p>
            <p class="sys-hero__meta">Documentation de démonstration</p>
          </div>
          <h1>Le système<br>derrière <em>les directions.</em></h1>
          <div class="sys-hero__bottom">
            <p>Un socle commun de données, d'accessibilité et de performance. Vingt-deux directions qui n'empruntent ni la même grille, ni le même ton, ni la même place au récit.</p>
            <dl>
              <div><dt>Directions</dt><dd>${templates.length}</dd></div>
              <div><dt>Communes</dt><dd>${communes.length}</dd></div>
              <div><dt>Pages</dt><dd>${templates.length * communes.length}</dd></div>
              <div><dt>Dépendances</dt><dd>0</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="sys-section" id="principes">
        <div class="gal-wrap">
          ${sectionHead("Principes", "Quatre règles, non négociables.", "Elles tiennent ensemble la liberté graphique et la crédibilité institutionnelle.", "principes")}
          <ol class="sys-principles">
            <li><span>01</span><h3>La donnée fait le site</h3><p>Une fiche communale décrit l'identité, les textes, les chiffres, les services, les projets, la carte, le patrimoine. Aucune direction ne code un contenu en dur.</p></li>
            <li><span>02</span><h3>La démonstration se voit</h3><p>Chaque page affiche son statut : bandeau permanent, notes de section, coordonnées fictives, aucun logo officiel ni portrait réel.</p></li>
            <li><span>03</span><h3>L'accessibilité précède l'effet</h3><p>Structure sémantique, contrastes, focus visibles, dialogues natifs, formulaires étiquetés, mouvement réductible. Les effets ne portent jamais seuls une information.</p></li>
            <li><span>04</span><h3>La performance est un choix éditorial</h3><p>HTML pré-rendu, CSS local, images WebP dimensionnées, polices auto-hébergées, JavaScript minimal et non bloquant.</p></li>
          </ol>
        </div>
      </section>

      <section class="sys-section sys-section--paper" id="jetons">
        <div class="gal-wrap">
          ${sectionHead("Jetons", "Une identité par commune, un socle par direction.", "Chaque commune fournit six couleurs et un motif d'emblème géométrique. Chaque direction compose ces couleurs avec ses propres neutres, sa typographie et ses espacements.", "jetons")}
          <div class="sys-identities">${identityCards}</div>
          <div class="sys-token-grid">
            <article class="sys-token">
              <h3>Typographie</h3>
              <p class="sys-type sys-type--display">Fraunces,<br><em>serif de caractère.</em></p>
              <p class="sys-type sys-type--body">Instrument Sans pour le texte courant, les libellés et les interfaces.</p>
              <p class="sys-type sys-type--mono">JetBrains Mono · annotations, chiffres, références</p>
              <p class="sys-token__note">Onze familles auto-hébergées. Chaque page n'en charge que deux ou trois.</p>
            </article>
            <article class="sys-token">
              <h3>Échelle</h3>
              <ul class="sys-scale">
                <li style="--s:6">Display <span>clamp 3 → 9,5 rem</span></li>
                <li style="--s:5">Titre 1 <span>clamp 2,6 → 6,4 rem</span></li>
                <li style="--s:4">Titre 2 <span>clamp 2,1 → 4,2 rem</span></li>
                <li style="--s:3">Titre 3 <span>clamp 1,7 → 2,9 rem</span></li>
                <li style="--s:2">Titre 4 <span>clamp 1,4 → 2 rem</span></li>
                <li style="--s:1">Corps <span>clamp 0,95 → 1,06 rem</span></li>
              </ul>
              <p class="sys-token__note">Espacements section : <code>clamp(4rem, 8vw, 8rem)</code>. Largeur de contenu : <code>1320px</code>.</p>
            </article>
            <article class="sys-token">
              <h3>Motifs d'emblème</h3>
              <p>Huit motifs géométriques, dessinés localement, jamais des armoiries officielles.</p>
              <div class="sys-emblem-grid">
                ${communes.map((c) => `<div><span style="color:${c.identity.primary}">${emblem(c, { size: 30 })}</span><small>${esc(c.identity.motif)}</small></div>`).join("")}
              </div>
              <p class="sys-token__note">Vagues, arche, carrefour, pyramide, baobab, montagnes, lance, pirogue.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="sys-section" id="composants">
        <div class="gal-wrap">
          ${sectionHead("Composants", "Des primitives partagées, pas un thème.", "Boutons, étiquettes, champs, fiches de démarches, carte, dialogues et motifs de données sont communs. Les directions les recomposent, les dimensionnent et les habillent.", "composants")}
          <div class="sys-components">
            <article class="sys-demo">
              <h3>Boutons</h3>
              <div class="sys-demo__row">
                <button class="btn btn--solid" type="button">Action principale ${icon("arrow-right", { size: 17 })}</button>
                <button class="btn btn--ghost" type="button">Action secondaire</button>
                <button class="btn btn--solid" type="button" disabled>Indisponible</button>
              </div>
              <p class="sys-demo__note">Hauteur minimale de 46 px, focus visible, icônes décoratives masquées aux lecteurs d'écran.</p>
            </article>
            <article class="sys-demo">
              <h3>Étiquettes et progression</h3>
              <div class="sys-demo__row">
                <span class="tag tag--success">Livré</span>
                <span class="tag tag--warning">En cours</span>
                <span class="tag">Publié</span>
              </div>
              <div class="sys-progress-demo">
                <div class="progress" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="Exemple de progression"><span class="progress__bar" style="--v:68%"></span></div>
                <span>68 %</span>
              </div>
              <p class="sys-demo__note">La progression est toujours doublée d'une valeur textuelle.</p>
            </article>
            <article class="sys-demo">
              <h3>Champs</h3>
              <label class="field"><span>Quartier</span><input type="text" placeholder="Ex. quartier central"></label>
              <label class="field"><span>Message</span><textarea rows="2" placeholder="Décrivez votre demande"></textarea></label>
              <p class="sys-demo__note">Étiquette explicite, anneau de focus, message d'erreur natif du navigateur.</p>
            </article>
            <article class="sys-demo">
              <h3>Fiche de démarche</h3>
              <details class="svc" open><summary class="svc__summary"><span class="svc__icon">${icon("file", { size: 22 })}</span><span class="svc__body"><span class="svc__cat">État civil</span><span class="svc__name">Acte de naissance</span><span class="svc__short">Obtenir une copie ou un extrait.</span></span><span class="svc__side"><span class="svc__online">En ligne</span><span class="svc__plus" aria-hidden="true"></span></span></summary><div class="svc__panel"><dl class="svc__facts"><div><dt>Délai</dt><dd>48 h à 5 jours</dd></div><div><dt>Coût</dt><dd>Timbre communal</dd></div></dl><p class="svc__demo">${icon("alert", { size: 13 })} Démarche de démonstration.</p></div></details>
              <p class="sys-demo__note">Le composant natif <code>&lt;details&gt;</code> fonctionne sans JavaScript.</p>
            </article>
          </div>
          <div class="sys-callout">
            <strong>Dialogues natifs.</strong> Le menu mobile, la galerie de changement de commune et le formulaire de signalement utilisent <code>&lt;dialog&gt;</code> et son piège de focus natif. La touche <kbd>Échap</kbd> ferme, le clic sur le fond aussi, le défilement du corps est verrouillé.
          </div>
        </div>
      </section>

      <section class="sys-section sys-section--paper" id="carte">
        <div class="gal-wrap">
          ${sectionHead("Carte", "Une carte schématique, honnête sur son statut.", "Aucune tuile payante, aucun service externe. Le fond dépend du terrain de la commune : lagune, côte, plateau, savane, montagne. Les points sont fictifs et les filtres sont accessibles au clavier via la liste.", "carte")}
          ${mapBlock(communes[0], { compact: true })}
          <p class="sys-caption">Exemple pour ${esc(communes[0].name)}. Le composant est partagé par les vingt-deux directions et se restyle par variables CSS.</p>
        </div>
      </section>

      <section class="sys-section" id="accessibilite">
        <div class="gal-wrap">
          ${sectionHead("Accessibilité", "Ce qui est vérifié, ce qui reste à vérifier.", "Le socle vise WCAG 2.2 AA. Les tests automatisés ne remplacent pas une évaluation manuelle avec des utilisateurs.", "accessibilite")}
          <div class="sys-check-grid">
            <div>
              <h3>Intégré au socle</h3>
              <ul class="sys-check">
                <li>Un seul <code>h1</code> par page, hiérarchie de titres continue.</li>
                <li>Lien d'évitement, repères sémantiques, navigation clavier.</li>
                <li>Focus visible sur tous les éléments interactifs.</li>
                <li>Contrastes de texte vérifiés ; information jamais portée par la couleur seule.</li>
                <li>Images informatives avec alternative, images décoratives masquées.</li>
                <li>Formulaires étiquetés, erreurs natives, aucun envoi réel.</li>
                <li><code>prefers-reduced-motion</code> respecté : révélations et compteurs neutralisés.</li>
                <li>Dialogues natifs avec fermeture Échap et restitution du focus.</li>
                <li>Carte dotée d'une liste textuelle équivalente et de filtres accessibles.</li>
              </ul>
            </div>
            <div>
              <h3>À faire avant une mise en production réelle</h3>
              <ul class="sys-check sys-check--todo">
                <li>Audit WCAG complet avec utilisateurs et technologies d'assistance.</li>
                <li>Validation des contenus par les services communaux et les autorités compétentes.</li>
                <li>Vérification des mentions légales, données personnelles et accessibilité.</li>
                <li>Tests sur matériel bas de gamme et connexions lentes.</li>
                <li>Remplacement de la carte schématique par une source géographique autorisée.</li>
                <li>Documentation des procédures de mise à jour et de secours.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="sys-section sys-section--dark" id="performance">
        <div class="gal-wrap">
          ${sectionHead("Performance", "Statique par défaut, interactif par exception.", "Le site est généré en HTML : pas d'hydratation, pas de framework client, pas de requête tierce. Les seules images sont locales, en WebP, avec largeur, hauteur et tailles responsives.", "performance")}
          <div class="sys-metrics">
            <div><strong>0</strong><span>dépendance d'exécution</span></div>
            <div><strong>160</strong><span>pages pré-rendues</span></div>
            <div><strong>2–3</strong><span>familles de polices par page</span></div>
            <div><strong>1</strong><span>module JavaScript partagé</span></div>
          </div>
          <ul class="sys-perf-list">
            <li><span>Images</span>WebP locaux, 640/1280/1920 px, dimensions réservées, chargement différé hors héros, crédits conservés.</li>
            <li><span>Polices</span>WOFF2 auto-hébergés, sous-ensembles latin et latin-ext, <code>font-display: swap</code>, deux à trois familles par direction.</li>
            <li><span>CSS</span>Feuille commune et feuille de direction, aucune bibliothèque, variables CSS pour les identités.</li>
            <li><span>JavaScript</span>Un module ES natif, progressive enhancement, aucun réseau, aucun stockage, aucune mesure d'audience.</li>
            <li><span>SEO</span>Titres, descriptions, canoniques, Open Graph et JSON-LD ; pages de démonstration en <code>noindex</code>, galerie et système indexables.</li>
          </ul>
        </div>
      </section>

      <section class="sys-section" id="architecture">
        <div class="gal-wrap">
          ${sectionHead("Architecture", "Un générateur lisible en une après-midi.", "Le build valide les fiches, résout les démarches, rend les vingt-deux directions, copie les assets et écrit la galerie, le design system et le plan de site.", "architecture")}
          <div class="sys-arch">
            <div class="sys-arch__col">
              <h3>Contenu</h3>
              <code>src/data/communes/*.mjs</code>
              <code>src/data/services.mjs</code>
              <code>assets/img/library.json</code>
            </div>
            <span class="sys-arch__arrow" aria-hidden="true">→</span>
            <div class="sys-arch__col">
              <h3>Primitives</h3>
              <code>src/lib/html.mjs</code>
              <code>src/lib/map.mjs</code>
              <code>src/lib/components.mjs</code>
              <code>src/lib/page.mjs</code>
            </div>
            <span class="sys-arch__arrow" aria-hidden="true">→</span>
            <div class="sys-arch__col">
              <h3>Directions</h3>
              <code>src/templates/*.mjs</code>
              <code>src/styles/templates/*.css</code>
            </div>
            <span class="sys-arch__arrow" aria-hidden="true">→</span>
            <div class="sys-arch__col">
              <h3>Sortie</h3>
              <code>dist/t/&lt;direction&gt;/&lt;commune&gt;/</code>
              <code>dist/index.html</code>
              <code>dist/system.html</code>
            </div>
          </div>
          <div class="sys-families">
            <h3>Répartition des familles</h3>
            <ul>${familyCounts}</ul>
          </div>
        </div>
      </section>

      <section class="sys-section sys-section--paper" id="creer">
        <div class="gal-wrap">
          ${sectionHead("Créer un site communal", "Trois étapes, aucune magie.", "La procédure complète est documentée dans le dépôt. Voici l'essentiel pour ajouter une commune ou une direction.", "creer")}
          <ol class="sys-steps">
            <li><span>01</span><div><h3>Décrire la commune</h3><p>Créer une fiche dans <code>src/data/communes/</code>, choisir six couleurs, un motif, un terrain, les démarches, les actualités, les projets et les contacts. Ajouter la fiche à <code>src/data/index.mjs</code>.</p></div></li>
            <li><span>02</span><div><h3>Vérifier les images et les textes</h3><p>Utiliser des photographies documentées et créditées. Aucun contenu officiel ne doit être inventé. Pour une vraie commune, remplacer les contenus de démonstration par des contenus validés et retirer le statut de démonstration.</p></div></li>
            <li><span>03</span><div><h3>Construire et contrôler</h3><p><code>npm run build</code>, puis <code>npm run check</code> pour les liens, images, titres et identifiants. Pour une nouvelle direction, créer un module dans <code>src/templates/</code>, une feuille dans <code>src/styles/templates/</code>, puis déclarer la direction dans <code>meta.mjs</code> et <code>registry.mjs</code>.</p></div></li>
          </ol>
          <pre class="sys-code"><code>// src/data/communes/ma-commune.mjs
export default {
  slug: "ma-commune",
  name: "Ma Commune",
  department: "Atlantique",
  identity: {
    primary: "#1f4d46",
    deep: "#12332f",
    accent: "#c17a3c",
    soft: "#e7eee9",
    paper: "#faf6ed",
    ink: "#17201d",
    motif: "waves"
  },
  hero: { /* titre, accroche, image, appels à l'action */ },
  // … récit, chiffres, actualités, projets, carte, patrimoine, contacts
};</code></pre>
          <p class="sys-caption">Le build échoue si un champ requis, une démarche ou une image est manquant. C'est volontaire.</p>
        </div>
      </section>

      <section class="sys-section" id="credits">
        <div class="gal-wrap">
          ${sectionHead("Crédits", "Photographies, licences, sources.", "Les images proviennent de Wikimedia Commons et sont créditées individuellement. Les identités visuelles, emblèmes et textes sont générés pour la démonstration.", "credits")}
          <p class="sys-caption">${esc(site.creditsNote)} Les pages de démonstration ne réutilisent aucun logo officiel ni portrait de personne réelle.</p>
          <ul class="credits-list credits-list--sys">${credits}</ul>
        </div>
      </section>
    </main>

    <footer class="gal-foot">
      <div class="gal-wrap gal-foot__top">
        <div>
          <a class="gal-brand gal-brand--foot" href="/">${mark()}<span><strong>Atelier communal</strong><span>Design system · démonstration</span></span></a>
          <p class="gal-foot__note">${esc(site.disclaimer)}</p>
        </div>
        <nav aria-label="Galerie"><h2>Explorer</h2><a href="/">Les 22 directions</a><a href="/#communes">Les ${communes.length} communes</a><a href="/system.html#composants">Composants</a></nav>
        <nav aria-label="Méthode"><h2>Méthode</h2><a href="#architecture">Architecture</a><a href="#accessibilite">Accessibilité</a><a href="#creer">Créer un site</a></nav>
        <div><h2>Statut</h2><p>Maquette de démonstration. Ne pas présenter comme un site officiel de commune.</p><p class="gal-foot__meta">${templates.length} directions · ${communes.length} communes</p></div>
      </div>
      <div class="gal-wrap gal-foot__bottom"><p>Atelier communal · design system · ${new Date().getFullYear()}</p><p>Contenus fictifs — aucune donnée officielle.</p></div>
    </footer>
  </div>`;

  return documentShell({
    title: "Design system · Atelier communal — démonstration",
    description:
      "Design system de la démonstration Atelier communal : jetons, composants, carte, accessibilité, performance, architecture et procédure pour créer un site communal.",
    canonical: `${site.baseUrl}/system.html`,
    body,
    bodyClass: "page page--system",
    fonts: ["instrument-sans", "fraunces", "jetbrains-mono"],
    headExtra: `<link rel="stylesheet" href="/assets/styles/pages.css">`,
    themeColor: "#151816",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "Design system — Atelier communal",
      description: "Documentation d'un système de sites communaux pour le Bénin : jetons, composants, accessibilité, performance et architecture.",
      inLanguage: "fr",
      url: `${site.baseUrl}/system.html`,
      isPartOf: { "@type": "WebSite", name: "Atelier communal — démonstration", url: `${site.baseUrl}/` },
    },
  });
}

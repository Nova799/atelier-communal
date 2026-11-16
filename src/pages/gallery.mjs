import { documentShell } from "../lib/page.mjs";
import { communeBySlug, communes, site } from "../data/index.mjs";
import { esc, emblem } from "../lib/html.mjs";
import { icon } from "../lib/icons.mjs";

const familySlug = (family) =>
  family
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

const communeDefaultTemplate = {
  cotonou: "atlas",
  "porto-novo": "registre",
  ouidah: "tambour",
  abomey: "tissage",
  parakou: "place-publique",
  natitingou: "monolithe",
  nikki: "griot",
  "so-ava": "lagune",
};

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
        <span><strong>Atelier communal</strong><span>Vingt-deux directions · Bénin</span></span>
      </a>
      <nav class="gal-head__nav" aria-label="Navigation de la galerie">
        <a href="#directions">Les directions</a>
        <a href="#communes">Les communes</a>
        <a href="#systeme">Le système</a>
        <a href="/system.html">Design system ${icon("arrow-up-right", { size: 14 })}</a>
      </nav>
      <p class="gal-head__status"><span aria-hidden="true"></span>Démonstration</p>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="gal-foot">
    <div class="gal-wrap gal-foot__top">
      <div>
        <a class="gal-brand gal-brand--foot" href="/">${mark()}<span><strong>Atelier communal</strong><span>Un socle, vingt écritures</span></span></a>
        <p class="gal-foot__note">${esc(site.disclaimer)}</p>
      </div>
      <nav aria-label="Liens de la démonstration">
        <h2>Explorer</h2>
        <a href="#directions">Les 22 directions</a>
        <a href="#communes">Les 8 communes</a>
        <a href="/system.html">Design system</a>
        <a href="/system.html#credits">Crédits photographiques</a>
      </nav>
      <nav aria-label="Ressources">
        <h2>Ressources</h2>
        <a href="/system.html#architecture">Architecture</a>
        <a href="/system.html#accessibilite">Accessibilité</a>
        <a href="/system.html#performance">Performance</a>
        <a href="/system.html#creer">Créer un site communal</a>
      </nav>
      <div>
        <h2>Technique</h2>
        <p>Générateur statique Node.js, zéro dépendance d'exécution. HTML pré-rendu, CSS local, modules ES natifs, polices auto-hébergées.</p>
        <p class="gal-foot__meta">176 pages · 8 communes · 22 directions</p>
      </div>
    </div>
    <div class="gal-wrap gal-foot__bottom">
      <p>Atelier communal · maquette de démonstration · ${new Date().getFullYear()}</p>
      <p>Contenus fictifs — aucune donnée officielle.</p>
    </div>
  </footer>`;
}

function previewCard(t, previews) {
  const commune = communeBySlug[t.defaultCommune];
  const hasPreview = previews?.has?.(t.slug);
  const preview = hasPreview
    ? `<img src="/assets/previews/${esc(t.slug)}.jpg" alt="Aperçu de la direction ${esc(t.name)} pour ${esc(commune.name)}" width="1440" height="1000" loading="lazy" decoding="async">`
    : `<span class="gal-preview__placeholder" aria-hidden="true">
        <span style="--p:${commune.identity.primary};--a:${commune.identity.accent};--s:${commune.identity.soft}"></span>
        <b>${String(t.number).padStart(2, "0")}</b>
        <em>${esc(t.name)}</em>
      </span>`;
  const communeLinks = communes
    .map((c) => `<a href="/t/${esc(t.slug)}/${esc(c.slug)}/" title="${esc(c.name)}"${c.slug === commune.slug ? ' aria-current="true"' : ""}>${esc(c.name)}</a>`)
    .join("");
  return `<article class="gal-card" id="direction-${esc(t.slug)}" data-gallery-item data-family="${esc(familySlug(t.family))}" data-commune="${esc(commune.slug)}">
    <a class="gal-preview" href="/t/${esc(t.slug)}/${esc(commune.slug)}/" aria-label="Voir la direction ${esc(t.name)} pour ${esc(commune.name)}">
      ${preview}
      <span class="gal-preview__overlay">Voir la direction ${icon("arrow-up-right", { size: 18 })}</span>
      <span class="gal-preview__tag">${esc(t.family)}</span>
    </a>
    <div class="gal-card__body">
      <div class="gal-card__head">
        <span class="gal-card__n">${String(t.number).padStart(2, "0")}</span>
        <h3><a href="/t/${esc(t.slug)}/${esc(commune.slug)}/">${esc(t.name)}</a></h3>
        <span class="gal-card__family">${esc(t.family)}</span>
      </div>
      <p class="gal-card__tagline">${esc(t.tagline)}</p>
      <p class="gal-card__concept">${esc(t.concept)}</p>
      <dl class="gal-card__specs">
        <div><dt>Typographie</dt><dd>${esc(t.fontLabel)}</dd></div>
        <div><dt>Palette</dt><dd>${esc(t.palette)}</dd></div>
        <div><dt>Signature</dt><dd>${esc(t.signature)}</dd></div>
      </dl>
      <div class="gal-card__communes">
        <span>Voir avec</span>
        <div>${communeLinks}</div>
      </div>
    </div>
  </article>`;
}

export function renderGallery({ templates, previews }) {
  const families = [...new Set(templates.map((t) => t.family))];
  const cards = templates.map((t) => previewCard(t, previews)).join("");
  const indexLinks = templates
    .map(
      (t) => `<a href="#direction-${esc(t.slug)}" class="gal-index__item"><span>${String(t.number).padStart(2, "0")}</span><b>${esc(t.name)}</b><em>${esc(t.family)}</em></a>`,
    )
    .join("");
  const communesCards = communes
    .map((c) => {
      const t = communeDefaultTemplate[c.slug] || "atlas";
      return `<a class="gal-commune" href="/t/${esc(t)}/${esc(c.slug)}/">
        <span class="gal-commune__emblem">${emblem(c, { size: 34 })}</span>
        <span class="gal-commune__name">${esc(c.name)}</span>
        <span class="gal-commune__dept">${esc(c.department)} · ${esc(c.region)}</span>
        <span class="gal-commune__motto">${esc(c.motto)}</span>
        <span class="gal-commune__go">${icon("arrow-up-right", { size: 16 })}</span>
      </a>`;
    })
    .join("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Atelier communal — vingt-deux directions de sites communaux",
    description:
      "Galerie de démonstration de vingt-deux directions graphiques et éditoriales pour les communes du Bénin, déclinées sur huit communes fictives. Contenus non officiels.",
    url: `${site.baseUrl}/`,
    inLanguage: "fr",
    isAccessibleForFree: true,
    about: ["Site communal", "Design éditorial", "Accessibilité numérique", "Bénin"],
    hasPart: templates.map((t) => ({
      "@type": "CreativeWork",
      name: `${t.name} — ${t.tagline}`,
      url: `${site.baseUrl}/t/${t.slug}/${t.defaultCommune}/`,
      genre: t.family,
    })),
  };

  const body = `<div class="page-gallery" id="haut">
    ${header()}
    <main id="contenu">
      <section class="gal-hero">
        <div class="gal-wrap">
          <div class="gal-hero__top">
            <p class="gal-eyebrow"><span></span>Un système éditorial pour les communes du Bénin</p>
            <p class="gal-hero__edition">Édition de démonstration · 2026</p>
          </div>
          <h1>Vingt-deux façons<br>de raconter <em>une commune.</em></h1>
          <div class="gal-hero__bottom">
            <p class="gal-hero__lead">Pas vingt-deux peaux de couleurs. Vingt-deux directions graphiques et éditoriales, portées par une même architecture de contenu et de données. Chaque direction change la hiérarchie, le rythme, la typographie et la manière de raconter — jamais la crédibilité.</p>
            <dl class="gal-hero__figures">
              <div><dt>Directions</dt><dd>22</dd></div>
              <div><dt>Communes</dt><dd>8</dd></div>
              <div><dt>Pages</dt><dd>176</dd></div>
              <div><dt>Dépendances</dt><dd>0</dd></div>
            </dl>
          </div>
          <div class="gal-index" aria-label="Index des vingt-deux directions">${indexLinks}</div>
        </div>
        <div class="gal-hero__band" aria-hidden="true">
          ${templates.map((t) => `<span style="--p:${communeBySlug[t.defaultCommune].identity.primary};--a:${communeBySlug[t.defaultCommune].identity.accent}" title="${esc(t.name)}"></span>`).join("")}
        </div>
      </section>

      <section class="gal-manifesto">
        <div class="gal-wrap gal-manifesto__grid">
          <p class="gal-manifesto__kicker">Le principe</p>
          <div>
            <h2>Un socle commun.<br><em>Vingt-deux écritures irréductibles.</em></h2>
            <div class="gal-manifesto__cols">
              <p>Les vingt-deux directions partagent les mêmes données, les mêmes composants d'accessibilité et la même exigence de performance. Elles ne partagent ni la grille, ni le ton visuel, ni la place du récit.</p>
              <p>Changer de commune ne change pas seulement un logo : le territoire, les chiffres, les démarches, les actualités, les projets, la carte et le patrimoine se recomposent. Changer de direction change la manière dont tout cela se lit.</p>
            </div>
            <ul class="gal-manifesto__principles">
              <li><span>01</span><div><strong>La donnée avant le décor</strong><p>Chaque page est rendue à partir d'une fiche communale structurée : aucun contenu codé en dur dans une direction.</p></div></li>
              <li><span>02</span><div><strong>La démonstration assumée</strong><p>Chiffres, identités, coordonnées et projets sont fictifs. Le statut est visible sur chaque page, dans les sections et le pied de page.</p></div></li>
              <li><span>03</span><div><strong>L'accessibilité comme socle</strong><p>Une seule base de composants : dialogues natifs, contrastes vérifiés, navigation clavier, mouvement réductible, structure sémantique.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="gal-directions" id="directions">
        <div class="gal-wrap">
          <div class="gal-section-head">
            <div>
              <p class="gal-eyebrow"><span></span>La collection</p>
              <h2>Les vingt et une directions</h2>
            </div>
            <p class="gal-directions__lead">Chaque carte ouvre la direction sur sa commune d'élection. Les huit noms en bas permettent de vérifier le même système sur un autre territoire.</p>
          </div>
          <div class="gal-filters" role="group" aria-label="Filtrer les directions par famille">
            <button type="button" class="is-active" data-gallery-filter="all" aria-pressed="true">Toutes <span>20</span></button>
            ${families.map((f) => `<button type="button" data-gallery-filter="${esc(familySlug(f))}" aria-pressed="false">${esc(f)} <span>${templates.filter((t) => t.family === f).length}</span></button>`).join("")}
          </div>
          <p class="gal-count" data-gallery-count aria-live="polite">22 directions affichées</p>
          <div class="gal-grid" data-gallery-grid>${cards}</div>
        </div>
      </section>

      <section class="gal-compare" id="communes">
        <div class="gal-wrap">
          <div class="gal-section-head">
            <div>
              <p class="gal-eyebrow"><span></span>Le test</p>
              <h2>Huit communes,<br><em>pas huit copies.</em></h2>
            </div>
            <p class="gal-directions__lead">Cotonou n'est pas Ouidah. Sô-Ava n'est pas Natitingou. Chaque fiche communale apporte son identité, son motif, sa géographie, son économie, ses actualités et ses services. Les directions révèlent ces différences au lieu de les lisser.</p>
          </div>
          <div class="gal-communes">${communesCards}</div>
        </div>
      </section>

      <section class="gal-system" id="systeme">
        <div class="gal-wrap">
          <div class="gal-section-head">
            <div>
              <p class="gal-eyebrow"><span></span>Sous la surface</p>
              <h2>Un générateur,<br>pas un thème.</h2>
            </div>
            <p class="gal-directions__lead">Le contenu est validé au build, les images sont servies en WebP avec dimensions réservées, les polices sont auto-hébergées, les interactions sont des modules ES natifs.</p>
          </div>
          <ol class="gal-pipeline">
            <li><span>01</span><h3>Données communales</h3><p>Huit fiches structurées : identité, récit, chiffres, actualités, projets, carte, patrimoine, contacts.</p></li>
            <li><span>02</span><h3>Primitives partagées</h3><p>Images responsives, emblèmes géométriques, composants de démarches, carte schématique, dialogues accessibles.</p></li>
            <li><span>03</span><h3>Direction éditoriale</h3><p>Une grille, une typographie, un rythme de sections et des signatures propres à chaque direction.</p></li>
            <li><span>04</span><h3>HTML statique</h3><p>176 pages pré-rendues, sans hydratation ni dépendance côté client. Déploiement sur n'importe quel hébergeur de fichiers.</p></li>
          </ol>
          <div class="gal-system__links">
            <a href="/system.html">Lire le design system ${icon("arrow-right", { size: 18 })}</a>
            <a href="/system.html#creer">Créer un nouveau site communal ${icon("arrow-right", { size: 18 })}</a>
          </div>
        </div>
      </section>
    </main>
    ${footer()}
  </div>`;

  return documentShell({
    title: "Atelier communal — vingt-deux directions de sites communaux · démonstration",
    description:
      "Vingt-deux directions graphiques et éditoriales originales pour des sites communaux béninois, déclinées sur huit communes fictives. Démonstration : contenus non officiels.",
    canonical: `${site.baseUrl}/`,
    body,
    bodyClass: "page page--gallery",
    fonts: ["instrument-sans", "fraunces", "jetbrains-mono"],
    headExtra: `<link rel="stylesheet" href="/assets/styles/pages.css">`,
    jsonLd,
    themeColor: "#141715",
  });
}

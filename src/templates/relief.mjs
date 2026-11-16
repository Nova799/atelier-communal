import { esc, image, creditLine, captionFor } from "../lib/html.mjs";
import { icon } from "../lib/icons.mjs";
import { templateMeta } from "./meta.mjs";
import {
  brand,
  navToggle,
  mobileNav,
  demoBar,
  footer,
  communeRail,
  serviceExplorer,
  reportDialog,
  newsSection,
  attractionsSection,
  projectsSection,
  statsBand,
  mapSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "relief");

const navItems = [
  { label: "La colline", href: "#haut" },
  { label: "Sites", href: "#sites" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t22" id="haut">
  <header class="t22-head" data-header>
    <div class="t22-head__inner">
      ${brand(commune, { sub: "Relief · une commune en volume" })}
      <nav class="t22-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t22-head__cta" href="#services">Le guichet ${icon("arrow-up-right", { size: 14 })}</a>
      ${navToggle("Ouvrir le sommaire")}
    </div>
  </header>

  <main id="contenu">
    <section class="relief-hero" id="relief-hero" aria-labelledby="relief-title">
      <picture class="relief-hero__fallback" aria-hidden="true">
        ${image(commune.hero.image, { sizes: "100vw", loading: "eager", fetchpriority: "high", decorative: true })}
      </picture>
      <div id="relief-scene" class="relief-scene" aria-hidden="true"></div>
      <div class="relief-hero__scrim" aria-hidden="true"></div>

      <div class="relief-hero__inner">
        <p class="t22-kicker"><span aria-hidden="true"></span> 22 · ${esc(commune.department)} · ${esc(commune.region)}</p>
        <h1 id="relief-title"><span>${esc(commune.name)}</span><em>${esc(commune.hero.titleAccent)}</em></h1>
        <p class="t22-hero__lead">${esc(commune.hero.lead)}</p>
        <div class="t22-hero__actions">
          <a class="btn btn--solid" href="#collines">Commencer la visite ${icon("arrow-down", { size: 17 })}</a>
          <a class="btn btn--ghost" href="#services">Le guichet de la commune</a>
        </div>
      </div>

      <p class="t22-chip">Diorama 3D — généré pour la démonstration</p>
      <p class="t22-hint"><span aria-hidden="true">${icon("move", { size: 18 })}</span>Faites glisser pour regarder la colline</p>
      <p class="relief-hero__credit">${esc(captionFor(commune.hero.image, commune.motto))} · ${esc(creditLine(commune.hero.image))}</p>
      <svg class="relief-hero__ridge" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 62 90 40l95 14 80-34 70 26 118-20 96 30 130-44 84 34 118-24 92 30 108-38 76 28 88-18 96 30v58H0Z" />
      </svg>
    </section>

    <section class="t22-collines section" id="collines" aria-labelledby="collines-title">
      <div class="t22-collines__grid">
        <div class="t22-collines__copy">
          <p class="t22-label"><span>01</span> Collines</p>
          <h2 id="collines-title">Le territoire, à hauteur d'homme</h2>
          <p class="t22-lead">${esc(commune.intro.text)}</p>
          <blockquote class="t22-quote">${esc(commune.intro.pullquote)}</blockquote>
          ${demoNote("Récit et citation de démonstration.")}
        </div>
        <figure class="t22-collines__figure">
          <span class="t22-collines__fig" aria-hidden="true">FIG. 02</span>
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 40vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
      <div class="t22-collines__stats">
        ${statsBand(commune, { variant: "blocks" })}
      </div>
    </section>

    ${attractionsSection(commune, {
      variant: "cards",
      id: "sites",
      eyebrow: "02 · Sites · routes des Tata Somba",
      title: "Ce que les collines gardent",
      lead: "Des lieux réels, décrits ici dans le cadre d'une démonstration.",
    })}

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "03 · Projets · le territoire en chantier",
      title: "Ce qui change, au sommet",
      lead: "Opérations, budgets et avancements de démonstration.",
    })}

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "04 · Actualités · la feuille des collines",
      title: "Ce que la colline murmure",
      lead: "Quatre nouvelles fictives, entre marchés, patrimoine et vie quotidienne.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "05 · Carte · relief et pistes",
      title: "Les pistes de la colline",
      lead: "Carte schématique de démonstration. Les positions et distances sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "grid",
      id: "services",
      eyebrow: "06 · Guichet · démarches",
      title: "Vos démarches, sans détour de piste",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t22-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t22-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}
<script type="importmap">{"imports":{"pixi.js":"/assets/vendor/pixi.min.mjs","@pixi/3d":"/assets/vendor/pixijs-3d.min.mjs","@pixi/3d/webgl":"/assets/vendor/pixijs-3d-webgl.min.mjs"}}</script>
<script type="module" src="/assets/relief-scene.js"></script>`;
}

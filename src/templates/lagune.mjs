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
  projectsSection,
  statsBand,
  attractionsSection,
  gastronomySection,
  mapSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "lagune");

const navItems = [
  { label: "Rivage", href: "#haut" },
  { label: "La commune", href: "#commune" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const tideMarks = ["0 m", "1 m", "2 m", "3 m", "4 m"];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t16" id="haut">
  <header class="t16-head" data-header>
    <div class="t16-head__inner">
      ${brand(commune, { sub: "Lagune · portail communal" })}
      <nav class="t16-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t16-head__cta" href="#services">Le guichet ${icon("arrow-up-right", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t16-hero" aria-labelledby="t16-title">
      <figure class="t16-hero__media">
        ${image(commune.hero.image, { sizes: "100vw", loading: "eager", fetchpriority: "high" })}
        <figcaption><span>${esc(captionFor(commune.hero.image, commune.motto))}</span><span>${esc(creditLine(commune.hero.image))}</span></figcaption>
      </figure>
      <div class="t16-hero__scrim" aria-hidden="true"></div>
      <span class="t16-hero__sun" aria-hidden="true"></span>

      <div class="t16-hero__inner">
        <p class="t16-kicker"><span aria-hidden="true"></span> ${esc(commune.hero.kicker)}</p>
        <h1 id="t16-title"><span>${esc(commune.name)}</span><em>${esc(commune.hero.titleAccent)}</em></h1>
        <p class="t16-hero__lead">${esc(commune.hero.lead)}</p>
        <div class="t16-hero__actions">
          <a class="btn btn--solid" href="#commune">Descendre au rivage ${icon("arrow-down", { size: 17 })}</a>
          <a class="btn btn--ghost" href="#carte">Lire le territoire</a>
        </div>
        <dl class="t16-hero__facts">
          <div><dt>Département</dt><dd>${esc(commune.department)}</dd></div>
          <div><dt>Arrondissements</dt><dd>${esc(commune.contacts.arrondissements)}</dd></div>
          <div><dt>Repère</dt><dd>${esc(commune.motto)}</dd></div>
        </dl>
      </div>

      <div class="t16-gauge" aria-hidden="true">
        <span class="t16-gauge__label">Profondeur</span>
        <ol>
          ${tideMarks.map((m, i) => `<li style="--i:${i}"><span></span>${m}</li>`).join("")}
        </ol>
      </div>

      <div class="t16-hero__scroll"><span aria-hidden="true"></span> Le rivage</div>
      <svg class="t16-waves t16-waves--hero" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path class="t16-waves__back" d="M0 96c120-34 240-34 360 0s240 34 360 0 240-34 360 0 240 34 360 0v64H0Z" />
        <path class="t16-waves__front" d="M0 118c130-28 250-28 380 2s250 30 380 0 250-30 380 0 190 22 300 8v32H0Z" />
      </svg>
    </section>

    <section class="t16-commune section" id="commune" aria-labelledby="commune-title">
      <div class="t16-commune__top">
        <div class="t16-commune__copy">
          ${sectionHead({ id: "commune", eyebrow: "Rivage · la commune", title: "Une commune posée sur l'eau" })}
          <p class="t16-lead">${esc(commune.intro.text)}</p>
          <blockquote class="t16-quote">${esc(commune.intro.pullquote)}</blockquote>
        </div>
        <figure class="t16-commune__figure">
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 42vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>

      <div class="t16-levels">
        <div class="t16-levels__mark" aria-hidden="true">
          <span class="t16-levels__water"></span>
          <ol>${["04", "03", "02", "01"].map((n) => `<li>${n}</li>`).join("")}</ol>
          <p>Niveau du lac · repères fictifs</p>
        </div>
        ${statsBand(commune, { variant: "blocks" })}
      </div>
      ${demoNote("Repères, chiffres et citation de démonstration.")}
    </section>

    <div class="t16-tide" aria-hidden="true">
      <svg viewBox="0 0 1440 54" preserveAspectRatio="none" focusable="false"><path d="M0 34c140-30 260-30 400 0s260 30 400 0 260-30 400 0 180 20 240 12v8H0Z" /></svg>
    </div>

    ${attractionsSection(commune, {
      variant: "cards",
      id: "rivages",
      eyebrow: "Rivages · lieux et usages",
      title: "Quatre façons d'habiter l'eau",
      lead: "Des lieux de démonstration, à découvrir avec les habitants et dans le respect des usages.",
    })}

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "Chantiers · ce qui se construit",
      title: "Des projets au fil de l'eau",
      lead: "Opérations, budgets et avancements de démonstration.",
    })}

    ${newsSection(commune, {
      variant: "cards",
      id: "actualites",
      eyebrow: "Actualités · la vie du lac",
      title: "Ce qui remonte à la surface",
      lead: "Quatre nouvelles fictives pour montrer le rythme de l'information communale.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Territoire · carte d'eau",
      title: "Le lac comme adresse",
      lead: "Carte schématique de démonstration. Les positions et distances sont indicatives.",
    })}

    ${gastronomySection(commune, { id: "saveurs", eyebrow: "Saveurs · produits du lac", title: "Ce que le lac met sur la table" })}

    ${serviceExplorer(commune, {
      variant: "grid",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Les démarches, sans traversée",
      lead: "Pièces, délais et coûts indicatifs dans une démonstration sans dossier réel.",
      className: "t16-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t16-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

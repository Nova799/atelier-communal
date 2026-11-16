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
  mapSection,
  contactSection,
  sectionHead,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "studio");

const navItems = [
  { label: "Index", href: "#index" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Démarches", href: "#services" },
  { label: "Carte", href: "#carte" },
  { label: "Contact", href: "#contact" },
];

const modules = [
  ["01", "Index", "#index"],
  ["02", "Projets", "#projets"],
  ["03", "Actualités", "#actualites"],
  ["04", "Démarches", "#services"],
  ["05", "Carte", "#carte"],
  ["06", "Contact", "#contact"],
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t20" id="haut">
  <header class="t20-head" data-header>
    <div class="t20-head__inner">
      ${brand(commune, { sub: "Studio · identité communale" })}
      <nav class="t20-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 5).map((n, i) => `<a href="${esc(n.href)}"><span>${String(i + 2).padStart(2, "0")}</span>${esc(n.label)}</a>`).join("")}
      </nav>
      <span class="t20-head__index">Direction 20 / 22</span>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t20-hero" aria-labelledby="t20-title">
      <div class="t20-hero__grid" aria-hidden="true"></div>
      <div class="t20-hero__inner">
        <div class="t20-hero__copy">
          <p class="t20-kicker"><span>20</span> Une commune, une identité en mouvement</p>
          <h1 id="t20-title"><span>${esc(commune.name)}</span><em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t20-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t20-hero__actions">
            <a class="btn btn--solid" href="#index">Ouvrir l'index ${icon("arrow-down", { size: 16 })}</a>
            <a class="btn btn--ghost" href="#services">Les démarches</a>
          </div>
        </div>

        <figure class="t20-hero__figure">
          <span class="t20-hero__num" aria-hidden="true">01</span>
          <div class="t20-hero__frame">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 38vw", loading: "eager", fetchpriority: "high" })}
          </div>
          <figcaption>
            <span class="t20-hero__cap">${esc(captionFor(commune.hero.image, commune.motto))}</span>
            <span class="t20-hero__credit">${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
        </figure>
      </div>

      <nav class="t20-modules" aria-label="Sommaire de la page">
        ${modules.map(([n, label, href]) => `<a href="${esc(href)}"><span>${n}</span>${esc(label)}</a>`).join("")}
      </nav>
      <p class="t20-hero__note">${icon("alert", { size: 12 })} Maquette de démonstration · contenus fictifs</p>
    </section>

    <section class="t20-index section" id="index" aria-labelledby="index-title">
      <div class="t20-index__grid">
        <div class="t20-index__head">
          <p class="t20-label"><span>01</span> Index</p>
          <h2 id="index-title">${esc(commune.intro.title)}</h2>
        </div>
        <div class="t20-index__copy">
          <p>${esc(commune.intro.text)}</p>
          <blockquote>${esc(commune.intro.pullquote)}</blockquote>
        </div>
        <figure class="t20-index__figure">
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 32vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
      <div class="t20-index__stats">
        ${statsBand(commune, { variant: "blocks" })}
      </div>
    </section>

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "02 · Projets",
      title: "Les modules du territoire",
      lead: "Quatre opérations de démonstration, présentées comme les pièces d'un même ensemble.",
    })}

    ${newsSection(commune, {
      variant: "cards",
      id: "actualites",
      eyebrow: "03 · Actualités",
      title: "Ce qui bouge en ce moment",
      lead: "Une sélection fictive, pour montrer la place de l'information dans l'identité communale.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "04 · Démarches",
      title: "Le guichet, module par module",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t20-services",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "05 · Carte",
      title: "La commune en plan large",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t20-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

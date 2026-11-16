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
  eventsSection,
  projectsSection,
  mapSection,
  historySection,
  attractionsSection,
  contactSection,
  mayorSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "seuil");

const navItems = [
  { label: "Seuil", href: "#haut" },
  { label: "Mémoire", href: "#memoire" },
  { label: "Agenda", href: "#agenda" },
  { label: "Projets", href: "#projets" },
  { label: "Carte", href: "#carte" },
  { label: "Guichet", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t3" id="haut">
  <header class="t3-head" data-header>
    <div class="t3-head__inner">
      ${brand(commune, { sub: "Le Seuil" })}
      <nav class="t3-nav" aria-label="Navigation principale">
        ${navItems.slice(1).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <span class="t3-head__place">${esc(commune.department)}<span aria-hidden="true">·</span>${esc(commune.region)}</span>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t3-hero" aria-labelledby="t3-title">
      <div class="t3-hero__media" aria-hidden="true">
        ${image(commune.hero.image, { sizes: "100vw", loading: "eager", fetchpriority: "high" })}
      </div>
      <div class="t3-hero__veil" aria-hidden="true"></div>
      <div class="t3-hero__grid">
        <p class="t3-hero__chapter"><span>Chapitre 03</span>${esc(commune.name)} · ${esc(commune.motto)}</p>
        <h1 id="t3-title">${esc(commune.hero.title)}<em>${esc(commune.hero.titleAccent)}</em></h1>
        <div class="t3-hero__foot">
          <p>${esc(commune.hero.lead)}</p>
          <div class="t3-hero__actions">
            <a class="t3-link" href="#memoire">Franchir le seuil ${icon("arrow-down", { size: 18 })}</a>
            <a class="t3-link t3-link--muted" href="#services">Chercher une démarche</a>
          </div>
        </div>
      </div>
      <div class="t3-hero__credit">${esc(captionFor(commune.hero.image, commune.motto))} · ${esc(creditLine(commune.hero.image))}</div>
      <span class="t3-hero__rule" aria-hidden="true"></span>
      <span class="t3-hero__side">${esc(commune.name)} · ${esc(commune.department)} · ${new Date().getFullYear()}</span>
    </section>

    <section class="t3-memoire" id="memoire">
      <div class="t3-memoire__intro">
        <p class="t3-kicker"><span aria-hidden="true"></span>${esc(commune.intro.eyebrow)}</p>
        <h2>${esc(commune.intro.title)}</h2>
        <p class="t3-memoire__text">${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
        ${demoNote("Récit de démonstration, rédigé pour cette maquette.")}
      </div>
      <figure class="t3-memoire__figure">
        ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 42vw" })}
        <figcaption>${esc(commune.intro.caption)}<span>${esc(creditLine(commune.intro.image))}</span></figcaption>
      </figure>
    </section>

    <div class="t3-interlude" aria-hidden="true">
      <span>${esc(commune.positioning)}</span>
      <span class="t3-interlude__line"></span>
    </div>

    ${historySection(commune, {
      variant: "chapters",
      id: "histoire",
      eyebrow: "Mémoire · chapitres",
      title: "Ce qui demeure",
      lead: "Quelques repères, sans prétendre raconter une histoire complète.",
    })}

    ${attractionsSection(commune, {
      variant: "cinema",
      id: "tourisme",
      eyebrow: "Lieux · présence",
      title: "Des lieux à traverser",
      lead: "Des lieux réels, décrits ici avec des informations pratiques de démonstration.",
    })}

    ${eventsSection(commune, {
      variant: "tickets",
      id: "agenda",
      eyebrow: "Agenda · rendez-vous",
      title: "Dates à retenir",
      lead: "Programme fictif : ces rendez-vous servent à montrer la mise en page.",
    })}

    ${projectsSection(commune, {
      variant: "dossier",
      id: "projets",
      eyebrow: "Chantiers · transformation",
      title: "Ce qui s'ouvre",
      lead: "Projets, budgets et avancements de démonstration.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Géographie · seuil",
      title: "Le territoire, sans fond de carte",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Passer à l'acte",
      lead: "Des démarches de démonstration, avec leurs pièces et leurs délais.",
      className: "t3-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t3-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

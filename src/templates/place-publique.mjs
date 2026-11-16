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
  eventsSection,
  projectsSection,
  mapSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "place-publique");

const navItems = [
  { label: "À la une", href: "#une" },
  { label: "Agenda", href: "#agenda" },
  { label: "Projets", href: "#projets" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const marquee = [
  "Information publique",
  "Démarches en ligne",
  "Conseil communal",
  "Travaux et voirie",
  "Déchets et propreté",
  "Culture pour tous",
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t5" id="haut">
  <header class="t5-head" data-header>
    <div class="t5-head__inner">
      ${brand(commune, { sub: "Place publique" })}
      <nav class="t5-nav" aria-label="Navigation principale">
        ${navItems.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t5-head__cta" href="#services">Guichet ${icon("arrow-up-right", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t5-hero" id="une" aria-labelledby="t5-title">
      <div class="t5-hero__top">
        <span>Journal mural de la commune</span>
        <span>${esc(commune.department)} · ${esc(commune.region)}</span>
        <span class="t5-hero__live"><i aria-hidden="true"></i> Démonstration</span>
      </div>
      <div class="t5-hero__grid">
        <div class="t5-hero__copy">
          <h1 id="t5-title"><span>${esc(commune.name)}</span>${esc(commune.hero.titleAccent)}</h1>
          <p>${esc(commune.hero.lead)}</p>
          <div class="t5-hero__actions">
            <a class="btn btn--solid" href="#agenda">Voir l'agenda ${icon("arrow-right", { size: 18 })}</a>
            <a class="btn btn--ghost" href="#services">Trouver une démarche</a>
          </div>
        </div>
        <figure class="t5-hero__poster">
          <span class="t5-hero__tape" aria-hidden="true"></span>
          ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 40vw", loading: "eager", fetchpriority: "high" })}
          <figcaption>${esc(captionFor(commune.hero.image, commune.motto))}<span>${esc(creditLine(commune.hero.image))}</span></figcaption>
          <span class="t5-hero__badge" aria-hidden="true">À<br>L'AFFICHE</span>
        </figure>
      </div>
      <div class="t5-hero__stickers" aria-label="Repères de démonstration">
        <span>${esc(commune.motto)}</span>
        <span>${esc(commune.stats[0]?.value)} ${esc(commune.stats[0]?.label || "")}</span>
        <span>Ouvert à tous</span>
      </div>
      <div class="t5-marquee" aria-hidden="true">
        <div class="t5-marquee__track">
          ${[0, 1].map(() => marquee.map((m) => `<span>${esc(m)}</span><i>✳</i>`).join("")).join("")}
        </div>
      </div>
    </section>

    <section class="t5-panneau" aria-labelledby="panneau-title">
      <div class="t5-panneau__head">
        <h2 id="panneau-title">Panneau d'affichage</h2>
        <p>Trois choses à savoir cette semaine. Informations de démonstration.</p>
      </div>
      <div class="t5-panneau__grid">
        <article class="t5-note t5-note--yellow">
          <span class="t5-note__tag">Avis</span>
          <h3>Conseil communal</h3>
          <p>La session budgétaire est publique. Ordre du jour et documents de démonstration disponibles au guichet.</p>
          <span class="t5-note__date">03 · 12 · 2026</span>
        </article>
        <article class="t5-note">
          <span class="t5-note__tag">Travaux</span>
          <h3>Voirie et mobilité</h3>
          <p>Des travaux de démonstration sont annoncés sur les axes principaux. Les itinéraires restent ouverts aux piétons.</p>
          <span class="t5-note__date">24 · 11 · 2026</span>
        </article>
        <article class="t5-note">
          <span class="t5-note__tag">Appel</span>
          <h3>Associations</h3>
          <p>La commune recense les associations locales pour préparer son forum annuel. Inscription fictive.</p>
          <span class="t5-note__date">15 · 12 · 2026</span>
        </article>
      </div>
      ${demoNote("Affichage fictif : les dates et avis ne correspondent à aucune décision réelle.")}
    </section>

    <section class="t5-edito" aria-labelledby="edito-title">
      <div class="t5-edito__label">Le mot de la commune</div>
      <div class="t5-edito__body">
        <h2 id="edito-title">${esc(commune.intro.title)}</h2>
        <p>${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
      </div>
      <figure class="t5-edito__figure">
        ${image(commune.intro.image, { sizes: "(max-width: 800px) 100vw, 30vw" })}
        <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
      </figure>
    </section>

    ${newsSection(commune, {
      variant: "mosaic",
      id: "actualites",
      eyebrow: "À la une",
      title: "Ça se passe maintenant",
      lead: "Les informations de la commune, sans langue de bois. Contenus de démonstration.",
    })}

    ${eventsSection(commune, {
      variant: "tickets",
      id: "agenda",
      eyebrow: "Agenda",
      title: "Les rendez-vous",
      lead: "Programme de démonstration, dates et lieux fictifs.",
    })}

    ${projectsSection(commune, {
      variant: "board",
      id: "projets",
      eyebrow: "Chantiers",
      title: "Ce qui bouge",
      lead: "Projets et budgets de démonstration, affichés sans filtre.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Carte",
      title: "Où ça se passe",
      lead: "Carte schématique de démonstration : les positions sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "compact",
      id: "services",
      eyebrow: "Guichet",
      title: "Faire une démarche",
      lead: "Démarches de démonstration. Aucun dossier n'est transmis.",
      className: "t5-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t5-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

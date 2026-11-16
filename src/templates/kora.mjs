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
  mapSection,
  cultureSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "kora");

const navItems = [
  { label: "Ouverture", href: "#haut" },
  { label: "Récits", href: "#recits" },
  { label: "Culture", href: "#culture" },
  { label: "Agenda", href: "#agenda" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const chapters = [
  ["I", "Ouverture", "Le seuil", "#haut"],
  ["II", "Récits", "Ce qui se transmet", "#recits"],
  ["III", "Culture", "Ce qui se pratique", "#culture"],
  ["IV", "Agenda", "Ce qui se partage", "#agenda"],
  ["V", "Territoire", "Ce qui se traverse", "#carte"],
  ["VI", "Guichet", "Ce qui se règle", "#services"],
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t9" id="haut">
  <header class="t9-head" data-header>
    <div class="t9-head__inner">
      ${brand(commune, { sub: "Kora · récit communal" })}
      <nav class="t9-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n, i) => `<a href="${esc(n.href)}"><span>${String(i + 2).padStart(2, "0")}</span>${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t9-head__cta" href="#services">Le guichet ${icon("arrow-up-right", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t9-hero" aria-labelledby="t9-title">
      <div class="t9-hero__chapter">
        <span>Chapitre I</span>
        <span>${esc(commune.name)} · ${esc(commune.motto)}</span>
      </div>
      <div class="t9-hero__grid">
        <div class="t9-hero__copy">
          <p class="t9-kicker">Une commune, une partition</p>
          <h1 id="t9-title">${esc(commune.hero.title)}<em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t9-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t9-hero__actions">
            <a class="t9-link" href="#recits">Entrer dans le récit ${icon("arrow-down", { size: 17 })}</a>
            <a class="t9-link t9-link--muted" href="#services">Chercher une démarche</a>
          </div>
          <dl class="t9-hero__meta">
            <div><dt>Département</dt><dd>${esc(commune.department)}</dd></div>
            <div><dt>Région</dt><dd>${esc(commune.region)}</dd></div>
            <div><dt>Direction</dt><dd>09 · Kora</dd></div>
          </dl>
        </div>

        <figure class="t9-hero__figure">
          <div class="t9-hero__frame">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 42vw", loading: "eager", fetchpriority: "high" })}
          </div>
          <figcaption>
            <span>${esc(captionFor(commune.hero.image, commune.motto))}</span>
            <span>${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
          <svg class="t9-wave" viewBox="0 0 600 130" preserveAspectRatio="none" aria-hidden="true" fill="none">
            <path d="M0 30c48-28 96 28 144 0s96-28 144 0 96 28 144 0 96-28 144 0" />
            <path d="M0 62c48-28 96 28 144 0s96-28 144 0 96 28 144 0 96-28 144 0" />
            <path d="M0 94c48-28 96 28 144 0s96-28 144 0 96 28 144 0 96-28 144 0" />
          </svg>
        </figure>
      </div>
      <div class="t9-hero__staff" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i>
        <span style="--x: 18%; --y: 32%"></span>
        <span style="--x: 47%; --y: 58%"></span>
        <span style="--x: 74%; --y: 41%"></span>
      </div>
      <div class="t9-hero__foot">
        <span>${icon("wave", { size: 14 })} Direction éditoriale de démonstration</span>
        <span>${esc(commune.positioning)}</span>
      </div>
    </section>

    <nav class="t9-chapters" aria-label="Sommaire du récit">
      ${chapters.map(([n, label, sub, href]) => `<a href="${esc(href)}"><span class="t9-chapters__n">${n}</span><span class="t9-chapters__label">${esc(label)}</span><span class="t9-chapters__sub">${esc(sub)}</span></a>`).join("")}
    </nav>

    <section class="t9-recit" id="recits" aria-labelledby="t9-recit-title">
      <div class="t9-recit__side">
        <p class="t9-chaptermark">Chapitre II</p>
        <p class="t9-recit__side-note">Récits · mémoire · transmission</p>
        <figure>
          ${image(commune.intro.image, { sizes: "(max-width: 860px) 100vw, 30vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
      <div class="t9-recit__main">
        <h2 id="t9-recit-title">${esc(commune.intro.title)}</h2>
        <p class="t9-recit__lead">${esc(commune.intro.text)}</p>
        <blockquote>
          <span aria-hidden="true">«</span>
          ${esc(commune.intro.pullquote)}
        </blockquote>
        ${demoNote("Récit de démonstration, rédigé pour cette maquette.")}
      </div>
    </section>

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "Chroniques récentes",
      title: "Ce qui se raconte",
      lead: "Les nouvelles de la commune, mises en récit plutôt qu'en liste.",
    })}

    ${cultureSection(commune, {
      id: "culture",
      eyebrow: "Chapitre III · Culture",
      title: "Une culture qui se joue",
    })}

    <section class="t9-resonance" aria-label="Citation de démonstration">
      <span class="t9-resonance__n" aria-hidden="true">IV</span>
      <p>${esc(commune.hero.titleAccent)}</p>
      <span class="t9-resonance__line" aria-hidden="true"></span>
    </section>

    ${eventsSection(commune, {
      variant: "agenda",
      id: "agenda",
      eyebrow: "Chapitre IV · Agenda",
      title: "Les rendez-vous",
      lead: "Un programme fictif, comme une partition à venir.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Chapitre V · Territoire",
      title: "La commune en portée",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "Chapitre VI · Guichet",
      title: "Les démarches",
      lead: "Des démarches de démonstration, avec pièces et délais.",
      className: "t9-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t9-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

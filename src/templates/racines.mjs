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
  mapSection,
  historySection,
  attractionsSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "racines");

const navItems = [
  { label: "Origines", href: "#origines" },
  { label: "Chronologie", href: "#chronologie" },
  { label: "Patrimoine", href: "#tourisme" },
  { label: "Actualités", href: "#actualites" },
  { label: "Projets", href: "#projets" },
  { label: "Carte", href: "#carte" },
  { label: "Guichet", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t8" id="haut">
  <header class="t8-head" data-header>
    <div class="t8-head__inner">
      ${brand(commune, { sub: "Racines · mémoire communale" })}
      <nav class="t8-nav" aria-label="Navigation principale">
        ${navItems.slice(0, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t8-head__contact" href="#contact">Nous écrire ${icon("arrow-up-right", { size: 14 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t8-hero" aria-labelledby="t8-title">
      <div class="t8-hero__grid">
        <div class="t8-hero__copy">
          <p class="t8-kicker"><span>08</span>Ce qui nous tient debout</p>
          <h1 id="t8-title">${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t8-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t8-hero__actions">
            <a class="btn btn--solid" href="#origines">Descendre aux origines ${icon("arrow-down", { size: 17 })}</a>
            <a class="btn btn--ghost" href="#services">Le guichet</a>
          </div>
          <p class="t8-hero__note">${esc(commune.positioning)}</p>
        </div>

        <div class="t8-arch">
          <span class="t8-arch__paper t8-arch__paper--back" aria-hidden="true"></span>
          <span class="t8-arch__paper t8-arch__paper--mid" aria-hidden="true"></span>
          <figure class="t8-arch__figure">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 40vw", loading: "eager", fetchpriority: "high" })}
            <figcaption>${esc(captionFor(commune.hero.image, commune.motto))}<span>${esc(creditLine(commune.hero.image))}</span></figcaption>
          </figure>
          <svg class="t8-roots" viewBox="0 0 420 160" aria-hidden="true" fill="none">
            <path d="M210 0v42M210 42c0 24-46 30-64 58M210 42c0 26 44 30 58 64M146 100c-18 8-28 26-34 52M268 106c14 10 22 26 28 46M210 42c-8 22-6 38 0 56M182 98c-8 20-10 34-8 54M238 100c8 18 12 34 12 52" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            <circle cx="210" cy="42" r="3" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <div class="t8-hero__soil">
        ${commune.stats
          .map(
            (s, i) => `<div class="t8-stat"><span class="t8-stat__n">${String(i + 1).padStart(2, "0")}</span><strong>${esc(s.value)}${esc(s.suffix || "")}</strong><span>${esc(s.label)}</span></div>`,
          )
          .join("")}
      </div>
      ${demoNote("Repères de démonstration, sans valeur officielle.")}
    </section>

    <section class="t8-origines" id="origines" aria-labelledby="origines-title">
      <div class="t8-origines__text">
        <p class="t8-label">01 · Origines</p>
        <h2 id="origines-title">${esc(commune.intro.title)}</h2>
        <p class="t8-lead">${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
      </div>
      <figure class="t8-origines__figure">
        ${image(commune.intro.image, { sizes: "(max-width: 820px) 100vw, 38vw" })}
        <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
      </figure>
    </section>

    ${historySection(commune, {
      variant: "timeline",
      id: "chronologie",
      eyebrow: "02 · Chronologie",
      title: "Les racines du temps",
      lead: "Une chronologie simplifiée, à lire comme un repère de démonstration.",
    })}

    ${attractionsSection(commune, {
      variant: "archives",
      id: "tourisme",
      eyebrow: "03 · Patrimoine",
      title: "Des lieux qui transmettent",
      lead: "Lieux réels, descriptions et informations pratiques de démonstration.",
    })}

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "04 · Actualités",
      title: "Ce qui vit aujourd'hui",
      lead: "La vie de la commune, entre mémoire et présent.",
    })}

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "05 · Projets",
      title: "Ce qui pousse",
      lead: "Chantiers et avancements de démonstration.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "06 · Territoire",
      title: "La commune, d'en haut",
      lead: "Carte schématique de démonstration, sans fond officiel.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "07 · Guichet",
      title: "Les démarches du quotidien",
      lead: "Un index de démonstration, avec pièces et délais.",
      className: "t8-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t8-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

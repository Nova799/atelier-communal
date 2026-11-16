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
  budgetSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "nova");

const navItems = [
  { label: "Console", href: "#haut" },
  { label: "Indicateurs", href: "#reperes" },
  { label: "Projets", href: "#projets" },
  { label: "Budget", href: "#budget" },
  { label: "Flux", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Services", href: "#services" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t6" id="haut">
  <header class="t6-head" data-header>
    <div class="t6-head__inner">
      ${brand(commune, { sub: "Nova · console communale" })}
      <nav class="t6-nav" aria-label="Navigation principale">
        ${navItems.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <div class="t6-head__status">
        <span class="t6-dot" aria-hidden="true"></span>
        <span>Démo</span>
        <time data-clock>--:--:--</time>
      </div>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t6-hero" aria-labelledby="t6-title">
      <div class="t6-hero__grid" aria-hidden="true"></div>
      <div class="t6-hero__orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="t6-hero__cols">
        <div class="t6-hero__copy">
          <p class="t6-kicker"><span class="t6-dot" aria-hidden="true"></span>Commune connectée · ${esc(commune.department)}</p>
          <h1 id="t6-title"><span class="t6-hero__index">06 /</span>${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t6-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t6-hero__actions">
            <a class="btn btn--solid" href="#reperes">Entrer dans la console ${icon("arrow-down", { size: 17 })}</a>
            <a class="btn btn--ghost" href="#services">Accéder au guichet</a>
          </div>
          <div class="t6-hero__meta">
            <span>${esc(commune.contacts.arrondissements)}</span>
            <span>${esc(commune.contacts.quartiers)}</span>
            <span>${esc(commune.motto)}</span>
          </div>
        </div>

        <div class="t6-panel" aria-label="Aperçu des indicateurs, données de démonstration">
          <div class="t6-panel__head">
            <span><i class="t6-dot" aria-hidden="true"></i> État du territoire</span>
            <span>LIVE · DÉMO</span>
          </div>
          <figure class="t6-panel__figure">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 38vw", loading: "eager", fetchpriority: "high" })}
            <figcaption><span>${esc(captionFor(commune.hero.image, commune.motto))}</span><span>${esc(creditLine(commune.hero.image))}</span></figcaption>
          </figure>
          <ul class="t6-signals">
            ${commune.stats
              .slice(0, 3)
              .map(
                (s, i) => `<li><span class="t6-signals__label">${esc(s.label)}</span><span class="t6-signals__bars" aria-hidden="true">${[0, 1, 2, 3, 4, 5, 6, 7]
                  .map((j) => `<i style="--h:${25 + ((i * 13 + j * 11) % 70)}%"></i>`)
                  .join("")}</span><strong>${esc(s.value)}${esc(s.suffix || "")}</strong></li>`,
              )
              .join("")}
          </ul>
          <div class="t6-panel__foot">
            <span>Dernière synchronisation</span>
            <time data-clock>--:--:--</time>
          </div>
        </div>
      </div>
      <div class="t6-hero__strip">
        <span>${icon("grid", { size: 13 })} Interface de démonstration</span>
        <span>Données fictives</span>
        <span>Accès public</span>
      </div>
    </section>

    <section class="t6-overview" aria-labelledby="t6-overview-title">
      <p class="t6-label">00 · Contexte</p>
      <div class="t6-overview__grid">
        <h2 id="t6-overview-title">${esc(commune.intro.title)}</h2>
        <div class="t6-overview__body">
          <p>${esc(commune.intro.text)}</p>
          <blockquote>${esc(commune.intro.pullquote)}</blockquote>
          ${demoNote("Interface et récits de démonstration.")}
        </div>
      </div>
    </section>

    <section class="t6-kpis" id="reperes" aria-labelledby="reperes-title">
      <div class="t6-section-head">
        <p class="t6-label">01 · Indicateurs</p>
        <h2 id="reperes-title">Lecture instantanée</h2>
        <span class="t6-section-head__meta">Valeurs de démonstration · non officielles</span>
      </div>
      <div class="t6-kpis__grid">
        ${commune.stats
          .map(
            (s, i) => `<article class="t6-kpi" data-reveal style="--i:${i}">
              <div class="t6-kpi__top"><span>0${i + 1}</span><i class="t6-dot" aria-hidden="true"></i></div>
              <strong>${esc(s.value)}${esc(s.suffix || "")}</strong>
              <span class="t6-kpi__label">${esc(s.label)}</span>
              <span class="t6-kpi__note">${esc(s.note)}</span>
              <span class="t6-kpi__meter" aria-hidden="true"><i style="--w:${38 + i * 15}%"></i></span>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    ${projectsSection(commune, {
      variant: "board",
      id: "projets",
      eyebrow: "02 · Chantiers",
      title: "Flux de projets",
      lead: "Avancement, budget et localisation, mis à jour dans cette maquette.",
    })}

    ${budgetSection(commune, {
      variant: "bars",
      id: "budget",
      eyebrow: "03 · Finances",
      title: "Répartition budgétaire",
      lead: "Masses budgétaires de démonstration, sans valeur officielle.",
    })}

    ${newsSection(commune, {
      variant: "feed",
      id: "actualites",
      eyebrow: "04 · Flux",
      title: "Dernières transmissions",
      lead: "Les entrées récentes du journal communal, classées comme un flux.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "05 · Cartographie",
      title: "Le territoire en plan",
      lead: "Carte schématique de démonstration. Aucun fond de carte officiel.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "06 · Guichet",
      title: "Services à la demande",
      lead: "Index de démarches de démonstration, filtrable.",
      className: "t6-services",
    })}

    ${mayorSection(commune, { variant: "panel", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t6-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

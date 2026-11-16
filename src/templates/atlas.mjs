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
  transparencySection,
  mayorSection,
  contactSection,
  faqSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "atlas");

const navItems = [
  { label: "Vue d'ensemble", href: "#haut" },
  { label: "Indicateurs", href: "#reperes" },
  { label: "Projets", href: "#projets" },
  { label: "Budget", href: "#budget" },
  { label: "Journal", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Marchés", href: "#transparence" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t2" id="haut">
  <div class="t2-shell">
    <aside class="t2-rail">
      <div class="t2-rail__top">
        ${brand(commune, { sub: "Atlas communal" })}
        <p class="t2-rail__index">Direction 02 <span>/</span> Atlas</p>
      </div>
      <nav class="t2-nav" aria-label="Navigation principale">
        ${navItems
          .map(
            (n, i) => `<a href="${esc(n.href)}"><span>${String(i + 1).padStart(2, "0")}</span>${esc(n.label)}</a>`,
          )
          .join("")}
      </nav>
      <div class="t2-rail__meta">
        <p><span>Commune</span>${esc(commune.name)}</p>
        <p><span>Département</span>${esc(commune.department)}</p>
        <p><span>Région</span>${esc(commune.region)}</p>
        <p class="t2-rail__demo">${icon("alert", { size: 12 })} Données de démonstration</p>
      </div>
      <div class="t2-rail__foot">
        <a href="#contact">Ouvrir un guichet ${icon("arrow-up-right", { size: 14 })}</a>
        <a href="/">Galerie des directions</a>
      </div>
    </aside>

    <div class="t2-main">
      <header class="t2-mobilehead" data-header>
        ${brand(commune, { sub: "Atlas communal" })}
        ${navToggle()}
      </header>

      <main id="contenu">
        <section class="t2-hero">
          <div class="t2-hero__meta">
            <span>Planche 02 · ${esc(commune.name)}</span>
            <span>${esc(commune.department)} · ${esc(commune.region)}</span>
            <span>Échelle de démonstration</span>
          </div>
          <div class="t2-hero__grid">
            <div class="t2-hero__copy">
              <p class="t2-kicker">Portail communal / lecture cartographique</p>
              <h1>${esc(commune.hero.title)}<em>${esc(commune.hero.titleAccent)}</em></h1>
              <p class="t2-hero__lead">${esc(commune.hero.lead)}</p>
              <div class="t2-hero__actions">
                <a class="btn btn--solid" href="#decouvrir">Lire la planche ${icon("arrow-down", { size: 17 })}</a>
                <a class="btn btn--ghost" href="#services">Chercher une démarche</a>
              </div>
            </div>
            <figure class="t2-hero__figure">
              <div class="t2-hero__frame">
                ${image(commune.hero.image, { sizes: "(max-width: 1100px) 100vw, 43vw", loading: "eager", fetchpriority: "high" })}
                <span class="t2-hero__cross" aria-hidden="true"></span>
              </div>
              <figcaption><span>${esc(captionFor(commune.hero.image, commune.motto))}</span><span class="t2-credit">${esc(creditLine(commune.hero.image))}</span></figcaption>
            </figure>
          </div>
          <div class="t2-hero__ticker">
            <span>${icon("map-pin", { size: 14 })} ${esc(commune.motto)}</span>
            <span>${esc(commune.contacts.arrondissements)}</span>
            <span>${esc(commune.contacts.quartiers)}</span>
            <span>Mise à jour de démonstration · ${new Date().toLocaleDateString("fr-FR")}</span>
          </div>
        </section>

        <section class="t2-overview" id="decouvrir">
          <div class="t2-overview__intro">
            <p class="t2-label">01 / Introduction</p>
            <h2>${esc(commune.intro.title)}</h2>
            <p>${esc(commune.intro.text)}</p>
            <blockquote>${esc(commune.intro.pullquote)}</blockquote>
            ${demoNote("Textes et repères fictifs, rédigés pour la démonstration.")}
          </div>
          <div class="t2-overview__plate">
            ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 36vw" })}
            <div class="t2-overview__legend">
              <span>${esc(commune.intro.caption)}</span>
              <span>${esc(creditLine(commune.intro.image))}</span>
            </div>
          </div>
        </section>

        <section class="t2-kpis" id="reperes" aria-labelledby="reperes-title">
          <div class="t2-kpis__head">
            <p class="t2-label">02 / Indicateurs</p>
            <h2 id="reperes-title">Repères communaux</h2>
            <span class="t2-kpis__unit">Valeurs de démonstration</span>
          </div>
          <div class="t2-kpis__grid">
            ${commune.stats
              .map(
                (s, i) => `<div class="t2-kpi" data-reveal style="--i:${i}">
                  <span class="t2-kpi__n">${String(i + 1).padStart(2, "0")}</span>
                  <strong>${esc(s.value)}${esc(s.suffix || "")}</strong>
                  <span class="t2-kpi__label">${esc(s.label)}</span>
                  <span class="t2-kpi__note">${esc(s.note)}</span>
                  <span class="t2-kpi__bar" aria-hidden="true"><i style="--w:${45 + i * 14}%"></i></span>
                </div>`,
              )
              .join("")}
          </div>
        </section>

        ${projectsSection(commune, {
          variant: "table",
          id: "projets",
          eyebrow: "03 / Investissement",
          title: "Projets suivis",
          lead: "Chantiers, budgets et avancements, présentés comme une planche de suivi.",
        })}

        ${budgetSection(commune, {
          variant: "bars",
          id: "budget",
          eyebrow: "04 / Comptes",
          title: "Structure budgétaire",
          lead: "Une lecture des masses budgétaires de démonstration, sans valeur officielle.",
        })}

        ${newsSection(commune, {
          variant: "feed",
          id: "actualites",
          eyebrow: "05 / Journal",
          title: "Dernières entrées",
          lead: "Les actualités de la commune, classées comme les entrées d'un registre de veille.",
        })}

        ${mapSection(commune, {
          id: "carte",
          eyebrow: "06 / Cartographie",
          title: "Plan de situation",
          lead: "Une carte schématique, sans fond de carte officiel. Les positions sont indicatives.",
        })}

        ${serviceExplorer(commune, {
          variant: "rows",
          id: "services",
          eyebrow: "07 / Guichet",
          title: "Index des démarches",
          lead: "Un index filtrable des démarches de démonstration, avec délais et pièces.",
          className: "t2-services",
        })}

        ${transparencySection(commune, {
          variant: "table",
          id: "transparence",
          eyebrow: "08 / Transparence",
          title: "Marchés et documents",
          lead: "Références, montants et statuts de démonstration, réunis dans un tableau unique.",
        })}

        ${mayorSection(commune, { variant: "panel", id: "maire" })}

        ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

        ${faqSection(commune, { id: "faq" })}

        <div class="t2-rail-list">${communeRail(commune, meta.slug, ctx.communes)}</div>
      </main>

      ${footer(commune, meta, { navItems })}
    </div>
  </div>
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

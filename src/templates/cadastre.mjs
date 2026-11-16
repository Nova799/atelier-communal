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
  statsBand,
  mapSection,
  projectsSection,
  budgetSection,
  transparencySection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "cadastre");

const navItems = [
  { label: "Plan", href: "#plan" },
  { label: "Carte", href: "#carte" },
  { label: "Projets", href: "#projets" },
  { label: "Budget", href: "#budget" },
  { label: "Marchés", href: "#marches" },
  { label: "Guichet", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  const today = new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t13" id="haut">
  <header class="t13-head" data-header>
    <div class="t13-head__strip">
      <span>Atelier communal · plan de démonstration</span>
      <span>Feuille 13 / 20</span>
      <span>Échelle 1:20 000</span>
      <span>${esc(today)}</span>
    </div>
    <div class="t13-head__inner">
      ${brand(commune, { sub: "Cadastre · plan communal" })}
      <nav class="t13-nav" aria-label="Navigation principale">
        ${navItems.slice(0, 6).map((n, i) => `<a href="${esc(n.href)}"><span>${String(i + 1).padStart(2, "0")}</span>${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t13-head__cta" href="#carte">Ouvrir la carte ${icon("compass", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t13-hero" aria-labelledby="t13-title">
      <span class="t13-hero__cross t13-hero__cross--tl" aria-hidden="true"></span>
      <span class="t13-hero__cross t13-hero__cross--tr" aria-hidden="true"></span>
      <span class="t13-hero__cross t13-hero__cross--bl" aria-hidden="true"></span>
      <span class="t13-hero__cross t13-hero__cross--br" aria-hidden="true"></span>
      <div class="t13-hero__grid">
        <div class="t13-hero__copy">
          <p class="t13-ref"><span>PL.13</span> Plan d'ensemble · lecture communale</p>
          <h1 id="t13-title">${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t13-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t13-hero__actions">
            <a class="btn btn--solid" href="#plan">Lire le plan ${icon("arrow-down", { size: 17 })}</a>
            <a class="btn btn--ghost" href="#services">Chercher une démarche</a>
          </div>
          <ul class="t13-legend" aria-label="Légende du plan">
            <li><span class="t13-legend__line" aria-hidden="true"></span>Limite communale</li>
            <li><span class="t13-legend__dot" aria-hidden="true"></span>Équipement public</li>
            <li><span class="t13-legend__hatch" aria-hidden="true"></span>Zone de projet</li>
          </ul>
        </div>

        <figure class="t13-plot">
          <span class="t13-plot__tag">Parcelle A · vue de démonstration</span>
          <div class="t13-plot__frame">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 42vw", loading: "eager", fetchpriority: "high" })}
            <span class="t13-plot__scan" aria-hidden="true"></span>
          </div>
          <svg class="t13-plot__dims" viewBox="0 0 480 560" preserveAspectRatio="none" aria-hidden="true" fill="none">
            <path d="M24 30v500M24 30h432M24 530h432M456 30v500" />
            <path d="M24 280h432" stroke-dasharray="3 6" opacity=".45" />
            <path d="M18 30h12M18 530h12M456 30h12M456 530h12" />
          </svg>
          <span class="t13-plot__cote t13-plot__cote--x">148,20 m</span>
          <span class="t13-plot__cote t13-plot__cote--y">96,40 m</span>
          <figcaption>
            <span>${esc(captionFor(commune.hero.image, commune.motto))}</span>
            <span>${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
        </figure>
      </div>

      <div class="t13-titleblock" aria-label="Cartouche du plan">
        <div><span>Commune</span><strong>${esc(commune.name)}</strong></div>
        <div><span>Département</span><strong>${esc(commune.department)}</strong></div>
        <div><span>Région</span><strong>${esc(commune.region)}</strong></div>
        <div><span>Document</span><strong>Démo · non opposable</strong></div>
        <div><span>Indice</span><strong>A</strong></div>
      </div>
      <p class="t13-hero__note">${icon("alert", { size: 13 })} Plan schématique et données de démonstration. Ce document n'a aucune valeur d'urbanisme.</p>
    </section>

    <section class="t13-plan section" id="plan" aria-labelledby="plan-title">
      ${sectionHead({
        eyebrow: "Plan · notice de lecture",
        title: "Une commune à lire",
        lead: "La commune se présente comme un territoire organisé : des repères, des équipements, des projets et des démarches.",
        id: "plan",
      })}
      <div class="t13-plan__grid">
        <div class="t13-plan__notice">
          <p class="t13-plan__lead">${esc(commune.intro.text)}</p>
          <blockquote>${esc(commune.intro.pullquote)}</blockquote>
          <figure class="t13-plan__figure">
            ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 44vw" })}
            <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
          </figure>
        </div>
        <div class="t13-plan__data">
          <p class="t13-plan__code">FICHE 13-A · REPÈRES</p>
          ${statsBand(commune, { variant: "row" })}
          <ul class="t13-plan__notes">
            <li><span>Arrondissements</span><strong>${esc(commune.contacts.arrondissements)}</strong></li>
            <li><span>Quartiers</span><strong>${esc(commune.contacts.quartiers)}</strong></li>
            <li><span>Source</span><strong>Contenus de démonstration</strong></li>
          </ul>
          ${demoNote("Repères et notice de démonstration.")}
        </div>
      </div>
    </section>

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Levé · carte schématique",
      title: "Le plan du territoire",
      lead: "Carte de démonstration, sans fond officiel. Les positions sont indicatives.",
    })}

    ${projectsSection(commune, {
      variant: "table",
      id: "projets",
      eyebrow: "Planches · opérations",
      title: "Les opérations inscrites",
      lead: "Chantiers, budgets et avancements de démonstration, présentés comme un registre d'opérations.",
    })}

    ${budgetSection(commune, {
      variant: "bars",
      id: "budget",
      eyebrow: "Fiche financière",
      title: "Le budget, ligne par ligne",
      lead: "Répartition indicative de démonstration, sans valeur comptable.",
    })}

    ${transparencySection(commune, {
      variant: "table",
      id: "marches",
      eyebrow: "Pièces annexes",
      title: "Marchés et documents",
      lead: "Références fictives pour montrer la place de la transparence dans le plan communal.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Les démarches cadastrées",
      lead: "Démarches de démonstration : pièces, délais et coûts indicatifs.",
      className: "t13-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t13-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

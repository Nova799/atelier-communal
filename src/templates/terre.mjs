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
  economySection,
  gastronomySection,
  mapSection,
  statsBand,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "terre");

const navItems = [
  { label: "Terroir", href: "#terroir" },
  { label: "Économie", href: "#economie" },
  { label: "Saveurs", href: "#saveurs" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t19" id="haut">
  <header class="t19-head" data-header>
    <div class="t19-head__inner">
      ${brand(commune, { sub: "Terre · édition du terroir" })}
      <nav class="t19-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 7).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t19-head__cta" href="#services">Le guichet ${icon("arrow-up-right", { size: 14 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t19-hero" aria-labelledby="t19-title">
      <div class="t19-hero__edition" aria-hidden="true">
        <span>Édition</span><strong>19</strong><span>Terroir</span>
      </div>
      <div class="t19-hero__inner">
        <div class="t19-hero__copy">
          <p class="t19-kicker"><span aria-hidden="true"></span> ${esc(commune.hero.kicker)}</p>
          <h1 id="t19-title"><span>${esc(commune.name)}</span><em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t19-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t19-hero__actions">
            <a class="btn btn--solid" href="#terroir">Lire le terroir ${icon("arrow-down", { size: 16 })}</a>
            <a class="btn btn--ghost" href="#saveurs">Ce que l'on mange ici</a>
          </div>
          <dl class="t19-hero__facts">
            <div><dt>Département</dt><dd>${esc(commune.department)}</dd></div>
            <div><dt>Arrondissements</dt><dd>${esc(commune.contacts.arrondissements)}</dd></div>
            <div><dt>Mot d'ordre</dt><dd>${esc(commune.motto)}</dd></div>
          </dl>
        </div>

        <figure class="t19-hero__figure">
          <span class="t19-hero__tape" aria-hidden="true"></span>
          <div class="t19-hero__frame">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 44vw", loading: "eager", fetchpriority: "high" })}
          </div>
          <figcaption>
            <span class="t19-hero__planche">Planche 19 · démonstration</span>
            <span class="t19-hero__cap">${esc(captionFor(commune.hero.image, commune.motto))}</span>
            <span class="t19-hero__credit">${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
        </figure>
      </div>
      <p class="t19-hero__note">${icon("alert", { size: 13 })} Photographies et textes de démonstration. Aucun contenu officiel.</p>
    </section>

    <section class="t19-terroir section" id="terroir" aria-labelledby="terroir-title">
      ${sectionHead({
        eyebrow: "Terroir · ce que la terre raconte",
        title: "Un paysage habité",
        lead: "Relief, architecture, cultures et savoir-faire : la commune se lit par ses matières.",
        id: "terroir",
      })}
      <div class="t19-terroir__grid">
        <div class="t19-terroir__text">
          <p class="t19-lead">${esc(commune.intro.text)}</p>
          <blockquote>${esc(commune.intro.pullquote)}</blockquote>
          ${demoNote("Récit et citation de démonstration.")}
        </div>
        <figure class="t19-terroir__figure">
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 40vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
      <div class="t19-marks">
        ${statsBand(commune, { variant: "row" })}
      </div>
    </section>

    <div class="t19-stroke" aria-hidden="true">
      <svg viewBox="0 0 1200 22" preserveAspectRatio="none" focusable="false"><path d="M0 11c78-7 156-7 234 0s156 7 234 0 156-7 234 0 156 7 234 0 156-7 264 0" /></svg>
    </div>

    ${economySection(commune, { id: "economie", eyebrow: "Économie · les matières du territoire", title: "Ce que la commune produit" })}

    ${gastronomySection(commune, { id: "saveurs", eyebrow: "Saveurs · à table", title: "Trois goûts de l'Atacora" })}

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "Projets · ce qui se cultive",
      title: "Des chantiers ancrés au territoire",
      lead: "Opérations, budgets et avancements de démonstration.",
    })}

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "Actualités · la feuille du mois",
      title: "La vie du terroir",
      lead: "Des nouvelles fictives, entre marchés, patrimoine et vie quotidienne.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Carte · relief et villages",
      title: "La commune, entre collines et pistes",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "grid",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Vos démarches, sans détour",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t19-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t19-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

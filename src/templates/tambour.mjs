import { esc, image, creditLine, emblem, captionFor } from "../lib/html.mjs";
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
  attractionsSection,
  historySection,
  budgetSection,
  mayorSection,
  contactSection,
  faqSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "tambour");

const navItems = [
  { label: "Découvrir", href: "#decouvrir" },
  { label: "Actualités", href: "#actualites" },
  { label: "Agenda", href: "#agenda" },
  { label: "Projets", href: "#projets" },
  { label: "Patrimoine", href: "#tourisme" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="site t1" id="haut">
  <header class="t1-head" data-header>
    <div class="t1-wrap t1-head__inner">
      ${brand(commune)}
      <nav class="t1-nav" aria-label="Navigation principale">
        ${navItems.slice(0, 6).map((i) => `<a href="${esc(i.href)}">${esc(i.label)}</a>`).join("")}
      </nav>
      <div class="t1-head__actions">
        <a class="t1-head__contact" href="#contact">Nous joindre ${icon("arrow-up-right", { size: 15 })}</a>
        ${navToggle()}
      </div>
    </div>
  </header>

  <main id="contenu">
    <section class="t1-hero">
      <div class="t1-wrap t1-hero__grid">
        <div class="t1-hero__copy">
          <p class="t1-kicker"><span>${esc(commune.hero.kicker)}</span><span class="t1-kicker__n">Direction 01 · Tambour</span></p>
          <h1 class="t1-hero__title">
            <span>${esc(commune.hero.title)}</span>
            <em>${esc(commune.hero.titleAccent)}</em>
          </h1>
          <p class="t1-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t1-hero__actions">
            <a class="btn btn--solid" href="${esc(commune.hero.ctaPrimary.href)}">${esc(commune.hero.ctaPrimary.label)} ${icon("arrow-right", { size: 18 })}</a>
            <a class="btn btn--ghost" href="${esc(commune.hero.ctaSecondary.href)}">${esc(commune.hero.ctaSecondary.label)}</a>
          </div>
          <p class="t1-hero__notice">${icon("alert", { size: 14 })} Maquette de démonstration · contenus fictifs</p>
        </div>
        <figure class="t1-hero__figure">
          <span class="t1-hero__chapter">Chapitre premier</span>
          ${image(commune.hero.image, { sizes: "(max-width: 980px) 100vw, 48vw", loading: "eager", fetchpriority: "high" })}
          <figcaption>
            <span>${esc(commune.hero.imageCaption || captionFor(commune.hero.image, commune.motto))}</span>
            <span class="t1-credit">${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
        </figure>
      </div>
      <div class="t1-wrap t1-hero__foot">
        <span class="t1-hero__scroll">${icon("arrow-down", { size: 16 })} Lire la commune</span>
        <span class="t1-hero__edition">Édition de démonstration · ${new Date().getFullYear()}</span>
      </div>
    </section>

    <section class="t1-intro" id="decouvrir">
      <div class="t1-wrap t1-intro__grid">
        <div class="t1-intro__text">
          <p class="eyebrow"><span class="eyebrow__mark"></span>${esc(commune.intro.eyebrow)}</p>
          <h2>${esc(commune.intro.title)}</h2>
          <p class="t1-intro__lead">${esc(commune.intro.text)}</p>
          <blockquote class="t1-pull">
            <span class="t1-pull__mark" aria-hidden="true">“</span>
            <p>${esc(commune.intro.pullquote)}</p>
          </blockquote>
        </div>
        <figure class="t1-intro__figure">
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 40vw" })}
          <figcaption>${esc(commune.intro.caption)} <span class="t1-credit">${esc(creditLine(commune.intro.image))}</span></figcaption>
        </figure>
      </div>
      <div class="t1-wrap t1-intro__stats">${statsRow(commune)}</div>
    </section>

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "Journal de la commune",
      title: "Ce qui advient",
      lead: "Délibérations, chantiers, rendez-vous : la vie communale se lit comme un feuilleton documenté.",
    })}

    ${eventsSection(commune, {
      variant: "agenda",
      id: "agenda",
      eyebrow: "Le calendrier",
      title: "Prendre date",
      lead: "Les prochains rendez-vous publics, présentés sans lien d'inscription réel.",
    })}

    ${projectsSection(commune, {
      variant: "dossier",
      id: "projets",
      eyebrow: "Carnet de chantiers",
      title: "Ce que nous bâtissons",
      lead: "Des projets suivis, chiffrés et datés. Chaque ligne est une démonstration de transparence.",
    })}

    ${historySection(commune, {
      variant: "chapters",
      id: "histoire",
      eyebrow: "Mémoire",
      title: "Les strates du temps",
      lead: "Trois repères pour situer une histoire plus longue, plus complexe et toujours vivante.",
    })}

    ${attractionsSection(commune, {
      variant: "cards",
      id: "tourisme",
      eyebrow: "Territoire",
      title: "Des lieux qui se racontent",
      lead: "Patrimoine, nature et culture : les portes d'entrée de la commune.",
    })}

    <section class="t1-sensible" id="culture">
      <div class="t1-wrap t1-sensible__grid">
        <div class="t1-sensible__culture">
          <p class="eyebrow"><span class="eyebrow__mark"></span>Culture</p>
          <h2>Une culture qui se transmet</h2>
          <p>${esc(commune.culture.text)}</p>
          <ul class="t1-sensible__tags">
            ${commune.culture.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
          </ul>
        </div>
        <div class="t1-sensible__table">
          <p class="eyebrow"><span class="eyebrow__mark"></span>À table</p>
          <h2>Saveurs de ${esc(commune.name)}</h2>
          <ol>
            ${commune.gastronomy.map((g, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><div><strong>${esc(g.name)}</strong><p>${esc(g.text)}</p></div></li>`).join("")}
          </ol>
          <p class="t1-sensible__note">Contenus culturels et culinaires de démonstration.</p>
        </div>
      </div>
    </section>

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Regard cartographique",
      title: "La commune, en plan large",
      lead: "Une carte schématique pour situer les lieux de la démonstration. Les positions sont indicatives.",
    })}

    ${budgetSection(commune, {
      variant: "bars",
      id: "budget",
      eyebrow: "Comptes",
      title: "Le budget en un regard",
      lead: "Les grandes masses du budget de démonstration, sans valeur officielle.",
    })}

    ${serviceExplorer(commune, {
      variant: "grid",
      id: "services",
      title: "Au guichet",
      lead: "Les démarches les plus fréquentes, leurs pièces et leurs délais. La recherche et les filtres facilitent l'orientation.",
      className: "t1-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    ${faqSection(commune, { id: "faq" })}

    <div class="t1-wrap t1-rail-wrap">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

function statsRow(commune) {
  return `<div class="t1-stats" role="group" aria-label="Repères de démonstration">
    ${commune.stats
      .map(
        (s, i) => `<div class="t1-stat" data-reveal style="--i:${i}">
          <span class="t1-stat__n">${String(i + 1).padStart(2, "0")}</span>
          <span class="t1-stat__value">${esc(s.value)}${esc(s.suffix || "")}</span>
          <span class="t1-stat__label">${esc(s.label)}</span>
          <span class="t1-stat__note">${esc(s.note)}</span>
        </div>`,
      )
      .join("")}
    <p class="t1-stats__note">${icon("alert", { size: 13 })} Repères de démonstration, non officiels.</p>
  </div>`;
}

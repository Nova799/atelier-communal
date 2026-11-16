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
  budgetSection,
  mapSection,
  statsBand,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "signal");

const navItems = [
  { label: "Le fil", href: "#fil" },
  { label: "Agenda", href: "#agenda" },
  { label: "Projets", href: "#projets" },
  { label: "Budget", href: "#budget" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const bulletin = [
  { time: "09:12", label: "Patrimoine", text: "Restauration de la Grande Mosquée : point d'étape du chantier" },
  { time: "08:40", label: "Cadre de vie", text: "Rue Delcassé : une journée portes ouvertes le 6 novembre" },
  { time: "07:55", label: "Économie", text: "Marché Ouando : accès et assainissement en travaux" },
  { time: "07:20", label: "Institution", text: "Conseil communal : les délibérations de la session d'octobre" },
];

const feedTimes = ["14:32", "11:08", "09:26", "07:45"];

export function render(commune, ctx) {
  const lead = commune.news.find((n) => n.featured) || commune.news[0];
  const secondary = commune.news.filter((n) => n !== lead);
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t18" id="haut">
  <header class="t18-head" data-header>
    <div class="t18-band">
      <span class="t18-band__live"><i aria-hidden="true"></i> Édition de démonstration</span>
      <div class="t18-band__ticker" aria-label="Dépêches en bref">
        <div class="t18-band__track">
          <ul>${bulletin.map((b) => `<li><span>${esc(b.time)}</span> ${esc(b.text)}</li>`).join("")}</ul>
          <ul aria-hidden="true">${bulletin.map((b) => `<li><span>${esc(b.time)}</span> ${esc(b.text)}</li>`).join("")}</ul>
        </div>
      </div>
      <span class="t18-band__clock"><span data-clock>--:--</span> · Cotonou</span>
    </div>
    <div class="t18-masthead">
      <div class="t18-masthead__top">
        <span class="t18-masthead__meta">Direction 18 · Signal</span>
        <span class="t18-masthead__meta">${esc(commune.department)} · ${esc(commune.region)}</span>
        <a class="t18-masthead__report" href="#contact">Signaler un problème ${icon("arrow-up-right", { size: 13 })}</a>
      </div>
      <div class="t18-masthead__brand">
        ${brand(commune, { sub: "Signal · l'information de la commune" })}
        <p class="t18-masthead__edition">Édition communale<em>Démo</em></p>
      </div>
      <div class="t18-masthead__bar">
        <nav class="t18-nav" aria-label="Navigation principale">
          ${navItems.slice(0, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
        </nav>
        ${navToggle()}
      </div>
    </div>
  </header>

  <main id="contenu">
    <section class="t18-une" aria-labelledby="t18-title">
      <div class="t18-une__lead">
        <div class="t18-une__media">
          ${image(lead.image, { sizes: "(max-width: 900px) 100vw, 62vw", loading: "eager", fetchpriority: "high" })}
          <span class="t18-une__tag"><i aria-hidden="true"></i> À la une</span>
          <span class="t18-une__credit">${esc(creditLine(lead.image))}</span>
        </div>
        <p class="t18-une__meta"><span>${esc(lead.category)}</span><time datetime="${esc(lead.dateISO)}">${esc(lead.date)}</time><span>Lecture 3 min</span></p>
        <h1 id="t18-title">${esc(lead.title)}</h1>
        <p class="t18-une__deck">${esc(lead.excerpt)}</p>
        <p class="t18-une__byline">Rédaction communale · <span>contenu de démonstration</span></p>
        <a class="t18-une__more" href="#fil">Lire le récit complet ${icon("arrow-right", { size: 15 })}</a>
      </div>

      <aside class="t18-une__side" aria-labelledby="t18-side-title">
        <h2 id="t18-side-title">Dernières dépêches</h2>
        <ol class="t18-depeches">
          ${secondary
            .slice(0, 3)
            .map(
              (n, i) => `<li data-reveal style="--i:${i}">
                <span class="t18-depeches__time">${feedTimes[i] || "—"}</span>
                <div><span class="t18-depeches__cat">${esc(n.category)}</span><h3>${esc(n.title)}</h3><p>${esc(n.excerpt)}</p></div>
              </li>`,
            )
            .join("")}
        </ol>
        <div class="t18-brief">
          <p class="t18-brief__label">${icon("calendar", { size: 13 })} Prochain rendez-vous</p>
          <p class="t18-brief__title">${esc(commune.events[0].title)}</p>
          <p class="t18-brief__meta">${esc(commune.events[0].date)} · ${esc(commune.events[0].place)}</p>
          <a href="#agenda">Tout l'agenda ${icon("arrow-right", { size: 13 })}</a>
        </div>
        <p class="t18-side__note">${icon("alert", { size: 12 })} Dépêches, horaires et contenus fictifs.</p>
      </aside>
    </section>

    <div class="t18-stats"><div class="t18-stats__inner">${statsBand(commune, { variant: "row" })}</div></div>

    <section class="t18-fil section" id="fil" aria-labelledby="fil-title">
      <div class="t18-fil__head">
        <div>
          <p class="eyebrow"><span class="eyebrow__mark" aria-hidden="true"></span>Le fil · édition du jour</p>
          <h2 id="fil-title">Ce qui s'est passé</h2>
        </div>
        <p class="t18-fil__lead">Quatre dépêches fictives, classées comme dans une salle de rédaction : l'essentiel d'abord, le détail ensuite.</p>
      </div>
      <ol class="t18-feed">
        ${[lead, ...secondary]
          .map(
            (n, i) => `<li class="t18-feed__item" data-reveal style="--i:${i}">
              <span class="t18-feed__time">${feedTimes[i] || "—"}</span>
              <span class="t18-feed__dot" aria-hidden="true"></span>
              <div class="t18-feed__body">
                <p class="t18-feed__meta"><span>${esc(n.category)}</span><time datetime="${esc(n.dateISO)}">${esc(n.date)}</time></p>
                <h3>${esc(n.title)}</h3>
                <p>${esc(n.excerpt)}</p>
              </div>
              <span class="t18-feed__n" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
            </li>`,
          )
          .join("")}
      </ol>
      ${demoNote("Actualités, horaires et contenus de démonstration. Aucune information officielle.")}
    </section>

    ${eventsSection(commune, {
      variant: "agenda",
      id: "agenda",
      eyebrow: "Agenda · la semaine communale",
      title: "Les rendez-vous à venir",
      lead: "Un calendrier de démonstration, avec les mêmes codes de lecture que le fil.",
    })}

    ${projectsSection(commune, {
      variant: "table",
      id: "projets",
      eyebrow: "Dossier · chantiers en cours",
      title: "L'état des projets",
      lead: "Budgets et avancements fictifs, présentés comme un tableau de suivi.",
    })}

    ${budgetSection(commune, {
      variant: "bars",
      id: "budget",
      eyebrow: "Données · finances",
      title: "Le budget en un regard",
      lead: "Répartition indicative de démonstration, sans valeur comptable.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Territoire · la commune en carte",
      title: "Où se passe l'information",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Vos démarches, en direct",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t18-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t18-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

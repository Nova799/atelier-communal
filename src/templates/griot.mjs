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
  attractionsSection,
  eventsSection,
  mapSection,
  mayorSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "griot");

const navItems = [
  { label: "Veillée", href: "#haut" },
  { label: "Récits", href: "#recits" },
  { label: "Patrimoine", href: "#patrimoine" },
  { label: "Agenda", href: "#agenda" },
  { label: "Carte", href: "#carte" },
  { label: "Contact", href: "#contact" },
];

const roman = ["I", "II", "III", "IV", "V", "VI"];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t17" id="haut">
  <header class="t17-head" data-header>
    <div class="t17-head__rule" aria-hidden="true"><span></span></div>
    <div class="t17-head__inner">
      <nav class="t17-nav t17-nav--left" aria-label="Navigation principale">
        ${navItems.slice(1, 3).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      ${brand(commune, { sub: "Griot · récits communaux" })}
      <nav class="t17-nav t17-nav--right" aria-label="Navigation secondaire">
        ${navItems.slice(3, 5).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      ${navToggle()}
    </div>
    <p class="t17-head__meta"><span>Direction 17</span><span>${esc(commune.department)} · ${esc(commune.region)}</span><span>Récit de démonstration</span></p>
  </header>

  <main id="contenu">
    <section class="t17-hero" aria-labelledby="t17-title">
      <span class="t17-hero__num" aria-hidden="true"><span>Chapitre</span><strong>I</strong></span>
      <div class="t17-hero__inner">
        <div class="t17-hero__copy">
          <p class="t17-kicker"><span aria-hidden="true">❖</span> Veillée première · ${esc(commune.motto)}</p>
          <h1 id="t17-title"><span>${esc(commune.name)}</span><em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t17-hero__lead">${esc(commune.hero.lead)}</p>
          <blockquote class="t17-hero__epigraph">
            <p>« ${esc(commune.intro.pullquote)} »</p>
            <cite>Parole de démonstration</cite>
          </blockquote>
          <div class="t17-hero__actions">
            <a class="btn btn--solid" href="#recits">Écouter les récits ${icon("arrow-down", { size: 16 })}</a>
            <a class="btn btn--ghost" href="#agenda">Voir l'agenda</a>
          </div>
        </div>

        <figure class="t17-hero__figure">
          <span class="t17-hero__frame" aria-hidden="true"></span>
          ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 40vw", loading: "eager", fetchpriority: "high" })}
          <figcaption>
            <span class="t17-hero__figlabel">${esc(captionFor(commune.hero.image, commune.motto))}</span>
            <span>${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
        </figure>
      </div>

      <dl class="t17-hero__facts">
        <div><dt>Département</dt><dd>${esc(commune.department)}</dd></div>
        <div><dt>Région</dt><dd>${esc(commune.region)}</dd></div>
        <div><dt>Arrondissements</dt><dd>${esc(commune.contacts.arrondissements)}</dd></div>
        <div><dt>Statut</dt><dd>Maquette de démonstration</dd></div>
      </dl>
    </section>

    <section class="t17-recits section" id="recits" aria-labelledby="recits-title">
      ${sectionHead({
        eyebrow: "Récits · ce qui se transmet",
        title: "Trois veillées, une mémoire",
        lead: "Les repères historiques sont ici des chapitres : chaque date ouvre un récit, chaque récit appelle une voix.",
        id: "recits",
      })}
      <div class="t17-recits__intro">
        <p>${esc(commune.intro.text)}</p>
        <figure>
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 34vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
      <ol class="t17-chapters">
        ${commune.history
          .map(
            (h, i) => `<li class="t17-chapter" data-reveal style="--i:${i}">
              <span class="t17-chapter__num" aria-hidden="true">${roman[i]}</span>
              <div class="t17-chapter__body">
                <p class="t17-chapter__year">${esc(h.year)}</p>
                <h3>${esc(h.title)}</h3>
                <p>${esc(h.text)}</p>
              </div>
              <span class="t17-chapter__orn" aria-hidden="true">✦</span>
            </li>`,
          )
          .join("")}
      </ol>
      ${demoNote("Repères historiques simplifiés et reformulés pour la démonstration.")}
    </section>

    ${attractionsSection(commune, {
      variant: "cards",
      id: "patrimoine",
      eyebrow: "Patrimoine · lieux de mémoire",
      title: "Ce que les lieux racontent",
      lead: "Des lieux réels, décrits ici dans le cadre d'une démonstration.",
    })}

    ${eventsSection(commune, {
      variant: "agenda",
      id: "agenda",
      eyebrow: "Agenda · prochaines veillées",
      title: "Les rendez-vous de la commune",
      lead: "Un programme fictif, pour montrer comment la commune peut raconter ses temps forts.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Carte · le territoire raconté",
      title: "Les lieux de la veillée",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Les démarches, simplement",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t17-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t17-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

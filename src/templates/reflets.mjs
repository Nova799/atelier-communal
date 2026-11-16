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
  attractionsSection,
  projectsSection,
  statsBand,
  mapSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "reflets");

const navItems = [
  { label: "Traversée", href: "#haut" },
  { label: "Le village", href: "#village" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const TIMES = [
  { id: "aube", label: "Aube", hour: "05:40", active: true },
  { id: "zenith", label: "Zénith", hour: "12:00", active: false },
  { id: "doree", label: "Heure dorée", hour: "18:20", active: false },
  { id: "crepuscule", label: "Crépuscule", hour: "19:45", active: false },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t21" id="haut">
  <header class="t21-head" data-header>
    <div class="t21-head__inner">
      ${brand(commune, { sub: "Reflets · une commune sur l'eau" })}
      <nav class="t21-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t21-head__cta" href="#services">Le guichet ${icon("arrow-up-right", { size: 14 })}</a>
      ${navToggle("Ouvrir le sommaire")}
    </div>
  </header>

  <main id="contenu">
    <section class="reflets-hero" id="r21-hero" aria-labelledby="r21-title">
      <picture class="reflets-hero__fallback" aria-hidden="true">
        ${image(commune.hero.image, { sizes: "100vw", loading: "eager", fetchpriority: "high", decorative: true })}
      </picture>
      <div id="r21-scene" class="reflets-scene" aria-hidden="true"></div>
      <div class="reflets-hero__scrim" aria-hidden="true"></div>

      <div class="reflets-hero__inner">
        <p class="t21-kicker"><span aria-hidden="true"></span> ${esc(commune.hero.kicker)}</p>
        <h1 id="r21-title"><span>${esc(commune.name)}</span><em>${esc(commune.hero.titleAccent)}</em></h1>
        <p class="t21-hero__lead">${esc(commune.hero.lead)}</p>
        <div class="t21-hero__actions">
          <a class="btn btn--solid" href="#rivage">Commencer la traversée ${icon("arrow-down", { size: 17 })}</a>
          <a class="btn btn--ghost" href="#village">Le village en pirogue</a>
        </div>
      </div>

      <div class="t21-time" role="group" aria-label="Heure de la scène sur le lac">
        <p class="t21-time__label">Heure sur le lac</p>
        <div class="t21-time__row">
          ${TIMES.map((t) => `<button type="button" data-r21-time="${esc(t.id)}" aria-pressed="${t.active}"><span>${esc(t.label)}</span><small>${esc(t.hour)}</small></button>`).join("")}
        </div>
      </div>

      <aside class="t21-carnet" aria-label="Carnet de traversée, contenu fictif">
        <div class="t21-carnet__inner">
          <p class="t21-carnet__label">Carnet de traversée <span>démo</span></p>
          <ul class="t21-carnet__list">
            <li><b>Départ</b><span>Ganvié, embarcadère nord</span></li>
            <li><b>Traversée</b><span>25 min à la pagaie, eau calme</span></li>
            <li><b>Belle lumière</b><span>Heure dorée, vers 18:20</span></li>
          </ul>
          <p class="t21-carnet__note">Itinéraire, durée et horaires fictifs.</p>
        </div>
      </aside>

      <p class="reflets-hero__credit">${esc(captionFor(commune.hero.image, commune.motto))} · ${esc(creditLine(commune.hero.image))}</p>
      <p class="reflets-hero__note">${icon("alert", { size: 12 })} Scène WebGL interactive — contenu de démonstration</p>
      <svg class="reflets-hero__wave" viewBox="0 0 1440 84" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 54c140-34 250-34 380 0s250 34 380 0 250-34 380 0 190 22 300 8v22H0Z" />
      </svg>
    </section>

    <section class="t21-rivage section" id="rivage" aria-labelledby="rivage-title">
      <div class="t21-rivage__grid">
        <div class="t21-rivage__copy">
          <p class="t21-label"><span>01</span> Rivage</p>
          <h2 id="rivage-title">Une commune posée sur l'eau</h2>
          <p class="t21-lead">${esc(commune.intro.text)}</p>
          <blockquote class="t21-quote">${esc(commune.intro.pullquote)}</blockquote>
          ${demoNote("Récit et citation de démonstration.")}
        </div>
        <figure class="t21-rivage__figure">
          ${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 40vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
      <div class="t21-rivage__stats">
        ${statsBand(commune, { variant: "blocks" })}
      </div>
    </section>

    <div class="t21-tide" aria-hidden="true"><svg viewBox="0 0 1440 46" preserveAspectRatio="none" focusable="false"><path d="M0 28c150-22 270-22 400 0s260 22 400 0 260-22 390 0 170 16 250 8v10H0Z" /></svg></div>

    <div class="t21-village">
      ${attractionsSection(commune, {
        variant: "cards",
        id: "village",
        eyebrow: "02 · Village · Ganvié et les îlots",
        title: "Ce que l'eau abrite",
        lead: "Ganvié, ses marchés flottants et ses pilotis : des lieux de démonstration, à découvrir avec les habitants dans le respect des usages.",
      })}
    </div>

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "03 · Projets · sur pilotis",
      title: "Ce qui se construit ici",
      lead: "Opérations, budgets et avancements de démonstration.",
    })}

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "04 · Actualités · le fil du lac",
      title: "Ce qui remonte à la surface",
      lead: "Quatre nouvelles fictives, pour montrer le rythme de l'information communale.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "05 · Carte · lac Nokoué",
      title: "Le lac comme adresse",
      lead: "Carte schématique de démonstration. Les positions et distances sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "grid",
      id: "services",
      eyebrow: "06 · Guichet · démarches",
      title: "Les démarches, sans traverser",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t21-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t21-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}
<script type="module" src="/assets/reflets-scene.js"></script>`;
}

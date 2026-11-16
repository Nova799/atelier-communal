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
  budgetSection,
  transparencySection,
  historySection,
  mayorSection,
  contactSection,
  faqSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "registre");

const navItems = [
  { label: "Une", href: "#une" },
  { label: "Actes", href: "#actes" },
  { label: "Délibérations", href: "#deliberations" },
  { label: "Chronologie", href: "#chronologie" },
  { label: "Guichet", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  const lead = commune.news.find((n) => n.featured) || commune.news[0];
  const others = commune.news.filter((n) => n !== lead).slice(0, 3);
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t4" id="haut">
  <header class="t4-masthead">
    <div class="t4-masthead__meta">
      <span>Édition de démonstration</span>
      <span>${esc(date)}</span>
      <span>${esc(commune.department)} · ${esc(commune.region)}</span>
    </div>
    <div class="t4-masthead__brand">
      ${brand(commune, { sub: "Journal officiel de la commune — démonstration" })}
      <p class="t4-masthead__edition">Registre communal<span>N° 04 · DÉMO</span></p>
      ${navToggle()}
    </div>
    <nav class="t4-nav" aria-label="Navigation principale">
      ${navItems.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      <a class="t4-nav__all" href="/">Les 22 directions ${icon("arrow-up-right", { size: 14 })}</a>
    </nav>
  </header>

  <main id="contenu">
    <section class="t4-une" id="une" aria-labelledby="une-title">
      <div class="t4-une__lead">
        <div class="t4-une__kicker"><span>${esc(lead.category)}</span><time datetime="${esc(lead.dateISO)}">${esc(lead.date)}</time></div>
        <h1 id="une-title">${esc(lead.title)}</h1>
        <p class="t4-une__deck">${esc(lead.excerpt)}</p>
        <figure class="t4-une__figure">
          ${image(lead.image, { sizes: "(max-width: 900px) 100vw, 58vw", loading: "eager", fetchpriority: "high" })}
          <figcaption><span>${esc(captionFor(lead.image, "Une du registre"))}</span><span>${esc(creditLine(lead.image))}</span></figcaption>
        </figure>
        <p class="t4-une__byline">Rédaction communale · texte et image de démonstration</p>
      </div>

      <aside class="t4-une__side" aria-label="Sommaire du registre">
        <div class="t4-une__stamp" aria-hidden="true">Démonstration<span>Ne vaut pas acte</span></div>
        <h2>Au sommaire</h2>
        <ol class="t4-sommaire">
          ${others
            .map(
              (n, i) => `<li><span class="t4-sommaire__n">${String(i + 1).padStart(2, "0")}</span><div><span class="t4-sommaire__cat">${esc(n.category)}</span><strong>${esc(n.title)}</strong><time datetime="${esc(n.dateISO)}">${esc(n.date)}</time></div></li>`,
            )
            .join("")}
        </ol>
        <div class="t4-une__stats">
          <h3>Le registre en chiffres</h3>
          <dl>
            ${commune.stats
              .slice(0, 3)
              .map((s) => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}${esc(s.suffix || "")}</dd></div>`)
              .join("")}
          </dl>
          <p>${icon("alert", { size: 12 })} Repères de démonstration</p>
        </div>
        <div class="t4-une__notice">
          ${icon("alert", { size: 16 })}
          <p>Aucune information officielle. Ce registre est une maquette éditoriale.</p>
        </div>
      </aside>
    </section>

    <section class="t4-editorial" aria-labelledby="editorial-title">
      <div class="t4-editorial__main">
        <p class="t4-rubrique">Éditorial · démonstration</p>
        <h2 id="editorial-title">${esc(commune.intro.title)}</h2>
        <p class="t4-editorial__lead">${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
        ${demoNote("Texte éditorial fictif, rédigé pour la démonstration.")}
      </div>
      <figure class="t4-editorial__figure">
        ${image(commune.intro.image, { sizes: "(max-width: 800px) 100vw, 34vw" })}
        <figcaption>${esc(commune.intro.caption)}<span>${esc(creditLine(commune.intro.image))}</span></figcaption>
      </figure>
    </section>

    ${newsSection(commune, {
      variant: "archive",
      id: "actes",
      eyebrow: "Registre des actes",
      title: "Les entrées du mois",
      lead: "Chaque information est classée comme une entrée de registre, avec sa date et sa rubrique.",
    })}

    <section class="t4-deliberations" id="deliberations" aria-labelledby="deliberations-title">
      <div class="t4-deliberations__head">
        <p class="t4-rubrique">Comptes et délibérations</p>
        <h2 id="deliberations-title">Ce que la commune engage</h2>
        <p>Une présentation de démonstration des masses budgétaires et des marchés, sans valeur comptable ni contractuelle.</p>
      </div>
      <div class="t4-deliberations__budget">
        ${budgetSection(commune, {
          variant: "bars",
          id: "budget",
          eyebrow: "Exercice de démonstration",
          title: "Budget",
          lead: "Les montants sont fictifs.",
        })}
      </div>
    </section>

    ${transparencySection(commune, {
      variant: "table",
      id: "marches",
      eyebrow: "Marchés publics",
      title: "Attributions et documents",
      lead: "Références, montants et statuts de démonstration.",
    })}

    ${historySection(commune, {
      variant: "timeline",
      id: "chronologie",
      eyebrow: "Chronologie",
      title: "Repères datés",
      lead: "Une chronologie simplifiée, à lire comme un repère et non comme une vérité historique définitive.",
    })}

    ${serviceExplorer(commune, {
      variant: "compact",
      id: "services",
      eyebrow: "Guichet",
      title: "Démarches courantes",
      lead: "Un index de démonstration. Aucune demande réelle n'est transmise.",
      className: "t4-services",
    })}

    ${mayorSection(commune, { variant: "panel", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#marches" })}

    ${faqSection(commune, { id: "faq" })}

    <div class="t4-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}

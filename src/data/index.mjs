import { createRequire } from "node:module";
import cotonou from "./communes/cotonou.mjs";
import portoNovo from "./communes/porto-novo.mjs";
import ouidah from "./communes/ouidah.mjs";
import abomey from "./communes/abomey.mjs";
import parakou from "./communes/parakou.mjs";
import natitingou from "./communes/natitingou.mjs";
import nikki from "./communes/nikki.mjs";
import soAva from "./communes/so-ava.mjs";
import { serviceCatalog, serviceBySlug } from "./services.mjs";

const require = createRequire(import.meta.url);
export const imageLibrary = require("../../assets/img/library.json");

export const communes = [cotonou, portoNovo, ouidah, abomey, parakou, natitingou, nikki, soAva];
export const communeBySlug = Object.fromEntries(communes.map((c) => [c.slug, c]));
export { serviceCatalog, serviceBySlug };

export const site = {
  name: "Benin Commune",
  tagline: "Un socle numérique pour les communes du Bénin",
  baseUrl: "https://benin-commune.example",
  demo: true,
  contactEmail: "hello@benin-commune.example",
  disclaimer:
    "Site de démonstration. Les contenus, chiffres, adresses et identités visuelles sont fictifs et ne constituent pas des informations officielles.",
  creditsNote:
    "Photographies sous licences Creative Commons, créditées individuellement. Identités et emblèmes générés pour la démonstration.",
};

const required = [
  "slug", "name", "nameWithDe", "nameWithA", "department", "region", "motto", "positioning",
  "identity", "hero", "intro", "stats", "services", "news", "events", "projects", "budget",
  "markets", "documents", "attractions", "history", "map", "gastronomy", "economy", "culture",
  "youth", "contacts", "mayor", "faq", "seo",
];

for (const c of communes) {
  for (const key of required) {
    if (c[key] === undefined) throw new Error(`[data] ${c.slug}: champ manquant « ${key} »`);
  }
  for (const s of c.services) {
    if (!serviceBySlug[s]) throw new Error(`[data] ${c.slug}: démarche inconnue « ${s} »`);
  }
  for (const n of c.news) {
    if (!imageLibrary[n.image]) throw new Error(`[data] ${c.slug}: image inconnue « ${n.image} »`);
  }
  for (const p of c.projects) {
    if (!imageLibrary[p.image]) throw new Error(`[data] ${c.slug}: image inconnue « ${p.image} »`);
  }
  if (c.map.pois.length < 6) throw new Error(`[data] ${c.slug}: carte trop pauvre`);
}

export function getServices(commune) {
  return commune.services.map((slug) => serviceBySlug[slug]);
}

export function getCommune(slug) {
  const c = communeBySlug[slug];
  if (!c) throw new Error(`Commune inconnue: ${slug}`);
  return c;
}

export function formatNumber(n) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

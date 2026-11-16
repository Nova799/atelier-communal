import { createRequire } from "node:module";
import cotonou from "./communes/cotonou.mjs";
import portoNovo from "./communes/porto-novo.mjs";
import ouidah from "./communes/ouidah.mjs";
import abomey from "./communes/abomey.mjs";
import parakou from "./communes/parakou.mjs";
import natitingou from "./communes/natitingou.mjs";
import nikki from "./communes/nikki.mjs";
import soAva from "./communes/so-ava.mjs";
import abomeyCalavi from "./communes/abomey-calavi.mjs";
import allada from "./communes/allada.mjs";
import bohicon from "./communes/bohicon.mjs";
import cove from "./communes/cove.mjs";
import lokossa from "./communes/lokossa.mjs";
import grandPopo from "./communes/grand-popo.mjs";
import dogbo from "./communes/dogbo.mjs";
import aplahoue from "./communes/aplahoue.mjs";
import djougou from "./communes/djougou.mjs";
import kandi from "./communes/kandi.mjs";
import banikoara from "./communes/banikoara.mjs";
import malanville from "./communes/malanville.mjs";
import tchaourou from "./communes/tchaourou.mjs";
import bembereke from "./communes/bembereke.mjs";
import dassaZoume from "./communes/dassa.mjs";
import savalou from "./communes/savalou.mjs";
import ketou from "./communes/ketou.mjs";
import sakete from "./communes/sakete.mjs";
import boukoumbe from "./communes/boukoumbe.mjs";
import adjohoun from "./communes/adjohoun.mjs";
import kopeDep from "./communes/kopé.mjs";
import banteDep from "./communes/bantè.mjs";
import bopaDep from "./communes/bopa.mjs";
import ouemenouDep from "./communes/ouémènou.mjs";
import ketoucentreDep from "./communes/kétou-centre.mjs";
import saketeestDep from "./communes/sakété-est.mjs";
import bemberekeestDep from "./communes/bembéréké-est.mjs";
import malanvillenordDep from "./communes/malanville-nord.mjs";
import kandiestDep from "./communes/kandi-est.mjs";
import djougoucentreDep from "./communes/djougou-centre.mjs";
import aplahoueestDep from "./communes/aplahoué-est.mjs";
import dogbocentreDep from "./communes/dogbo-centre.mjs";
import lokossaestDep from "./communes/lokossa-est.mjs";
import grandpoponordDep from "./communes/grand-popo-nord.mjs";
import bohiconouestDep from "./communes/bohicon-ouest.mjs";
import abomeyestDep from "./communes/abomey-est.mjs";
import ouidahestDep from "./communes/ouidah-est.mjs";
import portonovocentreDep from "./communes/porto-novo-centre.mjs";
import cotonououestDep from "./communes/cotonou-ouest.mjs";
import kaffeDep from "./communes/kaffé.mjs";
import { serviceCatalog, serviceBySlug } from "./services.mjs";

const require = createRequire(import.meta.url);
export const imageLibrary = require("../../assets/img/library.json");

export function getServices(commune) {
  return commune.services.map((slug) => serviceBySlug[slug]);
}

export const communes = [
  cotonou,
  adjohoun,
  portoNovo,
  abomeyCalavi,
  allada,
  ouidah,
  soAva,
  abomey,
  bohicon,
  cove,
  aplahoue,
  dogbo,
  banikoara,
  djougou,
  kandi,
  malanville,
  bembereke,
  nikki,
  parakou,
  tchaourou,
  boukoumbe,
  dassaZoume,
  natitingou,
  savalou,
  ketou,
  sakete,
  grandPopo,
  lokossa,
  // 20 nouvelles communes
  kopeDep,
  banteDep,
  bopaDep,
  ouemenouDep,
  ketoucentreDep,
  saketeestDep,
  bemberekeestDep,
  malanvillenordDep,
  kandiestDep,
  djougoucentreDep,
  aplahoueestDep,
  dogbocentreDep,
  lokossaestDep,
  grandpoponordDep,
  bohiconouestDep,
  abomeyestDep,
  ouidahestDep,
  portonovocentreDep,
  cotonououestDep,
  kaffeDep,
];
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

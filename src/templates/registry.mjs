import { templateMeta } from "./meta.mjs";

/**
 * Chargement explicite des directions.
 * Une direction manquante fait échouer le build avec un message clair,
 * plutôt que de produire silencieusement une galerie incomplète.
 */
const loaders = {
  tambour: () => import("./tambour.mjs"),
  atlas: () => import("./atlas.mjs"),
  seuil: () => import("./seuil.mjs"),
  registre: () => import("./registre.mjs"),
  "place-publique": () => import("./place-publique.mjs"),
  nova: () => import("./nova.mjs"),
  tissage: () => import("./tissage.mjs"),
  racines: () => import("./racines.mjs"),
  kora: () => import("./kora.mjs"),
  marche: () => import("./marche.mjs"),
  horizon: () => import("./horizon.mjs"),
  "le-fil": () => import("./le-fil.mjs"),
  cadastre: () => import("./cadastre.mjs"),
  "village-global": () => import("./village-global.mjs"),
  monolithe: () => import("./monolithe.mjs"),
  lagune: () => import("./lagune.mjs"),
  griot: () => import("./griot.mjs"),
  signal: () => import("./signal.mjs"),
  terre: () => import("./terre.mjs"),
  studio: () => import("./studio.mjs"),
  reflets: () => import("./reflets.mjs"),
  relief: () => import("./relief.mjs"),
};

export async function loadTemplates({ strict = true } = {}) {
  const missing = templateMeta.filter((m) => !loaders[m.slug]).map((m) => m.slug);
  if (strict && missing.length) {
    throw new Error(`Directions non encore implémentées : ${missing.join(", ")}`);
  }
  const loaded = [];
  for (const meta of templateMeta) {
    if (!loaders[meta.slug]) continue;
    const mod = await loaders[meta.slug]();
    if (mod.meta?.slug !== meta.slug) throw new Error(`Métadonnées incohérentes pour ${meta.slug}`);
    loaded.push({ ...meta, render: mod.render });
  }
  return loaded;
}

export { templateMeta };

import { esc } from "./html.mjs";
import { icon } from "./icons.mjs";
import { communeBySlug } from "../data/index.mjs";

/**
 * Carte communale schématique.
 * Aucune donnée géographique réelle : la carte est un dessin de démonstration,
 * construit à partir du terrain et de points d'intérêt fictifs de la commune.
 */

export const poiGroups = {
  institutions: { label: "Institutions", types: ["civic", "education", "health"] },
  patrimoine: { label: "Patrimoine", types: ["tourism", "culture"] },
  economie: { label: "Économie", types: ["market", "economy"] },
  milieux: { label: "Milieux", types: ["nature", "water", "environment"] },
  mobilite: { label: "Mobilité", types: ["mobility", "sport"] },
};

const typeLabels = {
  civic: "Service public",
  tourism: "Tourisme",
  culture: "Culture",
  market: "Marché",
  economy: "Économie",
  education: "École",
  health: "Santé",
  nature: "Nature",
  water: "Eau",
  environment: "Environnement",
  mobility: "Mobilité",
  sport: "Sport",
};

function groupOf(type) {
  return Object.entries(poiGroups).find(([, g]) => g.types.includes(type))?.[0] || "institutions";
}

function pinColor(type, commune) {
  const group = groupOf(type);
  if (group === "institutions") return commune.identity.primary;
  if (group === "patrimoine") return commune.identity.accent;
  if (group === "economie") return "#8a5a2b";
  if (group === "milieux") return "#3f6b52";
  return "#6b6f76";
}

function terrainArt(terrain, commune) {
  const c = commune.identity;
  const commonRoads = `
    <g class="map__roads" fill="none" stroke="var(--map-road, #d9cfbc)" stroke-width="9" stroke-linecap="round">
      <path d="M-20 372C120 340 250 366 420 314S660 284 830 318"/>
      <path d="M270 -20C296 110 286 246 318 380s10 140 6 180"/>
      <path d="M80 520C130 430 210 402 318 380"/>
    </g>
    <g class="map__roads-dash" fill="none" stroke="var(--map-road-dash, #f4ecdd)" stroke-width="1.6" stroke-dasharray="9 9">
      <path d="M-20 372C120 340 250 366 420 314S660 284 830 318"/>
      <path d="M270 -20C296 110 286 246 318 380s10 140 6 180"/>
    </g>`;

  if (terrain === "lagoon") {
    return `
      <rect width="800" height="520" fill="var(--map-water, #a9c7c2)"/>
      <g class="map__water-lines" fill="none" stroke="var(--map-water-line, rgba(255,255,255,.5))" stroke-width="1.4">
        <path d="M-40 100C120 80 210 128 330 104s220 40 330 14 150 12 200 0"/>
        <path d="M-40 170C100 148 240 196 380 166s260 30 460 4"/>
        <path d="M-40 440C120 414 220 470 360 436s300 18 500 -2"/>
      </g>
      <g class="map__islands" fill="var(--map-land, #e3dac2)">
        <path d="M-10 250C60 210 120 232 148 280s-8 96-74 108-108-42-100-96Z"/>
        <path d="M310 392c56-48 148-42 184 8s10 92-56 108-174-22-128-116Z"/>
        <path d="M590 168c64-40 148-20 170 34s-20 92-88 92-140-64-82-126Z"/>
        <path d="M660 400c50-28 118-12 138 28s-4 70-60 76-116-32-78-104Z"/>
      </g>
      <g fill="var(--map-green, #55755d)" opacity=".55">
        <circle cx="66" cy="286" r="13"/><circle cx="88" cy="308" r="9"/><circle cx="404" cy="452" r="12"/>
        <circle cx="624" cy="214" r="11"/><circle cx="712" cy="432" r="9"/><circle cx="262" cy="250" r="7"/>
      </g>
      <g stroke="var(--map-ink, #2c3f3a)" stroke-width="2.4" fill="none" opacity=".75">
        <path d="M180 210l84 22 52-10M560 340l78-18 60 8"/>
        <path d="M232 208v18M286 220v18M600 332v18M652 324v18"/>
      </g>
      <g fill="var(--map-ink, #2c3f3a)" opacity=".55" class="map__boats">
        <path d="M470 236c12 8 34 8 46 0-6 3-12 4-23 4s-17-1-23-4Z"/>
        <path d="M500 214v20M500 214l8 7-8 6"/>
        <path d="M126 396c10 7 30 7 40 0-5 3-11 4-20 4s-15-1-20-4Z"/>
      </g>
      ${commonRoads}
      <path d="M-20 60 180 180 360 120 540 180 820 80" fill="none" stroke="var(--map-path, #c9b98f)" stroke-width="3" stroke-dasharray="5 7"/>`;
  }

  if (terrain === "coast") {
    return `
      <rect width="800" height="520" fill="var(--map-land, #e6dcc5)"/>
      <path d="M-20 418C160 386 300 402 460 372s250 8 360-22v190H-20Z" fill="var(--map-water, #9dbcc4)"/>
      <g fill="none" stroke="var(--map-water-line, #e8f0ec)" stroke-width="1.6" opacity=".8">
        <path d="M-20 452C150 424 320 448 490 412s220 2 330-16"/>
        <path d="M-20 486C170 462 330 480 500 448s230 0 320-10"/>
        <path d="M-20 508C160 492 340 508 520 478s220-4 300-10"/>
      </g>
      <path d="M-20 418C160 386 300 402 460 372s250 8 360-22" fill="none" stroke="var(--map-sand, #cbb98e)" stroke-width="18"/>
      <path d="M-20 418C160 386 300 402 460 372s250 8 360-22" fill="none" stroke="var(--map-sand-line, #b7a273)" stroke-width="1.4" stroke-dasharray="3 8"/>
      <g fill="var(--map-green, #5f7b58)" opacity=".55">
        <circle cx="80" cy="358" r="9"/><circle cx="120" cy="346" r="7"/><circle cx="670" cy="322" r="10"/>
        <circle cx="720" cy="300" r="7"/><circle cx="590" cy="346" r="6"/>
      </g>
      <g class="map__blocks" fill="var(--map-block, #d8cbb0)" stroke="var(--map-block-line, #cfc0a2)" stroke-width="1">
        <path d="M90 220h140v66H90zM254 190h96v50h-96zM380 224h120v38H380zM152 110h84v58h-84z"/>
        <path d="M548 96h78v86h-78zM640 130h52v60h-52zM60 64h64v70H60z"/>
      </g>
      ${commonRoads}
      <path d="M-20 300C140 280 280 300 400 272s240-12 420-38" fill="none" stroke="var(--map-path, #c7b48c)" stroke-width="4" stroke-dasharray="4 6"/>
      <g fill="var(--map-ink, #2c3f3a)" opacity=".5">
        <path d="M520 464c14 9 40 9 54 0-7 4-15 5-27 5s-20-1-27-5Z"/>
        <path d="M545 440v22l9-8-9-7"/>
      </g>`;
  }

  if (terrain === "mountain") {
    return `
      <rect width="800" height="520" fill="var(--map-land, #e4d9bf)"/>
      <path d="M-20 330 120 168l96 108 98-150 132 178 96-118 120 146 120-76 58 72v202H-20Z" fill="var(--map-ridge-far, #c9c1a3)"/>
      <path d="M-20 386 130 254l94 88 118-110 110 134 104-76 104 94 92-48 68 56v128H-20Z" fill="var(--map-ridge, #a9ad8c)"/>
      <path d="M-20 448 150 342l100 64 138-84 100 86 112-46 120 62 100-34v130H-20Z" fill="var(--map-ridge-near, #87916f)"/>
      <g fill="none" stroke="var(--map-contour, rgba(58,62,48,.35))" stroke-width="1.1">
        <path d="M-20 250c100-28 170 22 240 0s190-56 280-28 180 52 320 20"/>
        <path d="M-20 300c100-24 160 26 250 2s170-42 270-18 200 36 320 12"/>
        <path d="M-20 350c110-22 180 20 270 0s160-30 250-8 210 22 320 4"/>
      </g>
      <g fill="var(--map-green, #536a4b)" opacity=".5">
        <circle cx="92" cy="420" r="8"/><circle cx="126" cy="436" r="5"/><circle cx="688" cy="392" r="8"/>
        <circle cx="716" cy="414" r="5"/><circle cx="382" cy="470" r="6"/>
      </g>
      ${commonRoads}
      <path d="M48 520C120 430 112 360 208 300s80-96 170-142" fill="none" stroke="var(--map-path, #c6b284)" stroke-width="4" stroke-dasharray="4 7"/>`;
  }

  if (terrain === "savanna") {
    return `
      <rect width="800" height="520" fill="var(--map-land, #e8dfc0)"/>
      <g fill="var(--map-field, #d9cfa9)" stroke="var(--map-field-line, #c9bd91)" stroke-width="1">
        <path d="M40 70h180v110H40zM244 42h150v104H244zM424 76h190v92H424zM632 46h150v128H632z"/>
        <path d="M26 286h200v112H26zM248 252h170v128H248zM444 278h174v118H444zM640 270h140v120H640z"/>
      </g>
      <g fill="none" stroke="var(--map-field-line, #c9bd91)" stroke-width="1" opacity=".7">
        <path d="M40 104h180M40 140h180M244 76h150M244 112h150M424 110h190M424 144h190M632 86h150M632 122h150"/>
        <path d="M26 322h200M26 358h200M248 288h170M248 324h170M444 314h174M444 350h174M640 306h140M640 342h140"/>
      </g>
      <g fill="var(--map-green, #6f7d4d)" opacity=".6">
        <circle cx="212" cy="210" r="12"/><circle cx="236" cy="192" r="7"/><circle cx="570" cy="218" r="10"/>
        <circle cx="596" cy="204" r="6"/><circle cx="88" cy="430" r="9"/><circle cx="722" cy="430" r="8"/>
        <circle cx="380" cy="196" r="6"/><circle cx="760" cy="220" r="5"/>
      </g>
      <g fill="none" stroke="var(--map-ink, #4b4632)" stroke-width="1.6" opacity=".45">
        <path d="M212 222v-30M200 200l12-8 12 8M236 199v-20M226 188l10-8 10 8"/>
        <path d="M570 230v-24M558 210l12-8 12 8M596 210v-16M588 202l8-6 8 6"/>
      </g>
      <path d="M-20 248C120 226 250 260 390 234s260 18 430-12" fill="none" stroke="var(--map-path, #c0ab7b)" stroke-width="4" stroke-dasharray="4 8"/>
      ${commonRoads}`;
  }

  // plateau (default)
  return `
    <rect width="800" height="520" fill="var(--map-land, #e7ddc6)"/>
    <g fill="var(--map-field, #dcd0b3)" stroke="var(--map-field-line, #cbbd9c)" stroke-width="1">
      <path d="M-20 70h210v96H-20zM210 50h180v90H210zM414 84h190v76H414zM620 42h200v110H620z"/>
      <path d="M20 300h180v104H20zM220 268h188v118H220zM430 292h160v100H430zM610 280h210v110H610z"/>
    </g>
    <g fill="none" stroke="var(--map-field-line, #cbbd9c)" stroke-width="1" opacity=".7">
      <path d="M-20 106h210M-20 138h210M210 82h180M210 114h180M414 112h190M414 142h190M620 78h200M620 114h200"/>
      <path d="M20 334h180M20 368h180M220 302h188M220 338h188M430 326h160M430 360h160M610 316h210M610 352h210"/>
    </g>
    <g fill="var(--map-green, #607a51)" opacity=".5">
      <circle cx="188" cy="236" r="10"/><circle cx="214" cy="222" r="6"/><circle cx="540" cy="238" r="8"/>
      <circle cx="698" cy="236" r="7"/><circle cx="88" cy="444" r="8"/><circle cx="392" cy="456" r="6"/>
    </g>
    <path d="M-20 254C130 232 262 264 400 240s262 16 420-12" fill="none" stroke="var(--map-path, #c8b487)" stroke-width="4" stroke-dasharray="4 7"/>
    ${commonRoads}`;
}

export function mapBlock(commune, { compact = false, id = "carte" } = {}) {
  const { pois, terrain } = commune.map;
  const groupsPresent = [...new Set(pois.map((p) => groupOf(p.type)))];
  const orderedGroups = Object.keys(poiGroups).filter((g) => groupsPresent.includes(g));
  const cx = (x) => 34 + (x / 100) * 728;
  const cy = (y) => 24 + (y / 100) * 468;

  const pins = pois
    .map((p, i) => {
      const g = groupOf(p.type);
      const x = cx(p.x);
      const y = cy(p.y);
      return `<g class="atlas-map__pin" data-pin="${i}" data-pin-group="${g}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" aria-hidden="true">
        <circle class="atlas-map__pin-halo" r="15" fill="${pinColor(p.type, commune)}" opacity=".14"/>
        <circle class="atlas-map__pin-dot" r="7.5" fill="${pinColor(p.type, commune)}" stroke="var(--map-pin-ring,#fff)" stroke-width="2.4"/>
        <text class="atlas-map__pin-index" y="3.2" text-anchor="middle">${i + 1}</text>
        <g class="atlas-map__pin-label">
          <rect x="14" y="-15" width="${Math.min(230, 26 + p.name.length * 7.2)}" height="30" rx="3" fill="var(--map-label-bg,#1e211c)" opacity=".92"/>
          <text x="25" y="5" fill="var(--map-label-ink,#fff)">${esc(p.name)}</text>
        </g>
      </g>`;
    })
    .join("");

  const filters = [
    `<button class="atlas-map__chip is-active" type="button" data-map-filter="all" aria-pressed="true">Tout<span class="atlas-map__chip-n">${pois.length}</span></button>`,
    ...orderedGroups.map((g) => {
      const n = pois.filter((p) => groupOf(p.type) === g).length;
      return `<button class="atlas-map__chip" type="button" data-map-filter="${g}" aria-pressed="false">${poiGroups[g].label}<span class="atlas-map__chip-n">${n}</span></button>`;
    }),
  ].join("");

  const list = pois
    .map((p, i) => `<li data-map-item data-item-group="${groupOf(p.type)}">
      <button class="atlas-map__poi" type="button" data-map-poi="${i}">
        <span class="atlas-map__poi-n">${String(i + 1).padStart(2, "0")}</span>
        <span class="atlas-map__poi-main">
          <span class="atlas-map__poi-name">${esc(p.name)}</span>
          <span class="atlas-map__poi-note">${esc(p.note)}</span>
        </span>
        <span class="atlas-map__poi-type">${esc(typeLabels[p.type] || "Lieu")}</span>
      </button>
    </li>`)
    .join("");

  return `<div class="atlas-map${compact ? " atlas-map--compact" : ""}" data-map>
    <div class="atlas-map__stage">
      <div class="atlas-map__scene" data-map-scene>
        <svg class="atlas-map__svg" viewBox="0 0 800 520" role="img" aria-labelledby="map-title-${esc(commune.slug)} map-desc-${esc(commune.slug)}" preserveAspectRatio="xMidYMid slice">
          <title id="map-title-${esc(commune.slug)}">Carte schématique de ${esc(commune.name)}</title>
          <desc id="map-desc-${esc(commune.slug)}">Carte de démonstration, sans valeur géographique. Huit lieux fictifs sont positionnés sur un fond ${esc(terrain)}.</desc>
          ${terrainArt(terrain, commune)}
          <g class="atlas-map__pins">${pins}</g>
          <g class="atlas-map__compass" transform="translate(748 58)" fill="none" stroke="var(--map-ink,#2b2e28)" stroke-width="1.4">
            <circle r="17" opacity=".25"/><path d="M0 -12 4 6 0 3 -4 6Z" fill="var(--map-ink,#2b2e28)" stroke="none"/>
            <text y="-24" text-anchor="middle" fill="var(--map-ink,#2b2e28)" stroke="none" font-size="9">N</text>
          </g>
          <g class="atlas-map__scale" transform="translate(36 492)" fill="var(--map-ink,#2b2e28)" opacity=".7">
            <path d="M0 0h64M0 -4v8M32 -3v6M64 -4v8" stroke="currentColor" stroke-width="1.4"/>
            <text x="0" y="17" font-size="9">0</text><text x="56" y="17" font-size="9">2 km</text>
          </g>
        </svg>
      </div>
      <div class="atlas-map__tools">
        <button type="button" data-map-zoom="in" aria-label="Agrandir la carte">${icon("search", { size: 17 })}<span aria-hidden="true">+</span></button>
        <button type="button" data-map-zoom="out" aria-label="Réduire la carte"><span aria-hidden="true">−</span></button>
        <button type="button" data-map-zoom="reset" aria-label="Réinitialiser le zoom">${icon("compass", { size: 17 })}</button>
      </div>
      <p class="atlas-map__status" data-map-status aria-live="polite">${pois.length} lieux affichés. Carte schématique de démonstration.</p>
      <p class="atlas-map__note">${icon("map-pin", { size: 14 })} Carte schématique — positions et distances indicatives, sans valeur officielle.</p>
    </div>
    <div class="atlas-map__side">
      <div class="atlas-map__filters" role="group" aria-label="Filtrer les lieux de la carte">${filters}</div>
      <ol class="atlas-map__list" aria-label="Lieux de la carte">${list}</ol>
    </div>
  </div>`;
}

/** Liste des communes voisines ou du même département, pour les liens internes. */
export function sameDepartment(commune) {
  return Object.values(communeBySlug).filter((c) => c.slug !== commune.slug && c.department === commune.department);
}

/**
 * Jeu d'icônes inline, dessinées sur une grille de 24, contour 1,6.
 * Aucune dépendance externe : chaque icône est un petit fragment SVG.
 */
const P = {
  "arrow-right": '<path d="M4 12h15M13 6l6 6-6 6"/>',
  "arrow-up-right": '<path d="M7 17 17 7M8 7h9v9"/>',
  "arrow-down": '<path d="M12 5v14M6 13l6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 6 6 6-6 6"/>',
  "map-pin": '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
  phone: '<path d="M6.5 3.5h3l1.5 4-2 1.4a15 15 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
  file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 13h6M9 17h6"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 9h18M16 14h2"/>',
  road: '<path d="M8 21 10 3M16 21 14 3M12 5v3M12 11v3M12 17v3"/>',
  lamp: '<path d="M9 21h6M12 17v4M7 4h10l2 8H5z"/><path d="M12 12v5"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/>',
  droplet: '<path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3Z"/>',
  leaf: '<path d="M20 4C10 4 4 9 4 16c0 2 1 4 1 4s2-9 12-11c-6 4-9 8-9 11 5 0 12-4 12-16Z"/>',
  building: '<path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6M8 11h.01M12 11h.01M16 11h.01"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.5a3 3 0 0 1 0 5.8M17 14c2.5.5 4 2.4 4 5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  external: '<path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  play: '<path d="M8 5l11 7-11 7z"/>',
  check: '<path d="m5 12 4.5 4.5L19 7"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 9v5M12 17h.01"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  accessibility: '<circle cx="12" cy="4.5" r="2"/><path d="M4 8h16M12 8v6M8 21l4-7 4 7"/>',
  heart: '<path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 15.2 12 20 12 20Z"/>',
  rings: '<circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/><path d="M9 4l3 5 3-5"/>',
  basket: '<path d="M4 9h16l-1.5 11h-13zM8 9l4-5 4 5M9 13v3M15 13v3"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  shop: '<path d="M4 9h16l-1 11H5zM7 9V6a5 5 0 0 1 10 0v3M9 13h.01M15 13h.01"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
  wave: '<path d="M2 9c3-4 5 4 8 0s5 4 8 0M2 15c3-4 5 4 8 0s5 4 8 0"/>',
  speaker: '<path d="M4 9h3l4-4v14l-4-4H4z"/><path d="M15 8a5 5 0 0 1 0 8M18 5a9 9 0 0 1 0 14"/>',
  quote: '<path d="M6 11H3V6h6v7c0 3-2 5-5 5M17 11h-3V6h6v7c0 3-2 5-5 5"/>',
  home: '<path d="M4 11 12 4l8 7v9h-6v-6h-4v6H4z"/>',
  water: '<path d="M3 8c3 0 3 2 6 2s3-2 6-2 3 2 6 2M3 14c3 0 3 2 6 2s3-2 6-2 3 2 6 2"/>',
  tree: '<path d="M12 21v-5M7 16h10l-2-3h2l-2.5-3H14L12 6l-2 4H8.5L6 13h2z"/>',
  move: '<path d="M12 2v20M2 12h20M8 6l4-4 4 4M8 18l4 4 4-4M6 8l-4 4 4 4M18 8l4 4-4 4"/>',
  horse: '<path d="M5 21v-5l3-4 2-5 3 2 4 1 3 4-3 1v6M9 21v-4h6v4"/>',
};

export function icon(name, { size = 20, cls = "", stroke = 1.7, label = "" } = {}) {
  const path = P[name] || P["arrow-right"];
  const a11y = label
    ? `role="img" aria-label="${label}"`
    : 'aria-hidden="true" focusable="false"';
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" ${a11y}>${path}</svg>`;
}

export const iconNames = Object.keys(P);

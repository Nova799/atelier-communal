# Recherche — contexte et fondements du projet

Période : novembre 2026. Recherche menée par accès direct aux sources (webfetch / curl) ; l'outil de recherche généraliste était indisponible au moment de la rédaction, les conclusions reposent donc sur les pages officielles effectivement consultées, listées dans « Sources ».

## 1. Le terrain institutionnel

### 1.1 Un pays, 77 communes, 12 départements

Le territoire communal béninois est découpé en **77 communes**, réparties dans 12 départements (source : ANCB, « Communes » — liste reproduite et recomptée pour ce projet : 1 Littoral + 8 Atlantique + 9 Ouémé + 5 Plateau + 6 Mono + 6 Couffo + 9 Zou + 6 Collines + 8 Borgou + 6 Alibori + 9 Atacora + 4 Donga = **77**). Les communes ne se ressemblent pas :

- **Cotonou** (Littoral) — 13 arrondissements, capitale économique, Dantokpa, front de lagune, port.
- **Porto-Novo** (Ouémé) — capitale officielle, héritage afro-brésilien et vodun, Grande Mosquée, Rue Delcassé.
- **Ouidah** (Atlantique) — Porte du Non-retour, Route des esclaves, fête du Vaudoun, patrimoine UNESCO partiel.
- **Abomey** (Zou) — palais royaux, sites classés UNESCO depuis 1985, artisans (danses, tapisseries, bronzés).
- **Parakou** (Borgou) — carrefour du nord, grand marché, gare de ravitaillement, économie du transit.
- **Natitingou** (Atacora) — collines de l'Atacora, architectures tata somba, proximité des parcs.
- **Nikki** (Borgou) — ancienne capitale du royaume baatonu, palais royal, fête de la Gaani.
- **Sô-Ava** (Atlantique) — lac Nokoué, Ganvié, mobilité lacustre, marchés flottants.

### 1.2 Ce que l'État affiche

Le portail `gouv.bj` (ainsi que ses déclinaisons sectorielles) montre des constantes : communication étatique hiérarchisée (Présidence → ministères → directions), priorité aux *services* et *résultats*, vocabulaire de « transformation digitale », tableaux de suivi, presse. Les communes, elles, ont des besoins différents d'un ministère : **proximité, démarches, budget, vie du quartier, patrimoine** — pas une vitrine nationale.

### 1.3 L'ANCB

L'**Association Nationale des Communes du Bénin** (ancb.bj) est l'interlocuteur institutionnel des maires : elle publie commissions thématiques, formations, plaidoyers et un « courrier mensuel ». Enseignements utiles pour un site communal :

- les données utiles aux habitants sont **opérationnelles** (horaires, pièces, coûts, contacts, dates de conseil) ;
- la **transparence** (marchés publics, budget, délibérations) est une attente croissante, y compris au niveau local ;
- l'identité locale (patrimoine, terroir, langues, fêtes) porte l'attachement — un site communal n'est pas un mini-portail de ministère.

## 2. Ce qu'un habitant cherche sur un site communal

Hiérarchie observée et assumée dans les 22 directions :

1. **Un service** — état civil, urbanisme, finances, propreté, marché, aide sociale (→ « Démarches » avec pièces, délais, coûts indicatifs).
2. **L'actualité de la commune** — travaux, conseils, événements (→ fil éditorial, cartes, agenda).
3. **La vie politique locale** — conseil communal, budget, délibérations, marchés (→ tableaux, registres, données).
4. **Le territoire** — lieux, patrimoine, économie, gastronomie, accès (→ carte schématique, chapitres, haltes).
5. **Le contact humain** — hôtel de ville, mairies d'arrondissement, signalement (→ fiche contact + formulaire de démo).

## 3. Parti pris de design

- **Le contenu avant la forme.** Les 22 directions partagent le même moteur de données ; ce qui change, c'est le système d'**expression** (grille, échelle typographique, rythme, voix). Aucune direction n'est « la même maquette en 21 couleurs ».
- **Un Bénin photogénique, pas folklorisé.** Photographies réelles de Wikimedia Commons (marchés, palais, collines, lagune), créditées, plutôt que des motifs génériques ou des visuels générés par IA.
- **Une institution qui parle français clair.** Copy rédigée en français courant, ton administratif sans jargon bureaucratique ; aucune fausse attribution à des personnes réelles (« Le Maire » + mention de démonstration).
- **Sérieuse mais vivante.** Les sites institutionnels trop sobres deviennent des guichets morts ; la gazette, le marché, la radio, le griot et le studio sont des langages publics légitimes, pas des gadgets.
- **Rien de faux ne passe pour officiel.** Bandeau « Démonstration · Contenus fictifs », notes de démonstration sur chaque bloc de données, noindex, emblems géométriques inventés, dates et budgets fictifs.

## 4. Accessibilité et performance comme contraintes de design

- WCAG 2.1/2.2 visé : contrastes, focus visible, `prefers-reduced-motion` respecté (animations coupées), ordre de tabulation, cibles ≥ 44 px, `alt` systématiques, un seul `<h1>`, landmarks.
- Mobile-first : la plupart des habitants consulteront depuis un Android d'entrée de gamme. Pages ≈ 91 Ko hors images, polices WOFF2 auto-hébergées, aucune requête tierce, images WebP adaptatives (`srcset`), `loading="lazy"`.
- SEO honnête : métadonnées complètes, JSON-LD, `sitemap.xml`, `robots.txt` ; pages marquées `noindex` car contenus fictifs.

## 5. Ce qui est hors périmètre

- Aucune démarche réelle, base de données officielle, compte ou intégration (e-guichet réel, OSC/etc.). Les formulaires sont des démonstrations front-end.
- Aucune parité avec les sites officiels des 77 communes : il s'agit d'un **système de design et de contenu** prêt à brancher sur de vraies données (voir `CREER-UN-SITE-COMMUNAL.md`).
- La carte est un SVG schématique de démonstration, pas un plan officiel.

## 6. Sources consultées

- `https://www.gouv.bj/` — portail de la République du Bénin (structure, ton, hiérarchie de l'information).
- `https://www.ancb.bj/` — ANCB : **liste des 77 communes par département**, commissions thématiques, programmes (consulté en novembre 2026).
- `https://whc.unesco.org/fr/list/323` — Palais royaux d'Abomey, classés au patrimoine mondial (1985).
- `https://commons.wikimedia.org/` — API de recherche et fichiers image (licences affichées via `library.json`).
- Inventaires publics consultés pour l'exactitude des découpages communaux (le site ANCB référence 77 communes ; le double comptage « Karimama » listé deux fois dans le menu ANCB n'a pas été retenu ; les totaux par département ont été recomptés manuellement).

Les contenus (textes, chiffres, dates, budgets, noms de rues, citations) sont des **œuvres de démonstration originales**, rédigées pour ce projet ; ils ne doivent pas être republiés comme informations officielles.

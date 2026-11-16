export default {
  slug: "bohicon",
  name: "Bohicon",
  nameWithDe: "de Bohicon",
  nameWithA: "à Bohicon",
  department: "Zou",
  region: "Bénin central",
  motto: "Le carrefour du Zou",
  positioning:
    "À neuf kilomètres d'Abomey, Bohicon est un carrefour ferroviaire et commercial qui irrigue les campagnes du Zou. Sa gare, son marché et ses transports en font une commune d'échanges avant tout.",

  identity: {
    primary: "#9b3b2e",
    deep: "#6d241b",
    accent: "#e0b25a",
    soft: "#f4e6df",
    paper: "#f8f1e5",
    ink: "#231613",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune de Bohicon · Zou",
    title: "Bohicon,",
    titleAccent: "là où le Zou prend le train",
    lead: "Une gare, un grand marché, des routes qui montent vers le nord : Bohicon vit du mouvement des hommes et des marchandises.",
    image: "bohicon-ville",
    ctaPrimary: { label: "Découvrir Bohicon", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une ville de passage, une ville de travail",
    text: "Bohicon ne se raconte pas par ses monuments mais par ses flux : les trains de marchandises, les camions vers Parakou, les étals du marché et les ateliers de quartier. Cette position de carrefour est sa chance et sa difficulté.",
    pullquote:
      "Être un carrefour, ce n'est pas seulement voir passer le monde : c'est organiser la halte pour que le territoire en profite.",
    image: "bohicon-site",
    caption: "La gare de Bohicon, point de départ historique de la ligne vers le nord.",
  },

  stats: [
    { value: "1", label: "gare ferroviaire", note: "Ligne Cotonou — Parakou" },
    { value: "9", label: "km d'Abomey", note: "Voisinage immédiat" },
    { value: "1", label: "grand marché", note: "Rayonnement régional" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["marche", "taxes", "urbanisme", "foncier", "economie", "documents", "environnement", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "gare-travaux",
      title: "Gare de Bohicon : réfection des quais et de l'accès routier",
      category: "Mobilité",
      date: "15 novembre 2026",
      dateISO: "2026-11-15",
      excerpt: "Les travaux de démonstration prévoient un accès piéton sécurisé et une meilleure articulation avec les taxis.",
      image: "bohicon-site",
      featured: true,
    },
    {
      id: "marche-propre",
      title: "Grand marché : une opération de propreté et de tri",
      category: "Environnement",
      date: "6 novembre 2026",
      dateISO: "2026-11-06",
      excerpt: "Bacs de tri, points de collecte et sensibilisation des étaliers pendant deux semaines.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "ateliers",
      title: "Les ateliers de la voie ferrée ouvrent leurs portes",
      category: "Patrimoine",
      date: "27 octobre 2026",
      dateISO: "2026-10-27",
      excerpt: "Une journée de démonstration pour découvrir les métiers de la maintenance ferroviaire.",
      image: "bohicon-site",
      featured: false,
    },
    {
      id: "transport",
      title: "Gare routière : nouvelle organisation des départs",
      category: "Mobilité",
      date: "18 octobre 2026",
      dateISO: "2026-10-18",
      excerpt: "Des files par destination et une signalétique rénovée pour réduire la cohue aux heures de pointe.",
      image: "benin-piste",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-bohicon",
      title: "Conseil communal",
      date: "3 décembre 2026",
      dateISO: "2026-12-03",
      time: "10 h",
      place: "Hôtel de ville, Bohicon",
      category: "Institution",
      description: "Budget, voirie et organisation des transports : session publique.",
      image: "bohicon-ville",
      free: true,
    },
    {
      id: "marche-nocturne",
      title: "Marché nocturne des artisans",
      date: "19 décembre 2026",
      dateISO: "2026-12-19",
      time: "18 h — 23 h",
      place: "Esplanade du grand marché",
      category: "Économie",
      description: "Artisanat, restauration et musique pour prolonger la vie du marché.",
      image: "benin-marche",
      free: true,
    },
    {
      id: "journee-cheminots",
      title: "Journée des cheminots",
      date: "23 janvier 2027",
      dateISO: "2027-01-23",
      time: "09 h — 17 h",
      place: "Parvis de la gare",
      category: "Mémoire",
      description: "Exposition photographique et rencontres autour de l'histoire ferroviaire de la ville.",
      image: "bohicon-site",
      free: true,
    },
  ],

  projects: [
    {
      id: "gare",
      title: "Réaménagement des abords de la gare",
      sector: "Mobilité",
      status: "En cours",
      progress: 57,
      budget: "1,3 Md FCFA",
      quarter: "Quartier de la gare",
      description: "Quais, parvis, éclairage et cheminements piétons entre la gare et la gare routière.",
      image: "bohicon-site",
    },
    {
      id: "marche",
      title: "Assainissement du grand marché",
      sector: "Environnement",
      status: "En cours",
      progress: 81,
      budget: "520 M FCFA",
      quarter: "Marché central",
      description: "Réseau d'eaux usées, latrines publiques et points de collecte des déchets.",
      image: "benin-marche",
    },
    {
      id: "voirie",
      title: "Ouverture d'une voie de contournement",
      sector: "Voirie",
      status: "Étude",
      progress: 14,
      budget: "2,8 Md FCFA",
      quarter: "Périphérie est",
      description: "Étude de trafic et de faisabilité pour détourner les poids lourds du centre.",
      image: "bohicon-ville",
    },
    {
      id: "atelier",
      title: "Centre de formation aux métiers du ferroviaire",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "410 M FCFA",
      quarter: "Quartier des cheminots",
      description: "Deux salles de formation et un atelier pratique pour les jeunes de la commune.",
      image: "bohicon-site",
    },
  ],

  budget: {
    year: "2026",
    total: "5,6",
    operating: "3,1",
    investment: "2,5",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 1.3, pct: 23 },
      { label: "Marchés et économie", value: 0.7, pct: 13 },
      { label: "Environnement", value: 0.6, pct: 11 },
      { label: "Éducation et formation", value: 0.5, pct: 9 },
      { label: "Action sociale", value: 0.5, pct: 9 },
      { label: "Fonctionnement", value: 2.0, pct: 35 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "BO/2026/007", title: "Réfection du parvis de la gare", type: "Travaux", amount: "284 M FCFA", date: "02/09/2026", status: "Attribué" },
    { ref: "BO/2026/012", title: "Fourniture de bacs de tri pour le marché", type: "Fournitures", amount: "22 M FCFA", date: "14/10/2026", status: "Attribué" },
    { ref: "BO/2026/016", title: "Étude de trafic pour la voie de contournement", type: "Services", amount: "31 M FCFA", date: "08/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Schéma de mobilité et de stationnement", type: "PDF", size: "5,6 Mo", date: "19/05/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,2 Mo", date: "28/01/2026" },
    { title: "Plan de gestion des déchets du marché", type: "PDF", size: "2,1 Mo", date: "11/09/2026" },
  ],

  attractions: [
    { name: "La gare de Bohicon", type: "Mémoire", text: "Un repère de la ligne Cotonou — Parakou, au cœur de l'histoire économique de la ville.", image: "bohicon-site", distance: "Centre", duration: "45 min" },
    { name: "Le grand marché", type: "Économie", text: "Produits agricoles, tissus, ustensiles : un marché qui rayonne sur tout le Zou.", image: "benin-marche", distance: "Centre", duration: "1 h" },
    { name: "Le quartier de la gare", type: "Ville", text: "Un quartier ouvrier qui raconte la ville à travers ses maisons et ses ateliers.", image: "bohicon-site", distance: "Est", duration: "30 min" },
    { name: "Les routes du nord", type: "Paysage", text: "Les axes qui montent vers Parakou et le Borgou, au départ de la commune.", image: "benin-piste", distance: "Sortie nord", duration: "En voiture" },
  ],

  history: [
    { year: "Début XXe s.", title: "La halte ferroviaire", text: "L'arrivée du chemin de fer transforme un bourg agricole en point de rupture de charge et d'échanges." },
    { year: "XXe s.", title: "Le marché grandit", text: "Autour de la gare se développent commerces, ateliers et quartiers ouvriers." },
    { year: "Aujourd'hui", title: "Un carrefour à organiser", text: "La commune cherche à tirer parti de sa position sans subir la circulation et la pollution qu'elle génère." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 46, y: 44, note: "Accueil et services communaux" },
      { name: "Gare ferroviaire", type: "mobility", x: 56, y: 36, note: "Ligne Cotonou — Parakou" },
      { name: "Grand marché", type: "market", x: 44, y: 52, note: "Commerce régional" },
      { name: "Gare routière", type: "mobility", x: 64, y: 50, note: "Départs interurbains" },
      { name: "Centre de santé", type: "health", x: 38, y: 38, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 52, y: 60, note: "Enseignement secondaire" },
      { name: "Ateliers ferroviaires", type: "economy", x: 68, y: 30, note: "Maintenance et formation" },
      { name: "Zone maraîchère", type: "nature", x: 26, y: 64, note: "Bas-fonds et cultures" },
    ],
  },

  gastronomy: [
    { name: "Igname pilée", text: "Pilée au mortier, servie avec une sauce de tomate, d'arachide ou de feuilles." },
    { name: "Amiwo", text: "Pâte de maïs à la tomate et au poisson, plat convivial du Zou." },
    { name: "Wagasi", text: "Fromage peul grillé ou frit, vendu sur les marchés et au bord des routes." },
  ],

  economy: {
    text: "Le commerce, le transport et la logistique dominent l'économie bohiconnaise, soutenus par l'agriculture du Zou et un artisanat actif. La commune souhaite professionaliser les services autour de la gare et du marché pour créer davantage d'emplois locaux.",
    sectors: [
      { name: "Commerce et logistique", share: 34 },
      { name: "Transport", share: 26 },
      { name: "Agriculture et agroalimentaire", share: 24 },
      { name: "Artisanat et services", share: 16 },
    ],
  },

  culture: {
    text: "Bohicon cultive une culture de quartier : fanfares, ateliers de mécanique, équipes de football et associations de cheminots. La mémoire ferroviaire y tient une place particulière.",
    highlights: ["Mémoire ferroviaire", "Musique et fanfares", "Football de quartier", "Artisanat de la voie"],
  },

  youth: {
    text: "Les jeunes sont nombreux à chercher une formation courte et un premier emploi. La commune soutient les métiers techniques, la maintenance et les services liés au transport.",
    programs: ["Formation aux métiers du ferroviaire", "Ateliers d'insertion", "Maison des jeunes", "Tournois inter-quartiers"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Bohicon",
    phone: "+229 22 00 00 00",
    email: "contact@bohicon.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Bohicon vit de ce qui passe. Notre défi est de faire en sorte que ce mouvement laisse de la valeur ici : des emplois, des ateliers propres et des rues où l'on peut marcher.",
    text: "Le mot du maire est un contenu de démonstration. Il montre comment une commune carrefour peut formuler un projet de développement à partir de sa position géographique.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir une place au marché ?", a: "La rubrique Démarches décrit la procédure de démonstration et les pièces à fournir au guichet économique." },
    { q: "Où stationner près de la gare ?", a: "Des aires de stationnement de démonstration sont indiquées sur la carte interactive." },
    { q: "Comment signaler un dépôt de déchets ?", a: "Le formulaire de signalement permet de décrire le lieu et la nature du dépôt." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Bohicon : gare, marché, mobilité, économie, démarches, actualités et projets du Zou.",
  },
};

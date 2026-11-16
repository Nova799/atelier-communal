export default {
  slug: "kandi",
  name: "Kandi",
  nameWithDe: "de Kandi",
  nameWithA: "à Kandi",
  department: "Alibori",
  region: "Bénin septentrional",
  motto: "Le carrefour de l'Alibori",
  positioning:
    "Préfecture de l'Alibori, Kandi est une ville carrefour du nord du Bénin. Son marché, ses transports et ses services en font un point d'appui pour les communes rurales de tout le département.",

  identity: {
    primary: "#5c5a2a",
    deep: "#3f3d17",
    accent: "#c8763a",
    soft: "#efeedd",
    paper: "#f8f3e5",
    ink: "#1c1b12",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune de Kandi · Alibori",
    title: "Kandi,",
    titleAccent: "le carrefour de l'Alibori",
    lead: "Une préfecture du nord, un grand marché et des routes vers le Niger, le Burkina et Parakou : Kandi est une ville de services et d'échanges.",
    image: "kandi-ville",
    ctaPrimary: { label: "Découvrir Kandi", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une ville qui dessert un département",
    text: "Kandi n'est pas seulement une préfecture : c'est le point où les villages de l'Alibori viennent vendre, acheter, se soigner et régler leurs démarches. Cette fonction impose des équipements solides et une organisation attentive aux plus éloignés.",
    pullquote:
      "Une ville de services se juge à la distance qu'elle fait parcourir à ceux qui viennent de loin.",
    image: "kandi-site",
    caption: "Le centre de formation UD-CVPC-Alibori, à Kandi.",
  },

  stats: [
    { value: "1", label: "préfecture de l'Alibori", note: "Siège départemental" },
    { value: "1", label: "grand marché", note: "Rayonnement départemental" },
    { value: "1", label: "mosquée centrale", note: "Repère du centre-ville" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "marche", "taxes", "agriculture", "foncier", "urbanisme", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "marche-kandi",
      title: "Le grand marché s'équipe de hangars",
      category: "Économie",
      date: "14 novembre 2026",
      dateISO: "2026-11-14",
      excerpt: "Quatre hangars protègent les étals de vivriers et de tissus pendant la saison des pluies.",
      image: "benin-marche",
      featured: true,
    },
    {
      id: "coton",
      title: "Coton : une campagne de formation au tri",
      category: "Agriculture",
      date: "5 novembre 2026",
      dateISO: "2026-11-05",
      excerpt: "Les producteurs de trois arrondissements améliorent la qualité de leur fibre.",
      image: "kandi-paysage",
      featured: false,
    },
    {
      id: "gare",
      title: "Gare routière : nouvelle signalétique des départs",
      category: "Mobilité",
      date: "27 octobre 2026",
      dateISO: "2026-10-27",
      excerpt: "Des panneaux indiquent les destinations et les horaires des transporteurs.",
      image: "benin-piste",
      featured: false,
    },
    {
      id: "ecole",
      title: "Deux écoles rurales raccordées à l'eau",
      category: "Eau",
      date: "18 octobre 2026",
      dateISO: "2026-10-18",
      excerpt: "Forages et latrines pour les élèves de deux villages de la commune.",
      image: "benin-vallee",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-kandi",
      title: "Conseil communal",
      date: "11 décembre 2026",
      dateISO: "2026-12-11",
      time: "10 h",
      place: "Hôtel de ville, Kandi",
      category: "Institution",
      description: "Budget, marché et services ruraux : session publique.",
      image: "kandi-ville",
      free: true,
    },
    {
      id: "foire-alibori",
      title: "Foire agricole de l'Alibori",
      date: "18 — 21 décembre 2026",
      dateISO: "2026-12-18",
      time: "09 h — 18 h",
      place: "Esplanade du marché",
      category: "Agriculture",
      description: "Coton, maïs, élevage et matériel agricole des communes du département.",
      image: "benin-marche",
      free: true,
    },
    {
      id: "courses",
      title: "Courses et fête des jeunes cavaliers",
      date: "17 janvier 2027",
      dateISO: "2027-01-17",
      time: "15 h",
      place: "Hippodrome de démonstration",
      category: "Culture",
      description: "Une manifestation équestre inspirée des fêtes du nord.",
      image: "benin-savane",
      free: true,
    },
  ],

  projects: [
    {
      id: "marche",
      title: "Hangars du grand marché",
      sector: "Économie",
      status: "En cours",
      progress: 62,
      budget: "690 M FCFA",
      quarter: "Centre-ville",
      description: "Quatre hangars, étals maçonnés et drainage des allées.",
      image: "benin-marche",
    },
    {
      id: "voirie",
      title: "Réhabilitation de la traversée de Kandi",
      sector: "Voirie",
      status: "En cours",
      progress: 38,
      budget: "1,9 Md FCFA",
      quarter: "Axe nord — sud",
      description: "Chaussée, caniveaux, éclairage et passages piétons.",
      image: "benin-piste",
    },
    {
      id: "eau",
      title: "Adduction d'eau des villages périphériques",
      sector: "Eau",
      status: "Étude",
      progress: 20,
      budget: "620 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Forages, réservoirs et bornes-fontaines.",
      image: "benin-vallee",
    },
    {
      id: "gare",
      title: "Abri et sanitaires de la gare routière",
      sector: "Mobilité",
      status: "Livré",
      progress: 100,
      budget: "185 M FCFA",
      quarter: "Gare routière",
      description: "Ombrières, bancs et blocs sanitaires pour les voyageurs.",
      image: "benin-piste",
    },
  ],

  budget: {
    year: "2026",
    total: "7,2",
    operating: "4,0",
    investment: "3,2",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 1.4, pct: 19 },
      { label: "Marchés et économie", value: 1.1, pct: 15 },
      { label: "Eau et assainissement", value: 0.8, pct: 11 },
      { label: "Agriculture", value: 0.7, pct: 10 },
      { label: "Action sociale", value: 0.7, pct: 10 },
      { label: "Fonctionnement", value: 2.5, pct: 35 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "KA/2026/008", title: "Construction de hangars au grand marché", type: "Travaux", amount: "392 M FCFA", date: "26/08/2026", status: "Attribué" },
    { ref: "KA/2026/013", title: "Fourniture de mobilier urbain", type: "Fournitures", amount: "41 M FCFA", date: "15/10/2026", status: "Attribué" },
    { ref: "KA/2026/017", title: "Étude d'adduction d'eau rurale", type: "Services", amount: "29 M FCFA", date: "04/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "6,7 Mo", date: "09/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,3 Mo", date: "03/02/2026" },
    { title: "Schéma d'organisation du marché", type: "PDF", size: "2,9 Mo", date: "27/08/2026" },
  ],

  attractions: [
    { name: "Le grand marché", type: "Économie", text: "Vivriers, tissus, bétail et articles ménagers : le marché qui ravitaille l'Alibori.", image: "benin-marche", distance: "Centre", duration: "1 h 30" },
    { name: "Le centre de formation UD-CVPC", type: "Savoir", text: "Un lieu de formation et d'accueil des acteurs locaux, à la sortie de la ville.", image: "kandi-site", distance: "Périphérie", duration: "45 min" },
    { name: "L'école maternelle de Kandi 1", type: "Éducation", text: "Une école de quartier et sa cour, au rythme des rentrées et des fêtes.", image: "kandi-vie", distance: "Kandi 1", duration: "20 min" },
    { name: "Les savanes de l'Alibori", type: "Paysage", text: "Concessions, arbres et cultures composent un paysage ouvert aux portes de la ville.", image: "kandi-paysage", distance: "Périphérie", duration: "Demi-journée" },
  ],

  history: [
    { year: "XIXe s.", title: "Un relais de la savane", text: "Kandi se développe comme place d'échanges entre les communautés du nord et les routes commerciales." },
    { year: "XXe s.", title: "La préfecture", text: "La ville devient le siège administratif de l'Alibori et renforce ses équipements." },
    { year: "Aujourd'hui", title: "Services et agriculture", text: "La commune cherche à articuler le développement du marché, l'accès à l'eau et la modernisation des axes routiers." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Grand marché", type: "market", x: 56, y: 50, note: "Commerce départemental" },
      { name: "Mosquée centrale", type: "culture", x: 44, y: 36, note: "Repère spirituel" },
      { name: "Gare routière", type: "mobility", x: 66, y: 42, note: "Départs interurbains" },
      { name: "Centre de santé", type: "health", x: 38, y: 54, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 60, y: 60, note: "Enseignement secondaire" },
      { name: "Zone cotonnière", type: "nature", x: 26, y: 62, note: "Plaines agricoles" },
      { name: "Forage", type: "water", x: 54, y: 30, note: "Point d'eau public" },
    ],
  },

  gastronomy: [
    { name: "Riz au gras", text: "Riz mijoté avec viande ou poisson, plat des jours de marché." },
    { name: "Wagasi", text: "Fromage peul grillé, vendu sur les étals et au bord des routes." },
    { name: "Viande grillée", text: "Brochettes et grillades préparées au feu de bois." },
  ],

  economy: {
    text: "Le coton, le maïs et l'élevage structurent l'économie agricole, tandis que le commerce et le transport animent la ville. Le marché de Kandi joue un rôle de redistribution pour tout l'Alibori. La commune souhaite renforcer les services et l'accès à l'eau des villages.",
    sectors: [
      { name: "Agriculture et élevage", share: 36 },
      { name: "Commerce", share: 30 },
      { name: "Transport et services", share: 20 },
      { name: "Artisanat", share: 14 },
    ],
  },

  culture: {
    text: "La ville mêle cultures peule, bariba et dendi, visibles dans les fêtes, les langues et les pratiques artisanales. Les manifestations équestres et les marchés restent des moments forts de la vie sociale.",
    highlights: ["Cultures du Nord", "Fêtes équestres", "Artisanat", "Marchés"],
  },

  youth: {
    text: "Les jeunes sont nombreux à chercher une formation et un emploi dans les services ou l'agriculture. La commune soutient l'orientation, le sport et les métiers techniques.",
    programs: ["Orientation professionnelle", "Formation agricole", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Kandi",
    phone: "+229 22 00 00 00",
    email: "contact@kandi.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Kandi doit être une ville où l'on vient sans crainte de perdre sa journée. Simplifier l'accueil, c'est déjà développer le département.",
    text: "Le mot du maire est un contenu de démonstration. Il met l'accent sur la qualité de l'accueil des usagers venus des villages.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir un acte d'état civil ?", a: "La rubrique Démarches détaille les pièces et les étapes de la demande de démonstration." },
    { q: "Où se tenir pour prendre un car ?", a: "La gare routière est indiquée sur la carte interactive de démonstration." },
    { q: "Comment proposer un projet agricole ?", a: "Le formulaire de contact permet de transmettre une initiative au service agriculture." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Kandi : préfecture de l'Alibori, marché, coton, services, démarches et projets du nord.",
  },
};

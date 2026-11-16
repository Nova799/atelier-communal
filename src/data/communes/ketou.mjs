export default {
  slug: "ketou",
  name: "Kétou",
  nameWithDe: "de Kétou",
  nameWithA: "à Kétou",
  department: "Plateau",
  region: "Bénin méridional",
  motto: "La mémoire yoruba du Plateau",
  positioning:
    "À l'extrême nord du Plateau, Kétou est une ancienne cité yoruba frontalière du Nigeria. Son palais, ses marchés et ses six arrondissements en font une commune de mémoire et d'échanges.",

  identity: {
    primary: "#8a3b3b",
    deep: "#5f2424",
    accent: "#d9b04a",
    soft: "#f2e4e1",
    paper: "#f9f2e4",
    ink: "#211413",
    motif: "arch",
  },

  hero: {
    kicker: "Commune de Kétou · Plateau",
    title: "Kétou,",
    titleAccent: "une cité yoruba à la frontière",
    lead: "Un ancien royaume, un palais, des marchés et la proximité du Nigeria : Kétou cultive une identité forte au nord du Plateau.",
    image: "ketou-ville",
    ctaPrimary: { label: "Découvrir Kétou", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer sa visite", href: "#tourisme" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une cité qui se souvient",
    text: "Kétou appartient à ces villes du sud-est qui ont longtemps vécu au rythme des royaumes yoruba. Le palais, les places et les récits de fondation restent des repères, tandis que les marchés et les routes vers le Nigeria maintiennent la commune dans les échanges contemporains.",
    pullquote:
      "Une cité historique n'est pas un conservatoire : elle continue de se construire avec ceux qui y naissent et y travaillent.",
    image: "ketou-site",
    caption: "Le palais et les cours de l'ancienne cité royale.",
  },

  stats: [
    { value: "6", label: "arrondissements", note: "Découpage administratif" },
    { value: "79", label: "villages", note: "Maillage territorial" },
    { value: "1", label: "ancien royaume", note: "Héritage yoruba" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "culture", "tourisme", "marche", "foncier", "urbanisme", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "palais-ketou",
      title: "Le musée Akaba Idena prépare ses visites guidées",
      category: "Patrimoine",
      date: "13 novembre 2026",
      dateISO: "2026-11-13",
      excerpt: "Formation de guides et nouvelle signalétique pour accueillir les scolaires et les visiteurs.",
      image: "ketou-ville",
      featured: true,
    },
    {
      id: "marche-ketou",
      title: "Les sculpteurs de Kétou ouvrent un atelier commun",
      category: "Savoir-faire",
      date: "4 novembre 2026",
      dateISO: "2026-11-04",
      excerpt: "Un espace partagé pour le bois, les commandes et la transmission aux jeunes.",
      image: "ketou-ville",
      featured: false,
    },
    {
      id: "frontiere-ketou",
      title: "Échanges avec le Nigeria : un guichet d'information",
      category: "Économie",
      date: "26 octobre 2026",
      dateISO: "2026-10-26",
      excerpt: "Un point d'accueil renseigne les commerçantes sur les formalités et les horaires.",
      image: "ketou-vie",
      featured: false,
    },
    {
      id: "ecole-ketou",
      title: "Trois écoles rurales réhabilitées",
      category: "Éducation",
      date: "17 octobre 2026",
      dateISO: "2026-10-17",
      excerpt: "Toitures, latrines et mobilier pour les classes des arrondissements ruraux.",
      image: "ketou-paysage",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-ketou",
      title: "Conseil communal",
      date: "7 décembre 2026",
      dateISO: "2026-12-07",
      time: "10 h",
      place: "Hôtel de ville, Kétou",
      category: "Institution",
      description: "Budget, patrimoine et marchés : session ouverte au public.",
      image: "ketou-ville",
      free: true,
    },
    {
      id: "fete-yoruba",
      title: "Fête culturelle yoruba",
      date: "18 décembre 2026",
      dateISO: "2026-12-18",
      time: "16 h — 23 h",
      place: "Place du marché",
      category: "Culture",
      description: "Chants, danses et contes des communautés de la commune.",
      image: "ketou-vie",
      free: true,
    },
    {
      id: "visite-palais",
      title: "Visite guidée du palais et de la cité",
      date: "9 janvier 2027",
      dateISO: "2027-01-09",
      time: "09 h",
      place: "Départ : entrée du palais",
      category: "Patrimoine",
      description: "Un parcours commenté dans le respect des usages et de la chefferie.",
      image: "ketou-site",
      free: false,
    },
  ],

  projects: [
    {
      id: "palais",
      title: "Entretien du palais royal",
      sector: "Patrimoine",
      status: "En cours",
      progress: 48,
      budget: "240 M FCFA",
      quarter: "Centre historique",
      description: "Toitures, drainage et sécurisation des cours.",
      image: "ketou-site",
    },
    {
      id: "marche",
      title: "Réhabilitation du marché central",
      sector: "Économie",
      status: "En cours",
      progress: 57,
      budget: "390 M FCFA",
      quarter: "Centre-ville",
      description: "Hangars, étals, drainage et accès piéton.",
      image: "ketou-ville",
    },
    {
      id: "pistes",
      title: "Pistes vers les villages frontaliers",
      sector: "Voirie",
      status: "Étude",
      progress: 22,
      budget: "610 M FCFA",
      quarter: "Est de la commune",
      description: "Empierrement et ouvrages de franchissement.",
      image: "benin-piste",
    },
    {
      id: "ecoles",
      title: "Réhabilitation de trois écoles",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "168 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Toitures, latrines et mobilier scolaire.",
      image: "ketou-paysage",
    },
  ],

  budget: {
    year: "2026",
    total: "4,9",
    operating: "2,9",
    investment: "2,0",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine et culture", value: 0.6, pct: 12 },
      { label: "Marchés et économie", value: 0.7, pct: 14 },
      { label: "Voirie et pistes", value: 0.5, pct: 10 },
      { label: "Éducation", value: 0.5, pct: 10 },
      { label: "Action sociale", value: 0.5, pct: 10 },
      { label: "Fonctionnement", value: 2.1, pct: 44 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "KE/2026/005", title: "Entretien des toitures du palais", type: "Travaux", amount: "132 M FCFA", date: "17/08/2026", status: "Attribué" },
    { ref: "KE/2026/009", title: "Hangars du marché central", type: "Travaux", amount: "214 M FCFA", date: "01/10/2026", status: "Attribué" },
    { ref: "KE/2026/011", title: "Étude des pistes frontalières", type: "Services", amount: "24 M FCFA", date: "22/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de valorisation du patrimoine", type: "PDF", size: "4,3 Mo", date: "19/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,9 Mo", date: "28/01/2026" },
    { title: "Schéma des équipements marchands", type: "PDF", size: "2,4 Mo", date: "07/09/2026" },
  ],

  attractions: [
    { name: "Le palais royal", type: "Mémoire", text: "Le cœur de l'ancienne cité, lieu de cérémonies et de transmission, à visiter dans le respect des usages.", image: "ketou-site", distance: "Centre", duration: "1 h" },
    { name: "Le marché central", type: "Vie locale", text: "Vivriers, tissus et artisanat, au rythme des jours de marché.", image: "ketou-ville", distance: "Centre", duration: "1 h" },
    { name: "Les villages du plateau", type: "Territoire", text: "Un maillage de localités rurales où se transmettent les récits yoruba.", image: "ketou-paysage", distance: "10 — 25 km", duration: "Demi-journée" },
    { name: "Les routes du Nigeria", type: "Échanges", text: "Des axes qui relient la commune aux marchés frontaliers et aux villes voisines.", image: "ketou-vie", distance: "Est", duration: "En voiture" },
  ],

  history: [
    { year: "XVIIIe s.", title: "La cité royale", text: "Kétou s'affirme comme un royaume yoruba majeur du plateau, avec ses chefferies et ses places cérémonielles." },
    { year: "XXe s.", title: "Frontière et commerce", text: "La proximité du Nigeria renforce les échanges commerciaux et les liens familiaux." },
    { year: "Aujourd'hui", title: "Mémoire et services", text: "La commune cherche à préserver son patrimoine tout en améliorant les marchés, les écoles et les pistes." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Palais royal", type: "tourism", x: 42, y: 34, note: "Centre historique" },
      { name: "Marché central", type: "market", x: 56, y: 50, note: "Commerce quotidien" },
      { name: "Centre de santé", type: "health", x: 38, y: 54, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 60, y: 60, note: "Enseignement secondaire" },
      { name: "Zone agricole", type: "nature", x: 28, y: 62, note: "Vivriers et palmier" },
      { name: "Frontière", type: "mobility", x: 70, y: 36, note: "Échanges avec le Nigeria" },
      { name: "Place cérémonielle", type: "culture", x: 46, y: 26, note: "Récits et cérémonies" },
    ],
  },

  gastronomy: [
    { name: "Amiwo", text: "Pâte de maïs à la tomate et au poisson, plat convivial du sud-est." },
    { name: "Àkàrà", text: "Beignets de niébé frits, vendus sur les marchés et au bord des routes." },
    { name: "Akassa", text: "Pâte de maïs fermentée, servie avec une sauce de poisson ou de tomate." },
  ],

  economy: {
    text: "L'agriculture, le commerce de marché et les échanges frontaliers structurent l'économie. Le maïs, le manioc et le palmier à huile dominent les cultures, tandis que l'artisanat et le transport complètent les revenus. La commune veut mieux organiser les marchés et les pistes rurales.",
    sectors: [
      { name: "Agriculture", share: 40 },
      { name: "Commerce et frontière", share: 28 },
      { name: "Transport et artisanat", share: 18 },
      { name: "Services et tourisme", share: 14 },
    ],
  },

  culture: {
    text: "La culture yoruba est présente dans les chants, les contes, les cérémonies et les liens familiaux de part et d'autre de la frontière. La commune soutient les associations qui transmettent cette mémoire aux jeunes.",
    highlights: ["Culture yoruba", "Chants et contes", "Cérémonies", "Liens frontaliers"],
  },

  youth: {
    text: "Les jeunes sont confrontés au sous-emploi rural et à la migration. Les programmes de démonstration soutiennent la formation, les métiers du patrimoine et les initiatives sportives.",
    programs: ["Métiers du patrimoine", "Formation agricole", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Kétou",
    phone: "+229 22 00 00 00",
    email: "contact@ketou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "6 arrondissements",
    quartiers: "79 villages",
  },

  mayor: {
    quote:
      "Kétou a une histoire qui dépasse ses murs. Notre responsabilité est de la transmettre sans la figer, et de faire en sorte que chaque village bénéficie des services de la commune.",
    text: "Le mot du maire est un contenu de démonstration. Il relie la mémoire yoruba à l'objectif d'équité entre les arrondissements.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment visiter le palais ?", a: "La visite se fait selon les usages et avec l'accord de la chefferie ; la page Tourisme décrit le cadre de la démonstration." },
    { q: "Comment obtenir un acte de naissance ?", a: "La rubrique Démarches détaille les pièces et les étapes de la demande de démonstration." },
    { q: "Où se tenir pour les échanges frontaliers ?", a: "La carte interactive indique un point symbolique ; les formalités réelles relèvent des autorités compétentes." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Kétou : royaume yoruba, palais, marché, frontière du Nigeria, démarches et projets du Plateau.",
  },
};

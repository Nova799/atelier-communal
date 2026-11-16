export default {
  slug: "nikki",
  name: "Nikki",
  nameWithDe: "de Nikki",
  nameWithA: "à Nikki",
  department: "Borgou",
  region: "Bénin septentrional",
  motto: "Le royaume du Borgou",
  positioning: "Palais, chevaux et transmission orale : Nikki perpétue une histoire royale et une culture de la fête unique au Bénin.",

  identity: {
    primary: "#9c4a1a",
    deep: "#6f3210",
    accent: "#e0b25a",
    soft: "#f4e5d5",
    paper: "#f9f1e4",
    ink: "#241810",
    motif: "spear",
  },

  hero: {
    kicker: "Commune de Nikki · Borgou",
    title: "Nikki,",
    titleAccent: "la Gaani dans le sang",
    lead: "Capitale historique du Borgou, Nikki célèbre chaque année la Gaani, fête des chevaux et de la mémoire royale, entre palais, griots et savane.",
    image: "nikki-gaani",
    ctaPrimary: { label: "Découvrir Nikki", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer la Gaani", href: "#agenda" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une histoire qui se transmet",
    text: "Le royaume de Nikki a marqué l'histoire du Borgou. Aujourd'hui, la commune porte cet héritage à travers son palais, son musée, ses cavaliers et une tradition orale toujours vivante.",
    pullquote: "Ici, l'histoire ne s'écrit pas seulement dans les livres : elle se chante, se danse et se transmet de génération en génération.",
    image: "nikki-palais-roi",
    caption: "Le palais du roi de Nikki, sous son grand arbre.",
  },

  stats: [
    { value: "7", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "palais royal", note: "Palais de Nikki" },
    { value: "1", label: "Gaani annuelle", note: "Fête des chevaux" },
    { value: "1", label: "musée royal", note: "Musée Danri" },
  ],

  services: ["acte-naissance", "culture", "tourisme", "agriculture", "social", "urbanisme", "environnement", "economie"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "gaani",
      title: "Gaani : les préparatifs s'organisent avec les quartiers",
      category: "Culture",
      date: "14 novembre 2026",
      dateISO: "2026-11-14",
      excerpt: "Accueil des visiteurs, sécurité, eau et propreté : la commune coordonne les équipes pour la grande fête annuelle.",
      image: "nikki-gaani",
      featured: true,
    },
    {
      id: "palais",
      title: "Palais royal : un chantier de restauration respectueux des matériaux",
      category: "Patrimoine",
      date: "8 novembre 2026",
      dateISO: "2026-11-08",
      excerpt: "Les techniques traditionnelles sont privilégiées, avec l'appui de maçons et de conservateurs.",
      image: "nikki-palais-roi",
      featured: false,
    },
    {
      id: "marche-betail",
      title: "Marché de bétail : amélioration des accès et de l'abreuvement",
      category: "Économie",
      date: "31 octobre 2026",
      dateISO: "2026-10-31",
      excerpt: "Un aménagement de démonstration pour sécuriser les transactions et améliorer les conditions sanitaires.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "griots",
      title: "Les griots du palais transmettent aux plus jeunes",
      category: "Culture",
      date: "25 octobre 2026",
      dateISO: "2026-10-25",
      excerpt: "Ateliers de récit et de musique dans les écoles, avec les détenteurs de la parole.",
      image: "nikki-griot",
      featured: false,
    },
  ],

  events: [
    {
      id: "gaani-date",
      title: "La Gaani",
      date: "Décembre 2026",
      dateISO: "2026-12-19",
      time: "Toute la journée",
      place: "Esplanade du palais royal",
      category: "Culture",
      description: "Cavaliers, tambours, danses et rencontres : la grande fête des chevaux et de la mémoire du royaume.",
      image: "nikki-gaani",
      free: true,
    },
    {
      id: "visite-palais",
      title: "Visite guidée du palais et du musée Danri",
      date: "28 novembre 2026",
      dateISO: "2026-11-28",
      time: "09 h",
      place: "Palais royal",
      category: "Patrimoine",
      description: "Une visite de deux heures avec un médiateur, sur réservation.",
      image: "nikki-palais-roi",
      free: false,
    },
    {
      id: "conseil",
      title: "Conseil communal",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Budget, Gaani et accès à l'eau à l'ordre du jour.",
      image: "nikki-musee",
      free: true,
    },
  ],

  projects: [
    {
      id: "palais",
      title: "Conservation du palais royal",
      sector: "Patrimoine",
      status: "En cours",
      progress: 61,
      budget: "680 M FCFA",
      quarter: "Centre historique",
      description: "Reprise des enduits, protection des bois et formation des artisans locaux.",
      image: "nikki-palais-roi",
    },
    {
      id: "accueil-gaani",
      title: "Centre d'accueil de la Gaani",
      sector: "Culture",
      status: "En cours",
      progress: 35,
      budget: "410 M FCFA",
      quarter: "Esplanade",
      description: "Espaces d'accueil, sanitaires et points d'eau pour les visiteurs et les cavaliers.",
      image: "nikki-gaani",
    },
    {
      id: "forage",
      title: "Forages pastoraux",
      sector: "Eau",
      status: "En cours",
      progress: 83,
      budget: "320 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Trois forages et abreuvoirs pour réduire les tensions autour de l'eau.",
      image: "benin-savane",
    },
    {
      id: "voie",
      title: "Voie d'accès au musée royal",
      sector: "Voirie",
      status: "Livré",
      progress: 100,
      budget: "180 M FCFA",
      quarter: "Centre",
      description: "Chaussée et cheminements piétons sécurisés.",
      image: "nikki-musee",
    },
  ],

  budget: {
    year: "2026",
    total: "4,9",
    operating: "2,9",
    investment: "2,0",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine et culture", value: 0.8, pct: 16 },
      { label: "Eau et élevage", value: 0.7, pct: 14 },
      { label: "Voirie", value: 0.6, pct: 12 },
      { label: "Éducation", value: 0.6, pct: 12 },
      { label: "Action sociale", value: 0.5, pct: 10 },
      { label: "Fonctionnement", value: 1.7, pct: 36 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "NI/2026/004", title: "Travaux de conservation du palais royal", type: "Travaux", amount: "192 M FCFA", date: "08/09/2026", status: "Attribué" },
    { ref: "NI/2026/009", title: "Construction de trois forages pastoraux", type: "Travaux", amount: "146 M FCFA", date: "29/09/2026", status: "Attribué" },
    { ref: "NI/2026/013", title: "Équipement du centre d'accueil de la Gaani", type: "Fournitures", amount: "58 M FCFA", date: "02/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,2 Mo", date: "20/01/2026" },
    { title: "Plan de gestion du palais royal", type: "PDF", size: "3,1 Mo", date: "15/05/2026" },
    { title: "Programme de la Gaani 2026", type: "PDF", size: "1,6 Mo", date: "10/11/2026" },
  ],

  attractions: [
    { name: "Le palais royal", type: "Patrimoine", text: "Le cœur historique de Nikki, lieu de mémoire et de transmission du royaume.", image: "nikki-palais-roi", distance: "Centre", duration: "1 h" },
    { name: "Le musée Danri", type: "Culture", text: "Objets, photographies et récits de la royauté et de la vie du Borgou.", image: "nikki-musee", distance: "Centre", duration: "45 min" },
    { name: "La Gaani", type: "Fête", text: "La grande fête des chevaux, moment fort de la vie culturelle et spirituelle de la ville.", image: "nikki-gaani", distance: "Esplanade", duration: "Une journée" },
    { name: "La savane du Borgou", type: "Nature", text: "Des paysages ouverts, rythmés par les arbres et les pistes rurales.", image: "benin-savane", distance: "Périphérie", duration: "Demi-journée" },
  ],

  history: [
    { year: "XVIIe s.", title: "Le royaume de Nikki", text: "La ville devient la capitale d'un royaume baatonu influent dans le Borgou." },
    { year: "XIXe s.", title: "La Gaani", text: "La fête des chevaux s'affirme comme un moment central de la vie du royaume et de ses alliances." },
    { year: "Aujourd'hui", title: "Un patrimoine vivant", text: "Palais, musée et fête annuelle continuent de structurer l'identité de la commune." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 50, y: 46, note: "Accueil et services communaux" },
      { name: "Palais royal", type: "tourism", x: 58, y: 40, note: "Patrimoine et mémoire du royaume" },
      { name: "Musée Danri", type: "culture", x: 54, y: 54, note: "Collections royales" },
      { name: "Mosquée du palais", type: "tourism", x: 62, y: 58, note: "Architecture et vie religieuse" },
      { name: "Marché central", type: "market", x: 42, y: 60, note: "Commerce et produits du terroir" },
      { name: "Esplanade de la Gaani", type: "culture", x: 66, y: 70, note: "Fête des chevaux" },
      { name: "École publique", type: "education", x: 30, y: 50, note: "École primaire" },
      { name: "Forage pastoral", type: "water", x: 34, y: 34, note: "Point d'eau et abreuvoir" },
    ],
  },

  gastronomy: [
    { name: "Wagasi", text: "Fromage peul grillé, servi avec une sauce tomate épicée." },
    { name: "Tô de mil", text: "Pâte de mil, accompagnée de sauces de feuilles ou de viande." },
    { name: "Lait caillé", text: "Boisson et dessert des élevages peuls, appréciés sur les marchés." },
  ],

  economy: {
    text: "Élevage, agriculture, commerce et tourisme culturel composent l'économie locale. La Gaani constitue un temps fort pour les commerces et l'accueil des visiteurs.",
    sectors: [
      { name: "Élevage", share: 30 },
      { name: "Agriculture", share: 28 },
      { name: "Commerce", share: 24 },
      { name: "Tourisme et culture", share: 18 },
    ],
  },

  culture: {
    text: "Nikki est une ville de parole et de chevaux. Les griots, les cavaliers, les tambours et les danses du Borgou y occupent une place centrale.",
    highlights: ["La Gaani", "Cavaliers et chevaux", "Griots et récits", "Musique du Borgou"],
  },

  youth: {
    text: "La commune associe les jeunes aux préparatifs de la Gaani et soutient les apprentissages liés à l'élevage, au tourisme et aux métiers de la culture.",
    programs: ["Jeunes cavaliers", "Médiation patrimoine", "Formation tourisme", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Nikki",
    phone: "+229 23 90 00 00",
    email: "contact@nikki.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "7 arrondissements",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote: "La Gaani nous rappelle que Nikki est une ville de rencontre. Notre ambition est que cette fierté serve aussi le quotidien : l'eau, l'école, l'emploi.",
    text: "Le mot du maire est un contenu de démonstration. Il articule patrimoine, fierté locale et priorités sociales.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Quand se déroule la Gaani ?", a: "La date de démonstration est fixée en décembre. La date officielle doit être vérifiée auprès des autorités locales." },
    { q: "Comment visiter le palais ?", a: "La rubrique Tourisme propose un formulaire de réservation de démonstration." },
    { q: "Où trouver de l'eau pour le bétail ?", a: "Les forages pastoraux sont indiqués sur la carte interactive de démonstration." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Nikki : Gaani, palais royal, culture du Borgou, démarches, actualités et projets.",
  },
};

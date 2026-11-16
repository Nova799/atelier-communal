export default {
  slug: "tchaourou",
  name: "Tchaourou",
  nameWithDe: "de Tchaourou",
  nameWithA: "à Tchaourou",
  department: "Borgou",
  region: "Bénin central",
  motto: "La forêt et le carrefour",
  positioning:
    "Sur l'axe Cotonou — Parakou, Tchaourou est une commune de passage et de production. Sa gare, ses marchés et sa forêt classée en font un territoire où le transport, le coton et les ressources naturelles se rencontrent.",

  identity: {
    primary: "#4a6b2a",
    deep: "#30471a",
    accent: "#d3a03c",
    soft: "#eaf0dd",
    paper: "#f7f2e4",
    ink: "#171d12",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune de Tchaourou · Borgou",
    title: "Tchaourou,",
    titleAccent: "là où la route traverse la forêt",
    lead: "Une gare, un axe national, des champs de coton et une grande forêt classée : Tchaourou vit du mouvement tout en dépendant d'un milieu fragile.",
    image: "tchaourou-ville",
    ctaPrimary: { label: "Découvrir Tchaourou", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Un carrefour au milieu des arbres",
    text: "Tchaourou ne se résume pas à sa gare. Autour de l'axe qui monte vers Parakou, des villages cultivent le coton et le maïs, des transporteurs s'arrêtent et des marchés se tiennent. La forêt classée, longtemps perçue comme une réserve, est aujourd'hui au cœur des débats sur l'usage des terres.",
    pullquote:
      "Traverser une commune ne suffit pas à la connaître : il faut regarder ce que la route laisse derrière elle.",
    image: "tchaourou-site",
    caption: "Le pont de Bétérou, un passage sur l'eau au cœur de la commune.",
  },

  stats: [
    { value: "1", label: "gare ferroviaire", note: "Ligne Cotonou — Parakou" },
    { value: "1", label: "forêt classée", note: "Patrimoine naturel" },
    { value: "1", label: "axe national", note: "Cotonou — Parakou" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["agriculture", "marche", "acte-naissance", "foncier", "environnement", "economie", "urbanisme", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "gare-tchaourou",
      title: "Gare de Tchaourou : un parvis réaménagé",
      category: "Mobilité",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Cheminements piétons et éclairage pour sécuriser l'accès au train et aux taxis.",
      image: "tchaourou-site",
      featured: true,
    },
    {
      id: "foret",
      title: "Forêt classée : une campagne contre les feux de brousse",
      category: "Environnement",
      date: "3 novembre 2026",
      dateISO: "2026-11-03",
      excerpt: "Pare-feux, sensibilisation des villages riverains et suivi des zones brûlées.",
      image: "tchaourou-paysage",
      featured: false,
    },
    {
      id: "marche-beterou",
      title: "Le marché de Bétérou couvre ses allées",
      category: "Économie",
      date: "24 octobre 2026",
      dateISO: "2026-10-24",
      excerpt: "Deux hangars protègent les vivriers et les étals de tissus pendant les pluies.",
      image: "tchaourou-ville",
      featured: false,
    },
    {
      id: "coton",
      title: "Coton : des pistes de collecte remises en état",
      category: "Agriculture",
      date: "15 octobre 2026",
      dateISO: "2026-10-15",
      excerpt: "Les camions accèdent plus facilement aux villages producteurs du nord de la commune.",
      image: "benin-piste",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-tchaourou",
      title: "Conseil communal",
      date: "4 décembre 2026",
      dateISO: "2026-12-04",
      time: "10 h",
      place: "Hôtel de ville, Tchaourou",
      category: "Institution",
      description: "Budget, forêt et pistes rurales : session ouverte au public.",
      image: "tchaourou-ville",
      free: true,
    },
    {
      id: "foire-borgou",
      title: "Foire agricole du Borgou",
      date: "11 — 13 décembre 2026",
      dateISO: "2026-12-11",
      time: "09 h — 18 h",
      place: "Esplanade du marché",
      category: "Agriculture",
      description: "Coton, maïs, igname et matériel agricole des communes voisines.",
      image: "tchaourou-paysage",
      free: true,
    },
    {
      id: "journee-arbre",
      title: "Journée de l'arbre",
      date: "14 janvier 2027",
      dateISO: "2027-01-14",
      time: "08 h",
      place: "Départ : place de la gare",
      category: "Environnement",
      description: "Plantations et ateliers sur la protection de la forêt classée.",
      image: "tchaourou-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "gare",
      title: "Réaménagement des abords de la gare",
      sector: "Mobilité",
      status: "En cours",
      progress: 61,
      budget: "420 M FCFA",
      quarter: "Quartier de la gare",
      description: "Parvis, éclairage, abri et stationnement pour les deux-roues.",
      image: "tchaourou-site",
    },
    {
      id: "pistes",
      title: "Réhabilitation de pistes cotonnières",
      sector: "Voirie",
      status: "En cours",
      progress: 44,
      budget: "730 M FCFA",
      quarter: "Villages du nord",
      description: "Empierrement, busage et entretien des accotements.",
      image: "benin-piste",
    },
    {
      id: "foret",
      title: "Pare-feux et surveillance de la forêt",
      sector: "Environnement",
      status: "En cours",
      progress: 52,
      budget: "180 M FCFA",
      quarter: "Forêt classée",
      description: "Ouverture de pare-feux, formation des brigades et signalétique.",
      image: "tchaourou-paysage",
    },
    {
      id: "marche",
      title: "Hangars du marché de Bétérou",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "165 M FCFA",
      quarter: "Bétérou",
      description: "Deux hangars, étals et point d'eau pour les vendeuses.",
      image: "tchaourou-ville",
    },
  ],

  budget: {
    year: "2026",
    total: "5,2",
    operating: "3,0",
    investment: "2,2",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et pistes", value: 0.9, pct: 17 },
      { label: "Environnement et forêt", value: 0.6, pct: 12 },
      { label: "Agriculture", value: 0.6, pct: 12 },
      { label: "Marchés et économie", value: 0.5, pct: 10 },
      { label: "Action sociale", value: 0.5, pct: 10 },
      { label: "Fonctionnement", value: 2.1, pct: 39 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "TC/2026/005", title: "Réaménagement du parvis de la gare", type: "Travaux", amount: "248 M FCFA", date: "19/08/2026", status: "Attribué" },
    { ref: "TC/2026/009", title: "Ouverture de pare-feux", type: "Travaux", amount: "96 M FCFA", date: "02/10/2026", status: "Attribué" },
    { ref: "TC/2026/013", title: "Étude de réhabilitation des pistes cotonnières", type: "Services", amount: "22 M FCFA", date: "26/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de gestion de la forêt classée", type: "PDF", size: "6,3 Mo", date: "07/05/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,0 Mo", date: "26/01/2026" },
    { title: "Schéma des pistes rurales", type: "PDF", size: "3,2 Mo", date: "18/09/2026" },
  ],

  attractions: [
    { name: "La gare de Tchaourou", type: "Mémoire", text: "Un arrêt de la ligne Cotonou — Parakou qui rythme la vie du bourg et des villages alentour.", image: "tchaourou-site", distance: "Centre", duration: "30 min" },
    { name: "La forêt classée", type: "Nature", text: "Un massif boisé qui abrite une biodiversité remarquable et structure les usages des riverains.", image: "tchaourou-paysage", distance: "Périphérie", duration: "Demi-journée" },
    { name: "Le marché de Bétérou", type: "Vie locale", text: "Un rendez-vous commercial où les producteurs écoulent vivriers et coton.", image: "tchaourou-ville", distance: "Bétérou", duration: "1 h" },
    { name: "Les villages de la route", type: "Territoire", text: "Un chapelet de localités agricoles le long de l'axe national.", image: "tchaourou-vie", distance: "10 — 30 km", duration: "En voiture" },
  ],

  history: [
    { year: "XXe s.", title: "Le rail et la route", text: "La ligne ferroviaire puis l'axe Cotonou — Parakou font de Tchaourou un relais de transport." },
    { year: "XXe s.", title: "La forêt classée", text: "Le massif boisé est placé sous protection, encadrant les usages agricoles et forestiers des villages." },
    { year: "Aujourd'hui", title: "Produire sans épuiser", text: "La commune cherche à concilier filière cotonnière, accès à la terre et préservation de la forêt." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Gare ferroviaire", type: "mobility", x: 56, y: 36, note: "Ligne Cotonou — Parakou" },
      { name: "Marché de Bétérou", type: "market", x: 40, y: 54, note: "Commerce agricole" },
      { name: "Forêt classée", type: "nature", x: 26, y: 34, note: "Massif boisé protégé" },
      { name: "Centre de santé", type: "health", x: 58, y: 54, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 44, y: 62, note: "Enseignement secondaire" },
      { name: "Zone cotonnière", type: "nature", x: 68, y: 64, note: "Parcelles et collecte" },
      { name: "Gare routière", type: "mobility", x: 64, y: 30, note: "Départs vers Parakou" },
    ],
  },

  gastronomy: [
    { name: "Igname pilée", text: "Servie avec une sauce d'arachide ou de feuilles, plat des jours de fête." },
    { name: "Tô de maïs", text: "Pâte de maïs accompagnée d'une sauce de tomate ou de gombo." },
    { name: "Wagasi", text: "Fromage peul grillé, proposé sur les marchés et au bord de l'axe." },
  ],

  economy: {
    text: "Le coton, le maïs et l'igname dominent l'agriculture, tandis que le transport et le commerce de marché animent l'économie. Les produits forestiers et l'élevage complètent les revenus. La commune veut améliorer les pistes et la transformation locale.",
    sectors: [
      { name: "Agriculture", share: 42 },
      { name: "Transport et commerce", share: 26 },
      { name: "Élevage et produits forestiers", share: 18 },
      { name: "Artisanat et services", share: 14 },
    ],
  },

  culture: {
    text: "La culture baatonu et les apports des communautés peule et nagot se retrouvent dans les fêtes, la musique et les récits de la forêt. Les veillées et les marchés restent des lieux essentiels de transmission.",
    highlights: ["Culture baatonu", "Fêtes de récolte", "Récits de la forêt", "Musique et danse"],
  },

  youth: {
    text: "Les jeunes sont nombreux à travailler dans la filière cotonnière ou le transport. La commune soutient la formation agricole, la gestion forestière et les initiatives sportives.",
    programs: ["Formation agricole", "Métiers du transport", "Clubs de jeunes", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Tchaourou",
    phone: "+229 22 00 00 00",
    email: "contact@tchaourou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre commune est traversée par ceux qui vont ailleurs. Nous voulons que ce passage laisse aussi quelque chose ici : des emplois, des marchés et une forêt debout.",
    text: "Le mot du maire est un contenu de démonstration. Il articule la fonction de carrefour et la protection du milieu forestier.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment rejoindre la gare ?", a: "La gare est indiquée sur la carte de démonstration ; les horaires réels relèvent de l'exploitant ferroviaire." },
    { q: "Peut-on visiter la forêt classée ?", a: "L'accès est encadré ; la page Tourisme décrit un parcours de démonstration respectueux des règles." },
    { q: "Comment signaler un feu de brousse ?", a: "Le formulaire de signalement permet de localiser le départ de feu et de décrire la situation." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Tchaourou : gare, forêt classée, coton, marché de Bétérou, démarches et projets du Borgou.",
  },
};

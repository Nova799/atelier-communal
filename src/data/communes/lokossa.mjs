export default {
  slug: "lokossa",
  name: "Lokossa",
  nameWithDe: "de Lokossa",
  nameWithA: "à Lokossa",
  department: "Mono",
  region: "Bénin méridional",
  motto: "Sous l'iroko",
  positioning:
    "Préfecture du Mono, Lokossa est une ville de services et de commerce à proximité de la frontière togolaise. Son nom — « sous l'iroko » — dit l'attention portée à l'arbre et à la place publique.",

  identity: {
    primary: "#1f5a4a",
    deep: "#123a2f",
    accent: "#d8a63c",
    soft: "#e4f0ea",
    paper: "#f6f2e6",
    ink: "#121c18",
    motif: "baobab",
  },

  hero: {
    kicker: "Commune de Lokossa · Mono",
    title: "Lokossa,",
    titleAccent: "sous l'iroko, au carrefour du Mono",
    lead: "Une préfecture à taille humaine, des marchés vivants et une agriculture qui irrigue tout le département : Lokossa conjugue administration et proximité.",
    image: "lokossa-ville",
    ctaPrimary: { label: "Découvrir Lokossa", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une préfecture qui reste une ville",
    text: "Lokossa accueille les services du département sans perdre son échelle de ville moyenne. Les quartiers s'organisent autour du marché, de la cathédrale et des axes qui mènent vers le Togo. La commune veut préserver cette proximité tout en améliorant ses équipements.",
    pullquote:
      "Une ville où l'on peut aller à pied au marché et à l'hôpital est une ville qui prend soin de ses habitants.",
    image: "lokossa-site",
    caption: "La cathédrale Saint-Pierre-Claver, repère du centre de Lokossa.",
  },

  stats: [
    { value: "6", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "préfecture du Mono", note: "Siège départemental" },
    { value: "65", label: "villages et quartiers", note: "Maillage territorial" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "urbanisme", "foncier", "marche", "agriculture", "culture", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "cathedrale",
      title: "Cathédrale : un parvis rendu aux piétons",
      category: "Cadre de vie",
      date: "13 novembre 2026",
      dateISO: "2026-11-13",
      excerpt: "Les travaux de démonstration prévoient un revêtement drainant et des bancs à l'ombre des arbres.",
      image: "lokossa-site",
      featured: true,
    },
    {
      id: "marche-lokossa",
      title: "Le marché central améliore ses accès",
      category: "Économie",
      date: "4 novembre 2026",
      dateISO: "2026-11-04",
      excerpt: "Deux entrées piétonnes et une aire de déchargement pour désengorger les allées.",
      image: "lokossa-paysage",
      featured: false,
    },
    {
      id: "iroko",
      title: "Plantation d'irokos sur les places publiques",
      category: "Environnement",
      date: "26 octobre 2026",
      dateISO: "2026-10-26",
      excerpt: "Une campagne de démonstration pour replanter l'arbre qui donne son nom à la ville.",
      image: "lokossa-paysage",
      featured: false,
    },
    {
      id: "frontiere",
      title: "Commerce transfrontalier : un guichet d'information",
      category: "Économie",
      date: "17 octobre 2026",
      dateISO: "2026-10-17",
      excerpt: "Un point d'accueil renseigne les commerçantes sur les formalités et les horaires.",
      image: "benin-marche-femmes",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-lokossa",
      title: "Conseil communal",
      date: "8 décembre 2026",
      dateISO: "2026-12-08",
      time: "10 h",
      place: "Hôtel de ville, Lokossa",
      category: "Institution",
      description: "Budget, voirie et services de proximité : session publique.",
      image: "lokossa-ville",
      free: true,
    },
    {
      id: "foire-mono",
      title: "Foire des produits du Mono",
      date: "18 — 20 décembre 2026",
      dateISO: "2026-12-18",
      time: "09 h — 19 h",
      place: "Place du marché central",
      category: "Économie",
      description: "Huile de palme, maïs, tissus et artisanat des communes du département.",
      image: "lokossa-paysage",
      free: true,
    },
    {
      id: "concert-iroko",
      title: "Concert sous l'iroko",
      date: "16 janvier 2027",
      dateISO: "2027-01-16",
      time: "18 h",
      place: "Place de l'iroko",
      category: "Culture",
      description: "Scène ouverte aux groupes et chorales de la ville.",
      image: "lokossa-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "parvis",
      title: "Réaménagement du parvis de la cathédrale",
      sector: "Cadre de vie",
      status: "En cours",
      progress: 63,
      budget: "340 M FCFA",
      quarter: "Centre-ville",
      description: "Drainage, revêtement, éclairage et plantations d'ombre.",
      image: "lokossa-site",
    },
    {
      id: "marche",
      title: "Modernisation du marché central",
      sector: "Économie",
      status: "En cours",
      progress: 47,
      budget: "610 M FCFA",
      quarter: "Centre-ville",
      description: "Hangars, étals, eau courante et collecte des déchets.",
      image: "lokossa-paysage",
    },
    {
      id: "assainissement",
      title: "Assainissement des quartiers bas",
      sector: "Environnement",
      status: "Étude",
      progress: 19,
      budget: "820 M FCFA",
      quarter: "Quartiers sud",
      description: "Caniveaux, bassins de rétention et sensibilisation des ménages.",
      image: "lokossa-paysage",
    },
    {
      id: "ecole",
      title: "Construction d'une école primaire",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "165 M FCFA",
      quarter: "Quartier Ouèdèmè",
      description: "Six classes, latrines séparées et point d'eau.",
      image: "lokossa-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "5,0",
    operating: "2,9",
    investment: "2,1",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et cadre de vie", value: 0.8, pct: 16 },
      { label: "Marchés et économie", value: 0.7, pct: 14 },
      { label: "Éducation", value: 0.5, pct: 10 },
      { label: "Environnement", value: 0.5, pct: 10 },
      { label: "Action sociale", value: 0.5, pct: 10 },
      { label: "Fonctionnement", value: 2.0, pct: 40 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "LK/2026/006", title: "Travaux du parvis de la cathédrale", type: "Travaux", amount: "196 M FCFA", date: "25/08/2026", status: "Attribué" },
    { ref: "LK/2026/011", title: "Fourniture de hangars pour le marché", type: "Fournitures", amount: "48 M FCFA", date: "09/10/2026", status: "Attribué" },
    { ref: "LK/2026/015", title: "Étude d'assainissement des quartiers bas", type: "Services", amount: "26 M FCFA", date: "02/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "5,9 Mo", date: "12/03/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,1 Mo", date: "29/01/2026" },
    { title: "Plan de gestion des déchets", type: "PDF", size: "2,8 Mo", date: "21/08/2026" },
  ],

  attractions: [
    { name: "La cathédrale Saint-Pierre-Claver", type: "Patrimoine", text: "Un repère architectural et spirituel au cœur de la ville.", image: "lokossa-site", distance: "Centre", duration: "30 min" },
    { name: "Le marché central", type: "Vie locale", text: "Produits frais, huile de palme, tissus et objets du quotidien.", image: "lokossa-paysage", distance: "Centre", duration: "1 h" },
    { name: "Le centre commerçant", type: "Mémoire", text: "Un espace symbolique lié au nom de la ville et aux rencontres publiques.", image: "lokossa-vie", distance: "Centre", duration: "20 min" },
    { name: "Les routes du Mono", type: "Territoire", text: "Les axes qui relient Lokossa aux communes du département et à la frontière.", image: "benin-piste", distance: "Périphérie", duration: "En voiture" },
  ],

  history: [
    { year: "XVIIIe s.", title: "Une fondation familiale", text: "La tradition rapporte la fondation de la ville par Totoh Gnawo et les siens, à l'ombre d'un iroko." },
    { year: "XXe s.", title: "Un centre administratif", text: "Lokossa s'affirme comme siège des services du Mono et comme carrefour commercial." },
    { year: "Aujourd'hui", title: "Proximité et services", text: "La commune cherche à maintenir une ville à taille humaine tout en renforçant ses équipements publics." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 50, y: 44, note: "Accueil et services communaux" },
      { name: "Cathédrale", type: "culture", x: 44, y: 36, note: "Patrimoine religieux" },
      { name: "Marché central", type: "market", x: 56, y: 50, note: "Commerce quotidien" },
      { name: "Centre de santé", type: "health", x: 38, y: 54, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 60, y: 36, note: "Enseignement secondaire" },
      { name: "Place de l'iroko", type: "culture", x: 48, y: 60, note: "Espace public symbolique" },
      { name: "Gare routière", type: "mobility", x: 66, y: 48, note: "Départs vers Cotonou et le Togo" },
      { name: "Zone agricole", type: "nature", x: 28, y: 34, note: "Maïs et palmier" },
    ],
  },

  gastronomy: [
    { name: "Akassa", text: "Pâte de maïs fermentée, servie avec une sauce de poisson ou de tomate." },
    { name: "Huile de palme", text: "Produite dans le Mono, elle parfume les sauces et accompagne le riz." },
    { name: "Poisson fumé", text: "Préparé dans les villages du Mono et vendu sur les marchés de la ville." },
  ],

  economy: {
    text: "Lokossa vit de l'administration, du commerce et de l'agriculture du Mono. Le marché central et les échanges avec le Togo occupent une place importante, tandis que la transformation du palmier et du maïs reste à développer.",
    sectors: [
      { name: "Commerce et services", share: 34 },
      { name: "Agriculture", share: 30 },
      { name: "Administration et emploi public", share: 20 },
      { name: "Transport et artisanat", share: 16 },
    ],
  },

  culture: {
    text: "La ville possède une vie associative dense : chorales, associations de quartier, groupes de danse et clubs sportifs. Les places publiques restent des lieux de rencontre essentiels.",
    highlights: ["Chorales et musique", "Associations de quartier", "Danses traditionnelles", "Sport scolaire"],
  },

  youth: {
    text: "Les jeunes de Lokossa cherchent des formations courtes et des débouchés locaux. La commune soutient l'orientation, le sport et les initiatives portées par les associations.",
    programs: ["Orientation et stages", "Maison des jeunes", "Clubs sportifs", "Appels à projets associatifs"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Lokossa",
    phone: "+229 22 00 00 00",
    email: "contact@lokossa.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "6 arrondissements",
    quartiers: "Villages et quartiers de ville",
  },

  mayor: {
    quote:
      "Notre ville a la chance de rester à taille humaine. Nous devons protéger cette qualité de vie : des rues ombragées, un marché accessible et des services qui n'obligent pas à partir.",
    text: "Le mot du maire est un contenu de démonstration. Il exprime une priorité de proximité, sans nom ni portrait officiel.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Où se procurer un acte de mariage ?", a: "Le guichet de démonstration présente les pièces, les délais et les étapes de la démarche." },
    { q: "Comment traverser vers le Togo ?", a: "La rubrique Contact et la carte indiquent les axes de démonstration ; les formalités réelles relèvent des autorités compétentes." },
    { q: "Comment signaler un problème de voirie ?", a: "Le formulaire de signalement permet de décrire l'emplacement et la nature du problème." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Lokossa : préfecture du Mono, cathédrale, marché, agriculture, démarches et projets.",
  },
};

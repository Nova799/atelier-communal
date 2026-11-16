export default {
  slug: "djougou",
  name: "Djougou",
  nameWithDe: "de Djougou",
  nameWithA: "à Djougou",
  department: "Donga",
  region: "Bénin septentrional",
  motto: "La porte du Nord-Ouest",
  positioning:
    "Préfecture de la Donga, Djougou est un carrefour commercial entre l'Atacora, le Togo et le Burkina Faso. Son grand marché et ses transports en font une ville d'échanges à l'échelle de tout le nord-ouest.",

  identity: {
    primary: "#2f3f6b",
    deep: "#1c2747",
    accent: "#d9a13a",
    soft: "#e6e9f2",
    paper: "#f7f2e5",
    ink: "#141824",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune de Djougou · Donga",
    title: "Djougou,",
    titleAccent: "au carrefour du nord-ouest",
    lead: "Marchés, routes et ateliers : Djougou relie les campagnes de la Donga aux villes du nord et aux frontières voisines.",
    image: "djougou-ville",
    ctaPrimary: { label: "Découvrir Djougou", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une ville de commerce et de routes",
    text: "Djougou s'est développée autour de son marché et de sa position de carrefour. On y vient de tout le nord-ouest pour vendre, acheter, se soigner ou régler une démarche. Cette fonction régionale impose à la commune des équipements à la hauteur de son rôle.",
    pullquote:
      "Une ville carrefour doit d'abord être une ville accueillante : des routes praticables, un marché organisé, des services qui répondent.",
    image: "djougou-site",
    caption: "Le marché de Partago, au cœur des échanges de la commune.",
  },

  stats: [
    { value: "1", label: "préfecture de la Donga", note: "Siège départemental" },
    { value: "1", label: "grand marché régional", note: "Rayonnement nord-ouest" },
    { value: "3", label: "frontières proches", note: "Togo, Burkina, Atacora" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "marche", "taxes", "urbanisme", "foncier", "agriculture", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "marche-djougou",
      title: "Le grand marché se dote d'un plan de circulation",
      category: "Économie",
      date: "13 novembre 2026",
      dateISO: "2026-11-13",
      excerpt: "Files par type de produit, aires de déchargement et accès piéton pour désengorger le centre.",
      image: "djougou-ville",
      featured: true,
    },
    {
      id: "gare",
      title: "Gare routière : un abri pour les voyageurs",
      category: "Mobilité",
      date: "4 novembre 2026",
      dateISO: "2026-11-04",
      excerpt: "Ombrières, bancs et information sur les départs vers Natitingou, Kandi et la frontière.",
      image: "djougou-ville",
      featured: false,
    },
    {
      id: "coton",
      title: "Coton : un appui à la qualité pour les producteurs",
      category: "Agriculture",
      date: "26 octobre 2026",
      dateISO: "2026-10-26",
      excerpt: "Formation au tri et au conditionnement dans trois coopératives de la Donga.",
      image: "djougou-paysage",
      featured: false,
    },
    {
      id: "eau",
      title: "Trois forages pour les quartiers périphériques",
      category: "Eau",
      date: "17 octobre 2026",
      dateISO: "2026-10-17",
      excerpt: "Les travaux de démonstration améliorent l'accès à l'eau potable au nord de la ville.",
      image: "benin-piste",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-djougou",
      title: "Conseil communal",
      date: "10 décembre 2026",
      dateISO: "2026-12-10",
      time: "10 h",
      place: "Hôtel de ville, Djougou",
      category: "Institution",
      description: "Budget, marché et voirie : session ouverte au public.",
      image: "djougou-ville",
      free: true,
    },
    {
      id: "foire-donga",
      title: "Foire commerciale de la Donga",
      date: "17 — 20 décembre 2026",
      dateISO: "2026-12-17",
      time: "09 h — 19 h",
      place: "Esplanade du grand marché",
      category: "Économie",
      description: "Produits agricoles, tissus, artisanat et matériel agricole.",
      image: "djougou-paysage",
      free: true,
    },
    {
      id: "musique",
      title: "Nuit des rythmes du Nord",
      date: "16 janvier 2027",
      dateISO: "2027-01-16",
      time: "20 h",
      place: "Place publique",
      category: "Culture",
      description: "Groupes de danse et musiciens de la Donga et de l'Atacora.",
      image: "benin-egungun",
      free: true,
    },
  ],

  projects: [
    {
      id: "marche",
      title: "Réorganisation du grand marché",
      sector: "Économie",
      status: "En cours",
      progress: 58,
      budget: "1,1 Md FCFA",
      quarter: "Centre-ville",
      description: "Allées, hangars, drainage et aires de stationnement pour les transporteurs.",
      image: "djougou-ville",
    },
    {
      id: "voirie",
      title: "Réhabilitation de deux axes d'entrée de ville",
      sector: "Voirie",
      status: "En cours",
      progress: 42,
      budget: "1,6 Md FCFA",
      quarter: "Entrées nord et ouest",
      description: "Chaussées, caniveaux et éclairage public.",
      image: "benin-piste",
    },
    {
      id: "gare",
      title: "Abri voyageurs de la gare routière",
      sector: "Mobilité",
      status: "En cours",
      progress: 70,
      budget: "260 M FCFA",
      quarter: "Gare routière",
      description: "Ombrières, bancs, sanitaires et information sur les départs.",
      image: "djougou-vie",
    },
    {
      id: "forages",
      title: "Adduction d'eau des quartiers nord",
      sector: "Eau",
      status: "Étude",
      progress: 23,
      budget: "740 M FCFA",
      quarter: "Quartiers périphériques",
      description: "Forages, château d'eau et bornes-fontaines.",
      image: "benin-piste",
    },
  ],

  budget: {
    year: "2026",
    total: "7,8",
    operating: "4,3",
    investment: "3,5",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 1.5, pct: 19 },
      { label: "Marchés et économie", value: 1.2, pct: 15 },
      { label: "Eau et assainissement", value: 0.9, pct: 12 },
      { label: "Éducation", value: 0.7, pct: 9 },
      { label: "Action sociale", value: 0.8, pct: 10 },
      { label: "Fonctionnement", value: 2.7, pct: 35 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "DJ/2026/009", title: "Travaux de réorganisation du grand marché", type: "Travaux", amount: "612 M FCFA", date: "28/08/2026", status: "Attribué" },
    { ref: "DJ/2026/014", title: "Fourniture d'ombrières pour la gare routière", type: "Fournitures", amount: "58 M FCFA", date: "17/10/2026", status: "Attribué" },
    { ref: "DJ/2026/018", title: "Étude d'adduction d'eau des quartiers nord", type: "Services", amount: "34 M FCFA", date: "06/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "6,1 Mo", date: "14/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,4 Mo", date: "02/02/2026" },
    { title: "Schéma d'organisation du marché", type: "PDF", size: "3,4 Mo", date: "19/09/2026" },
  ],

  attractions: [
    { name: "Le grand marché", type: "Économie", text: "Le rendez-vous commercial du nord-ouest, entre produits agricoles, tissus et artisanat.", image: "djougou-vie", distance: "Centre", duration: "1 h 30" },
    { name: "La gare routière", type: "Mobilité", text: "Le point de départ vers Natitingou, Kandi et les frontières voisines.", image: "djougou-ville", distance: "Centre", duration: "30 min" },
    { name: "Les collines de la Donga", type: "Paysage", text: "Des reliefs boisés qui dessinent l'horizon de la commune.", image: "djougou-paysage", distance: "Périphérie", duration: "Demi-journée" },
    { name: "La route de l'Atacora", type: "Territoire", text: "L'axe qui relie Djougou aux montagnes et aux communes de l'ouest.", image: "djougou-paysage", distance: "Sortie ouest", duration: "En voiture" },
  ],

  history: [
    { year: "XIXe s.", title: "Un carrefour de la savane", text: "Djougou se développe comme place de commerce entre les peuples de la plaine et les routes du nord." },
    { year: "XXe s.", title: "Une ville administrative", text: "La ville devient un centre de services pour la Donga et un relais vers les pays voisins." },
    { year: "Aujourd'hui", title: "Organiser l'accueil", text: "La commune cherche à structurer les flux commerciaux et à améliorer ses équipements publics." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Grand marché", type: "market", x: 56, y: 50, note: "Commerce régional" },
      { name: "Gare routière", type: "mobility", x: 66, y: 40, note: "Départs interurbains" },
      { name: "Centre de santé", type: "health", x: 40, y: 36, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 58, y: 62, note: "Enseignement secondaire" },
      { name: "Zone agricole", type: "nature", x: 28, y: 58, note: "Coton et vivriers" },
      { name: "Château d'eau", type: "water", x: 36, y: 66, note: "Adduction publique" },
      { name: "Quartier des artisans", type: "economy", x: 70, y: 56, note: "Ateliers et services" },
    ],
  },

  gastronomy: [
    { name: "Riz au gras", text: "Riz mijoté avec de la viande ou du poisson et des légumes." },
    { name: "Wagasi", text: "Fromage peul grillé, incontournable des marchés du nord." },
    { name: "Tô de maïs", text: "Pâte de maïs accompagnée d'une sauce de feuilles ou d'arachide." },
  ],

  economy: {
    text: "Djougou vit du commerce, du transport et de l'agriculture de la Donga. Le coton, le maïs et l'igname y sont commercialisés, tandis que l'artisanat et les services complètent l'activité. La commune veut mieux organiser le marché et les flux de transport.",
    sectors: [
      { name: "Commerce", share: 34 },
      { name: "Transport et logistique", share: 22 },
      { name: "Agriculture", share: 28 },
      { name: "Artisanat et services", share: 16 },
    ],
  },

  culture: {
    text: "La diversité des communautés de la Donga se lit dans les fêtes, les danses et les langues. La commune souhaite valoriser cette diversité sans la réduire à un spectacle pour visiteurs.",
    highlights: ["Diversité culturelle", "Danses du Nord", "Artisanat", "Marchés"],
  },

  youth: {
    text: "Les jeunes sont attirés par le commerce et le transport, mais manquent souvent de formation. La commune soutient l'orientation, les métiers techniques et les initiatives sportives.",
    programs: ["Orientation professionnelle", "Formation aux métiers du transport", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Djougou",
    phone: "+229 22 00 00 00",
    email: "contact@djougou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre ville accueille chaque semaine des milliers de personnes. Notre responsabilité est que cet accueil se fasse dans des conditions dignes : des marchés propres, des routes sûres, des services clairs.",
    text: "Le mot du maire est un contenu de démonstration. Il relie la fonction régionale de Djougou à la qualité des services publics.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir une place au grand marché ?", a: "La rubrique Démarches décrit la procédure de démonstration et les pièces à fournir." },
    { q: "Quelles destinations depuis la gare routière ?", a: "La carte et la page Mobilité indiquent des destinations de démonstration." },
    { q: "Comment signaler un problème d'eau ?", a: "Le formulaire de signalement permet de décrire le point et la nature du problème." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Djougou : grand marché, carrefour du nord-ouest, Donga, démarches, actualités et projets.",
  },
};

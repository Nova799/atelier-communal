export default {
  slug: "aplahoue",
  name: "Aplahoué",
  nameWithDe: "d'Aplahoué",
  nameWithA: "à Aplahoué",
  department: "Couffo",
  region: "Bénin méridional",
  motto: "Le cœur du Couffo",
  positioning:
    "Préfecture du Couffo, Aplahoué est une commune carrefour où se croisent les productions agricoles du département, les services administratifs et un commerce de marché très actif.",

  identity: {
    primary: "#2f6b3a",
    deep: "#1d4726",
    accent: "#d9a13a",
    soft: "#e6f0e4",
    paper: "#f7f2e4",
    ink: "#141c15",
    motif: "baobab",
  },

  hero: {
    kicker: "Commune d'Aplahoué · Couffo",
    title: "Aplahoué,",
    titleAccent: "au centre du Couffo",
    lead: "Une préfecture agricole, un marché qui rassemble les villages et des routes qui convergent vers Lokossa et Dogbo : Aplahoué est un point de rencontre.",
    image: "aplahoue-ville",
    ctaPrimary: { label: "Découvrir Aplahoué", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une préfecture tournée vers ses villages",
    text: "Aplahoué abrite les services du Couffo tout en restant une commune profondément agricole. Les administrés viennent y chercher un acte, un conseil ou un marché ; la commune doit rendre ces trajets simples et utiles.",
    pullquote:
      "Une préfecture n'est pas un bâtiment : c'est un service qui doit être aussi proche que le village voisin.",
    image: "aplahoue-site",
    caption: "La préfecture du Couffo, au cœur de la ville.",
  },

  stats: [
    { value: "1", label: "préfecture du Couffo", note: "Siège départemental" },
    { value: "7", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "marché central", note: "Rayonnement agricole" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "agriculture", "foncier", "urbanisme", "marche", "economie", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "guichet",
      title: "Un guichet unique pour les démarches d'état civil",
      category: "Services",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Un accueil réorganisé pour réduire l'attente et orienter les usagers dès l'entrée.",
      image: "aplahoue-ville",
      featured: true,
    },
    {
      id: "mais",
      title: "Maïs : une campagne de stockage collective",
      category: "Agriculture",
      date: "3 novembre 2026",
      dateISO: "2026-11-03",
      excerpt: "Trois coopératives mutualisent un magasin et un protocole de conservation.",
      image: "benin-vallee",
      featured: false,
    },
    {
      id: "marche",
      title: "Le marché central réorganise ses entrées",
      category: "Économie",
      date: "25 octobre 2026",
      dateISO: "2026-10-25",
      excerpt: "Une entrée piétonne et une aire de stationnement pour les taxis et les charrettes.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "eau",
      title: "Deux forages pour les écoles rurales",
      category: "Environnement",
      date: "16 octobre 2026",
      dateISO: "2026-10-16",
      excerpt: "Les travaux de démonstration améliorent l'accès à l'eau potable dans deux arrondissements.",
      image: "benin-vallee",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-aplahoue",
      title: "Conseil communal",
      date: "9 décembre 2026",
      dateISO: "2026-12-09",
      time: "10 h",
      place: "Hôtel de ville, Aplahoué",
      category: "Institution",
      description: "Budget, services publics et agriculture : session ouverte au public.",
      image: "aplahoue-ville",
      free: true,
    },
    {
      id: "journee-coop",
      title: "Journée des coopératives",
      date: "13 décembre 2026",
      dateISO: "2026-12-13",
      time: "09 h — 17 h",
      place: "Place du marché",
      category: "Agriculture",
      description: "Rencontres, vente directe et ateliers sur le stockage.",
      image: "benin-terre",
      free: true,
    },
    {
      id: "theatre",
      title: "Théâtre-forum sur les services publics",
      date: "15 janvier 2027",
      dateISO: "2027-01-15",
      time: "17 h",
      place: "Maison des jeunes",
      category: "Culture",
      description: "Une création participative autour de l'accès aux démarches.",
      image: "benin-egungun",
      free: true,
    },
  ],

  projects: [
    {
      id: "guichet",
      title: "Réorganisation du guichet d'état civil",
      sector: "Services",
      status: "En cours",
      progress: 76,
      budget: "145 M FCFA",
      quarter: "Hôtel de ville",
      description: "Accueil, numérotation, signalétique et espace d'attente ombragé.",
      image: "aplahoue-ville",
    },
    {
      id: "magasin",
      title: "Magasin de stockage coopératif",
      sector: "Agriculture",
      status: "En cours",
      progress: 49,
      budget: "230 M FCFA",
      quarter: "Zone agricole",
      description: "Stockage du maïs et du manioc avec ventilation naturelle.",
      image: "benin-marche",
    },
    {
      id: "marche",
      title: "Réhabilitation du marché central",
      sector: "Économie",
      status: "Étude",
      progress: 17,
      budget: "380 M FCFA",
      quarter: "Centre-ville",
      description: "Hangars, drainage et accès pour les charrettes.",
      image: "benin-marche",
    },
    {
      id: "forages",
      title: "Forages pour deux écoles",
      sector: "Eau",
      status: "Livré",
      progress: 100,
      budget: "88 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Deux forages équipés de pompes manuelles et de lavabos.",
      image: "benin-vallee",
    },
  ],

  budget: {
    year: "2026",
    total: "3,7",
    operating: "2,2",
    investment: "1,5",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Services et administration", value: 0.5, pct: 14 },
      { label: "Agriculture et stockage", value: 0.6, pct: 16 },
      { label: "Marchés et économie", value: 0.5, pct: 14 },
      { label: "Eau et environnement", value: 0.3, pct: 8 },
      { label: "Action sociale", value: 0.4, pct: 11 },
      { label: "Fonctionnement", value: 1.4, pct: 37 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "AP/2026/005", title: "Réorganisation du guichet d'état civil", type: "Travaux", amount: "84 M FCFA", date: "22/07/2026", status: "Attribué" },
    { ref: "AP/2026/008", title: "Construction d'un magasin de stockage", type: "Travaux", amount: "138 M FCFA", date: "05/09/2026", status: "Attribué" },
    { ref: "AP/2026/011", title: "Forages équipés pour deux écoles", type: "Travaux", amount: "52 M FCFA", date: "30/09/2026", status: "Attribué" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "5,3 Mo", date: "18/03/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,0 Mo", date: "27/01/2026" },
    { title: "Guide des démarches d'état civil", type: "PDF", size: "1,6 Mo", date: "12/08/2026" },
  ],

  attractions: [
    { name: "Le marché central", type: "Vie locale", text: "Le rendez-vous des producteurs et des commerçantes du Couffo.", image: "benin-marche", distance: "Centre", duration: "1 h" },
    { name: "La place publique", type: "Mémoire", text: "Un espace ombragé autour du monument aux morts, lieu des cérémonies communales.", image: "aplahoue-paysage", distance: "Centre", duration: "30 min" },
    { name: "Les bas-fonds maraîchers", type: "Nature", text: "Des espaces cultivés en saison sèche, au plus près de l'eau.", image: "benin-vallee", distance: "Villages", duration: "30 min" },
    { name: "La route de Lokossa", type: "Paysage", text: "Un axe qui relie la préfecture aux communes voisines et au littoral.", image: "benin-piste", distance: "Sortie sud", duration: "En voiture" },
  ],

  history: [
    { year: "XIXe s.", title: "Un carrefour agricole", text: "Les villages du Couffo développent les cultures vivrières et les échanges autour des marchés." },
    { year: "XXe s.", title: "La préfecture", text: "Aplahoué devient le siège administratif du département et renforce ses services." },
    { year: "Aujourd'hui", title: "Services et coopératives", text: "La commune articule accueil des usagers, stockage agricole et modernisation des marchés." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 42, note: "Services administratifs" },
      { name: "Marché central", type: "market", x: 56, y: 48, note: "Commerce quotidien" },
      { name: "Magasin coopératif", type: "economy", x: 64, y: 36, note: "Stockage agricole" },
      { name: "Centre de santé", type: "health", x: 40, y: 52, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 58, y: 60, note: "Enseignement secondaire" },
      { name: "Zone agricole", type: "nature", x: 72, y: 60, note: "Maïs et manioc" },
      { name: "Bas-fond", type: "water", x: 28, y: 34, note: "Maraîchage" },
      { name: "Gare routière", type: "mobility", x: 52, y: 30, note: "Départs vers Lokossa et Dogbo" },
    ],
  },

  gastronomy: [
    { name: "Pâte de maïs", text: "Servie avec une sauce de tomate, de poisson ou de feuilles." },
    { name: "Igname", text: "Pilée, frite ou bouillie, elle accompagne les repas du Couffo." },
    { name: "Huile de palme", text: "Produite localement, elle donne sa couleur aux sauces de la région." },
  ],

  economy: {
    text: "Aplahoué vit de l'agriculture, du commerce de marché et des services administratifs. Le maïs, le manioc et l'igname dominent, complétés par le palmier et l'élevage. La commune veut professionnaliser le stockage et l'accueil des usagers.",
    sectors: [
      { name: "Agriculture", share: 40 },
      { name: "Commerce et marchés", share: 26 },
      { name: "Administration et services", share: 20 },
      { name: "Transport et artisanat", share: 14 },
    ],
  },

  culture: {
    text: "La vie culturelle s'organise autour des marchés, des fêtes agricoles et des associations de jeunes. Le théâtre et les groupes de danse y occupent une place croissante.",
    highlights: ["Fêtes agricoles", "Théâtre et danse", "Associations de jeunes", "Cuisine du Couffo"],
  },

  youth: {
    text: "Les jeunes sont confrontés au sous-emploi rural et à la migration. Les programmes de démonstration privilégient la formation, l'accès à l'information et les activités culturelles.",
    programs: ["Orientation et formation", "Théâtre-forum", "Clubs de jeunes", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Aplahoué",
    phone: "+229 22 00 00 00",
    email: "contact@aplahoue.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "7 arrondissements",
    quartiers: "Villages et quartiers",
  },

  mayor: {
    quote:
      "Notre préfecture doit être un service, pas un parcours d'obstacles. Chaque démarche simplifiée est un jour gagné pour une famille, un commerçant ou un producteur.",
    text: "Le mot du maire est un contenu de démonstration. Il place la qualité du service public au centre du mandat.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Quels documents pour un acte de naissance ?", a: "La rubrique Démarches détaille les pièces et les étapes de la demande de démonstration." },
    { q: "Comment rejoindre une coopérative de stockage ?", a: "Le service agriculture présente les coopératives et les conditions d'adhésion." },
    { q: "Où se garer près du marché ?", a: "Une aire de stationnement de démonstration est indiquée sur la carte interactive." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Aplahoué : préfecture du Couffo, agriculture, marché, services, démarches et projets.",
  },
};

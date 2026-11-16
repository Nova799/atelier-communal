export default {
  slug: "savalou",
  name: "Savalou",
  nameWithDe: "de Savalou",
  nameWithA: "à Savalou",
  department: "Collines",
  region: "Bénin central",
  motto: "Le royaume, le marché et les collines",
  positioning:
    "Au cœur des Collines, Savalou est une ancienne capitale royale devenue commune agricole et commerçante. Son marché, ses palmeraies et ses reliefs en font un carrefour du centre du Bénin.",

  identity: {
    primary: "#2f6b4f",
    deep: "#1d4733",
    accent: "#c96f3a",
    soft: "#e4f0e7",
    paper: "#f8f2e4",
    ink: "#131d17",
    motif: "baobab",
  },

  hero: {
    kicker: "Commune de Savalou · Collines",
    title: "Savalou,",
    titleAccent: "la mémoire d'un royaume, la force d'un marché",
    lead: "Palmeraies, collines et grands marchés : Savalou porte l'héritage d'une capitale royale et le quotidien d'une commune qui travaille la terre.",
    image: "savalou-ville",
    ctaPrimary: { label: "Découvrir Savalou", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Un royaume devenu commune",
    text: "Savalou ne vit pas seulement de son passé. Les palmeraies, les champs d'igname et les marchés font travailler des milliers de familles. L'héritage royal reste présent dans les récits et les lieux, mais la commune doit d'abord répondre aux besoins de ses villages.",
    pullquote:
      "Un héritage se transmet par des récits, mais il se respecte aussi par des routes, des écoles et des marchés qui fonctionnent.",
    image: "savalou-site",
    caption: "Le site vodun de Dancoli, à Savalou.",
  },

  stats: [
    { value: "1", label: "ancienne capitale royale", note: "Mémoire du royaume" },
    { value: "1", label: "grand marché", note: "Rayonnement régional" },
    { value: "1", label: "zone de palmeraies", note: "Économie agricole" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "agriculture", "marche", "foncier", "urbanisme", "culture", "environnement", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "marche-savalou",
      title: "Le grand marché réorganise ses allées",
      category: "Économie",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Allées élargies, zones de déchargement et accès pompiers pour un marché plus sûr.",
      image: "savalou-ville",
      featured: true,
    },
    {
      id: "palme",
      title: "Huile de palme : une coopérative modernise son pressage",
      category: "Agriculture",
      date: "3 novembre 2026",
      dateISO: "2026-11-03",
      excerpt: "Un équipement de démonstration améliore le rendement et la qualité de l'huile.",
      image: "savalou-paysage",
      featured: false,
    },
    {
      id: "patrimoine-savalou",
      title: "Les lieux de mémoire du royaume documentés",
      category: "Patrimoine",
      date: "24 octobre 2026",
      dateISO: "2026-10-24",
      excerpt: "Un inventaire participatif associe habitants, étudiants et associations culturelles.",
      image: "savalou-site",
      featured: false,
    },
    {
      id: "eau-savalou",
      title: "Deux forages pour les villages des collines",
      category: "Eau",
      date: "15 octobre 2026",
      dateISO: "2026-10-15",
      excerpt: "Les travaux de démonstration réduisent la distance au point d'eau en saison sèche.",
      image: "benin-vallee",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-savalou",
      title: "Conseil communal",
      date: "2 décembre 2026",
      dateISO: "2026-12-02",
      time: "10 h",
      place: "Hôtel de ville, Savalou",
      category: "Institution",
      description: "Budget, agriculture et patrimoine : session ouverte au public.",
      image: "savalou-ville",
      free: true,
    },
    {
      id: "fete-recoltes",
      title: "Fête des récoltes",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "09 h — 18 h",
      place: "Esplanade du marché",
      category: "Culture",
      description: "Igname, huile de palme, danses et récits des villages de la commune.",
      image: "savalou-paysage",
      free: true,
    },
    {
      id: "visite-memoire",
      title: "Visite guidée : mémoire du royaume",
      date: "10 janvier 2027",
      dateISO: "2027-01-10",
      time: "09 h",
      place: "Départ : place du marché",
      category: "Patrimoine",
      description: "Un parcours commenté avec les associations culturelles locales.",
      image: "savalou-site",
      free: false,
    },
  ],

  projects: [
    {
      id: "marche",
      title: "Réorganisation du grand marché",
      sector: "Économie",
      status: "En cours",
      progress: 64,
      budget: "520 M FCFA",
      quarter: "Centre-ville",
      description: "Allées, hangars, drainage et aires de stationnement.",
      image: "savalou-ville",
    },
    {
      id: "huilerie",
      title: "Huilerie coopérative",
      sector: "Agriculture",
      status: "En cours",
      progress: 41,
      budget: "280 M FCFA",
      quarter: "Zone de palmeraies",
      description: "Pressage, filtration et conditionnement de l'huile de palme.",
      image: "savalou-paysage",
    },
    {
      id: "patrimoine",
      title: "Signalétique des lieux de mémoire",
      sector: "Patrimoine",
      status: "Étude",
      progress: 19,
      budget: "95 M FCFA",
      quarter: "Centre historique",
      description: "Panneaux, parcours et documentation respectueuse des usages.",
      image: "savalou-site",
    },
    {
      id: "forages",
      title: "Forages des villages de hauteur",
      sector: "Eau",
      status: "Livré",
      progress: 100,
      budget: "104 M FCFA",
      quarter: "Villages des collines",
      description: "Deux forages équipés et lavoirs communautaires.",
      image: "benin-vallee",
    },
  ],

  budget: {
    year: "2026",
    total: "5,1",
    operating: "3,0",
    investment: "2,1",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Agriculture et palmeraies", value: 0.8, pct: 16 },
      { label: "Marchés et économie", value: 0.7, pct: 14 },
      { label: "Patrimoine et culture", value: 0.4, pct: 8 },
      { label: "Eau et environnement", value: 0.4, pct: 8 },
      { label: "Action sociale", value: 0.6, pct: 12 },
      { label: "Fonctionnement", value: 2.2, pct: 42 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "SV/2026/005", title: "Réorganisation des allées du grand marché", type: "Travaux", amount: "286 M FCFA", date: "20/08/2026", status: "Attribué" },
    { ref: "SV/2026/009", title: "Équipement de l'huilerie coopérative", type: "Fournitures", amount: "112 M FCFA", date: "06/10/2026", status: "Attribué" },
    { ref: "SV/2026/012", title: "Étude de signalétique patrimoniale", type: "Services", amount: "9 M FCFA", date: "28/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "5,5 Mo", date: "15/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,0 Mo", date: "27/01/2026" },
    { title: "Inventaire des lieux de mémoire", type: "PDF", size: "3,9 Mo", date: "05/09/2026" },
  ],

  attractions: [
    { name: "Les collines de Savalou", type: "Nature", text: "Des reliefs boisés qui dominent les palmeraies et offrent des vues sur la commune.", image: "savalou-paysage", distance: "Autour de la ville", duration: "Demi-journée" },
    { name: "Le grand marché", type: "Économie", text: "Igname, huile de palme, tissus et artisanat : le rendez-vous des villages.", image: "savalou-ville", distance: "Centre", duration: "1 h 30" },
    { name: "Les lieux de mémoire du royaume", type: "Mémoire", text: "Des traces discrètes de l'histoire royale, à découvrir avec des guides locaux.", image: "savalou-site", distance: "Centre", duration: "1 h" },
    { name: "Les palmeraies", type: "Territoire", text: "Un paysage productif qui alimente l'huile et les revenus de nombreuses familles.", image: "savalou-vie", distance: "Périphérie", duration: "45 min" },
  ],

  history: [
    { year: "XVIIe — XVIIIe s.", title: "Un royaume des Collines", text: "Savalou s'affirme comme une capitale politique et commerciale de la région." },
    { year: "XXe s.", title: "Marchés et palmeraies", text: "La commune se tourne vers l'agriculture, l'huile de palme et les échanges régionaux." },
    { year: "Aujourd'hui", title: "Transmettre et produire", text: "Savalou cherche à valoriser son patrimoine tout en modernisant ses marchés et ses services." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Grand marché", type: "market", x: 56, y: 50, note: "Commerce régional" },
      { name: "Lieux de mémoire", type: "tourism", x: 40, y: 34, note: "Héritage du royaume" },
      { name: "Huilerie", type: "economy", x: 66, y: 56, note: "Transformation du palmier" },
      { name: "Centre de santé", type: "health", x: 38, y: 52, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 58, y: 62, note: "Enseignement secondaire" },
      { name: "Palmeraies", type: "nature", x: 28, y: 62, note: "Paysage productif" },
      { name: "Gare routière", type: "mobility", x: 68, y: 36, note: "Départs vers Dassa et Parakou" },
    ],
  },

  gastronomy: [
    { name: "Igname pilée", text: "Servie avec une sauce d'arachide ou de feuilles, plat des jours de fête." },
    { name: "Huile de palme", text: "Produite localement, elle colore et parfume les sauces de la commune." },
    { name: "Amiwo", text: "Pâte de maïs à la tomate et au poisson, appréciée des familles." },
  ],

  economy: {
    text: "L'agriculture familiale, les palmeraies et le commerce de marché dominent l'économie. L'igname, le maïs et le manioc complètent les productions, tandis que l'artisanat et le transport apportent des revenus d'appoint. La commune veut moderniser la transformation et les équipements marchands.",
    sectors: [
      { name: "Agriculture", share: 44 },
      { name: "Commerce et marchés", share: 24 },
      { name: "Transformation et artisanat", share: 18 },
      { name: "Transport et services", share: 14 },
    ],
  },

  culture: {
    text: "La mémoire royale, les fêtes de récolte et les associations culturelles rythment la vie de Savalou. Les danses et les récits transmis par les anciens restent au cœur de l'identité communale.",
    highlights: ["Mémoire royale", "Fêtes de récolte", "Danses traditionnelles", "Récits des anciens"],
  },

  youth: {
    text: "Les jeunes sont nombreux à travailler dans l'agriculture ou à migrer vers les villes. La commune soutient la formation, l'entrepreneuriat rural et les activités sportives et culturelles.",
    programs: ["Formation agricole", "Entrepreneuriat rural", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Savalou",
    phone: "+229 22 00 00 00",
    email: "contact@savalou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre histoire royale nous oblige : elle ne doit pas seulement être racontée aux visiteurs, elle doit servir à construire des routes, des écoles et des marchés pour ceux qui vivent ici.",
    text: "Le mot du maire est un contenu de démonstration. Il articule mémoire du royaume et développement des services de proximité.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Peut-on visiter les lieux de mémoire ?", a: "La page Tourisme décrit un parcours de démonstration avec des guides locaux et le respect des usages." },
    { q: "Comment vendre sa production au marché ?", a: "La rubrique Démarches présente les conditions d'attribution d'un étal dans le cadre de la démonstration." },
    { q: "Comment rejoindre une coopérative de palme ?", a: "Le service agriculture présente les groupements et les conditions d'adhésion." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Savalou : mémoire royale, palmeraies, grand marché, collines, démarches et projets.",
  },
};

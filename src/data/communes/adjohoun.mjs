export default {
  slug: "adjohoun",
  name: "Adjohoun",
  nameWithDe: "d'Adjohoun",
  nameWithA: "à Adjohoun",
  department: "Ouémé",
  region: "Bénin méridional",
  motto: "Au fil de l'Ouémé",
  positioning:
    "Dans la plaine de l'Ouémé, Adjohoun est une commune de maraîchage, de pêche et de commerce fluvial. Les crues du fleuve rythment les cultures, les transports et la vie des villages.",

  identity: {
    primary: "#1f6b5a",
    deep: "#124538",
    accent: "#d9a13a",
    soft: "#e2f0eb",
    paper: "#f7f2e3",
    ink: "#121c18",
    motif: "pirogue",
  },

  hero: {
    kicker: "Commune d'Adjohoun · Ouémé",
    title: "Adjohoun,",
    titleAccent: "la plaine, le fleuve et les jardins",
    lead: "Des berges de l'Ouémé aux jardins de décrue, Adjohoun vit d'un fleuve qui nourrit les terres et relie les villages.",
    image: "adjohoun-ville",
    ctaPrimary: { label: "Découvrir Adjohoun", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune au rythme des crues",
    text: "À Adjohoun, le calendrier agricole suit le fleuve. Quand l'eau se retire, les jardins de décrue apparaissent ; quand elle monte, les pirogues deviennent des routes. Cette relation à l'Ouémé est une richesse, mais elle expose aussi les villages aux inondations.",
    pullquote:
      "Le fleuve donne la terre et reprend parfois tout. Vivre ici, c'est apprendre à négocier avec ses humeurs.",
    image: "adjohoun-site",
    caption: "L'Ouémé et les berges cultivées de la commune.",
  },

  stats: [
    { value: "1", label: "fleuve structurant", note: "L'Ouémé" },
    { value: "1", label: "plaine de décrue", note: "Maraîchage" },
    { value: "1", label: "marché central", note: "Rayonnement local" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "agriculture", "marche", "environnement", "foncier", "urbanisme", "economie", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "crue-adjohoun",
      title: "Crue de l'Ouémé : un plan de mise à l'abri",
      category: "Environnement",
      date: "14 novembre 2026",
      dateISO: "2026-11-14",
      excerpt: "Points hauts identifiés, pirogues de secours et information des villages riverains.",
      image: "adjohoun-site",
      featured: true,
    },
    {
      id: "jardins",
      title: "Jardins de décrue : des semences pour la saison sèche",
      category: "Agriculture",
      date: "5 novembre 2026",
      dateISO: "2026-11-05",
      excerpt: "Les groupements de maraîchères reçoivent semences et formation à l'irrigation économe.",
      image: "benin-vallee",
      featured: false,
    },
    {
      id: "marche-adjohoun",
      title: "Le marché central s'ouvre aux produits frais",
      category: "Économie",
      date: "27 octobre 2026",
      dateISO: "2026-10-27",
      excerpt: "Un hangar et un point d'eau protègent les légumes et le poisson.",
      image: "adjohoun-ville",
      featured: false,
    },
    {
      id: "ecole-adjohoun",
      title: "Une école de la plaine surélevée",
      category: "Éducation",
      date: "18 octobre 2026",
      dateISO: "2026-10-18",
      excerpt: "Les travaux de démonstration mettent les classes hors d'eau en période de crue.",
      image: "adjohoun-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-adjohoun",
      title: "Conseil communal",
      date: "3 décembre 2026",
      dateISO: "2026-12-03",
      time: "10 h",
      place: "Hôtel de ville, Adjohoun",
      category: "Institution",
      description: "Budget, crue et maraîchage : session ouverte au public.",
      image: "adjohoun-ville",
      free: true,
    },
    {
      id: "fete-eau",
      title: "Fête de l'Ouémé",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "Toute la journée",
      place: "Embarcadère, Adjohoun",
      category: "Culture",
      description: "Courses de pirogues, chants de pêcheurs et repas de poisson.",
      image: "adjohoun-site",
      free: true,
    },
    {
      id: "foire-maraichere",
      title: "Foire aux légumes de décrue",
      date: "16 janvier 2027",
      dateISO: "2027-01-16",
      time: "08 h — 17 h",
      place: "Esplanade du marché",
      category: "Agriculture",
      description: "Vente directe, ateliers de compostage et rencontres entre productrices.",
      image: "adjohoun-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "digue",
      title: "Protection des villages bas",
      sector: "Environnement",
      status: "En cours",
      progress: 49,
      budget: "620 M FCFA",
      quarter: "Berges de l'Ouémé",
      description: "Digues légères, plantations et zones de refuge pour les crues.",
      image: "adjohoun-site",
    },
    {
      id: "embarcadere",
      title: "Réaménagement de l'embarcadère",
      sector: "Mobilité",
      status: "En cours",
      progress: 67,
      budget: "280 M FCFA",
      quarter: "Berge principale",
      description: "Ponton, abri, gilets et accès sécurisé pour les pirogues.",
      image: "adjohoun-site",
    },
    {
      id: "marche",
      title: "Halle des produits frais",
      sector: "Économie",
      status: "Étude",
      progress: 23,
      budget: "240 M FCFA",
      quarter: "Centre",
      description: "Hangar, étals lavables et point d'eau pour les légumes et le poisson.",
      image: "benin-marche",
    },
    {
      id: "ecole",
      title: "École surélevée de la plaine",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "142 M FCFA",
      quarter: "Village riverain",
      description: "Classes surélevées, latrines et forage.",
      image: "adjohoun-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "4,5",
    operating: "2,7",
    investment: "1,8",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Environnement et crues", value: 0.6, pct: 13 },
      { label: "Agriculture et maraîchage", value: 0.6, pct: 13 },
      { label: "Marchés et économie", value: 0.5, pct: 11 },
      { label: "Éducation", value: 0.4, pct: 9 },
      { label: "Action sociale", value: 0.5, pct: 11 },
      { label: "Fonctionnement", value: 1.9, pct: 43 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "AD/2026/005", title: "Protection des berges et zones de refuge", type: "Travaux", amount: "342 M FCFA", date: "19/08/2026", status: "Attribué" },
    { ref: "AD/2026/009", title: "Fourniture de semences maraîchères", type: "Fournitures", amount: "36 M FCFA", date: "03/10/2026", status: "Attribué" },
    { ref: "AD/2026/012", title: "Étude de la halle aux produits frais", type: "Services", amount: "13 M FCFA", date: "25/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de gestion des crues", type: "PDF", size: "5,8 Mo", date: "10/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,9 Mo", date: "27/01/2026" },
    { title: "Guide du maraîchage de décrue", type: "PDF", size: "2,9 Mo", date: "14/09/2026" },
  ],

  attractions: [
    { name: "L'Ouémé", type: "Nature", text: "Un fleuve qui structure les cultures, les transports et la vie des villages.", image: "adjohoun-site", distance: "Berges", duration: "Libre" },
    { name: "Les jardins de décrue", type: "Paysage", text: "Des parcelles maraîchères qui apparaissent quand l'eau se retire.", image: "benin-vallee", distance: "Plaine", duration: "1 h" },
    { name: "Le marché central", type: "Vie locale", text: "Légumes, poisson fumé et produits du fleuve au quotidien.", image: "benin-marche", distance: "Centre", duration: "45 min" },
    { name: "Les villages riverains", type: "Territoire", text: "Un chapelet de localités reliées par l'eau et les pistes.", image: "adjohoun-vie", distance: "10 — 20 km", duration: "En pirogue" },
  ],

  history: [
    { year: "XIXe s.", title: "Vivre avec le fleuve", text: "Les communautés de la plaine développent pêche, agriculture de décrue et échanges fluviaux." },
    { year: "XXe s.", title: "Maraîchage et marchés", text: "Les jardins de décrue et les marchés structurent l'économie locale." },
    { year: "Aujourd'hui", title: "S'adapter aux crues", text: "La commune cherche à protéger les villages et à sécuriser les revenus agricoles face aux inondations." },
  ],

  map: {
    terrain: "lagoon",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Marché central", type: "market", x: 56, y: 50, note: "Produits frais et poisson" },
      { name: "Embarcadère", type: "mobility", x: 40, y: 68, note: "Pirogues et transport fluvial" },
      { name: "Jardins de décrue", type: "nature", x: 30, y: 58, note: "Maraîchage de saison sèche" },
      { name: "Centre de santé", type: "health", x: 38, y: 36, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 60, y: 60, note: "Enseignement secondaire" },
      { name: "Berges de l'Ouémé", type: "water", x: 26, y: 78, note: "Fleuve et crues" },
      { name: "Zone de refuge", type: "environment", x: 66, y: 32, note: "Point haut en cas de crue" },
    ],
  },

  gastronomy: [
    { name: "Poisson braisé", text: "Grillé au feu de bois, servi avec de l'attiéké ou du riz." },
    { name: "Légumes de décrue", text: "Tomates, gombos et feuilles cultivés dans la plaine et cuisinés en sauce." },
    { name: "Akassa", text: "Pâte de maïs fermentée, servie avec une sauce de poisson ou de tomate." },
  ],

  economy: {
    text: "Le maraîchage de décrue, la pêche et le commerce de marché dominent l'économie. Le maïs et le manioc complètent les productions, tandis que le transport fluvial et l'artisanat apportent des revenus d'appoint. La commune veut sécuriser les cultures face aux crues et améliorer les équipements marchands.",
    sectors: [
      { name: "Maraîchage", share: 36 },
      { name: "Pêche et transformation", share: 24 },
      { name: "Commerce et transport", share: 24 },
      { name: "Artisanat et services", share: 16 },
    ],
  },

  culture: {
    text: "Les chants de pêcheurs, les fêtes de l'eau et les récits des villages riverains rythment la vie culturelle. Les groupements de femmes occupent une place centrale dans la transformation et la vente des produits.",
    highlights: ["Chants de pêcheurs", "Fêtes de l'eau", "Groupements de femmes", "Récits du fleuve"],
  },

  youth: {
    text: "Les jeunes sont partagés entre le maraîchage, la pêche et la migration vers Cotonou. La commune soutient la formation aux métiers de l'eau, l'entrepreneuriat agricole et les activités sportives.",
    programs: ["Formation maraîchère", "Métiers de l'eau", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Adjohoun",
    phone: "+229 22 00 00 00",
    email: "contact@adjohoun.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre richesse pousse dans la plaine quand l'eau se retire. Notre devoir est de protéger ceux qui la cultivent et de leur garantir un marché accessible.",
    text: "Le mot du maire est un contenu de démonstration. Il relie le cycle des crues à la sécurité des revenus agricoles.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment vendre ses légumes au marché ?", a: "La rubrique Démarches présente les conditions d'attribution d'un étal dans le cadre de la démonstration." },
    { q: "Que faire en période de crue ?", a: "La page Environnement décrit les consignes et les zones de refuge de démonstration ; les consignes réelles relèvent des autorités." },
    { q: "Comment réserver une pirogue ?", a: "Les prestataires de démonstration sont listés dans la rubrique Tourisme." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Adjohoun : Ouémé, maraîchage de décrue, pêche, marché, démarches et projets.",
  },
};

export default {
  slug: "dassa",
  name: "Dassa-Zoumè",
  nameWithDe: "de Dassa-Zoumè",
  nameWithA: "à Dassa-Zoumè",
  department: "Collines",
  region: "Bénin central",
  motto: "Entre les collines",
  positioning:
    "Préfecture des Collines, Dassa-Zoumè est connue pour ses reliefs, ses grottes et son sanctuaire marial. La ville, étape ferroviaire entre Cotonou et Parakou, conjugue pèlerinage, agriculture et commerce.",

  identity: {
    primary: "#5f4a7a",
    deep: "#3f3057",
    accent: "#d4a23f",
    soft: "#ece6f2",
    paper: "#f8f2e6",
    ink: "#1a1522",
    motif: "mountains",
  },

  hero: {
    kicker: "Commune de Dassa-Zoumè · Collines",
    title: "Dassa-Zoumè,",
    titleAccent: "la ville qui monte vers les collines",
    lead: "Des reliefs de roche et de verdure, des grottes, un sanctuaire et une gare : Dassa-Zoumè est une étape où le paysage devient récit.",
    image: "dassa-ville",
    ctaPrimary: { label: "Découvrir Dassa", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer sa visite", href: "#tourisme" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une préfecture au relief habité",
    text: "Les collines de Dassa ne sont pas un simple décor : elles abritent des grottes, des pratiques spirituelles et des quartiers construits sur les pentes. Le pèlerinage marial d'Arigbo attire des visiteurs de tout le pays, tandis que la gare et les marchés maintiennent la ville dans les échanges régionaux.",
    pullquote:
      "Ici, la pente se traverse à pied, la grotte se respecte et la ville se construit avec le relief plutôt que contre lui.",
    image: "dassa-site",
    caption: "Le sanctuaire d'Arigbo, adossé aux collines.",
  },

  stats: [
    { value: "1", label: "préfecture des Collines", note: "Siège départemental" },
    { value: "1", label: "sanctuaire marial", note: "Arigbo" },
    { value: "1", label: "gare ferroviaire", note: "Ligne Cotonou — Parakou" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "tourisme", "culture", "marche", "urbanisme", "environnement", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "peleringe",
      title: "Pèlerinage d'Arigbo : un plan d'accueil et de circulation",
      category: "Patrimoine",
      date: "11 novembre 2026",
      dateISO: "2026-11-11",
      excerpt: "Parking, navettes et points d'eau sont organisés pour accueillir les visiteurs dans de bonnes conditions.",
      image: "dassa-site",
      featured: true,
    },
    {
      id: "grottes",
      title: "Grottes de Dassa : une campagne de préservation",
      category: "Environnement",
      date: "2 novembre 2026",
      dateISO: "2026-11-02",
      excerpt: "Nettoyage, signalétique et sensibilisation des visiteurs au respect des lieux.",
      image: "dassa-paysage",
      featured: false,
    },
    {
      id: "gare-dassa",
      title: "La gare retrouve un parvis ombragé",
      category: "Mobilité",
      date: "23 octobre 2026",
      dateISO: "2026-10-23",
      excerpt: "Des arbres et des bancs sont plantés devant la gare pour les voyageurs.",
      image: "dassa-ville",
      featured: false,
    },
    {
      id: "marche-dassa",
      title: "Le marché central améliore le drainage de ses allées",
      category: "Économie",
      date: "14 octobre 2026",
      dateISO: "2026-10-14",
      excerpt: "Caniveaux et revêtement pour limiter la boue en saison des pluies.",
      image: "dassa-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-dassa",
      title: "Conseil communal",
      date: "3 décembre 2026",
      dateISO: "2026-12-03",
      time: "10 h",
      place: "Hôtel de ville, Dassa-Zoumè",
      category: "Institution",
      description: "Budget, patrimoine et voirie : session ouverte au public.",
      image: "dassa-ville",
      free: true,
    },
    {
      id: "randonnee-collines",
      title: "Randonnée des collines",
      date: "13 décembre 2026",
      dateISO: "2026-12-13",
      time: "07 h",
      place: "Départ : place du marché",
      category: "Nature",
      description: "Parcours guidé avec lecture du paysage et pause chez un producteur.",
      image: "dassa-paysage",
      free: false,
    },
    {
      id: "veillee-arigbo",
      title: "Veillée d'Arigbo",
      date: "8 janvier 2027",
      dateISO: "2027-01-08",
      time: "19 h",
      place: "Sanctuaire d'Arigbo",
      category: "Patrimoine",
      description: "Moment de recueillement et de chant dans le cadre de la démonstration.",
      image: "dassa-site",
      free: true,
    },
  ],

  projects: [
    {
      id: "grottes",
      title: "Mise en valeur des grottes",
      sector: "Patrimoine",
      status: "En cours",
      progress: 43,
      budget: "260 M FCFA",
      quarter: "Collines",
      description: "Sentiers, garde-corps et panneaux respectueux des usages spirituels.",
      image: "dassa-paysage",
    },
    {
      id: "parvis",
      title: "Parvis de la gare et cheminements piétons",
      sector: "Mobilité",
      status: "En cours",
      progress: 69,
      budget: "310 M FCFA",
      quarter: "Quartier de la gare",
      description: "Revêtement, ombrage, éclairage et accès sécurisé.",
      image: "dassa-ville",
    },
    {
      id: "marche",
      title: "Drainage du marché central",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "220 M FCFA",
      quarter: "Centre-ville",
      description: "Caniveaux, revêtement des allées et point d'eau.",
      image: "dassa-vie",
    },
    {
      id: "accueil",
      title: "Maison d'accueil des pèlerins",
      sector: "Tourisme",
      status: "Étude",
      progress: 16,
      budget: "180 M FCFA",
      quarter: "Arigbo",
      description: "Hébergement simple, sanitaires et information sur le site.",
      image: "dassa-site",
    },
  ],

  budget: {
    year: "2026",
    total: "4,6",
    operating: "2,8",
    investment: "1,8",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine et tourisme", value: 0.6, pct: 13 },
      { label: "Voirie et mobilité", value: 0.6, pct: 13 },
      { label: "Marchés et économie", value: 0.5, pct: 11 },
      { label: "Environnement", value: 0.4, pct: 9 },
      { label: "Action sociale", value: 0.5, pct: 11 },
      { label: "Fonctionnement", value: 2.0, pct: 43 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "DZ/2026/004", title: "Aménagement des sentiers des grottes", type: "Travaux", amount: "148 M FCFA", date: "18/07/2026", status: "Attribué" },
    { ref: "DZ/2026/008", title: "Travaux de drainage du marché", type: "Travaux", amount: "132 M FCFA", date: "04/09/2026", status: "Attribué" },
    { ref: "DZ/2026/012", title: "Étude de la maison d'accueil", type: "Services", amount: "11 M FCFA", date: "27/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Schéma de valorisation du patrimoine", type: "PDF", size: "4,7 Mo", date: "23/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,0 Mo", date: "30/01/2026" },
    { title: "Plan d'accueil des visiteurs d'Arigbo", type: "PDF", size: "2,5 Mo", date: "28/08/2026" },
  ],

  attractions: [
    { name: "Les collines de Dassa", type: "Nature", text: "Des reliefs rocheux couverts de végétation qui offrent des points de vue sur la ville.", image: "dassa-paysage", distance: "Autour de la ville", duration: "Demi-journée" },
    { name: "Les grottes", type: "Mémoire", text: "Des cavités chargées d'histoire et de spiritualité, à visiter dans le respect des usages.", image: "dassa-site", distance: "Collines", duration: "1 h" },
    { name: "Le sanctuaire d'Arigbo", type: "Patrimoine", text: "Un lieu de pèlerinage marial qui accueille des visiteurs de tout le pays.", image: "dassa-ville", distance: "Arigbo", duration: "45 min" },
    { name: "Le marché central", type: "Vie locale", text: "Produits agricoles, tissus et artisanat au pied des collines.", image: "dassa-vie", distance: "Centre", duration: "1 h" },
  ],

  history: [
    { year: "XVIIIe s.", title: "Le pays idaasha", text: "La région de Dassa s'organise autour des communautés idaasha et de leurs chefferies." },
    { year: "XXe s.", title: "Le rail et le pèlerinage", text: "La ligne ferroviaire relie la ville au reste du pays, tandis que le sanctuaire d'Arigbo prend son essor." },
    { year: "2016", title: "Préfecture des Collines", text: "Dassa-Zoumè devient le siège du nouveau département des Collines." },
  ],

  map: {
    terrain: "mountain",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Sanctuaire d'Arigbo", type: "tourism", x: 38, y: 34, note: "Lieu de pèlerinage" },
      { name: "Grottes", type: "tourism", x: 30, y: 52, note: "Site naturel et spirituel" },
      { name: "Gare ferroviaire", type: "mobility", x: 60, y: 38, note: "Ligne Cotonou — Parakou" },
      { name: "Marché central", type: "market", x: 54, y: 54, note: "Commerce quotidien" },
      { name: "Centre de santé", type: "health", x: 44, y: 60, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 62, y: 58, note: "Enseignement secondaire" },
      { name: "Belvédère", type: "nature", x: 24, y: 28, note: "Point de vue sur les collines" },
    ],
  },

  gastronomy: [
    { name: "Igname pilée", text: "Servie avec une sauce d'arachide ou de feuilles, plat des jours de fête." },
    { name: "Amiwo", text: "Pâte de maïs à la tomate et au poisson, appréciée sur les marchés." },
    { name: "Wagasi", text: "Fromage peul grillé, proposé sur les routes et les marchés." },
  ],

  economy: {
    text: "L'agriculture, le commerce et le pèlerinage structurent l'économie locale. Le maïs, l'igname et le manioc dominent les cultures, tandis que l'accueil des visiteurs fait vivre l'hôtellerie, la restauration et l'artisanat. La commune veut professionnaliser cette économie du patrimoine.",
    sectors: [
      { name: "Agriculture", share: 38 },
      { name: "Commerce et services", share: 26 },
      { name: "Tourisme et patrimoine", share: 22 },
      { name: "Transport et artisanat", share: 14 },
    ],
  },

  culture: {
    text: "La spiritualité, les récits idaasha et les fêtes religieuses donnent à Dassa une atmosphère particulière. La commune souhaite valoriser ce patrimoine sans transformer les lieux de culte en simples attractions.",
    highlights: ["Pèlerinage d'Arigbo", "Récits idaasha", "Grottes et collines", "Fêtes religieuses"],
  },

  youth: {
    text: "Les jeunes travaillent dans l'agriculture, le commerce ou les services liés au pèlerinage. La commune soutient la formation aux métiers du tourisme, l'orientation et les activités sportives.",
    programs: ["Métiers du tourisme", "Orientation scolaire", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Dassa-Zoumè",
    phone: "+229 22 00 00 00",
    email: "contact@dassa.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Nos collines attirent des visiteurs, mais elles sont d'abord un lieu de vie et de prière. Notre projet est d'accueillir sans dénaturer.",
    text: "Le mot du maire est un contenu de démonstration. Il rappelle que le patrimoine de Dassa est habité et ne peut être traité comme un simple décor.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment visiter les grottes ?", a: "L'accès se fait avec un guide local ; la page Tourisme décrit un parcours de démonstration." },
    { q: "Quand se déroule le pèlerinage ?", a: "Le calendrier réel relève du sanctuaire ; la page Événements donne un exemple de démonstration." },
    { q: "Où stationner près de la gare ?", a: "Une aire de stationnement de démonstration est indiquée sur la carte interactive." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Dassa-Zoumè : collines, grottes, sanctuaire d'Arigbo, gare, démarches et projets des Collines.",
  },
};

export default {
  slug: "dogbo",
  name: "Dogbo",
  nameWithDe: "de Dogbo",
  nameWithA: "à Dogbo",
  department: "Couffo",
  region: "Bénin méridional",
  motto: "Le grenier et la mémoire",
  positioning:
    "Au cœur du Couffo, Dogbo est une commune agricole connue pour ses greniers à igname et son site des hommes à queue. Ses marchés irriguent les villages alentour et approvisionnent les villes du sud.",

  identity: {
    primary: "#7a5a22",
    deep: "#54400f",
    accent: "#c96f3a",
    soft: "#f1e9d5",
    paper: "#faf3e2",
    ink: "#1f1a10",
    motif: "pyramid",
  },

  hero: {
    kicker: "Commune de Dogbo · Couffo",
    title: "Dogbo,",
    titleAccent: "le grenier et la mémoire",
    lead: "Igname, maïs, manioc et palme : Dogbo travaille une terre généreuse, autour d'un site qui veille sur les récits et accueille les visiteurs.",
    image: "dogbo-ville",
    ctaPrimary: { label: "Découvrir Dogbo", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune de greniers",
    text: "Les greniers de Dogbo ne sont pas un décor : ils stockent l'igname et le maïs qui nourrissent les familles et alimentent les marchés. La commune cherche à améliorer le stockage, la transformation et les pistes qui relient les villages.",
    pullquote:
      "Un grenier bien rempli ne suffit pas : il faut aussi une route pour le rejoindre et un marché pour le vendre.",
    image: "dogbo-site",
    caption: "L'accueil du site des hommes à queue, en terre et chaume.",
  },

  stats: [
    { value: "7", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "site mémoriel", note: "Site des hommes à queue" },
    { value: "1", label: "marché central", note: "Rayonnement agricole" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["agriculture", "marche", "acte-naissance", "foncier", "environnement", "economie", "culture", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "igname",
      title: "Igname : un programme de stockage pour les coopératives",
      category: "Agriculture",
      date: "9 novembre 2026",
      dateISO: "2026-11-09",
      excerpt: "Construction de deux greniers améliorés et formation à la conservation.",
      image: "benin-terre",
      featured: true,
    },
    {
      id: "tota",
      title: "Site des hommes à queue : un parcours guidé pour les visiteurs",
      category: "Tourisme",
      date: "31 octobre 2026",
      dateISO: "2026-10-31",
      excerpt: "Un aménagement léger de démonstration, respectueux du site et des usages locaux.",
      image: "dogbo-site",
      featured: false,
    },
    {
      id: "marche",
      title: "Le marché de Dogbo couvre ses allées",
      category: "Économie",
      date: "20 octobre 2026",
      dateISO: "2026-10-20",
      excerpt: "Deux hangars supplémentaires protègent les produits frais et les étals de tissus.",
      image: "dogbo-ville",
      featured: false,
    },
    {
      id: "piste",
      title: "Une piste agricole relie trois villages",
      category: "Voirie",
      date: "11 octobre 2026",
      dateISO: "2026-10-11",
      excerpt: "Les travaux de démonstration facilitent l'accès des camions aux zones de production.",
      image: "benin-piste",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-dogbo",
      title: "Conseil communal",
      date: "7 décembre 2026",
      dateISO: "2026-12-07",
      time: "10 h",
      place: "Hôtel de ville, Dogbo",
      category: "Institution",
      description: "Budget, agriculture et pistes rurales : session publique.",
      image: "dogbo-ville",
      free: true,
    },
    {
      id: "fete-igname",
      title: "Fête de l'igname",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "Toute la journée",
      place: "Esplanade du marché",
      category: "Culture",
      description: "Exposition des variétés, concours culinaires et musique.",
      image: "benin-marche",
      free: true,
    },
    {
      id: "montee-tota",
      title: "Visite guidée du site des hommes à queue",
      date: "10 janvier 2027",
      dateISO: "2027-01-10",
      time: "07 h",
      place: "Départ : place du village",
      category: "Culture",
      description: "Parcours accompagné par des guides locaux, entre galeries et récits.",
      image: "dogbo-site",
      free: false,
    },
  ],

  projects: [
    {
      id: "greniers",
      title: "Greniers améliorés pour l'igname",
      sector: "Agriculture",
      status: "En cours",
      progress: 68,
      budget: "190 M FCFA",
      quarter: "Coopératives villageoises",
      description: "Deux greniers ventilés et un protocole de conservation partagé.",
      image: "benin-terre",
    },
    {
      id: "pistes",
      title: "Réhabilitation de pistes agricoles",
      sector: "Voirie",
      status: "En cours",
      progress: 45,
      budget: "520 M FCFA",
      quarter: "Nord de la commune",
      description: "Empierrement, busage et entretien des accotements.",
      image: "benin-piste",
    },
    {
      id: "tota",
      title: "Aménagement du parcours du site",
      sector: "Tourisme",
      status: "Étude",
      progress: 21,
      budget: "85 M FCFA",
      quarter: "Site des hommes à queue",
      description: "Balises, marches et panneaux de lecture du site.",
      image: "dogbo-site",
    },
    {
      id: "ecole",
      title: "Extension du campus agricole de Dogbo",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "175 M FCFA",
      quarter: "Centre",
      description: "Salles de cours et bloc sanitaire pour les filières agricoles.",
      image: "dogbo-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "3,9",
    operating: "2,3",
    investment: "1,6",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Agriculture et stockage", value: 0.7, pct: 18 },
      { label: "Voirie et pistes", value: 0.6, pct: 15 },
      { label: "Éducation", value: 0.4, pct: 10 },
      { label: "Marchés et économie", value: 0.4, pct: 10 },
      { label: "Action sociale", value: 0.4, pct: 10 },
      { label: "Fonctionnement", value: 1.4, pct: 37 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "DG/2026/004", title: "Construction de greniers améliorés", type: "Travaux", amount: "112 M FCFA", date: "19/07/2026", status: "Attribué" },
    { ref: "DG/2026/009", title: "Réhabilitation de pistes agricoles", type: "Travaux", amount: "288 M FCFA", date: "11/09/2026", status: "Attribué" },
    { ref: "DG/2026/012", title: "Étude du parcours du site", type: "Services", amount: "9 M FCFA", date: "24/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Schéma de développement agricole", type: "PDF", size: "4,4 Mo", date: "20/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,9 Mo", date: "30/01/2026" },
    { title: "Plan de gestion des greniers", type: "PDF", size: "1,8 Mo", date: "15/09/2026" },
  ],

  attractions: [
    { name: "Le site des hommes à queue", type: "Mémoire", text: "Un réseau de galeries et de récits, à découvrir accompagné d'un guide local.", image: "dogbo-site", distance: "Tota", duration: "2 h" },
    { name: "Le marché central", type: "Économie", text: "Igname, maïs, manioc et tissus : le grand rendez-vous des producteurs.", image: "benin-marche", distance: "Centre", duration: "1 h" },
    { name: "Les greniers à igname", type: "Agriculture", text: "Des architectures utilitaires qui racontent l'économie et l'alimentation locales.", image: "dogbo-ville", distance: "Villages", duration: "45 min" },
    { name: "La galerie souterraine", type: "Mémoire", text: "Piliers et passages aménagés sous le site, à parcourir avec un guide.", image: "dogbo-paysage", distance: "Sous le site", duration: "45 min" },
  ],

  history: [
    { year: "XIXe s.", title: "Un pays de greniers", text: "Les villages du Couffo développent la culture de l'igname et des systèmes de stockage familiaux." },
    { year: "XXe s.", title: "Marchés et coopératives", text: "Les échanges agricoles se structurent autour des marchés et des groupements de producteurs." },
    { year: "Aujourd'hui", title: "Transformer sur place", text: "La commune cherche à réduire les pertes de récolte et à créer de la valeur locale." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Accueil et services communaux" },
      { name: "Marché central", type: "market", x: 54, y: 38, note: "Commerce agricole" },
      { name: "Site des hommes à queue", type: "tourism", x: 34, y: 58, note: "Site mémoriel" },
      { name: "Grenier coopératif", type: "economy", x: 62, y: 52, note: "Stockage de l'igname" },
      { name: "Centre de santé", type: "health", x: 42, y: 34, note: "Soins de proximité" },
      { name: "Collège", type: "education", x: 58, y: 62, note: "Enseignement secondaire" },
      { name: "Zone agricole", type: "nature", x: 70, y: 30, note: "Igname et maïs" },
      { name: "Bas-fond", type: "water", x: 26, y: 42, note: "Maraîchage et eau" },
    ],
  },

  gastronomy: [
    { name: "Igname pilée", text: "La spécialité du Couffo, servie avec une sauce d'arachide ou de tomate." },
    { name: "Igname frite", text: "Frites dorées, vendues sur les marchés et accompagnées de piment." },
    { name: "Sauce de feuilles", text: "Feuilles locales mijotées avec de l'huile de palme et du poisson." },
  ],

  economy: {
    text: "L'igname, le maïs et le manioc dominent les cultures, complétées par le palmier à huile et l'élevage. Le commerce de marché et la transformation artisanale restent les principaux débouchés. La commune veut structurer le stockage et l'accès aux marchés urbains.",
    sectors: [
      { name: "Agriculture", share: 52 },
      { name: "Transformation et artisanat", share: 18 },
      { name: "Commerce", share: 18 },
      { name: "Transport et services", share: 12 },
    ],
  },

  culture: {
    text: "La fête de l'igname, les danses de récolte et les récits du site des hommes à queue structurent la vie culturelle. Les groupements de femmes assurent une large part de la transformation et de la vente.",
    highlights: ["Fête de l'igname", "Danses de récolte", "Récits du site", "Groupements de femmes"],
  },

  youth: {
    text: "Les jeunes sont nombreux à travailler la terre ou à chercher un emploi saisonnier. Les programmes de démonstration soutiennent la formation agricole et l'entrepreneuriat de transformation.",
    programs: ["Formation agricole", "Entrepreneuriat rural", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Dogbo",
    phone: "+229 22 00 00 00",
    email: "contact@dogbo.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "7 arrondissements",
    quartiers: "Villages et quartiers",
  },

  mayor: {
    quote:
      "Notre richesse est dans nos greniers et dans nos bras. Notre travail est de faire en sorte que le produit du champ reste dans la commune assez longtemps pour y créer de la valeur.",
    text: "Le mot du maire est un contenu de démonstration. Il met en avant la transformation locale et le stockage.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment rejoindre une coopérative ?", a: "La rubrique Démarches présente les groupements et les pièces nécessaires dans le cadre de la démonstration." },
    { q: "Le site des hommes à queue est-il accessible ?", a: "L'accès se fait avec un guide local ; la page Tourisme décrit un parcours de démonstration." },
    { q: "Où vendre sa récolte ?", a: "Le marché central et les coopératives sont les principaux points de collecte de démonstration." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Dogbo : igname, greniers, site des hommes à queue, marché, démarches et projets du Couffo.",
  },
};

export default {
  slug: "allada",
  name: "Allada",
  nameWithDe: "d'Allada",
  nameWithA: "à Allada",
  department: "Atlantique",
  region: "Bénin méridional",
  motto: "Le berceau des royaumes",
  positioning:
    "Ancienne capitale d'un royaume qui a marqué l'histoire du sud du Bénin, Allada est aujourd'hui une commune agricole et commerçante, à la charnière entre Cotonou, Ouidah et les terres du Zou.",

  identity: {
    primary: "#5b3a7e",
    deep: "#3c2557",
    accent: "#d4a338",
    soft: "#efe8f4",
    paper: "#faf4e7",
    ink: "#1b1520",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune d'Allada · Atlantique",
    title: "Allada,",
    titleAccent: "la mémoire d'un royaume, la vie d'une commune",
    lead: "Palais royal, marchés de campagne et routes vers l'Atlantique : Allada porte une histoire fondatrice et cultive un quotidien résolument agricole.",
    image: "allada-ville",
    ctaPrimary: { label: "Découvrir Allada", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer sa visite", href: "#tourisme" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune héritière, pas un décor",
    text: "Allada a donné son nom à un royaume dont les héritiers ont marqué l'histoire du plateau. La commune assume cet héritage avec pudeur : elle le transmet par ses récits, ses lieux et ses institutions, sans le réduire à une attraction.",
    pullquote:
      "Un royaume ne se visite pas comme un monument. Il se comprend par celles et ceux qui continuent d'y vivre.",
    image: "allada-site",
    caption: "La cour royale d'Allada, un lieu de mémoire toujours fréquenté.",
  },

  stats: [
    { value: "12", label: "arrondissements", note: "Découpage administratif" },
    { value: "381", label: "km² de territoire", note: "Superficie communale" },
    { value: "84", label: "villages et quartiers", note: "Maillage territorial" },
    { value: "1", label: "ancien royaume", note: "Héritage historique" },
  ],

  services: ["acte-naissance", "agriculture", "foncier", "urbanisme", "marche", "culture", "tourisme", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "palais-travaux",
      title: "Palais royal : un programme d'entretien des toitures",
      category: "Patrimoine",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Un chantier de démonstration prévoit la réfection des couvertures et la sécurisation des accès de la cour royale.",
      image: "allada-site",
      featured: true,
    },
    {
      id: "marche-allada",
      title: "Le marché central s'ouvre aux productrices des villages",
      category: "Économie",
      date: "5 novembre 2026",
      dateISO: "2026-11-05",
      excerpt: "Vingt étals supplémentaires sont réservés aux groupements agricoles des arrondissements.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "manioc",
      title: "Manioc : une unité de transformation à l'étude",
      category: "Agriculture",
      date: "28 octobre 2026",
      dateISO: "2026-10-28",
      excerpt: "La commune accompagne une étude de faisabilité portée par une coopérative locale.",
      image: "benin-terre",
      featured: false,
    },
    {
      id: "routes",
      title: "Trois pistes rurales réhabilitées avant la saison des pluies",
      category: "Voirie",
      date: "19 octobre 2026",
      dateISO: "2026-10-19",
      excerpt: "Les travaux de démonstration relient des villages agricoles au marché central.",
      image: "allada-ville",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-allada",
      title: "Conseil communal",
      date: "2 décembre 2026",
      dateISO: "2026-12-02",
      time: "10 h",
      place: "Hôtel de ville, Allada",
      category: "Institution",
      description: "Budget, agriculture et entretien du patrimoine : session publique.",
      image: "allada-ville",
      free: true,
    },
    {
      id: "visite-royale",
      title: "Visite guidée : mémoires du royaume",
      date: "29 novembre 2026",
      dateISO: "2026-11-29",
      time: "09 h",
      place: "Départ : place du marché central",
      category: "Patrimoine",
      description: "Un parcours commenté dans la ville, en lien avec la chefferie et les associations locales.",
      image: "allada-site",
      free: false,
    },
    {
      id: "journee-agricole",
      title: "Journée des productrices",
      date: "16 janvier 2027",
      dateISO: "2027-01-16",
      time: "08 h — 17 h",
      place: "Esplanade du marché, Allada",
      category: "Agriculture",
      description: "Vente directe, démonstrations culinaires et échanges sur les semences.",
      image: "benin-marche-femmes",
      free: true,
    },
  ],

  projects: [
    {
      id: "pistes",
      title: "Réhabilitation de trois pistes rurales",
      sector: "Voirie",
      status: "En cours",
      progress: 61,
      budget: "780 M FCFA",
      quarter: "Villages du nord de la commune",
      description: "Empierrement, ouvrages de franchissement et entretien des accotements.",
      image: "allada-ville",
    },
    {
      id: "palais",
      title: "Entretien du palais royal et de la cour",
      sector: "Patrimoine",
      status: "En cours",
      progress: 44,
      budget: "310 M FCFA",
      quarter: "Centre historique",
      description: "Toitures, drainage des eaux de pluie et signalétique respectueuse des usages.",
      image: "allada-site",
    },
    {
      id: "transformation",
      title: "Unité de transformation du manioc",
      sector: "Agriculture",
      status: "Étude",
      progress: 22,
      budget: "240 M FCFA",
      quarter: "Zone agricole",
      description: "Séchage, broyage et conditionnement pour réduire les pertes après récolte.",
      image: "benin-terre",
    },
    {
      id: "marche",
      title: "Extension du marché central",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "195 M FCFA",
      quarter: "Centre-ville",
      description: "Vingt étals, deux hangars et un point d'eau pour les vendeuses.",
      image: "benin-marche",
    },
  ],

  budget: {
    year: "2026",
    total: "4,8",
    operating: "2,7",
    investment: "2,1",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et pistes", value: 0.9, pct: 19 },
      { label: "Agriculture", value: 0.7, pct: 15 },
      { label: "Patrimoine et culture", value: 0.5, pct: 10 },
      { label: "Marchés et économie", value: 0.5, pct: 10 },
      { label: "Action sociale", value: 0.5, pct: 10 },
      { label: "Fonctionnement", value: 1.7, pct: 36 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "AL/2026/005", title: "Réhabilitation de pistes rurales — lot 1", type: "Travaux", amount: "412 M FCFA", date: "18/08/2026", status: "Attribué" },
    { ref: "AL/2026/010", title: "Fourniture de matériel de séchage", type: "Fournitures", amount: "38 M FCFA", date: "06/10/2026", status: "Attribué" },
    { ref: "AL/2026/013", title: "Étude de faisabilité de l'unité manioc", type: "Services", amount: "14 M FCFA", date: "03/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement agricole communal", type: "PDF", size: "4,2 Mo", date: "22/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,0 Mo", date: "30/01/2026" },
    { title: "Charte de valorisation du patrimoine", type: "PDF", size: "2,6 Mo", date: "17/09/2026" },
  ],

  attractions: [
    { name: "Le palais royal d'Allada", type: "Mémoire", text: "La cour de l'ancien royaume, lieu de cérémonies et de transmission, à visiter dans le respect des usages.", image: "allada-site", distance: "Centre", duration: "1 h" },
    { name: "Le marché central", type: "Vie locale", text: "Produits agricoles, tissus et petit commerce : le pouls économique de la commune.", image: "benin-marche", distance: "Centre", duration: "45 min" },
    { name: "Les villages agricoles", type: "Territoire", text: "Un maillage de villages tournés vers le manioc, le maïs et le palmier à huile.", image: "benin-terre", distance: "10 — 20 km", duration: "Demi-journée" },
    { name: "La route de Ouidah", type: "Paysage", text: "Un axe historique qui relie la commune à la côte et aux mémoire de la traite atlantique.", image: "allada-ville", distance: "Sortie sud", duration: "En voiture" },
  ],

  history: [
    { year: "XVIe — XVIIe s.", title: "La puissance d'Allada", text: "Le royaume d'Allada s'affirme comme une grande puissance politique et commerciale de la région." },
    { year: "XVIIIe s.", title: "Une filiation royale", text: "Les conflits de succession contribuent à l'émergence du royaume du Dahomey, dont les souverains revendiquent l'héritage d'Allada." },
    { year: "Aujourd'hui", title: "Mémoire et agriculture", text: "La commune conjugue valorisation du patrimoine et développement agricole, avec un souci de ne pas muséifier la vie locale." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 42, note: "Accueil et services communaux" },
      { name: "Palais royal", type: "tourism", x: 52, y: 34, note: "Cour et mémoire du royaume" },
      { name: "Marché central", type: "market", x: 44, y: 50, note: "Commerce quotidien" },
      { name: "Centre de santé", type: "health", x: 58, y: 56, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 38, y: 38, note: "Enseignement secondaire" },
      { name: "Zone agricole", type: "nature", x: 72, y: 66, note: "Manioc, maïs et palmier" },
      { name: "Gare routière", type: "mobility", x: 62, y: 44, note: "Départs vers Cotonou et Ouidah" },
      { name: "Bas-fond", type: "water", x: 28, y: 68, note: "Maraîchage et eau" },
    ],
  },

  gastronomy: [
    { name: "Amiwo", text: "Pâte de maïs cuite avec de la tomate et du poisson, plat des jours de fête." },
    { name: "Manioc pilé", text: "Servi avec une sauce d'arachide ou de feuilles, selon la saison." },
    { name: "Wagasi", text: "Fromage peul grillé, proposé sur les marchés et les routes de la commune." },
  ],

  economy: {
    text: "L'agriculture structure l'économie locale : manioc, maïs, arachide et palmier à huile. Les marchés jouent un rôle central pour écouler les récoltes, tandis que le commerce de détail et le transport complètent les revenus des ménages.",
    sectors: [
      { name: "Agriculture et élevage", share: 42 },
      { name: "Commerce et marchés", share: 28 },
      { name: "Transport", share: 16 },
      { name: "Artisanat et services", share: 14 },
    ],
  },

  culture: {
    text: "La mémoire du royaume reste vivante dans les cérémonies, les récits de la chefferie et les associations culturelles. La commune soutient une transmission qui associe les jeunes générations aux anciens.",
    highlights: ["Mémoire royale", "Cérémonies traditionnelles", "Contes et récits", "Groupements de femmes"],
  },

  youth: {
    text: "La jeunesse communale est majoritairement agricole et scolaire. Les programmes de démonstration visent l'orientation, la formation aux métiers de la transformation et l'accès au sport.",
    programs: ["Orientation scolaire", "Formation en transformation agroalimentaire", "Tournois de quartier", "Clubs de lecture"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Allada",
    phone: "+229 22 00 00 00",
    email: "contact@allada.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "12 arrondissements",
    quartiers: "84 villages et quartiers de ville",
  },

  mayor: {
    quote:
      "L'histoire d'Allada n'est pas derrière nous : elle est dans nos façons de décider, d'accueillir et de transmettre. Notre projet est de la rendre utile au développement de chaque village.",
    text: "Le mot du maire est un contenu de démonstration. Il illustre une prise de parole institutionnelle qui assume l'héritage historique sans s'y enfermer.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Peut-on visiter le palais royal ?", a: "La cour se visite selon les usages et avec l'accord de la chefferie. La rubrique Tourisme décrit le cadre de la démonstration." },
    { q: "Comment déposer un dossier agricole ?", a: "La rubrique Démarches présente les pièces et les étapes du dépôt au guichet communal." },
    { q: "Où se tient le marché central ?", a: "Au cœur de la ville ; la carte interactive de démonstration en indique l'emplacement symbolique." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Allada : mémoire du royaume, agriculture, marchés, démarches, actualités et projets.",
  },
};

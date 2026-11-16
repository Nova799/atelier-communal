export default {
  slug: "porto-novo",
  name: "Porto-Novo",
  nameWithDe: "de Porto-Novo",
  nameWithA: "à Porto-Novo",
  department: "Ouémé",
  region: "Bénin méridional",
  motto: "La capitale patrimoniale",
  positioning: "Capitale du Bénin, ville d'architecture afro-brésilienne et de mémoire, Porto-Novo conjugue institutions et vie de quartier.",

  identity: {
    primary: "#7a2e2a",
    deep: "#571f1c",
    accent: "#d9a441",
    soft: "#f3e8df",
    paper: "#fbf6ef",
    ink: "#211716",
    motif: "arch",
  },

  hero: {
    kicker: "Commune de Porto-Novo · Ouémé",
    title: "Porto-Novo,",
    titleAccent: "mémoire vive du Bénin",
    lead: "Capitale de la République, la ville porte une histoire afro-brésilienne singulière. Ses quartiers, ses mosquées et ses places racontent un Bénin ouvert sur le monde.",
    image: "portonovo-mosquee",
    ctaPrimary: { label: "Explorer la capitale", href: "#decouvrir" },
    ctaSecondary: { label: "Voir les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue dans la capitale",
    title: "Une ville de passages et de mémoire",
    text: "Née du royaume de Hogbonou, façonnée par les échanges avec le Brésil et les rives de la lagune, Porto-Novo est aujourd'hui une capitale administrative qui vit au rythme de ses marchés et de ses quartiers.",
    pullquote: "La capitale ne se résume pas aux institutions : elle est d'abord une ville habitée, commerçante et fière de son héritage.",
    image: "portonovo-rue",
    caption: "Au pied de la Grande Mosquée, la ville continue son quotidien.",
  },

  stats: [
    { value: "5", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "capitale de la République", note: "Statut institutionnel" },
    { value: "3", label: "musées et lieux de mémoire", note: "Donnée de démonstration" },
    { value: "12", label: "monuments répertoriés", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "urbanisme", "foncier", "social", "tourisme", "documents", "environnement", "taxes"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "grande-mosquee",
      title: "Grande Mosquée : un chantier de restauration respectueux des décors",
      category: "Patrimoine",
      date: "10 novembre 2026",
      dateISO: "2026-11-10",
      excerpt: "Les façades et les boiseries retrouvent progressivement leurs couleurs, avec un suivi technique et un chantier ouvert aux visites guidées.",
      image: "portonovo-mosquee",
      featured: true,
    },
    {
      id: "rue-delcasse",
      title: "Rue Delcassé : une journée pour redécouvrir le quartier ancien",
      category: "Cadre de vie",
      date: "6 novembre 2026",
      dateISO: "2026-11-06",
      excerpt: "Parcours commentés, ateliers d'artisans et rencontres avec les habitants pour imaginer ensemble l'avenir de la rue.",
      image: "portonovo-plaque",
      featured: false,
    },
    {
      id: "marche-ouando",
      title: "Marché Ouando : amélioration des accès et de l'assainissement",
      category: "Économie",
      date: "1 novembre 2026",
      dateISO: "2026-11-01",
      excerpt: "La commune engage des travaux de voirie légère et de drainage autour du marché, en concertation avec les commerçants.",
      image: "portonovo-portage",
      featured: false,
    },
    {
      id: "conseil",
      title: "Conseil communal : les décisions de la session d'octobre",
      category: "Institution",
      date: "26 octobre 2026",
      dateISO: "2026-10-26",
      excerpt: "Délibérations sur le foncier, les équipements scolaires et le soutien aux associations culturelles.",
      image: "portonovo-place",
      featured: false,
    },
  ],

  events: [
    {
      id: "nuits-patrimoine",
      title: "Nuits du patrimoine",
      date: "21 novembre 2026",
      dateISO: "2026-11-21",
      time: "18 h — 22 h",
      place: "Quartier ancien, départ Grande Mosquée",
      category: "Culture",
      description: "Visites éclairées, contes et musique dans les rues du centre historique.",
      image: "portonovo-mosquee",
      free: true,
    },
    {
      id: "marche-artisans",
      title: "Marché des artisans de la rue Delcassé",
      date: "28 novembre 2026",
      dateISO: "2026-11-28",
      time: "09 h — 18 h",
      place: "Rue Delcassé",
      category: "Économie",
      description: "Textiles, sculpture, bijoux et gastronomie : une journée de rencontres avec les artisans de la ville.",
      image: "benin-tissu",
      free: true,
    },
    {
      id: "conseil-nov",
      title: "Session publique du conseil communal",
      date: "4 décembre 2026",
      dateISO: "2026-12-04",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Présentation du rapport d'activité et échanges avec les habitants.",
      image: "portonovo-place",
      free: true,
    },
  ],

  projects: [
    {
      id: "quartier-ancien",
      title: "Réhabilitation du quartier ancien",
      sector: "Patrimoine",
      status: "En cours",
      progress: 64,
      budget: "1,8 Md FCFA",
      quarter: "Centre historique",
      description: "Restauration des façades remarquables, éclairage public et sécurisation des cheminements piétons.",
      image: "portonovo-rue",
    },
    {
      id: "maison-memoire",
      title: "Maison de la mémoire afro-brésilienne",
      sector: "Culture",
      status: "En cours",
      progress: 42,
      budget: "920 M FCFA",
      quarter: "Quartier Djègan",
      description: "Un espace d'exposition et de recherche sur les liens entre le Bénin, le Brésil et la diaspora.",
      image: "portonovo-porte",
    },
    {
      id: "assainissement",
      title: "Assainissement du bassin du marché Ouando",
      sector: "Cadre de vie",
      status: "En cours",
      progress: 76,
      budget: "640 M FCFA",
      quarter: "Ouando",
      description: "Caniveaux, points de collecte et sensibilisation des commerçants à la gestion des déchets.",
      image: "portonovo-portage",
    },
    {
      id: "parcours",
      title: "Parcours patrimonial de la capitale",
      sector: "Tourisme",
      status: "Livré",
      progress: 100,
      budget: "120 M FCFA",
      quarter: "Centre-ville",
      description: "Signalétique, application de visite et formation de guides locaux.",
      image: "portonovo-place",
    },
  ],

  budget: {
    year: "2026",
    total: "8,7",
    operating: "4,6",
    investment: "4,1",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine et culture", value: 1.7, pct: 20 },
      { label: "Voirie et assainissement", value: 1.5, pct: 17 },
      { label: "Éducation", value: 1.2, pct: 14 },
      { label: "Action sociale", value: 0.9, pct: 10 },
      { label: "Économie locale", value: 0.8, pct: 9 },
      { label: "Fonctionnement", value: 2.6, pct: 30 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "PN/2026/009", title: "Restauration des façades du quartier ancien — lot 1", type: "Travaux", amount: "286 M FCFA", date: "22/09/2026", status: "Attribué" },
    { ref: "PN/2026/012", title: "Étude de faisabilité de la Maison de la mémoire", type: "Services", amount: "48 M FCFA", date: "14/10/2026", status: "Attribué" },
    { ref: "PN/2026/016", title: "Fourniture de mobilier pour les écoles primaires", type: "Fournitures", amount: "92 M FCFA", date: "08/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,4 Mo", date: "20/01/2026" },
    { title: "Plan de sauvegarde du quartier ancien", type: "PDF", size: "5,1 Mo", date: "12/05/2026" },
    { title: "Compte rendu du conseil — octobre 2026", type: "PDF", size: "720 Ko", date: "28/10/2026" },
  ],

  attractions: [
    { name: "La Grande Mosquée", type: "Patrimoine", text: "Un édifice emblématique aux façades colorées, au cœur du quartier ancien.", image: "portonovo-mosquee", distance: "Centre-ville", duration: "45 min" },
    { name: "Le quartier afro-brésilien", type: "Architecture", text: "Maisons à étage, balcons et cours : l'héritage des retours du Brésil.", image: "portonovo-rue", distance: "Centre", duration: "1 h 30" },
    { name: "Le musée Honmè", type: "Culture", text: "L'ancien palais royal raconte l'histoire de la ville et du royaume.", image: "portonovo-place", distance: "Centre", duration: "1 h" },
    { name: "Les rues du marché", type: "Vie locale", text: "Couleurs, tissus et parfums de cuisine : la capitale au quotidien.", image: "portonovo-portage", distance: "Ouando", duration: "1 h" },
  ],

  history: [
    { year: "XVIIIe s.", title: "Le royaume de Hogbonou", text: "La ville se structure autour du palais royal et du commerce avec les Européens sur la côte." },
    { year: "XIXe s.", title: "Le retour du Brésil", text: "Les familles afro-brésiliennes marquent durablement l'architecture, les noms et la vie sociale de la ville." },
    { year: "1960", title: "Capitale du Bénin", text: "Porto-Novo devient la capitale de la République du Dahomey, puis du Bénin." },
  ],

  map: {
    terrain: "plateau",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 46, note: "Accueil et services communaux" },
      { name: "Grande Mosquée", type: "tourism", x: 56, y: 39, note: "Patrimoine religieux et architectural" },
      { name: "Musée Honmè", type: "tourism", x: 62, y: 52, note: "Histoire de la ville et du royaume" },
      { name: "Marché Ouando", type: "market", x: 38, y: 61, note: "Marché quotidien et commerce de gros" },
      { name: "Place de la Marina", type: "civic", x: 44, y: 30, note: "Promenade et événements" },
      { name: "Gare routière", type: "mobility", x: 67, y: 34, note: "Liaisons interurbaines" },
      { name: "Centre de santé", type: "health", x: 34, y: 44, note: "Consultations et urgences" },
      { name: "École publique", type: "education", x: 28, y: 53, note: "École primaire de quartier" },
    ],
  },

  gastronomy: [
    { name: "Wagasi", text: "Fromage peul grillé, souvent servi avec une sauce tomate relevée." },
    { name: "Akassa", text: "Pâte de maïs fermentée, accompagnée de sauces de poisson ou de légumes." },
    { name: "Beignets de haricot", text: "Petits beignets croustillants, dégustés au petit-déjeuner ou en fin de journée." },
  ],

  economy: {
    text: "Capitale administrative, Porto-Novo vit aussi du commerce, de l'artisanat et du tourisme patrimonial. La commune accompagne les commerçants et les artisans du centre historique.",
    sectors: [
      { name: "Commerce", share: 32 },
      { name: "Administration et services", share: 28 },
      { name: "Artisanat", share: 22 },
      { name: "Tourisme et culture", share: 18 },
    ],
  },

  culture: {
    text: "La capitale cultive une scène artistique discrète mais vivace : ateliers d'artisans, chorales, théâtre et festivals de quartier.",
    highlights: ["Architecture afro-brésilienne", "Musique et chorales", "Artisanat d'art", "Cuisine de rue"],
  },

  youth: {
    text: "Les jeunes Portonoviens investissent les espaces publics et les associations. La commune soutient les initiatives culturelles et sportives de proximité.",
    programs: ["Maison des jeunes", "Appels à projets associatifs", "Ateliers de lecture", "Tournois de quartier"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Porto-Novo",
    phone: "+229 20 00 00 00",
    email: "contact@porto-novo.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "5 arrondissements",
    quartiers: "Quartiers administratifs et villages",
  },

  mayor: {
    quote: "Notre capitale a une histoire immense. Notre responsabilité est de la rendre lisible, utile et vivante pour celles et ceux qui l'habitent.",
    text: "Le mot du maire est un contenu de démonstration. Il illustre la place possible d'une parole institutionnelle courte, située et reliée à l'action publique.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment visiter le quartier ancien ?", a: "Des parcours libres et des visites guidées de démonstration sont proposés depuis la Grande Mosquée et le musée Honmè." },
    { q: "Où déposer un dossier d'urbanisme ?", a: "Au service urbanisme de l'hôtel de ville, ou via la démarche en ligne de démonstration." },
    { q: "Les documents du conseil sont-ils publiés ?", a: "Oui, les comptes rendus et synthèses budgétaires de démonstration sont disponibles dans la rubrique Transparence." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Porto-Novo : démarches, patrimoine afro-brésilien, actualités, projets et transparence.",
  },
};

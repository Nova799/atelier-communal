export default {
  slug: "abomey-calavi",
  name: "Abomey-Calavi",
  nameWithDe: "d'Abomey-Calavi",
  nameWithA: "à Abomey-Calavi",
  department: "Atlantique",
  region: "Bénin méridional",
  motto: "La ville qui apprend",
  positioning:
    "Deuxième commune la plus peuplée du Bénin, Abomey-Calavi conjugue un campus universitaire majeur, des marchés très actifs, les rives du lac Nokoué et une urbanisation parmi les plus rapides du pays.",

  identity: {
    primary: "#1d4e6b",
    deep: "#123448",
    accent: "#e08a3c",
    soft: "#e3edf2",
    paper: "#f6f2e8",
    ink: "#131c20",
    motif: "arch",
  },

  hero: {
    kicker: "Commune d'Abomey-Calavi · Atlantique",
    title: "Abomey-Calavi,",
    titleAccent: "la ville qui apprend et qui grandit",
    lead: "Université, marchés de Godomey, rives du lac Nokoué : une commune jeune, dense, en pleine transformation, où l'urbanisation rencontre encore les champs maraîchers.",
    image: "abomey-calavi-ville",
    ctaPrimary: { label: "Découvrir la commune", href: "#decouvrir" },
    ctaSecondary: { label: "Accéder aux démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une ville-campus, mais pas seulement",
    text: "Abomey-Calavi s'est construite autour de son université et de ses marchés. Chaque jour, des milliers d'étudiants, de commerçantes et de maraîchers y circulent. La commune doit désormais absorber cette croissance sans effacer les villages, les bas-fonds et les rives du lac qui font sa respiration.",
    pullquote:
      "Grandir n'est pas s'étaler : c'est offrir à chacun une rue praticable, une école proche et un marché où travailler.",
    image: "abomey-calavi-site",
    caption: "L'entrée de l'Université d'Abomey-Calavi, un repère de la commune.",
  },

  stats: [
    { value: "2e", label: "commune la plus peuplée", note: "Après Cotonou" },
    { value: "18", label: "km de Cotonou", note: "Axe routier structurant" },
    { value: "1", label: "université publique", note: "Campus principal" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "urbanisme", "foncier", "environnement", "economie", "marche", "jeunesse", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "rentree-transports",
      title: "Rentrée universitaire : un plan de circulation pour le campus",
      category: "Mobilité",
      date: "14 novembre 2026",
      dateISO: "2026-11-14",
      excerpt: "Navettes renforcées, arrêts temporaires et régulation aux carrefours : la commune coordonne les accès pendant la rentrée.",
      image: "abomey-calavi-ville",
      featured: true,
    },
    {
      id: "godomey-marche",
      title: "Le marché de Godomey réorganise ses allées",
      category: "Économie",
      date: "8 novembre 2026",
      dateISO: "2026-11-08",
      excerpt: "Allées élargies, accès pompiers dégagé et zones de déchargement : une phase de travaux de démonstration présentée aux commerçants.",
      image: "abomey-calavi-paysage",
      featured: false,
    },
    {
      id: "lac-assainissement",
      title: "Rives du lac : une opération de collecte des déchets plastiques",
      category: "Environnement",
      date: "31 octobre 2026",
      dateISO: "2026-10-31",
      excerpt: "Associations, pêcheurs et écoles participent à une collecte organisée sur trois points d'embarcadère.",
      image: "soava-voile",
      featured: false,
    },
    {
      id: "marechage",
      title: "Maraîchage : des circuits courts vers les cantines scolaires",
      category: "Agriculture",
      date: "22 octobre 2026",
      dateISO: "2026-10-22",
      excerpt: "Un dispositif de démonstration relie des productrices de bas-fonds aux cantines de quatre écoles publiques.",
      image: "benin-marche",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-calavi",
      title: "Conseil communal",
      date: "4 décembre 2026",
      dateISO: "2026-12-04",
      time: "10 h",
      place: "Hôtel de ville, Abomey-Calavi",
      category: "Institution",
      description: "Budget, voirie et accès au campus : la session est ouverte au public dans la limite des places.",
      image: "abomey-calavi-ville",
      free: true,
    },
    {
      id: "forum-jeunesse",
      title: "Forum emploi et stages",
      date: "11 — 12 décembre 2026",
      dateISO: "2026-12-11",
      time: "09 h — 17 h",
      place: "Maison des jeunes, Calavi",
      category: "Jeunesse",
      description: "Rencontres avec des entreprises locales, ateliers CV et permanences d'orientation.",
      image: "abomey-calavi-vie",
      free: true,
    },
    {
      id: "journee-lac",
      title: "Journée du lac Nokoué",
      date: "9 janvier 2027",
      dateISO: "2027-01-09",
      time: "08 h — 18 h",
      place: "Embarcadère de Calavi",
      category: "Environnement",
      description: "Balades, ateliers de pêche durable et sensibilisation à la pollution des rives.",
      image: "soava-voile",
      free: true,
    },
  ],

  projects: [
    {
      id: "voirie",
      title: "Réhabilitation de la voirie de Godomey",
      sector: "Voirie",
      status: "En cours",
      progress: 54,
      budget: "2,4 Md FCFA",
      quarter: "Godomey — axes secondaires",
      description: "Revêtement de six voies de quartier, caniveaux et éclairage public solaire.",
      image: "abomey-calavi-ville",
    },
    {
      id: "campus",
      title: "Pôle de mobilité du campus",
      sector: "Mobilité",
      status: "En cours",
      progress: 33,
      budget: "980 M FCFA",
      quarter: "Zogbadjè — entrée universitaire",
      description: "Arrêts sécurisés, ombrières, stationnement deux-roues et information voyageurs.",
      image: "abomey-calavi-vie",
    },
    {
      id: "marche",
      title: "Modernisation du marché de Calavi",
      sector: "Économie",
      status: "En cours",
      progress: 72,
      budget: "1,1 Md FCFA",
      quarter: "Centre — marché central",
      description: "Hangars, étals lavables, réseau d'eau et espace de vente pour les productrices.",
      image: "abomey-calavi-paysage",
    },
    {
      id: "assainissement",
      title: "Assainissement des rives du lac",
      sector: "Environnement",
      status: "Étude",
      progress: 18,
      budget: "640 M FCFA",
      quarter: "Rives de Calavi",
      description: "Collecte des déchets, ouvrages de retenue et restauration des berges.",
      image: "soava-voile",
    },
  ],

  budget: {
    year: "2026",
    total: "9,4",
    operating: "5,2",
    investment: "4,2",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 2.1, pct: 22 },
      { label: "Éducation et jeunesse", value: 1.4, pct: 15 },
      { label: "Environnement et eau", value: 1.3, pct: 14 },
      { label: "Marchés et économie", value: 1.1, pct: 12 },
      { label: "Action sociale", value: 1.0, pct: 11 },
      { label: "Fonctionnement", value: 2.5, pct: 26 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "AC/2026/008", title: "Travaux de voirie à Godomey — lot 2", type: "Travaux", amount: "812 M FCFA", date: "12/09/2026", status: "Attribué" },
    { ref: "AC/2026/015", title: "Fourniture d'ombrières pour arrêts de bus", type: "Fournitures", amount: "64 M FCFA", date: "24/10/2026", status: "Publié" },
    { ref: "AC/2026/019", title: "Étude d'assainissement des berges du lac", type: "Services", amount: "27 M FCFA", date: "07/11/2026", status: "En évaluation" },
  ],

  documents: [
    { title: "Plan de mobilité du campus — synthèse", type: "PDF", size: "3,8 Mo", date: "14/10/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,3 Mo", date: "26/01/2026" },
    { title: "Schéma d'assainissement des rives", type: "PDF", size: "5,1 Mo", date: "02/09/2026" },
  ],

  attractions: [
    { name: "Le campus universitaire", type: "Savoir", text: "Un poumon intellectuel qui structure les transports, le commerce et la vie de quartier.", image: "abomey-calavi-site", distance: "Zogbadjè", duration: "1 h" },
    { name: "Les rives du lac Nokoué", type: "Nature", text: "Embarcadères, pêche et végétation de berge aux portes de la ville.", image: "soava-voile", distance: "Rives de Calavi", duration: "Libre" },
    { name: "Le marché de Godomey", type: "Économie", text: "Un des grands rendez-vous commerciaux de la périphérie de Cotonou.", image: "abomey-calavi-paysage", distance: "Godomey", duration: "45 min" },
    { name: "Le marché central", type: "Vie locale", text: "Produits frais, tissus et petit artisanat au cœur de la commune.", image: "abomey-calavi-paysage", distance: "Centre", duration: "30 min" },
  ],

  history: [
    { year: "XIXe s.", title: "Villages et bas-fonds", text: "Le territoire est d'abord un chapelet de villages agricoles tournés vers les bas-fonds et la lagune." },
    { year: "XXe s.", title: "L'université change l'échelle", text: "L'implantation du campus transforme la commune en pôle d'accueil pour les étudiants de tout le pays." },
    { year: "Aujourd'hui", title: "Une croissance à organiser", text: "La commune figure parmi les plus peuplées du Bénin et doit articuler logements, transports et services de proximité." },
  ],

  map: {
    terrain: "lagoon",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 46, y: 44, note: "Accueil et services communaux" },
      { name: "Campus universitaire", type: "education", x: 38, y: 56, note: "Enseignement supérieur" },
      { name: "Marché de Godomey", type: "market", x: 62, y: 38, note: "Commerce et transport" },
      { name: "Marché central", type: "market", x: 50, y: 30, note: "Produits frais et artisanat" },
      { name: "Embarcadère", type: "water", x: 30, y: 72, note: "Accès au lac Nokoué" },
      { name: "Rives du lac", type: "nature", x: 24, y: 82, note: "Berges et pêche" },
      { name: "Centre de santé", type: "health", x: 56, y: 62, note: "Soins de proximité" },
      { name: "Gare routière", type: "mobility", x: 68, y: 52, note: "Départs vers Cotonou et le nord" },
    ],
  },

  gastronomy: [
    { name: "Akassa", text: "Pâte de maïs fermentée, servie avec une sauce de tomate et de poisson." },
    { name: "Poisson braisé", text: "Tilapia ou capitaine grillé, accompagné d'attiéké et de piment." },
    { name: "Atassi", text: "Riz et haricots, plat généreux des jours de marché." },
  ],

  economy: {
    text: "L'économie locale repose sur le commerce, le transport, les services liés à l'université et le maraîchage des bas-fonds. La commune cherche à structurer ces activités pour qu'elles profitent davantage aux habitants et moins aux intermédiaires.",
    sectors: [
      { name: "Commerce et services", share: 38 },
      { name: "Transport et mobilité", share: 24 },
      { name: "Maraîchage et agriculture", share: 21 },
      { name: "Artisanat et construction", share: 17 },
    ],
  },

  culture: {
    text: "La culture locale mêle pratiques vodoun, musiques urbaines et vie étudiante. Les places de quartier accueillent régulièrement concerts, tournois et rendez-vous associatifs.",
    highlights: ["Vodun et rara", "Musiques urbaines", "Vie étudiante", "Sport de quartier"],
  },

  youth: {
    text: "La commune accompagne l'insertion des jeunes par l'orientation, les stages et les équipements de proximité, en lien avec le campus et les entreprises locales.",
    programs: ["Forum emploi et stages", "Maison des jeunes", "Incubateur de projets", "Tournois inter-quartiers"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Abomey-Calavi",
    phone: "+229 22 00 00 00",
    email: "contact@abomey-calavi.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre commune accueille chaque année plus d'habitants que beaucoup de villes du pays. Notre responsabilité est de transformer cette énergie en services réels : des rues praticables, des écoles, des marchés propres.",
    text: "Le mot du maire est un contenu de démonstration. Il montre comment une commune peut porter une parole de projet sans masquer les tensions de la croissance urbaine.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir un acte de naissance ?", a: "La rubrique Démarches présente les pièces, les délais et les points de dépôt dans le cadre de la démonstration." },
    { q: "Comment circuler pendant la rentrée universitaire ?", a: "Le plan de mobilité de démonstration indique les arrêts temporaires et les axes régulés autour du campus." },
    { q: "Où signaler un dépôt sauvage sur les berges ?", a: "Le formulaire de signalement de démonstration permet de localiser le point et de décrire la situation." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Abomey-Calavi : université, mobilité, marchés, lac Nokoué, démarches, actualités et projets.",
  },
};

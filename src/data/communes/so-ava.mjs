export default {
  slug: "so-ava",
  name: "Sô-Ava",
  nameWithDe: "de Sô-Ava",
  nameWithA: "à Sô-Ava",
  department: "Atlantique",
  region: "Bénin méridional",
  motto: "Le pays de l'eau",
  positioning: "Sur les rives du lac Nokoué, Sô-Ava abrite Ganvié et invente une vie communale au rythme de l'eau.",

  identity: {
    primary: "#145c74",
    deep: "#0c4053",
    accent: "#6fa88a",
    soft: "#e2eef0",
    paper: "#f4f6f2",
    ink: "#12201f",
    motif: "pirogue",
  },

  hero: {
    kicker: "Commune de Sô-Ava · Atlantique",
    title: "Sô-Ava,",
    titleAccent: "une commune sur l'eau",
    lead: "Pirogues, marchés flottants et villages sur pilotis : ici, l'organisation du territoire suit le rythme du lac Nokoué.",
    image: "soava-voile",
    ctaPrimary: { label: "Découvrir Sô-Ava", href: "#decouvrir" },
    ctaSecondary: { label: "Services de la commune", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Ganvié, et bien plus qu'une image",
    text: "La commune de Sô-Ava regroupe plusieurs arrondissements autour du lac Nokoué, dont Ganvié, le célèbre village lacustre. Derrière le paysage, il y a une vie quotidienne à organiser : écoles, santé, eau, déchets et mobilité.",
    pullquote: "Ici, la rue est une pirogue. Penser la commune, c'est penser chaque trajet, chaque marché, chaque service depuis l'eau.",
    image: "soava-village",
    caption: "Ganvié, village sur pilotis, dans la commune de Sô-Ava.",
  },

  stats: [
    { value: "7", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "lac structurant", note: "Lac Nokoué" },
    { value: "1", label: "marché sur l'eau", note: "Ganvié" },
    { value: "12", label: "écoles lacustres", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "economie", "environnement", "social", "urbanisme", "tourisme", "marche", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "dechets",
      title: "Déchets lagunaires : une collecte test dans trois arrondissements",
      category: "Environnement",
      date: "13 novembre 2026",
      dateISO: "2026-11-13",
      excerpt: "Points de collecte flottants et sensibilisation des ménages : la commune expérimente une organisation adaptée à l'eau.",
      image: "soava-marche",
      featured: true,
    },
    {
      id: "ecole",
      title: "Une école sur pilotis rénovée à Ganvié",
      category: "Éducation",
      date: "7 novembre 2026",
      dateISO: "2026-11-07",
      excerpt: "Toiture, passerelles et sanitaires : les élèves retrouvent des conditions d'accueil améliorées.",
      image: "soava-cases",
      featured: false,
    },
    {
      id: "marche-eau",
      title: "Le marché sur l'eau, moteur économique du lac",
      category: "Économie",
      date: "1 novembre 2026",
      dateISO: "2026-11-01",
      excerpt: "Poissons, légumes et produits transformés : rencontre avec les commerçantes qui font vivre Ganvié.",
      image: "soava-marche",
      featured: false,
    },
    {
      id: "conseil",
      title: "Conseil communal : l'accès à l'eau au centre des débats",
      category: "Institution",
      date: "25 octobre 2026",
      dateISO: "2026-10-25",
      excerpt: "Les élus examinent un programme de bornes-fontaines et de maintenance des équipements.",
      image: "soava-pirogue",
      featured: false,
    },
  ],

  events: [
    {
      id: "journee-lac",
      title: "Journée du lac Nokoué",
      date: "22 novembre 2026",
      dateISO: "2026-11-22",
      time: "08 h — 17 h",
      place: "Débarcadère de Ganvié",
      category: "Environnement",
      description: "Nettoyage des berges, ateliers de sensibilisation et sorties en pirogue.",
      image: "soava-voile",
      free: true,
    },
    {
      id: "marche-artisanal",
      title: "Marché des produits du lac",
      date: "29 novembre 2026",
      dateISO: "2026-11-29",
      time: "07 h — 13 h",
      place: "Marché sur l'eau, Ganvié",
      category: "Économie",
      description: "Poisson fumé, légumes, vannerie et cuisine locale.",
      image: "soava-marche",
      free: true,
    },
    {
      id: "conseil",
      title: "Conseil communal",
      date: "9 décembre 2026",
      dateISO: "2026-12-09",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Eau, école et entretien des passerelles à l'ordre du jour.",
      image: "soava-pirogue",
      free: true,
    },
  ],

  projects: [
    {
      id: "debarcadere",
      title: "Débarcadère de Ganvié",
      sector: "Mobilité",
      status: "En cours",
      progress: 57,
      budget: "540 M FCFA",
      quarter: "Ganvié",
      description: "Pontons sécurisés, zone d'attente et accès pour les personnes à mobilité réduite.",
      image: "soava-pirogue",
    },
    {
      id: "ecole-pilotis",
      title: "École sur pilotis",
      sector: "Éducation",
      status: "En cours",
      progress: 72,
      budget: "310 M FCFA",
      quarter: "Ganvié",
      description: "Réfection des structures, des passerelles et des sanitaires.",
      image: "soava-cases",
    },
    {
      id: "collecte",
      title: "Collecte des déchets lagunaires",
      sector: "Environnement",
      status: "En cours",
      progress: 38,
      budget: "220 M FCFA",
      quarter: "Trois arrondissements",
      description: "Points de collecte, pirogues dédiées et filière de traitement à terre.",
      image: "soava-marche",
    },
    {
      id: "solaire",
      title: "Éclairage solaire des débarcadères",
      sector: "Énergie",
      status: "Livré",
      progress: 100,
      budget: "95 M FCFA",
      quarter: "Ganvié et Sô-Ava",
      description: "Mâts autonomes pour sécuriser les déplacements en fin de journée.",
      image: "soava-enfant",
    },
  ],

  budget: {
    year: "2026",
    total: "4,2",
    operating: "2,5",
    investment: "1,7",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Eau et environnement", value: 0.7, pct: 17 },
      { label: "Éducation", value: 0.6, pct: 14 },
      { label: "Mobilité lacustre", value: 0.5, pct: 12 },
      { label: "Action sociale", value: 0.4, pct: 10 },
      { label: "Économie locale", value: 0.4, pct: 10 },
      { label: "Fonctionnement", value: 1.6, pct: 37 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "SA/2026/003", title: "Réhabilitation du débarcadère de Ganvié", type: "Travaux", amount: "238 M FCFA", date: "05/09/2026", status: "Attribué" },
    { ref: "SA/2026/007", title: "Fourniture de pirogues de collecte", type: "Fournitures", amount: "42 M FCFA", date: "30/09/2026", status: "Attribué" },
    { ref: "SA/2026/012", title: "Étude d'impact des déchets lagunaires", type: "Services", amount: "18 M FCFA", date: "28/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,0 Mo", date: "23/01/2026" },
    { title: "Schéma d'assainissement lagunaire — note", type: "PDF", size: "2,4 Mo", date: "18/06/2026" },
    { title: "Compte rendu du conseil — octobre 2026", type: "PDF", size: "520 Ko", date: "27/10/2026" },
  ],

  attractions: [
    { name: "Ganvié", type: "Patrimoine", text: "Le village sur pilotis, fondé selon la tradition orale par des populations fuyant la traite atlantique.", image: "soava-village", distance: "Pirogue", duration: "Demi-journée" },
    { name: "Le marché sur l'eau", type: "Vie locale", text: "Un marché où les pirogues servent d'étals et de moyens de transport.", image: "soava-marche", distance: "Ganvié", duration: "1 h" },
    { name: "Le lac Nokoué", type: "Nature", text: "Un plan d'eau vivant, entre pêche, transport et paysages changeants.", image: "soava-voile", distance: "Toute la commune", duration: "Au fil de l'eau" },
    { name: "Les maisons sur pilotis", type: "Architecture", text: "Un habitat adapté au lac, à découvrir avec respect pour les habitants.", image: "soava-cases", distance: "Ganvié", duration: "45 min" },
  ],

  history: [
    { year: "XVIIIe s.", title: "Un refuge sur l'eau", text: "Selon la tradition orale, Ganvié aurait été fondée par des populations cherchant à échapper aux raids liés à la traite atlantique." },
    { year: "XXe s.", title: "Une vie lacustre organisée", text: "Pêche, commerce et transport structurent les villages autour du lac Nokoué." },
    { year: "Aujourd'hui", title: "Services et pression environnementale", text: "La commune doit concilier accès aux services, préservation du lac et développement du tourisme." },
  ],

  map: {
    terrain: "lagoon",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 46, y: 44, note: "Accueil et services communaux" },
      { name: "Ganvié", type: "tourism", x: 56, y: 56, note: "Village sur pilotis" },
      { name: "Marché sur l'eau", type: "market", x: 60, y: 62, note: "Commerce lacustre" },
      { name: "Débarcadère", type: "mobility", x: 40, y: 60, note: "Accès et transport" },
      { name: "École sur pilotis", type: "education", x: 34, y: 48, note: "École primaire" },
      { name: "Centre de santé", type: "health", x: 50, y: 32, note: "Consultations" },
      { name: "Embarcadère secondaire", type: "mobility", x: 30, y: 66, note: "Liaison entre villages" },
      { name: "Site de collecte", type: "environment", x: 68, y: 44, note: "Collecte des déchets" },
    ],
  },

  gastronomy: [
    { name: "Poisson fumé", text: "Une spécialité des femmes de Ganvié, vendue sur le marché et au-delà du lac." },
    { name: "Akassa et sauce de poisson", text: "Un repas simple, ancré dans la vie quotidienne des villages lacustres." },
    { name: "Crevettes et crabes", text: "Produits du lac, préparés en sauce ou grillés selon les saisons." },
  ],

  economy: {
    text: "Pêche, transformation du poisson, commerce et transport lacustre constituent le socle économique. Le tourisme apporte des revenus complémentaires, à condition d'être organisé avec les habitants.",
    sectors: [
      { name: "Pêche et transformation", share: 34 },
      { name: "Commerce", share: 28 },
      { name: "Transport lacustre", share: 22 },
      { name: "Tourisme", share: 16 },
    ],
  },

  culture: {
    text: "La vie de Sô-Ava est rythmée par l'eau, les marchés et les liens familiaux entre villages. Ganvié possède une mémoire singulière, transmise par les récits et les pratiques quotidiennes.",
    highlights: ["Mémoire de Ganvié", "Chants et récits", "Vannerie", "Cuisine du lac"],
  },

  youth: {
    text: "Les jeunes de la commune apprennent les métiers de l'eau, du tourisme et de la transformation. Les déplacements et l'accès à la formation restent des défis majeurs.",
    programs: ["Guides lacustres juniors", "Formation transformation", "Appels à projets", "Sorties scolaires"],
  },

  contacts: {
    address: "Hôtel de ville, Sô-Ava",
    phone: "+229 21 40 00 00",
    email: "contact@so-ava.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "7 arrondissements",
    quartiers: "Villages et quartiers lacustres",
  },

  mayor: {
    quote: "Notre commune est un archipel. Chaque école, chaque débarcadère, chaque point d'eau relie des villages et des vies.",
    text: "Le mot du maire est un contenu de démonstration. Il rappelle que l'expérience du territoire commence par la mobilité et l'accès aux services.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment se rendre à Ganvié ?", a: "Des pirogues relient les débarcadères de la lagune. Les informations de démonstration sont présentées dans la rubrique Découvrir." },
    { q: "Peut-on visiter le marché sur l'eau ?", a: "Oui, avec un guide local et dans le respect des activités des commerçantes." },
    { q: "Comment signaler un problème de collecte ?", a: "Le formulaire de signalement permet de localiser le point de collecte concerné." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Sô-Ava : Ganvié, lac Nokoué, démarches, tourisme, actualités et projets.",
  },
};

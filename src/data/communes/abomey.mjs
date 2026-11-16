export default {
  slug: "abomey",
  name: "Abomey",
  nameWithDe: "d'Abomey",
  nameWithA: "à Abomey",
  department: "Zou",
  region: "Bénin central",
  motto: "La cité des rois",
  positioning: "Ancienne capitale du royaume du Dahomey, Abomey porte un patrimoine mondial et un artisanat vivant.",

  identity: {
    primary: "#8a3b2a",
    deep: "#61281c",
    accent: "#c9a227",
    soft: "#f2e6dc",
    paper: "#f8f1e7",
    ink: "#211715",
    motif: "pyramid",
  },

  hero: {
    kicker: "Commune d'Abomey · Zou",
    title: "Abomey,",
    titleAccent: "la mémoire d'un royaume",
    lead: "Palais royaux inscrits au patrimoine mondial, bas-reliefs, tissus appliqués : la ville raconte une histoire politique et artistique majeure.",
    image: "abomey-palais",
    ctaPrimary: { label: "Entrer dans la cité", href: "#decouvrir" },
    ctaSecondary: { label: "Services et démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une cité, un héritage vivant",
    text: "Abomey fut le cœur du royaume du Dahomey. Ses palais, ses places et ses ateliers continuent de porter une histoire dont les habitants sont les premiers gardiens.",
    pullquote: "Le patrimoine n'est pas ce qui reste derrière nous : c'est ce que nous choisissons de transmettre.",
    image: "abomey-cour",
    caption: "Dans l'enceinte des palais royaux.",
  },

  stats: [
    { value: "7", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "patrimoine mondial UNESCO", note: "Palais royaux d'Abomey, inscrits en 1985" },
    { value: "2", label: "musées", note: "Donnée de démonstration" },
    { value: "40", suffix: "+", label: "ateliers d'artisans suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "urbanisme", "culture", "economie", "social", "environnement", "foncier", "tourisme"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "bas-reliefs",
      title: "Palais royaux : un atelier pour la conservation des bas-reliefs",
      category: "Patrimoine",
      date: "11 novembre 2026",
      dateISO: "2026-11-11",
      excerpt: "Des artisans et des conservateurs travaillent ensemble à la stabilisation des décors, avec un protocole documenté.",
      image: "abomey-cour",
      featured: true,
    },
    {
      id: "applique",
      title: "Tissu appliqué : une nouvelle génération d'ateliers",
      category: "Artisanat",
      date: "5 novembre 2026",
      dateISO: "2026-11-05",
      excerpt: "Formation, commandes publiques et boutique collective : la filière s'organise pour mieux vivre de son savoir-faire.",
      image: "abomey-artisan",
      featured: false,
    },
    {
      id: "place-goho",
      title: "Place Goho : un nouvel éclairage pour les cérémonies",
      category: "Cadre de vie",
      date: "29 octobre 2026",
      dateISO: "2026-10-29",
      excerpt: "L'aménagement respecte la statuaire et les usages mémoriels du site.",
      image: "abomey-amazone",
      featured: false,
    },
    {
      id: "journees-patrimoine",
      title: "Journées du patrimoine : les écoles invitées aux palais",
      category: "Culture",
      date: "21 octobre 2026",
      dateISO: "2026-10-21",
      excerpt: "Ateliers de médiation, contes et rencontres avec les gardiens du patrimoine.",
      image: "abomey-chefs",
      featured: false,
    },
  ],

  events: [
    {
      id: "conte-palais",
      title: "Contes et mémoire au palais",
      date: "20 novembre 2026",
      dateISO: "2026-11-20",
      time: "17 h",
      place: "Cour des palais royaux",
      category: "Culture",
      description: "Une soirée de récits avec les conteurs et médiateurs du patrimoine.",
      image: "abomey-case",
      free: true,
    },
    {
      id: "marche-artisan",
      title: "Marché des artisans du Zou",
      date: "29 novembre 2026",
      dateISO: "2026-11-29",
      time: "08 h — 18 h",
      place: "Place Goho",
      category: "Artisanat",
      description: "Tissus appliqués, sculpture, poterie et gastronomie locale.",
      image: "abomey-artisan",
      free: true,
    },
    {
      id: "conseil",
      title: "Conseil communal",
      date: "8 décembre 2026",
      dateISO: "2026-12-08",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Patrimoine, voirie et soutien à l'artisanat à l'ordre du jour.",
      image: "abomey-palais",
      free: true,
    },
  ],

  projects: [
    {
      id: "conservation",
      title: "Conservation des bas-reliefs des palais",
      sector: "Patrimoine",
      status: "En cours",
      progress: 63,
      budget: "980 M FCFA",
      quarter: "Palais royaux",
      description: "Relevés, nettoyage contrôlé et protection des décors exposés aux intempéries.",
      image: "abomey-cour",
    },
    {
      id: "maison-artisanat",
      title: "Maison de l'artisanat et du textile",
      sector: "Économie",
      status: "En cours",
      progress: 48,
      budget: "540 M FCFA",
      quarter: "Centre-ville",
      description: "Ateliers partagés, boutique et espace de formation pour les métiers d'art.",
      image: "abomey-artisan",
    },
    {
      id: "parcours-royaume",
      title: "Parcours du royaume",
      sector: "Tourisme",
      status: "En cours",
      progress: 77,
      budget: "260 M FCFA",
      quarter: "Palais — place Goho — marché",
      description: "Signalétique et médiation pour relier les lieux de mémoire au quotidien de la ville.",
      image: "abomey-amazone",
    },
    {
      id: "place-goho-livree",
      title: "Réhabilitation de la place Goho",
      sector: "Cadre de vie",
      status: "Livré",
      progress: 100,
      budget: "190 M FCFA",
      quarter: "Goho",
      description: "Sol, éclairage et assises restaurés dans le respect de la statuaire.",
      image: "abomey-amazone",
    },
  ],

  budget: {
    year: "2026",
    total: "5,4",
    operating: "3,0",
    investment: "2,4",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine", value: 1.0, pct: 19 },
      { label: "Artisanat et économie", value: 0.8, pct: 15 },
      { label: "Voirie", value: 0.7, pct: 13 },
      { label: "Éducation", value: 0.7, pct: 13 },
      { label: "Action sociale", value: 0.5, pct: 9 },
      { label: "Fonctionnement", value: 1.7, pct: 31 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "AB/2026/007", title: "Travaux de protection des bas-reliefs — lot 1", type: "Travaux", amount: "214 M FCFA", date: "16/09/2026", status: "Attribué" },
    { ref: "AB/2026/013", title: "Équipement des ateliers de la maison de l'artisanat", type: "Fournitures", amount: "68 M FCFA", date: "21/10/2026", status: "En évaluation" },
    { ref: "AB/2026/015", title: "Signalétique du parcours du royaume", type: "Fournitures", amount: "32 M FCFA", date: "06/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de gestion du bien UNESCO — synthèse", type: "PDF", size: "4,2 Mo", date: "14/02/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,2 Mo", date: "19/01/2026" },
    { title: "Rapport de la commission artisanat", type: "PDF", size: "830 Ko", date: "12/10/2026" },
  ],

  attractions: [
    { name: "Les Palais royaux", type: "Patrimoine mondial", text: "L'ensemble palatial inscrit à l'UNESCO, mémoire de la royauté dahoméenne.", image: "abomey-palais", distance: "Centre", duration: "1 h 30" },
    { name: "La place Goho", type: "Mémoire", text: "La statue de l'Amazone du Dahomey veille sur une place centrale de la ville.", image: "abomey-amazone", distance: "Centre", duration: "20 min" },
    { name: "Les ateliers de tissu appliqué", type: "Artisanat", text: "Un savoir-faire emblématique, entre récit, couleur et transmission.", image: "abomey-artisan", distance: "Quartiers", duration: "1 h" },
    { name: "Le marché Houndjro", type: "Vie locale", text: "Épices, tissus, poterie et vie quotidienne au cœur de la cité.", image: "benin-marche", distance: "Centre", duration: "45 min" },
  ],

  history: [
    { year: "XVIIe s.", title: "La fondation du royaume", text: "Abomey devient la capitale du royaume du Dahomey, dont l'organisation politique et militaire marque la région." },
    { year: "1894", title: "La fin du royaume indépendant", text: "La conquête coloniale met fin à la dynastie régnante ; les palais demeurent un lieu central de mémoire." },
    { year: "1985", title: "Patrimoine mondial", text: "Les palais royaux d'Abomey sont inscrits au patrimoine mondial de l'UNESCO." },
  ],

  map: {
    terrain: "plateau",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 48, note: "Accueil et services communaux" },
      { name: "Palais royaux", type: "tourism", x: 56, y: 41, note: "Patrimoine mondial UNESCO" },
      { name: "Place Goho", type: "tourism", x: 40, y: 60, note: "Statue de l'Amazone et espace public" },
      { name: "Marché Houndjro", type: "market", x: 62, y: 58, note: "Marché central" },
      { name: "Musée", type: "culture", x: 52, y: 35, note: "Collections royales" },
      { name: "Hôpital de zone", type: "health", x: 34, y: 40, note: "Urgences et consultations" },
      { name: "École publique", type: "education", x: 28, y: 56, note: "École primaire" },
      { name: "Ateliers d'artisans", type: "economy", x: 58, y: 65, note: "Tissu appliqué et sculpture" },
    ],
  },

  gastronomy: [
    { name: "Amiwo", text: "Pâte rouge de maïs, souvent servie avec du poisson frit et une sauce tomate." },
    { name: "Wagasi", text: "Fromage grillé du nord, désormais présent dans les marchés du Zou." },
    { name: "Akassa", text: "Pâte de maïs fermentée, base de nombreux repas familiaux." },
  ],

  economy: {
    text: "Le patrimoine, l'artisanat textile et le commerce structurent l'économie d'Abomey. La commune soutient les ateliers et cherche à mieux répartir les retombées du tourisme.",
    sectors: [
      { name: "Commerce", share: 30 },
      { name: "Artisanat et textile", share: 28 },
      { name: "Tourisme et culture", share: 22 },
      { name: "Services et administration", share: 20 },
    ],
  },

  culture: {
    text: "Abomey est une ville de récits, de gestes et de couleurs. Le tissu appliqué, la statuaire, les contes et les cérémonies continuent d'irriguer la vie culturelle.",
    highlights: ["Tissu appliqué", "Bas-reliefs et statuaire", "Contes et traditions orales", "Cérémonies vodoun"],
  },

  youth: {
    text: "Les jeunes d'Abomey s'engagent dans la culture, le sport et l'artisanat. La commune développe des parcours de formation avec les ateliers existants.",
    programs: ["Apprentissage du textile", "Médiation patrimoine", "Espaces sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Abomey",
    phone: "+229 22 50 00 00",
    email: "contact@abomey.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "7 arrondissements",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote: "Notre patrimoine est une responsabilité collective. Le préserver, c'est aussi créer des emplois et transmettre un savoir-faire aux jeunes.",
    text: "Le mot du maire est un contenu de démonstration. Il relie la politique patrimoniale à la vie économique et sociale de la commune.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment réserver une visite des palais ?", a: "Les visites de démonstration se réservent via la rubrique Tourisme. Les conditions réelles doivent être vérifiées auprès des sites." },
    { q: "Où trouver les artisans du tissu appliqué ?", a: "La carte interactive et la rubrique Découvrir présentent des ateliers de démonstration." },
    { q: "Le stationnement est-il organisé près des palais ?", a: "Des points de stationnement de démonstration sont indiqués sur la carte." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Abomey : patrimoine mondial, artisanat, démarches, actualités et projets.",
  },
};

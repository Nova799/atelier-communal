export default {
  slug: "grand-popo",
  name: "Grand-Popo",
  nameWithDe: "de Grand-Popo",
  nameWithA: "à Grand-Popo",
  department: "Mono",
  region: "Bénin méridional",
  motto: "Là où le Mono rejoint l'Atlantique",
  positioning:
    "Commune littorale du Mono, Grand-Popo vit entre l'océan, la lagune et l'embouchure du fleuve. Ancien lieu de comptoirs, elle conjugue mémoire, pêche et tourisme balnéaire.",

  identity: {
    primary: "#1d5c73",
    deep: "#123c4d",
    accent: "#e0a75a",
    soft: "#e3eff2",
    paper: "#f7f0e2",
    ink: "#121c20",
    motif: "waves",
  },

  hero: {
    kicker: "Commune de Grand-Popo · Mono",
    title: "Grand-Popo,",
    titleAccent: "le fleuve, la lagune et l'océan",
    lead: "Sable, cocotiers et pirogues : une commune côtière où l'eau dessine les modes de vie et rappelle une histoire de comptoirs et de traversées.",
    image: "grand-popo-ville",
    ctaPrimary: { label: "Découvrir la côte", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer sa visite", href: "#tourisme" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune entre deux eaux",
    text: "À Grand-Popo, le Mono se jette dans l'Atlantique et forme une lagune qui structure les villages. La pêche, le maraîchage et le tourisme y cohabitent avec une mémoire de la traite atlantique que la commune souhaite transmettre sans la folkloriser.",
    pullquote:
      "Le littoral n'est pas une carte postale : c'est un lieu de travail, de mémoire et de vulnérabilité.",
    image: "grand-popo-site",
    caption: "Le ponton de Grand-Popo, entre lagune et océan.",
  },

  stats: [
    { value: "1", label: "embouchure du Mono", note: "Lagune et océan" },
    { value: "1", label: "front de mer", note: "Tourisme et pêche" },
    { value: "4", label: "villages côtiers", note: "Maillage littoral" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "tourisme", "environnement", "agriculture", "marche", "urbanisme", "culture", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "erosion",
      title: "Lutte contre l'érosion : un cordon dunaire replanté",
      category: "Environnement",
      date: "11 novembre 2026",
      dateISO: "2026-11-11",
      excerpt: "Cocotiers et végétation de dune sont replantés sur trois secteurs du front de mer.",
      image: "grand-popo-site",
      featured: true,
    },
    {
      id: "plage-propre",
      title: "La plage nettoie ses plastiques avant la saison",
      category: "Environnement",
      date: "2 novembre 2026",
      dateISO: "2026-11-02",
      excerpt: "Pêcheurs, hôteliers et écoles participent à une collecte coordonnée par la commune.",
      image: "grand-popo-ville",
      featured: false,
    },
    {
      id: "memoire",
      title: "Un parcours de mémoire sur les anciens comptoirs",
      category: "Patrimoine",
      date: "23 octobre 2026",
      dateISO: "2026-10-23",
      excerpt: "Signalétique et recherches documentaires pour comprendre l'histoire du littoral.",
      image: "grand-popo-site",
      featured: false,
    },
    {
      id: "peche",
      title: "Pêche : des caisses isothermes pour les femmes transformatrices",
      category: "Économie",
      date: "14 octobre 2026",
      dateISO: "2026-10-14",
      excerpt: "Un équipement de démonstration pour réduire les pertes après la sortie en mer.",
      image: "benin-poissonniere",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-gpopo",
      title: "Conseil communal",
      date: "5 décembre 2026",
      dateISO: "2026-12-05",
      time: "10 h",
      place: "Hôtel de ville, Grand-Popo",
      category: "Institution",
      description: "Budget, littoral et tourisme : session ouverte au public.",
      image: "grand-popo-ville",
      free: true,
    },
    {
      id: "fete-eau",
      title: "Fête de l'eau et des pirogues",
      date: "19 décembre 2026",
      dateISO: "2026-12-19",
      time: "Toute la journée",
      place: "Embarcadère, Grand-Popo",
      category: "Culture",
      description: "Courses de pirogues, musique et repas de poisson sur le front de mer.",
      image: "grand-popo-ville",
      free: true,
    },
    {
      id: "visite-memoire",
      title: "Visite : comptoirs et traversées",
      date: "9 janvier 2027",
      dateISO: "2027-01-09",
      time: "09 h",
      place: "Départ : place du village",
      category: "Patrimoine",
      description: "Parcours commenté entre les anciens comptoirs et le rivage.",
      image: "grand-popo-site",
      free: false,
    },
  ],

  projects: [
    {
      id: "dune",
      title: "Restauration du cordon dunaire",
      sector: "Environnement",
      status: "En cours",
      progress: 52,
      budget: "280 M FCFA",
      quarter: "Front de mer",
      description: "Plantations, ganivelles et retrait des constructions précaires.",
      image: "grand-popo-ville",
    },
    {
      id: "embarcadere",
      title: "Réaménagement de l'embarcadère",
      sector: "Mobilité",
      status: "En cours",
      progress: 71,
      budget: "340 M FCFA",
      quarter: "Lagune",
      description: "Ponton, abri, gilets de sauvetage et accès pour les pirogues.",
      image: "grand-popo-site",
    },
    {
      id: "marche",
      title: "Halle des produits de la mer",
      sector: "Économie",
      status: "Étude",
      progress: 25,
      budget: "210 M FCFA",
      quarter: "Centre",
      description: "Vente, glace et transformation du poisson dans un espace ombragé.",
      image: "benin-marche",
    },
    {
      id: "ecole",
      title: "Réhabilitation de l'école de plage",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "120 M FCFA",
      quarter: "Village côtier",
      description: "Toiture, classes et latrines pour l'école primaire.",
      image: "grand-popo-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "3,6",
    operating: "2,1",
    investment: "1,5",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Littoral et environnement", value: 0.6, pct: 17 },
      { label: "Tourisme et patrimoine", value: 0.4, pct: 11 },
      { label: "Économie de la pêche", value: 0.4, pct: 11 },
      { label: "Voirie", value: 0.4, pct: 11 },
      { label: "Action sociale", value: 0.4, pct: 11 },
      { label: "Fonctionnement", value: 1.4, pct: 39 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "GP/2026/003", title: "Plantations et protection du cordon dunaire", type: "Travaux", amount: "148 M FCFA", date: "14/07/2026", status: "Attribué" },
    { ref: "GP/2026/007", title: "Fourniture de gilets et de matériel de sécurité", type: "Fournitures", amount: "19 M FCFA", date: "28/09/2026", status: "Attribué" },
    { ref: "GP/2026/010", title: "Étude de la halle aux poissons", type: "Services", amount: "12 M FCFA", date: "20/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de gestion du littoral", type: "PDF", size: "7,2 Mo", date: "16/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,8 Mo", date: "25/01/2026" },
    { title: "Guide de la mémoire des comptoirs", type: "PDF", size: "3,1 Mo", date: "30/08/2026" },
  ],

  attractions: [
    { name: "La plage de Grand-Popo", type: "Nature", text: "Un front de mer ouvert, bordé de cocotiers, où travaillent pêcheurs et restauratrices.", image: "grand-popo-ville", distance: "Front de mer", duration: "Libre" },
    { name: "L'embouchure du Mono", type: "Paysage", text: "Le fleuve rencontre l'Atlantique, entre lagune, mangroves et pirogues.", image: "grand-popo-site", distance: "Embouchure", duration: "1 h" },
    { name: "Le village d'Agoué", type: "Vie locale", text: "Un village côtier marqué par l'histoire des comptoirs et les échanges avec le Togo.", image: "grand-popo-paysage", distance: "Ouest", duration: "1 h" },
    { name: "Les anciens comptoirs", type: "Mémoire", text: "Des traces discrètes de l'histoire commerciale et de la traite atlantique sur le littoral.", image: "grand-popo-paysage", distance: "Côte", duration: "45 min" },
  ],

  history: [
    { year: "XVIe — XVIIIe s.", title: "Des comptoirs sur la côte", text: "Le littoral de Grand-Popo accueille des comptoirs européens et devient un lieu d'échanges, y compris de la traite atlantique." },
    { year: "XXe s.", title: "Pêche et tourisme", text: "La commune se tourne vers la pêche, le maraîchage et l'accueil de visiteurs." },
    { year: "Aujourd'hui", title: "Un littoral à protéger", text: "L'érosion côtière et la pression touristique imposent d'articuler développement et protection des milieux." },
  ],

  map: {
    terrain: "coast",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 46, y: 46, note: "Accueil et services communaux" },
      { name: "Plage", type: "nature", x: 54, y: 78, note: "Front de mer" },
      { name: "Embouchure du Mono", type: "water", x: 36, y: 84, note: "Fleuve et océan" },
      { name: "Embarcadère", type: "mobility", x: 42, y: 66, note: "Pirogues et lagune" },
      { name: "Marché central", type: "market", x: 52, y: 40, note: "Produits de la mer et vivriers" },
      { name: "Village d'Agoué", type: "tourism", x: 24, y: 60, note: "Village côtier" },
      { name: "Centre de santé", type: "health", x: 58, y: 52, note: "Soins de proximité" },
      { name: "Zone dunaire", type: "environment", x: 64, y: 70, note: "Cordon à protéger" },
    ],
  },

  gastronomy: [
    { name: "Poisson braisé", text: "Grillé au feu de bois, servi avec de l'attiéké ou du riz." },
    { name: "Ragoût de poisson", text: "Poisson frais mijoté avec tomate, oignon et piment." },
    { name: "Crevettes", text: "Pêchées en lagune et vendues fraîches ou fumées sur le marché." },
  ],

  economy: {
    text: "La pêche, la transformation du poisson, le maraîchage et le tourisme structurent l'économie. Le sel et l'artisanat complètent les revenus. La commune cherche à mieux organiser l'accueil des visiteurs et à réduire la pression sur le littoral.",
    sectors: [
      { name: "Pêche et transformation", share: 38 },
      { name: "Tourisme et restauration", share: 24 },
      { name: "Agriculture et maraîchage", share: 22 },
      { name: "Commerce et artisanat", share: 16 },
    ],
  },

  culture: {
    text: "Les cultures vodoun, les chants de pêcheurs et les fêtes de l'eau rythment la vie du littoral. La commune soutient les groupes qui transmettent ces pratiques aux jeunes.",
    highlights: ["Cultures vodoun", "Chants de pêcheurs", "Fêtes de l'eau", "Pirogues"],
  },

  youth: {
    text: "La jeunesse est partagée entre la pêche, le tourisme et la migration vers Cotonou. Les programmes de démonstration visent la formation aux métiers de l'accueil et la sécurité en mer.",
    programs: ["Formation aux métiers du tourisme", "Sécurité en mer", "Clubs de plage", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Grand-Popo",
    phone: "+229 22 00 00 00",
    email: "contact@grand-popo.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Villages et quartiers",
  },

  mayor: {
    quote:
      "Nous vivons d'un littoral fragile. Chaque décision doit se demander ce qu'elle laisse aux pêcheurs, aux jeunes et à la dune qui nous protège.",
    text: "Le mot du maire est un contenu de démonstration. Il relie développement touristique et protection du littoral.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Où se baigner en sécurité ?", a: "La commune ne garantit aucune baignade ; la page Tourisme de démonstration rappelle les consignes de prudence." },
    { q: "Comment réserver une pirogue ?", a: "Les prestataires de démonstration sont listés dans la rubrique Tourisme." },
    { q: "Comment signaler une décharge sur la plage ?", a: "Le formulaire de signalement permet de localiser le point et de joindre une description." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Grand-Popo : plage, embouchure du Mono, pêche, mémoire des comptoirs, démarches et projets.",
  },
};

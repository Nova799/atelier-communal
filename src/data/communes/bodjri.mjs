export default {
  slug: "bodjri",
  name: "Bodjrì",
  nameWithDe: "de Cotonou",
  nameWithA: "à Cotonou",
  department: "Collines",
  region: "Bénin central",
  motto: "Terres",
  positioning: "Capitale économique, port, marchés et lagune : une commune qui travaille et se transforme.",

  identity: {
    primary: "#5a5a3a",
    deep: "#3a352a",
    accent: "#d99a2b",
    soft: "#fdf6f8",
    paper: "#faf4ec",
    ink: "#353520",
    motif: "waves",
  },

  hero: {
    kicker: "Commune de Cotonou · Littoral",
    title: "Cotonou,",
    titleAccent: "l'élan d'une ville-monde",
    lead: "Marchés, port, lagune et quartiers : une ville qui travaille et qui se transforme. Retrouvez vos démarches, les projets et la vie de la commune.",
    image: "cotonou-boulevard",
    ctaPrimary: { label: "Découvrir la commune", href: "#decouvrir" },
    ctaSecondary: { label: "Services aux citoyens", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune, mille rythmes",
    text: "De Dantokpa aux berges de la lagune, Cotonou concentre une part essentielle de l'activité du pays. La commune accompagne ce dynamisme avec des services de proximité, des projets structurants et une attention nouvelle portée à la transparence.",
    pullquote: "Une ville ne se raconte pas seulement par ses grands projets : elle se raconte par ses marchés, ses rues et ses habitants.",
    image: "cotonou-lagune",
    caption: "Le front de lagune, entre ville et eau.",
  },

  stats: [
    { value: "13", label: "arrondissements", note: "Découpage administratif" },
    { value: "12", suffix: "", label: "démarches en ligne", note: "Donnée de démonstration" },
    { value: "38", label: "projets suivis", note: "Donnée de démonstration" },
    { value: "72", suffix: "%", label: "déchets collectés", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "urbanisme", "taxes", "environnement", "economie", "marche", "social", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "dantokpa-phase-2",
      title: "Marché Dantokpa : la phase 2 des travaux entre en chantier",
      category: "Cadre de vie",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Allées couvertes, assainissement et accès pompiers : le réaménagement se poursuit avec une attention particulière portée aux commerçantes.",
      image: "cotonou-passerelle",
      featured: true,
    },
    {
      id: "maison-associations",
      title: "La maison des associations ouvre dans le quartier Sainte-Rita",
      category: "Vie locale",
      date: "8 novembre 2026",
      dateISO: "2026-11-08",
      excerpt: "Un lieu partagé pour les associations de jeunesse, de sport et de solidarité, avec salles de réunion et accompagnement administratif.",
      image: "cotonou-portage",
      featured: false,
    },
    {
      id: "salubrite",
      title: "Salubrité : une campagne de proximité dans les 13 arrondissements",
      category: "Environnement",
      date: "3 novembre 2026",
      dateISO: "2026-11-03",
      excerpt: "Collecte renforcée, points de dépôt identifiés et sensibilisation dans les marchés : la commune coordonne l'effort avec les comités de quartier.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "budget-participatif",
      title: "Budget participatif : les lauréats de l'édition 2026",
      category: "Transparence",
      date: "28 octobre 2026",
      dateISO: "2026-10-28",
      excerpt: "Douze projets proposés par des habitants seront accompagnés par la commune, du diagnostic à la mise en œuvre.",
      image: "cotonou-lagune",
      featured: false,
    },
  ],

  events: [
    {
      id: "forum-lagune",
      title: "Forum des métiers de la lagune",
      date: "22 novembre 2026",
      dateISO: "2026-11-22",
      time: "09 h — 17 h",
      place: "Maison des associations, Sainte-Rita",
      category: "Économie",
      description: "Rencontres entre pêcheurs, transformatrices, transporteurs et porteurs de projets autour de la filière lagunaire.",
      image: "cotonou-lagune",
      free: true,
    },
    {
      id: "conseil-communal",
      title: "Session ordinaire du conseil communal",
      date: "27 novembre 2026",
      dateISO: "2026-11-27",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Ordre du jour public : budget, voirie et conventions de partenariat. Accès sur inscription.",
      image: "cotonou-boulevard",
      free: true,
    },
    {
      id: "cotonou-clean",
      title: "Cotonou Clean Day",
      date: "5 décembre 2026",
      dateISO: "2026-12-05",
      time: "07 h — 12 h",
      place: "Départ : place de la passerelle",
      category: "Environnement",
      description: "Une matinée de nettoyage collective avec les écoles, les associations et les comités de quartier.",
      image: "cotonou-passerelle",
      free: true,
    },
  ],

  projects: [
    {
      id: "dantokpa",
      title: "Réhabilitation du marché Dantokpa",
      sector: "Marchés",
      status: "En cours",
      progress: 72,
      budget: "2,4 Md FCFA",
      quarter: "Dantokpa · 6e arrondissement",
      description: "Réfection des allées, drainage des eaux pluviales et création de points d'eau et de sanitaires.",
      image: "cotonou-passerelle",
    },
    {
      id: "contournement",
      title: "Aménagement de la voie de contournement Est",
      sector: "Voirie",
      status: "En cours",
      progress: 54,
      budget: "3,1 Md FCFA",
      quarter: "Sèmè · Akpakpa",
      description: "Une liaison nouvelle pour réduire la circulation de transit et sécuriser les traversées de quartier.",
      image: "cotonou-axe",
    },
    {
      id: "eclairage",
      title: "Éclairage solaire des quartiers",
      sector: "Énergie",
      status: "En cours",
      progress: 88,
      budget: "740 M FCFA",
      quarter: "9 quartiers prioritaires",
      description: "Installation de mâts solaires autonomes dans les axes piétonniers et les abords des marchés.",
      image: "cotonou-boulevard",
    },
    {
      id: "maison-associations",
      title: "Maison des associations",
      sector: "Équipements",
      status: "Livré",
      progress: 100,
      budget: "318 M FCFA",
      quarter: "Sainte-Rita",
      description: "Un équipement de proximité pour les associations et les initiatives de jeunesse.",
      image: "cotonou-portage",
    },
  ],

  budget: {
    year: "2026",
    total: "12,4",
    operating: "6,1",
    investment: "6,3",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 2.8, pct: 22 },
      { label: "Cadre de vie et déchets", value: 2.1, pct: 17 },
      { label: "Éducation et jeunesse", value: 1.7, pct: 14 },
      { label: "Santé et action sociale", value: 1.4, pct: 11 },
      { label: "Marchés et économie", value: 1.3, pct: 10 },
      { label: "Fonctionnement", value: 3.1, pct: 26 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "DC/2026/014", title: "Travaux de drainage du marché Dantokpa — lot 2", type: "Travaux", amount: "412 M FCFA", date: "18/10/2026", status: "Attribué" },
    { ref: "DC/2026/017", title: "Fourniture de bacs à ordures et supports de tri", type: "Fournitures", amount: "86 M FCFA", date: "05/11/2026", status: "En évaluation" },
    { ref: "DC/2026/021", title: "Maîtrise d'œuvre pour l'éclairage solaire", type: "Services", amount: "34 M FCFA", date: "12/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,8 Mo", date: "15/01/2026" },
    { title: "Compte rendu du conseil communal — septembre 2026", type: "PDF", size: "640 Ko", date: "02/10/2026" },
    { title: "Plan d'action de la mandature — version de travail", type: "PDF", size: "3,2 Mo", date: "20/06/2026" },
    { title: "Rapport annuel de la commission environnement", type: "PDF", size: "980 Ko", date: "30/09/2026" },
  ],

  attractions: [
    { name: "Le marché Dantokpa", type: "Économie", text: "L'un des plus grands marchés d'Afrique de l'Ouest, cœur battant du commerce cotonois.", image: "cotonou-passerelle", distance: "Centre-ville", duration: "1 h 30" },
    { name: "Le front de lagune", type: "Nature", text: "Berges, débarcadères et lumières du soir : une autre lecture de la ville.", image: "cotonou-lagune", distance: "Centre", duration: "1 h" },
    { name: "Ganvié, à proximité", type: "Patrimoine", text: "Le célèbre village sur pilotis se rejoint depuis les débarcadères de la lagune.", image: "soava-voile", distance: "30 min de pirogue", duration: "Demi-journée" },
    { name: "La ville à moto", type: "Mobilité", text: "Zémidjans et traversées de quartiers : la ville se découvre aussi dans ses flux.", image: "cotonou-moto", distance: "Partout", duration: "Au fil des envies" },
  ],

  history: [
    { year: "XIXe s.", title: "Un village devenu comptoir", text: "Cotonou se développe autour de son lagune et de son débouché maritime, au carrefour des échanges du golfe de Guinée." },
    { year: "1960", title: "La capitale économique", text: "À l'indépendance, Cotonou s'affirme comme le centre économique du Bénin, port et marché du pays." },
    { year: "Aujourd'hui", title: "Une métropole en transition", text: "Décentralisation, grands travaux et pression urbaine : la commune doit concilier attractivité, équité et qualité de vie." },
  ],

  map: {
    terrain: "lagoon",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 50, y: 44, note: "Accueil, état civil, cabinet du maire" },
      { name: "Marché Dantokpa", type: "market", x: 57, y: 51, note: "Commerce, artisanat, services de proximité" },
      { name: "Port de Cotonou", type: "economy", x: 70, y: 59, note: "Plateforme portuaire et logistique" },
      { name: "Hôpital de zone", type: "health", x: 43, y: 36, note: "Urgences et consultations" },
      { name: "Université", type: "education", x: 36, y: 31, note: "Campus et vie étudiante" },
      { name: "Gare routière", type: "mobility", x: 61, y: 38, note: "Départs interurbains" },
      { name: "Plage de Fidjrossè", type: "tourism", x: 23, y: 71, note: "Front de mer et loisirs" },
      { name: "Débarcadère de Ganvié", type: "tourism", x: 31, y: 22, note: "Liaison lagunaire" },
    ],
  },

  gastronomy: [
    { name: "Amiwo", text: "Pâte de maïs rouge accompagnée de poisson ou de viande, plat emblématique des familles cotonoises." },
    { name: "Akassa", text: "Pâte fermentée de maïs, servie avec des sauces de tomate, de poisson ou de légumes." },
    { name: "Poisson braisé", text: "Tilapia ou capitaine grillé, épices locales et attiéké : la convivialité des soirs de lagune." },
  ],

  economy: {
    text: "Port, commerce, transport, artisanat et services : l'économie cotonoise repose sur une diversité rare, portée par une population jeune et mobile.",
    sectors: [
      { name: "Commerce et marchés", share: 34 },
      { name: "Transport et logistique", share: 24 },
      { name: "Services et numérique", share: 21 },
      { name: "Artisanat et industrie", share: 21 },
    ],
  },

  culture: {
    text: "De la musique aux arts de la rue, Cotonou est une scène permanente. La commune soutient les lieux de répétition, les festivals et les initiatives de quartier.",
    highlights: ["Scènes musicales et afrobeat", "Arts visuels et galeries", "Festivals de quartier", "Cuisine de rue"],
  },

  youth: {
    text: "La jeunesse représente une force vive de la commune. Maison des associations, ateliers numériques et appels à projets offrent des espaces pour passer de l'idée à l'action.",
    programs: ["Ateliers numériques", "Bourses d'initiatives", "Espaces jeunes", "Service civique communal"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Cotonou",
    phone: "+229 21 00 00 00",
    email: "contact@cotonou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "13 arrondissements",
    quartiers: "Quartiers administratifs et villages",
  },

  mayor: {
    quote: "Cotonou avance quand chacun peut comprendre ce qui se décide, suivre les projets et trouver le bon guichet.",
    text: "Le mot du maire est un contenu de démonstration. Il montre comment la parole institutionnelle peut trouver sa place sans écraser l'information pratique.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir un acte de naissance ?", a: "Présentez une pièce d'identité et la référence de l'acte au service d'état civil, ou utilisez la démarche en ligne de démonstration." },
    { q: "Où signaler un dépôt sauvage ?", a: "Utilisez le formulaire de signalement : localisation, description et photo facultative. Un accusé de réception est affiché immédiatement." },
    { q: "Les documents budgétaires sont-ils publics ?", a: "Oui, les synthèses et rapports de démonstration sont consultables dans la rubrique Transparence." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Cotonou : démarches, actualités, projets, agenda, transparence et découverte du territoire.",
  },
};

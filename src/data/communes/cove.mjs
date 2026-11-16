export default {
  slug: "cove",
  name: "Covè",
  nameWithDe: "de Covè",
  nameWithA: "à Covè",
  department: "Zou",
  region: "Bénin central",
  motto: "Aux portes des Collines",
  positioning:
    "À une quarantaine de kilomètres d'Abomey, Covè ouvre sur les premières collines du centre du Bénin. Commune agricole et commerçante, elle vit au rythme de ses marchés et de ses palmeraies.",

  identity: {
    primary: "#556b2f",
    deep: "#39481f",
    accent: "#c9743a",
    soft: "#ecefe0",
    paper: "#f7f3e6",
    ink: "#191d14",
    motif: "pyramid",
  },

  hero: {
    kicker: "Commune de Covè · Zou",
    title: "Covè,",
    titleAccent: "la campagne avant les collines",
    lead: "Palmeraies, champs de maïs, marchés de village : Covè cultive un territoire rural à quelques heures des grandes villes du sud.",
    image: "cove-ville",
    ctaPrimary: { label: "Découvrir Covè", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune qui nourrit",
    text: "Covè appartient à ces communes du Zou qui font vivre les villes voisines. Ses huit arrondissements abritent des exploitations familiales, des marchés hebdomadaires et un artisanat discret, souvent invisibles dans les récits sur le Bénin.",
    pullquote:
      "La richesse d'une commune ne se mesure pas seulement à ses routes : elle se voit aussi dans la qualité de ses sols et la dignité de ceux qui les travaillent.",
    image: "cove-site",
    caption: "Le Zou et ses berges, dans la commune de Covè.",
  },

  stats: [
    { value: "8", label: "arrondissements", note: "Découpage administratif" },
    { value: "40", label: "km d'Abomey", note: "Accès routier" },
    { value: "1", label: "marché central", note: "Rendez-vous hebdomadaire" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["agriculture", "marche", "acte-naissance", "foncier", "environnement", "economie", "culture", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "palmeraie",
      title: "Palmeraies : un appui aux producteurs d'huile",
      category: "Agriculture",
      date: "10 novembre 2026",
      dateISO: "2026-11-10",
      excerpt: "Formation à la taille, au pressage et au conditionnement pour trois groupements de Covè.",
      image: "cove-vie",
      featured: true,
    },
    {
      id: "marche-cove",
      title: "Le marché de Covè s'équipe d'un point d'eau",
      category: "Économie",
      date: "1er novembre 2026",
      dateISO: "2026-11-01",
      excerpt: "Un forage et deux robinets desservent désormais les étals de produits frais.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "pistes",
      title: "Deux pistes agricoles ouvertes avant les récoltes",
      category: "Voirie",
      date: "21 octobre 2026",
      dateISO: "2026-10-21",
      excerpt: "Les travaux de démonstration désenclavent deux villages du nord de la commune.",
      image: "benin-piste",
      featured: false,
    },
    {
      id: "poterie",
      title: "Un atelier de poterie rassemble les artisanes",
      category: "Culture",
      date: "12 octobre 2026",
      dateISO: "2026-10-12",
      excerpt: "Une initiative de démonstration pour transmettre les gestes et améliorer les conditions de vente.",
      image: "benin-marche-femmes",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-cove",
      title: "Conseil communal",
      date: "1er décembre 2026",
      dateISO: "2026-12-01",
      time: "10 h",
      place: "Hôtel de ville, Covè",
      category: "Institution",
      description: "Budget, agriculture et pistes rurales : session ouverte au public.",
      image: "cove-ville",
      free: true,
    },
    {
      id: "foire-agricole",
      title: "Foire aux produits du terroir",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "08 h — 18 h",
      place: "Esplanade du marché",
      category: "Agriculture",
      description: "Huile de palme, maïs, arachide et artisanat local en vente directe.",
      image: "cove-paysage",
      free: true,
    },
    {
      id: "nuit-contes",
      title: "Nuit des contes",
      date: "9 janvier 2027",
      dateISO: "2027-01-09",
      time: "19 h",
      place: "Maison des jeunes",
      category: "Culture",
      description: "Veillée de récits et de musique avec les associations du territoire.",
      image: "cove-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "pistes",
      title: "Désenclavement de deux villages",
      sector: "Voirie",
      status: "En cours",
      progress: 66,
      budget: "640 M FCFA",
      quarter: "Nord de la commune",
      description: "Pistes en terre stabilisée et ouvrages de franchissement des bas-fonds.",
      image: "benin-piste",
    },
    {
      id: "huilerie",
      title: "Huilerie coopérative de Covè",
      sector: "Agriculture",
      status: "En cours",
      progress: 38,
      budget: "290 M FCFA",
      quarter: "Zone agricole",
      description: "Pressage, filtration et conditionnement de l'huile de palme.",
      image: "cove-vie",
    },
    {
      id: "marche",
      title: "Couverture du marché central",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "180 M FCFA",
      quarter: "Centre-ville",
      description: "Deux hangars et un point d'eau pour les vendeuses de produits frais.",
      image: "benin-marche",
    },
    {
      id: "ecole",
      title: "Réhabilitation de trois écoles primaires",
      sector: "Éducation",
      status: "En cours",
      progress: 74,
      budget: "210 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Toitures, latrines et mobilier pour les classes du primaire.",
      image: "cove-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "4,1",
    operating: "2,4",
    investment: "1,7",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Agriculture et pistes", value: 0.8, pct: 20 },
      { label: "Éducation", value: 0.5, pct: 12 },
      { label: "Marchés et économie", value: 0.4, pct: 10 },
      { label: "Environnement", value: 0.3, pct: 7 },
      { label: "Action sociale", value: 0.5, pct: 12 },
      { label: "Fonctionnement", value: 1.6, pct: 39 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "CV/2026/004", title: "Réhabilitation de pistes agricoles", type: "Travaux", amount: "336 M FCFA", date: "21/07/2026", status: "Attribué" },
    { ref: "CV/2026/009", title: "Équipement de l'huilerie coopérative", type: "Fournitures", amount: "94 M FCFA", date: "02/10/2026", status: "Attribué" },
    { ref: "CV/2026/012", title: "Fourniture de mobilier scolaire", type: "Fournitures", amount: "18 M FCFA", date: "29/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement agricole 2026-2030", type: "PDF", size: "4,8 Mo", date: "14/05/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,9 Mo", date: "27/01/2026" },
    { title: "Programme de réhabilitation des écoles", type: "PDF", size: "2,3 Mo", date: "08/09/2026" },
  ],

  attractions: [
    { name: "Le marché central de Covè", type: "Vie locale", text: "Produits agricoles, huile de palme et petit artisanat, au rythme des jours de marché.", image: "benin-marche", distance: "Centre", duration: "45 min" },
    { name: "Les palmeraies", type: "Territoire", text: "Un paysage productif qui structure l'économie et l'alimentation locales.", image: "cove-vie", distance: "Zone agricole", duration: "1 h" },
    { name: "Les rives du Zou", type: "Nature", text: "Un fleuve lent et ses berges cultivées, entre palmeraies et bas-fonds.", image: "cove-site", distance: "Périphérie", duration: "1 h" },
    { name: "Les bas-fonds du Nankava", type: "Paysage", text: "Les premiers reliefs annoncent les Collines et offrent des points de vue sur la campagne.", image: "cove-paysage", distance: "Nord", duration: "Demi-journée" },
  ],

  history: [
    { year: "XIXe s.", title: "Un pays de palmeraies", text: "Le territoire se structure autour de l'exploitation du palmier à huile et des échanges avec Abomey." },
    { year: "1991", title: "Une commune administrative", text: "Covè devient sous-préfecture et affirme son rôle de centre administratif local." },
    { year: "Aujourd'hui", title: "Produire et transmettre", text: "La commune cherche à moderniser la transformation agricole tout en préservant les savoir-faire familiaux." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 42, note: "Accueil et services communaux" },
      { name: "Marché central", type: "market", x: 42, y: 50, note: "Commerce hebdomadaire" },
      { name: "Huilerie", type: "economy", x: 62, y: 56, note: "Transformation du palmier" },
      { name: "Zone agricole", type: "nature", x: 70, y: 34, note: "Champs et palmeraies" },
      { name: "Centre de santé", type: "health", x: 54, y: 58, note: "Soins de proximité" },
      { name: "Collège", type: "education", x: 36, y: 34, note: "Enseignement secondaire" },
      { name: "Bas-fond", type: "water", x: 28, y: 62, note: "Maraîchage et eau" },
      { name: "Gare routière", type: "mobility", x: 58, y: 44, note: "Départs vers Abomey" },
    ],
  },

  gastronomy: [
    { name: "Sauce d'arachide", text: "Servie avec du riz ou de l'igname, elle accompagne les repas de famille." },
    { name: "Huile de palme", text: "Produite localement, elle colore et parfume les sauces du Zou." },
    { name: "Maïs grillé", text: "Épi grillé ou bouilli, en-cas des marchés et des routes." },
  ],

  economy: {
    text: "Covè repose sur l'agriculture familiale, la transformation du palmier à huile et le commerce de marché. L'élevage de petite taille et l'artisanat complètent les revenus. La commune veut améliorer le stockage et la transformation pour réduire les pertes.",
    sectors: [
      { name: "Agriculture", share: 48 },
      { name: "Transformation et artisanat", share: 20 },
      { name: "Commerce", share: 18 },
      { name: "Services et transport", share: 14 },
    ],
  },

  culture: {
    text: "La vie culturelle s'organise autour des marchés, des fêtes de récolte et des veillées de contes. Les associations de femmes jouent un rôle central dans la transmission des savoir-faire.",
    highlights: ["Fêtes de récolte", "Contes et veillées", "Poterie", "Groupements féminins"],
  },

  youth: {
    text: "La jeunesse est confrontée à l'accès à la terre et à l'emploi. Les programmes de démonstration privilégient la formation agricole, l'entrepreneuriat rural et les équipements sportifs.",
    programs: ["Formation agricole", "Entrepreneuriat rural", "Clubs de jeunes", "Tournois de quartier"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Covè",
    phone: "+229 22 00 00 00",
    email: "contact@cove.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "8 arrondissements",
    quartiers: "Villages et quartiers",
  },

  mayor: {
    quote:
      "Covè nourrit les villes voisines. Notre priorité est de donner aux producteurs des routes, de l'eau et des outils pour transformer sur place, plutôt que de vendre brut et d'acheter transformé.",
    text: "Le mot du maire est un contenu de démonstration. Il illustre une parole publique centrée sur la chaîne de valeur agricole.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment adhérer à une coopérative agricole ?", a: "La rubrique Démarches présente les interlocuteurs et les pièces nécessaires dans le cadre de la démonstration." },
    { q: "Quand se tient le marché ?", a: "Le marché central fonctionne selon un calendrier local ; la page Événements en donne un exemple de démonstration." },
    { q: "Comment proposer un projet de quartier ?", a: "Le formulaire de contact permet de transmettre une idée au service de développement local." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Covè : agriculture, palmeraies, marché, démarches, actualités et projets du Zou.",
  },
};

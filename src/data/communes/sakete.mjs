export default {
  slug: "sakete",
  name: "Sakété",
  nameWithDe: "de Sakété",
  nameWithA: "à Sakété",
  department: "Plateau",
  region: "Bénin méridional",
  motto: "Aux portes du Plateau",
  positioning:
    "À une soixantaine de kilomètres de Cotonou, Sakété est une commune du Plateau tournée vers le Nigeria. Son marché, ses routes et ses villages nago en font un lieu de passage et de commerce.",

  identity: {
    primary: "#3b5a7a",
    deep: "#253c54",
    accent: "#d98a3c",
    soft: "#e4ebf1",
    paper: "#f8f2e5",
    ink: "#141b22",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune de Sakété · Plateau",
    title: "Sakété,",
    titleAccent: "au carrefour du Plateau",
    lead: "Un marché actif, des routes vers le Nigeria et des villages nago : Sakété vit d'échanges et de proximité.",
    image: "sakete-ville",
    ctaPrimary: { label: "Découvrir Sakété", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune de passage et de quartier",
    text: "Sakété n'est pas seulement une étape sur la route de la frontière. C'est une commune où les marchés structurent la semaine, où les quartiers gardent leurs récits et où les familles vivent de part et d'autre de la frontière. La commune doit organiser ces flux sans perdre sa qualité de vie.",
    pullquote:
      "Être proche d'une frontière, ce n'est pas vivre dans un couloir : c'est habiter un territoire avec ses propres besoins.",
    image: "sakete-site",
    caption: "La route de Sakété, image d'archives.",
  },

  stats: [
    { value: "60", label: "km de Cotonou", note: "Accès routier" },
    { value: "1", label: "marché central", note: "Rayonnement local" },
    { value: "1", label: "frontière proche", note: "Échanges avec le Nigeria" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "marche", "taxes", "agriculture", "foncier", "urbanisme", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "marche-sakete",
      title: "Le marché central gagne des hangars",
      category: "Économie",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Deux hangars couverts abritent les vivriers et les tissus pendant la saison des pluies.",
      image: "benin-marche",
      featured: true,
    },
    {
      id: "route-sakete",
      title: "La traversée de la ville sécurisée",
      category: "Mobilité",
      date: "3 novembre 2026",
      dateISO: "2026-11-03",
      excerpt: "Passages piétons, ralentisseurs et éclairage sur les axes fréquentés.",
      image: "benin-piste",
      featured: false,
    },
    {
      id: "eau-sakete",
      title: "Trois forages équipés dans les villages nago",
      category: "Eau",
      date: "25 octobre 2026",
      dateISO: "2026-10-25",
      excerpt: "Les points d'eau desservent les écoles et les quartiers périphériques.",
      image: "benin-vallee",
      featured: false,
    },
    {
      id: "culture-sakete",
      title: "Les conteurs de Sakété enregistrent leurs récits",
      category: "Culture",
      date: "16 octobre 2026",
      dateISO: "2026-10-16",
      excerpt: "Un projet de collecte audio associe écoles et associations culturelles.",
      image: "sakete-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-sakete",
      title: "Conseil communal",
      date: "9 décembre 2026",
      dateISO: "2026-12-09",
      time: "10 h",
      place: "Hôtel de ville, Sakété",
      category: "Institution",
      description: "Budget, voirie et marchés : session ouverte au public.",
      image: "sakete-ville",
      free: true,
    },
    {
      id: "foire-sakete",
      title: "Foire des produits du Plateau",
      date: "19 — 20 décembre 2026",
      dateISO: "2026-12-19",
      time: "09 h — 18 h",
      place: "Esplanade du marché",
      category: "Économie",
      description: "Vivriers, tissus, artisanat et produits transformés des communes voisines.",
      image: "benin-marche",
      free: true,
    },
    {
      id: "veillee-sakete",
      title: "Veillée des conteurs",
      date: "15 janvier 2027",
      dateISO: "2027-01-15",
      time: "19 h",
      place: "Maison des jeunes",
      category: "Culture",
      description: "Contes, chants et danses des quartiers de la commune.",
      image: "sakete-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "marche",
      title: "Réhabilitation du marché central",
      sector: "Économie",
      status: "En cours",
      progress: 59,
      budget: "430 M FCFA",
      quarter: "Centre-ville",
      description: "Hangars, étals, drainage et accès piéton.",
      image: "benin-marche",
    },
    {
      id: "voirie",
      title: "Sécurisation de la traversée urbaine",
      sector: "Voirie",
      status: "En cours",
      progress: 46,
      budget: "680 M FCFA",
      quarter: "Axes principaux",
      description: "Chaussée, passages piétons, éclairage et gestion des carrefours.",
      image: "benin-piste",
    },
    {
      id: "forages",
      title: "Forages pour deux écoles",
      sector: "Eau",
      status: "Livré",
      progress: 100,
      budget: "86 M FCFA",
      quarter: "Villages ruraux",
      description: "Deux forages équipés et lavabos scolaires.",
      image: "benin-vallee",
    },
    {
      id: "culture",
      title: "Maison des conteurs",
      sector: "Culture",
      status: "Étude",
      progress: 20,
      budget: "120 M FCFA",
      quarter: "Centre",
      description: "Un espace de collecte, de répétition et de rencontre intergénérationnelle.",
      image: "benin-egungun",
    },
  ],

  budget: {
    year: "2026",
    total: "4,7",
    operating: "2,8",
    investment: "1,9",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 0.7, pct: 15 },
      { label: "Marchés et économie", value: 0.6, pct: 13 },
      { label: "Eau et environnement", value: 0.4, pct: 9 },
      { label: "Éducation et culture", value: 0.5, pct: 11 },
      { label: "Action sociale", value: 0.5, pct: 11 },
      { label: "Fonctionnement", value: 2.0, pct: 41 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "SK/2026/004", title: "Réhabilitation des halles du marché", type: "Travaux", amount: "236 M FCFA", date: "16/07/2026", status: "Attribué" },
    { ref: "SK/2026/008", title: "Forages scolaires", type: "Travaux", amount: "54 M FCFA", date: "28/08/2026", status: "Attribué" },
    { ref: "SK/2026/012", title: "Étude de la maison des conteurs", type: "Services", amount: "8 M FCFA", date: "20/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "4,9 Mo", date: "21/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,9 Mo", date: "29/01/2026" },
    { title: "Schéma de sécurisation des axes", type: "PDF", size: "2,2 Mo", date: "10/09/2026" },
  ],

  attractions: [
    { name: "Le marché central", type: "Vie locale", text: "Vivriers, tissus et artisanat, au rythme des échanges avec le Nigeria.", image: "benin-marche", distance: "Centre", duration: "1 h" },
    { name: "Les villages nago", type: "Territoire", text: "Un maillage de localités où se transmettent les récits et les savoir-faire.", image: "sakete-paysage", distance: "Périphérie", duration: "Demi-journée" },
    { name: "Les routes de la frontière", type: "Échanges", text: "Des axes fréquentés par les commerçants et les voyageurs.", image: "sakete-site", distance: "Est", duration: "En voiture" },
    { name: "La vie des quartiers", type: "Culture", text: "Associations, écoles et groupes culturels animent la commune au quotidien.", image: "sakete-vie", distance: "Quartiers", duration: "1 h" },
  ],

  history: [
    { year: "XVIIIe s.", title: "Une cité nago", text: "Sakété s'inscrit dans l'ensemble des cités yoruba du plateau, avec ses chefferies et ses places." },
    { year: "XXe s.", title: "Commerce frontalier", text: "La proximité du Nigeria structure les échanges et les liens familiaux de la commune." },
    { year: "Aujourd'hui", title: "Organiser la traversée", text: "Sakété cherche à tirer parti de sa position sans subir les nuisances de la circulation." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Marché central", type: "market", x: 56, y: 50, note: "Commerce quotidien" },
      { name: "Centre de santé", type: "health", x: 40, y: 36, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 60, y: 60, note: "Enseignement secondaire" },
      { name: "Zone agricole", type: "nature", x: 28, y: 58, note: "Vivriers et palmier" },
      { name: "Forage", type: "water", x: 36, y: 64, note: "Point d'eau public" },
      { name: "Route du Nigeria", type: "mobility", x: 70, y: 38, note: "Échanges frontaliers" },
      { name: "Maison des jeunes", type: "culture", x: 52, y: 28, note: "Activités associatives" },
    ],
  },

  gastronomy: [
    { name: "Amiwo", text: "Pâte de maïs à la tomate et au poisson, plat convivial du Plateau." },
    { name: "Àkàrà", text: "Beignets de niébé frits, vendus sur les marchés et au bord des routes." },
    { name: "Akassa", text: "Pâte de maïs fermentée, servie avec une sauce de tomate ou de poisson." },
  ],

  economy: {
    text: "Le commerce de marché, l'agriculture et les échanges frontaliers dominent l'économie. Le maïs, le manioc et le palmier à huile complètent les productions, tandis que le transport et l'artisanat apportent des revenus d'appoint. La commune veut organiser les flux et moderniser ses équipements marchands.",
    sectors: [
      { name: "Commerce et frontière", share: 34 },
      { name: "Agriculture", share: 32 },
      { name: "Transport et artisanat", share: 20 },
      { name: "Services", share: 14 },
    ],
  },

  culture: {
    text: "La culture nago est présente dans les contes, les chants et les fêtes de quartier. Les associations locales jouent un rôle essentiel dans la transmission, notamment auprès des jeunes générations.",
    highlights: ["Culture nago", "Contes et chants", "Fêtes de quartier", "Associations locales"],
  },

  youth: {
    text: "Les jeunes sont attirés par le commerce et le transport, mais manquent souvent de formation. La commune soutient l'orientation, les métiers techniques et les activités culturelles et sportives.",
    programs: ["Orientation professionnelle", "Formation aux métiers du commerce", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Sakété",
    phone: "+229 22 00 00 00",
    email: "contact@sakete.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre position nous apporte des clients et des camions. Notre travail est de faire en sorte que la ville reste agréable pour ceux qui y vivent toute l'année.",
    text: "Le mot du maire est un contenu de démonstration. Il met en balance l'activité frontalière et la qualité de vie des quartiers.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir un acte de naissance ?", a: "La rubrique Démarches détaille les pièces et les étapes de la demande de démonstration." },
    { q: "Où se garer près du marché ?", a: "Une aire de stationnement de démonstration est indiquée sur la carte interactive." },
    { q: "Comment proposer une activité culturelle ?", a: "Le formulaire de contact permet de transmettre une proposition au service culture." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Sakété : marché, routes du Nigeria, culture nago, démarches et projets du Plateau.",
  },
};

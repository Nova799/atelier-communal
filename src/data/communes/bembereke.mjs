export default {
  slug: "bembereke",
  name: "Bembéréké",
  nameWithDe: "de Bembéréké",
  nameWithA: "à Bembéréké",
  department: "Borgou",
  region: "Bénin septentrional",
  motto: "Au cœur du Borgou",
  positioning:
    "Préfecture du Borgou, Bembéréké est une commune de savane où le coton, le maïs et l'élevage structurent la vie rurale. Sa position au nord de Parakou en fait un relais pour les villages et les troupeaux du département.",

  identity: {
    primary: "#7a3f2a",
    deep: "#542817",
    accent: "#e0b24a",
    soft: "#f2e5dc",
    paper: "#f8f2e4",
    ink: "#1f1611",
    motif: "spear",
  },

  hero: {
    kicker: "Commune de Bembéréké · Borgou",
    title: "Bembéréké,",
    titleAccent: "la savane et les greniers",
    lead: "Coton, maïs, troupeaux et marchés de village : Bembéréké incarne un Borgou rural qui travaille, commerce et transmet ses récits.",
    image: "bembereke-ville",
    ctaPrimary: { label: "Découvrir Bembéréké", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une préfecture qui reste rurale",
    text: "Bembéréké accueille les services du Borgou sans cesser d'être une commune de villages. Les habitants y viennent pour un acte, un marché ou une consultation, souvent après un long trajet sur des pistes de savane. La commune doit rendre ces services accessibles sans concentrer toute la vie au chef-lieu.",
    pullquote:
      "Une préfecture rurale n'a pas à choisir entre administration et agriculture : elle doit faire tenir les deux ensemble.",
    image: "bembereke-site",
    caption: "Le centre catholique, un repère du chef-lieu.",
  },

  stats: [
    { value: "1", label: "préfecture du Borgou", note: "Siège départemental" },
    { value: "1", label: "marché central", note: "Rayonnement rural" },
    { value: "1", label: "zone cotonnière", note: "Économie agricole" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "mariage", "agriculture", "marche", "foncier", "urbanisme", "economie", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "marche-bembereke",
      title: "Le marché central ouvre une halle aux vivriers",
      category: "Économie",
      date: "13 novembre 2026",
      dateISO: "2026-11-13",
      excerpt: "Un hangar supplémentaire protège le maïs, le niébé et les produits frais.",
      image: "bembereke-ville",
      featured: true,
    },
    {
      id: "coton-bembereke",
      title: "Coton : une formation au tri dans trois coopératives",
      category: "Agriculture",
      date: "4 novembre 2026",
      dateISO: "2026-11-04",
      excerpt: "Les producteurs améliorent la qualité de la fibre avant la collecte.",
      image: "bembereke-paysage",
      featured: false,
    },
    {
      id: "pistes-bembereke",
      title: "Deux pistes rurales réhabilitées avant les pluies",
      category: "Voirie",
      date: "25 octobre 2026",
      dateISO: "2026-10-25",
      excerpt: "Les travaux de démonstration désenclavent des villages du nord de la commune.",
      image: "benin-piste",
      featured: false,
    },
    {
      id: "ecole-bembereke",
      title: "Une école rurale équipée en eau potable",
      category: "Éducation",
      date: "16 octobre 2026",
      dateISO: "2026-10-16",
      excerpt: "Forage et latrines pour les élèves d'un village éloigné du chef-lieu.",
      image: "bembereke-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-bembereke",
      title: "Conseil communal",
      date: "5 décembre 2026",
      dateISO: "2026-12-05",
      time: "10 h",
      place: "Hôtel de ville, Bembéréké",
      category: "Institution",
      description: "Budget, agriculture et services ruraux : session publique.",
      image: "bembereke-ville",
      free: true,
    },
    {
      id: "foire-bembereke",
      title: "Foire aux produits de la savane",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "09 h — 18 h",
      place: "Esplanade du marché",
      category: "Agriculture",
      description: "Coton, maïs, niébé, élevage et artisanat des villages.",
      image: "bembereke-paysage",
      free: true,
    },
    {
      id: "veillee-bembereke",
      title: "Veillée des conteurs",
      date: "9 janvier 2027",
      dateISO: "2027-01-09",
      time: "19 h",
      place: "Maison des jeunes",
      category: "Culture",
      description: "Contes, musique et danses des communautés du Borgou.",
      image: "bembereke-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "marche",
      title: "Halle aux vivriers du marché central",
      sector: "Économie",
      status: "En cours",
      progress: 66,
      budget: "310 M FCFA",
      quarter: "Centre-ville",
      description: "Hangar, étals maçonnés et drainage des allées.",
      image: "bembereke-ville",
    },
    {
      id: "pistes",
      title: "Réhabilitation de deux pistes rurales",
      sector: "Voirie",
      status: "En cours",
      progress: 47,
      budget: "680 M FCFA",
      quarter: "Villages du nord",
      description: "Empierrement, busage et entretien des accotements.",
      image: "benin-piste",
    },
    {
      id: "coton",
      title: "Appui à la qualité du coton",
      sector: "Agriculture",
      status: "Étude",
      progress: 24,
      budget: "140 M FCFA",
      quarter: "Coopératives villageoises",
      description: "Formation au tri, au conditionnement et à la traçabilité.",
      image: "bembereke-paysage",
    },
    {
      id: "ecole",
      title: "École et forage d'un village rural",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "118 M FCFA",
      quarter: "Arrondissement rural",
      description: "Trois classes, forage et latrines séparées.",
      image: "bembereke-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "5,4",
    operating: "3,2",
    investment: "2,2",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Agriculture", value: 0.8, pct: 15 },
      { label: "Voirie et pistes", value: 0.9, pct: 17 },
      { label: "Éducation", value: 0.5, pct: 9 },
      { label: "Marchés et économie", value: 0.6, pct: 11 },
      { label: "Action sociale", value: 0.5, pct: 9 },
      { label: "Fonctionnement", value: 2.1, pct: 39 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "BB/2026/006", title: "Construction d'une halle aux vivriers", type: "Travaux", amount: "186 M FCFA", date: "21/08/2026", status: "Attribué" },
    { ref: "BB/2026/010", title: "Réhabilitation de pistes rurales", type: "Travaux", amount: "374 M FCFA", date: "09/10/2026", status: "Attribué" },
    { ref: "BB/2026/013", title: "Étude qualité de la filière coton", type: "Services", amount: "18 M FCFA", date: "30/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de développement communal 2026-2030", type: "PDF", size: "5,7 Mo", date: "16/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,1 Mo", date: "29/01/2026" },
    { title: "Schéma des pistes rurales", type: "PDF", size: "2,8 Mo", date: "12/09/2026" },
  ],

  attractions: [
    { name: "Le marché central", type: "Vie locale", text: "Le grand rendez-vous des villages : vivriers, tissus, bétail et petit artisanat.", image: "bembereke-ville", distance: "Centre", duration: "1 h" },
    { name: "Les savanes cotonnières", type: "Paysage", text: "Des étendues cultivées qui changent de couleur au fil des saisons.", image: "bembereke-paysage", distance: "Périphérie", duration: "Demi-journée" },
    { name: "Les villages de la commune", type: "Territoire", text: "Un maillage de localités rurales où se transmettent les récits et les savoir-faire.", image: "bembereke-vie", distance: "10 — 30 km", duration: "En voiture" },
    { name: "Les chemins de transhumance", type: "Élevage", text: "Des itinéraires pastoraux qui rythment la vie des éleveurs et des agriculteurs.", image: "benin-savane", distance: "Nord", duration: "Demi-journée" },
  ],

  history: [
    { year: "XIXe s.", title: "Un pays de savane", text: "Le territoire se structure autour de villages agricoles et de routes commerciales du Borgou." },
    { year: "XXe s.", title: "La préfecture", text: "Bembéréké devient un centre administratif et un relais pour les communes rurales du département." },
    { year: "Aujourd'hui", title: "Services et filières", text: "La commune cherche à améliorer l'accès aux services et à renforcer la transformation des productions locales." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Marché central", type: "market", x: 56, y: 50, note: "Commerce rural" },
      { name: "Centre de santé", type: "health", x: 40, y: 36, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 60, y: 62, note: "Enseignement secondaire" },
      { name: "Zone cotonnière", type: "nature", x: 28, y: 58, note: "Parcelles et collecte" },
      { name: "Forage", type: "water", x: 36, y: 66, note: "Point d'eau public" },
      { name: "Gare routière", type: "mobility", x: 68, y: 40, note: "Départs vers Parakou" },
      { name: "Marché de village", type: "market", x: 70, y: 30, note: "Échanges de proximité" },
    ],
  },

  gastronomy: [
    { name: "Tô de maïs", text: "Pâte de maïs servie avec une sauce de feuilles, de tomate ou d'arachide." },
    { name: "Wagasi", text: "Fromage peul grillé, aliment courant des marchés du Borgou." },
    { name: "Riz au gras", text: "Riz mijoté avec viande ou poisson, plat des jours de fête." },
  ],

  economy: {
    text: "Le coton et le maïs dominent les cultures, aux côtés du niébé, de l'igname et de l'élevage. Le commerce de marché et le transport complètent les revenus. La commune veut diversifier les productions et rapprocher les services des villages.",
    sectors: [
      { name: "Agriculture", share: 46 },
      { name: "Élevage", share: 18 },
      { name: "Commerce et transport", share: 22 },
      { name: "Artisanat et services", share: 14 },
    ],
  },

  culture: {
    text: "La culture baatonu est vive dans les fêtes de récolte, les contes et les danses. Les communautés peule et nagot apportent leurs propres récits, faisant de Bembéréké un carrefour culturel du Borgou.",
    highlights: ["Culture baatonu", "Fêtes de récolte", "Contes et veillées", "Danses du Borgou"],
  },

  youth: {
    text: "Les jeunes sont confrontés à l'accès à la terre et à l'emploi. Les programmes de démonstration soutiennent la formation agricole, l'élevage et les activités culturelles.",
    programs: ["Formation agricole", "Élevage et entrepreneuriat", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Bembéréké",
    phone: "+229 22 00 00 00",
    email: "contact@bembereke.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Notre commune est vaste et nos villages sont loin. Chaque service rapproché est une journée rendue aux familles qui travaillent la terre.",
    text: "Le mot du maire est un contenu de démonstration. Il met l'accent sur la distance et l'accès aux services pour les villages.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment obtenir un acte de naissance ?", a: "La rubrique Démarches détaille les pièces et les étapes de la demande de démonstration." },
    { q: "Où se tient le marché central ?", a: "Au chef-lieu ; la carte interactive de démonstration en indique l'emplacement symbolique." },
    { q: "Comment rejoindre une coopérative cotonnière ?", a: "Le service agriculture présente les groupements et les conditions d'adhésion." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Bembéréké : préfecture du Borgou, coton, marché, services ruraux, démarches et projets.",
  },
};

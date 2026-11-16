export default {
  slug: "parakou",
  name: "Parakou",
  nameWithDe: "de Parakou",
  nameWithA: "à Parakou",
  department: "Borgou",
  region: "Bénin septentrional",
  motto: "Le carrefour du Nord",
  positioning: "Grande ville du centre-nord, Parakou relie les territoires, fait commerce et offre une jeunesse pleine d'énergie.",

  identity: {
    primary: "#1f5d3a",
    deep: "#144029",
    accent: "#e4b33c",
    soft: "#e6efe7",
    paper: "#f6f4ea",
    ink: "#141c18",
    motif: "baobab",
  },

  hero: {
    kicker: "Commune de Parakou · Borgou",
    title: "Parakou,",
    titleAccent: "là où le Bénin se rencontre",
    lead: "Carrefour routier, marché international, université et savane : la ville du Nord accueille, échange et invente son avenir.",
    image: "parakou-numerique",
    ctaPrimary: { label: "Découvrir Parakou", href: "#decouvrir" },
    ctaSecondary: { label: "Accéder aux services", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une ville de passage et de projets",
    text: "Parakou s'est construite comme un carrefour entre le sud et le nord du pays. Aujourd'hui, la commune conjugue son rôle commercial avec des ambitions fortes en matière de jeunesse, de formation et d'équipements.",
    pullquote: "Notre force, c'est de savoir accueillir : ceux qui passent, ceux qui reviennent et ceux qui choisissent de rester.",
    image: "parakou-savane",
    caption: "La savane aux portes de la ville.",
  },

  stats: [
    { value: "3", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "marché international", note: "Marché Arzeke" },
    { value: "1", label: "université publique", note: "Pôle universitaire du Borgou" },
    { value: "18", label: "programmes jeunesse", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "urbanisme", "economie", "jeunesse", "social", "environnement", "taxes", "marche"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "atelier-numerique",
      title: "Un atelier numérique ouvre ses portes aux jeunes de Parakou",
      category: "Jeunesse",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Formation aux outils numériques, accompagnement de projets et accès à un espace de travail partagé.",
      image: "parakou-numerique",
      featured: true,
    },
    {
      id: "voirie",
      title: "Voirie : réfection de deux axes structurants du 3e arrondissement",
      category: "Cadre de vie",
      date: "6 novembre 2026",
      dateISO: "2026-11-06",
      excerpt: "Les travaux doivent améliorer l'accès aux écoles et au marché, avec une attention particulière aux cheminements piétons.",
      image: "parakou-rue",
      featured: false,
    },
    {
      id: "marche-arzake",
      title: "Marché Arzeke : nouvelle organisation des espaces de vente",
      category: "Économie",
      date: "30 octobre 2026",
      dateISO: "2026-10-30",
      excerpt: "La commune accompagne les commerçants dans la réorganisation des allées et la gestion des déchets.",
      image: "parakou-marche",
      featured: false,
    },
    {
      id: "culture-jeune",
      title: "La jeunesse invite la culture dans les quartiers",
      category: "Culture",
      date: "23 octobre 2026",
      dateISO: "2026-10-23",
      excerpt: "Danse, musique et ateliers de création dans les maisons de quartier.",
      image: "parakou-danse",
      featured: false,
    },
  ],

  events: [
    {
      id: "forum-jeunesse",
      title: "Forum de l'emploi et des compétences",
      date: "22 novembre 2026",
      dateISO: "2026-11-22",
      time: "09 h — 17 h",
      place: "Maison des jeunes",
      category: "Jeunesse",
      description: "Rencontres avec les entreprises, ateliers CV et présentation des formations locales.",
      image: "parakou-numerique",
      free: true,
    },
    {
      id: "spectacle",
      title: "Scène ouverte : danses et musiques du Borgou",
      date: "30 novembre 2026",
      dateISO: "2026-11-30",
      time: "18 h",
      place: "Place Bio Guerra",
      category: "Culture",
      description: "Une soirée de restitution des ateliers de quartier, ouverte à tous.",
      image: "parakou-danse",
      free: true,
    },
    {
      id: "conseil",
      title: "Conseil communal",
      date: "10 décembre 2026",
      dateISO: "2026-12-10",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Budget, jeunesse et voirie à l'ordre du jour.",
      image: "parakou-monument",
      free: true,
    },
  ],

  projects: [
    {
      id: "voirie-3",
      title: "Voirie du 3e arrondissement",
      sector: "Voirie",
      status: "En cours",
      progress: 58,
      budget: "1,4 Md FCFA",
      quarter: "3e arrondissement",
      description: "Réfection de chaussées, caniveaux et éclairage sur deux axes de desserte locale.",
      image: "parakou-rue",
    },
    {
      id: "maison-jeunes",
      title: "Maison des jeunes et des associations",
      sector: "Jeunesse",
      status: "En cours",
      progress: 81,
      budget: "420 M FCFA",
      quarter: "Centre-ville",
      description: "Salles de formation, studio partagé et espace d'accueil pour les associations.",
      image: "parakou-numerique",
    },
    {
      id: "arzake",
      title: "Marché Arzeke — phase 2",
      sector: "Économie",
      status: "En cours",
      progress: 44,
      budget: "1,1 Md FCFA",
      quarter: "Arzeke",
      description: "Allées couvertes, assainissement et accès sécurisés pour les usagers.",
      image: "parakou-marche",
    },
    {
      id: "eclairage",
      title: "Éclairage solaire des axes structurants",
      sector: "Énergie",
      status: "Livré",
      progress: 100,
      budget: "360 M FCFA",
      quarter: "3 arrondissements",
      description: "Mâts solaires sur les axes fréquentés et aux abords des équipements publics.",
      image: "parakou-monument",
    },
  ],

  budget: {
    year: "2026",
    total: "9,1",
    operating: "4,8",
    investment: "4,3",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Voirie et mobilité", value: 1.9, pct: 21 },
      { label: "Jeunesse et formation", value: 1.2, pct: 13 },
      { label: "Marchés et économie", value: 1.2, pct: 13 },
      { label: "Éducation", value: 1.0, pct: 11 },
      { label: "Action sociale", value: 0.8, pct: 9 },
      { label: "Fonctionnement", value: 3.0, pct: 33 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "PA/2026/008", title: "Réfection de deux axes du 3e arrondissement", type: "Travaux", amount: "512 M FCFA", date: "25/09/2026", status: "Attribué" },
    { ref: "PA/2026/012", title: "Équipement numérique de la maison des jeunes", type: "Fournitures", amount: "74 M FCFA", date: "18/10/2026", status: "En évaluation" },
    { ref: "PA/2026/017", title: "Assainissement du marché Arzeke", type: "Travaux", amount: "186 M FCFA", date: "09/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,5 Mo", date: "21/01/2026" },
    { title: "Stratégie jeunesse 2026-2028", type: "PDF", size: "2,8 Mo", date: "10/06/2026" },
    { title: "Compte rendu du conseil — septembre 2026", type: "PDF", size: "680 Ko", date: "01/10/2026" },
  ],

  attractions: [
    { name: "Le marché Arzeke", type: "Économie", text: "Un marché international où se croisent produits du nord et du sud.", image: "parakou-marche", distance: "Centre", duration: "1 h" },
    { name: "La place Bio Guerra", type: "Vie locale", text: "Un repère de la ville, entre rencontres et grands rassemblements.", image: "parakou-monument", distance: "Centre", duration: "30 min" },
    { name: "La savane du Borgou", type: "Nature", text: "Des paysages ouverts aux portes de la ville, à découvrir en saison sèche.", image: "parakou-savane", distance: "Périphérie", duration: "Demi-journée" },
    { name: "La scène jeune", type: "Culture", text: "Danse, musique et ateliers : l'énergie créative de la jeunesse parakouienne.", image: "parakou-danse", distance: "Quartiers", duration: "Selon programmation" },
  ],

  history: [
    { year: "XXe s.", title: "Un carrefour commercial", text: "Parakou se développe comme étape majeure sur les routes qui relient le sud et le nord du pays." },
    { year: "1960", title: "Une ville en croissance", text: "Après l'indépendance, la ville attire commerçants, fonctionnaires et populations des communes voisines." },
    { year: "Aujourd'hui", title: "Métropole du Nord", text: "Université, marché international et équipements structurants font de Parakou un pôle régional." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 50, y: 44, note: "Accueil et services communaux" },
      { name: "Marché Arzeke", type: "market", x: 60, y: 54, note: "Marché international" },
      { name: "Gare routière", type: "mobility", x: 44, y: 33, note: "Liaisons interurbaines" },
      { name: "Université", type: "education", x: 34, y: 28, note: "Campus et vie étudiante" },
      { name: "Place Bio Guerra", type: "tourism", x: 52, y: 62, note: "Monument et espace public" },
      { name: "Hôpital de zone", type: "health", x: 38, y: 52, note: "Urgences et consultations" },
      { name: "Stade municipal", type: "sport", x: 66, y: 38, note: "Sport et grands événements" },
      { name: "Maison des jeunes", type: "culture", x: 30, y: 66, note: "Formation et associations" },
    ],
  },

  gastronomy: [
    { name: "Wagasi", text: "Fromage peul grillé, servi avec une sauce tomate et du riz." },
    { name: "Tô de maïs", text: "Pâte de maïs accompagnée de sauces de feuilles ou d'arachide." },
    { name: "Brochettes", text: "Viande grillée et épices de rue, incontournables des soirées parakouiennes." },
  ],

  economy: {
    text: "Le commerce, le transport et les services dominent l'économie locale. La position de carrefour de Parakou en fait un marché de redistribution majeur pour le nord du pays.",
    sectors: [
      { name: "Commerce et redistribution", share: 36 },
      { name: "Transport et logistique", share: 26 },
      { name: "Services et formation", share: 22 },
      { name: "Artisanat et agroalimentaire", share: 16 },
    ],
  },

  culture: {
    text: "La ville accueille une scène jeune et métissée, où se croisent danses traditionnelles du Borgou, musiques urbaines et créations contemporaines.",
    highlights: ["Danses du Borgou", "Musiques urbaines", "Ateliers de création", "Cuisine du Nord"],
  },

  youth: {
    text: "Parakou est une ville jeune. La commune soutient la formation, l'entrepreneuriat et les espaces où les idées peuvent devenir des projets.",
    programs: ["Ateliers numériques", "Maison des jeunes", "Bourses d'initiatives", "Forum de l'emploi"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Parakou",
    phone: "+229 23 00 00 00",
    email: "contact@parakou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "3 arrondissements",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote: "Parakou doit rester une ville où l'on arrive avec une idée et où l'on trouve les moyens de la construire.",
    text: "Le mot du maire est un contenu de démonstration. Il donne un cap et relie la jeunesse aux projets de la commune.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment rejoindre les ateliers numériques ?", a: "Les inscriptions de démonstration se font via la rubrique Jeunesse ou la maison des jeunes." },
    { q: "Où se trouve le marché Arzeke ?", a: "La carte interactive indique le marché et les points d'accès de démonstration." },
    { q: "Comment obtenir une place de marché ?", a: "La démarche « Étal de marché » présente les pièces et les étapes." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Parakou : démarches, jeunesse, économie, actualités, projets et découverte du Borgou.",
  },
};

export default {
  slug: "malanville",
  name: "Malanville",
  nameWithDe: "de Malanville",
  nameWithA: "à Malanville",
  department: "Alibori",
  region: "Bénin septentrional",
  motto: "Le fleuve, le riz et la frontière",
  positioning:
    "À l'extrême nord du Bénin, Malanville s'est construite face au Niger. La plaine rizicole, le fleuve et le poste frontière font de cette commune un lieu d'échanges où l'agriculture et le commerce se répondent.",

  identity: {
    primary: "#1f5d55",
    deep: "#123c37",
    accent: "#d9a83c",
    soft: "#e2efec",
    paper: "#f7f2e3",
    ink: "#121b19",
    motif: "pirogue",
  },

  hero: {
    kicker: "Commune de Malanville · Alibori",
    title: "Malanville,",
    titleAccent: "au fil du Niger",
    lead: "Des rizières à perte de vue, un fleuve qui sert de frontière et un marché où se croisent les deux rives : Malanville vit d'eau, de terre et de passages.",
    image: "malanville-ville",
    ctaPrimary: { label: "Découvrir Malanville", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune les pieds dans l'eau",
    text: "Le Niger ne borde pas seulement Malanville : il organise son agriculture, ses transports et son commerce. Les périmètres rizicoles dépendent de ses crues, les pirogues traversent ses eaux et les camions attendent au poste frontière. La commune doit composer avec ce fleuve qui nourrit et qui menace.",
    pullquote:
      "Ici, l'eau n'est pas un décor : elle est à la fois la richesse, la route et le risque.",
    image: "malanville-site",
    caption: "L'île de Lété sur le Niger, image d'archives.",
  },

  stats: [
    { value: "1", label: "fleuve frontière", note: "Le Niger" },
    { value: "1", label: "plaine rizicole", note: "Économie locale" },
    { value: "1", label: "poste frontière", note: "Échanges avec le Niger" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "agriculture", "marche", "taxes", "foncier", "environnement", "economie", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "riz-eau",
      title: "Riziculture : un calendrier d'irrigation partagé",
      category: "Agriculture",
      date: "14 novembre 2026",
      dateISO: "2026-11-14",
      excerpt: "Les producteurs des périmètres rizicoles s'accordent sur les tours d'eau pour sécuriser la campagne.",
      image: "malanville-paysage",
      featured: true,
    },
    {
      id: "berges",
      title: "Berges du Niger : une campagne de stabilisation",
      category: "Environnement",
      date: "5 novembre 2026",
      dateISO: "2026-11-05",
      excerpt: "Plantations et enrochements légers sur trois points d'érosion proches des habitations.",
      image: "malanville-site",
      featured: false,
    },
    {
      id: "marche-frontiere",
      title: "Marché de Malanville : des allées réorganisées",
      category: "Économie",
      date: "27 octobre 2026",
      dateISO: "2026-10-27",
      excerpt: "Les étals de vivriers et de poisson disposent désormais d'aires de déchargement distinctes.",
      image: "malanville-vie",
      featured: false,
    },
    {
      id: "ecole-riz",
      title: "Une école de la plaine raccordée à l'eau",
      category: "Éducation",
      date: "18 octobre 2026",
      dateISO: "2026-10-18",
      excerpt: "Forage et latrines améliorent l'accueil des élèves en pleine zone rizicole.",
      image: "malanville-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-malanville",
      title: "Conseil communal",
      date: "8 décembre 2026",
      dateISO: "2026-12-08",
      time: "10 h",
      place: "Hôtel de ville, Malanville",
      category: "Institution",
      description: "Budget, riziculture et entretien des berges : session publique.",
      image: "malanville-ville",
      free: true,
    },
    {
      id: "fete-riz",
      title: "Fête du riz de la plaine",
      date: "19 décembre 2026",
      dateISO: "2026-12-19",
      time: "09 h — 18 h",
      place: "Esplanade du marché",
      category: "Agriculture",
      description: "Variétés locales, démonstrations culinaires et rencontres entre producteurs.",
      image: "malanville-paysage",
      free: true,
    },
    {
      id: "foire-niger",
      title: "Foire des deux rives",
      date: "16 janvier 2027",
      dateISO: "2027-01-16",
      time: "09 h — 19 h",
      place: "Place du marché",
      category: "Économie",
      description: "Produits agricoles, tissus et artisanat des communes du nord et du Niger.",
      image: "malanville-vie",
      free: true,
    },
  ],

  projects: [
    {
      id: "riz",
      title: "Réhabilitation des canaux du périmètre rizicole",
      sector: "Agriculture",
      status: "En cours",
      progress: 58,
      budget: "840 M FCFA",
      quarter: "Plaine rizicole",
      description: "Curage, ouvrages de régulation et accès aux parcelles.",
      image: "malanville-paysage",
    },
    {
      id: "berges",
      title: "Stabilisation des berges habitées",
      sector: "Environnement",
      status: "En cours",
      progress: 37,
      budget: "460 M FCFA",
      quarter: "Rives du Niger",
      description: "Plantations, enrochements et retrait des installations les plus exposées.",
      image: "malanville-site",
    },
    {
      id: "marche",
      title: "Halle des produits frais",
      sector: "Économie",
      status: "Étude",
      progress: 21,
      budget: "290 M FCFA",
      quarter: "Marché central",
      description: "Ombrières, étals lavables et point d'eau pour le poisson et les légumes.",
      image: "malanville-vie",
    },
    {
      id: "ecole",
      title: "École et forage de la plaine",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "135 M FCFA",
      quarter: "Zone rizicole",
      description: "Trois classes, un forage et des latrines séparées.",
      image: "malanville-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "5,8",
    operating: "3,2",
    investment: "2,6",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Agriculture et irrigation", value: 1.1, pct: 19 },
      { label: "Environnement et berges", value: 0.8, pct: 14 },
      { label: "Marchés et économie", value: 0.7, pct: 12 },
      { label: "Éducation", value: 0.5, pct: 9 },
      { label: "Action sociale", value: 0.5, pct: 9 },
      { label: "Fonctionnement", value: 2.2, pct: 37 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "MV/2026/006", title: "Curage des canaux rizicoles — lot 1", type: "Travaux", amount: "412 M FCFA", date: "20/08/2026", status: "Attribué" },
    { ref: "MV/2026/010", title: "Fourniture de plants pour les berges", type: "Fournitures", amount: "28 M FCFA", date: "07/10/2026", status: "Attribué" },
    { ref: "MV/2026/014", title: "Étude de la halle aux produits frais", type: "Services", amount: "15 M FCFA", date: "29/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Schéma d'aménagement rizicole", type: "PDF", size: "5,4 Mo", date: "11/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,1 Mo", date: "28/01/2026" },
    { title: "Plan de protection des berges", type: "PDF", size: "3,6 Mo", date: "23/08/2026" },
  ],

  attractions: [
    { name: "Le fleuve Niger", type: "Nature", text: "Un fleuve large et puissant, frontière vivante et axe de transport pour les riverains.", image: "malanville-site", distance: "Rives", duration: "Libre" },
    { name: "La lagune de Guéné", type: "Nature", text: "Un plan d'eau bordé de bananiers, entre lavoir, pâturages et parcelles maraîchères.", image: "malanville-paysage", distance: "Guéné", duration: "1 h" },
    { name: "Le marché de Malanville", type: "Économie", text: "Vivriers, poisson, tissus et marchandises venues des deux rives.", image: "malanville-vie", distance: "Centre", duration: "1 h" },
    { name: "Le lavoir de la lagune", type: "Vie locale", text: "Bassines, linge et causeries : le lavoir rythme les matinées au bord de l'eau.", image: "malanville-vie", distance: "Guéné", duration: "45 min" },
  ],

  history: [
    { year: "XIXe s.", title: "Un passage sur le fleuve", text: "La position de la localité en fait un point de traversée et d'échanges entre les deux rives du Niger." },
    { year: "XXe s.", title: "Le riz et la frontière", text: "L'aménagement de périmètres rizicoles et le développement du commerce transfrontalier transforment la commune." },
    { year: "Aujourd'hui", title: "Produire et protéger", text: "Malanville cherche à sécuriser ses revenus agricoles tout en protégeant les berges et les habitations exposées aux crues." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 42, note: "Services administratifs" },
      { name: "Marché central", type: "market", x: 56, y: 48, note: "Commerce transfrontalier" },
      { name: "Périmètre rizicole", type: "nature", x: 30, y: 60, note: "Plaine irriguée" },
      { name: "Berges du Niger", type: "water", x: 42, y: 78, note: "Fleuve et embarcadères" },
      { name: "Poste frontière", type: "mobility", x: 66, y: 34, note: "Passage vers le Niger" },
      { name: "Centre de santé", type: "health", x: 40, y: 50, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 58, y: 62, note: "Enseignement secondaire" },
      { name: "Zone maraîchère", type: "nature", x: 24, y: 38, note: "Cultures de décrue" },
    ],
  },

  gastronomy: [
    { name: "Riz de la plaine", text: "Riz local cuit au gras ou servi avec une sauce de poisson du Niger." },
    { name: "Poisson du fleuve", text: "Grillé ou mijoté, il accompagne les repas des jours de marché." },
    { name: "Wagasi", text: "Fromage peul grillé, vendu sur les étals et au bord de la route." },
  ],

  economy: {
    text: "La riziculture, le commerce transfrontalier et la pêche structurent l'économie de Malanville. Le transport et l'élevage complètent les revenus. La commune veut améliorer l'irrigation, la transformation du riz et les conditions d'accueil au marché.",
    sectors: [
      { name: "Riziculture", share: 38 },
      { name: "Commerce et transit", share: 26 },
      { name: "Pêche et élevage", share: 20 },
      { name: "Transport et services", share: 16 },
    ],
  },

  culture: {
    text: "La vie culturelle mêle les communautés dendi, peule et bariba, au rythme des fêtes agricoles et des marchés. Les chants de pêcheurs et les récits du fleuve occupent une place particulière dans la mémoire locale.",
    highlights: ["Fêtes agricoles", "Chants de pêcheurs", "Cultures du Nord", "Marchés"],
  },

  youth: {
    text: "Les jeunes travaillent dans la riziculture, le transport ou le commerce, mais manquent souvent de formation spécialisée. La commune soutient l'orientation, les métiers de l'eau et l'entrepreneuriat agricole.",
    programs: ["Formation agricole", "Métiers de l'irrigation", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Malanville",
    phone: "+229 22 00 00 00",
    email: "contact@malanville.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Le Niger nous donne le riz et la route. Notre responsabilité est de le faire sans laisser les berges s'effacer ni les producteurs dépendre d'un seul acheteur.",
    text: "Le mot du maire est un contenu de démonstration. Il relie la richesse du fleuve à la nécessité de protéger les rives et de diversifier les revenus.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment accéder aux périmètres rizicoles ?", a: "La rubrique Démarches présente les interlocuteurs et les conditions d'accès dans le cadre de la démonstration." },
    { q: "Où traverser vers le Niger ?", a: "Le poste frontière est indiqué sur la carte de démonstration ; les formalités réelles relèvent des autorités compétentes." },
    { q: "Comment signaler une érosion de berge ?", a: "Le formulaire de signalement permet de localiser le point et de décrire la situation." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Malanville : fleuve Niger, riziculture, frontière, marché, démarches et projets de l'Alibori.",
  },
};

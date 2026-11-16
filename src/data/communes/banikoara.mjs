export default {
  slug: "banikoara",
  name: "Banikoara",
  nameWithDe: "de Banikoara",
  nameWithA: "à Banikoara",
  department: "Alibori",
  region: "Bénin septentrional",
  motto: "La capitale du coton",
  positioning:
    "Au nord-ouest de l'Alibori, Banikoara est le grand bassin cotonnier du Bénin. Autour de cette culture, toute une économie locale s'organise : marchés, égrenage, transport et services aux producteurs.",

  identity: {
    primary: "#8a5a1e",
    deep: "#5f3c0f",
    accent: "#d9b04a",
    soft: "#f3e8d2",
    paper: "#faf3e2",
    ink: "#221a10",
    motif: "baobab",
  },

  hero: {
    kicker: "Commune de Banikoara · Alibori",
    title: "Banikoara,",
    titleAccent: "le pays du coton",
    lead: "Des plaines cultivées à perte de vue, un marché au coton et des villages de producteurs : Banikoara travaille une filière qui fait vivre tout le nord.",
    image: "banikoara-ville",
    ctaPrimary: { label: "Découvrir Banikoara", href: "#decouvrir" },
    ctaSecondary: { label: "Les démarches", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une commune dans la filière",
    text: "Le coton n'est pas seulement une culture : c'est un calendrier, des coopératives, des camions et des revenus pour des milliers de familles. Banikoara doit gérer cette dépendance en diversifiant les productions et en améliorant les conditions de travail.",
    pullquote:
      "Une monoculture fait vivre un territoire, mais elle le fragilise aussi. La commune doit préparer l'après-coton sans abandonner celles et ceux qui en vivent.",
    image: "banikoara-site",
    caption: "La route de Banikoara, entre savane et champs de coton.",
  },

  stats: [
    { value: "1", label: "bassin cotonnier majeur", note: "Plaines de l'Alibori" },
    { value: "1", label: "marché au coton", note: "Collecte et tri" },
    { value: "1", label: "unité d'égrenage", note: "Transformation locale" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["agriculture", "marche", "acte-naissance", "foncier", "taxes", "economie", "environnement", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "campagne",
      title: "Campagne cotonnière : un point d'accueil pour les producteurs",
      category: "Agriculture",
      date: "15 novembre 2026",
      dateISO: "2026-11-15",
      excerpt: "Un guichet d'information renseigne sur les contrats, les intrants et les dates de collecte.",
      image: "banikoara-paysage",
      featured: true,
    },
    {
      id: "diversification",
      title: "Maïs et soja : des parcelles de diversification",
      category: "Agriculture",
      date: "6 novembre 2026",
      dateISO: "2026-11-06",
      excerpt: "Des essais de démonstration accompagnent les producteurs qui souhaitent réduire leur dépendance au coton.",
      image: "banikoara-paysage",
      featured: false,
    },
    {
      id: "piste",
      title: "Une piste de collecte réhabilitée",
      category: "Voirie",
      date: "28 octobre 2026",
      dateISO: "2026-10-28",
      excerpt: "Les camions de collecte accèdent désormais plus facilement à trois villages.",
      image: "benin-piste",
      featured: false,
    },
    {
      id: "ecole",
      title: "Deux écoles équipées de latrines",
      category: "Éducation",
      date: "19 octobre 2026",
      dateISO: "2026-10-19",
      excerpt: "Les travaux de démonstration améliorent les conditions d'accueil des élèves.",
      image: "banikoara-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-banikoara",
      title: "Conseil communal",
      date: "12 décembre 2026",
      dateISO: "2026-12-12",
      time: "10 h",
      place: "Hôtel de ville, Banikoara",
      category: "Institution",
      description: "Budget, filière coton et pistes rurales : session publique.",
      image: "banikoara-ville",
      free: true,
    },
    {
      id: "journee-producteurs",
      title: "Journée des producteurs de coton",
      date: "19 décembre 2026",
      dateISO: "2026-12-19",
      time: "09 h — 17 h",
      place: "Place du marché",
      category: "Agriculture",
      description: "Rencontres avec les coopératives, démonstrations et information sur les intrants.",
      image: "banikoara-paysage",
      free: true,
    },
    {
      id: "culture-nord",
      title: "Soirée culturelle du Nord",
      date: "18 janvier 2027",
      dateISO: "2027-01-18",
      time: "19 h",
      place: "Maison des jeunes",
      category: "Culture",
      description: "Danses, contes et musique des communautés de l'Alibori.",
      image: "benin-egungun",
      free: true,
    },
  ],

  projects: [
    {
      id: "pistes",
      title: "Réhabilitation de pistes de collecte",
      sector: "Voirie",
      status: "En cours",
      progress: 55,
      budget: "980 M FCFA",
      quarter: "Zones cotonnières",
      description: "Empierrement, busage et entretien des accotements sur trois axes.",
      image: "benin-piste",
    },
    {
      id: "diversification",
      title: "Parcelles de diversification maïs-soja",
      sector: "Agriculture",
      status: "En cours",
      progress: 34,
      budget: "220 M FCFA",
      quarter: "Coopératives villageoises",
      description: "Semences, formation et suivi agronomique pour réduire la monoculture.",
      image: "banikoara-paysage",
    },
    {
      id: "marche",
      title: "Hangar du marché au coton",
      sector: "Économie",
      status: "Étude",
      progress: 18,
      budget: "310 M FCFA",
      quarter: "Centre",
      description: "Zone de tri, pesée et stockage temporaire de la fibre.",
      image: "benin-marche",
    },
    {
      id: "ecoles",
      title: "Latrines et points d'eau dans deux écoles",
      sector: "Éducation",
      status: "Livré",
      progress: 100,
      budget: "96 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Blocs sanitaires séparés et forages équipés.",
      image: "banikoara-vie",
    },
  ],

  budget: {
    year: "2026",
    total: "6,4",
    operating: "3,6",
    investment: "2,8",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Pistes et voirie", value: 1.1, pct: 17 },
      { label: "Agriculture et diversification", value: 1.0, pct: 16 },
      { label: "Marchés et économie", value: 0.7, pct: 11 },
      { label: "Éducation", value: 0.6, pct: 9 },
      { label: "Action sociale", value: 0.6, pct: 9 },
      { label: "Fonctionnement", value: 2.4, pct: 38 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "BN/2026/007", title: "Réhabilitation de pistes de collecte", type: "Travaux", amount: "540 M FCFA", date: "24/08/2026", status: "Attribué" },
    { ref: "BN/2026/011", title: "Fourniture de semences pour la diversification", type: "Fournitures", amount: "47 M FCFA", date: "12/10/2026", status: "Attribué" },
    { ref: "BN/2026/014", title: "Étude du hangar au coton", type: "Services", amount: "16 M FCFA", date: "01/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Plan de diversification agricole", type: "PDF", size: "4,9 Mo", date: "06/05/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,2 Mo", date: "31/01/2026" },
    { title: "Rapport de campagne cotonnière — démonstration", type: "PDF", size: "2,7 Mo", date: "10/09/2026" },
  ],

  attractions: [
    { name: "Le marché au coton", type: "Économie", text: "Le lieu où se croisent producteurs, collecteurs et transporteurs de la filière.", image: "benin-marche", distance: "Centre", duration: "1 h" },
    { name: "Les plaines cotonnières", type: "Paysage", text: "Un horizon agricole qui change de couleur au fil des saisons.", image: "banikoara-paysage", distance: "Périphérie", duration: "Demi-journée" },
    { name: "Les pistes de collecte", type: "Économie", text: "Un équipement industriel qui transforme la fibre avant son départ vers les ports.", image: "banikoara-site", distance: "Zone industrielle", duration: "Sur rendez-vous" },
    { name: "Les villages de producteurs", type: "Territoire", text: "Un maillage de coopératives et de hameaux au cœur de la filière.", image: "banikoara-vie", distance: "10 — 30 km", duration: "En voiture" },
  ],

  history: [
    { year: "XXe s.", title: "L'essor du coton", text: "La culture cotonnière s'impose comme la principale source de revenus agricoles du nord-ouest." },
    { year: "Fin XXe s.", title: "Coopératives et filière", text: "Les producteurs s'organisent en groupements pour la collecte et la commercialisation." },
    { year: "Aujourd'hui", title: "Diversifier sans abandonner", text: "La commune cherche à réduire la dépendance à une seule culture tout en soutenant les producteurs." },
  ],

  map: {
    terrain: "savanna",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Marché au coton", type: "market", x: 56, y: 38, note: "Collecte et tri" },
      { name: "Unité d'égrenage", type: "economy", x: 66, y: 54, note: "Transformation de la fibre" },
      { name: "Centre de santé", type: "health", x: 40, y: 54, note: "Soins de proximité" },
      { name: "Lycée", type: "education", x: 58, y: 60, note: "Enseignement secondaire" },
      { name: "Zone cotonnière", type: "nature", x: 28, y: 34, note: "Plaines cultivées" },
      { name: "Forage", type: "water", x: 52, y: 66, note: "Point d'eau public" },
      { name: "Gare routière", type: "mobility", x: 70, y: 32, note: "Départs vers Kandi" },
    ],
  },

  gastronomy: [
    { name: "Tô de maïs", text: "Pâte de maïs servie avec une sauce de feuilles ou d'arachide." },
    { name: "Wagasi", text: "Fromage peul grillé, aliment courant des marchés du nord." },
    { name: "Riz au gras", text: "Riz mijoté avec viande ou poisson, plat des jours de fête." },
  ],

  economy: {
    text: "Le coton domine l'économie agricole et fait vivre la collecte, le transport et l'égrenage. Le maïs, le soja et l'élevage constituent des appuis importants. La commune veut diversifier les revenus et améliorer les pistes de desserte.",
    sectors: [
      { name: "Coton et collecte", share: 44 },
      { name: "Autres cultures et élevage", share: 24 },
      { name: "Commerce et transport", share: 20 },
      { name: "Services et artisanat", share: 12 },
    ],
  },

  culture: {
    text: "La vie culturelle est rythmée par les campagnes agricoles, les fêtes de récolte et les rencontres communautaires. Les coopératives jouent aussi un rôle social important.",
    highlights: ["Fêtes de récolte", "Cultures peule et bariba", "Coopératives", "Musique du Nord"],
  },

  youth: {
    text: "Les jeunes sont nombreux à travailler dans la filière cotonnière ou à chercher une alternative. La commune soutient la formation agricole, l'entrepreneuriat et les activités sportives.",
    programs: ["Formation agricole", "Entrepreneuriat rural", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Banikoara",
    phone: "+229 22 00 00 00",
    email: "contact@banikoara.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Le coton a fait vivre nos villages. Notre devoir est d'en tirer le meilleur aujourd'hui et de préparer des revenus plus divers pour demain.",
    text: "Le mot du maire est un contenu de démonstration. Il assume la réalité de la filière tout en ouvrant la question de la diversification.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment être recensé comme producteur ?", a: "La rubrique Démarches présente les étapes et les interlocuteurs de la filière dans le cadre de la démonstration." },
    { q: "Où se déroule la collecte ?", a: "Les points de collecte de démonstration sont indiqués sur la carte interactive." },
    { q: "Existe-t-il un appui à la diversification ?", a: "Le service agriculture présente les essais et formations disponibles." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Banikoara : filière coton, marchés, diversification agricole, démarches et projets de l'Alibori.",
  },
};

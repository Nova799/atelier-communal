export default {
  slug: "natitingou",
  name: "Natitingou",
  nameWithDe: "de Natitingou",
  nameWithA: "à Natitingou",
  department: "Atacora",
  region: "Bénin septentrional",
  motto: "La porte de l'Atacora",
  positioning: "Collines, Tata Somba et savoir-faire : Natitingou ouvre les portes d'un nord rural, fier et accueillant.",

  identity: {
    primary: "#8a5a1f",
    deep: "#623f13",
    accent: "#3d6b4f",
    soft: "#f1e6d5",
    paper: "#f8f2e6",
    ink: "#211b13",
    motif: "mountains",
  },

  hero: {
    kicker: "Commune de Natitingou · Atacora",
    title: "Natitingou,",
    titleAccent: "l'Atacora à hauteur d'homme",
    lead: "Des collines, des cases de terre, des marchés et une hospitalité du Nord : la commune cultive un lien fort entre paysage et culture.",
    image: "natitingou-collines",
    ctaPrimary: { label: "Découvrir la commune", href: "#decouvrir" },
    ctaSecondary: { label: "Services et contacts", href: "#services" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Un territoire de relief et de mémoire",
    text: "Natitingou s'étend au pied de l'Atacora. L'architecture en terre, les paysages de collines et les savoir-faire locaux composent une identité que la commune veut préserver tout en améliorant les services de proximité.",
    pullquote: "Ici, le paysage est habité. Construire mieux, c'est d'abord respecter ce que la terre et les gens ont appris ensemble.",
    image: "natitingou-tata",
    caption: "Les motifs d'une construction tata somba.",
  },

  stats: [
    { value: "9", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "musée de référence", note: "Musée Kaba" },
    { value: "3", label: "paysages protégés", note: "Donnée de démonstration" },
    { value: "22", label: "groupements de producteurs", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "urbanisme", "tourisme", "agriculture", "social", "environnement", "culture", "foncier"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "tata",
      title: "Tata Somba : un programme de conservation avec les habitants",
      category: "Patrimoine",
      date: "9 novembre 2026",
      dateISO: "2026-11-09",
      excerpt: "Diagnostic des constructions, formation des maçons et valorisation des motifs : la commune avance avec les familles.",
      image: "natitingou-tata",
      featured: true,
    },
    {
      id: "marche-producteurs",
      title: "Marché des producteurs : rendez-vous chaque samedi",
      category: "Économie",
      date: "2 novembre 2026",
      dateISO: "2026-11-02",
      excerpt: "Miel, karité, céréales et légumes : un marché de proximité pour soutenir les exploitations familiales.",
      image: "benin-marche",
      featured: false,
    },
    {
      id: "musee",
      title: "Musée Kaba : une nouvelle salle pour les collections locales",
      category: "Culture",
      date: "27 octobre 2026",
      dateISO: "2026-10-27",
      excerpt: "Objets, récits et photographies racontent l'histoire de la région et de ses habitants.",
      image: "natitingou-musee",
      featured: false,
    },
    {
      id: "eau",
      title: "Adduction d'eau : trois villages bientôt raccordés",
      category: "Cadre de vie",
      date: "20 octobre 2026",
      dateISO: "2026-10-20",
      excerpt: "Le chantier de démonstration prévoit des bornes-fontaines et un comité local de gestion.",
      image: "natitingou-case",
      featured: false,
    },
  ],

  events: [
    {
      id: "randonnee",
      title: "Randonnée des collines",
      date: "21 novembre 2026",
      dateISO: "2026-11-21",
      time: "07 h",
      place: "Départ : musée Kaba",
      category: "Nature",
      description: "Une marche guidée de 8 km avec des haltes consacrées au paysage et aux savoir-faire.",
      image: "natitingou-collines",
      free: false,
    },
    {
      id: "marche-produits",
      title: "Marché des produits du terroir",
      date: "28 novembre 2026",
      dateISO: "2026-11-28",
      time: "08 h — 14 h",
      place: "Place du marché",
      category: "Économie",
      description: "Producteurs, transformatrices et artisans de l'Atacora.",
      image: "benin-marche",
      free: true,
    },
    {
      id: "conseil",
      title: "Conseil communal",
      date: "11 décembre 2026",
      dateISO: "2026-12-11",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Eau, patrimoine et agriculture à l'ordre du jour.",
      image: "natitingou-musee",
      free: true,
    },
  ],

  projects: [
    {
      id: "route-tata",
      title: "Route des Tata Somba",
      sector: "Tourisme",
      status: "En cours",
      progress: 52,
      budget: "720 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Signalétique, accès et médiation pour découvrir les constructions sans les mettre en danger.",
      image: "natitingou-tata",
    },
    {
      id: "maison-tourisme",
      title: "Maison du tourisme et de l'artisanat",
      sector: "Économie",
      status: "En cours",
      progress: 66,
      budget: "380 M FCFA",
      quarter: "Centre-ville",
      description: "Accueil des visiteurs, vente de produits locaux et espace de formation.",
      image: "natitingou-musee",
    },
    {
      id: "eau",
      title: "Adduction d'eau de trois villages",
      sector: "Eau",
      status: "En cours",
      progress: 74,
      budget: "610 M FCFA",
      quarter: "Arrondissements ruraux",
      description: "Forages, châteaux d'eau et bornes-fontaines gérés par des comités locaux.",
      image: "natitingou-case",
    },
    {
      id: "marche",
      title: "Réhabilitation du marché central",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "240 M FCFA",
      quarter: "Centre-ville",
      description: "Hangars, allées et sanitaires pour les commerçants et les producteurs.",
      image: "benin-marche",
    },
  ],

  budget: {
    year: "2026",
    total: "5,8",
    operating: "3,2",
    investment: "2,6",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Eau et assainissement", value: 0.9, pct: 16 },
      { label: "Tourisme et patrimoine", value: 0.8, pct: 14 },
      { label: "Agriculture", value: 0.7, pct: 12 },
      { label: "Voirie", value: 0.7, pct: 12 },
      { label: "Action sociale", value: 0.6, pct: 10 },
      { label: "Fonctionnement", value: 2.1, pct: 36 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "NA/2026/005", title: "Forages et bornes-fontaines — lot 2", type: "Travaux", amount: "286 M FCFA", date: "12/09/2026", status: "Attribué" },
    { ref: "NA/2026/010", title: "Signalétique de la route des Tata", type: "Fournitures", amount: "24 M FCFA", date: "07/10/2026", status: "Attribué" },
    { ref: "NA/2026/014", title: "Étude de conservation des Tata Somba", type: "Services", amount: "42 M FCFA", date: "03/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,3 Mo", date: "18/01/2026" },
    { title: "Plan de conservation des Tata Somba — note de cadrage", type: "PDF", size: "3,7 Mo", date: "02/07/2026" },
    { title: "Compte rendu du conseil — septembre 2026", type: "PDF", size: "590 Ko", date: "29/09/2026" },
  ],

  attractions: [
    { name: "Les Tata Somba", type: "Architecture", text: "Des constructions en terre aux motifs peints, adaptées au climat et aux usages familiaux.", image: "natitingou-tata", distance: "Arrondissements ruraux", duration: "Demi-journée" },
    { name: "Le musée Kaba", type: "Culture", text: "Un musée de proximité consacré à l'histoire et aux savoir-faire de l'Atacora.", image: "natitingou-musee", distance: "Centre", duration: "1 h" },
    { name: "Les collines de l'Atacora", type: "Nature", text: "Des paysages de relief à parcourir à pied, avec des guides locaux.", image: "natitingou-collines", distance: "Périphérie", duration: "2 h à la journée" },
    { name: "Les chutes de Tanougou, à proximité", type: "Nature", text: "Un site naturel voisin, à découvrir dans le respect des règles locales.", image: "benin-vallee", distance: "À proximité", duration: "Journée" },
  ],

  history: [
    { year: "XIXe s.", title: "Un carrefour de l'Atacora", text: "Natitingou se développe comme lieu d'échanges entre les communautés de la région et les routes commerciales du nord." },
    { year: "XXe s.", title: "Un centre administratif", text: "La ville devient un pôle administratif et scolaire pour l'Atacora." },
    { year: "Aujourd'hui", title: "Le défi de l'eau et du patrimoine", text: "La commune conjugue accès aux services, valorisation des Tata Somba et soutien aux filières agricoles." },
  ],

  map: {
    terrain: "mountain",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 50, y: 48, note: "Accueil et services communaux" },
      { name: "Musée Kaba", type: "culture", x: 44, y: 55, note: "Collections et histoire locale" },
      { name: "Tata Somba", type: "tourism", x: 60, y: 62, note: "Architecture traditionnelle" },
      { name: "Marché central", type: "market", x: 56, y: 40, note: "Produits du terroir" },
      { name: "Statue de Kaba", type: "tourism", x: 48, y: 36, note: "Repère de la ville" },
      { name: "Hôpital de zone", type: "health", x: 36, y: 44, note: "Urgences et consultations" },
      { name: "École publique", type: "education", x: 30, y: 56, note: "École primaire" },
      { name: "Point de vue", type: "nature", x: 64, y: 26, note: "Panorama sur les collines" },
    ],
  },

  gastronomy: [
    { name: "Wagasi", text: "Fromage peul grillé, spécialité du nord, servi avec une sauce relevée." },
    { name: "Miel de l'Atacora", text: "Un produit du terroir reconnu, à retrouver sur les marchés locaux." },
    { name: "Tô de mil", text: "Pâte de mil accompagnée de sauces de feuilles ou d'arachide." },
  ],

  economy: {
    text: "Agriculture familiale, élevage, artisanat et tourisme structurent l'économie. La commune accompagne les producteurs et cherche à mieux valoriser les produits du terroir.",
    sectors: [
      { name: "Agriculture et élevage", share: 38 },
      { name: "Commerce et artisanat", share: 26 },
      { name: "Tourisme", share: 20 },
      { name: "Services", share: 16 },
    ],
  },

  culture: {
    text: "La culture de l'Atacora se lit dans l'architecture, les motifs peints, les récits et les fêtes communautaires. La commune soutient les initiatives qui transmettent ces savoir-faire.",
    highlights: ["Architecture en terre", "Motifs peints", "Contes et récits", "Fêtes communautaires"],
  },

  youth: {
    text: "Les jeunes de Natitingou s'engagent dans l'agriculture, le tourisme et les métiers d'art. Des parcours de formation les accompagnent.",
    programs: ["Guides touristiques juniors", "Formation aux métiers de la terre", "Appels à projets", "Espaces sportifs"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Natitingou",
    phone: "+229 23 80 00 00",
    email: "contact@natitingou.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "9 arrondissements",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote: "Notre Atacora est un capital. Le préserver, c'est garantir de l'eau, des revenus et de la dignité aux générations qui viennent.",
    text: "Le mot du maire est un contenu de démonstration. Il relie patrimoine, agriculture et services essentiels.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment visiter les Tata Somba ?", a: "Des parcours de démonstration sont proposés avec des guides locaux, dans le respect des habitations." },
    { q: "Où acheter les produits du terroir ?", a: "Le marché des producteurs se tient chaque samedi, selon les données de démonstration." },
    { q: "Comment signaler un problème d'eau ?", a: "Le formulaire de signalement permet de décrire le point d'eau et la nature du problème." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Natitingou : Tata Somba, Atacora, démarches, tourisme, actualités et projets.",
  },
};

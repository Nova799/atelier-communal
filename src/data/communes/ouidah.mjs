export default {
  slug: "ouidah",
  name: "Ouidah",
  nameWithDe: "de Ouidah",
  nameWithA: "à Ouidah",
  department: "Atlantique",
  region: "Bénin méridional",
  motto: "La ville-mémoire",
  positioning: "Entre océan, mémoire de la traite atlantique et culture vodoun, Ouidah est un lieu où l'histoire se transmet et se vit.",

  identity: {
    primary: "#26346e",
    deep: "#19234d",
    accent: "#c97b3c",
    soft: "#e9e7f2",
    paper: "#f7f3e9",
    ink: "#171826",
    motif: "crossroads",
  },

  hero: {
    kicker: "Commune de Ouidah · Atlantique",
    title: "Ouidah,",
    titleAccent: "là où l'histoire rencontre l'océan",
    lead: "Route de l'Esclave, Porte du Non-Retour, temples et plages : une commune qui porte une mémoire mondiale et une culture vivante.",
    image: "ouidah-plage",
    ctaPrimary: { label: "Découvrir Ouidah", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer sa visite", href: "#tourisme" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une ville qui se souvient",
    text: "Ouidah a été l'un des grands ports de la traite atlantique. Aujourd'hui, la commune transforme cette mémoire en espace de dialogue, de recherche et de transmission, sans jamais la réduire à un décor touristique.",
    pullquote: "Se souvenir n'est pas regarder en arrière : c'est comprendre ce que l'histoire fait encore à nos villes et à nos liens.",
    image: "ouidah-porte",
    caption: "La Porte du Non-Retour, lieu de mémoire universel.",
  },

  stats: [
    { value: "10", label: "arrondissements", note: "Découpage administratif" },
    { value: "1", label: "site mémoriel majeur", note: "Route de l'Esclave" },
    { value: "4", label: "lieux de visite", note: "Donnée de démonstration" },
    { value: "1", label: "festival culturel international", note: "Vodun Days" },
  ],

  services: ["acte-naissance", "tourisme", "urbanisme", "environnement", "social", "economie", "culture", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "vodun-days",
      title: "Vodun Days : la ville prépare l'accueil des visiteurs",
      category: "Culture",
      date: "13 novembre 2026",
      dateISO: "2026-11-13",
      excerpt: "Espaces d'accueil, signalétique et programmation culturelle : la commune coordonne les préparatifs avec les acteurs locaux.",
      image: "ouidah-danse",
      featured: true,
    },
    {
      id: "route-esclave",
      title: "Route de l'Esclave : entretien de l'allée et des abords",
      category: "Patrimoine",
      date: "7 novembre 2026",
      dateISO: "2026-11-07",
      excerpt: "Les travaux de démonstration prévoient la remise en état des cheminements et l'amélioration de l'accessibilité du site.",
      image: "ouidah-allee",
      featured: false,
    },
    {
      id: "temple-pythons",
      title: "Le Temple des Pythons ouvre un nouveau parcours de visite",
      category: "Tourisme",
      date: "2 novembre 2026",
      dateISO: "2026-11-02",
      excerpt: "Un parcours court, documenté et respectueux des pratiques rituelles, pensé avec les responsables du temple.",
      image: "ouidah-python",
      featured: false,
    },
    {
      id: "marche-artisanal",
      title: "Un marché artisanal s'installe sur la place de la ville",
      category: "Économie",
      date: "24 octobre 2026",
      dateISO: "2026-10-24",
      excerpt: "Tisserands, sculpteurs et cuisinières se retrouvent chaque dernier samedi du mois.",
      image: "benin-tissu",
      featured: false,
    },
  ],

  events: [
    {
      id: "vodun-days-date",
      title: "Vodun Days",
      date: "9 — 10 janvier 2027",
      dateISO: "2027-01-09",
      time: "Toute la journée",
      place: "Esplanade de la Porte du Non-Retour",
      category: "Culture",
      description: "Cérémonies, concerts, parades et rencontres autour des cultures vodoun, avec une programmation ouverte au public.",
      image: "ouidah-danse",
      free: true,
    },
    {
      id: "visite-memoire",
      title: "Visite guidée : mémoire et reconstruction",
      date: "28 novembre 2026",
      dateISO: "2026-11-28",
      time: "09 h",
      place: "Départ : musée de Ouidah",
      category: "Patrimoine",
      description: "Un parcours de deux heures entre la ville, la Route de l'Esclave et la mer.",
      image: "ouidah-porte",
      free: false,
    },
    {
      id: "conseil",
      title: "Conseil communal",
      date: "3 décembre 2026",
      dateISO: "2026-12-03",
      time: "10 h",
      place: "Hôtel de ville",
      category: "Institution",
      description: "Budget, tourisme et entretien du patrimoine : la session est ouverte au public.",
      image: "ouidah-rue",
      free: true,
    },
  ],

  projects: [
    {
      id: "route",
      title: "Réhabilitation de la Route de l'Esclave",
      sector: "Patrimoine",
      status: "En cours",
      progress: 68,
      budget: "1,2 Md FCFA",
      quarter: "Centre historique — front de mer",
      description: "Cheminements, éclairage discret et signalétique bilingue pour améliorer l'accueil sans dénaturer le site.",
      image: "ouidah-allee",
    },
    {
      id: "centre-interpretation",
      title: "Centre d'interprétation de la mémoire",
      sector: "Culture",
      status: "En cours",
      progress: 41,
      budget: "860 M FCFA",
      quarter: "Quartier Zomai",
      description: "Un espace documentaire et pédagogique pour les écoles, les chercheurs et les visiteurs.",
      image: "ouidah-porte",
    },
    {
      id: "plage",
      title: "Éclairage et sécurisation du front de mer",
      sector: "Cadre de vie",
      status: "En cours",
      progress: 90,
      budget: "310 M FCFA",
      quarter: "Plage de Ouidah",
      description: "Mâts solaires, accès piétons et panneaux de prévention sur la baignade.",
      image: "ouidah-plage",
    },
    {
      id: "marche",
      title: "Marché artisanal couvert",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "220 M FCFA",
      quarter: "Centre-ville",
      description: "Vingt-cinq ateliers de vente pour les artisans locaux, avec un espace de démonstration.",
      image: "benin-tissu",
    },
  ],

  budget: {
    year: "2026",
    total: "6,2",
    operating: "3,4",
    investment: "2,8",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine et mémoire", value: 1.2, pct: 19 },
      { label: "Tourisme et culture", value: 0.9, pct: 15 },
      { label: "Voirie et accès", value: 0.8, pct: 13 },
      { label: "Environnement", value: 0.7, pct: 11 },
      { label: "Action sociale", value: 0.6, pct: 10 },
      { label: "Fonctionnement", value: 2.0, pct: 32 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "OU/2026/006", title: "Réhabilitation des cheminements de la Route de l'Esclave", type: "Travaux", amount: "348 M FCFA", date: "30/09/2026", status: "Attribué" },
    { ref: "OU/2026/011", title: "Signalétique patrimoniale bilingue", type: "Fournitures", amount: "26 M FCFA", date: "19/10/2026", status: "Attribué" },
    { ref: "OU/2026/014", title: "Étude d'impact du centre d'interprétation", type: "Services", amount: "18 M FCFA", date: "10/11/2026", status: "Publié" },
  ],

  documents: [
    { title: "Schéma directeur du patrimoine mémoriel", type: "PDF", size: "6,4 Mo", date: "18/03/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "1,1 Mo", date: "22/01/2026" },
    { title: "Programme culturel 2026-2027", type: "PDF", size: "2,2 Mo", date: "05/10/2026" },
  ],

  attractions: [
    { name: "La Porte du Non-Retour", type: "Mémoire", text: "Le monument face à l'océan, point d'aboutissement de la Route de l'Esclave.", image: "ouidah-porte", distance: "Front de mer", duration: "1 h" },
    { name: "Le Temple des Pythons", type: "Culture", text: "Un lieu de culte vivant, à visiter dans le respect des pratiques et des consignes.", image: "ouidah-python", distance: "Centre", duration: "30 min" },
    { name: "La Forêt sacrée de Kpassè", type: "Nature", text: "Un espace boisé chargé de récits, lié à l'histoire fondatrice de la ville.", image: "ouidah-rituel", distance: "Centre", duration: "45 min" },
    { name: "La plage de Ouidah", type: "Nature", text: "Sable, palmiers et coucher de soleil : le visage paisible du littoral.", image: "ouidah-plage", distance: "5 min du centre", duration: "Libre" },
  ],

  history: [
    { year: "XVIIe s.", title: "Le royaume de Xwéda", text: "Ouidah se développe comme centre politique et commercial de la côte, en lien avec les réseaux régionaux." },
    { year: "XVIIIe — XIXe s.", title: "Un port de la traite atlantique", text: "La ville devient un lieu majeur de la déportation d'Africains vers les Amériques, mémoire aujourd'hui commémorée." },
    { year: "1999", title: "La Route de l'Esclave", text: "L'itinéraire mémoriel et la Porte du Non-Retour sont aménagés pour accueillir visiteurs et descendants." },
  ],

  map: {
    terrain: "coast",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 50, y: 45, note: "Accueil et services communaux" },
      { name: "Porte du Non-Retour", type: "tourism", x: 52, y: 78, note: "Site mémoriel, front de mer" },
      { name: "Temple des Pythons", type: "tourism", x: 44, y: 52, note: "Lieu de culte et de visite" },
      { name: "Forêt de Kpassè", type: "tourism", x: 38, y: 60, note: "Espace boisé et récits fondateurs" },
      { name: "Plage", type: "nature", x: 62, y: 82, note: "Front de mer et coucher de soleil" },
      { name: "Musée de Ouidah", type: "culture", x: 46, y: 37, note: "Collections et histoire de la ville" },
      { name: "Marché central", type: "market", x: 56, y: 40, note: "Commerce quotidien" },
      { name: "École publique", type: "education", x: 30, y: 50, note: "École primaire de quartier" },
    ],
  },

  gastronomy: [
    { name: "Poisson braisé", text: "Pêché sur la côte, grillé aux épices et servi avec de l'attiéké ou du riz." },
    { name: "Akassa", text: "Pâte de maïs fermentée, incontournable des repas de famille." },
    { name: "Atassi", text: "Riz et haricots, plat simple et généreux des jours de marché." },
  ],

  economy: {
    text: "Tourisme mémoriel, pêche, agriculture et artisanat structurent l'économie locale. La commune cherche à faire du patrimoine un levier de développement pour les habitants, pas seulement pour les visiteurs.",
    sectors: [
      { name: "Tourisme et culture", share: 30 },
      { name: "Commerce et artisanat", share: 26 },
      { name: "Pêche et agriculture", share: 24 },
      { name: "Services", share: 20 },
    ],
  },

  culture: {
    text: "Ouidah est un carrefour spirituel et artistique. Les pratiques vodoun, la musique, la danse et les arts visuels y occupent une place centrale, dans le respect de leurs dimensions sacrées.",
    highlights: ["Cultures vodoun", "Danse et musique", "Arts visuels", "Mémoire de la diaspora"],
  },

  youth: {
    text: "La commune soutient les jeunes artistes, guides et porteurs de projets culturels, avec des espaces de formation et des rendez-vous réguliers.",
    programs: ["Ateliers de médiation culturelle", "Résidences d'artistes", "Guides patrimoine juniors", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Ouidah",
    phone: "+229 22 00 00 00",
    email: "contact@ouidah.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "10 arrondissements",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote: "Ouidah ne se visite pas seulement : elle s'écoute. Notre rôle est de transmettre cette mémoire avec dignité et de la rendre utile au quotidien.",
    text: "Le mot du maire est un contenu de démonstration. Il montre comment une commune peut porter une parole forte sans confondre communication institutionnelle et récit historique.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Comment préparer une visite de la Route de l'Esclave ?", a: "La rubrique Tourisme présente les lieux, les durées et un formulaire de contact de démonstration." },
    { q: "Les cérémonies vodoun sont-elles ouvertes à tous ?", a: "Certaines manifestations publiques le sont ; les lieux de culte ont leurs propres règles. Renseignez-vous auprès des guides." },
    { q: "Où stationner près de la plage ?", a: "Des espaces de stationnement de démonstration sont indiqués sur la carte interactive." },
  ],

  seo: {
    description: "Portail communal de démonstration pour Ouidah : mémoire, patrimoine, tourisme, démarches, actualités et projets.",
  },
};

export default {
  slug: "boukoumbe",
  name: "Boukoumbé",
  nameWithDe: "de Boukoumbé",
  nameWithA: "à Boukoumbé",
  department: "Atacora",
  region: "Bénin septentrional",
  motto: "Le pays des tatas",
  positioning:
    "À l'ouest de l'Atacora, Boukoumbé est une commune de montagnes et de villages tata, à proximité du Togo. L'architecture somba, les pentes cultivées et les marchés en font un territoire singulier du nord-ouest béninois.",

  identity: {
    primary: "#6b4a2a",
    deep: "#493016",
    accent: "#d9a13a",
    soft: "#f0e6d6",
    paper: "#f9f2e3",
    ink: "#1f1710",
    motif: "pyramid",
  },

  hero: {
    kicker: "Commune de Boukoumbé · Atacora",
    title: "Boukoumbé,",
    titleAccent: "les tatas au pied des montagnes",
    lead: "Des villages de terre, des pentes cultivées et un horizon de montagnes : Boukoumbé perpétue une architecture et un mode de vie liés au relief.",
    image: "boukoumbe-ville",
    ctaPrimary: { label: "Découvrir Boukoumbé", href: "#decouvrir" },
    ctaSecondary: { label: "Préparer sa visite", href: "#tourisme" },
  },

  intro: {
    eyebrow: "Bienvenue",
    title: "Une architecture qui raconte le territoire",
    text: "Les tatas de Boukoumbé ne sont pas des vestiges : ce sont des maisons, des greniers et des lieux de vie. Leur construction en terre et leur organisation défensive disent l'histoire d'un peuple qui a su s'adapter à un relief difficile. La commune veut préserver ce patrimoine vivant sans le transformer en décor.",
    pullquote:
      "Un tata n'est pas un monument à photographier : c'est une maison où l'on dort, où l'on stocke et où l'on transmet.",
    image: "boukoumbe-site",
    caption: "Un village tata sur les pentes de l'Atacora.",
  },

  stats: [
    { value: "1", label: "pays tata", note: "Architecture vivante" },
    { value: "1", label: "massif de l'Atacora", note: "Relief structurant" },
    { value: "1", label: "frontière proche", note: "Togo" },
    { value: "4", label: "projets suivis", note: "Donnée de démonstration" },
  ],

  services: ["acte-naissance", "agriculture", "tourisme", "culture", "marche", "foncier", "environnement", "signalement"],
  serviceNote: "Les démarches sont présentées à titre de démonstration. Aucun paiement réel n'est effectué.",

  news: [
    {
      id: "tatas",
      title: "Tatas : un programme de restauration accompagné",
      category: "Patrimoine",
      date: "12 novembre 2026",
      dateISO: "2026-11-12",
      excerpt: "Des artisans locaux restaurent les enduits et les toitures de trois concessions.",
      image: "boukoumbe-site",
      featured: true,
    },
    {
      id: "marche-boukoumbe",
      title: "Le marché de Boukoumbé couvre ses allées",
      category: "Économie",
      date: "3 novembre 2026",
      dateISO: "2026-11-03",
      excerpt: "Un hangar protège les vivriers et les produits de la montagne.",
      image: "boukoumbe-ville",
      featured: false,
    },
    {
      id: "pistes-boukoumbe",
      title: "Deux pistes de montagne réhabilitées",
      category: "Voirie",
      date: "25 octobre 2026",
      dateISO: "2026-10-25",
      excerpt: "Les travaux de démonstration améliorent l'accès des villages aux marchés.",
      image: "benin-piste",
      featured: false,
    },
    {
      id: "ecole-boukoumbe",
      title: "Une école de village raccordée à l'eau",
      category: "Éducation",
      date: "16 octobre 2026",
      dateISO: "2026-10-16",
      excerpt: "Forage et latrines améliorent les conditions d'accueil des élèves.",
      image: "boukoumbe-vie",
      featured: false,
    },
  ],

  events: [
    {
      id: "conseil-boukoumbe",
      title: "Conseil communal",
      date: "6 décembre 2026",
      dateISO: "2026-12-06",
      time: "10 h",
      place: "Hôtel de ville, Boukoumbé",
      category: "Institution",
      description: "Budget, patrimoine et pistes rurales : session publique.",
      image: "boukoumbe-ville",
      free: true,
    },
    {
      id: "fete-tatas",
      title: "Journées des tatas",
      date: "18 — 19 décembre 2026",
      dateISO: "2026-12-18",
      time: "09 h — 18 h",
      place: "Villages partenaires",
      category: "Patrimoine",
      description: "Visites guidées, ateliers de construction en terre et rencontres avec les habitants.",
      image: "boukoumbe-site",
      free: false,
    },
    {
      id: "randonnee-atacora",
      title: "Randonnée des crêtes",
      date: "17 janvier 2027",
      dateISO: "2027-01-17",
      time: "07 h",
      place: "Départ : place du marché",
      category: "Nature",
      description: "Parcours guidé sur les pentes de l'Atacora, avec lecture du paysage.",
      image: "boukoumbe-paysage",
      free: false,
    },
  ],

  projects: [
    {
      id: "tatas",
      title: "Restauration accompagnée de trois tatas",
      sector: "Patrimoine",
      status: "En cours",
      progress: 44,
      budget: "210 M FCFA",
      quarter: "Villages de la commune",
      description: "Enduits, toitures et gestion des eaux de pluie avec des artisans locaux.",
      image: "boukoumbe-site",
    },
    {
      id: "pistes",
      title: "Réhabilitation de pistes de montagne",
      sector: "Voirie",
      status: "En cours",
      progress: 51,
      budget: "740 M FCFA",
      quarter: "Ouest de la commune",
      description: "Empierrement, busage et entretien des accotements.",
      image: "benin-piste",
    },
    {
      id: "marche",
      title: "Hangar du marché central",
      sector: "Économie",
      status: "Livré",
      progress: 100,
      budget: "150 M FCFA",
      quarter: "Centre",
      description: "Hangar, étals et point d'eau pour les productrices.",
      image: "boukoumbe-ville",
    },
    {
      id: "ecole",
      title: "École et forage de village",
      sector: "Éducation",
      status: "En cours",
      progress: 72,
      budget: "128 M FCFA",
      quarter: "Village de hauteur",
      description: "Trois classes, forage et latrines séparées.",
      image: "boukoumbe-ville",
    },
  ],

  budget: {
    year: "2026",
    total: "4,4",
    operating: "2,6",
    investment: "1,8",
    unit: "milliards FCFA",
    breakdown: [
      { label: "Patrimoine et tourisme", value: 0.5, pct: 11 },
      { label: "Voirie et pistes", value: 0.7, pct: 16 },
      { label: "Agriculture", value: 0.4, pct: 9 },
      { label: "Éducation", value: 0.4, pct: 9 },
      { label: "Action sociale", value: 0.5, pct: 11 },
      { label: "Fonctionnement", value: 1.9, pct: 44 },
    ],
    note: "Répartition indicative de démonstration. Les montants ne constituent pas des données budgétaires officielles.",
  },

  markets: [
    { ref: "BK/2026/004", title: "Restauration de trois tatas", type: "Travaux", amount: "118 M FCFA", date: "15/07/2026", status: "Attribué" },
    { ref: "BK/2026/008", title: "Réhabilitation de pistes de montagne", type: "Travaux", amount: "402 M FCFA", date: "02/09/2026", status: "Attribué" },
    { ref: "BK/2026/012", title: "Fourniture de mobilier scolaire", type: "Fournitures", amount: "14 M FCFA", date: "24/10/2026", status: "Publié" },
  ],

  documents: [
    { title: "Charte de restauration des tatas", type: "PDF", size: "4,1 Mo", date: "18/04/2026" },
    { title: "Budget primitif 2026 — synthèse", type: "PDF", size: "0,9 Mo", date: "30/01/2026" },
    { title: "Plan de développement touristique", type: "PDF", size: "3,3 Mo", date: "21/08/2026" },
  ],

  attractions: [
    { name: "Les villages tata", type: "Mémoire", text: "Des concessions de terre construites sur plusieurs niveaux, à visiter avec l'accord des habitants.", image: "boukoumbe-site", distance: "Villages", duration: "Demi-journée" },
    { name: "Les montagnes de l'Atacora", type: "Nature", text: "Des crêtes et des pentes cultivées qui offrent des panoramas sur le nord-ouest.", image: "boukoumbe-paysage", distance: "Autour de la commune", duration: "Journée" },
    { name: "Le marché de Boukoumbé", type: "Vie locale", text: "Vivriers, produits de la montagne et artisanat au rythme des jours de marché.", image: "boukoumbe-ville", distance: "Centre", duration: "1 h" },
    { name: "Les boutiques de quartier", type: "Artisanat", text: "Des savoir-faire de construction et de poterie transmis dans les villages.", image: "boukoumbe-vie", distance: "Villages", duration: "45 min" },
  ],

  history: [
    { year: "XVIIIe — XIXe s.", title: "Habiter la pente", text: "Les communautés somba développent une architecture de terre adaptée au relief et aux besoins de défense." },
    { year: "XXe s.", title: "Un patrimoine reconnu", text: "Les tatas de l'Atacora attirent chercheurs et visiteurs, tandis que les villages poursuivent leur vie agricole." },
    { year: "Aujourd'hui", title: "Restaurer sans muséifier", text: "La commune cherche à accompagner la restauration des tatas en préservant leurs usages et leurs habitants." },
  ],

  map: {
    terrain: "mountain",
    pois: [
      { name: "Hôtel de ville", type: "civic", x: 48, y: 44, note: "Services administratifs" },
      { name: "Village tata", type: "tourism", x: 38, y: 34, note: "Architecture de terre" },
      { name: "Marché central", type: "market", x: 56, y: 50, note: "Commerce quotidien" },
      { name: "Centre de santé", type: "health", x: 44, y: 58, note: "Soins de proximité" },
      { name: "École", type: "education", x: 62, y: 42, note: "Enseignement primaire" },
      { name: "Crêtes de l'Atacora", type: "nature", x: 26, y: 28, note: "Panoramas et randonnées" },
      { name: "Zone agricole", type: "nature", x: 30, y: 62, note: "Pentes cultivées" },
      { name: "Atelier de terre", type: "economy", x: 66, y: 60, note: "Construction et poterie" },
    ],
  },

  gastronomy: [
    { name: "Tô de maïs", text: "Pâte de maïs servie avec une sauce de feuilles ou d'arachide." },
    { name: "Wagasi", text: "Fromage peul grillé, proposé sur les marchés de la montagne." },
    { name: "Igname", text: "Pilée ou bouillie, elle accompagne les repas des familles de l'Atacora." },
  ],

  economy: {
    text: "L'agriculture de montagne, l'élevage et le commerce de marché structurent l'économie. Le coton, le maïs et le sorgho occupent les pentes, tandis que l'artisanat de la terre et le tourisme apportent des revenus complémentaires. La commune veut améliorer les pistes et accompagner la restauration du patrimoine.",
    sectors: [
      { name: "Agriculture et élevage", share: 46 },
      { name: "Commerce et artisanat", share: 22 },
      { name: "Tourisme et patrimoine", share: 18 },
      { name: "Transport et services", share: 14 },
    ],
  },

  culture: {
    text: "La culture somba est vive dans les rites, les récits et l'architecture. Les fêtes de récolte et les marchés restent des moments de rencontre entre les villages de la commune.",
    highlights: ["Architecture tata", "Culture somba", "Fêtes de récolte", "Artisanat de terre"],
  },

  youth: {
    text: "Les jeunes sont confrontés à l'enclavement et au sous-emploi. Les programmes de démonstration soutiennent la formation aux métiers de la construction, du tourisme et de l'agriculture.",
    programs: ["Métiers de la terre", "Formation touristique", "Clubs sportifs", "Appels à projets"],
  },

  contacts: {
    address: "Hôtel de ville, centre administratif, Boukoumbé",
    phone: "+229 22 00 00 00",
    email: "contact@boukoumbe.example",
    hours: "Lundi — vendredi, 08 h — 16 h",
    arrondissements: "Arrondissements communaux",
    quartiers: "Quartiers et villages",
  },

  mayor: {
    quote:
      "Nos tatas sont habités. Les restaurer, c'est d'abord écouter ceux qui y vivent et leur donner les moyens de continuer à les entretenir.",
    text: "Le mot du maire est un contenu de démonstration. Il place les habitants au centre de la valorisation du patrimoine.",
    signature: "Le Maire",
    note: "Texte de démonstration — aucun nom ni portrait officiel n'est utilisé.",
  },

  faq: [
    { q: "Peut-on visiter les tatas ?", a: "La visite se fait avec l'accord des habitants et un guide local ; la page Tourisme décrit le cadre de la démonstration." },
    { q: "Comment contribuer à la restauration ?", a: "Le formulaire de contact permet de transmettre une proposition au service patrimoine." },
    { q: "Où se tient le marché ?", a: "Au chef-lieu ; la carte interactive de démonstration en indique l'emplacement symbolique." },
  ],

  seo: {
    description:
      "Portail communal de démonstration pour Boukoumbé : tatas, montagnes de l'Atacora, marché, démarches et projets du nord-ouest.",
  },
};

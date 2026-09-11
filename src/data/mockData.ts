import { SDGItem, CommissionItem, PartnerItem, ActionItem, EventItem } from '../types';

// High-resolution photography links depicting African youth, universities, modern African cities, green architecture, and academic excellence
export const DEFAULT_IMAGES = {
  heroStudents: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80", // African university students collaborating happily
  heroCampus: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80", // Modern campus building with green lawn
  heroEcocity: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80", // Green architecture with solar & vertical gardens
  actionScholarships: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", // Young students in uniform holding certificates
  actionDakar: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80", // Community gathering and roundtable workshop
  presidentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
};

export const SDG_LIST: SDGItem[] = [
  {
    id: 1,
    code: "ODD 1",
    title: "PAS DE PAUVRETÉ",
    subtitle: "Éradication de la pauvreté",
    description: "Autonomisation économique des jeunes et octroi de micro-bourses d'études pour briser le cycle de la précarité.",
    bgColor: "from-rose-600 to-red-600",
    iconName: "Users",
    progress: 75,
    stats: "1,250+ bénéficiaires"
  },
  {
    id: 4,
    code: "ODD 4",
    title: "ÉDUCATION DE QUALITÉ",
    subtitle: "Excellence académique",
    description: "Programmes de mentorat d'élite, accès aux technologies éducatives et bourses d'excellence universitaire panafricaine.",
    bgColor: "from-sky-600 to-blue-700",
    iconName: "GraduationCap",
    progress: 90,
    stats: "450 bourses attribuées"
  },
  {
    id: 7,
    code: "ODD 7",
    title: "ÉNERGIE PROPRE",
    subtitle: "Transition énergétique",
    description: "Formation aux énergies solaires photovoltaïques et déploiement de kits solaires connectés dans les écoles partenaires.",
    bgColor: "from-amber-400 to-yellow-500",
    iconName: "Sun",
    progress: 60,
    stats: "32 écoles équipées"
  },
  {
    id: 9,
    code: "ODD 9",
    title: "INNOVATION",
    subtitle: "Industrie & Infrastructure",
    description: "Incubateur de projets technologiques et laboratoires d'innovation ouverts pour les jeunes chercheurs africains.",
    bgColor: "from-orange-500 to-amber-600",
    iconName: "Cpu",
    progress: 85,
    stats: "28 startups incubées"
  },
  {
    id: 11,
    code: "ODD 11",
    title: "VILLES DURABLES",
    subtitle: "Projet Ecocity",
    description: "Modélisation et mise en œuvre de solutions urbaines durables, végétalisées et résilientes pour les métropoles africaines.",
    bgColor: "from-emerald-500 to-green-600",
    iconName: "Building2",
    progress: 70,
    stats: "3 projets pilotes"
  },
  {
    id: 13,
    code: "ODD 13",
    title: "ACTION CLIMAT",
    subtitle: "Préservation écologique",
    description: "Sensibilisation citoyenne, reboisement intelligent et plaidoyer pour une transition écologique juste.",
    bgColor: "from-teal-600 to-cyan-700",
    iconName: "Globe",
    progress: 80,
    stats: "15,000 arbres plantés"
  }
];

export const COMMISSIONS: CommissionItem[] = [
  {
    id: "education",
    title: "Éducation & Recherche",
    description: "Conception de programmes académiques innovants, octroi de bourses d'excellence et vulgarisation scientifique.",
    iconName: "Lightbulb",
    lead: "Dr. Aïssatou Diallo",
    membersCount: 42,
    initiatives: [
      "Programme 'Bourses d'Excellence AEI 2024-2025'",
      "Académies régionales de leadership académique",
      "Conférence Panafricaine sur l'Éducation Supérieure"
    ]
  },
  {
    id: "technologie",
    title: "Technologie & Innovation",
    description: "Accélération des projets de transformation numérique, IA éthique et valorisation des talents tech africains.",
    iconName: "Settings",
    lead: "Ing. Kwame Mensah",
    membersCount: 58,
    initiatives: [
      "Bootcamp de codage et d'IA pour les lycéennes et étudiantes",
      "Hackathon annuel 'InnovAfrique Challenge'",
      "FabLabs communautaires et makerspaces ouverts"
    ]
  },
  {
    id: "developpement",
    title: "Développement Durable",
    description: "Projets de résilience climatique, transition énergétique, urbanisme vert et initiatives zéro déchet.",
    iconName: "Leaf",
    lead: "Mme. Mariam Kouassi",
    membersCount: 36,
    initiatives: [
      "Déploiement du Projet Pilote EcoCity à Dakar et Lomé",
      "Installation de micro-centrales solaires scolaires",
      "Plaidoyer pour l'économie circulaire locale"
    ]
  },
  {
    id: "partenariats",
    title: "Partenariats & Réseaux",
    description: "Fédération des diasporas, relations institutionnelles, financements d'impact et coopérations académiques.",
    iconName: "Handshake",
    lead: "M. Ibrahima Sarr",
    membersCount: 29,
    initiatives: [
      "Réseau Panafricain des Alumni d'Excellence",
      "Accords de partenariats bilatéraux avec universités et entreprises",
      "Fonds de dotation philanthropique pour la jeunesse"
    ]
  }
];

export const PARTNERS: PartnerItem[] = [
  {
    id: "ctia",
    name: "CTIA",
    category: "Technologie & Innovation",
    description: "Centre des Technologies de l'Information Avancées pour l'Afrique",
    logoText: "CTIA"
  },
  {
    id: "mpl",
    name: "MPL-TOGO",
    category: "Organisation Partenaire",
    description: "Mouvement Panafricain pour le Leadership et le Développement",
    logoText: "MPL-TOGO"
  },
  {
    id: "univ-dakar",
    name: "Université Numérique Cheikh Hamidou Kane",
    category: "Partenaire Académique",
    description: "Pôle d'excellence en e-learning et formations certifiantes",
    logoText: "UNCHK"
  },
  {
    id: "africafund",
    name: "Africa Innovation Fund",
    category: "Bailleur d'Impact",
    description: "Soutien financier aux initiatives à fort impact sociétal",
    logoText: "AIF Impact"
  }
];

export const ACTIONS: ActionItem[] = [
  {
    id: "bourses-2024",
    title: "Remise des Bourses d'Excellence 2024",
    date: "14 Août 2024",
    location: "Lomé, Togo",
    summary: "Cérémonie solennelle récompensant 50 lauréats parmi les meilleurs bacheliers et étudiants méritants de la région.",
    fullStory: "Dans le cadre de son programme annuel de promotion de l'excellence académique, l'Association Excellence & Innovations (AEI) a octroyé 50 bourses complètes d'études universitaires ainsi qu'un accompagnement personnalisé par des mentors de haut niveau issus des diasporas.",
    imageUrl: DEFAULT_IMAGES.actionScholarships,
    category: "Éducation",
    beneficiariesCount: 50
  },
  {
    id: "ecocity-dakar",
    title: "Lancement du programme Ecocity à Dakar",
    date: "28 Juillet 2024",
    location: "Dakar, Sénégal",
    summary: "Atelier citoyen et déploiement de la première phase pilote de micro-infrastructures vertes urbaines.",
    fullStory: "Le Projet Ecocity franchit une étape majeure avec la pose de la première pierre de l'éco-espace communautaire à Dakar, intégrant des ombrières solaires, un système de récupération des eaux pluviales et un jardin pédagogique partagé.",
    imageUrl: DEFAULT_IMAGES.actionDakar,
    category: "Développement Durable",
    beneficiariesCount: 300
  },
  {
    id: "bootcamp-tech",
    title: "Bootcamp 'Femmes & IA de Demain'",
    date: "05 Juillet 2024",
    location: "Abidjan, Côte d'Ivoire",
    summary: "Formation intensive de 100 jeunes femmes ingénieures aux outils d'intelligence artificielle et de data science.",
    fullStory: "Une semaine d'immersion totale avec des experts internationaux pour former la future génération de leaders féminines dans la tech africaine.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    category: "Technologie",
    beneficiariesCount: 100
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "gala-2024",
    title: "Gala Annuel de l'Excellence Africaine",
    date: "15 Novembre 2024",
    time: "19h00 - 23h00 GMT",
    location: "Hôtel 2 Février, Lomé & Streaming Live",
    mode: "Hybride",
    description: "Soirée de levée de fonds et remise des prix aux innovateurs africains de l'année.",
    speaker: "Président Signa Kaore & Invités d'Honneur"
  },
  {
    id: "webinar-ecocity",
    title: "Webinaire : L'Architecture Verte dans les Villes Africaines",
    date: "04 Octobre 2024",
    time: "15h00 GMT",
    location: "En ligne (Zoom / YouTube Live)",
    mode: "En ligne",
    description: "Présentation des résultats de recherche du Projet EcoCity et échange avec des urbanistes.",
    speaker: "Commission Développement Durable AEI"
  }
];

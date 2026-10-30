export interface Project {
  id: string;
  title: string;
  category: 'web-fullstack' | 'ai-trading' | 'geomatic-civil' | 'branding-strategy' | 'marketing-content';
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  stack: string[];
  metrics?: string;
  features: string[];
  status?: string;
  badge?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  missions: string[];
  badges: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Marlet Djenontin',
    tagline: 'Développeur Full-Stack Web & Mobile Freelance | Technicien Supérieur Génie Civil',
    subtagline: 'Allier l’ingénierie logicielle moderne à la rigueur structurelle du terrain.',
    status: 'Disponible pour missions & projets freelance',
    location: 'Cotonou / Abomey-Calavi, Bénin',
    email: 'djenmarlet@gmail.com',
    whatsapp: '+22945563069',
    whatsappLink: 'https://wa.me/22945563069',
    hndDegree: 'Technicien Supérieur en Génie Civil (HND, Polytech Ada)',
    agencyRole: 'Responsable Adjoint d’Élite Hospitality Consulting (EHC)',
    languages: [
      { name: 'Français', level: 'Natif / Langue de travail' },
      { name: 'Italien', level: 'Rédaction & Communication' },
      { name: 'Allemand', level: 'Rédaction & Communication' },
    ],
    passions: ['Basketball 🏀', 'Open Source 🐧', 'Cybersécurité', 'Affiliation Amazon'],
  },

  projects: [
    {
      id: 'momo-mvp-caf',
      title: 'Vote MVP Football Féminin CAF',
      category: 'web-fullstack',
      categoryLabel: 'Fintech & Web',
      subtitle: 'Plateforme de vote en direct avec paiement MTN Mobile Money',
      description:
        'Système de vote en temps réel pour le football féminin de la CAF avec passerelle de paiement sécurisée MTN MoMo.',
      longDescription:
        'Conception intégrale d’une plateforme de vote interactive pour les supporters du football féminin africain. Intégration de l’API MTN MoMo pour traiter instantanément les paiements de votes par Mobile Money, avec gestion des webhooks de validation, contrôle anti-fraude et tableau de bord en direct.',
      role: 'Développeur Full-Stack & Intégration Fintech',
      stack: ['React', 'Vite', 'Node.js', 'Express', 'MTN MoMo API', 'Supabase', 'Tailwind CSS'],
      metrics: 'Transactions instantanées & vote certifié MoMo',
      features: [
        'Passerelle de paiement MTN MoMo fluide (Mobile Money Bénin/Afrique)',
        'Tableau de score et décompte des votes en direct',
        'Contrôle anti-triche et validation par webhook bancaire',
        'Interface optimisée pour smartphones à faible débit',
      ],
      badge: 'Fintech / Production',
      featured: true,
    },
    {
      id: 'ai-chartist-agent',
      title: 'Agent IA d’Analyse de Figures Chartistes',
      category: 'ai-trading',
      categoryLabel: 'IA & Trading',
      subtitle: 'Reconnaissance automatisée de patterns techniques boursiers',
      description:
        'Agent intelligent d’analyse technique pour détecter les figures chartistes et assister les décisions de trading.',
      longDescription:
        'Système d’intelligence artificielle combinant vision par ordinateur et modèles de langage (LLM via OpenRouter/LM Studio) pour identifier automatiquement les figures clés du chartisme (Épaule-Tête-Épaule, Doubles Sommets, Drapeaux, Triangles) sur les graphiques de marché et générer des rapports de probabilités probabilistes.',
      role: 'Architecte IA & Développeur Algorithmique',
      stack: ['Node.js', 'Python', 'LM Studio', 'Claude Code / OpenRouter', 'WebSockets', 'Canvas API'],
      metrics: 'Détection géométrique & synthèse textuelle',
      features: [
        'Algorithme de repérage des points pivots et lignes de tendance',
        'Interprétation contextuelle par LLM local et API cloud',
        'Calcul automatique des ratios Risk/Reward et cibles de cours',
        'Architecture modulaire orientée vie privée et exécution rapide',
      ],
      status: 'En cours de conception',
      badge: 'R&D / En cours',
      featured: true,
    },
    {
      id: 'ecommerce-q4-ajagency',
      title: 'Sites E-commerce Nouvel An — AJagency',
      category: 'web-fullstack',
      categoryLabel: 'E-commerce',
      subtitle: 'Front-end React/Vite haute conversion (Mission Calibration Q4)',
      description:
        'Boutiques éphémères haute vélocité développées pour la période de pointe commerciale du Nouvel An.',
      longDescription:
        'Intervention au sein du sprint Q4 d’AJagency pour concevoir des vitrines e-commerce ultra-réactives sous React/Vite. Priorité absolue aux Core Web Vitals : chargement initial < 1.2s, micro-animations Framer Motion incitatives, parcours d’achat frictionless et adaptabilité mobile complète.',
      role: 'Développeur Front-End Référent',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Stripe'],
      metrics: 'Score Lighthouse 98+ & Taux de rebond réduit',
      features: [
        'Architecture composant modulaire réutilisable sur plusieurs marques',
        'Optimisation agressive des images et bundles JavaScript',
        'Tunnel de paiement optimisé pour le mobile',
        'Intégration d’analytics événementiels précis',
      ],
      badge: 'Haute Conversion',
      featured: true,
    },
    {
      id: 'qgis-gbetagbo',
      title: 'Cartographie SIG — Points d’Eau GBÉTAGBO',
      category: 'geomatic-civil',
      categoryLabel: 'Génie Civil & SIG',
      subtitle: 'Système d’information géographique et plans techniques PDF/DXF',
      description:
        'Géoréférencement complet et modélisation spatiale de l’accès à l’eau potable à Cotonou/Abomey-Calavi.',
      longDescription:
        'Projet combinant collecte numérique sur smartphone via KoBoToolbox et traitement géomatique sous QGIS. Création d’une base spatiale exhaustive des points d’eau du quartier de Gbétagbo, analyse des zones blanches d’accès, génération de plans d’aménagement au format PDF et exportations vectorielles DXF pour les bureaux d’études.',
      role: 'Ingénieur SIG & Cartographe Terrain',
      stack: ['QGIS', 'KoBoToolbox', 'AutoCAD', 'Format DXF', 'GeoJSON', 'Cartographie Mobile'],
      metrics: 'Recensement spatial & restitution vectorielle',
      features: [
        'Collecte géolocalisée hors-ligne avec fiches KoBoToolbox',
        'Analyse spatiale de densité et zones de couverture des bornes-fontaines',
        'Exportation de plans architecturaux et voiries sous AutoCAD (DXF)',
        'Atlas cartographique interactif prêt pour les décideurs municipaux',
      ],
      badge: 'Territoire & Eau',
      featured: true,
    },
    {
      id: 'ehc-hospitality-branding',
      title: 'Élite Hospitality Consulting (EHC)',
      category: 'branding-strategy',
      categoryLabel: 'Opérations & Branding',
      subtitle: 'Direction adjointe, identité visuelle vert & or et supports VIP',
      description:
        'Gestion opérationnelle de l’agence et création intégrale du système de marque physique et digital.',
      longDescription:
        'En tant que Responsable Adjoint d’Élite Hospitality Consulting, agence de conseil en hôtellerie et événementiel, pilotage des activités et conception complète de l’écosystème de communication : charte visuelle verte et or, cartes de visite de prestige avec QR codes dynamiques, flyers de recrutement de personnel hôtelier, discours d’accueil et processus d’accueil.',
      role: 'Responsable Adjoint & Directeur Artistique',
      stack: ['Direction Artistique', 'Identité Vert & Or', 'QR Codes Dynamiques', 'Relations Publiques'],
      metrics: 'Déploiement événementiel & recrutement d’équipes',
      features: [
        'Identité graphique distinctive (code couleur vert bouteille et dorure)',
        'Cartes de visite connectées avec QR Code et fiche contact instantanée',
        'Flyers et campagnes de recrutement de brigades et maîtres d’hôtel',
        'Rédaction des protocoles d’accueil et discours officiels',
      ],
      badge: 'Management & Marque',
      featured: false,
    },
    {
      id: 'marketing-ads-wifi',
      title: 'Campagnes Google Ads, Social & WiFi Zone',
      category: 'marketing-content',
      categoryLabel: 'Marketing Digital',
      subtitle: 'Google Merchant Center, Performance Max, Ads Meta & WiFi Zone Bénin',
      description:
        'Stratégies d’acquisition en ligne et communication visuelle locale pour commerces et portails WiFi.',
      longDescription:
        'Déploiement de stratégies d’acquisition publicitaire multicanales : configuration de flux Google Merchant Center avec campagnes Google Ads Shopping et Performance Max. Réalisation d’affiches impactantes pour réseaux sociaux et pour les points d’accès WiFi Zone au Bénin, conception de bios et chartes TikTok orientées engagement.',
      role: 'Consultant Acquisition & Graphiste Marketing',
      stack: ['Google Ads (PMax)', 'Merchant Center', 'Meta Ads', 'Graphic Design', 'TikTok Marketing'],
      metrics: 'Campagnes ROIstes & visibilité de proximité',
      features: [
        'Configuration des flux produits et suivi des conversions e-commerce',
        'Conception d’affiches promotionnelles adaptées aux réalités locales',
        'Copywriting persuasif trilingue (FR, IT, DE)',
        'Stratégie de monétisation et affiliation Amazon basée sur le contenu',
      ],
      badge: 'Acquisition & Contenu',
      featured: false,
    },
  ] as Project[],

  skillCategories: [
    {
      title: 'Front-End Moderne',
      iconName: 'Code2',
      description: 'Interfaces réactives, dynamiques, accessibles et fluides au millième de seconde.',
      skills: [
        { name: 'React / Vite', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Framer Motion' },
        { name: 'TypeScript / JavaScript' },
        { name: 'i18n Multilingue' },
        { name: 'Responsive Web Design' },
      ],
    },
    {
      title: 'Back-End & Bases de données',
      iconName: 'Database',
      description: 'Architectures robustes, sécurisées, intégration de passerelles bancaires et APIs.',
      skills: [
        { name: 'Node.js / Express', highlight: true },
        { name: 'PostgreSQL / Supabase', highlight: true },
        { name: 'PHP / MySQL' },
        { name: 'Prisma ORM' },
        { name: 'MTN Mobile Money API', highlight: true },
        { name: 'Auth JWT & Sessions' },
      ],
    },
    {
      title: 'Développement Mobile',
      iconName: 'Smartphone',
      description: 'Applications natives et cross-platform adaptées aux réalités du réseau africain et mondial.',
      skills: [
        { name: 'React Native / Expo', highlight: true },
        { name: 'Flutter / Dart', highlight: true },
        { name: 'Gestion Offline & Cache' },
        { name: 'Push Notifications' },
      ],
    },
    {
      title: 'Cloud, DevOps & Hébergement',
      iconName: 'Globe2',
      description: 'Déploiement continu sans friction, configuration des DNS, certificats SSL et bases managées.',
      skills: [
        { name: 'Vercel / Netlify', highlight: true },
        { name: 'Railway / Neon DB', highlight: true },
        { name: 'Hostinger (DNS / SSL)' },
        { name: 'Git & GitHub Workflow' },
      ],
    },
    {
      title: 'Environnement de Travail & IA',
      iconName: 'Terminal',
      description: 'Écosystème puissant sous Linux, agents intelligents et assistants de programmation augmentés.',
      skills: [
        { name: 'Parrot OS (Linux / Sécu)', highlight: true },
        { name: 'Claude Code & Windsurf', highlight: true },
        { name: 'LM Studio (Modèles Locaux)' },
        { name: 'OpenRouter / APIs LLM' },
      ],
    },
    {
      title: 'Génie Civil & SIG',
      iconName: 'Compass',
      description: 'Rigueur géométrique, modélisation de plans, métrés détaillés et cartographie spatiale.',
      skills: [
        { name: 'AutoCAD / ArchiCAD', highlight: true },
        { name: 'QGIS (Systèmes SIG)', highlight: true },
        { name: 'KoBoToolbox (Collecte)' },
        { name: 'Métrés & DQE Chantier', highlight: true },
        { name: 'Suivi de chantier & Béton' },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: '2024 – Présent',
      role: 'Responsable Adjoint & Consultant Digital',
      company: 'Élite Hospitality Consulting (EHC)',
      location: 'Cotonou, Bénin',
      type: 'Direction Opérationnelle & Conseil',
      missions: [
        'Supervision opérationnelle des projets de conseil en hôtellerie et événementiel haut de gamme.',
        'Direction artistique et identité de marque (charte vert & or, cartes QR connectées, supports de recrutement).',
        'Élaboration des processus de qualité de service et formation aux standards d’accueil VIP.',
      ],
      badges: ['Management', 'Branding', 'Événementiel', 'Direction'],
    },
    {
      period: '2023 – Présent',
      role: 'Développeur Full-Stack Web & Mobile Freelance',
      company: 'Indépendant / Projets Internationaux & Locaux',
      location: 'Cotonou / Remote',
      type: 'Freelance & R&D',
      missions: [
        'Développement de la plateforme de vote MVP Football Féminin CAF avec intégration de paiement MTN MoMo.',
        'Conception de l’Agent IA d’analyse technique et reconnaissance de figures chartistes.',
        'Missions e-commerce haute conversion sous React/Vite (notamment sprint Q4 avec AJagency).',
        'Campagnes Google Ads (Shopping & Performance Max) et supports de communication pour entreprises.',
      ],
      badges: ['Full-Stack', 'MTN MoMo', 'React / Node', 'Mobile', 'IA'],
    },
    {
      period: '24/11/2023 – 23/05/2024',
      role: 'Technicien Supérieur Conducteur de Travaux',
      company: 'OBJECTIF CONSTRUCTION Bénin',
      location: 'Bénin',
      type: 'Génie Civil / Chantier',
      missions: [
        'Implantation précise des bâtiments et semelles de fondations conformément aux plans d’exécution.',
        'Suivi quotidien des équipes de chantier, contrôle qualité des coffrages, ferraillages et coordination des coulages de béton.',
        'Établissement des attachements contradictoires et vérification des situations de paiement des sous-traitants.',
        'Montage des dossiers techniques, devis quantitatifs estimatifs (DQE) et réponses aux appels d’offres.',
        'Suivi-contrôle des travaux sur infrastructures éducatives avec respect des plannings d’exécution.',
      ],
      badges: ['Chantier BTP', 'Implantation', 'Béton Armé', 'DQE & Métrés', 'Appels d’Offres'],
    },
    {
      period: 'Mission de terrain',
      role: 'Chef d’équipe en cartographie censitaire',
      company: 'Enquêtes Démographiques & Spatiales',
      location: 'Bénin',
      type: 'Cartographie & SIG',
      missions: [
        'Encadrement et supervision d’une équipe d’enquêteurs cartographes sur le terrain.',
        'Contrôle qualité des relevés de parcelles, des infrastructures et des limites administratives.',
        'Centralisation et apurement des données géographiques avant intégration dans le SIG.',
      ],
      badges: ['Cartographie', 'Management d’Équipe', 'Données Terrain', 'SIG'],
    },
  ] as ExperienceItem[],

  education: [
    {
      diploma: 'Technicien Supérieur en Génie Civil (HND / BTS)',
      school: 'Polytech Ada',
      location: 'Cotonou, Bénin',
      details: 'Formation d’excellence en mécanique des structures, béton armé, topographie, métrés et gestion de chantiers.',
    },
    {
      diploma: 'Parcours Autodidacte en Ingénierie Logicielle & IA',
      school: 'Auto-formation continue & Pratique intensive',
      location: 'Environnement Parrot OS / Linux',
      details: 'Spécialisation en architectures React/Node, écosystèmes mobiles Expo/Flutter, modèles d’IA générative et cybersécurité.',
    },
  ],

  marketingAndContent: [
    {
      title: 'Google Merchant Center & Ads',
      desc: 'Configuration avancée de flux produits, campagnes Shopping et Performance Max (PMax) avec tracking précis du ROAS.',
      tag: 'E-commerce & Ads',
    },
    {
      title: 'Affiches Réseaux & WiFi Zone Bénin',
      desc: 'Conception graphique percutante adaptée aux contextes locaux (portails WiFi de quartier, affiches Facebook, bannières).',
      tag: 'Communication Locale',
    },
    {
      title: 'Création de Contenu & Communauté Tech',
      desc: 'Partage d’astuces autour de Parrot OS, de l’open source, de la cybersécurité et de la vie de développeur sur Facebook & TikTok.',
      tag: 'Communauté & Partage',
    },
    {
      title: 'Affiliation Amazon par le Contenu',
      desc: 'Mise en place de stratégies de contenu éditorial trilingue (FR, IT, DE) orientées recommandation de matériel et d’outils tech.',
      tag: 'Monétisation',
    },
  ],
};

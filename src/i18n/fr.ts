export const fr = {
  // Navigation
  nav: {
    services: "./services",
    projects: "./projets",
    about: "./about",
    pricing: "./tarifs",
    contact: "./contact",
  },

  // Hero
  hero: {
    fromError: "DE L'ERREUR",
    code: "404",
    toSuccess: "À LA RÉUSSITE",
    subtitle:
      "Agence digitale spécialisée dans la création de solutions sur-mesure.",
    subtitleHighlight: "Imaginez, créez",
    subtitleEnd: "et transformez vos idées en réalité.",
    cta: "DÉMARRER_PROJET",
  },

  // About
  about: {
    title: "À_PROPOS",
    subtitle: "// README.md",
    heading: "# 404Factory",
    missionTitle: "## Ma Mission",
    missionText:
      "Transformer les défis techniques en opportunités créatives. Je crois que chaque erreur 404 cache une solution innovante.",
    approachTitle: "## Mon Approche",
    approach: [
      "Code propre et maintenable",
      "Design centré utilisateur",
      "Technologies modernes",
      "Collaboration transparente",
    ],
    stackTitle: "## Stack Technique",
    contactTitle: "## Contact",
  },

  // Services
  services: {
    title: "SERVICES",
    subtitle: "// Mes expertises techniques",
    items: [
      {
        title: "SITES_SUR_MESURE",
        description:
          "Développement web moderne avec les dernières technologies. React, Next.js, Node.js.",
      },
      {
        title: "AUTOMATISATIONS",
        description:
          "Scripts personnalisés, APIs, intégrations. Automatisez vos processus métier.",
      },
      {
        title: "CONSULTING_TECH",
        description:
          "Audit technique, architecture, optimisation. Expertise à votre service.",
      },
    ],
  },

  // Projects
  projects: {
    title: "PROJETS",
    subtitle: "// Portfolio de réalisations",
    terminal: "user@404factory:~/projects$ ls -la",
    catCommand: "user@404factory:~/projects$ cat",
    viewProject: "Voir le projet",
    viewAll: "VOIR TOUS LES PROJETS",
    descriptions: {
      opera:
        "Plateforme facilitant les demandes côté utilisateur et la gestion des inscriptions côté admin.",
      factory: "Site vitrine de mon agence.",
      portfolio: "Mon Portfolio inspiré de Windows 11.",
      glados:
        "Mon propre langage de programmation avec interpréteur et compilateur.",
    },
    types: {
      opera: "Plateforme de gestion des inscriptions",
    },
  },

  // Pricing
  pricing: {
    title: "TARIFS",
    subtitle: "// Mes solutions et leurs prix",
    popular: "POPULAIRE",
    quote: "Sur devis",
    items: [
      {
        title: "SITE_VITRINE",
        subtitle: "Site web moderne et responsive",
        features: [
          "Design sur mesure",
          "Responsive mobile/desktop",
          "Optimisation SEO",
          "Hébergement 1 an inclus",
        ],
      },
      {
        title: "APPLICATION_WEB",
        subtitle: "Solution complète avec backend",
        features: [
          "Interface utilisateur avancée",
          "Base de données",
          "API REST/GraphQL",
          "Authentification",
        ],
      },
      {
        title: "AUTOMATISATION",
        subtitle: "Scripts et intégrations sur mesure",
        features: [
          "Analyse des besoins",
          "Scripts personnalisés",
          "Intégrations API",
          "Documentation complète",
        ],
      },
    ],
  },

  // Contact
  contact: {
    title: "CONTACT",
    subtitle: "// Démarrons votre projet",
    terminal: "user@404factory:~$ ./start-project",
    success: "Message envoyé avec succès !",
    form: {
      name: "> Nom du client:",
      namePlaceholder: "John Doe",
      email: "> Email:",
      emailPlaceholder: "john@example.com",
      projectType: "> Type de projet:",
      projectSelect: "Sélectionner...",
      projectWebsite: "Site web",
      projectAutomation: "Automatisation",
      projectConsulting: "Consulting",
      description: "> Description du projet:",
      descriptionPlaceholder: "Décrivez votre projet...",
      sending: "ENVOI_EN_COURS...",
      send: "ENVOYER_MESSAGE",
    },
    info: {
      title: "Informations de contact",
      phone: "Téléphone",
      location: "Localisation",
    },
    responseTime: {
      title: "Temps de réponse",
      email: "Email:",
      quote: "Devis:",
      project: "Projet:",
      custom: "Sur mesure",
    },
  },

  // Footer
  footer: {
    rights: "Tous droits réservés.",
  },

  // 404 Page
  notFound: {
    systemError: "ERREUR SYSTÈME",
    subtitle: "// Page introuvable dans notre usine",
    backHome: "Retour à l'accueil",
    footer: "Producteurs d'erreurs depuis 2024",
  },
};

export type Translations = typeof fr;

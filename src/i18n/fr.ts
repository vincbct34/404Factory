export const fr = {
  // SEO Meta
  seo: {
    title: "404Factory | Agence Digitale Montpellier",
    description:
      "Développeur freelance à Montpellier : sites web sur-mesure, automatisations et consulting technique. Des solutions qui convertissent.",
    ogTitle: "404Factory | De l'erreur à la réussite",
    ogDescription:
      "Développeur freelance à Montpellier spécialisé dans la création de sites web sur-mesure, automatisations et consulting technique.",
  },

  // Navigation
  nav: {
    services: "./services",
    projects: "./projets",
    about: "./about",
    process: "./processus",
    contact: "./contact",
    skipToContent: "Aller au contenu principal",
    logoAlt: "404Factory — Développeur freelance Montpellier",
  },

  // Hero
  hero: {
    fromError: "DE L'ERREUR",
    code: "404",
    toSuccess: "À LA RÉUSSITE",
    subtitle:
      "Développeur freelance à Montpellier. Je crée des sites et des outils qui font grandir votre activité.",
    subtitleHighlight: "Imaginez, créez",
    subtitleEnd: "et transformez vos idées en résultats concrets.",
    cta: "DÉMARRER_PROJET",
  },

  // About
  about: {
    title: "À_PROPOS",
    subtitle: "// README.md",
    heading: "# Qui suis-je ?",
    bio: "Je suis développeur freelance basé à Montpellier. Passionné par le code depuis toujours, j'aide les entreprises et les indépendants à se démarquer sur le web avec des solutions sur-mesure.",
    photoAlt: "Photo de profil",
    missionTitle: "## Ce que je fais",
    missionText:
      "Je transforme vos idées en produits numériques concrets : sites web qui convertissent, outils qui vous font gagner du temps, et solutions techniques qui résolvent vos vrais problèmes.",
    approachTitle: "## Pourquoi moi ?",
    approach: [
      "Un seul interlocuteur, pas une agence avec 10 intermédiaires",
      "Code propre et maintenable, pas de boîte noire",
      "Communication transparente à chaque étape",
      "Disponible et réactif, basé à Montpellier",
    ],
    stackTitle: "## Stack Technique",
    contactTitle: "## Contact",
  },

  // Services
  services: {
    title: "SERVICES",
    subtitle: "// Ce que je peux faire pour vous",
    items: [
      {
        title: "SITES_SUR_MESURE",
        description:
          "Un site qui reflète votre image et convertit vos visiteurs en clients. Design moderne, performance optimale, référencement naturel inclus.",
      },
      {
        title: "AUTOMATISATIONS",
        description:
          "Libérez-vous des tâches répétitives. Je connecte vos outils et automatise vos processus pour vous faire gagner du temps et de l'argent.",
      },
      {
        title: "CONSULTING_TECH",
        description:
          "Vous avez un projet technique mais ne savez pas par où commencer ? Je vous accompagne de l'idée à la solution, avec un plan d'action clair.",
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
      factory: "Site vitrine de mon activité freelance.",
      portfolio: "Mon Portfolio inspiré de Windows 11.",
      glados:
        "Mon propre langage de programmation avec interpréteur et compilateur.",
      qreview: "Outil de review de code avec interface web interactive.",
    },
    types: {
      opera: "Plateforme de gestion des inscriptions",
      factory: "Site vitrine",
      portfolio: "Portfolio",
      glados: "Langage de programmation",
      qreview: "Outil de review",
    },
  },

  // Testimonials
  testimonials: {
    title: "TÉMOIGNAGES",
    subtitle: "// Ce que mes clients disent",
    items: [
      {
        name: "Opéra Orchestre Montpellier",
        role: "Client institutionnel",
        text: "La plateforme d'inscription a simplifié notre gestion administrative. Un travail professionnel, livré dans les délais.",
      },
      {
        name: "À personnaliser",
        role: "Votre prochain témoignage",
        text: "Remplacez ce texte par un vrai témoignage client. Les avis authentiques sont votre meilleur argument de vente.",
      },
    ],
  },

  // Process
  process: {
    title: "PROCESSUS",
    subtitle: "// Comment ça se passe",
    steps: [
      {
        title: "DÉCOUVERTE",
        description:
          "On échange sur votre projet, vos objectifs et vos contraintes. Je vous propose une solution adaptée et un devis détaillé.",
        command: "init --project",
      },
      {
        title: "CONCEPTION",
        description:
          "Je dessine l'architecture et le design de votre solution. Vous validez chaque étape avant de passer à la suite.",
        command: "design --validate",
      },
      {
        title: "DÉVELOPPEMENT",
        description:
          "Je code votre projet avec les technologies les plus adaptées. Vous suivez l'avancement en temps réel.",
        command: "build --progress",
      },
      {
        title: "LANCEMENT",
        description:
          "Tests, déploiement et mise en ligne. Je vous forme à l'utilisation et reste disponible pour le suivi.",
        command: "deploy --production",
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

  // Validation
  validation: {
    nameMin: "Le nom doit contenir au moins 2 caractères",
    emailInvalid: "Adresse email invalide",
    projectRequired: "Veuillez sélectionner un type de projet",
    messageMin: "Le message doit contenir au moins 10 caractères",
    validationError: "Erreur de validation",
    sendFailed: "Erreur lors de l'envoi. Veuillez réessayer.",
  },

  // Footer
  footer: {
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
  },

  // Legal
  legal: {
    title: "MENTIONS_LÉGALES",
    subtitle: "// Informations juridiques",
    backHome: "Retour à l'accueil",
    editor: {
      title: "Éditeur du site",
      name: "Nom / Raison sociale :",
      namePlaceholder: "404Factory",
      status: "Statut :",
      statusPlaceholder: "Micro-entrepreneur",
      siret: "SIRET :",
      siretPlaceholder: "98798393900016",
      address: "Adresse :",
      addressPlaceholder:
        "Non communiquée (dispensé conformément à l'article 19 de la loi n°2014-626)",
      phone: "Téléphone :",
      email: "Email :",
    },
    hosting: {
      title: "Hébergement",
      provider: "Hébergeur :",
      providerPlaceholder: "Railway Corporation",
      address: "Adresse :",
      addressPlaceholder: "San Francisco, CA, États-Unis — https://railway.app",
    },
    intellectual: {
      title: "Propriété intellectuelle",
      text: "L'ensemble du contenu de ce site (textes, images, code source) est protégé par le droit d'auteur. Toute reproduction sans autorisation préalable est interdite.",
    },
    data: {
      title: "Données personnelles",
      text: "Ce site collecte des données personnelles via le formulaire de contact (nom, email) dans le seul but de répondre à vos demandes. Ces données ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
    },
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

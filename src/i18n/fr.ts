export const fr = {
  // SEO Meta — per page
  seo: {
    home: {
      title: "404Factory — On construit ce qui manque",
      description:
        "Studio indépendant à Montpellier : sites web sur-mesure, automatisations et consulting technique. 404 veut dire introuvable — on construit ce qui manque.",
    },
    work: {
      title: "Projets — 404Factory",
      description:
        "Travaux choisis : plateformes, sites et outils construits sur-mesure par 404Factory, studio indépendant à Montpellier.",
    },
    services: {
      title: "Services — 404Factory",
      description:
        "Sites sur-mesure, automatisations, consulting technique. Ce que 404Factory fait, et comment ça se passe.",
    },
    studio: {
      title: "Studio — 404Factory",
      description:
        "404Factory est le studio de Vincent Bichat, développeur indépendant à Montpellier. Un seul interlocuteur, du code propre, des solutions qui durent.",
    },
    contact: {
      title: "Contact — 404Factory",
      description:
        "Démarrons votre projet. Réponse sous 24h, devis sous 48h. Montpellier, France.",
    },
    caseStudyOpera: {
      title: "Étude de cas : Opéra Orchestre Montpellier — 404Factory",
      description:
        "Plateforme d'inscriptions sur-mesure pour l'Opéra Orchestre National Montpellier : Next.js, Prisma, PostgreSQL. Étude de cas par 404Factory.",
    },
    legal: {
      title: "Mentions légales — 404Factory",
      description: "Informations juridiques du site 404Factory.",
    },
    notFound: {
      title: "Erreur 404 — 404Factory",
      description: "Page introuvable. C'est notre spécialité.",
    },
  },

  // Navigation
  nav: {
    work: "Projets",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    skipToContent: "Aller au contenu principal",
    homeAria: "404factory — accueil",
  },

  // Fixed page chrome (marginalia)
  chrome: {
    left: "404factory — on construit ce qui manque",
    right: "43.6109° N · 3.8772° E — Montpellier",
  },

  // Footer
  footer: {
    // CTA renders as: {ctaPre}◯{ctaPost} →  (the ring replaces the "o")
    ctaPre: "Parl",
    ctaPost: "ns-en",
    copyright: "© {year} 404FACTORY — MONTPELLIER",
    legal: "Mentions légales",
  },

  // Hero (home)
  hero: {
    folio: "ERROR 404 — PAGE FOUND",
    strap:
      "Studio indépendant à Montpellier, pour les pages que le web n'avait pas trouvées. Design et ingénierie au même niveau d'exigence — y compris la part qu'on ne voit jamais.",
    coordsLine1: "MONTPELLIER — FRANCE",
    coordsLine2: "TRAVAUX CHOISIS ↓",
  },

  // Marquee items (joined with ring separators)
  marquee: [
    "ON CONSTRUIT CE QUI MANQUE",
    "SITES SUR-MESURE",
    "AUTOMATISATIONS",
    "CONSULTING TECHNIQUE",
  ],

  // Home sections
  home: {
    work: {
      idx: "01",
      title: "Travaux choisis",
      count: "2024 — 2026",
      viewAll: "Tous les projets",
    },
    services: {
      idx: "02",
      title: "Ce qu'on fait",
      count: "03 disciplines",
    },
    studio: {
      idx: "03",
      title: "Le studio",
      count: "MANIFESTO",
      // Words wrapped in [[..]] light up in Klein blue on scroll
      manifesto:
        "404, c'est le web qui avoue qu'il [[manque]] quelque chose. On en a fait un métier : concevoir ce qui devrait exister et le construire pour [[durer]] — proprement, jusque dans la part que personne ne voit.",
    },
  },

  // Projects — shared between home and work page
  projects: {
    viewProject: "Voir le projet",
    viewCase: "Lire l'étude de cas",
    items: {
      opera: {
        title: "Opéra Orchestre Montpellier",
        description:
          "Plateforme d'inscriptions : demandes côté utilisateur, gestion côté administration.",
        type: "Plateforme de gestion",
        ph: "OPÉRA",
      },
      factory: {
        title: "404Factory",
        description:
          "Le site du studio — celui que vous êtes en train de lire.",
        type: "Site vitrine",
        ph: "FACTORY",
      },
      portfolio: {
        title: "portfoliOS",
        description: "Un portfolio personnel inspiré de Windows 11.",
        type: "Portfolio",
        ph: "OS",
      },
      glados: {
        title: "GLaDOS",
        description:
          "Un langage de programmation complet, avec interpréteur et compilateur.",
        type: "Langage de programmation",
        ph: "GLADOS",
      },
      qreview: {
        title: "QReview",
        description: "Outil de review de code avec interface web interactive.",
        type: "Outil de review",
        ph: "QREVIEW",
      },
    },
  },

  // Work index page
  workPage: {
    idx: "01",
    title: "Projets",
    count: "05 PROJETS",
    intro:
      "Plateformes, sites et outils — construits sur-mesure, sans template, et maintenus pour durer.",
  },

  // Case study — generic labels + Opéra content
  caseStudy: {
    labels: {
      client: "Client",
      role: "Rôle",
      stack: "Stack",
      status: "Statut",
      visit: "Voir le site",
      back: "← Tous les projets",
    },
    opera: {
      folio: "ÉTUDE DE CAS — 001",
      title: "Opéra Orchestre Montpellier",
      client: "Opéra Orchestre National Montpellier",
      role: "Design & développement",
      stack: "Next.js · Prisma · PostgreSQL",
      status: "En production",
      intro:
        "Une plateforme d'inscriptions pour une institution culturelle : les demandes côté public, la gestion côté administration.",
      contextTitle: "Le contexte",
      contextText:
        "L'Opéra Orchestre National Montpellier gérait ses inscriptions par des processus manuels. Il manquait un outil unique : un endroit où le public dépose ses demandes, et où l'équipe les traite.",
      solutionTitle: "Ce qu'on a construit",
      solutionText:
        "Une application web sur-mesure : un parcours d'inscription simple côté utilisateur, un back-office complet côté administration — suivi des demandes, gestion des inscriptions, données centralisées. Construite avec Next.js, Prisma et PostgreSQL, en production continue depuis sa mise en ligne.",
      quoteTitle: "Le client",
      quote:
        "La plateforme d'inscription a simplifié notre gestion administrative. Un travail professionnel, livré dans les délais.",
      quoteAuthor: "Opéra Orchestre Montpellier",
    },
  },

  // Services page
  services: {
    idx: "02",
    title: "Services",
    count: "03 DISCIPLINES",
    intro:
      "Trois façons de construire ce qui vous manque. Un seul interlocuteur du premier échange à la mise en ligne.",
    items: [
      {
        n: "001",
        title: "Sites sur-mesure",
        short: "Design éditorial, performance, référencement — sans template.",
        description:
          "Un site qui reflète votre image et convertit vos visiteurs en clients. Design moderne, performance optimale, référencement naturel inclus.",
      },
      {
        n: "002",
        title: "Automatisations",
        short: "Vos outils connectés, vos tâches répétitives supprimées.",
        description:
          "Libérez-vous des tâches répétitives. Je connecte vos outils et automatise vos processus pour vous faire gagner du temps et de l'argent.",
      },
      {
        n: "003",
        title: "Consulting technique",
        short: "De l'idée au plan d'action, clairement.",
        description:
          "Vous avez un projet technique mais ne savez pas par où commencer ? Je vous accompagne de l'idée à la solution, avec un plan d'action clair.",
      },
    ],
    process: {
      idx: "02b",
      title: "Comment ça se passe",
      count: "04 ÉTAPES",
      steps: [
        {
          n: "01",
          title: "Découverte",
          description:
            "On échange sur votre projet, vos objectifs et vos contraintes. Je vous propose une solution adaptée et un devis détaillé.",
        },
        {
          n: "02",
          title: "Conception",
          description:
            "Je dessine l'architecture et le design de votre solution. Vous validez chaque étape avant de passer à la suite.",
        },
        {
          n: "03",
          title: "Développement",
          description:
            "Je code votre projet avec les technologies les plus adaptées. Vous suivez l'avancement en temps réel.",
        },
        {
          n: "04",
          title: "Lancement",
          description:
            "Tests, déploiement et mise en ligne. Je vous forme à l'utilisation et reste disponible pour le suivi.",
        },
      ],
    },
  },

  // Studio page
  studio: {
    idx: "03",
    title: "Studio",
    count: "MONTPELLIER, FRANCE",
    kicker: "Qui est derrière 404Factory",
    bio: "Je suis Vincent Bichat, développeur indépendant basé à Montpellier. Passionné par le code depuis toujours, j'aide les entreprises et les indépendants à se démarquer sur le web avec des solutions sur-mesure.",
    photoAlt: "Vincent Bichat — 404Factory",
    missionTitle: "Ce que je fais",
    missionText:
      "Je transforme vos idées en produits numériques concrets : sites web qui convertissent, outils qui vous font gagner du temps, et solutions techniques qui résolvent vos vrais problèmes.",
    approachTitle: "Pourquoi moi",
    approach: [
      "Un seul interlocuteur, pas une agence avec 10 intermédiaires",
      "Code propre et maintenable, pas de boîte noire",
      "Communication transparente à chaque étape",
      "Disponible et réactif, basé à Montpellier",
    ],
    stackTitle: "Stack technique",
    reviewsTitle: "Ce que les clients disent",
    reviewsCount: "TÉMOIGNAGES",
    staticReview: {
      name: "Opéra Orchestre Montpellier",
      role: "Client institutionnel",
      text: "La plateforme d'inscription a simplifié notre gestion administrative. Un travail professionnel, livré dans les délais.",
    },
  },

  // Contact page
  contact: {
    idx: "04",
    title: "Contact",
    count: "RÉPONSE < 24H",
    intro:
      "Un projet, une idée, une page qui manque ? Décrivez-la — on vous répond sous 24 heures.",
    success: "Message envoyé. Réponse sous 24h.",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "vous@exemple.fr",
      projectType: "Type de projet",
      projectSelect: "Sélectionner…",
      projectWebsite: "Site web",
      projectAutomation: "Automatisation",
      projectConsulting: "Consulting",
      description: "Le projet",
      descriptionPlaceholder: "Décrivez ce qui vous manque…",
      sending: "Envoi en cours…",
      send: "Envoyer",
    },
    info: {
      title: "Coordonnées",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Montpellier, France",
    },
    responseTime: {
      title: "Délais",
      email: "Réponse email",
      emailValue: "< 24h",
      quote: "Devis",
      quoteValue: "< 48h",
      project: "Projet",
      projectValue: "Sur mesure",
    },
  },

  // Validation (used by useContactForm — keep keys)
  validation: {
    nameMin: "Le nom doit contenir au moins 2 caractères",
    emailInvalid: "Adresse email invalide",
    projectRequired: "Veuillez sélectionner un type de projet",
    messageMin: "Le message doit contenir au moins 10 caractères",
    validationError: "Erreur de validation",
    sendFailed: "Erreur lors de l'envoi. Veuillez réessayer.",
  },

  // Legal
  legal: {
    title: "Mentions légales",
    kicker: "Informations juridiques",
    backHome: "← Retour à l'accueil",
    editor: {
      title: "Éditeur du site",
      name: "Nom / Raison sociale",
      namePlaceholder: "404Factory",
      status: "Statut",
      statusPlaceholder: "Micro-entrepreneur",
      siret: "SIRET",
      siretPlaceholder: "98798393900016",
      address: "Adresse",
      addressPlaceholder:
        "Non communiquée (dispensé conformément à l'article 19 de la loi n°2014-626)",
      phone: "Téléphone",
      email: "Email",
    },
    hosting: {
      title: "Hébergement",
      provider: "Hébergeur",
      providerPlaceholder: "Railway Corporation",
      address: "Adresse",
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
    folio: "ERROR 404 — PAGE NOT FOUND",
    line: "Cette page est introuvable. Ça tombe bien : construire ce qui manque, c'est le métier.",
    // CTA renders as: {ctaPre}◯{ctaPost} →
    ctaPre: "C",
    ctaPost: "nsidérez-la retrouvée",
    backHome: "Retour à l'accueil",
    footer: "Producteurs d'erreurs depuis 2024",
  },
};

export type Translations = typeof fr;

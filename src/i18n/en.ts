import type { Translations } from "./fr";

export const en: Translations = {
  // SEO Meta — per page
  seo: {
    home: {
      title: "404Factory — We build what's missing",
      description:
        "Independent studio in Montpellier, France: custom websites, automations and technical consulting. 404 means not found — we build what's missing.",
    },
    work: {
      title: "Work — 404Factory",
      description:
        "Selected work: platforms, websites and tools custom-built by 404Factory, an independent studio in Montpellier, France.",
    },
    services: {
      title: "Services — 404Factory",
      description:
        "Custom websites, automations, technical consulting. What 404Factory does, and how it works.",
    },
    studio: {
      title: "Studio — 404Factory",
      description:
        "404Factory is the studio of Vincent Bichat, independent developer in Montpellier, France. One point of contact, clean code, solutions built to last.",
    },
    contact: {
      title: "Contact — 404Factory",
      description:
        "Let's start your project. Reply within 24h, quote within 48h. Montpellier, France.",
    },
    caseStudyOpera: {
      title: "Case study: Opéra Orchestre Montpellier — 404Factory",
      description:
        "A custom registration platform for the Opéra Orchestre National Montpellier: Next.js, Prisma, PostgreSQL. A 404Factory case study.",
    },
    legal: {
      title: "Legal notice — 404Factory",
      description: "Legal information for the 404Factory website.",
    },
    notFound: {
      title: "Error 404 — 404Factory",
      description: "Page not found. That's our specialty.",
    },
  },

  // Navigation
  nav: {
    work: "Work",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    skipToContent: "Skip to main content",
    homeAria: "404factory — home",
  },

  // Fixed page chrome (marginalia)
  chrome: {
    left: "404factory — we build what's missing",
    right: "43.6109° N · 3.8772° E — Montpellier",
  },

  // Footer
  footer: {
    ctaPre: "C",
    ctaPost: "nsider it found",
    copyright: "© {year} 404FACTORY — MONTPELLIER",
    legal: "Legal notice",
  },

  // Hero (home)
  hero: {
    folio: "ERROR 404 — PAGE FOUND",
    strap:
      "An independent studio in Montpellier, for the pages the web couldn't find. Design and engineering held to the same standard — including the side you never see.",
    coordsLine1: "MONTPELLIER — FRANCE",
    coordsLine2: "SELECTED WORK ↓",
  },

  // Marquee items (joined with ring separators)
  marquee: [
    "WE BUILD WHAT'S MISSING",
    "CUSTOM WEBSITES",
    "AUTOMATIONS",
    "TECHNICAL CONSULTING",
  ],

  // Home sections
  home: {
    work: {
      idx: "01",
      title: "Selected work",
      count: "2024 — 2026",
      viewAll: "All projects",
    },
    services: {
      idx: "02",
      title: "What we do",
      count: "03 disciplines",
    },
    studio: {
      idx: "03",
      title: "The studio",
      count: "MANIFESTO",
      manifesto:
        "404 is the web admitting something is [[missing]]. We took it as a job description: design what should exist and engineer it to [[last]] — cleanly, down to the part nobody sees.",
    },
  },

  // Projects — shared between home and work page
  projects: {
    viewProject: "View project",
    viewCase: "Read the case study",
    items: {
      opera: {
        title: "Opéra Orchestre Montpellier",
        description:
          "A registration platform: requests on the public side, management on the admin side.",
        type: "Management platform",
        ph: "OPÉRA",
      },
      factory: {
        title: "404Factory",
        description: "The studio's own site — the one you're reading.",
        type: "Studio website",
        ph: "FACTORY",
      },
      portfolio: {
        title: "portfoliOS",
        description: "A personal portfolio inspired by Windows 11.",
        type: "Portfolio",
        ph: "OS",
      },
      glados: {
        title: "GLaDOS",
        description:
          "A complete programming language, with interpreter and compiler.",
        type: "Programming language",
        ph: "GLADOS",
      },
      qreview: {
        title: "QReview",
        description: "A code review tool with an interactive web interface.",
        type: "Review tool",
        ph: "QREVIEW",
      },
    },
  },

  // Work index page
  workPage: {
    idx: "01",
    title: "Work",
    count: "05 PROJECTS",
    intro:
      "Platforms, websites and tools — custom-built, template-free, and maintained to last.",
  },

  // Case study — generic labels + Opéra content
  caseStudy: {
    labels: {
      client: "Client",
      role: "Role",
      stack: "Stack",
      status: "Status",
      visit: "Visit the site",
      back: "← All projects",
    },
    opera: {
      folio: "CASE STUDY — 001",
      title: "Opéra Orchestre Montpellier",
      client: "Opéra Orchestre National Montpellier",
      role: "Design & development",
      stack: "Next.js · Prisma · PostgreSQL",
      status: "In production",
      intro:
        "A registration platform for a cultural institution: requests on the public side, management on the admin side.",
      contextTitle: "The context",
      contextText:
        "The Opéra Orchestre National Montpellier handled registrations through manual processes. What was missing was a single tool: one place where the public submits requests, and where the team processes them.",
      solutionTitle: "What we built",
      solutionText:
        "A custom web application: a simple registration flow on the user side, a full back office on the admin side — request tracking, registration management, centralized data. Built with Next.js, Prisma and PostgreSQL, running in production since launch.",
      quoteTitle: "The client",
      quote:
        "The registration platform simplified our administrative management. Professional work, delivered on time.",
      quoteAuthor: "Opéra Orchestre Montpellier",
    },
  },

  // Services page
  services: {
    idx: "02",
    title: "Services",
    count: "03 DISCIPLINES",
    intro:
      "Three ways to build what you're missing. One point of contact from first call to launch.",
    items: [
      {
        n: "001",
        title: "Custom websites",
        short: "Editorial design, performance, SEO — no templates.",
        description:
          "A website that reflects your image and converts visitors into clients. Modern design, optimal performance, organic SEO included.",
      },
      {
        n: "002",
        title: "Automations",
        short: "Your tools connected, your repetitive tasks removed.",
        description:
          "Free yourself from repetitive tasks. I connect your tools and automate your processes to save you time and money.",
      },
      {
        n: "003",
        title: "Technical consulting",
        short: "From idea to action plan, clearly.",
        description:
          "You have a technical project but don't know where to start? I guide you from idea to solution, with a clear action plan.",
      },
    ],
    process: {
      idx: "02b",
      title: "How it works",
      count: "04 STEPS",
      steps: [
        {
          n: "01",
          title: "Discovery",
          description:
            "We discuss your project, goals and constraints. I propose a suitable solution and a detailed quote.",
        },
        {
          n: "02",
          title: "Design",
          description:
            "I design the architecture and look of your solution. You validate each step before moving forward.",
        },
        {
          n: "03",
          title: "Development",
          description:
            "I build your project with the most suitable technologies. You follow the progress in real time.",
        },
        {
          n: "04",
          title: "Launch",
          description:
            "Testing, deployment and go-live. I train you on the tool and stay available for follow-up.",
        },
      ],
    },
  },

  // Studio page
  studio: {
    idx: "03",
    title: "Studio",
    count: "MONTPELLIER, FRANCE",
    kicker: "Who's behind 404Factory",
    bio: "I'm Vincent Bichat, an independent developer based in Montpellier. Passionate about code since forever, I help companies and freelancers stand out on the web with custom solutions.",
    photoAlt: "Vincent Bichat — 404Factory",
    missionTitle: "What I do",
    missionText:
      "I turn your ideas into concrete digital products: websites that convert, tools that save you time, and technical solutions that solve your real problems.",
    approachTitle: "Why me",
    approach: [
      "One point of contact, not an agency with 10 intermediaries",
      "Clean, maintainable code — no black box",
      "Transparent communication at every step",
      "Available and responsive, based in Montpellier",
    ],
    stackTitle: "Tech stack",
    reviewsTitle: "What clients say",
    reviewsCount: "TESTIMONIALS",
    staticReview: {
      name: "Opéra Orchestre Montpellier",
      role: "Institutional client",
      text: "The registration platform simplified our administrative management. Professional work, delivered on time.",
    },
  },

  // Contact page
  contact: {
    idx: "04",
    title: "Contact",
    count: "REPLY < 24H",
    intro:
      "A project, an idea, a page that's missing? Describe it — you'll hear back within 24 hours.",
    success: "Message sent. Reply within 24h.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      projectType: "Project type",
      projectSelect: "Select…",
      projectWebsite: "Website",
      projectAutomation: "Automation",
      projectConsulting: "Consulting",
      description: "The project",
      descriptionPlaceholder: "Describe what's missing…",
      sending: "Sending…",
      send: "Send",
    },
    info: {
      title: "Details",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Montpellier, France",
    },
    responseTime: {
      title: "Timing",
      email: "Email reply",
      emailValue: "< 24h",
      quote: "Quote",
      quoteValue: "< 48h",
      project: "Project",
      projectValue: "Custom",
    },
  },

  // Validation (used by useContactForm — keep keys)
  validation: {
    nameMin: "Name must be at least 2 characters",
    emailInvalid: "Invalid email address",
    projectRequired: "Please select a project type",
    messageMin: "Message must be at least 10 characters",
    validationError: "Validation error",
    sendFailed: "Failed to send. Please try again.",
  },

  // Legal
  legal: {
    title: "Legal notice",
    kicker: "Legal information",
    backHome: "← Back to home",
    editor: {
      title: "Site publisher",
      name: "Name / Company",
      namePlaceholder: "404Factory",
      status: "Status",
      statusPlaceholder: "Sole proprietor (micro-entrepreneur)",
      siret: "SIRET",
      siretPlaceholder: "98798393900016",
      address: "Address",
      addressPlaceholder:
        "Not disclosed (exempt under article 19 of French law n°2014-626)",
      phone: "Phone",
      email: "Email",
    },
    hosting: {
      title: "Hosting",
      provider: "Host",
      providerPlaceholder: "Railway Corporation",
      address: "Address",
      addressPlaceholder: "San Francisco, CA, USA — https://railway.app",
    },
    intellectual: {
      title: "Intellectual property",
      text: "All content on this site (text, images, source code) is protected by copyright. Any reproduction without prior authorization is prohibited.",
    },
    data: {
      title: "Personal data",
      text: "This site collects personal data through the contact form (name, email) for the sole purpose of responding to your requests. This data is not shared with third parties. In accordance with the GDPR, you have the right to access, rectify and delete your data.",
    },
  },

  // 404 Page
  notFound: {
    folio: "ERROR 404 — PAGE NOT FOUND",
    line: "This page is missing. Good thing building what's missing is the job.",
    ctaPre: "C",
    ctaPost: "nsider it found",
    backHome: "Back to home",
    footer: "Producing errors since 2024",
  },
};

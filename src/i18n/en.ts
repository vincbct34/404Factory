import type { Translations } from "./fr";

export const en: Translations = {
  // Navigation
  nav: {
    services: "./services",
    projects: "./projects",
    about: "./about",
    pricing: "./pricing",
    contact: "./contact",
  },

  // Hero
  hero: {
    fromError: "FROM ERROR",
    code: "404",
    toSuccess: "TO SUCCESS",
    subtitle: "Digital agency specialized in creating custom solutions.",
    subtitleHighlight: "Imagine, create",
    subtitleEnd: "and transform your ideas into reality.",
    cta: "START_PROJECT",
  },

  // About
  about: {
    title: "ABOUT",
    subtitle: "// README.md",
    heading: "# 404Factory",
    missionTitle: "## My Mission",
    missionText:
      "Transform technical challenges into creative opportunities. I believe that every 404 error hides an innovative solution.",
    approachTitle: "## My Approach",
    approach: [
      "Clean and maintainable code",
      "User-centered design",
      "Modern technologies",
      "Transparent collaboration",
    ],
    stackTitle: "## Tech Stack",
    contactTitle: "## Contact",
  },

  // Services
  services: {
    title: "SERVICES",
    subtitle: "// My technical expertise",
    items: [
      {
        title: "CUSTOM_WEBSITES",
        description:
          "Modern web development with the latest technologies. React, Next.js, Node.js.",
      },
      {
        title: "AUTOMATIONS",
        description:
          "Custom scripts, APIs, integrations. Automate your business processes.",
      },
      {
        title: "TECH_CONSULTING",
        description:
          "Technical audit, architecture, optimization. Expertise at your service.",
      },
    ],
  },

  // Projects
  projects: {
    title: "PROJECTS",
    subtitle: "// Portfolio of achievements",
    terminal: "user@404factory:~/projects$ ls -la",
    catCommand: "user@404factory:~/projects$ cat",
    viewProject: "View project",
    viewAll: "VIEW ALL PROJECTS",
    descriptions: {
      opera:
        "Platform facilitating user requests and admin registration management.",
      factory: "Showcase website for my agency.",
      portfolio: "My Windows 11-inspired Portfolio.",
      glados: "My own programming language with interpreter and compiler.",
    },
    types: {
      opera: "Registration management platform",
    },
  },

  // Pricing
  pricing: {
    title: "PRICING",
    subtitle: "// My solutions and their prices",
    popular: "POPULAR",
    quote: "On quote",
    items: [
      {
        title: "SHOWCASE_SITE",
        subtitle: "Modern and responsive website",
        features: [
          "Custom design",
          "Mobile/desktop responsive",
          "SEO optimization",
          "1 year hosting included",
        ],
      },
      {
        title: "WEB_APPLICATION",
        subtitle: "Complete solution with backend",
        features: [
          "Advanced user interface",
          "Database",
          "REST/GraphQL API",
          "Authentication",
        ],
      },
      {
        title: "AUTOMATION",
        subtitle: "Custom scripts and integrations",
        features: [
          "Needs analysis",
          "Custom scripts",
          "API integrations",
          "Complete documentation",
        ],
      },
    ],
  },

  // Contact
  contact: {
    title: "CONTACT",
    subtitle: "// Let's start your project",
    terminal: "user@404factory:~$ ./start-project",
    success: "Message sent successfully!",
    form: {
      name: "> Client name:",
      namePlaceholder: "John Doe",
      email: "> Email:",
      emailPlaceholder: "john@example.com",
      projectType: "> Project type:",
      projectSelect: "Select...",
      projectWebsite: "Website",
      projectAutomation: "Automation",
      projectConsulting: "Consulting",
      description: "> Project description:",
      descriptionPlaceholder: "Describe your project...",
      sending: "SENDING...",
      send: "SEND_MESSAGE",
    },
    info: {
      title: "Contact information",
      phone: "Phone",
      location: "Location",
    },
    responseTime: {
      title: "Response time",
      email: "Email:",
      quote: "Quote:",
      project: "Project:",
      custom: "Custom",
    },
  },

  // Footer
  footer: {
    rights: "All rights reserved.",
  },

  // 404 Page
  notFound: {
    systemError: "SYSTEM ERROR",
    subtitle: "// Page not found in our factory",
    backHome: "Back to home",
    footer: "Error producers since 2024",
  },
};

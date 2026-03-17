import type { Translations } from "./fr";

export const en: Translations = {
  // SEO Meta
  seo: {
    title: "404Factory | Digital Agency Montpellier",
    description:
      "Freelance developer in Montpellier: custom websites, automations and technical consulting. Solutions that convert.",
    ogTitle: "404Factory | From Error to Success",
    ogDescription:
      "Freelance developer in Montpellier specialized in custom website creation, automations and technical consulting.",
  },

  // Navigation
  nav: {
    services: "./services",
    projects: "./projects",
    about: "./about",
    process: "./process",
    contact: "./contact",
    skipToContent: "Skip to main content",
    logoAlt: "404Factory — Freelance Developer Montpellier",
  },

  // Hero
  hero: {
    fromError: "FROM ERROR",
    code: "404",
    toSuccess: "TO SUCCESS",
    subtitle:
      "Freelance developer in Montpellier. I build websites and tools that grow your business.",
    subtitleHighlight: "Imagine, create",
    subtitleEnd: "and transform your ideas into real results.",
    cta: "START_PROJECT",
  },

  // About
  about: {
    title: "ABOUT",
    subtitle: "// README.md",
    heading: "# Who am I?",
    bio: "I'm a freelance developer based in Montpellier. Passionate about code, I help businesses and freelancers stand out online with tailored solutions.",
    photoAlt: "Profile photo",
    missionTitle: "## What I do",
    missionText:
      "I turn your ideas into real digital products: websites that convert, tools that save you time, and technical solutions that solve your actual problems.",
    approachTitle: "## Why me?",
    approach: [
      "One point of contact, not an agency with 10 middlemen",
      "Clean, maintainable code — no black box",
      "Transparent communication at every step",
      "Available and responsive, based in Montpellier",
    ],
    stackTitle: "## Tech Stack",
    contactTitle: "## Contact",
  },

  // Services
  services: {
    title: "SERVICES",
    subtitle: "// What I can do for you",
    items: [
      {
        title: "CUSTOM_WEBSITES",
        description:
          "A website that reflects your brand and turns visitors into clients. Modern design, optimal performance, SEO included.",
      },
      {
        title: "AUTOMATIONS",
        description:
          "Free yourself from repetitive tasks. I connect your tools and automate your processes to save you time and money.",
      },
      {
        title: "TECH_CONSULTING",
        description:
          "You have a technical project but don't know where to start? I'll guide you from idea to solution, with a clear action plan.",
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
      factory: "Showcase website for my freelance activity.",
      portfolio: "My Windows 11-inspired Portfolio.",
      glados: "My own programming language with interpreter and compiler.",
      qreview: "Code review tool with interactive web interface.",
    },
    types: {
      opera: "Registration management platform",
      factory: "Showcase website",
      portfolio: "Portfolio",
      glados: "Programming language",
      qreview: "Review tool",
    },
  },

  // Testimonials
  testimonials: {
    title: "TESTIMONIALS",
    subtitle: "// What my clients say",
    items: [
      {
        name: "Opéra Orchestre Montpellier",
        role: "Institutional client",
        text: "The registration platform has simplified our administrative management. Professional work, delivered on time.",
      },
      {
        name: "To be customized",
        role: "Your next testimonial",
        text: "Replace this text with a real client testimonial. Authentic reviews are your best selling point.",
      },
    ],
  },

  // Process
  process: {
    title: "PROCESS",
    subtitle: "// How it works",
    steps: [
      {
        title: "DISCOVERY",
        description:
          "We discuss your project, goals and constraints. I propose a tailored solution and detailed quote.",
        command: "init --project",
      },
      {
        title: "DESIGN",
        description:
          "I plan the architecture and design of your solution. You validate each step before moving forward.",
        command: "design --validate",
      },
      {
        title: "DEVELOPMENT",
        description:
          "I build your project with the most suitable technologies. You track progress in real time.",
        command: "build --progress",
      },
      {
        title: "LAUNCH",
        description:
          "Testing, deployment and go-live. I train you on usage and remain available for support.",
        command: "deploy --production",
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

  // Validation
  validation: {
    nameMin: "Name must be at least 2 characters",
    emailInvalid: "Invalid email address",
    projectRequired: "Please select a project type",
    messageMin: "Message must be at least 10 characters",
    validationError: "Validation error",
    sendFailed: "Failed to send. Please try again.",
  },

  // Footer
  footer: {
    rights: "All rights reserved.",
    legal: "Legal notice",
  },

  // Legal
  legal: {
    title: "LEGAL_NOTICE",
    subtitle: "// Legal information",
    backHome: "Back to home",
    editor: {
      title: "Site editor",
      name: "Name / Company:",
      namePlaceholder: "404Factory",
      status: "Status:",
      statusPlaceholder: "Micro-entrepreneur (sole proprietor)",
      siret: "SIRET:",
      siretPlaceholder: "98798393900016",
      address: "Address:",
      addressPlaceholder:
        "Not disclosed (exempt per article 19 of French law n°2014-626)",
      phone: "Phone:",
      email: "Email:",
    },
    hosting: {
      title: "Hosting",
      provider: "Provider:",
      providerPlaceholder: "Railway Corporation",
      address: "Address:",
      addressPlaceholder: "San Francisco, CA, USA — https://railway.app",
    },
    intellectual: {
      title: "Intellectual property",
      text: "All content on this site (text, images, source code) is protected by copyright. Any reproduction without prior authorization is prohibited.",
    },
    data: {
      title: "Personal data",
      text: "This site collects personal data through the contact form (name, email) solely to respond to your requests. This data is not shared with third parties. In accordance with GDPR, you have the right to access, rectify, and delete your data.",
    },
  },

  // 404 Page
  notFound: {
    systemError: "SYSTEM ERROR",
    subtitle: "// Page not found in our factory",
    backHome: "Back to home",
    footer: "Error producers since 2024",
  },
};

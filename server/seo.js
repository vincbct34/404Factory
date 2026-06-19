/**
 * @fileoverview Server-side SEO head injection for the production Express server.
 *
 * The site is a client-rendered SPA: per-page title/description/canonical/hreflang
 * are set by src/components/SEOHead.tsx in a useEffect, i.e. only after JS runs.
 * Crawlers that don't execute JS (Bing, social scrapers, most LLM bots) would
 * otherwise see the static index.html — French home metadata — on every URL,
 * including /en/* pages and deep routes. This module rewrites the served HTML
 * per request so the first byte already carries the correct localized head.
 *
 * NOTE: the title/description strings below intentionally duplicate the `seo`
 * block of src/i18n/{fr,en}.ts (the i18n files are TS and can't be imported into
 * this plain-Node server). Keep them in sync when SEO copy changes there.
 */

const BASE_URL = "https://www.404-factory.com";

/** Per-page title/description, mirroring t.seo in src/i18n/{fr,en}.ts */
const META = {
  home: {
    fr: {
      title: "404Factory — On construit ce qui manque",
      description:
        "Studio indépendant à Montpellier : sites web sur-mesure, automatisations et consulting technique. 404 veut dire introuvable — on construit ce qui manque.",
    },
    en: {
      title: "404Factory — We build what's missing",
      description:
        "Independent studio in Montpellier, France: custom websites, automations and technical consulting. 404 means not found — we build what's missing.",
    },
  },
  work: {
    fr: {
      title: "Projets — 404Factory",
      description:
        "Travaux choisis : plateformes, sites et outils construits sur-mesure par 404Factory, studio indépendant à Montpellier.",
    },
    en: {
      title: "Work — 404Factory",
      description:
        "Selected work: platforms, websites and tools custom-built by 404Factory, an independent studio in Montpellier, France.",
    },
  },
  services: {
    fr: {
      title: "Services — 404Factory",
      description:
        "Sites sur-mesure, automatisations, consulting technique. Ce que 404Factory fait, et comment ça se passe.",
    },
    en: {
      title: "Services — 404Factory",
      description:
        "Custom websites, automations, technical consulting. What 404Factory does, and how it works.",
    },
  },
  studio: {
    fr: {
      title: "Studio — 404Factory",
      description:
        "404Factory est le studio de Vincent Bichat, développeur indépendant à Montpellier. Un seul interlocuteur, du code propre, des solutions qui durent.",
    },
    en: {
      title: "Studio — 404Factory",
      description:
        "404Factory is the studio of Vincent Bichat, independent developer in Montpellier, France. One point of contact, clean code, solutions built to last.",
    },
  },
  contact: {
    fr: {
      title: "Contact — 404Factory",
      description:
        "Démarrons votre projet. Réponse sous 24h, devis sous 48h. Montpellier, France.",
    },
    en: {
      title: "Contact — 404Factory",
      description:
        "Let's start your project. Reply within 24h, quote within 48h. Montpellier, France.",
    },
  },
  caseStudyOpera: {
    fr: {
      title: "Étude de cas : Opéra Orchestre Montpellier — 404Factory",
      description:
        "Plateforme d'inscriptions sur-mesure pour l'Opéra Orchestre National Montpellier : Next.js, Prisma, PostgreSQL. Étude de cas par 404Factory.",
    },
    en: {
      title: "Case study: Opéra Orchestre Montpellier — 404Factory",
      description:
        "A custom registration platform for the Opéra Orchestre National Montpellier: Next.js, Prisma, PostgreSQL. A 404Factory case study.",
    },
  },
  caseStudyUarIcs: {
    fr: {
      title: "Étude de cas : UAR ICS — Université de Montpellier — 404Factory",
      description:
        "Portail WordPress institutionnel fédérant 6 plateformes technologiques pour l'UAR ICS, Université de Montpellier. Étude de cas par 404Factory.",
    },
    en: {
      title: "Case study: UAR ICS — Université de Montpellier — 404Factory",
      description:
        "An institutional WordPress portal federating 6 technology platforms for UAR ICS, Université de Montpellier. A 404Factory case study.",
    },
  },
  legal: {
    fr: {
      title: "Mentions légales — 404Factory",
      description: "Informations juridiques du site 404Factory.",
    },
    en: {
      title: "Legal notice — 404Factory",
      description: "Legal information for the 404Factory website.",
    },
  },
  notFound: {
    fr: {
      title: "Erreur 404 — 404Factory",
      description: "Page introuvable. C'est notre spécialité.",
    },
    en: {
      title: "Error 404 — 404Factory",
      description: "Page not found. That's our specialty.",
    },
  },
};

/** Known case-study slugs under /work/:slug → their page key */
const CASE_STUDY_PAGES = {
  "opera-montpellier": "caseStudyOpera",
  "uar-ics-montpellier": "caseStudyUarIcs",
};

/** Static French (default-locale) subpath → page key */
const STATIC_PAGES = {
  "/": "home",
  "/work": "work",
  "/services": "services",
  "/studio": "studio",
  "/contact": "contact",
  "/legal": "legal",
};

/**
 * Resolve a request path into the locale, page key, and the canonical
 * French (default-locale) subpath used to build hreflang/canonical URLs.
 *
 * @param {string} reqPath - URL pathname (no query string)
 * @returns {{ lang: "fr"|"en", page: string, frPath: string, noindex: boolean }}
 */
export function resolveRoute(reqPath) {
  // Normalize: strip trailing slash (except root)
  let p = reqPath.replace(/\/+$/, "");
  if (p === "") p = "/";

  // Detect /en mirror
  let lang = "fr";
  if (p === "/en" || p.startsWith("/en/")) {
    lang = "en";
    p = p.slice(3) || "/"; // strip "/en"
  }

  // Static pages
  const staticKey = STATIC_PAGES[p];
  if (staticKey) {
    return { lang, page: staticKey, frPath: p, noindex: false };
  }

  // Case studies: /work/:slug
  if (p.startsWith("/work/")) {
    const slug = p.slice("/work/".length);
    const csKey = CASE_STUDY_PAGES[slug];
    if (csKey) {
      return { lang, page: csKey, frPath: p, noindex: false };
    }
    // Unknown work slug → falls through to 404
  }

  // Anything else → 404 (noindex, no canonical/hreflang)
  return { lang, page: "notFound", frPath: p, noindex: true };
}

/** Minimal HTML-attribute/text escaping for injected metadata values */
function esc(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Rewrite the static index.html head for a given request path.
 *
 * @param {string} html - the built dist/index.html
 * @param {string} reqPath - URL pathname
 * @returns {string} HTML with localized title/description/canonical/hreflang/OG
 */
export function injectSeo(html, reqPath) {
  const { lang, page, frPath, noindex } = resolveRoute(reqPath);
  const { title, description } = META[page][lang];

  const frUrl = `${BASE_URL}${frPath}`;
  const enUrl = `${BASE_URL}${frPath === "/" ? "/en" : `/en${frPath}`}`;
  const canonical = lang === "en" ? enUrl : frUrl;

  const t = esc(title);
  const d = esc(description);
  const ogLocale = lang === "fr" ? "fr_FR" : "en_US";
  const ogLocaleAlt = lang === "fr" ? "en_US" : "fr_FR";

  let out = html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:url"[\s\S]*?\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:locale" content="${ogLocale}" />`,
    )
    .replace(
      /<meta\s+property="og:locale:alternate"[\s\S]*?\/>/,
      `<meta property="og:locale:alternate" content="${ogLocaleAlt}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"[\s\S]*?\/>/,
      `<meta name="twitter:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${d}" />`,
    )
    .replace(
      /<meta\s+name="twitter:url"[\s\S]*?\/>/,
      `<meta name="twitter:url" content="${canonical}" />`,
    );

  if (noindex) {
    // A 404 has no canonical URL nor language mirror to declare.
    out = out
      .replace(/<link\s+rel="canonical"[\s\S]*?\/>/, "")
      .replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"[\s\S]*?\/>/g, "")
      .replace(
        /<title>/,
        '<meta name="robots" content="noindex" />\n    <title>',
      );
  } else {
    out = out
      .replace(
        /<link\s+rel="canonical"[\s\S]*?\/>/,
        `<link rel="canonical" href="${canonical}" />`,
      )
      .replace(
        /<link\s+rel="alternate"\s+hreflang="fr"[\s\S]*?\/>/,
        `<link rel="alternate" hreflang="fr" href="${frUrl}" />`,
      )
      .replace(
        /<link\s+rel="alternate"\s+hreflang="en"[\s\S]*?\/>/,
        `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
      )
      .replace(
        /<link\s+rel="alternate"\s+hreflang="x-default"[\s\S]*?\/>/,
        `<link rel="alternate" hreflang="x-default" href="${frUrl}" />`,
      );
  }

  return out;
}

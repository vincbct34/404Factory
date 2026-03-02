/**
 * @fileoverview Dynamic SEO head management component
 * Updates document title, meta tags, and link tags based on current language
 * @module components/SEOHead
 */

import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

/** Base URL for canonical and alternate links */
const BASE_URL = "https://404factory.vincent-bichat.fr";

/**
 * Updates or creates a meta tag in the document head
 * @param attr - The attribute to identify the meta tag (e.g., "name" or "property")
 * @param key - The value of the identifying attribute
 * @param content - The content value to set
 */
function setMeta(attr: string, key: string, content: string) {
  let element = document.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/**
 * Updates or creates a link tag in the document head
 * @param rel - The rel attribute value
 * @param href - The href to set
 * @param extraAttrs - Additional attributes for identification and creation
 */
function setLink(
  rel: string,
  href: string,
  extraAttrs: Record<string, string> = {},
) {
  const selector = Object.entries(extraAttrs)
    .map(([k, v]) => `[${k}="${v}"]`)
    .join("");
  let element = document.querySelector(
    `link[rel="${rel}"]${selector}`,
  ) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    Object.entries(extraAttrs).forEach(([k, v]) => element!.setAttribute(k, v));
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

/**
 * SEO Head component — dynamically updates document <head> based on language
 * Manages title, meta description, canonical, hreflang, Open Graph, and Twitter tags
 * Renders nothing visually (returns null)
 */
export function SEOHead() {
  const { language, t } = useLanguage();

  useEffect(() => {
    const canonicalUrl = language === "en" ? `${BASE_URL}/en` : `${BASE_URL}/`;

    // Document language
    document.documentElement.lang = language;

    // Title
    document.title = t.seo.title;

    // Meta description
    setMeta("name", "description", t.seo.description);

    // Canonical URL
    setLink("canonical", canonicalUrl);

    // Hreflang alternate links
    setLink("alternate", `${BASE_URL}/`, { hreflang: "fr" });
    setLink("alternate", `${BASE_URL}/en`, { hreflang: "en" });
    setLink("alternate", `${BASE_URL}/`, { hreflang: "x-default" });

    // Open Graph
    setMeta("property", "og:title", t.seo.ogTitle);
    setMeta("property", "og:description", t.seo.ogDescription);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:locale", language === "fr" ? "fr_FR" : "en_US");
    setMeta(
      "property",
      "og:locale:alternate",
      language === "fr" ? "en_US" : "fr_FR",
    );

    // Twitter
    setMeta("name", "twitter:title", t.seo.ogTitle);
    setMeta("name", "twitter:description", t.seo.ogDescription);
    setMeta("name", "twitter:url", canonicalUrl);
  }, [language, t]);

  return null;
}

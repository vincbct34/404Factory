/**
 * @fileoverview Dynamic SEO head management component
 * Updates document title, meta tags, and link tags per page and language
 * @module components/SEOHead
 */

import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Translations } from "@/i18n";

/** Base URL for canonical and alternate links */
const BASE_URL = "https://404factory.vincent-bichat.fr";

type PageKey = keyof Translations["seo"];

interface SEOHeadProps {
  /** Page key into t.seo */
  page: PageKey;
  /** Canonical subpath in its French (default-locale) form, e.g. "/" or "/work" */
  path: string;
  /** Error pages: ask robots not to index, and drop canonical/hreflang */
  noindex?: boolean;
}

/**
 * Updates or creates a meta tag in the document head
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
 * Removes all link tags with the given rel from the document head
 */
function removeLinks(rel: string) {
  document.querySelectorAll(`link[rel="${rel}"]`).forEach((el) => el.remove());
}

/**
 * SEO Head component — dynamically updates document <head> per page/language
 * Manages title, meta description, canonical, hreflang, Open Graph, Twitter
 */
export function SEOHead({ page, path, noindex = false }: SEOHeadProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const frUrl = `${BASE_URL}${path}`;
    const enUrl = `${BASE_URL}${path === "/" ? "/en" : `/en${path}`}`;
    const canonicalUrl = language === "en" ? enUrl : frUrl;
    const { title, description } = t.seo[page];

    document.documentElement.lang = language;
    document.title = title;

    setMeta("name", "description", description);
    // Explicit value either way: SPA navigation away from a 404 must undo
    // the noindex left in the head
    setMeta("name", "robots", noindex ? "noindex" : "index, follow");

    if (noindex) {
      // A 404 has no canonical URL nor language mirror to declare
      removeLinks("canonical");
      removeLinks("alternate");
    } else {
      setLink("canonical", canonicalUrl);

      // Hreflang alternate links
      setLink("alternate", frUrl, { hreflang: "fr" });
      setLink("alternate", enUrl, { hreflang: "en" });
      setLink("alternate", frUrl, { hreflang: "x-default" });
    }

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:locale", language === "fr" ? "fr_FR" : "en_US");
    setMeta(
      "property",
      "og:locale:alternate",
      language === "fr" ? "en_US" : "fr_FR",
    );

    // Twitter
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:url", canonicalUrl);
  }, [language, t, page, path, noindex]);

  return null;
}

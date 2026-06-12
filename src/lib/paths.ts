/**
 * @fileoverview Locale-aware path helpers for the /en mirror routing scheme
 * @module lib/paths
 */

export type Language = "fr" | "en";

/** Known French (default-locale) route roots */
const FR_ROOTS = ["/", "/work", "/services", "/studio", "/contact", "/legal"];

/** Builds the localized path for a French-base route ("/" → "/en", "/work" → "/en/work") */
export function localePath(lang: Language, path: string): string {
  if (lang === "en") return path === "/" ? "/en" : `/en${path}`;
  return path;
}

/**
 * Infers the language from a pathname, or null when the path is unknown (404s)
 */
export function pathLanguage(pathname: string): Language | null {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (
    FR_ROOTS.some((root) =>
      root === "/"
        ? pathname === "/"
        : pathname === root || pathname.startsWith(root + "/"),
    )
  ) {
    return "fr";
  }
  return null;
}

/** Strips the /en prefix from a pathname ("/en/work" → "/work", "/en" → "/") */
export function stripLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

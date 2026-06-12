/**
 * @fileoverview Language context and hook for internationalization
 * @module hooks/useLanguage
 */

/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { fr, en, type Translations } from "@/i18n";
import { pathLanguage, type Language } from "@/lib/paths";

/** Language context type definition */
interface LanguageContextType {
  language: Language;
  /** Translation strings for the current language */
  t: Translations;
  toggleLanguage: () => void;
}

/** Mapping of language codes to translation objects */
const translations: Record<Language, Translations> = { fr, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

/** LocalStorage key for persisting language preference */
const STORAGE_KEY = "404factory-language";

/**
 * Determines the initial language based on URL path, stored preference, or browser settings
 * URL takes precedence over localStorage and browser detection
 * @returns The initial language to use
 */
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr";

  const fromPath = pathLanguage(window.location.pathname);
  if (fromPath) return fromPath;

  // For unknown paths (e.g. 404 pages), check localStorage then browser
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;

  const browserLang = navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "fr";
}

/**
 * Provider component that wraps the app to provide language context
 * Persists language preference to localStorage and updates HTML lang attribute
 * @param children - Child components to wrap
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Sync language with URL during render (React-recommended pattern for
  // adjusting state based on changed props/context — avoids unnecessary effects)
  const pathLang: Language | null = pathLanguage(location.pathname);
  if (pathLang && pathLang !== language) setLanguageState(pathLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const value: LanguageContextType = {
    language,
    t: translations[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access the language context
 * Must be used within a LanguageProvider
 * @returns Language context with current language, translations, and control functions
 * @throws Error if used outside of LanguageProvider
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
}

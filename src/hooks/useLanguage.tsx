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
import { fr, en, type Translations } from "@/i18n";

/** Supported language codes */
type Language = "fr" | "en";

/** Language context type definition */
interface LanguageContextType {
  /** Current active language */
  language: Language;
  /** Translation strings for the current language */
  t: Translations;
  /** Toggles between French and English */
  toggleLanguage: () => void;
  /** Sets a specific language */
  setLanguage: (lang: Language) => void;
}

/** Mapping of language codes to translation objects */
const translations: Record<Language, Translations> = { fr, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

/** LocalStorage key for persisting language preference */
const STORAGE_KEY = "404factory-language";

/**
 * Determines the initial language based on stored preference or browser settings
 * @returns The initial language to use
 */
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;
  // Fall back to browser language detection
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "fr";
}

/**
 * Provider component that wraps the app to provide language context
 * Persists language preference to localStorage and updates HTML lang attribute
 * @param children - Child components to wrap
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Persist language to localStorage and update document lang attribute
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const value: LanguageContextType = {
    language,
    t: translations[language],
    toggleLanguage,
    setLanguage,
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
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

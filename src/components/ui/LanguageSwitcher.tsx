/**
 * @fileoverview Language toggle button component
 * @module components/ui/LanguageSwitcher
 */

import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Toggle button for switching between French and English languages
 * Displays FR/EN with the active language highlighted
 */
export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  /** Toggles language and navigates to the corresponding route */
  const handleToggle = () => {
    const newLang = language === "fr" ? "en" : "fr";
    toggleLanguage();
    // Only navigate on known home routes, not on 404 pages
    const isHomePage = location.pathname === "/" || location.pathname === "/en";
    if (isHomePage) {
      navigate(newLang === "en" ? "/en" : "/");
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-electric/50 transition-colors font-mono text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === "fr" ? "Switch to English" : "Passer en Français"}
    >
      <span
        className={`transition-colors ${language === "fr" ? "text-electric" : "text-gray-500"}`}
      >
        FR
      </span>
      <span className="text-gray-600">/</span>
      <span
        className={`transition-colors ${language === "en" ? "text-electric" : "text-gray-500"}`}
      >
        EN
      </span>
    </motion.button>
  );
}

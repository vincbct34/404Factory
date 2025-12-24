/**
 * @fileoverview Language toggle button component
 * @module components/ui/LanguageSwitcher
 */

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Toggle button for switching between French and English languages
 * Displays FR/EN with the active language highlighted
 */
export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
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

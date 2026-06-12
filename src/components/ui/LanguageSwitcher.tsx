/**
 * @fileoverview Language toggle — navigates to the mirrored /en route when
 * the current path is a known route, otherwise just switches the language
 * @module components/ui/LanguageSwitcher
 */

import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { pathLanguage, stripLocale } from "@/lib/paths";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    const path = location.pathname;
    const known = pathLanguage(path) !== null;
    if (!known) {
      // 404 pages: switch language in place
      toggleLanguage();
      return;
    }
    if (language === "fr") {
      navigate(path === "/" ? "/en" : `/en${path}`);
    } else {
      navigate(stripLocale(path));
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`font-label text-[11px] tracking-[0.18em] uppercase bg-transparent border-none cursor-pointer ${className}`}
      title={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <span className={language === "fr" ? "" : "opacity-40"}>FR</span>
      <span className="opacity-40"> / </span>
      <span className={language === "en" ? "" : "opacity-40"}>EN</span>
    </button>
  );
}

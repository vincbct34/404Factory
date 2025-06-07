"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-6 right-8 z-50 flex gap-2 pointer-events-auto">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded border border-white-900 transition-colors ${i18n.language === 'en' ? 'bg-white text-black' : 'bg-transparent text-white'} cursor-pointer`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`px-3 py-1 rounded border border-white-900 transition-colors ${i18n.language === 'fr' ? 'bg-white text-black' : 'bg-transparent text-white'} cursor-pointer`}
      >
        FR
      </button>
    </div>
  );
}

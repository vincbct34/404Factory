"use client";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useState } from "react";

import "@/lib/i18n";

export default function Home() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const [redirecting, setRedirecting] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleRedirect = () => {
    setRedirecting(true);
    setTimeout(() => router.push("/three"), 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black-gradient text-white">

      {/* Entrance & exit animation */}

      <div className="fixed inset-0 z-50 flex flex-col pointer-events-none">
        <div
          className={`flex-1 mx-10 bg-black-gradient border-b-2 border-white-900 ${
            redirecting ? "animate-slide-up-reverse" : "animate-slide-up"
          }`}
        />
        <div
          className={`flex-1 mx-10 bg-black-gradient border-t-2 border-white-900 ${
            redirecting ? "animate-slide-down-reverse" : "animate-slide-down"
          }`}
        />
      </div>

      {/* Page content */}

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl sm:text-6xl font-light tracking-wide mb-6">
          {t("title")}
        </h1>
        <p className="text-md sm:text-lg text-zinc-300 mb-8 max-w-xl">
          {t("description")}
        </p>

        { /* Language Switcher */}

        <div className="flex gap-2">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`px-3 py-1 rounded border border-white-900 transition-colors ${
              i18n.language === "en"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } cursor-pointer`}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("fr")}
            className={`px-3 py-1 rounded border border-white-900 transition-colors ${
              i18n.language === "fr"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } cursor-pointer`}
          >
            FR
          </button>
        </div>

        <button
          onClick={handleRedirect}
          className="mt-10 inline-block px-6 py-3 border border-white rounded-md text-white hover:bg-white hover:text-black transition duration-500 ease-in-out cursor-pointer"
        >
          {t("view3d")}
        </button>
      </div>
    </div>
  );
}

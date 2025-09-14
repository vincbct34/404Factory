"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-electric-blue/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3"
            >
              <Image
                src="/logo.png"
                alt="404Factory Logo"
                width={32}
                height={32}
                className="w-8 h-8 filter brightness-0 invert mt-1"
              />
              <div className="text-2xl font-bold glitch-text">
                404<span className="text-electric-blue">Factory</span>
              </div>
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-electric-blue transition-colors terminal-cursor"
            >
              ./services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-electric-blue transition-colors terminal-cursor"
            >
              ./projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-electric-blue transition-colors terminal-cursor"
            >
              ./about
            </button>
            <button
              onClick={() => scrollToSection("brochure")}
              className="hover:text-electric-blue transition-colors terminal-cursor"
            >
              ./tarifs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-electric-blue transition-colors terminal-cursor"
            >
              ./contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/**
 * @fileoverview Main navigation component with responsive mobile menu
 * @module components/layout/Navigation
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/ui";

/**
 * Sticky navigation bar with smooth scroll links and mobile hamburger menu
 * Adds glass effect when scrolled past initial viewport
 */
export function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /** Navigation links configuration */
  const navLinks = [
    { label: t.nav.services, target: "services" },
    { label: t.nav.projects, target: "projects" },
    { label: t.nav.about, target: "about" },
    { label: t.nav.pricing, target: "pricing" },
    { label: t.nav.contact, target: "contact" },
  ];

  // Listen for scroll to toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Smooth scrolls to a section and closes mobile menu */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : ""
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="404Factory Logo"
              className="w-8 h-8 filter transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-bold">
              404<span className="text-electric">Factory</span>
            </span>
          </button>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="font-mono text-sm text-gray-300 hover:text-electric transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric transition-all group-hover:w-full" />
              </motion.button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              {/* Animated hamburger icon */}
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className="w-6 h-0.5 bg-white block"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 flex flex-col gap-4 border-t border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="font-mono text-sm text-gray-300 hover:text-electric transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

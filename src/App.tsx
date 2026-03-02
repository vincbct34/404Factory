/**
 * @fileoverview Main application entry point with routing configuration
 * @module App
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import {
  Hero,
  Services,
  Projects,
  About,
  Pricing,
  Contact,
} from "@/components/sections";
import { NotFound } from "@/pages";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import { SEOHead } from "@/components/SEOHead";

/**
 * Home page component containing all main sections
 * Includes animated background, navigation, and footer
 */
function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="noise-overlay">
      {/* Dynamic SEO head management */}
      <SEOHead />

      {/* Gradient background */}
      <div className="gradient-bg" />

      <Navigation />

      {/* Main content sections */}
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Pricing />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container text-center">
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} 404Factory. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

/**
 * Root application component
 * Sets up providers and routing
 */
function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;

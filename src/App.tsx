/**
 * @fileoverview Main application entry point with routing configuration
 * @module App
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import {
  Hero,
  Services,
  Process,
  Projects,
  Testimonials,
  About,
  Contact,
} from "@/components/sections";
import { NotFound, Legal } from "@/pages";
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

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-electric focus:text-black focus:font-bold focus:rounded"
      >
        {t.nav.skipToContent}
      </a>

      <Navigation />

      {/* Main content sections */}
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container text-center space-y-2">
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} 404Factory. {t.footer.rights}
          </p>
          <a
            href="/legal"
            className="text-gray-600 text-xs font-mono hover:text-electric transition-colors"
          >
            {t.footer.legal}
          </a>
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
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;

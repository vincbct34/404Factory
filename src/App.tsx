/**
 * @fileoverview Main application entry point with routing configuration
 * Routes exist in two mirrors: French at the root, English under /en
 * @module App
 */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  Work,
  CaseStudy,
  Services,
  Studio,
  Contact,
  NotFound,
  Legal,
} from "@/pages";
import { LanguageProvider } from "@/hooks/useLanguage";

/** Scrolls to top on route change (SPA navigations keep scroll otherwise) */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Route table shared by both locale mirrors */
function LocalizedRoutes() {
  return (
    <Routes>
      {["", "/en"].map((prefix) => (
        <Route key={prefix || "fr"} path={prefix || "/"}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="services" element={<Services />} />
          <Route path="studio" element={<Studio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
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
        <ScrollToTop />
        <LocalizedRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;

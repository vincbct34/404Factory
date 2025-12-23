import { Navigation } from "@/components/layout/Navigation";
import {
  Hero,
  Services,
  Projects,
  About,
  Pricing,
  Contact,
} from "@/components/sections";
import Snowfall from "react-snowfall";

function App() {
  return (
    <div className="noise-overlay">
      {/* Animated gradient background */}
      <div className="gradient-bg" />

      {/* Snowfall */}
      <Snowfall />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
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
            © {new Date().getFullYear()} 404Factory. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { BrochureSection } from "@/components/brochure-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <BrochureSection />
      <ContactSection />
    </main>
  );
}

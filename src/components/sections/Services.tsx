/**
 * @fileoverview Services section component displaying offered services
 * @module components/sections/Services
 */

import { motion } from "framer-motion";
import { Code, Zap, Terminal } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/hooks/useLanguage";

/** Terminal-style commands displayed for each service */
const serviceCommands = [
  "npm run build-website",
  "python automate.py",
  "analyze --deep-dive",
];

/** Icons for each service type */
const serviceIcons = [Code, Zap, Terminal];

/** Glow colors for each service card */
const glowColors = [
  "rgba(0, 255, 255, 0.4)",
  "rgba(139, 92, 246, 0.4)",
  "rgba(57, 255, 20, 0.4)",
];

/**
 * Services section displaying the three main service offerings
 * Each service is displayed in a TiltCard with icon, command, and description
 */
export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="section-title">
            {t.services.title}
            <span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">{t.services.subtitle}</p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard className="p-8 h-full" glowColor={glowColors[index]}>
                  {/* Service icon */}
                  <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-electric" />
                  </div>

                  {/* Service title */}
                  <h3 className="text-xl font-bold mb-3 hover:text-electric transition-colors">
                    {service.title}
                  </h3>

                  {/* Terminal-style command display */}
                  <div className="flex items-center gap-2 mb-4 bg-black/50 rounded-lg px-3 py-2 border border-white/5 group hover:border-electric/30 transition-colors">
                    <span className="text-electric text-sm">$</span>
                    <code className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {serviceCommands[index]}
                    </code>
                    <span className="w-2 h-4 bg-electric/70 animate-pulse ml-auto" />
                  </div>

                  {/* Service description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Code, Zap, Terminal } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { TiltCard } from "@/components/ui/TiltCard";

const services = [
  {
    icon: Code,
    title: "SITES_SUR_MESURE",
    description:
      "Développement web moderne avec les dernières technologies. React, Next.js, Node.js.",
    command: "npm run build-website",
    glowColor: "rgba(0, 255, 255, 0.4)",
  },
  {
    icon: Zap,
    title: "AUTOMATISATIONS",
    description:
      "Scripts personnalisés, APIs, intégrations. Automatisez vos processus métier.",
    command: "python automate.py",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: Terminal,
    title: "CONSULTING_TECH",
    description:
      "Audit technique, architecture, optimisation. Expertise à votre service.",
    command: "analyze --deep-dive",
    glowColor: "rgba(57, 255, 20, 0.4)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="section-title">
            SERVICES<span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">
            {"// Mes expertises techniques"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TiltCard className="p-8 h-full" glowColor={service.glowColor}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-electric" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 hover:text-electric transition-colors">
                  {service.title}
                </h3>

                {/* Command - Terminal style amélioré */}
                <div className="flex items-center gap-2 mb-4 bg-black/50 rounded-lg px-3 py-2 border border-white/5 group hover:border-electric/30 transition-colors">
                  <span className="text-electric text-sm">$</span>
                  <code className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {service.command}
                  </code>
                  <span className="w-2 h-4 bg-electric/70 animate-pulse ml-auto" />
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

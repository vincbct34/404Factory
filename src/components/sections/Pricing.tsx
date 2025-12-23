import { motion } from "framer-motion";
import { Code, Zap, Terminal } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { TiltCard } from "@/components/ui/TiltCard";

const pricingOptions = [
  {
    icon: Code,
    title: "SITE_VITRINE",
    subtitle: "Site web moderne et responsive",
    price: "Sur devis",
    features: [
      "Design sur mesure",
      "Responsive mobile/desktop",
      "Optimisation SEO",
      "Hébergement 1 an inclus",
    ],
    popular: false,
    glowColor: "rgba(0, 255, 255, 0.4)",
  },
  {
    icon: Zap,
    title: "APPLICATION_WEB",
    subtitle: "Solution complète avec backend",
    price: "Sur devis",
    features: [
      "Interface utilisateur avancée",
      "Base de données",
      "API REST/GraphQL",
      "Authentification",
    ],
    popular: true,
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: Terminal,
    title: "AUTOMATISATION",
    subtitle: "Scripts et intégrations sur mesure",
    price: "Sur devis",
    features: [
      "Analyse des besoins",
      "Scripts personnalisés",
      "Intégrations API",
      "Documentation complète",
    ],
    popular: false,
    glowColor: "rgba(57, 255, 20, 0.4)",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
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
            TARIFS<span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono mb-6">
            {"// Mes solutions et leurs prix"}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingOptions.map((option, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative">
              {/* Popular Badge - outside TiltCard for proper positioning */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-electric text-black px-4 py-1 text-xs font-bold rounded-full shadow-lg shadow-electric/30">
                    POPULAIRE
                  </span>
                </div>
              )}

              <TiltCard
                className={`p-8 h-full ${option.popular ? "ring-1 ring-electric/50" : ""}`}
                glowColor={option.glowColor}
              >
                <div className="h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-bold text-lg hover:text-electric transition-colors">
                      {option.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-400 text-sm mb-4">
                    {option.subtitle}
                  </p>

                  {/* Price */}
                  <div className="text-3xl font-black text-electric mb-6">
                    {option.price}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-grow">
                    {option.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-electric rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

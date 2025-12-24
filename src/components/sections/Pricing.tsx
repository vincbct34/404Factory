/**
 * @fileoverview Pricing section component with service tier cards
 * @module components/sections/Pricing
 */

import { motion } from "framer-motion";
import { Code, Zap, Terminal } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/hooks/useLanguage";

/** Icons for each pricing tier */
const pricingIcons = [Code, Zap, Terminal];

/** Glow colors for each pricing card */
const glowColors = [
  "rgba(0, 255, 255, 0.4)",
  "rgba(139, 92, 246, 0.4)",
  "rgba(57, 255, 20, 0.4)",
];

/** Index of the "popular" highlighted pricing tier */
const popularIndex = 1;

/**
 * Pricing section displaying three service tiers
 * Middle tier is highlighted as the popular/recommended option
 */
export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 relative">
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
            {t.pricing.title}
            <span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono mb-6">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {t.pricing.items.map((option, index) => {
            const Icon = pricingIcons[index];
            const isPopular = index === popularIndex;
            return (
              <motion.div key={index} variants={fadeInUp} className="relative">
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-electric text-black px-4 py-1 text-xs font-bold rounded-full shadow-lg shadow-electric/30">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                <TiltCard
                  className={`p-8 h-full ${isPopular ? "ring-1 ring-electric/50" : ""}`}
                  glowColor={glowColors[index]}
                >
                  <div className="h-full flex flex-col">
                    {/* Icon and title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-electric" />
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
                      {t.pricing.quote}
                    </div>

                    {/* Features list */}
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

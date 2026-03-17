/**
 * @fileoverview Process section component showing the working methodology
 * @module components/sections/Process
 */

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { GlassCard } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";

/** Icons for each process step */
const stepIcons = [Search, PenTool, Code, Rocket];

/** Accent colors for each step's number indicator */
const stepColors = [
  "text-electric",
  "text-purple-400",
  "text-green-400",
  "text-electric",
];

/**
 * Process section displaying the 4-step working methodology
 * Each step has an icon, number, terminal command, and description
 */
export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 relative">
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
            {t.process.title}
            <span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">{t.process.subtitle}</p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="p-6 h-full" hover={false}>
                  <div className="flex flex-col h-full">
                    {/* Step number + icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-3xl font-black ${stepColors[index]} opacity-30 font-mono`}
                      >
                        0{index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-electric" />
                      </div>
                    </div>

                    {/* Step title */}
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>

                    {/* Terminal command */}
                    <div className="flex items-center gap-2 mb-4 bg-black/50 rounded-lg px-3 py-2 border border-white/5">
                      <span className="text-electric text-sm">$</span>
                      <code className="text-gray-400 text-sm">
                        {step.command}
                      </code>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

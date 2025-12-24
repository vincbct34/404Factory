/**
 * @fileoverview About section component with company information and tech stack
 * @module components/sections/About
 */

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { GlassCard } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";

/** List of technologies displayed in the tech stack grid */
const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Tailwind",
  "n8n",
  "C++",
  "C",
  "Haskell",
];

/**
 * About section displaying company mission, approach, tech stack, and contact info
 * Presented in a terminal/README style format
 */
export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-4xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="section-title">
            {t.about.title}
            <span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">{t.about.subtitle}</p>
        </motion.div>

        {/* Content card styled like a README */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <GlassCard className="p-8 font-mono text-sm" hover={false}>
            <div className="text-electric text-lg mb-6">{t.about.heading}</div>

            <div className="space-y-8">
              {/* Mission section */}
              <div>
                <div className="text-white font-bold mb-2">
                  {t.about.missionTitle}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              {/* Approach section */}
              <div>
                <div className="text-white font-bold mb-2">
                  {t.about.approachTitle}
                </div>
                <ul className="text-gray-300 space-y-2">
                  {t.about.approach.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-electric rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack grid */}
              <div>
                <div className="text-white font-bold mb-4">
                  {t.about.stackTitle}
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="grid grid-cols-3 md:grid-cols-5 gap-3"
                >
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech}
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(0, 255, 255, 0.5)",
                      }}
                      className="bg-black/50 px-3 py-2 text-center border border-white/10 rounded-lg text-gray-300 hover:text-electric transition-colors cursor-default"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Contact information */}
              <div>
                <div className="text-white font-bold mb-2">
                  {t.about.contactTitle}
                </div>
                <p className="text-gray-300">
                  <span className="text-electric">Email: </span>
                  <a
                    href="mailto:factory404@outlook.fr"
                    className="underline hover:text-electric transition-colors"
                  >
                    factory404@outlook.fr
                  </a>
                  <br />
                  <span className="text-electric">GitHub: </span>
                  <a
                    href="https://github.com/vincbct34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-electric transition-colors"
                  >
                    @vincbct34
                  </a>
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

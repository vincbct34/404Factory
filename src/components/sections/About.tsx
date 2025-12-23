import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { GlassCard } from "@/components/ui";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Tailwind",
  "C++",
  "C",
  "Haskell",
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="section-title">
            À_PROPOS<span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">{"// README.md"}</p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <GlassCard className="p-8 font-mono text-sm" hover={false}>
            <div className="text-electric text-lg mb-6"># 404Factory</div>

            <div className="space-y-8">
              {/* Mission */}
              <div>
                <div className="text-white font-bold mb-2">## Ma Mission</div>
                <p className="text-gray-300 leading-relaxed">
                  Transformer les défis techniques en opportunités créatives. Je
                  crois que chaque erreur 404 cache une solution innovante.
                </p>
              </div>

              {/* Approach */}
              <div>
                <div className="text-white font-bold mb-2">## Mon Approche</div>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-electric rounded-full" />
                    Code propre et maintenable
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-electric rounded-full" />
                    Design centré utilisateur
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-electric rounded-full" />
                    Technologies modernes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-electric rounded-full" />
                    Collaboration transparente
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="text-white font-bold mb-4">
                  ## Stack Technique
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

              {/* Contact */}
              <div>
                <div className="text-white font-bold mb-2">## Contact</div>
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

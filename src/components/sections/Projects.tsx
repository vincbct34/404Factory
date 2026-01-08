/**
 * @fileoverview Projects section component with interactive project showcase
 * @module components/sections/Projects
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink, Loader2 } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  viewportConfig,
} from "@/lib/animations";
import { Terminal, GlassCard } from "@/components/ui";
import { useOpenGraphImage } from "@/hooks/useOpenGraphImage";
import { useLanguage } from "@/hooks/useLanguage";
import type { Project } from "@/lib/types";

/** Project data without translation-dependent fields */
const projectsData: Omit<Project, "description" | "type">[] = [
  {
    name: "opera-montpellier.ts",
    url: "https://inscriptions.opera-orchestre-montpellier.fr",
    tech: "Next.js, Prisma, Postgres",
    status: "RUNNING",
    github: "https://inscriptions.opera-orchestre-montpellier.fr",
  },
  {
    name: "404factory.tsx",
    url: "https://404factory.vincent-bichat.fr",
    tech: "Vite, React, Framer Motion",
    status: "DEPLOYED",
    github: "https://github.com/vincbct34/404Factory",
  },
  {
    name: "portfoliOS.json",
    url: "https://portfolio.vincent-bichat.fr",
    tech: "Vite, React, Framer Motion",
    status: "DEPLOYED",
    github: "https://portfolio.vincent-bichat.fr",
  },
  {
    name: "GLaDOS.hs",
    image: "/glados.png",
    tech: "Haskell",
    status: "DELIVERED",
    github: "https://github.com/vincbct34/Glados",
  },
];

/** Color classes for project status badges */
const statusColors: Record<string, string> = {
  DEPLOYED: "bg-green-500/20 text-green-400 border-green-500/30",
  DELIVERED: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  RUNNING: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  DEVELOPMENT: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

/**
 * Displays the project image fetched via OpenGraph or fallback
 * Shows loading spinner while fetching
 */
function ProjectImage({
  project,
}: {
  project: Omit<Project, "description" | "type">;
}) {
  const { imageUrl, isLoading } = useOpenGraphImage(project.url, project.image);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-electric/10 to-purple-500/10">
        <Loader2 className="w-8 h-8 text-electric animate-spin" />
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-electric/20 to-purple-500/20">
        <span className="text-electric font-mono text-lg">{project.name}</span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={project.name}
      className="w-full h-full object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

/**
 * Projects section with terminal-style file browser and project details
 * Features animated project selection and OpenGraph image fetching
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const { t } = useLanguage();

  /** Translation keys for project descriptions */
  const descriptionKeys = ["opera", "factory", "portfolio", "glados"] as const;

  /** Gets the translated description for a project */
  const getDescription = (index: number) => {
    const key = descriptionKeys[index];
    return t.projects.descriptions[key];
  };

  /** Gets the project type label */
  const getType = (index: number) => {
    if (index === 0) return t.projects.types.opera;
    return projectsData[index].tech.includes("Vite") ? "Website" : "Tool";
  };

  return (
    <section id="projects" className="py-24 relative">
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
            {t.projects.title}
            <span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">{t.projects.subtitle}</p>
        </motion.div>

        {/* Two-column layout: Terminal + Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal-style project browser */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <Terminal title="terminal">
              <div className="text-electric mb-4">{t.projects.terminal}</div>
              <div className="space-y-1">
                {projectsData.map((project, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setSelectedProject(index)}
                    className={`cursor-pointer p-2 -mx-2 rounded transition-colors flex items-center justify-between ${
                      selectedProject === index
                        ? "bg-electric/10"
                        : "hover:bg-white/5"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <ChevronRight
                        className={`w-4 h-4 transition-colors ${
                          selectedProject === index
                            ? "text-electric"
                            : "text-gray-500"
                        }`}
                      />
                      <span
                        className={
                          selectedProject === index
                            ? "text-electric"
                            : "text-white"
                        }
                      >
                        {project.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded border ${statusColors[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-electric">
                {t.projects.catCommand} {projectsData[selectedProject].name}
              </div>
            </Terminal>
          </motion.div>

          {/* Project details panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6" hover={false}>
                  <h3 className="text-2xl font-bold text-electric mb-2">
                    {projectsData[selectedProject].name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Type: {getType(selectedProject)} | Tech:{" "}
                    {projectsData[selectedProject].tech}
                  </p>

                  {/* Project preview image */}
                  <div className="aspect-video bg-black/50 rounded-lg overflow-hidden mb-4 border border-white/10">
                    <ProjectImage project={projectsData[selectedProject]} />
                  </div>

                  <p className="text-gray-300 mb-4">
                    {getDescription(selectedProject)}
                  </p>

                  <a
                    href={projectsData[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric hover:text-white transition-colors group"
                  >
                    {t.projects.viewProject}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* View all projects button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="text-center"
            >
              <a
                href="https://github.com/vincbct34"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-outline">{t.projects.viewAll}</button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

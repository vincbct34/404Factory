"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const projects = [
  {
    name: "opera-montpellier.ts",
    image: "/opera-montpellier.png",
    type: "CRM",
    tech: "Next.js, Node.js, SQLite",
    status: "DELIVERED",
    description:
      "Plateforme CRM complète avec gestion des utilisateurs et des réservations",
    github: "https://github.com/vincbct34/Projet-Opera-Public",
  },
  {
    name: "404factory.js",
    image: "/404-factory.png",
    type: "Website",
    tech: "Next.js, Vercel",
    status: "DEPLOYED",
    description: "Site vitrine de mon agence.",
    github: "https://github.com/vincbct34/404Factory",
  },
  {
    name: "mypandoc.hs",
    image: "/mypandoc.png",
    type: "Tool",
    tech: "Haskell",
    status: "DELIVERED",
    description:
      "Convertisseur de documents inspiré de Pandoc, supporte le markdown, le json et l'xml.",
    github:
      "https://github.com/vincbct34/Tek2-EPITECH/tree/main/Functionnal%20Programming/mypandoc",
  },
  {
    name: "zappy.cpp",
    image: "/zappy.png",
    type: "Game",
    tech: "C++, C, Python",
    status: "DELIVERED",
    description: "Simulation multijoueur en réseau sur la planète Trantor.",
    github: "https://github.com/vincbct34/Tek2-EPITECH/tree/main/zappy",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            PROJETS<span className="text-electric-blue">.</span>
          </h2>
          <div className="text-gray-400 font-mono">
            {"// Portfolio de réalisations"}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Terminal */}
          <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-electric-blue mb-4">
                user@404factory:~/projects$ ls -la
              </div>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-gray-800/50 p-2 -mx-2 rounded transition-colors ${selectedProject === index ? "bg-gray-800/50" : ""
                    }`}
                  onClick={() => {
                    setSelectedProject(index);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-electric-blue" />
                    <span className="text-white">{project.name}</span>
                    <span
                      className={`ml-auto text-xs px-2 py-1 rounded ${project.status === "DEPLOYED"
                          ? "bg-green-900 text-green-300"
                          : project.status === "RUNNING"
                            ? "bg-blue-900 text-blue-300"
                            : project.status === "DELIVERED"
                              ? "bg-purple-900 text-purple-300"
                              : "bg-yellow-900 text-yellow-300"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-electric-blue">
                user@404factory:~/projects$ cat {projects[selectedProject].name}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="border border-gray-700 p-6 bg-gray-900/40">
              <h3 className="text-2xl font-bold mb-2 text-electric-blue">
                {projects[selectedProject].name}
              </h3>
              <div className="text-gray-400 mb-4">
                Type: {projects[selectedProject].type} | Tech:{" "}
                {projects[selectedProject].tech}
              </div>
              <div className="flex justify-center pt-6">
                <div className="relative w-full max-w-[500px] aspect-square">
                  {(!imageLoaded || imageError) && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  {!imageError && (
                    <Image
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className={`object-contain transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => {
                        setImageError(true);
                        setImageLoaded(false);
                      }}
                      priority={selectedProject === 0}
                      unoptimized
                    />
                  )}
                  {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Image non disponible
                    </div>
                  )}
                </div>
              </div>
              <p className="text-center text-gray-300 my-6">
                {projects[selectedProject].description}
              </p>
              <a
                href={projects[selectedProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:text-white transition-colors"
              >
                Voir le projet <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="text-center">
              <a
                href="https://github.com/vincbct34"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="border border-electric-blue text-electric-blue px-8 py-3 hover:bg-electric-blue hover:text-black transition-all duration-300 font-bold">
                  VOIR TOUS LES PROJETS
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

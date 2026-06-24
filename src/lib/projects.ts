/**
 * @fileoverview Project data shared by the home and work pages
 * Translation-dependent fields (title, description, type, placeholder) live in i18n
 * under `projects.items[id]`.
 * @module lib/projects
 */

export type ProjectId =
  | "uarIcs"
  | "opera"
  | "factory"
  | "portfolio"
  | "glados"
  | "qreview"
  | "epsa";

export interface WorkProject {
  /** i18n key under projects.items */
  id: ProjectId;
  /** Live URL used for OpenGraph image fetching */
  url?: string;
  /** Local fallback image in public/ */
  image?: string;
  /** External link (live site or repository) — omit for private/internal projects */
  link?: string;
  /** Internal case-study slug under /work/ */
  caseStudy?: string;
  /** Language-neutral tech tags */
  tags: string[];
  /** Shown in the home "Selected work" section */
  featured?: boolean;
}

export const projects: WorkProject[] = [
  {
    id: "uarIcs",
    image: "/uar-ics.webp",
    link: "https://uar-ics.umontpellier.fr/",
    caseStudy: "uar-ics-montpellier",
    tags: ["WordPress", "PHP", "SEO"],
    featured: true,
  },
  {
    id: "opera",
    link: "https://inscriptions.opera-orchestre-montpellier.fr",
    image: "/opera-orchestre-montpellier.webp",
    caseStudy: "opera-montpellier",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    id: "glados",
    image: "/glados.png",
    tags: ["Haskell"],
  },
  {
    id: "portfolio",
    link: "https://www.vincent-bichat.fr",
    image: "/portfolio.webp",
    tags: ["Vite", "React", "Framer Motion"],
  },
  {
    id: "factory",
    url: "https://www.404-factory.com",
    image: "/og-image.png",
    link: "https://github.com/vincbct34/404Factory",
    tags: ["Vite", "React", "TypeScript"],
  },
  {
    id: "epsa",
    image: "/epsa.webp",
    tags: ["Electron", "React", "TypeScript"],
  },
];

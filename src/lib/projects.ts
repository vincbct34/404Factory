/**
 * @fileoverview Project data shared by the home and work pages
 * Translation-dependent fields (title, description, type, placeholder) live in i18n
 * under `projects.items[id]`.
 * @module lib/projects
 */

export type ProjectId =
  | "opera"
  | "factory"
  | "portfolio"
  | "glados"
  | "qreview";

export interface WorkProject {
  /** i18n key under projects.items */
  id: ProjectId;
  /** Live URL used for OpenGraph image fetching */
  url?: string;
  /** Local fallback image in public/ */
  image?: string;
  /** External link (live site or repository) */
  link: string;
  /** Internal case-study slug under /work/ */
  caseStudy?: string;
  /** Language-neutral tech tags */
  tags: string[];
  /** Shown in the home "Selected work" section */
  featured?: boolean;
}

export const projects: WorkProject[] = [
  {
    id: "opera",
    url: "https://inscriptions.opera-orchestre-montpellier.fr",
    link: "https://inscriptions.opera-orchestre-montpellier.fr",
    caseStudy: "opera-montpellier",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    featured: true,
  },
  {
    id: "glados",
    image: "/glados.png",
    link: "https://github.com/vincbct34/Glados",
    tags: ["Haskell"],
    featured: true,
  },
  {
    id: "qreview",
    url: "https://qreview.vincent-bichat.fr",
    link: "https://github.com/vincbct34/QReview",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    id: "portfolio",
    url: "https://portfolio.vincent-bichat.fr",
    link: "https://portfolio.vincent-bichat.fr",
    tags: ["Vite", "React", "Framer Motion"],
  },
  {
    id: "factory",
    url: "https://404factory.vincent-bichat.fr",
    link: "https://github.com/vincbct34/404Factory",
    tags: ["Vite", "React", "TypeScript"],
  },
];

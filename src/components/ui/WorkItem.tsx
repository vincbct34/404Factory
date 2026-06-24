/**
 * @fileoverview Broken-grid work item: visual (OG image or placeholder),
 * outlined index number overlapping the boundary, info column with tags
 * @module components/ui/WorkItem
 */

import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { useOpenGraphImage } from "@/hooks/useOpenGraphImage";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";
import type { WorkProject } from "@/lib/projects";

interface WorkItemProps {
  project: WorkProject;
  index: number;
}

export function WorkItem({ project, index }: WorkItemProps) {
  const { t, language } = useLanguage();
  const item = t.projects.items[project.id];
  const { imageUrl } = useOpenGraphImage(project.url, project.image);
  const num = String(index + 1).padStart(2, "0");

  // Layout follows the item's index, not its DOM position, so the broken
  // grid alternates identically on the home and work pages
  const layout = [
    "work-item",
    index % 2 === 0 ? "flip" : "",
    index === 0 ? "pull-up" : "",
    index === 1 ? "pull-down" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const visual = imageUrl ? (
    <img src={imageUrl} alt={item.title} loading="lazy" />
  ) : (
    <div className="ph">{item.ph}</div>
  );

  return (
    <Reveal className={layout}>
      {project.link ? (
        <a
          className="visual"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.title} — ${t.projects.viewProject}`}
        >
          {visual}
        </a>
      ) : (
        <div className="visual" aria-hidden="true">
          {visual}
        </div>
      )}
      <div className="info">
        <div className="num" aria-hidden="true">
          {num}
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="tags">
          <span>{item.type}</span>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.caseStudy ? (
          <Link
            className="more"
            to={localePath(language, `/work/${project.caseStudy}`)}
          >
            {t.projects.viewCase}
          </Link>
        ) : project.link ? (
          <a
            className="more"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.projects.viewProject}
          </a>
        ) : (
          <span className="more more-disabled">{t.projects.private}</span>
        )}
      </div>
    </Reveal>
  );
}

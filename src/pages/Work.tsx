/**
 * @fileoverview Work index — all projects in the broken grid
 * @module pages/Work
 */

import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Reveal, WorkItem } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { projects } from "@/lib/projects";

export function Work() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead page="work" path="/work" />
      <section className="pt-[13vh] md:pt-[22vh]">
        <Reveal className="sec-head">
          <span className="idx">{t.workPage.idx}</span>
          <h1>{t.workPage.title}</h1>
          <span className="count">{t.workPage.count}</span>
        </Reveal>
        <Reveal>
          <p className="prose-block mb-[10vh]">{t.workPage.intro}</p>
        </Reveal>
        {projects.map((project, i) => (
          <WorkItem key={project.id} project={project} index={i} />
        ))}
      </section>
    </Layout>
  );
}

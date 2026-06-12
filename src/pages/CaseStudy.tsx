/**
 * @fileoverview Case study template — editorial layout with meta grid,
 * narrative blocks and client quote. Currently one study: Opéra Montpellier.
 * @module pages/CaseStudy
 */

import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { useOpenGraphImage } from "@/hooks/useOpenGraphImage";
import { localePath } from "@/lib/paths";
import { projects } from "@/lib/projects";
import { NotFound } from "./NotFound";

export function CaseStudy() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const project = projects.find((p) => p.caseStudy === slug);
  const { imageUrl } = useOpenGraphImage(project?.url, project?.image);

  // Only the Opéra study exists for now
  if (!project || slug !== "opera-montpellier") return <NotFound />;

  const cs = t.caseStudy.opera;
  const labels = t.caseStudy.labels;

  return (
    <Layout>
      <SEOHead page="caseStudyOpera" path={`/work/${slug}`} />
      <section className="pt-[13vh] md:pt-[22vh]">
        <Reveal>
          <div className="kicker mb-6">{cs.folio}</div>
          <h1 className="display-title mb-8">{cs.title}</h1>
          <p className="prose-block text-xl mb-[8vh]">{cs.intro}</p>
        </Reveal>

        <Reveal className="meta-grid mb-[10vh]">
          <div>
            <div className="label">{labels.client}</div>
            <div className="value">{cs.client}</div>
          </div>
          <div>
            <div className="label">{labels.role}</div>
            <div className="value">{cs.role}</div>
          </div>
          <div>
            <div className="label">{labels.stack}</div>
            <div className="value">{cs.stack}</div>
          </div>
          <div>
            <div className="label">{labels.status}</div>
            <div className="value">{cs.status}</div>
          </div>
        </Reveal>

        {imageUrl && (
          <Reveal className="mb-[10vh]">
            <div className="border border-ink overflow-hidden">
              <img src={imageUrl} alt={cs.title} className="w-full" />
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vh] md:gap-12 mb-[10vh]">
          <Reveal>
            <div className="kicker mb-4">{cs.contextTitle}</div>
            <p className="prose-block">{cs.contextText}</p>
          </Reveal>
          <Reveal>
            <div className="kicker mb-4">{cs.solutionTitle}</div>
            <p className="prose-block">{cs.solutionText}</p>
          </Reveal>
        </div>

        <Reveal className="ink-block p-[6vh_4vw] mb-[10vh]">
          <div className="kicker mb-6 opacity-100 text-paper/60">
            {cs.quoteTitle}
          </div>
          <blockquote className="font-display font-bold text-[clamp(1.4rem,3vw,2.4rem)] leading-snug tracking-tight">
            « {cs.quote} »
          </blockquote>
          <div className="font-label text-[11px] tracking-[0.2em] uppercase mt-6 text-paper/60">
            — {cs.quoteAuthor}
          </div>
        </Reveal>

        <Reveal className="flex flex-wrap items-center gap-8">
          <a
            className="btn-void"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{labels.visit} →</span>
          </a>
          <Link
            className="font-label text-[11px] tracking-[0.2em] uppercase hover:text-klein"
            to={localePath(language, "/work")}
          >
            {labels.back}
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
}

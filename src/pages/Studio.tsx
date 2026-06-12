/**
 * @fileoverview Studio — bio, approach, tech stack, client reviews (QReview API)
 * @module pages/Studio
 */

import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { useReviews } from "@/hooks/useReviews";

/** Technologies displayed in the stack grid */
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

export function Studio() {
  const { t } = useLanguage();
  const { reviews, stats } = useReviews();

  const hasApiReviews = reviews.length > 0;

  return (
    <Layout>
      <SEOHead page="studio" path="/studio" />
      <section className="pt-[13vh] md:pt-[22vh]">
        <Reveal className="sec-head">
          <span className="idx">{t.studio.idx}</span>
          <h1>{t.studio.title}</h1>
          <span className="count">{t.studio.count}</span>
        </Reveal>

        {/* Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-[14vh] items-start">
          <Reveal className="md:col-span-4">
            <div className="border border-ink overflow-hidden">
              <img
                src="/me.png"
                alt={t.studio.photoAlt}
                className="w-full grayscale"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-8 md:pl-8">
            <div className="kicker mb-4">{t.studio.kicker}</div>
            <p className="font-display font-bold text-[clamp(1.3rem,2.6vw,2rem)] leading-snug tracking-tight mb-8">
              {t.studio.bio}
            </p>
            <div className="kicker mb-3">{t.studio.missionTitle}</div>
            <p className="prose-block">{t.studio.missionText}</p>
          </Reveal>
        </div>

        {/* Approach */}
        <Reveal className="sec-head">
          <span className="idx">·</span>
          <h2 className="!text-[clamp(1.8rem,4vw,3rem)]">
            {t.studio.approachTitle}
          </h2>
        </Reveal>
        <Reveal className="svc mb-[14vh]">
          {t.studio.approach.map((point, i) => (
            <div key={i} className="svc-row" data-hover>
              <span className="n">{String(i + 1).padStart(3, "0")}</span>
              <h3 className="!text-[clamp(1.1rem,2.4vw,1.8rem)] !font-bold">
                {point}
              </h3>
            </div>
          ))}
        </Reveal>

        {/* Stack */}
        <Reveal>
          <div className="kicker mb-6">{t.studio.stackTitle}</div>
          <div className="tags flex flex-wrap gap-2 mb-[14vh]">
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </Reveal>

        {/* Reviews */}
        <Reveal className="sec-head">
          <span className="idx">·</span>
          <h2 className="!text-[clamp(1.8rem,4vw,3rem)]">
            {t.studio.reviewsTitle}
          </h2>
          <span className="count">
            {stats
              ? `${parseFloat(stats.average_rating).toFixed(1)}/5 — ${stats.total_reviews} ${t.studio.reviewsCount}`
              : t.studio.reviewsCount}
          </span>
        </Reveal>
        <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
          {hasApiReviews ? (
            reviews.map((review) => (
              <Reveal key={review.id} className="bg-paper p-8 md:p-10">
                <div className="font-label text-[11px] tracking-[0.2em] text-klein mb-4">
                  {review.rating}/5
                </div>
                <blockquote className="font-display font-bold text-lg leading-snug tracking-tight mb-6">
                  « {review.comment} »
                </blockquote>
                <div className="font-label text-[10px] tracking-[0.2em] uppercase opacity-60">
                  {review.author_name} — {review.company_name}
                </div>
              </Reveal>
            ))
          ) : (
            <Reveal className="bg-paper p-8 md:p-10">
              <blockquote className="font-display font-bold text-lg leading-snug tracking-tight mb-6">
                « {t.studio.staticReview.text} »
              </blockquote>
              <div className="font-label text-[10px] tracking-[0.2em] uppercase opacity-60">
                {t.studio.staticReview.name} — {t.studio.staticReview.role}
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </Layout>
  );
}

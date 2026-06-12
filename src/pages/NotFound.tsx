/**
 * @fileoverview 404 — the brand's namesake page. Full-screen void field,
 * giant drawn-ring 404, marquee of the error itself.
 * @module pages/NotFound
 */

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Ring, VoidField, Marquee } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";

export function NotFound() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <Layout footer={false}>
      <SEOHead page="notFound" path="/" noindex />

      <div className="hero">
        <VoidField />
        <div className="folio">{t.notFound.folio}</div>
        <h1>
          4<Ring />4
        </h1>
        <div className="strap">
          <p>{t.notFound.line}</p>
          <div className="coords">
            ERROR — 404
            <br />
            {t.hero.coordsLine1}
          </div>
        </div>

        {/* The page's own CTA — the ring gets "found" on hover */}
        <Link
          className="cta-found font-display font-black tracking-tight text-[clamp(1.6rem,5vw,4rem)] leading-none mt-12 inline-block text-ink no-underline group"
          to={localePath(language, "/")}
          data-hover
          aria-label={t.notFound.backHome}
        >
          {t.notFound.ctaPre}
          <Ring />
          {t.notFound.ctaPost} →
        </Link>
      </div>

      <Marquee
        items={[
          "404",
          "PAGE NOT FOUND",
          "404",
          t.notFound.footer.toUpperCase(),
        ]}
      />

      <div className="py-8 px-[4vw] flex justify-between flex-wrap gap-4 font-label text-[11px] tracking-[0.18em] uppercase opacity-60">
        <span>
          © {year} 404FACTORY — {t.notFound.footer}
        </span>
        <span aria-hidden="true">
          404_
          <span className="blink" />
        </span>
      </div>
    </Layout>
  );
}

/**
 * @fileoverview Services — index rows with Klein fill, per-service detail,
 * four-step process grid
 * @module pages/Services
 */

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";

export function Services() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <SEOHead page="services" path="/services" />
      <section className="pt-[13vh] md:pt-[22vh]">
        <Reveal className="sec-head">
          <span className="idx">{t.services.idx}</span>
          <h1>{t.services.title}</h1>
          <span className="count">{t.services.count}</span>
        </Reveal>
        <Reveal>
          <p className="prose-block mb-[10vh]">{t.services.intro}</p>
        </Reveal>

        <Reveal className="svc mb-[14vh]">
          {t.services.items.map((service) => (
            <a
              key={service.n}
              className="svc-row"
              data-hover
              href={`#svc-${service.n}`}
            >
              <span className="n">{service.n}</span>
              <h3>{service.title}</h3>
              <span className="d">{service.short}</span>
            </a>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink border border-ink mb-[14vh]">
          {t.services.items.map((service) => (
            <div
              key={service.n}
              id={`svc-${service.n}`}
              className="bg-paper p-8 md:p-10"
            >
              <div className="font-label text-[11px] tracking-[0.25em] text-klein mb-6">
                {service.n}
              </div>
              <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
                {service.title}
              </h2>
              <p className="prose-block text-[0.95rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <Reveal className="sec-head">
          <span className="idx">{t.services.process.idx}</span>
          <h2>{t.services.process.title}</h2>
          <span className="count">{t.services.process.count}</span>
        </Reveal>
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink mb-[10vh]">
          {t.services.process.steps.map((step) => (
            <div key={step.n} className="bg-paper p-8">
              <div
                className="font-display font-black text-6xl text-transparent mb-6"
                style={{ WebkitTextStroke: "1px #101010" }}
                aria-hidden="true"
              >
                {step.n}
              </div>
              <h3 className="font-display font-extrabold text-xl tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="prose-block text-[0.95rem]">{step.description}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <Link className="btn-void" to={localePath(language, "/contact")}>
            <span>{t.nav.contact} →</span>
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
}

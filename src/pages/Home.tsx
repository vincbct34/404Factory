/**
 * @fileoverview Home — hero + void field, marquee, selected work,
 * service rows, manifesto
 * @module pages/Home
 */

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import {
  Ring,
  VoidField,
  Marquee,
  Reveal,
  Manifesto,
  WorkItem,
} from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";
import { projects } from "@/lib/projects";

export function Home() {
  const { t, language } = useLanguage();
  const featured = projects.filter((p) => p.featured);

  return (
    <Layout>
      <SEOHead page="home" path="/" />

      {/* Hero */}
      <div className="hero">
        <VoidField />
        <div className="folio">{t.hero.folio}</div>
        <h1>
          4<Ring />
          4factory
        </h1>
        <div className="strap">
          <p>{t.hero.strap}</p>
          <div className="coords">
            {t.hero.coordsLine1}
            <br />
            {t.hero.coordsLine2}
          </div>
        </div>
      </div>

      <Marquee items={t.marquee} />

      {/* Selected work */}
      <section id="work">
        <Reveal className="sec-head">
          <span className="idx">{t.home.work.idx}</span>
          <h2>{t.home.work.title}</h2>
          <span className="count">{t.home.work.count}</span>
        </Reveal>
        {featured.map((project, i) => (
          <WorkItem key={project.id} project={project} index={i} />
        ))}
        <Reveal className="text-center">
          <Link className="btn-void" to={localePath(language, "/work")}>
            <span>{t.home.work.viewAll} →</span>
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services">
        <Reveal className="sec-head">
          <span className="idx">{t.home.services.idx}</span>
          <h2>{t.home.services.title}</h2>
          <span className="count">{t.home.services.count}</span>
        </Reveal>
        <Reveal className="svc">
          {t.services.items.map((service) => (
            <Link
              key={service.n}
              className="svc-row"
              data-hover
              to={localePath(language, "/services")}
            >
              <span className="n">{service.n}</span>
              <h3>{service.title}</h3>
              <span className="d">{service.short}</span>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* Manifesto */}
      <section id="studio">
        <Reveal className="sec-head">
          <span className="idx">{t.home.studio.idx}</span>
          <h2>{t.home.studio.title}</h2>
          <span className="count">{t.home.studio.count}</span>
        </Reveal>
        <Manifesto text={t.home.studio.manifesto} />
      </section>
    </Layout>
  );
}

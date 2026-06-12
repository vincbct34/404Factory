/**
 * @fileoverview Legal notice page (Mentions Légales)
 * @module pages/Legal
 */

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";

export function Legal() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <SEOHead page="legal" path="/legal" />
      <section className="pt-[13vh] md:pt-[22vh] max-w-4xl">
        <Reveal>
          <Link
            className="font-label text-[11px] tracking-[0.2em] uppercase hover:text-klein"
            to={localePath(language, "/")}
          >
            {t.legal.backHome}
          </Link>
          <div className="kicker mt-10 mb-4">{t.legal.kicker}</div>
          <h1 className="display-title mb-[8vh]">{t.legal.title}</h1>
        </Reveal>

        {/* Editor */}
        <Reveal>
          <div className="kicker mb-4">{t.legal.editor.title}</div>
          <div className="meta-grid mb-12">
            <div>
              <div className="label">{t.legal.editor.name}</div>
              <div className="value">{t.legal.editor.namePlaceholder}</div>
            </div>
            <div>
              <div className="label">{t.legal.editor.status}</div>
              <div className="value">{t.legal.editor.statusPlaceholder}</div>
            </div>
            <div>
              <div className="label">{t.legal.editor.siret}</div>
              <div className="value">{t.legal.editor.siretPlaceholder}</div>
            </div>
            <div>
              <div className="label">{t.legal.editor.address}</div>
              <div className="value text-sm font-normal">
                {t.legal.editor.addressPlaceholder}
              </div>
            </div>
            <div>
              <div className="label">{t.legal.editor.phone}</div>
              <div className="value">+33 6 23 43 10 09</div>
            </div>
            <div>
              <div className="label">{t.legal.editor.email}</div>
              <div className="value">factory404@outlook.fr</div>
            </div>
          </div>
        </Reveal>

        {/* Hosting */}
        <Reveal>
          <div className="kicker mb-4">{t.legal.hosting.title}</div>
          <div className="meta-grid mb-12">
            <div>
              <div className="label">{t.legal.hosting.provider}</div>
              <div className="value">{t.legal.hosting.providerPlaceholder}</div>
            </div>
            <div>
              <div className="label">{t.legal.hosting.address}</div>
              <div className="value text-sm font-normal">
                {t.legal.hosting.addressPlaceholder}
              </div>
            </div>
          </div>
        </Reveal>

        {/* IP + data */}
        <Reveal className="mb-[10vh]">
          <div className="kicker mb-4">{t.legal.intellectual.title}</div>
          <p className="prose-block mb-12">{t.legal.intellectual.text}</p>
          <div className="kicker mb-4">{t.legal.data.title}</div>
          <p className="prose-block">{t.legal.data.text}</p>
        </Reveal>
      </section>
    </Layout>
  );
}

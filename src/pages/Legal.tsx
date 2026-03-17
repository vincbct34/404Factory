/**
 * @fileoverview Legal notice page (Mentions Légales)
 * @module pages/Legal
 */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { GlassCard } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead } from "@/components/SEOHead";

/**
 * Legal notice page with editor info, hosting, IP, and data privacy sections
 * Placeholder values marked with brackets should be filled in by the site owner
 */
export function Legal() {
  const { t } = useLanguage();

  return (
    <div className="noise-overlay">
      <SEOHead />
      <div className="gradient-bg" />

      <main className="min-h-screen py-24">
        <div className="container max-w-3xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-electric hover:text-white transition-colors mb-8 font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.legal.backHome}
            </a>
            <h1 className="section-title">
              {t.legal.title}
              <span className="text-electric">.</span>
            </h1>
            <p className="section-subtitle font-mono">{t.legal.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Editor info */}
            <GlassCard className="p-8" hover={false}>
              <h2 className="text-xl font-bold text-electric mb-4">
                {t.legal.editor.title}
              </h2>
              <div className="space-y-2 text-gray-300 font-mono text-sm">
                <p>
                  {t.legal.editor.name}{" "}
                  <span className="text-white">
                    {t.legal.editor.namePlaceholder}
                  </span>
                </p>
                <p>
                  {t.legal.editor.status}{" "}
                  <span className="text-white">
                    {t.legal.editor.statusPlaceholder}
                  </span>
                </p>
                <p>
                  {t.legal.editor.siret}{" "}
                  <span className="text-white">
                    {t.legal.editor.siretPlaceholder}
                  </span>
                </p>
                <p>
                  {t.legal.editor.address}{" "}
                  <span className="text-white">
                    {t.legal.editor.addressPlaceholder}
                  </span>
                </p>
                <p>
                  {t.legal.editor.phone}{" "}
                  <span className="text-white">+33 6 23 43 10 09</span>
                </p>
                <p>
                  {t.legal.editor.email}{" "}
                  <span className="text-white">factory404@outlook.fr</span>
                </p>
              </div>
            </GlassCard>

            {/* Hosting */}
            <GlassCard className="p-8" hover={false}>
              <h2 className="text-xl font-bold text-electric mb-4">
                {t.legal.hosting.title}
              </h2>
              <div className="space-y-2 text-gray-300 font-mono text-sm">
                <p>
                  {t.legal.hosting.provider}{" "}
                  <span className="text-white">
                    {t.legal.hosting.providerPlaceholder}
                  </span>
                </p>
                <p>
                  {t.legal.hosting.address}{" "}
                  <span className="text-white">
                    {t.legal.hosting.addressPlaceholder}
                  </span>
                </p>
              </div>
            </GlassCard>

            {/* Intellectual property */}
            <GlassCard className="p-8" hover={false}>
              <h2 className="text-xl font-bold text-electric mb-4">
                {t.legal.intellectual.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.legal.intellectual.text}
              </p>
            </GlassCard>

            {/* Data privacy */}
            <GlassCard className="p-8" hover={false}>
              <h2 className="text-xl font-bold text-electric mb-4">
                {t.legal.data.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.legal.data.text}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

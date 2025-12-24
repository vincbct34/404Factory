/**
 * @fileoverview Contact section with form and contact information
 * @module components/sections/Contact
 */

import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  viewportConfig,
} from "@/lib/animations";
import { useContactForm } from "@/hooks/useContactForm";
import { useLanguage } from "@/hooks/useLanguage";
import { Terminal, GlassCard, InfoCard } from "@/components/ui";

/**
 * Contact section with a terminal-styled form and contact information cards
 * Handles form submission via EmailJS with success/error states
 */
export function Contact() {
  const { formData, state, updateFormData, submitForm } = useContactForm();
  const { t } = useLanguage();

  /** Handles form submission */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="section-title">
            {t.contact.title}
            <span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">{t.contact.subtitle}</p>
        </motion.div>

        {/* Two-column layout: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form in terminal style */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <Terminal title="contact-form">
              <div className="text-electric font-mono text-sm mb-4">
                {t.contact.terminal}
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {state.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded flex items-center gap-2 text-red-300 font-mono text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {state.error}
                  </motion.div>
                )}

                {state.isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded flex items-center gap-2 text-green-300 font-mono text-sm"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    {t.contact.success}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form fields */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 font-mono text-sm"
              >
                {/* Name field */}
                <div>
                  <label className="text-gray-400 block mb-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors"
                    placeholder={t.contact.form.namePlaceholder}
                    disabled={state.isLoading}
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="text-gray-400 block mb-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors"
                    placeholder={t.contact.form.emailPlaceholder}
                    disabled={state.isLoading}
                  />
                </div>

                {/* Project type select */}
                <div>
                  <label className="text-gray-400 block mb-1">
                    {t.contact.form.projectType}
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => updateFormData("project", e.target.value)}
                    className="w-full bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors"
                    disabled={state.isLoading}
                  >
                    <option value="">{t.contact.form.projectSelect}</option>
                    <option value="website">
                      {t.contact.form.projectWebsite}
                    </option>
                    <option value="automation">
                      {t.contact.form.projectAutomation}
                    </option>
                    <option value="consulting">
                      {t.contact.form.projectConsulting}
                    </option>
                  </select>
                </div>

                {/* Message textarea */}
                <div>
                  <label className="text-gray-400 block mb-1">
                    {t.contact.form.description}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors resize-none"
                    placeholder={t.contact.form.descriptionPlaceholder}
                    disabled={state.isLoading}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={state.isLoading}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: state.isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: state.isLoading ? 1 : 0.98 }}
                >
                  {state.isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {state.isLoading
                    ? t.contact.form.sending
                    : t.contact.form.send}
                </motion.button>
              </form>
            </Terminal>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
            className="space-y-6"
          >
            {/* Contact details */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-electric mb-6">
                {t.contact.info.title}
              </h3>

              <div className="space-y-4">
                <InfoCard
                  icon={Mail}
                  title="Email"
                  subtitle="factory404@outlook.fr"
                  href="mailto:factory404@outlook.fr"
                />

                <InfoCard
                  icon={Phone}
                  title={t.contact.info.phone}
                  subtitle="+33 6 23 43 10 09"
                  href="tel:+33623431009"
                />

                <InfoCard
                  icon={MapPin}
                  title={t.contact.info.location}
                  subtitle="Montpellier, France"
                />
              </div>
            </GlassCard>

            {/* Response time info */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-4">
                {t.contact.responseTime.title}
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>{t.contact.responseTime.email}</span>
                  <span className="text-electric font-mono">{"< 24h"}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.responseTime.quote}</span>
                  <span className="text-electric font-mono">{"< 48h"}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.responseTime.project}</span>
                  <span className="text-electric font-mono">
                    {t.contact.responseTime.custom}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

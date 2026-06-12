/**
 * @fileoverview Contact — form (Resend + Zod) and studio details
 * @module pages/Contact
 */

import type { SubmitEvent } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Reveal } from "@/components/ui";
import { useContactForm } from "@/hooks/useContactForm";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { formData, state, updateFormData, submitForm } = useContactForm();
  const { t } = useLanguage();

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <Layout>
      <SEOHead page="contact" path="/contact" />
      <section className="pt-[13vh] md:pt-[22vh]">
        <Reveal className="sec-head">
          <span className="idx">{t.contact.idx}</span>
          <h1>{t.contact.title}</h1>
          <span className="count">{t.contact.count}</span>
        </Reveal>
        <Reveal>
          <p className="prose-block mb-[10vh]">{t.contact.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {state.error && (
                <div className="form-status" role="alert" aria-live="assertive">
                  ERR — {state.error}
                </div>
              )}
              {state.isSuccess && (
                <div
                  className="form-status ok"
                  role="status"
                  aria-live="polite"
                >
                  OK — {t.contact.success}
                </div>
              )}

              <div className="field">
                <label htmlFor="contact-name">{t.contact.form.name}</label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder={t.contact.form.namePlaceholder}
                  disabled={state.isLoading}
                  aria-required="true"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-email">{t.contact.form.email}</label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder={t.contact.form.emailPlaceholder}
                  disabled={state.isLoading}
                  aria-required="true"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-project">
                  {t.contact.form.projectType}
                </label>
                <select
                  id="contact-project"
                  value={formData.project}
                  onChange={(e) => updateFormData("project", e.target.value)}
                  disabled={state.isLoading}
                  aria-required="true"
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

              <div className="field">
                <label htmlFor="contact-message">
                  {t.contact.form.description}
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={6}
                  placeholder={t.contact.form.descriptionPlaceholder}
                  disabled={state.isLoading}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className="btn-void"
                disabled={state.isLoading}
              >
                <span>
                  {state.isLoading
                    ? t.contact.form.sending
                    : `${t.contact.form.send} →`}
                </span>
              </button>
            </form>
          </Reveal>

          {/* Details */}
          <Reveal className="lg:col-span-5">
            <div className="kicker mb-4">{t.contact.info.title}</div>
            <div className="meta-grid mb-12">
              <div>
                <div className="label">{t.contact.info.email}</div>
                <div className="value">
                  <a
                    href="mailto:factory404@outlook.fr"
                    className="hover:text-klein"
                  >
                    factory404@outlook.fr
                  </a>
                </div>
              </div>
              <div>
                <div className="label">{t.contact.info.phone}</div>
                <div className="value">
                  <a href="tel:+33623431009" className="hover:text-klein">
                    +33 6 23 43 10 09
                  </a>
                </div>
              </div>
              <div>
                <div className="label">{t.contact.info.location}</div>
                <div className="value">{t.contact.info.locationValue}</div>
              </div>
            </div>

            <div className="kicker mb-4">{t.contact.responseTime.title}</div>
            <div className="meta-grid">
              <div>
                <div className="label">{t.contact.responseTime.email}</div>
                <div className="value text-klein">
                  {t.contact.responseTime.emailValue}
                </div>
              </div>
              <div>
                <div className="label">{t.contact.responseTime.quote}</div>
                <div className="value text-klein">
                  {t.contact.responseTime.quoteValue}
                </div>
              </div>
              <div>
                <div className="label">{t.contact.responseTime.project}</div>
                <div className="value">
                  {t.contact.responseTime.projectValue}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

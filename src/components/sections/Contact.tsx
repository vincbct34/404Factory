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
import { Terminal, GlassCard, InfoCard } from "@/components/ui";

export function Contact() {
  const { formData, state, updateFormData, submitForm } = useContactForm();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="section-title">
            CONTACT<span className="text-electric">.</span>
          </h2>
          <p className="section-subtitle font-mono">
            {"// Démarrons votre projet"}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <Terminal title="contact-form">
              <div className="text-electric font-mono text-sm mb-4">
                user@404factory:~$ ./start-project
              </div>

              {/* Status Messages */}
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
                    Message envoyé avec succès !
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 font-mono text-sm"
              >
                <div>
                  <label className="text-gray-400 block mb-1">
                    {"> Nom du client:"}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors"
                    placeholder="John Doe"
                    disabled={state.isLoading}
                  />
                </div>

                <div>
                  <label className="text-gray-400 block mb-1">
                    {"> Email:"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    disabled={state.isLoading}
                  />
                </div>

                <div>
                  <label className="text-gray-400 block mb-1">
                    {"> Type de projet:"}
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => updateFormData("project", e.target.value)}
                    className="w-full bg-black border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors"
                    disabled={state.isLoading}
                  >
                    <option value="">Sélectionner...</option>
                    <option value="website">Site web</option>
                    <option value="automation">Automatisation</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 block mb-1">
                    {"> Description du projet:"}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-electric focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                    disabled={state.isLoading}
                  />
                </div>

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
                  {state.isLoading ? "ENVOI_EN_COURS..." : "ENVOYER_MESSAGE"}
                </motion.button>
              </form>
            </Terminal>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
            className="space-y-6"
          >
            {/* Contact Details */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-electric mb-6">
                Informations de contact
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
                  title="Téléphone"
                  subtitle="+33 6 23 43 10 09"
                  href="tel:+33623431009"
                />

                <InfoCard
                  icon={MapPin}
                  title="Localisation"
                  subtitle="Montpellier, France"
                />
              </div>
            </GlassCard>

            {/* Response Time */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-4">Temps de réponse</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="text-electric font-mono">{"< 24h"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Devis:</span>
                  <span className="text-electric font-mono">{"< 48h"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Projet:</span>
                  <span className="text-electric font-mono">Sur mesure</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

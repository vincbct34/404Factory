"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useContactForm } from "@/lib/hooks/useContactForm"

export function ContactSection() {
  const { formData, state, updateFormData, submitForm } = useContactForm()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm()
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            CONTACT<span className="text-electric-blue">.</span>
          </h2>
          <div className="text-gray-400 font-mono">{"// Démarrons votre projet"}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CLI Form */}
          <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400">contact-form</span>
            </div>
            <div className="p-6">
              <div className="text-electric-blue font-mono text-sm mb-4">user@404factory:~$ ./start-project</div>

              {/* Messages de statut */}
              <div className="mb-4 min-h-[1rem]">
                {isHydrated && state.error && (
                  <div className="p-3 bg-red-900/20 border border-red-500 rounded flex items-center gap-2 text-red-200 font-mono text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {state.error}
                  </div>
                )}

                {isHydrated && state.isSuccess && (
                  <div className="p-3 bg-green-900/20 border border-green-500 rounded flex items-center gap-2 text-green-200 font-mono text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Message envoyé avec succès ! Je vous répondrai rapidement.
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
                <div>
                  <label className="text-gray-400 block mb-1">{"> Nom du client:"}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full bg-transparent border border-gray-600 px-3 py-2 text-white focus:border-electric-blue focus:outline-none"
                    placeholder="John Doe"
                    disabled={state.isLoading}
                  />
                </div>

                <div>
                  <label className="text-gray-400 block mb-1">{"> Email:"}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full bg-transparent border border-gray-600 px-3 py-2 text-white focus:border-electric-blue focus:outline-none"
                    placeholder="john@example.com"
                    disabled={state.isLoading}
                  />
                </div>

                <div>
                  <label className="text-gray-400 block mb-1">{"> Type de projet:"}</label>
                  <select
                    value={formData.project}
                    onChange={(e) => updateFormData('project', e.target.value)}
                    className="w-full bg-black border border-gray-600 px-3 py-2 text-white focus:border-electric-blue focus:outline-none"
                    disabled={state.isLoading}
                  >
                    <option value="">Sélectionner...</option>
                    <option value="website">Site web</option>
                    <option value="automation">Automatisation</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 block mb-1">{"> Description du projet:"}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border border-gray-600 px-3 py-2 text-white focus:border-electric-blue focus:outline-none resize-none"
                    placeholder="Décrivez votre projet..."
                    disabled={state.isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.isLoading}
                  className="flex items-center gap-2 bg-electric-blue text-black px-6 py-3 font-bold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {state.isLoading ? 'ENVOI_EN_COURS...' : 'ENVOYER_MESSAGE'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-gray-700 p-6 bg-gray-900/40">
              <h3 className="text-2xl font-bold mb-6 text-electric-blue">Informations de contact</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-electric-blue" />
                  <div>
                    <div className="font-bold">Email</div>
                    <a
                      href="mailto:factory404@outlook.com"
                      className="text-gray-400 underline hover:text-electric-blue"
                    >
                      factory404@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-electric-blue" />
                  <div>
                    <div className="font-bold">Téléphone</div>
                    <a
                      href="tel:+33623431009"
                      className="text-gray-400 underline hover:text-electric-blue"
                    >
                      +33 6 23 43 10 09
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                  <div>
                    <div className="font-bold">Localisation</div>
                    <div className="text-gray-400">Montpellier, France</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-700 p-6 bg-gray-900/40">
              <h3 className="text-xl font-bold mb-4">Temps de réponse</h3>
              <div className="text-gray-300">
                <div className="flex justify-between mb-2">
                  <span>Email:</span>
                  <span className="text-electric-blue">{"< 24h"}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Devis:</span>
                  <span className="text-electric-blue">{"< 48h"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Projet:</span>
                  <span className="text-electric-blue">Sur mesure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

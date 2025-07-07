"use client"

import { Download, Code, Zap, Terminal } from "lucide-react"

const pricingOptions = [
  {
    icon: Code,
    title: "SITE_VITRINE",
    subtitle: "Site web moderne et responsive",
    price: "Sur devis",
    features: [
      "Design sur mesure",
      "Responsive mobile/desktop",
      "Optimisation SEO",
      "Hébergement 1 an inclus",
      "Formation à l'administration",
      "Support 3 mois"
    ],
    popular: false
  },
  {
    icon: Zap,
    title: "APPLICATION_WEB",
    subtitle: "Solution complète avec backend",
    price: "Sur devis",
    features: [
      "Interface utilisateur avancée",
      "Base de données",
      "API REST/GraphQL",
      "Authentification",
      "Tableaux de bord",
      "Tests automatisés"
    ],
    popular: true
  },
  {
    icon: Terminal,
    title: "AUTOMATISATION",
    subtitle: "Scripts et intégrations sur mesure",
    price: "Sur devis",
    features: [
      "Analyse des besoins",
      "Scripts personnalisés",
      "Intégrations API",
      "Documentation complète",
      "Formation utilisateur",
      "Maintenance 6 mois"
    ],
    popular: false
  }
]

export function BrochureSection() {
  const handleBrochureRedirect = () => {
    window.location.href = '/brochure';
  }

  return (
    <section id="brochure" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            TARIFS<span className="text-electric-blue">.</span>
          </h2>
          <div className="text-gray-400 font-mono mb-8">{"// Mes solutions et leurs prix"}</div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBrochureRedirect}
              className="flex items-center gap-2 bg-electric-blue hover:bg-electric-blue/80 text-black px-6 py-3 transition-all duration-300 group font-bold"
            >
              <Download className="w-5 h-5" />
              <span className="font-mono">VOIR_BROCHURE</span>
            </button>
          </div>
        </div>

        {/* Quick pricing overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative border p-8 transition-all duration-300 hover:scale-105 ${option.popular
                  ? 'border-electric-blue bg-electric-blue/5'
                  : 'border-gray-800 hover:border-electric-blue/50 bg-gray-900/20'
                }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-electric-blue text-black px-3 py-1 text-xs font-bold">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <option.icon className="w-6 h-6 text-electric-blue" />
                <h3 className="font-bold text-xl">{option.title}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-4">{option.subtitle}</p>
              <div className="text-2xl font-black text-electric-blue mb-6">{option.price}</div>

              <ul className="space-y-2">
                {option.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-electric-blue"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

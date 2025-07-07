import { Code, Zap, Terminal, Users, Clock, Star } from "lucide-react"

const pricingOptions = [
  {
    icon: Code,
    title: "SITE_VITRINE",
    subtitle: "Site web moderne et responsive",
    price: "À partir de 800€",
    features: [
      "Design sur mesure",
      "Responsive mobile/desktop",
      "Optimisation SEO",
      "Hébergement 1 an inclus",
      "Formation à l'administration",
      "Support 3 mois"
    ]
  },
  {
    icon: Zap,
    title: "APPLICATION_WEB",
    subtitle: "Solution complète avec backend",
    price: "À partir de 2500€",
    features: [
      "Interface utilisateur avancée",
      "Base de données",
      "API REST/GraphQL",
      "Authentification",
      "Tableaux de bord",
      "Tests automatisés"
    ]
  },
  {
    icon: Terminal,
    title: "AUTOMATISATION",
    subtitle: "Scripts et intégrations sur mesure",
    price: "À partir de 100",
    features: [
      "Analyse des besoins",
      "Scripts personnalisés",
      "Intégrations API",
      "Documentation complète",
      "Formation utilisateur",
      "Maintenance 6 mois"
    ]
  }
]

const additionalServices = [
  {
    icon: Users,
    title: "CONSULTING",
    description: "Audit technique et conseils stratégiques",
    price: "150€/heure"
  },
  {
    icon: Clock,
    title: "MAINTENANCE",
    description: "Support technique et mises à jour",
    price: "200€/mois"
  },
  {
    icon: Star,
    title: "FORMATION",
    description: "Formation équipe aux nouvelles technologies",
    price: "800€/jour"
  }
]

interface BrochureContentProps {
  forPDF?: boolean
}

export function BrochureContent({ forPDF = false }: BrochureContentProps) {
  return (
    <div className={`${forPDF ? 'print:w-full print:text-black print:bg-white w-[794px] text-black bg-white' : 'bg-black text-white'} p-8`}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className={`text-6xl font-black mb-2 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
          404FACTORY
        </div>
        <div className={`text-xl mb-4 ${forPDF ? 'print:text-gray-700 text-gray-700' : 'text-gray-300'}`}>
          DÉVELOPPEMENT WEB & AUTOMATISATION
        </div>
        <div className={`text-sm font-mono ${forPDF ? 'print:text-gray-600 text-gray-600' : 'text-gray-500'}`}>
          {"// Transformons vos erreurs en solutions"}
        </div>
      </div>

      {/* About Section */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-6 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
          QUI SUIS-JE ?
        </h2>
        <p className={`leading-relaxed mb-4 ${forPDF ? 'print:text-gray-800 text-gray-800' : 'text-gray-300'}`}>
          404Factory est une agence spécialisée dans le développement web moderne et l'automatisation.
          Je transforme vos idées en solutions numériques performantes et sur mesure.
        </p>
        <p className={`leading-relaxed ${forPDF ? 'print:text-gray-800 text-gray-800' : 'text-gray-300'}`}>
          Mon expertise couvre les technologies les plus récentes : React, Next.js, Node.js, Python,
          et bien d'autres. J'accompagne startups et PME dans leur transformation digitale.
        </p>
      </div>

      {/* Main Services */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-8 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
          MES SERVICES
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className={`border p-6 ${forPDF ? 'print:border-gray-300 border-gray-300' : 'border-gray-800'}`}>
              <div className="flex items-center gap-3 mb-4">
                <option.icon className={`w-8 h-8 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`} />
                <div>
                  <h3 className="text-2xl font-bold">{option.title}</h3>
                  <p className={forPDF ? 'print:text-gray-600 text-gray-600' : 'text-gray-400'}>{option.subtitle}</p>
                </div>
                <div className={`ml-auto text-2xl font-black ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
                  {option.price}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 ${forPDF ? 'print:bg-blue-600 bg-blue-600' : 'bg-electric-blue'}`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-8 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
          SERVICES COMPLÉMENTAIRES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className={`border p-6 text-center ${forPDF ? 'print:border-gray-300 border-gray-300' : 'border-gray-800'}`}>
              <service.icon className={`w-8 h-8 mx-auto mb-4 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`} />
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className={`text-sm mb-4 ${forPDF ? 'print:text-gray-600 text-gray-600' : 'text-gray-400'}`}>
                {service.description}
              </p>
              <div className={`text-lg font-bold ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-8 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
          NOTRE PROCESSUS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "ANALYSE", desc: "Étude de vos besoins et définition du cahier des charges" },
            { step: "02", title: "CONCEPTION", desc: "Création des maquettes et architecture technique" },
            { step: "03", title: "DÉVELOPPEMENT", desc: "Codage et tests avec livraisons régulières" },
            { step: "04", title: "DÉPLOIEMENT", desc: "Mise en ligne et formation de votre équipe" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-black mb-2 ${forPDF ? 'print:text-blue-600 text-blue-600' : 'text-electric-blue'}`}>
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className={`text-sm ${forPDF ? 'print:text-gray-600 text-gray-600' : 'text-gray-400'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className={`text-center border-t pt-8 ${forPDF ? 'print:border-gray-300 border-gray-300' : 'border-gray-800'}`}>
        <h2 className="text-2xl font-bold mb-4">CONTACTEZ-NOUS</h2>
        <p className={`mb-4 ${forPDF ? 'print:text-gray-700 text-gray-700' : 'text-gray-300'}`}>
          Prêt à transformer vos idées en réalité ? Discutons de votre projet !
        </p>
        <div className={`space-y-2 text-sm font-mono ${forPDF ? 'print:text-gray-600 text-gray-600' : 'text-gray-400'}`}>
          <div>Email: factory404@outlook.fr</div>
          <div>Téléphone: +33 6 23 43 10 09</div>
          <div>Web: www.404-factory.com</div>
        </div>
      </div>
    </div>
  )
}

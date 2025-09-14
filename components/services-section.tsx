"use client";

import { Code, Zap, Terminal } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "SITES_SUR_MESURE",
    description:
      "Développement web moderne avec les dernières technologies. React, Next.js, Node.js.",
    command: "> npm run build-website",
  },
  {
    icon: Zap,
    title: "AUTOMATISATIONS",
    description:
      "Scripts personnalisés, APIs, intégrations. Automatisez vos processus métier.",
    command: "> python automate.py",
  },
  {
    icon: Terminal,
    title: "CONSULTING_TECH",
    description:
      "Audit technique, architecture, optimisation. Expertise à votre service.",
    command: "> analyze --deep-dive",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            SERVICES<span className="text-electric-blue">.</span>
          </h2>
          <div className="text-gray-400 font-mono">
            {"// Mes expertises techniques"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="group border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 p-8 bg-gray-900/20 hover:bg-gray-900/40"
            >
              <div className="flex items-start gap-4 mb-4">
                <service.icon className="w-8 h-8 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-electric-blue transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-sm font-mono text-gray-500 mb-4">
                    {service.command}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Troisième service centré */}
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-1/2">
            <div className="group border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 p-8 bg-gray-900/20 hover:bg-gray-900/40">
              <div className="flex items-start gap-4 mb-4">
                {(() => {
                  const IconComponent = services[2].icon;
                  return (
                    <IconComponent className="w-8 h-8 text-electric-blue flex-shrink-0 mt-1" />
                  );
                })()}
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-electric-blue transition-colors">
                    {services[2].title}
                  </h3>
                  <div className="text-sm font-mono text-gray-500 mb-4">
                    {services[2].command}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {services[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>

      {/* Glitch overlay */}
      <div
        className={`absolute inset-0 bg-electric-blue/5 transition-opacity duration-100 ${glitchActive ? "opacity-100" : "opacity-0"
          }`}
      ></div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Error code animation */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-black text-electric-blue/20 select-none">404</div>
          <div className="text-sm uppercase tracking-[0.3em] text-gray-400 -mt-4">ERROR_NOT_FOUND</div>
        </div>

        {/* Main message */}
        <div className="text-4xl md:text-7xl font-black leading-tight mb-8">
          <div 
            className={`glitch-text ${glitchActive ? "glitch-active" : ""}`}
            data-text="JE TRANSFORME"
          >
            DE L'ERREUR
          </div>
          <div 
            className={`text-5xl glitch-text ${glitchActive ? "glitch-active" : ""}`}
            data-text="404"
          >
            <span className="text-electric-blue">404</span>
          </div>
          <div 
            className={`glitch-text ${glitchActive ? "glitch-active" : ""}`}
            data-text="A LA RUSSITE"
          >
            À LA RÉUSSITE
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Agence digitale spécialisée dans la création de solutions sur-mesure.
          <br />
          Imaginez, créez et transformez vos idées en réalité grâce à nous.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="crt-button bg-electric-blue text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
            onClick={() => {
              const section = document.getElementById("contact")
              if (section) {
                section.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            {">"} DÉMARRER_PROJET
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-electric-blue/30 font-mono text-sm animate-pulse">{"<html>"}</div>
      <div className="absolute bottom-20 right-10 text-electric-blue/30 font-mono text-sm animate-pulse">
        {"</body>"}
      </div>
    </section>
  )
}

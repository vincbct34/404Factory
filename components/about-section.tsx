export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            À_PROPOS<span className="text-electric-blue">.</span>
          </h2>
          <div className="text-gray-400 font-mono">{"// README.md"}</div>
        </div>

        <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-8 font-mono text-sm">
          <div className="text-electric-blue mb-6"># 404Factory</div>

          <div className="space-y-6 text-gray-300">
            <div>
              <div className="text-white font-bold mb-2">## Ma Mission</div>
              <p>
                Transformer les défis techniques en opportunités créatives. Je crois que chaque erreur 404 cache une
                solution innovante.
              </p>
            </div>

            <div>
              <div className="text-white font-bold mb-2">## Mon Approche</div>
              <ul className="space-y-1">
                <li>• Code propre et maintenable</li>
                <li>• Design centré utilisateur</li>
                <li>• Technologies modernes</li>
                <li>• Collaboration transparente</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-2">## Stack Technique</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "C++", "C", "Haskell"].map((tech) => (
                  <div
                    key={tech}
                    className="bg-black/50 px-3 py-2 text-center border border-gray-700 hover:border-electric-blue/50 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-white font-bold mb-2">## Contact</div>
                <p>
                <span className="text-electric-blue">Email: </span>
                <a
                  href="mailto:factory404@outlook.fr"
                  className="underline hover:text-electric-blue"
                >
                  factory404@outlook.fr
                </a>
                <br />
                <span className="text-electric-blue">GitHub: </span>
                <a
                  href="https://github.com/vincbct34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-electric-blue"
                >
                  @vincbct34
                </a>
                </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </section>
  )
}

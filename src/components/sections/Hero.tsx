import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeInUp, staggerContainer, glitchVariants } from "@/lib/animations";

export function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger glitch effect periodically
    const interval = setInterval(() => {
      controls.start("glitch");
      setTimeout(() => {
        controls.start("idle");
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient mesh background */}
      <div className="gradient-bg" />

      {/* Floating code elements */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-10 text-electric font-mono text-sm"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-32 right-10 text-electric font-mono text-sm"
      ></motion.div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-6xl mx-auto px-6"
      >
        {/* Error code */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="text-[8rem] md:text-[12rem] font-black text-electric/10 leading-none select-none">
            404
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-gray-500 -mt-8 font-mono">
            ERROR_NOT_FOUND
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="text-4xl md:text-7xl font-black leading-tight">
            <motion.span
              variants={glitchVariants}
              animate={controls}
              initial="idle"
              className="inline-block"
            >
              DE L'ERREUR
            </motion.span>
          </div>
          <div className="text-5xl md:text-8xl font-black my-2">
            <span className="text-electric glow-text">404</span>
          </div>
          <div className="text-4xl md:text-7xl font-black leading-tight">
            <motion.span
              variants={glitchVariants}
              animate={controls}
              initial="idle"
              className="inline-block"
            >
              À LA RÉUSSITE
            </motion.span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
        >
          Agence digitale spécialisée dans la création de solutions sur-mesure.
          <br />
          <span className="text-electric">Imaginez, créez</span> et transformez
          vos idées en réalité.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <button onClick={scrollToContact} className="btn-primary text-lg">
            <span className="font-mono">{">"}</span>
            DÉMARRER_PROJET
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

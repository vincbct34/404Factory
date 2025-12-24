/**
 * @fileoverview Hero section component - main landing area of the website
 * @module components/sections/Hero
 */

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeInUp, staggerContainer, glitchVariants } from "@/lib/animations";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Hero section with animated headline, 404 branding, and call-to-action
 * Features periodic glitch effect on text and staggered reveal animation
 */
export function Hero() {
  const controls = useAnimation();
  const { t } = useLanguage();

  // Trigger glitch effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("glitch");
      setTimeout(() => {
        controls.start("idle");
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  /** Smooth scrolls to the contact section */
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

      {/* Floating decorative elements */}
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

      {/* Main content container with staggered animations */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-6xl mx-auto px-6"
      >
        {/* 404 Error code branding */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="text-[8rem] md:text-[12rem] font-black text-electric/10 leading-none select-none">
            404
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-gray-500 -mt-8 font-mono">
            ERROR_NOT_FOUND
          </div>
        </motion.div>

        {/* Main headline with glitch effect */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="text-4xl md:text-7xl font-black leading-tight">
            <motion.span
              variants={glitchVariants}
              animate={controls}
              initial="idle"
              className="inline-block"
            >
              {t.hero.fromError}
            </motion.span>
          </div>
          <div className="text-5xl md:text-8xl font-black my-2">
            <span className="text-electric glow-text">{t.hero.code}</span>
          </div>
          <div className="text-4xl md:text-7xl font-black leading-tight">
            <motion.span
              variants={glitchVariants}
              animate={controls}
              initial="idle"
              className="inline-block"
            >
              {t.hero.toSuccess}
            </motion.span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
        >
          {t.hero.subtitle}
          <br />
          <span className="text-electric">{t.hero.subtitleHighlight}</span>{" "}
          {t.hero.subtitleEnd}
        </motion.p>

        {/* Call-to-action button */}
        <motion.div variants={fadeInUp}>
          <button onClick={scrollToContact} className="btn-primary text-lg">
            <span className="font-mono">{">"}</span>
            {t.hero.cta}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

/**
 * @fileoverview 404 Not Found page with factory-themed animations
 * @module pages/NotFound
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Cog, Factory, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/ui";

/** Floating 404 error animation data */
interface FloatingError {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

/**
 * Animated rotating cog/gear component
 * @param size - Size in pixels
 * @param speed - Animation duration in seconds
 * @param reverse - Whether to rotate counter-clockwise
 * @param className - Additional CSS classes
 */
function AnimatedCog({
  size = 48,
  speed = 8,
  reverse = false,
  className = "",
}: {
  size?: number;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      <Cog size={size} className="text-electric opacity-30" />
    </motion.div>
  );
}

/**
 * Animated conveyor belt at the bottom of the page
 * Features moving stripes and yellow warning markers
 */
function ConveyorBelt() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />
      {/* Moving belt segments */}
      <motion.div
        className="absolute inset-0 flex gap-4"
        animate={{ x: [0, -100] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-full border-r-2 border-gray-600/50 flex-shrink-0"
          />
        ))}
      </motion.div>
      {/* Yellow warning stripes */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2 flex"
        animate={{ x: [0, -48] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-full bg-yellow-500/80 mr-6 flex-shrink-0 skew-x-[-20deg]"
          />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Individual smoke particle animation
 * @param delay - Animation start delay in seconds
 */
function SmokeParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute w-4 h-4 rounded-full bg-white/10 blur-sm"
      initial={{ y: 0, x: 0, opacity: 0.6, scale: 1 }}
      animate={{
        y: -100,
        x: [0, 10, -5, 15, 0],
        opacity: 0,
        scale: 2,
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

/**
 * Factory chimney with animated smoke effect
 * @param position - Left or right side positioning
 */
function FactoryChimney({ position }: { position: "left" | "right" }) {
  return (
    <div
      className={`absolute top-0 hidden md:block ${position === "left" ? "left-[15%]" : "right-[15%]"}`}
    >
      {/* Chimney structure */}
      <div className="w-12 h-32 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg relative">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-600 rounded-t-lg" />
        {/* Smoke particles */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          {Array.from({ length: 5 }).map((_, i) => (
            <SmokeParticle key={i} delay={i * 0.4} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 404 Not Found page with factory theme
 * Features animated cogs, smoke effects, conveyor belt, and floating 404 errors
 */
export function NotFound() {
  const [floatingErrors, setFloatingErrors] = useState<FloatingError[]>([]);
  const { t } = useLanguage();

  // Clean up old floating error animations
  useEffect(() => {
    const cleanup = setInterval(() => {
      setFloatingErrors((prev) => prev.filter((e) => Date.now() - e.id < 5000));
    }, 1000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="gradient-bg" />

      {/* Noise texture overlay */}
      <div className="noise-overlay pointer-events-none" />

      {/* Language switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Background machinery decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile-sized cogs */}
        <AnimatedCog
          size={120}
          speed={20}
          className="absolute -top-12 -left-12 md:hidden"
        />
        <AnimatedCog
          size={80}
          speed={15}
          reverse
          className="absolute top-20 -left-6 md:hidden"
        />
        <AnimatedCog
          size={100}
          speed={18}
          className="absolute -top-8 -right-10 md:hidden"
        />
        <AnimatedCog
          size={60}
          speed={12}
          reverse
          className="absolute top-32 -right-4 md:hidden"
        />

        {/* Desktop-sized cogs */}
        <AnimatedCog
          size={200}
          speed={20}
          className="absolute -top-20 -left-20 hidden md:block"
        />
        <AnimatedCog
          size={150}
          speed={15}
          reverse
          className="absolute top-40 -left-10 hidden md:block"
        />
        <AnimatedCog
          size={180}
          speed={18}
          className="absolute -top-10 -right-16 hidden md:block"
        />
        <AnimatedCog
          size={120}
          speed={12}
          reverse
          className="absolute top-60 -right-8 hidden md:block"
        />
        <AnimatedCog
          size={100}
          speed={10}
          className="absolute bottom-40 left-20 hidden md:block"
        />
        <AnimatedCog
          size={80}
          speed={8}
          reverse
          className="absolute bottom-60 right-32 hidden md:block"
        />

        {/* Factory chimneys */}
        <FactoryChimney position="left" />
        <FactoryChimney position="right" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* System error alert */}
          <motion.div
            className="absolute -top-14 md:-top-20 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-red-500/20 border border-red-500/50 whitespace-nowrap"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
            <span className="text-red-400 font-mono text-xs md:text-sm">
              {t.notFound.systemError}
            </span>
          </motion.div>

          {/* Main 404 card */}
          <div className="glass-card p-6 sm:p-8 md:p-12 text-center relative overflow-hidden mx-2 sm:mx-0">
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)",
                  "0 0 40px rgba(0, 255, 255, 0.4), inset 0 0 40px rgba(0, 255, 255, 0.1)",
                  "0 0 20px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Factory icon */}
            <motion.div
              className="flex justify-center mb-4 md:mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Factory className="w-10 h-10 md:w-16 md:h-16 text-electric" />
            </motion.div>

            {/* 404 with rotating cog as middle digit */}
            <motion.h1
              className="text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-black leading-none text-electric relative"
              style={{ textShadow: "0 0 40px rgba(0, 255, 255, 0.5)" }}
            >
              <span>4</span>
              <motion.span
                className="relative inline-block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Cog className="absolute inset-0 w-full h-full text-electric" />
                <span className="relative z-10 opacity-0">0</span>
              </motion.span>
              <span>4</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-mono text-gray-400 text-sm sm:text-base md:text-lg mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t.notFound.subtitle}
            </motion.p>

            {/* Back home button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/" className="w-full sm:w-auto">
                <button className="btn-primary w-full sm:w-auto justify-center text-sm sm:text-base">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t.notFound.backHome}
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating 404 error animations */}
        <AnimatePresence>
          {floatingErrors.map((error) => (
            <motion.div
              key={error.id}
              className="absolute pointer-events-none font-mono font-bold text-2xl text-red-500/60"
              initial={{
                x: `${error.x}%`,
                y: "50%",
                opacity: 0,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                y: ["50%", "-20%"],
                opacity: [0, 1, 1, 0],
                scale: [0, error.scale, error.scale, error.scale * 0.5],
                rotate: error.rotation,
              }}
              transition={{ duration: 4, ease: "easeOut" }}
              style={{
                left: `${error.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              404
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Conveyor belt at bottom */}
      <ConveyorBelt />

      {/* Footer */}
      <div className="absolute bottom-20 left-0 right-0 text-center px-4">
        <p className="font-mono text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} 404Factory - {t.notFound.footer}
        </p>
      </div>
    </div>
  );
}

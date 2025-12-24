/**
 * @fileoverview Framer Motion animation variants and configuration
 * @module lib/animations
 */

import type { Variants } from "framer-motion";

/** Fade in animation from bottom to top */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Fade in animation from left to right */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Fade in animation from right to left */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Scale up animation with fade */
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Container variant for staggered children animations */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Glitch text effect animation with color shifting */
export const glitchVariants: Variants = {
  idle: {
    x: 0,
    textShadow: "0 0 0 transparent",
  },
  glitch: {
    x: [0, -2, 3, -1, 0],
    textShadow: [
      "0 0 0 transparent",
      "-2px 0 #ff0000, 2px 0 #00ffff",
      "2px 0 #ff0000, -2px 0 #00ffff",
      "-1px 0 #ff0000, 1px 0 #00ffff",
      "0 0 0 transparent",
    ],
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

/** Card hover effect with scale, lift, and glow */
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(0, 255, 255, 0)",
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/** Default viewport configuration for scroll-triggered animations */
export const viewportConfig = {
  once: true,
  amount: 0.3,
};

/** Spring physics configuration for smooth transitions */
export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

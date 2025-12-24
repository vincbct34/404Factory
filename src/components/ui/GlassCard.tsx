/**
 * @fileoverview Glass morphism card component with optional hover effect
 * @module components/ui/GlassCard
 */

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

/** Props for the GlassCard component */
interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /** Content to render inside the card */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to enable the scale hover effect */
  hover?: boolean;
}

/**
 * Glassmorphism-styled card with backdrop blur and optional hover scaling
 * Uses CSS classes defined in index.css for the glass effect
 */
export function GlassCard({
  children,
  className = "",
  hover = true,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={hover ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

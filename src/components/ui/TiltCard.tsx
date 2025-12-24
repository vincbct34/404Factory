/**
 * @fileoverview 3D tilt card component with glow and border effects
 * @module components/ui/TiltCard
 */

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

/** Props for the TiltCard component */
interface TiltCardProps {
  /** Content to render inside the card */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Color of the glow effect on hover */
  glowColor?: string;
}

/**
 * Interactive card component with 3D tilt effect on mouse movement
 * Features include animated glow following cursor, rotating border gradient,
 * and 3D lift effect for content
 */
export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(0, 255, 255, 0.4)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  /** Calculates rotation and glow position based on mouse position */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Limit rotation to 15 degrees max
    const maxRotation = 15;
    const rotateYValue = (mouseX / (rect.width / 2)) * maxRotation;
    const rotateXValue = -(mouseY / (rect.height / 2)) * maxRotation;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Calculate glow position as percentage
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  /** Resets all effects when mouse leaves */
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Animated glow overlay that follows cursor */}
      <div
        className="tilt-card-glow"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor} 0%, transparent 60%)`,
        }}
      />

      {/* Animated rotating border gradient */}
      <div
        className="tilt-card-border"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content with 3D lift effect */}
      <div
        className="tilt-card-content"
        style={{
          transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

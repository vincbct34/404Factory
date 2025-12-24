/**
 * @fileoverview Info card component with icon, title, and optional link
 * @module components/ui/InfoCard
 */

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/** Props for the InfoCard component */
interface InfoCardProps {
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Main title text */
  title: string;
  /** Secondary subtitle text */
  subtitle: string;
  /** Optional link URL - makes the card clickable */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Optional additional content */
  children?: ReactNode;
}

/**
 * Displays contact or info items with an icon, title, and subtitle
 * Automatically handles external links (http, mailto, tel) with proper attributes
 */
export function InfoCard({
  icon: Icon,
  title,
  subtitle,
  href,
  className = "",
  children,
}: InfoCardProps) {
  const content = (
    <div
      className={`flex items-center gap-4 text-gray-300 group ${href ? "hover:text-electric transition-colors cursor-pointer" : ""}`}
    >
      {/* Icon container */}
      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
        <Icon className="w-5 h-5 text-electric" />
      </div>
      {/* Text content */}
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-sm">{subtitle}</div>
        {children}
      </div>
    </div>
  );

  // Wrap in link if href is provided
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    return (
      <a
        href={href}
        className={className}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

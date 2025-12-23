import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href?: string;
  className?: string;
  children?: ReactNode;
}

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
      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
        <Icon className="w-5 h-5 text-electric" />
      </div>
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-sm">{subtitle}</div>
        {children}
      </div>
    </div>
  );

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

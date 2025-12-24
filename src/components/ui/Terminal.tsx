/**
 * @fileoverview Terminal window UI component with macOS-style header
 * @module components/ui/Terminal
 */

import type { ReactNode } from "react";

/** Props for the Terminal component */
interface TerminalProps {
  /** Title displayed in the terminal header */
  title?: string;
  /** Content to render in the terminal body */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Styled terminal window component with macOS-style traffic light buttons
 * Used to display code-like content in a terminal aesthetic
 */
export function Terminal({
  title = "terminal",
  children,
  className = "",
}: TerminalProps) {
  return (
    <div className={`terminal ${className}`}>
      {/* Terminal header with traffic light buttons */}
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-4 text-sm text-gray-500">{title}</span>
      </div>
      {/* Terminal content area */}
      <div className="terminal-body">{children}</div>
    </div>
  );
}

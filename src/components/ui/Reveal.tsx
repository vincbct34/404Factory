/**
 * @fileoverview Scroll reveal — rises 40px and fades in once, via IntersectionObserver
 * Reduced-motion users get the static visible state (handled in CSS)
 * @module components/ui/Reveal
 */

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Reveal({ className = "", children, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}

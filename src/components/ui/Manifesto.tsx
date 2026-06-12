/**
 * @fileoverview Manifesto — large Archivo paragraph whose words light up
 * from faint ink to ink (keywords to Klein) as the user scrolls through.
 * Text keywords are marked with [[double brackets]] in the i18n string.
 * @module components/ui/Manifesto
 */

import { useEffect, useMemo, useRef, useState } from "react";

interface Token {
  word: string;
  k: boolean;
}

function tokenize(text: string): Token[] {
  // Punctuation glued to the closing brackets ("[[missing]].") stays in the
  // keyword token — splitting it off would render a stray " ." word
  return text.split(/(\[\[.*?\]\]\S*)/g).flatMap((segment) => {
    const k = segment.startsWith("[[");
    const clean = k ? segment.slice(2).replace("]]", "") : segment;
    return clean
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, k }));
  });
}

export function Manifesto({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const tokens = useMemo(() => tokenize(text), [text]);
  // Reduced motion: everything lit from the start, no scroll listener
  const [lit, setLit] = useState(() =>
    matchMedia("(prefers-reduced-motion: reduce)").matches
      ? Number.MAX_SAFE_INTEGER
      : 0,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const prog = Math.min(
        1,
        Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)),
      );
      setLit(Math.floor(prog * tokens.length * 1.4));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tokens.length]);

  return (
    <div className="manifesto" ref={ref}>
      <p>
        {tokens.map((token, i) => (
          <span
            key={i}
            className={`w${token.k ? " k" : ""}${i < lit ? " lit" : ""}`}
          >
            {token.word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

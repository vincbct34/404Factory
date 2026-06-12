/**
 * @fileoverview Custom cursor — Klein dot + lagging void ring
 * Disabled for coarse pointers and reduced motion (CSS restores cursor:auto)
 * @module components/ui/Cursor
 */

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      raf = 0;

    let shown = false;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      // Both elements start hidden (CSS) so they never sit at the top-left
      // corner before the first mousemove
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(loop);
    };

    // Event delegation so the cursor keeps working across SPA navigations
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element | null)?.closest?.(
        "a, button, [data-hover]",
      );
      ring.classList.toggle("hover", !!hit);
      ring.textContent = hit ? "→" : "";
      // Hide the dot on hover so it doesn't cover the ring's arrow
      if (shown) dot.style.opacity = hit ? "0" : "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

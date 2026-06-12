/**
 * @fileoverview The void field — a canvas grid of faint drifting zeros.
 * Near the cursor each zero collapses around its vertical axis and turns
 * Klein blue: "not found" made literal. Decorative (aria-hidden), pauses
 * off-screen, static when reduced motion is preferred.
 * @module components/ui/VoidField
 */

import { useEffect, useRef } from "react";

interface Cell {
  x: number;
  y: number;
  r: number;
  tr: number;
}

export function VoidField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // No hover on touch devices — the focal point drifts on its own instead
    const coarse = matchMedia("(pointer: coarse)").matches;
    const dpr = window.devicePixelRatio || 1;
    let W = 0,
      H = 0,
      raf = 0,
      visible = true;
    let cells: Cell[] = [];
    const mouse = { x: -9999, y: -9999 };

    const setupFont = () => {
      ctx.font = `${17 * dpr}px "Space Grotesk"`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    };

    const build = () => {
      const w = cv.offsetWidth * dpr;
      const h = cv.offsetHeight * dpr;
      // Mobile scroll fires resize when the URL bar collapses — don't
      // rebuild (and reset) the grid unless the size really changed
      if (w === W && h === H) return false;
      W = cv.width = w;
      H = cv.height = h;
      cells = [];
      // Larger gap on small screens keeps the cell count (and frame cost) low
      const gap = (cv.offsetWidth < 760 ? 56 : 64) * dpr;
      // Pull the columns in from the side edges so the field doesn't run
      // the full width — centred over the remaining span
      const insetX = gap * 1.5;
      const cols = Math.max(1, Math.floor((W - insetX * 2) / gap) + 1);
      const x0 = (W - (cols - 1) * gap) / 2;
      for (let y = gap; y < H - gap * 0.3; y += gap)
        for (let i = 0; i < cols; i++)
          cells.push({ x: x0 + i * gap, y, r: 0, tr: 0 });
      return true;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      if (coarse) {
        // Slow Lissajous wander, incommensurate periods so the path never loops
        mouse.x = W * (0.5 + 0.38 * Math.sin(t / 3400));
        mouse.y = H * (0.5 + 0.34 * Math.sin(t / 2600 + 1.7));
      }
      // Cap the collapse radius so small canvases keep most zeros intact
      const R = Math.min(240 * dpr, Math.min(W, H) * 0.42);
      setupFont();
      for (const c of cells) {
        const d = Math.hypot(c.x - mouse.x, c.y - mouse.y);
        c.tr =
          d < R
            ? (1 - d / R) * Math.PI
            : Math.sin(t / 4000 + c.x * 0.01 + c.y * 0.013) * 0.12;
        c.r += (c.tr - c.r) * 0.12;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.scale(Math.cos(c.r), 1);
        ctx.fillStyle = d < R ? "#1F2DEB" : "rgba(16,16,16,0.16)";
        ctx.fillText("0", 0, 0);
        ctx.restore();
      }
      if (visible) raf = requestAnimationFrame(draw);
    };

    // Reduced motion: one static frame, no animation loop, no cursor effect
    const drawStatic = () => {
      ctx.clearRect(0, 0, W, H);
      setupFont();
      ctx.fillStyle = "rgba(16,16,16,0.16)";
      for (const c of cells) ctx.fillText("0", c.x, c.y);
    };

    if (reduced) {
      const onResize = () => {
        if (build()) drawStatic();
      };
      build();
      drawStatic();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    const onMove = (e: MouseEvent) => {
      const b = cv.getBoundingClientRect();
      mouse.x = (e.clientX - b.left) * dpr;
      mouse.y = (e.clientY - b.top) * dpr;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onResize = () => {
      build();
    };

    const parent = cv.parentElement;
    if (!coarse) {
      parent?.addEventListener("mousemove", onMove);
      parent?.addEventListener("mouseleave", onLeave);
    }
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(([entry]) => {
      const wasVisible = visible;
      visible = entry.isIntersecting;
      if (visible && !wasVisible) raf = requestAnimationFrame(draw);
    });
    io.observe(cv);

    build();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      parent?.removeEventListener("mousemove", onMove);
      parent?.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}

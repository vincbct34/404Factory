/**
 * @fileoverview Ink marquee band with ring separators, infinite -50% loop
 * Animation disabled under reduced motion (CSS)
 * @module components/ui/Marquee
 */

export function Marquee({ items }: { items: string[] }) {
  // Repeated so the track always overflows the viewport; the two halves stay
  // identical so translateX(-50%) loops seamlessly with no gap/reset
  const sequence = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {sequence.map((text, i) => (
          <span key={i}>
            {text}
            <span className="ring" />
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * @fileoverview The zero device — a drawn Klein ring replacing the "o"/"0" glyph
 * @module components/ui/Ring
 */

/** Hollow Klein-blue ring; the zero is never typed, always drawn */
export function Ring() {
  return <span className="o" aria-hidden="true" />;
}

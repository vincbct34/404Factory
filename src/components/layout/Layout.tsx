/**
 * @fileoverview Page shell — grid lines, marginalia, custom cursor,
 * skip link, header, main content and (optional) footer
 * @module components/layout/Layout
 */

import type { ReactNode } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Cursor } from "@/components/ui";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  footer?: boolean;
}

export function Layout({ children, footer = true }: LayoutProps) {
  const { t } = useLanguage();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-klein focus:text-white focus:font-label focus:text-xs focus:uppercase focus:tracking-widest"
      >
        {t.nav.skipToContent}
      </a>
      <div className="gridlines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <Cursor />
      <div className="margin-note left">{t.chrome.left}</div>
      <div className="margin-note right">{t.chrome.right}</div>
      <Header />
      <main id="main-content">{children}</main>
      {footer && <Footer />}
    </>
  );
}

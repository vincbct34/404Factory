/**
 * @fileoverview Fixed header — mix-blend-mode:difference keeps it legible
 * over paper and ink sections. Mobile: fullscreen ink menu.
 * @module components/layout/Header
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";
import { LanguageSwitcher, Ring } from "@/components/ui";

export function Header() {
  const { t, language } = useLanguage();
  const location = useLocation();
  // The menu is "open" only for the pathname it was opened on, so it
  // closes itself on navigation without an effect
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === location.pathname;
  const setOpen = (next: boolean) =>
    setOpenedAt(next ? location.pathname : null);

  // Keep the menu mounted while it plays its closing animation; skip
  // the animation entirely (and the wait) under reduced motion
  const [visible, setVisible] = useState(open);
  if (open && !visible) setVisible(true);
  else if (
    !open &&
    visible &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    setVisible(false);

  const links = [
    { label: t.nav.work, to: "/work" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.studio, to: "/studio" },
    { label: t.nav.contact, to: "/contact" },
  ];

  // Lock body scroll while the menu is open; Escape closes it
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedAt(null);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (to: string) => {
    const localized = localePath(language, to);
    return (
      location.pathname === localized ||
      location.pathname.startsWith(`${localized}/`)
    );
  };

  return (
    <>
      {/* Unblended twin of the logo: invisible text keeps the ring aligned,
          and the ring renders in true Klein above the difference-blended header */}
      <div className="logo-ring" aria-hidden="true">
        4<Ring />
        4factory
      </div>
      <header className="site-header">
        <Link
          className="logo"
          to={localePath(language, "/")}
          aria-label={t.nav.homeAria}
        >
          4<Ring />
          4factory
        </Link>
        <nav aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.to}
              to={localePath(language, link.to)}
              aria-current={isCurrent(link.to) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher className="text-white" />
        </nav>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </header>

      {visible && (
        <div
          className={`mobile-menu${open ? "" : " is-closing"}`}
          id="mobile-menu"
          onAnimationEnd={() => {
            if (!open) setVisible(false);
          }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={localePath(language, link.to)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="meta">
            <LanguageSwitcher className="text-paper" />
            <span>
              404_
              <span className="blink" />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

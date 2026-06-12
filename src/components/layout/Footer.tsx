/**
 * @fileoverview Footer — solid ink block, giant ring CTA, micro-row
 * @module components/layout/Footer
 */

import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { localePath } from "@/lib/paths";
import { Ring } from "@/components/ui";

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Link className="cta" to={localePath(language, "/contact")} data-hover>
        {t.footer.ctaPre}
        <Ring />
        {t.footer.ctaPost} →
      </Link>
      <div className="row">
        <span>{t.footer.copyright.replace("{year}", String(year))}</span>
        <a href="mailto:factory404@outlook.fr" data-hover>
          factory404@outlook.fr
        </a>
        <Link to={localePath(language, "/legal")}>{t.footer.legal}</Link>
        <span aria-hidden="true">
          404_
          <span className="blink" />
        </span>
      </div>
    </footer>
  );
}

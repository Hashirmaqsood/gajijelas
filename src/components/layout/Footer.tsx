"use client";

import Link from "next/link";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { SITE, TOOL_LINKS } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/context";

export default function Footer() {
  const rates = getRates(CURRENT_RATE_YEAR);
  const { t } = useLanguage();

  const toolLabels: Record<string, string> = {
    "/": t("tools.fullCalcTitle"),
    "/epf-calculator": t("tools.epfTitle"),
    "/epf-retirement-calculator": t("tools.epfRetirementTitle"),
    "/epf-account-split-calculator": t("tools.epfSplitTitle"),
    "/mortgage-calculator": t("tools.mortgageTitle"),
    "/zakat-calculator": t("tools.zakatTitle"),
    "/socso-calculator": t("tools.socsoTitle"),
    "/pcb-calculator": t("tools.pcbTitle"),
    "/hourly-rate-calculator": t("tools.hourlyTitle"),
    "/overtime-calculator": t("tools.overtimeTitle"),
    "/annual-leave-calculator": t("tools.leaveTitle"),
  };

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark text-xs font-bold text-white">RM</span>
              {SITE.name}
            </div>
            <p className="mt-3 text-sm text-muted">{t("footer.tagline")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.toolsHeading")}</h3>
            <ul className="mt-3 space-y-2">
              {TOOL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-brand">
                    {toolLabels[link.href] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.learnHeading")}</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-sm text-muted hover:text-brand">{t("footer.about")}</Link></li>
              <li><Link href="/glossary" className="text-sm text-muted hover:text-brand">{t("footer.glossary")}</Link></li>
              <li><Link href="/faq" className="text-sm text-muted hover:text-brand">{t("footer.faq")}</Link></li>
              <li><Link href="/guides" className="text-sm text-muted hover:text-brand">{t("footer.guides")}</Link></li>
              <li><Link href="/rate-changes" className="text-sm text-muted hover:text-brand">{t("footer.rateChanges")}</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted hover:text-brand">{t("footer.privacyPolicy")}</Link></li>
              <li><a href={`mailto:${SITE.contactEmail}`} className="text-sm text-muted hover:text-brand">{t("footer.contactLinkText")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.sourcesHeading")}</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="https://www.kwsp.gov.my" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-brand">KWSP (EPF)</a></li>
              <li><a href="https://www.perkeso.gov.my" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-brand">PERKESO (SOCSO/EIS)</a></li>
              <li><a href="https://www.hasil.gov.my" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-brand">LHDN (Income Tax)</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          <p>{t("footer.disclaimer", { lastUpdated: rates.lastUpdated, effectiveFrom: rates.effectiveFrom })}</p>
          <p className="mt-3">{t("footer.copyright", { year: new Date().getFullYear(), siteName: SITE.name })}</p>
        </div>
      </div>
    </footer>
  );
}

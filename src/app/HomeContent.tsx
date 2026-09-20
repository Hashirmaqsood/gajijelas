"use client";

import Link from "next/link";
import SalaryCalculatorApp from "@/components/calculator/SalaryCalculatorApp";
import { Card } from "@/components/ui/Field";
import { TOOL_LINKS } from "@/lib/site";
import type { StatutoryRates } from "@/lib/rates/types";
import { useLanguage } from "@/lib/i18n/context";

function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5 13.5 3.5v4c0 3.5-2.3 5.9-5.5 7-3.2-1.1-5.5-3.5-5.5-7v-4L8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5.7 8 7.3 9.6 10.4 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.3 7V5a2.7 2.7 0 0 1 5.4 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 5v3.3l2.2 1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeContent({ rates }: { rates: StatutoryRates }) {
  const { t } = useLanguage();

  const toolMeta: Record<string, { title: string; desc: string }> = {
    "/": { title: t("tools.fullCalcTitle"), desc: t("tools.fullCalcDesc") },
    "/epf-calculator": { title: t("tools.epfTitle"), desc: t("tools.epfDesc") },
    "/epf-retirement-calculator": { title: t("tools.epfRetirementTitle"), desc: t("tools.epfRetirementDesc") },
    "/epf-account-split-calculator": { title: t("tools.epfSplitTitle"), desc: t("tools.epfSplitDesc") },
    "/mortgage-calculator": { title: t("tools.mortgageTitle"), desc: t("tools.mortgageDesc") },
    "/zakat-calculator": { title: t("tools.zakatTitle"), desc: t("tools.zakatDesc") },
    "/bonus-calculator": { title: t("tools.bonusTitle"), desc: t("tools.bonusDesc") },
    "/socso-calculator": { title: t("tools.socsoTitle"), desc: t("tools.socsoDesc") },
    "/pcb-calculator": { title: t("tools.pcbTitle"), desc: t("tools.pcbDesc") },
    "/hourly-rate-calculator": { title: t("tools.hourlyTitle"), desc: t("tools.hourlyDesc") },
    "/overtime-calculator": { title: t("tools.overtimeTitle"), desc: t("tools.overtimeDesc") },
    "/annual-leave-calculator": { title: t("tools.leaveTitle"), desc: t("tools.leaveDesc") },
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-light via-brand-light/40 to-transparent" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-16 top-20 -z-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-surface/80 px-3 py-1 text-xs font-semibold text-brand-dark shadow-sm">
            🇲🇾 {t("home.ratesBadge", { year: rates.year })}
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">{t("home.heroSubtitle")}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted">
            <span className="flex items-center gap-1.5 text-brand-dark"><ShieldIcon /> {t("home.trustNoSignup")}</span>
            <span className="flex items-center gap-1.5 text-brand-dark"><LockIcon /> {t("home.trustNoServer")}</span>
            <span className="flex items-center gap-1.5 text-brand-dark"><ClockIcon /> {t("home.trustRatesChecked", { date: rates.lastUpdated })}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <SalaryCalculatorApp />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-xl font-semibold text-foreground">{t("tools.heading")}</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_LINKS.filter((link) => link.href !== "/").map((link) => (
            <Link key={link.href} href={link.href} className="block">
              <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-lifted)]">
                <h3 className="font-semibold text-foreground">{toolMeta[link.href]?.title ?? link.label}</h3>
                <p className="mt-1 text-sm text-muted">{toolMeta[link.href]?.desc ?? link.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Card className="bg-gradient-to-br from-surface to-brand-light/30">
          <h2 className="text-lg font-semibold text-foreground">{t("home.sourcedTitle")}</h2>
          <p className="mt-2 text-sm text-muted">
            {t("home.sourcedBody", { lastUpdated: rates.lastUpdated, effectiveFrom: rates.effectiveFrom })}{" "}
            <Link href="/rate-changes" className="text-brand underline">
              {t("home.rateChangesLink")}
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-muted">{t("home.sourcedDisclaimer")}</p>
        </Card>
      </section>
    </>
  );
}

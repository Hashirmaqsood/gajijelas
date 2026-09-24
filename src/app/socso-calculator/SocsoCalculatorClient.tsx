"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import PageFaq from "@/components/content/PageFaq";
import { Card, NumberField, PillGroup, ToggleField } from "@/components/ui/Field";
import { calculateSocso } from "@/lib/calc/socso";
import { calculateEis } from "@/lib/calc/eis";
import { calculateLindung24Jam } from "@/lib/calc/lindung24Jam";
import type { AgeGroup, Nationality } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

const LOOKUP_WAGES = [2000, 3000, 5000, 6000, 8000, 10000];

export default function SocsoCalculatorClient() {
  const [wage, setWage] = useState(3000);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [nationality, setNationality] = useState<Nationality>("malaysian");
  const [lindungOptIn, setLindungOptIn] = useState(false);
  const { t } = useLanguage();

  const rates = getRates(CURRENT_RATE_YEAR);
  const socso = useMemo(() => calculateSocso(rates.socso, wage, ageGroup, nationality), [rates, wage, ageGroup, nationality]);
  const eis = useMemo(() => calculateEis(rates.eis, wage, ageGroup, nationality), [rates, wage, ageGroup, nationality]);
  const lindung = useMemo(
    () => calculateLindung24Jam(rates.lindung24Jam, wage, nationality, lindungOptIn),
    [rates, wage, nationality, lindungOptIn]
  );
  const insuredWage = Math.min(wage, rates.socso.wageCeiling);
  const lookupRows = useMemo(
    () =>
      LOOKUP_WAGES.map((w) => {
        const s = calculateSocso(rates.socso, w, "below60", "malaysian");
        const e = calculateEis(rates.eis, w, "below60", "malaysian");
        return { wage: w, employee: s.employee + e.employee, employer: s.employer + e.employer };
      }),
    [rates]
  );

  return (
    <ToolPageShell title={t("socsoPage.title")} intro={t("socsoPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("socsoPage.monthlyWage")} prefix={t("common.rm")} value={wage} onChange={setWage} step={100} hint={t("socsoPage.monthlyWageHint")} />
            <PillGroup
              label={t("form.ageGroup")}
              value={ageGroup}
              onChange={setAgeGroup}
              options={[
                { value: "below60", label: t("form.below60") },
                { value: "60plus", label: t("form.above60") },
              ]}
            />
            <PillGroup
              label={t("form.nationality")}
              value={nationality}
              onChange={setNationality}
              options={[
                { value: "malaysian", label: t("form.malaysianPr") },
                { value: "nonMalaysian", label: t("form.nonMalaysian") },
              ]}
            />
          </div>
          {wage > rates.socso.wageCeiling && (
            <p className="mt-4 rounded-lg bg-accent-light px-3 py-2 text-xs text-foreground">
              {t("socsoPage.ceilingNote", { ceiling: rates.socso.wageCeiling.toLocaleString(), insured: insuredWage.toLocaleString() })}
            </p>
          )}
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="text-lg font-semibold text-foreground">{t("socsoPage.socsoTitle")}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-light px-4 py-3.5">
                <div className="text-xs font-medium uppercase text-brand-dark/80">{t("epfPage.employee")}</div>
                <div className="mt-1 text-xl font-bold tabular-nums text-brand-dark">{formatRM(socso.employee)}</div>
              </div>
              <div className="rounded-xl bg-accent-light px-4 py-3.5">
                <div className="text-xs font-medium uppercase text-foreground/70">{t("epfPage.employer")}</div>
                <div className="mt-1 text-xl font-bold tabular-nums text-foreground">{formatRM(socso.employer)}</div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-foreground">{t("socsoPage.eisTitle")}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-light px-4 py-3.5">
                <div className="text-xs font-medium uppercase text-brand-dark/80">{t("epfPage.employee")}</div>
                <div className="mt-1 text-xl font-bold tabular-nums text-brand-dark">{formatRM(eis.employee)}</div>
              </div>
              <div className="rounded-xl bg-accent-light px-4 py-3.5">
                <div className="text-xs font-medium uppercase text-foreground/70">{t("epfPage.employer")}</div>
                <div className="mt-1 text-xl font-bold tabular-nums text-foreground">{formatRM(eis.employer)}</div>
              </div>
            </div>
            {(ageGroup === "60plus" || nationality === "nonMalaysian") && (
              <p className="mt-3 text-xs text-muted">{t("socsoPage.eisNotApplicable")}</p>
            )}
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-foreground">{t("socsoPage.lindungTitle")}</h2>
            {nationality === "malaysian" ? (
              <div className="mt-3">
                <ToggleField label={t("socsoPage.lindungOptInLabel")} checked={lindungOptIn} onChange={setLindungOptIn} />
                <p className="mt-1 text-xs text-muted">{t("socsoPage.lindungVoluntaryNote")}</p>
              </div>
            ) : (
              <p className="mt-3 text-xs text-muted">{t("socsoPage.lindungMandatoryNote")}</p>
            )}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-light px-4 py-3.5">
                <div className="text-xs font-medium uppercase text-brand-dark/80">{t("epfPage.employee")}</div>
                <div className="mt-1 text-xl font-bold tabular-nums text-brand-dark">{formatRM(lindung.employee)}</div>
              </div>
              <div className="rounded-xl bg-accent-light px-4 py-3.5">
                <div className="text-xs font-medium uppercase text-foreground/70">{t("epfPage.employer")}</div>
                <div className="mt-1 text-xl font-bold tabular-nums text-foreground">{formatRM(lindung.employer)}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("socsoPage.howItWorksTitle")}</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>{t("socsoPage.category1", { employeePct: rates.socso.category1.employeePct, employerPct: rates.socso.category1.employerPct })}</li>
          <li>{t("socsoPage.category2", { employerPct: rates.socso.category2.employerPct })}</li>
          <li>{t("socsoPage.categoryForeign", { employerPct: rates.socso.foreignWorker.employerPct })}</li>
          <li>{t("socsoPage.lindungSummary", { employeePct: rates.lindung24Jam.employeePct })}</li>
        </ul>
        <p className="mt-4 text-xs text-muted">
          Source: <a href="https://www.perkeso.gov.my/en/rate-of-contribution.html" target="_blank" rel="noopener noreferrer" className="underline">PERKESO Rate of Contribution</a>,{" "}
          <a href="https://www.perkeso.gov.my/skim-kemalangan-bukan-bencana-kerja-lindung-24-jam" target="_blank" rel="noopener noreferrer" className="underline">LINDUNG 24 Jam</a>.{" "}
          {t("socsoPage.footnote")} <Link href="/" className="text-brand underline">{t("socsoPage.footnoteLinkText")}</Link>.
        </p>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("socsoPage.lookupTitle")}</h2>
        <p className="mt-1 text-xs text-muted">{t("socsoPage.lookupHint")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="py-2 pr-4 font-medium">{t("socsoPage.lookupWageCol")}</th>
                <th className="py-2 pr-4 font-medium">{t("epfPage.employee")}</th>
                <th className="py-2 font-medium">{t("epfPage.employer")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {lookupRows.map((row) => (
                <tr key={row.wage}>
                  <td className="py-2 pr-4 tabular-nums">{formatRM(row.wage)}</td>
                  <td className="py-2 pr-4 tabular-nums font-medium">{formatRM(row.employee)}</td>
                  <td className="py-2 tabular-nums font-medium">{formatRM(row.employer)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("socsoPage.exampleTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("socsoPage.exampleBody")}</p>
      </Card>

      <PageFaq
        title={t("socsoPage.faqTitle")}
        items={[
          { q: t("socsoPage.faqQ1"), a: t("socsoPage.faqA1") },
          { q: t("socsoPage.faqQ2"), a: t("socsoPage.faqA2") },
        ]}
      />

      <RelatedGuides
        links={[
          { href: "/guides/lindung-24-jam-socso-new-scheme-2026", label: "LINDUNG 24 Jam Explained" },
          { href: "/guides/epf-socso-eis-foreign-workers-2025-changes", label: "EPF, SOCSO & EIS for Foreign Workers" },
          { href: "/guides/budget-2027-malaysia-salary-epf-socso", label: "Budget 2027: What It Could Mean for Your Salary" },
        ]}
      />
    </ToolPageShell>
  );
}

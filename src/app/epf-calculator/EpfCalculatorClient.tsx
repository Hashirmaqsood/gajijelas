"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import { Card, NumberField, PillGroup } from "@/components/ui/Field";
import { calculateEpf } from "@/lib/calc/epf";
import type { AgeGroup, Nationality } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, PREVIOUS_RATE_YEAR, getRates, type RateYear } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

const LOOKUP_WAGES = [2000, 3000, 5000, 6000, 8000, 10000, 15000, 20000];

export default function EpfCalculatorClient() {
  const [wage, setWage] = useState(5000);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [nationality, setNationality] = useState<Nationality>("malaysian");
  const [rateYear, setRateYear] = useState<RateYear>(CURRENT_RATE_YEAR);
  const { t } = useLanguage();

  const rates = useMemo(() => getRates(rateYear), [rateYear]);
  const result = useMemo(() => calculateEpf(rates.epf, wage, ageGroup, nationality), [rates, wage, ageGroup, nationality]);
  const lookupRows = useMemo(
    () => LOOKUP_WAGES.map((w) => ({ wage: w, ...calculateEpf(rates.epf, w, "below60", "malaysian") })),
    [rates]
  );

  return (
    <ToolPageShell title={t("epfPage.title")} intro={t("epfPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("epfPage.monthlyWage")} prefix={t("common.rm")} value={wage} onChange={setWage} step={100} />
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
            <PillGroup
              label={t("epfPage.rates")}
              value={String(rateYear) as `${RateYear}`}
              onChange={(v) => setRateYear(Number(v) as RateYear)}
              options={[
                { value: String(CURRENT_RATE_YEAR) as `${RateYear}`, label: t("form.currentRates", { year: CURRENT_RATE_YEAR }) },
                { value: String(PREVIOUS_RATE_YEAR) as `${RateYear}`, label: String(PREVIOUS_RATE_YEAR) },
              ]}
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("epfPage.monthlyContribution")}</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-brand-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-brand-dark/80">{t("epfPage.employee")}</div>
              <div className="mt-1 text-2xl font-bold tabular-nums text-brand-dark">{formatRM(result.employee)}</div>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("epfPage.employer")}</div>
              <div className="mt-1 text-2xl font-bold tabular-nums text-foreground">{formatRM(result.employer)}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            {t("epfPage.totalGoingIn")} <strong className="text-foreground">{formatRM(result.employee + result.employer)}</strong>
          </p>
          <p className="mt-4 text-xs text-muted">
            {t("epfPage.footnote")} <Link href="/" className="text-brand underline">{t("epfPage.footnoteLinkText")}</Link>.
          </p>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("epfPage.currentRatesTitle", { year: rates.year })}</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="py-2 pr-4 font-medium">{t("epfPage.category")}</th>
                <th className="py-2 pr-4 font-medium">{t("epfPage.employee")}</th>
                <th className="py-2 font-medium">{t("epfPage.employer")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">{t("epfPage.catBelow60Lte")}</td>
                <td className="py-2 pr-4 tabular-nums">{rates.epf.malaysianBelow60.lte5000.employeePct}%</td>
                <td className="py-2 tabular-nums">{rates.epf.malaysianBelow60.lte5000.employerPct}%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">{t("epfPage.catBelow60Gt")}</td>
                <td className="py-2 pr-4 tabular-nums">{rates.epf.malaysianBelow60.gt5000.employeePct}%</td>
                <td className="py-2 tabular-nums">{rates.epf.malaysianBelow60.gt5000.employerPct}%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">{t("epfPage.catAbove60")}</td>
                <td className="py-2 pr-4 tabular-nums">{rates.epf.malaysianAbove60.employeePct}%</td>
                <td className="py-2 tabular-nums">{rates.epf.malaysianAbove60.employerPct}%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">{t("epfPage.catNonMalaysian")}</td>
                <td className="py-2 pr-4 tabular-nums">{rates.epf.nonMalaysian.employeePct}%</td>
                <td className="py-2 tabular-nums">{rates.epf.nonMalaysian.employerPct}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          Source: <a href="https://www.kwsp.gov.my/en/epf-act-1991-third-schedule" target="_blank" rel="noopener noreferrer" className="underline">KWSP EPF Act 1991 Third Schedule</a>.{" "}
          {t("epfPage.sourceNote")}
        </p>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("epfPage.lookupTitle")}</h2>
        <p className="mt-1 text-xs text-muted">{t("epfPage.lookupHint")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="py-2 pr-4 font-medium">{t("epfPage.lookupWageCol")}</th>
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

      <RelatedGuides
        links={[
          { href: "/guides/epf-withdrawal-rules-malaysia", label: "EPF Withdrawal Rules" },
          { href: "/guides/epf-employer-contribution-guide-malaysia", label: "EPF Employer Contribution Guide" },
        ]}
      />
    </ToolPageShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import PageFaq from "@/components/content/PageFaq";
import { Card, NumberField, SelectField } from "@/components/ui/Field";
import { calculateProratedSalary, daysInGivenMonth } from "@/lib/calc/prorated";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";
import { monthOptions } from "@/lib/i18n/months";

export default function ProratedSalaryClient() {
  const { t, lang } = useLanguage();
  const now = new Date();

  const [monthlySalary, setMonthlySalary] = useState(5000);
  const [month, setMonth] = useState(String(now.getMonth() + 1).padStart(2, "0"));
  const [year, setYear] = useState(now.getFullYear());
  const [daysWorked, setDaysWorked] = useState(15);

  const months = useMemo(() => monthOptions(lang), [lang]);
  const daysInMonth = useMemo(() => daysInGivenMonth(year, Number(month)), [year, month]);
  const monthLabel = months.find((m) => m.value === month)?.label ?? month;

  const result = useMemo(
    () => calculateProratedSalary({ monthlySalary, daysInMonth, daysWorked }),
    [monthlySalary, daysInMonth, daysWorked]
  );

  return (
    <ToolPageShell title={t("proratedPage.title")} intro={t("proratedPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("form.grossSalary")} prefix={t("common.rm")} value={monthlySalary} onChange={setMonthlySalary} step={100} />
            <div className="grid grid-cols-2 gap-3">
              <SelectField label={t("proratedPage.monthLabel")} value={month} onChange={setMonth} options={months} />
              <NumberField label={t("proratedPage.yearLabel")} value={year} onChange={(v) => setYear(Math.round(v))} step={1} min={2020} />
            </div>
            <NumberField
              label={t("proratedPage.daysWorked")}
              value={daysWorked}
              onChange={(v) => setDaysWorked(Math.max(0, Math.round(v)))}
              step={1}
              min={0}
              hint={t("proratedPage.daysWorkedHint")}
            />
            <p className="text-xs text-muted">{t("proratedPage.daysInMonth", { month: monthLabel, year })}: {daysInMonth}</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("proratedPage.resultsTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("proratedPage.statutoryLabel")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.statutoryAmount)}</div>
            <p className="mt-1 text-xs text-brand-dark/80">{t("proratedPage.statutoryHint")}</p>
          </div>

          <h3 className="mt-5 text-sm font-semibold text-foreground">{t("proratedPage.comparisonTitle")}</h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">{t("proratedPage.flat26Label")}</dt>
              <dd className="tabular-nums font-medium">{formatRM(result.flat26Amount)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">{t("proratedPage.flat30Label")}</dt>
              <dd className="tabular-nums font-medium">{formatRM(result.flat30Amount)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-muted">{t("proratedPage.comparisonNote")}</p>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("proratedPage.aboutTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("proratedPage.aboutBody")}</p>
      </Card>

      <PageFaq
        title={t("proratedPage.faqTitle")}
        items={[
          { q: t("proratedPage.faqQ1"), a: t("proratedPage.faqA1") },
          { q: t("proratedPage.faqQ2"), a: t("proratedPage.faqA2") },
        ]}
      />

      <RelatedGuides
        links={[
          { href: "/guides/salary-calculation-30-or-31-days-malaysia", label: "Is Salary Calculated on 30 or 31 Days?" },
          { href: "/guides/first-paycheck-malaysia-what-to-expect", label: "What Your First Paycheck Actually Looks Like" },
        ]}
      />
    </ToolPageShell>
  );
}

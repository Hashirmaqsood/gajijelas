"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import { Card, NumberField, PillGroup } from "@/components/ui/Field";
import { calculateSalaryIncrement, type IncrementMode } from "@/lib/calc/salaryIncrement";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function SalaryIncrementClient() {
  const { t } = useLanguage();

  const [currentSalary, setCurrentSalary] = useState(5000);
  const [mode, setMode] = useState<IncrementMode>("percent");
  const [incrementPercent, setIncrementPercent] = useState(5);
  const [incrementAmount, setIncrementAmount] = useState(250);
  const [projectionYears, setProjectionYears] = useState(5);

  const result = useMemo(
    () => calculateSalaryIncrement({ currentSalary, mode, incrementPercent, incrementAmount, projectionYears }),
    [currentSalary, mode, incrementPercent, incrementAmount, projectionYears]
  );

  return (
    <ToolPageShell title={t("incrementPage.title")} intro={t("incrementPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("incrementPage.currentSalary")} prefix={t("common.rm")} value={currentSalary} onChange={setCurrentSalary} step={100} />
            <PillGroup
              label={t("incrementPage.incrementMode")}
              value={mode}
              onChange={setMode}
              options={[
                { value: "percent", label: t("incrementPage.modePercent") },
                { value: "amount", label: t("incrementPage.modeAmount") },
              ]}
            />
            {mode === "percent" ? (
              <NumberField label={t("incrementPage.incrementPercent")} value={incrementPercent} onChange={setIncrementPercent} step={0.5} min={0} />
            ) : (
              <NumberField label={t("incrementPage.incrementAmount")} prefix={t("common.rm")} value={incrementAmount} onChange={setIncrementAmount} step={50} min={0} />
            )}
            <NumberField label={t("incrementPage.projectionYears")} value={projectionYears} onChange={(v) => setProjectionYears(Math.max(0, Math.round(v)))} step={1} min={0} />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("incrementPage.resultsTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("incrementPage.newSalary")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.newSalary)}</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("incrementPage.increaseAmount")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(result.increaseAmount)}</div>
              <p className="mt-0.5 text-xs text-muted">{t("incrementPage.increasePercent")} {result.increasePercent}%</p>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("incrementPage.annualIncreaseAmount")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(result.annualIncreaseAmount)}</div>
            </div>
          </div>
        </Card>
      </div>

      {result.projection.length > 0 && (
        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">{t("incrementPage.projectionTitle")}</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="py-2 pr-4 font-medium">{t("incrementPage.projectionYearCol")}</th>
                  <th className="py-2 font-medium">{t("incrementPage.projectionSalaryCol")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {result.projection.map((row) => (
                  <tr key={row.year}>
                    <td className="py-2 pr-4 tabular-nums">{row.year}</td>
                    <td className="py-2 tabular-nums font-medium">{formatRM(row.salary)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("incrementPage.aboutTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("incrementPage.aboutBody")}</p>
      </Card>

      <RelatedGuides
        links={[
          { href: "/guides/is-your-salary-good-in-malaysia", label: "Is Your Salary Good in Malaysia?" },
          { href: "/guides/first-paycheck-malaysia-what-to-expect", label: "What Your First Paycheck Actually Looks Like" },
        ]}
      />
    </ToolPageShell>
  );
}

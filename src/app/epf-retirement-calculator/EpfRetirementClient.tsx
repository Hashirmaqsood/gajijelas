"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import { Card, NumberField } from "@/components/ui/Field";
import { calculateEpfRetirement } from "@/lib/calc/epfRetirement";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function EpfRetirementClient() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentBalance, setCurrentBalance] = useState(20000);
  const [currentMonthlySalary, setCurrentMonthlySalary] = useState(5000);
  const [annualSalaryIncrementPct, setAnnualSalaryIncrementPct] = useState(5);
  const [annualDividendRatePct, setAnnualDividendRatePct] = useState(6.15);
  const { t } = useLanguage();

  const rates = useMemo(() => getRates(CURRENT_RATE_YEAR).epf, []);
  const result = useMemo(
    () =>
      calculateEpfRetirement(
        { currentAge, retirementAge, currentBalance, currentMonthlySalary, annualSalaryIncrementPct, annualDividendRatePct },
        rates
      ),
    [currentAge, retirementAge, currentBalance, currentMonthlySalary, annualSalaryIncrementPct, annualDividendRatePct, rates]
  );

  return (
    <ToolPageShell title={t("epfRetirementPage.title")} intro={t("epfRetirementPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <NumberField label={t("epfRetirementPage.currentAge")} value={currentAge} onChange={setCurrentAge} step={1} min={16} />
              <NumberField label={t("epfRetirementPage.retirementAge")} value={retirementAge} onChange={setRetirementAge} step={1} min={currentAge + 1} />
            </div>
            <NumberField
              label={t("epfRetirementPage.currentBalance")}
              prefix={t("common.rm")}
              value={currentBalance}
              onChange={setCurrentBalance}
              step={1000}
            />
            <NumberField
              label={t("epfRetirementPage.currentSalary")}
              prefix={t("common.rm")}
              value={currentMonthlySalary}
              onChange={setCurrentMonthlySalary}
              step={100}
            />
            <NumberField
              label={t("epfRetirementPage.salaryIncrement")}
              value={annualSalaryIncrementPct}
              onChange={setAnnualSalaryIncrementPct}
              step={0.5}
              hint={t("epfRetirementPage.percentSign")}
            />
            <NumberField
              label={t("epfRetirementPage.dividendRate")}
              value={annualDividendRatePct}
              onChange={setAnnualDividendRatePct}
              step={0.1}
              hint={t("epfRetirementPage.dividendHint")}
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("epfRetirementPage.projectionTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">
              {t("epfRetirementPage.balanceAt", { age: retirementAge })}
            </div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.projectedBalance)}</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("epfRetirementPage.totalContributions")}</div>
              <div className="mt-1 text-xl font-bold tabular-nums text-foreground">{formatRM(result.totalContributions)}</div>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("epfRetirementPage.totalDividends")}</div>
              <div className="mt-1 text-xl font-bold tabular-nums text-foreground">{formatRM(result.totalDividends)}</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">{t("epfRetirementPage.disclaimer")}</p>
        </Card>
      </div>

      {result.yearlyBreakdown.length > 0 && (
        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">{t("epfRetirementPage.yearByYearTitle")}</h2>
          <div className="mt-3 max-h-80 overflow-y-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-surface">
                <tr className="border-b border-border text-left text-muted">
                  <th className="py-2 pr-4 font-medium">{t("epfRetirementPage.age")}</th>
                  <th className="py-2 pr-4 font-medium">{t("epfRetirementPage.contributionsCol")}</th>
                  <th className="py-2 pr-4 font-medium">{t("epfRetirementPage.dividendsCol")}</th>
                  <th className="py-2 font-medium">{t("epfRetirementPage.balanceCol")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {result.yearlyBreakdown.map((row) => (
                  <tr key={row.age}>
                    <td className="py-2 pr-4 tabular-nums">{Math.round(row.age)}</td>
                    <td className="py-2 pr-4 tabular-nums">{formatRM(row.contributions)}</td>
                    <td className="py-2 pr-4 tabular-nums">{formatRM(row.dividends)}</td>
                    <td className="py-2 tabular-nums font-medium text-foreground">{formatRM(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            {t("epfRetirementPage.sourceNote")}{" "}
            <a href="https://www.kwsp.gov.my/en/member/growing-your-savings/dividend" target="_blank" rel="noopener noreferrer" className="underline">
              {t("epfRetirementPage.sourceLinkText")}
            </a>
            .
          </p>
        </Card>
      )}
    </ToolPageShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import { Card, NumberField } from "@/components/ui/Field";
import { calculateMortgage } from "@/lib/calc/mortgage";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

function dsrBand(dsrPct: number): "low" | "moderate" | "high" {
  if (dsrPct <= 30) return "low";
  if (dsrPct <= 40) return "moderate";
  return "high";
}

export default function MortgageClient() {
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [annualInterestRatePct, setAnnualInterestRatePct] = useState(4);
  const [tenureYears, setTenureYears] = useState(30);
  const [monthlyTakeHomePay, setMonthlyTakeHomePay] = useState(5000);
  const { t } = useLanguage();

  const result = useMemo(
    () => calculateMortgage({ propertyPrice, downPaymentPct, annualInterestRatePct, tenureYears, monthlyTakeHomePay }),
    [propertyPrice, downPaymentPct, annualInterestRatePct, tenureYears, monthlyTakeHomePay]
  );

  const band = dsrBand(result.dsrPct);
  const bandLabel = { low: t("mortgagePage.dsrLow"), moderate: t("mortgagePage.dsrModerate"), high: t("mortgagePage.dsrHigh") }[band];
  const bandColor = { low: "text-brand-dark", moderate: "text-foreground", high: "text-red-600" }[band];

  return (
    <ToolPageShell title={t("mortgagePage.title")} intro={t("mortgagePage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("mortgagePage.propertyPrice")} prefix={t("common.rm")} value={propertyPrice} onChange={setPropertyPrice} step={10000} />
            <NumberField label={t("mortgagePage.downPayment")} value={downPaymentPct} onChange={setDownPaymentPct} step={1} hint="%" />
            <NumberField label={t("mortgagePage.interestRate")} value={annualInterestRatePct} onChange={setAnnualInterestRatePct} step={0.1} hint="% p.a." />
            <NumberField label={t("mortgagePage.tenure")} value={tenureYears} onChange={setTenureYears} step={1} hint={t("mortgagePage.years")} />
            <NumberField
              label={t("mortgagePage.takeHomePay")}
              prefix={t("common.rm")}
              value={monthlyTakeHomePay}
              onChange={setMonthlyTakeHomePay}
              step={100}
              hint={t("mortgagePage.takeHomeHint")}
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("mortgagePage.resultsTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("mortgagePage.monthlyInstallment")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.monthlyInstallment)}</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("mortgagePage.loanAmount")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(result.loanAmount)}</div>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("mortgagePage.totalInterest")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(result.totalInterest)}</div>
            </div>
          </div>
          {monthlyTakeHomePay > 0 && (
            <div className="mt-4 rounded-xl border border-border px-4 py-3.5">
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-foreground">{t("mortgagePage.dsrTitle")}</div>
                <div className={`text-lg font-bold tabular-nums ${bandColor}`}>{result.dsrPct}%</div>
              </div>
              <p className={`mt-1 text-xs font-medium ${bandColor}`}>{bandLabel}</p>
              <p className="mt-2 text-xs text-muted">{t("mortgagePage.dsrNote")}</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="mt-6">
        <p className="text-xs text-muted">{t("mortgagePage.disclaimer")}</p>
      </Card>
    </ToolPageShell>
  );
}

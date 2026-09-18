"use client";

import type { ReactNode } from "react";
import { Card } from "@/components/ui/Field";
import BreakdownChart from "./BreakdownChart";
import PdfReportButton from "./PdfReportButton";
import type { SalaryCalculationResult } from "@/lib/calc/types";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

function StatTile({ label, value, sub, icon }: { label: string; value: string; sub?: string; icon?: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-light to-brand-light/40 px-4 py-3.5">
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark/80">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold tabular-nums text-brand-dark sm:text-[1.75rem]">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-brand-dark/70">{sub}</div>}
    </div>
  );
}

function DeductionRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-foreground">{label}</span>
      <span className="tabular-nums font-medium text-foreground">{formatRM(value)}</span>
    </div>
  );
}

export default function ResultsPanel({ result }: { result: SalaryCalculationResult }) {
  const { t } = useLanguage();
  const { regularMonth: m, bonusMonth, annual } = result;

  const chartData = [
    { label: t("results.takeHomeLabel"), value: m.netPay },
    { label: t("results.epfYours"), value: m.epf.employee },
    { label: t("results.socsoYours"), value: m.socso.employee },
    { label: t("results.eisYours"), value: m.eis.employee },
    { label: t("results.pcbTax"), value: m.pcb },
  ];

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-2xl" aria-hidden="true" />
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-foreground">{t("results.title")}</h2>
            <p className="mt-1 text-sm text-muted">
              {result.isSelfEmployed ? t("results.subtitleSelfEmployed") : t("results.subtitleNormal", { year: result.rateYear })}
            </p>
          </div>
          <PdfReportButton result={result} />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <StatTile label={t("results.monthlyTakeHome")} value={formatRM(m.netPay)} sub={t("results.fromGross", { amount: formatRM(m.gross) })} />
          <StatTile label={t("results.annualTakeHome")} value={formatRM(annual.netPay)} sub={t("results.fromGross", { amount: formatRM(annual.gross) })} />
        </div>

        {bonusMonth && (
          <div className="mt-3 rounded-xl border border-accent/40 bg-accent-light px-4 py-3 text-sm text-foreground">
            {t("results.bonusMonthNote", { amount: formatRM(bonusMonth.netPay) })}
          </div>
        )}
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-foreground">{t("results.whereGoes")}</h2>
        <BreakdownChart data={chartData} emptyLabel={t("results.chartEmptyState")} />
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-foreground">{t("results.fullBreakdown")}</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-muted">{t("results.yourDeductions")}</h3>
            <div className="mt-2 divide-y divide-border">
              <DeductionRow label={t("results.epf")} value={m.epf.employee} />
              <DeductionRow label={t("results.socso")} value={m.socso.employee} />
              <DeductionRow label={t("results.eis")} value={m.eis.employee} />
              <DeductionRow label={t("results.pcb")} value={m.pcb} />
              <DeductionRow label={t("results.totalDeductions")} value={m.totalEmployeeDeductions} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted">{t("results.employerPaysOnTop")}</h3>
            <div className="mt-2 divide-y divide-border">
              <DeductionRow label={t("results.epfEmployer")} value={m.epf.employer} />
              <DeductionRow label={t("results.socsoEmployer")} value={m.socso.employer} />
              <DeductionRow label={t("results.eisEmployer")} value={m.eis.employer} />
              <DeductionRow label={t("results.totalCostToEmployer")} value={m.totalEmployerCost} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import SalaryInputsForm from "@/components/calculator/SalaryInputsForm";
import { Card } from "@/components/ui/Field";
import { calculateSalary } from "@/lib/calc/salary";
import { DEFAULT_SALARY_INPUT, type SalaryInput } from "@/lib/calc/types";
import { getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

function OfferSummary({
  title,
  input,
  netMonthly,
  netAnnual,
  isWinner,
  t,
}: {
  title: string;
  input: SalaryInput;
  netMonthly: number;
  netAnnual: number;
  isWinner: boolean;
  t: (path: string, vars?: Record<string, string | number>) => string;
}) {
  return (
    <Card className={isWinner ? "border-brand ring-1 ring-brand" : undefined}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{title}</h3>
        {isWinner && <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">{t("compare.higherTakeHome")}</span>}
      </div>
      <p className="mt-1 text-sm text-muted">{formatRM(input.grossMonthly)} {t("compare.grossPerMonth")}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-brand-light px-3 py-2">
          <div className="text-[11px] uppercase text-brand-dark/80">{t("compare.monthlyNet")}</div>
          <div className="text-lg font-bold tabular-nums text-brand-dark">{formatRM(netMonthly)}</div>
        </div>
        <div className="rounded-lg bg-accent-light px-3 py-2">
          <div className="text-[11px] uppercase text-foreground/70">{t("compare.annualNet")}</div>
          <div className="text-lg font-bold tabular-nums text-foreground">{formatRM(netAnnual)}</div>
        </div>
      </div>
    </Card>
  );
}

export default function CompareClient() {
  const [inputA, setInputA] = useState<SalaryInput>({ ...DEFAULT_SALARY_INPUT, grossMonthly: 5000 });
  const [inputB, setInputB] = useState<SalaryInput>({ ...DEFAULT_SALARY_INPUT, grossMonthly: 5800 });
  const { t } = useLanguage();

  const ratesA = getRates(inputA.rateYear);
  const ratesB = getRates(inputB.rateYear);
  const resultA = useMemo(() => calculateSalary(inputA, ratesA), [inputA, ratesA]);
  const resultB = useMemo(() => calculateSalary(inputB, ratesB), [inputB, ratesB]);

  const aWins = resultA.regularMonth.netPay >= resultB.regularMonth.netPay;
  const diff = Math.abs(resultA.regularMonth.netPay - resultB.regularMonth.netPay);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("compare.title")}</h1>
      <p className="mt-2 max-w-2xl text-base text-muted">{t("compare.subtitle")}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <OfferSummary title={t("compare.offerA")} input={inputA} netMonthly={resultA.regularMonth.netPay} netAnnual={resultA.annual.netPay} isWinner={aWins} t={t} />
        <OfferSummary title={t("compare.offerB")} input={inputB} netMonthly={resultB.regularMonth.netPay} netAnnual={resultB.annual.netPay} isWinner={!aWins} t={t} />
      </div>

      <p className="mt-4 text-sm text-muted">
        {t("compare.resultLine", {
          winner: aWins ? t("compare.offerA") : t("compare.offerB"),
          diff: formatRM(diff),
          diffAnnual: formatRM(diff * 12),
        })}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalaryInputsForm value={inputA} onChange={setInputA} />
        <SalaryInputsForm value={inputB} onChange={setInputB} />
      </div>
    </div>
  );
}

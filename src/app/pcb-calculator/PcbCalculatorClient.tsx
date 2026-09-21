"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import { Card, NumberField, PillGroup, ToggleField } from "@/components/ui/Field";
import { calculateSalary } from "@/lib/calc/salary";
import { DEFAULT_SALARY_INPUT, type SalaryInput } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function PcbCalculatorClient() {
  const [input, setInput] = useState<SalaryInput>({ ...DEFAULT_SALARY_INPUT, rateYear: CURRENT_RATE_YEAR });
  const rates = getRates(CURRENT_RATE_YEAR);
  const result = useMemo(() => calculateSalary(input, rates), [input, rates]);
  const set = <K extends keyof SalaryInput>(key: K, v: SalaryInput[K]) => setInput({ ...input, [key]: v });
  const { t } = useLanguage();

  return (
    <ToolPageShell title={t("pcbPage.title")} intro={t("pcbPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("form.grossSalary")} prefix={t("common.rm")} value={input.grossMonthly} onChange={(v) => set("grossMonthly", v)} step={100} />
            <PillGroup label={t("form.maritalStatus")} value={input.maritalStatus} onChange={(v) => set("maritalStatus", v)} options={[
              { value: "single", label: t("form.single") },
              { value: "married", label: t("form.married") },
            ]} />
            {input.maritalStatus === "married" && (
              <ToggleField label={t("form.spouseWorking")} checked={input.spouseWorking} onChange={(v) => set("spouseWorking", v)} />
            )}
            <NumberField label={t("form.numChildren")} value={input.numChildren} onChange={(v) => set("numChildren", Math.max(0, Math.round(v)))} />
            <PillGroup label={t("form.ageGroup")} value={input.ageGroup} onChange={(v) => set("ageGroup", v)} options={[
              { value: "below60", label: t("form.below60") },
              { value: "60plus", label: t("form.above60") },
            ]} />
            <PillGroup label={t("form.nationality")} value={input.nationality} onChange={(v) => set("nationality", v)} options={[
              { value: "malaysian", label: t("pcbPage.residentLabel") },
              { value: "nonMalaysian", label: t("form.nonMalaysian") },
            ]} />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("pcbPage.estimatedMonthly")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("pcbPage.monthlyDeduction")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.regularMonth.pcb)}</div>
          </div>

          {result.regularMonth.pcb === 0 && !result.pcbDetail.isNonResident && (
            <p className="mt-3 rounded-lg bg-background px-3 py-2 text-sm text-muted">{t("pcbPage.zeroNote")}</p>
          )}

          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-muted">{t("pcbPage.annualGross")}</dt><dd className="tabular-nums font-medium">{formatRM(result.pcbDetail.annualGrossIncome)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("pcbPage.totalReliefs")}</dt><dd className="tabular-nums font-medium">{formatRM(result.pcbDetail.totalReliefs)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("pcbPage.chargeableIncome")}</dt><dd className="tabular-nums font-medium">{formatRM(result.pcbDetail.chargeableIncome)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("pcbPage.taxBeforeRebate")}</dt><dd className="tabular-nums font-medium">{formatRM(result.pcbDetail.taxBeforeRebate)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("pcbPage.rebate")}</dt><dd className="tabular-nums font-medium">− {formatRM(result.pcbDetail.rebate)}</dd></div>
            <div className="flex justify-between border-t border-border pt-2 font-semibold"><dt>{t("pcbPage.annualTax")}</dt><dd className="tabular-nums">{formatRM(result.pcbDetail.annualTax)}</dd></div>
          </dl>
        </Card>
      </div>

      {result.pcbDetail.reliefsBreakdown.length > 0 && (
        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">{t("pcbPage.reliefsAppliedTitle")}</h2>
          <ul className="mt-3 divide-y divide-border text-sm">
            {result.pcbDetail.reliefsBreakdown.map((r) => (
              <li key={r.key} className="flex justify-between py-2">
                <span className="text-muted">{t(r.key, r.vars)}</span>
                <span className="tabular-nums font-medium">{formatRM(r.amount)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">
            {t("pcbPage.reliefsNotePre")}{" "}
            <Link href="/" className="text-brand underline">{t("pcbPage.reliefsNoteLinkText")}</Link>
            {t("pcbPage.reliefsNotePost")}
          </p>
        </Card>
      )}

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("pcbPage.bracketsTitle", { year: rates.year })}</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="py-2 pr-4 font-medium">{t("pcbPage.chargeableIncomeCol")}</th>
                <th className="py-2 font-medium">{t("pcbPage.rateCol")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rates.pcb.brackets.map((b) => (
                <tr key={b.from}>
                  <td className="py-2 pr-4 tabular-nums">{b.from.toLocaleString()} – {b.to ? b.to.toLocaleString() : "above"}</td>
                  <td className="py-2 tabular-nums">{b.ratePct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          Source: <a href="https://www.hasil.gov.my" target="_blank" rel="noopener noreferrer" className="underline">LHDN</a>. {t("pcbPage.footnote")}
        </p>
      </Card>

      <RelatedGuides
        links={[
          { href: "/guides/malaysia-income-tax-rate-brackets-explained", label: "Malaysia Income Tax Rate Brackets Explained" },
          { href: "/guides/annual-tax-relief-checklist", label: "Annual Tax Relief Checklist" },
        ]}
      />
    </ToolPageShell>
  );
}

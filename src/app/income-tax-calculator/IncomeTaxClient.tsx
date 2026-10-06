"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import PageFaq from "@/components/content/PageFaq";
import { Card, NumberField, PillGroup, ToggleField } from "@/components/ui/Field";
import { calculateSalary } from "@/lib/calc/salary";
import { rateTable, taxBandBreakdown } from "@/lib/calc/incomeTax";
import { DEFAULT_SALARY_INPUT, EMPTY_ADDITIONAL_RELIEFS, type AdditionalReliefs, type AgeGroup, type MaritalStatus } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

function bandLabel(from: number, to: number | null, above: string) {
  return `${from.toLocaleString()} – ${to === null ? above : to.toLocaleString()}`;
}

export default function IncomeTaxClient() {
  const { t, lang } = useLanguage();
  const rates = getRates(CURRENT_RATE_YEAR);

  const [annualIncome, setAnnualIncome] = useState(60000);
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>("single");
  const [spouseWorking, setSpouseWorking] = useState(false);
  const [numChildren, setNumChildren] = useState(0);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [reliefsOpen, setReliefsOpen] = useState(false);
  const [reliefs, setReliefs] = useState<AdditionalReliefs>(EMPTY_ADDITIONAL_RELIEFS);

  const result = useMemo(
    () =>
      calculateSalary(
        {
          ...DEFAULT_SALARY_INPUT,
          rateYear: CURRENT_RATE_YEAR,
          grossMonthly: annualIncome / 12,
          maritalStatus,
          spouseWorking,
          numChildren,
          ageGroup,
          additionalReliefs: reliefs,
        },
        rates
      ),
    [annualIncome, maritalStatus, spouseWorking, numChildren, ageGroup, reliefs, rates]
  );

  const detail = result.pcbDetail;
  const effectiveRate = detail.annualGrossIncome > 0 ? (detail.annualTax / detail.annualGrossIncome) * 100 : 0;
  const bands = useMemo(() => taxBandBreakdown(rates.pcb.brackets, detail.chargeableIncome), [rates, detail.chargeableIncome]);
  const table = useMemo(() => rateTable(rates.pcb.brackets), [rates]);
  const above = t("incomeTaxPage.above");
  const setRelief = <K extends keyof AdditionalReliefs>(key: K, v: AdditionalReliefs[K]) => setReliefs({ ...reliefs, [key]: v });

  return (
    <ToolPageShell title={t("incomeTaxPage.title")} intro={t("incomeTaxPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField
              label={t("incomeTaxPage.annualIncome")}
              prefix={t("common.rm")}
              value={annualIncome}
              onChange={setAnnualIncome}
              step={1000}
              hint={t("incomeTaxPage.annualIncomeHint")}
            />
            <PillGroup
              label={t("form.maritalStatus")}
              value={maritalStatus}
              onChange={setMaritalStatus}
              options={[
                { value: "single", label: t("form.single") },
                { value: "married", label: t("form.married") },
              ]}
            />
            {maritalStatus === "married" && (
              <ToggleField label={t("form.spouseWorking")} checked={spouseWorking} onChange={setSpouseWorking} />
            )}
            <NumberField label={t("form.numChildren")} value={numChildren} onChange={(v) => setNumChildren(Math.max(0, Math.round(v)))} />
            <PillGroup
              label={t("form.ageGroup")}
              value={ageGroup}
              onChange={setAgeGroup}
              options={[
                { value: "below60", label: t("form.below60") },
                { value: "60plus", label: t("form.above60") },
              ]}
            />

            <div className="border-t border-border pt-4">
              <button
                type="button"
                onClick={() => setReliefsOpen((v) => !v)}
                className="flex w-full items-center justify-between text-sm font-semibold text-brand"
                aria-expanded={reliefsOpen}
              >
                {t("form.additionalReliefs")}
                <span aria-hidden="true">{reliefsOpen ? "−" : "+"}</span>
              </button>
              {reliefsOpen && (
                <div className="mt-4 space-y-4">
                  <NumberField label={t("form.lifeInsurance")} prefix={t("common.rm")} value={reliefs.lifeInsuranceAnnual} onChange={(v) => setRelief("lifeInsuranceAnnual", v)} step={100} hint={t("form.lifeInsuranceHint")} />
                  <NumberField label={t("form.lifestyle")} prefix={t("common.rm")} value={reliefs.lifestyleAnnual} onChange={(v) => setRelief("lifestyleAnnual", v)} step={50} hint={t("form.lifestyleHint")} />
                  <NumberField label={t("form.medical")} prefix={t("common.rm")} value={reliefs.medicalAnnual} onChange={(v) => setRelief("medicalAnnual", v)} step={100} hint={t("form.medicalHint")} />
                  <NumberField label={t("form.parentMedical")} prefix={t("common.rm")} value={reliefs.parentMedicalAnnual} onChange={(v) => setRelief("parentMedicalAnnual", v)} step={100} hint={t("form.parentMedicalHint")} />
                  <NumberField label={t("form.sspn")} prefix={t("common.rm")} value={reliefs.sspnAnnual} onChange={(v) => setRelief("sspnAnnual", v)} step={100} hint={t("form.sspnHint")} />
                  <ToggleField label={t("form.disabledSelf")} checked={reliefs.disabledSelf} onChange={(v) => setRelief("disabledSelf", v)} />
                  {maritalStatus === "married" && (
                    <ToggleField label={t("form.disabledSpouse")} checked={reliefs.disabledSpouse} onChange={(v) => setRelief("disabledSpouse", v)} />
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("incomeTaxPage.resultsTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("incomeTaxPage.taxPayable")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(detail.annualTax)}</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("incomeTaxPage.effectiveRate")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{effectiveRate.toFixed(2)}%</div>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("incomeTaxPage.avgMonthly")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(detail.annualTax / 12)}</div>
            </div>
          </div>

          {detail.annualTax === 0 && <p className="mt-3 rounded-lg bg-background px-3 py-2 text-sm text-muted">{t("incomeTaxPage.zeroNote")}</p>}

          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-muted">{t("incomeTaxPage.annualGross")}</dt><dd className="tabular-nums font-medium">{formatRM(detail.annualGrossIncome)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("incomeTaxPage.totalReliefs")}</dt><dd className="tabular-nums font-medium">− {formatRM(detail.totalReliefs)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("incomeTaxPage.chargeableIncome")}</dt><dd className="tabular-nums font-medium">{formatRM(detail.chargeableIncome)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("incomeTaxPage.taxBeforeRebate")}</dt><dd className="tabular-nums font-medium">{formatRM(detail.taxBeforeRebate)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">{t("incomeTaxPage.rebate")}</dt><dd className="tabular-nums font-medium">− {formatRM(detail.rebate)}</dd></div>
            <div className="flex justify-between border-t border-border pt-2 font-semibold"><dt>{t("incomeTaxPage.annualTax")}</dt><dd className="tabular-nums">{formatRM(detail.annualTax)}</dd></div>
          </dl>
        </Card>
      </div>

      {bands.length > 0 && (
        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">{t("incomeTaxPage.bandsTitle")}</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full whitespace-nowrap text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th scope="col" className="py-2 pr-4 font-medium">{t("incomeTaxPage.bandCol")}</th>
                  <th scope="col" className="py-2 pr-4 font-medium">{t("incomeTaxPage.amountCol")}</th>
                  <th scope="col" className="py-2 pr-4 font-medium">{t("incomeTaxPage.rateCol")}</th>
                  <th scope="col" className="py-2 font-medium">{t("incomeTaxPage.taxCol")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {bands.map((b) => (
                  <tr key={b.from}>
                    <td className="py-2 pr-4 tabular-nums">{bandLabel(b.from, b.to, above)}</td>
                    <td className="py-2 pr-4 tabular-nums">{formatRM(b.incomeInBand)}</td>
                    <td className="py-2 pr-4 tabular-nums">{b.ratePct}%</td>
                    <td className="py-2 tabular-nums font-medium">{formatRM(b.tax)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {detail.reliefsBreakdown.length > 0 && (
        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">{t("incomeTaxPage.reliefsTitle")}</h2>
          <ul className="mt-3 divide-y divide-border text-sm">
            {detail.reliefsBreakdown.map((r) => (
              <li key={r.key} className="flex justify-between py-2">
                <span className="text-muted">{t(r.key, r.vars)}</span>
                <span className="tabular-nums font-medium">{formatRM(r.amount)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">
            {t("incomeTaxPage.reliefsNotePre")}{" "}
            <Link href={lang === "ms" ? "/ms" : "/"} className="text-brand underline">{t("incomeTaxPage.reliefsNoteLink")}</Link>.
          </p>
        </Card>
      )}

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("incomeTaxPage.ratesTitle")}</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full whitespace-nowrap text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th scope="col" className="py-2 pr-4 font-medium">{t("incomeTaxPage.ratesBandCol")}</th>
                <th scope="col" className="py-2 pr-4 font-medium">{t("incomeTaxPage.ratesRateCol")}</th>
                <th scope="col" className="py-2 font-medium">{t("incomeTaxPage.ratesCumulativeCol")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {table.map((row) => (
                <tr key={row.from}>
                  <td className="py-2 pr-4 tabular-nums">{bandLabel(row.from, row.to, above)}</td>
                  <td className="py-2 pr-4 tabular-nums">{row.ratePct}%</td>
                  <td className="py-2 tabular-nums">{row.cumulativeTaxAtTop === null ? "—" : formatRM(row.cumulativeTaxAtTop)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">{t("incomeTaxPage.ratesFootnote")}</p>
      </Card>

      <PageFaq
        title={t("incomeTaxPage.faqTitle")}
        items={[
          { q: t("incomeTaxPage.faqQ1"), a: t("incomeTaxPage.faqA1") },
          { q: t("incomeTaxPage.faqQ2"), a: t("incomeTaxPage.faqA2") },
          { q: t("incomeTaxPage.faqQ3"), a: t("incomeTaxPage.faqA3") },
        ]}
      />

      <RelatedGuides
        links={[
          { href: lang === "ms" ? "/ms/pelepasan-cukai-2026" : "/guides/tax-relief-2026-malaysia-ya-2025", label: lang === "ms" ? "Pelepasan Cukai 2026: Senarai Penuh" : "Tax Relief 2026 (YA 2025): Full List" },
          { href: lang === "ms" ? "/ms/pcb-calculator" : "/pcb-calculator", label: "PCB Calculator (MTD)" },
          { href: "/guides/malaysia-income-tax-rate-brackets-explained", label: "Malaysia Income Tax Rate Brackets Explained" },
          { href: "/guides/annual-tax-relief-checklist", label: "Annual Tax Relief Checklist" },
        ]}
      />
    </ToolPageShell>
  );
}

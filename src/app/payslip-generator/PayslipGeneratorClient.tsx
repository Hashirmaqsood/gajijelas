"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import PageFaq from "@/components/content/PageFaq";
import PayslipPdfButton from "@/components/calculator/PayslipPdfButton";
import { Card, NumberField, PillGroup, SelectField, TextField } from "@/components/ui/Field";
import { calculateSalary } from "@/lib/calc/salary";
import { DEFAULT_SALARY_INPUT, type AgeGroup, type MaritalStatus, type Nationality } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

function monthOptions(lang: "en" | "ms") {
  const formatter = new Intl.DateTimeFormat(lang === "ms" ? "ms-MY" : "en-MY", { month: "long" });
  return Array.from({ length: 12 }, (_, i) => {
    const value = String(i + 1).padStart(2, "0");
    return { value, label: formatter.format(new Date(2026, i, 1)) };
  });
}

export default function PayslipGeneratorClient() {
  const { t, lang } = useLanguage();
  const now = new Date();

  const [employerName, setEmployerName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [payMonth, setPayMonth] = useState(String(now.getMonth() + 1).padStart(2, "0"));
  const [payYear, setPayYear] = useState(now.getFullYear());
  const [basicSalary, setBasicSalary] = useState(5000);
  const [allowances, setAllowances] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>("single");
  const [numChildren, setNumChildren] = useState(0);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [nationality, setNationality] = useState<Nationality>("malaysian");

  const rates = useMemo(() => getRates(CURRENT_RATE_YEAR), []);
  const months = useMemo(() => monthOptions(lang), [lang]);

  const result = useMemo(() => {
    const input = {
      ...DEFAULT_SALARY_INPUT,
      rateYear: CURRENT_RATE_YEAR,
      grossMonthly: basicSalary + allowances,
      maritalStatus,
      numChildren,
      ageGroup,
      nationality,
    };
    return calculateSalary(input, rates);
  }, [basicSalary, allowances, maritalStatus, numChildren, ageGroup, nationality, rates]);

  const m = result.regularMonth;
  const periodLabel = `${months.find((mo) => mo.value === payMonth)?.label ?? payMonth} ${payYear}`;

  return (
    <ToolPageShell title={t("payslipPage.title")} intro={t("payslipPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("payslipPage.employerHeading")}</h2>
          <div className="mt-4 space-y-5">
            <TextField label={t("payslipPage.employerName")} value={employerName} onChange={setEmployerName} placeholder={t("payslipPage.employerNamePlaceholder")} />
          </div>

          <h2 className="mt-6 text-lg font-semibold text-foreground">{t("payslipPage.employeeHeading")}</h2>
          <div className="mt-4 space-y-5">
            <TextField label={t("payslipPage.employeeName")} value={employeeName} onChange={setEmployeeName} placeholder={t("payslipPage.employeeNamePlaceholder")} />
            <TextField label={t("payslipPage.employeeId")} value={employeeId} onChange={setEmployeeId} placeholder={t("payslipPage.employeeIdPlaceholder")} />
            <div className="grid grid-cols-2 gap-3">
              <SelectField label={t("payslipPage.payPeriod")} value={payMonth} onChange={setPayMonth} options={months} />
              <NumberField label={t("payslipPage.payPeriodYear")} value={payYear} onChange={(v) => setPayYear(Math.round(v))} step={1} min={2020} />
            </div>
          </div>

          <h2 className="mt-6 text-lg font-semibold text-foreground">{t("payslipPage.earningsHeading")}</h2>
          <div className="mt-4 space-y-5">
            <NumberField label={t("payslipPage.basicSalary")} prefix={t("common.rm")} value={basicSalary} onChange={setBasicSalary} step={100} />
            <NumberField label={t("payslipPage.allowances")} prefix={t("common.rm")} value={allowances} onChange={setAllowances} step={50} hint={t("payslipPage.allowancesHint")} />
            <PillGroup
              label={t("form.maritalStatus")}
              value={maritalStatus}
              onChange={setMaritalStatus}
              options={[
                { value: "single", label: t("form.single") },
                { value: "married", label: t("form.married") },
              ]}
            />
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
        </Card>

        <Card>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-foreground">{t("payslipPage.previewHeading")}</h2>
            <PayslipPdfButton
              employerName={employerName}
              employeeName={employeeName}
              employeeId={employeeId}
              periodLabel={periodLabel}
              basicSalary={basicSalary}
              allowances={allowances}
              result={result}
            />
          </div>

          <div className="mt-4 rounded-xl border border-border bg-background p-5">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted">{t("payslipPage.payslipTitle")}</div>
              <div className="mt-1 text-lg font-bold text-foreground">{employerName || "—"}</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
              <div>
                <div className="text-xs text-muted">{t("payslipPage.employeeLabel")}</div>
                <div className="font-medium text-foreground">{employeeName || "—"}</div>
              </div>
              <div>
                <div className="text-xs text-muted">{t("payslipPage.employeeIdLabel")}</div>
                <div className="font-medium text-foreground">{employeeId || "—"}</div>
              </div>
              <div className="col-span-2">
                <div className="text-xs text-muted">{t("payslipPage.periodLabel")}</div>
                <div className="font-medium text-foreground">{periodLabel}</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 border-t border-border pt-4 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase text-muted">{t("payslipPage.earningsCol")}</div>
                <dl className="mt-2 space-y-1.5 text-sm">
                  <div className="flex justify-between"><dt className="text-muted">{t("payslipPage.basicSalary")}</dt><dd className="tabular-nums font-medium">{formatRM(basicSalary)}</dd></div>
                  {allowances > 0 && (
                    <div className="flex justify-between"><dt className="text-muted">{t("payslipPage.allowances")}</dt><dd className="tabular-nums font-medium">{formatRM(allowances)}</dd></div>
                  )}
                  <div className="flex justify-between border-t border-border pt-1.5 font-semibold"><dt>{t("payslipPage.grossPay")}</dt><dd className="tabular-nums">{formatRM(m.gross)}</dd></div>
                </dl>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-muted">{t("payslipPage.deductionsCol")}</div>
                <dl className="mt-2 space-y-1.5 text-sm">
                  <div className="flex justify-between"><dt className="text-muted">{t("results.epf")}</dt><dd className="tabular-nums font-medium">{formatRM(m.epf.employee)}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted">{t("results.socso")}</dt><dd className="tabular-nums font-medium">{formatRM(m.socso.employee)}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted">{t("results.eis")}</dt><dd className="tabular-nums font-medium">{formatRM(m.eis.employee)}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted">{t("results.pcb")}</dt><dd className="tabular-nums font-medium">{formatRM(m.pcb)}</dd></div>
                  <div className="flex justify-between border-t border-border pt-1.5 font-semibold"><dt>{t("payslipPage.totalDeductions")}</dt><dd className="tabular-nums">{formatRM(m.totalEmployeeDeductions)}</dd></div>
                </dl>
              </div>
            </div>

            <div className="mt-5 rounded-lg bg-brand-light px-4 py-3.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-dark">{t("payslipPage.netPay")}</span>
                <span className="text-xl font-bold tabular-nums text-brand-dark">{formatRM(m.netPay)}</span>
              </div>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="text-xs font-semibold uppercase text-muted">{t("payslipPage.employerContributionsHeading")}</div>
              <dl className="mt-2 space-y-1.5 text-sm">
                <div className="flex justify-between"><dt className="text-muted">{t("results.epfEmployer")}</dt><dd className="tabular-nums font-medium">{formatRM(m.epf.employer)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">{t("results.socsoEmployer")}</dt><dd className="tabular-nums font-medium">{formatRM(m.socso.employer)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">{t("results.eisEmployer")}</dt><dd className="tabular-nums font-medium">{formatRM(m.eis.employer)}</dd></div>
                <div className="flex justify-between border-t border-border pt-1.5 font-semibold"><dt>{t("payslipPage.totalEmployerContributions")}</dt><dd className="tabular-nums">{formatRM(m.epf.employer + m.socso.employer + m.eis.employer)}</dd></div>
              </dl>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted">{t("payslipPage.disclaimer")}</p>
        </Card>
      </div>

      <PageFaq
        title={t("payslipPage.faqTitle")}
        items={[
          { q: t("payslipPage.faqQ1"), a: t("payslipPage.faqA1") },
          { q: t("payslipPage.faqQ2"), a: t("payslipPage.faqA2") },
        ]}
      />

      <RelatedGuides
        links={[
          { href: "/guides/first-paycheck-malaysia-what-to-expect", label: "What Your First Paycheck Actually Looks Like" },
          { href: "/guides/real-cost-of-hiring-in-malaysia", label: "The Real Cost of Hiring in Malaysia" },
        ]}
      />
    </ToolPageShell>
  );
}

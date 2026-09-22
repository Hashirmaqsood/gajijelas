"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import PageFaq from "@/components/content/PageFaq";
import { Card, NumberField, PillGroup } from "@/components/ui/Field";
import { calculateHourlyRate } from "@/lib/calc/hourlyRate";
import { calculateOvertime, type OvertimeDayType } from "@/lib/calc/overtime";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function OvertimeClient() {
  const [monthlySalary, setMonthlySalary] = useState(3500);
  const [normalHoursPerDay, setNormalHoursPerDay] = useState(8);
  const [dayType, setDayType] = useState<OvertimeDayType>("normal");
  const [hoursWorked, setHoursWorked] = useState(2);
  const { t } = useLanguage();

  const { hourlyRate } = useMemo(
    () => calculateHourlyRate({ monthlySalary, workingDaysPerMonth: 26, hoursPerDay: normalHoursPerDay }),
    [monthlySalary, normalHoursPerDay]
  );

  const result = useMemo(
    () => calculateOvertime({ hourlyRate, normalHoursPerDay, dayType, hoursWorked }),
    [hourlyRate, normalHoursPerDay, dayType, hoursWorked]
  );

  return (
    <ToolPageShell title={t("overtimePage.title")} intro={t("overtimePage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("overtimePage.monthlySalary")} prefix={t("common.rm")} value={monthlySalary} onChange={setMonthlySalary} step={100} hint={t("overtimePage.monthlySalaryHint")} />
            <NumberField label={t("overtimePage.normalHours")} value={normalHoursPerDay} onChange={setNormalHoursPerDay} step={1} />
            <PillGroup
              label={t("overtimePage.dayType")}
              value={dayType}
              onChange={setDayType}
              options={[
                { value: "normal", label: t("overtimePage.normalDay") },
                { value: "restDay", label: t("overtimePage.restDay") },
                { value: "publicHoliday", label: t("overtimePage.publicHoliday") },
              ]}
            />
            <NumberField label={t("overtimePage.hoursWorked")} value={hoursWorked} onChange={setHoursWorked} step={0.5} />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("overtimePage.payTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("overtimePage.youAreOwed")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.pay)}</div>
          </div>
          <p className="mt-3 text-sm text-muted">{t("overtimePage.formulaUsed", { formula: t(result.multiplierKey) })}</p>
          <p className="mt-2 text-sm text-muted">{t("overtimePage.derivedHourlyRate")} <strong className="text-foreground">{formatRM(hourlyRate)}</strong></p>

          <div className="mt-5 rounded-lg bg-background px-3 py-3 text-xs text-muted">{t("overtimePage.coverageNote")}</div>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("overtimePage.multipliersTitle")}</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li><strong className="text-foreground">{t("overtimePage.multiplierNormalLabel")}</strong> {t("overtimePage.multiplierNormalDesc")}</li>
          <li><strong className="text-foreground">{t("overtimePage.multiplierRestLabel")}</strong> {t("overtimePage.multiplierRestDesc")}</li>
          <li><strong className="text-foreground">{t("overtimePage.multiplierHolidayLabel")}</strong> {t("overtimePage.multiplierHolidayDesc")}</li>
        </ul>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("overtimePage.exampleTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("overtimePage.exampleBody")}</p>
      </Card>

      <PageFaq
        title={t("overtimePage.faqTitle")}
        items={[
          { q: t("overtimePage.faqQ1"), a: t("overtimePage.faqA1") },
          { q: t("overtimePage.faqQ2"), a: t("overtimePage.faqA2") },
        ]}
      />

      <RelatedGuides
        links={[{ href: "/guides/understanding-employment-act-overtime-rules", label: "Understanding Overtime Rules" }]}
      />
    </ToolPageShell>
  );
}

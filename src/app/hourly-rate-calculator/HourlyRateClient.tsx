"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import { Card, NumberField } from "@/components/ui/Field";
import { calculateHourlyRate } from "@/lib/calc/hourlyRate";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function HourlyRateClient() {
  const [monthlySalary, setMonthlySalary] = useState(4000);
  const [workingDaysPerMonth, setWorkingDaysPerMonth] = useState(26);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const { t } = useLanguage();

  const result = useMemo(
    () => calculateHourlyRate({ monthlySalary, workingDaysPerMonth, hoursPerDay }),
    [monthlySalary, workingDaysPerMonth, hoursPerDay]
  );

  return (
    <ToolPageShell title={t("hourlyPage.title")} intro={t("hourlyPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("hourlyPage.monthlySalary")} prefix={t("common.rm")} value={monthlySalary} onChange={setMonthlySalary} step={100} />
            <NumberField label={t("hourlyPage.workingDays")} value={workingDaysPerMonth} onChange={setWorkingDaysPerMonth} step={1} hint={t("hourlyPage.workingDaysHint")} />
            <NumberField label={t("hourlyPage.hoursPerDay")} value={hoursPerDay} onChange={setHoursPerDay} step={1} />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("hourlyPage.convertedTitle")}</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-brand-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-brand-dark/80">{t("hourlyPage.dailyRate")}</div>
              <div className="mt-1 text-2xl font-bold tabular-nums text-brand-dark">{formatRM(result.dailyRate)}</div>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("hourlyPage.hourlyRate")}</div>
              <div className="mt-1 text-2xl font-bold tabular-nums text-foreground">{formatRM(result.hourlyRate)}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            {t("hourlyPage.footnotePre")}{" "}
            <Link href="/overtime-calculator" className="text-brand underline">{t("hourlyPage.footnoteLinkText")}</Link>
            {t("hourlyPage.footnotePost")}
          </p>
        </Card>
      </div>

      <RelatedGuides
        links={[{ href: "/guides/understanding-employment-act-overtime-rules", label: "Understanding Overtime Rules" }]}
      />
    </ToolPageShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import { Card, NumberField } from "@/components/ui/Field";
import { calculateZakat } from "@/lib/calc/zakat";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function ZakatClient() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [nisabThreshold, setNisabThreshold] = useState(34000);
  const { t } = useLanguage();

  const annualIncome = monthlyIncome * 12;
  const result = useMemo(() => calculateZakat({ annualIncome, nisabThreshold }), [annualIncome, nisabThreshold]);

  return (
    <ToolPageShell title={t("zakatPage.title")} intro={t("zakatPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("zakatPage.monthlyIncome")} prefix={t("common.rm")} value={monthlyIncome} onChange={setMonthlyIncome} step={100} />
            <NumberField
              label={t("zakatPage.nisabThreshold")}
              prefix={t("common.rm")}
              value={nisabThreshold}
              onChange={setNisabThreshold}
              step={100}
              hint={t("zakatPage.nisabHint")}
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("zakatPage.resultsTitle")}</h2>
          <p className="mt-1 text-sm text-muted">
            {t("zakatPage.annualIncome")} <strong className="text-foreground">{formatRM(annualIncome)}</strong>
          </p>
          {result.isLiable ? (
            <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
              <div className="text-xs font-medium uppercase text-brand-dark/80">{t("zakatPage.zakatDue")}</div>
              <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.zakatDue)}</div>
              <p className="mt-2 text-xs text-brand-dark/80">{t("zakatPage.liableNote")}</p>
            </div>
          ) : (
            <div className="mt-4 rounded-xl bg-accent-light px-4 py-4">
              <p className="text-sm font-medium text-foreground">{t("zakatPage.belowNisab")}</p>
            </div>
          )}
          <p className="mt-4 text-xs text-muted">{t("zakatPage.rebateNote")}</p>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("zakatPage.aboutTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("zakatPage.aboutBody")}</p>
        <p className="mt-3 text-xs text-muted">
          {t("zakatPage.sourceNote")}{" "}
          <a href="https://www.zakat.com.my" target="_blank" rel="noopener noreferrer" className="underline">
            {t("zakatPage.sourceLinkText")}
          </a>
          .
        </p>
      </Card>
    </ToolPageShell>
  );
}

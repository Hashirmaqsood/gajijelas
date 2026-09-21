"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import { Card, NumberField, PillGroup } from "@/components/ui/Field";
import { calculateBonusImpact } from "@/lib/calc/bonusImpact";
import type { AgeGroup, MaritalStatus, Nationality } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function BonusClient() {
  const [monthlySalary, setMonthlySalary] = useState(5000);
  const [bonusAmount, setBonusAmount] = useState(5000);
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>("single");
  const [numChildren, setNumChildren] = useState(0);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [nationality, setNationality] = useState<Nationality>("malaysian");
  const { t } = useLanguage();

  const rates = useMemo(() => getRates(CURRENT_RATE_YEAR), []);
  const result = useMemo(
    () => calculateBonusImpact({ monthlySalary, bonusAmount, maritalStatus, numChildren, ageGroup, nationality }, rates),
    [monthlySalary, bonusAmount, maritalStatus, numChildren, ageGroup, nationality, rates]
  );

  return (
    <ToolPageShell title={t("bonusPage.title")} intro={t("bonusPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("bonusPage.monthlySalary")} prefix={t("common.rm")} value={monthlySalary} onChange={setMonthlySalary} step={100} />
            <NumberField label={t("bonusPage.bonusAmount")} prefix={t("common.rm")} value={bonusAmount} onChange={setBonusAmount} step={100} />
            <PillGroup
              label={t("form.maritalStatus")}
              value={maritalStatus}
              onChange={setMaritalStatus}
              options={[
                { value: "single", label: t("form.single") },
                { value: "married", label: t("form.married") },
              ]}
            />
            <NumberField label={t("form.numChildren")} value={numChildren} onChange={setNumChildren} step={1} min={0} />
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
          <h2 className="text-lg font-semibold text-foreground">{t("bonusPage.resultsTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">{t("bonusPage.netBonus")}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{formatRM(result.netBonus)}</div>
            <p className="mt-1 text-xs text-brand-dark/80">{t("bonusPage.fromGross", { gross: formatRM(bonusAmount) })}</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("bonusPage.extraEpf")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(result.extraEpfEmployee)}</div>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="text-xs font-medium uppercase text-foreground/70">{t("bonusPage.extraPcb")}</div>
              <div className="mt-1 text-lg font-bold tabular-nums text-foreground">{formatRM(result.extraPcb)}</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">{t("bonusPage.footnote")}</p>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("bonusPage.aboutTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("bonusPage.aboutBody")}</p>
      </Card>

      <RelatedGuides
        links={[{ href: "/guides/how-bonuses-are-taxed-in-malaysia", label: "How Bonuses Are Actually Taxed" }]}
      />
    </ToolPageShell>
  );
}

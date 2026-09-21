"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import { Card, NumberField, PillGroup } from "@/components/ui/Field";
import { calculateEpf } from "@/lib/calc/epf";
import { calculateEpfAccountSplit } from "@/lib/calc/epfAccountSplit";
import type { AgeGroup, Nationality } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function EpfAccountSplitClient() {
  const [wage, setWage] = useState(5000);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [nationality, setNationality] = useState<Nationality>("malaysian");
  const { t } = useLanguage();

  const rates = useMemo(() => getRates(CURRENT_RATE_YEAR).epf, []);
  const contribution = useMemo(() => calculateEpf(rates, wage, ageGroup, nationality), [rates, wage, ageGroup, nationality]);
  const split = useMemo(
    () => calculateEpfAccountSplit(contribution.employee + contribution.employer),
    [contribution]
  );

  return (
    <ToolPageShell title={t("epfSplitPage.title")} intro={t("epfSplitPage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("epfSplitPage.monthlyWage")} prefix={t("common.rm")} value={wage} onChange={setWage} step={100} />
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
          <h2 className="text-lg font-semibold text-foreground">{t("epfSplitPage.splitTitle")}</h2>
          <p className="mt-1 text-sm text-muted">
            {t("epfSplitPage.totalMonthly")} <strong className="text-foreground">{formatRM(split.totalContribution)}</strong>
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-brand-light px-4 py-3.5">
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-brand-dark">{t("epfSplitPage.persaraan")} (75%)</div>
                <div className="text-lg font-bold tabular-nums text-brand-dark">{formatRM(split.akaunPersaraan)}</div>
              </div>
              <p className="mt-1 text-xs text-brand-dark/80">{t("epfSplitPage.persaraanDesc")}</p>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-foreground">{t("epfSplitPage.sejahtera")} (15%)</div>
                <div className="text-lg font-bold tabular-nums text-foreground">{formatRM(split.akaunSejahtera)}</div>
              </div>
              <p className="mt-1 text-xs text-muted">{t("epfSplitPage.sejahteraDesc")}</p>
            </div>
            <div className="rounded-xl bg-accent-light px-4 py-3.5">
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-semibold text-foreground">{t("epfSplitPage.fleksibel")} (10%)</div>
                <div className="text-lg font-bold tabular-nums text-foreground">{formatRM(split.akaunFleksibel)}</div>
              </div>
              <p className="mt-1 text-xs text-muted">{t("epfSplitPage.fleksibelDesc")}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("epfSplitPage.aboutTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("epfSplitPage.aboutBody")}</p>
        <p className="mt-3 text-xs text-muted">
          {t("epfSplitPage.sourceNote")}{" "}
          <a href="https://www.kwsp.gov.my/en/member/account-centre/account-restructuring" target="_blank" rel="noopener noreferrer" className="underline">
            {t("epfSplitPage.sourceLinkText")}
          </a>
          .
        </p>
      </Card>

      <RelatedGuides
        links={[{ href: "/guides/epf-withdrawal-rules-malaysia", label: "EPF Withdrawal Rules" }]}
      />
    </ToolPageShell>
  );
}

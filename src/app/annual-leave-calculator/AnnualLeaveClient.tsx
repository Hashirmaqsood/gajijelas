"use client";

import { useMemo, useState } from "react";
import ToolPageShell from "@/components/calculator/ToolPageShell";
import RelatedGuides from "@/components/content/RelatedGuides";
import PageFaq from "@/components/content/PageFaq";
import { Card, NumberField, ToggleField } from "@/components/ui/Field";
import { annualLeaveDaysByService, proRatedLeave } from "@/lib/calc/leave";
import { useLanguage } from "@/lib/i18n/context";

export default function AnnualLeaveClient() {
  const [yearsOfService, setYearsOfService] = useState(1);
  const [isPartialYear, setIsPartialYear] = useState(false);
  const [completedMonths, setCompletedMonths] = useState(6);
  const { t, lang } = useLanguage();

  const fullEntitlement = useMemo(() => annualLeaveDaysByService(yearsOfService), [yearsOfService]);
  const entitlement = useMemo(
    () => (isPartialYear ? proRatedLeave(fullEntitlement, completedMonths) : fullEntitlement),
    [isPartialYear, fullEntitlement, completedMonths]
  );

  return (
    <ToolPageShell title={t("leavePage.title")} intro={t("leavePage.intro")}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-5">
            <NumberField label={t("leavePage.yearsOfService")} value={yearsOfService} onChange={(v) => setYearsOfService(Math.max(0, v))} step={1} />
            <ToggleField label={t("leavePage.partialYearToggle")} checked={isPartialYear} onChange={setIsPartialYear} />
            {isPartialYear && (
              <NumberField
                label={t("leavePage.completedMonths")}
                value={completedMonths}
                onChange={(v) => setCompletedMonths(Math.min(12, Math.max(0, Math.round(v))))}
                step={1}
              />
            )}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">{t("leavePage.entitlementTitle")}</h2>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-4">
            <div className="text-xs font-medium uppercase text-brand-dark/80">
              {isPartialYear ? t("leavePage.proRated") : t("leavePage.fullYear")}
            </div>
            <div className="mt-1 text-3xl font-bold tabular-nums text-brand-dark">{entitlement} {t("leavePage.days")}</div>
          </div>
          <p className="mt-3 text-sm text-muted">
            {t("leavePage.basedOn", { years: yearsOfService, days: fullEntitlement })}
          </p>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("leavePage.minimumsTitle")}</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li><strong className="text-foreground">{t("leavePage.minLess2Label")}</strong> {t("leavePage.minLess2Desc")}</li>
          <li><strong className="text-foreground">{t("leavePage.min2to5Label")}</strong> {t("leavePage.min2to5Desc")}</li>
          <li><strong className="text-foreground">{t("leavePage.minMore5Label")}</strong> {t("leavePage.minMore5Desc")}</li>
        </ul>
        <p className="mt-4 text-xs text-muted">{t("leavePage.footnote")}</p>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("leavePage.exampleTitle")}</h2>
        <p className="mt-2 text-sm text-foreground/90">{t("leavePage.exampleBody")}</p>
      </Card>

      <PageFaq
        title={t("leavePage.faqTitle")}
        items={[
          { q: t("leavePage.faqQ1"), a: t("leavePage.faqA1") },
          { q: t("leavePage.faqQ2"), a: t("leavePage.faqA2") },
        ]}
      />

      <RelatedGuides
        links={[
          { href: lang === "ms" ? "/ms/cuti-tahunan-cuti-sakit-akta-kerja" : "/guides/annual-leave-sick-leave-entitlement-malaysia", label: lang === "ms" ? "Cuti Tahunan & Cuti Sakit Pekerja Swasta" : "Annual Leave & Sick Leave Entitlement" },
          { href: lang === "ms" ? "/ms/cuti-bersalin-swasta-akta-kerja" : "/guides/maternity-leave-malaysia-employment-act", label: lang === "ms" ? "Cuti Bersalin Swasta: 98 Hari" : "Maternity Leave in Malaysia" },
          { href: lang === "ms" ? "/ms/cuti-paterniti-cuti-isteri-bersalin" : "/guides/paternity-leave-malaysia-employment-act", label: lang === "ms" ? "Cuti Paterniti: 7 Hari" : "Paternity Leave in Malaysia" },
          { href: lang === "ms" ? "/ms/cuti-tanpa-gaji-potongan-gaji" : "/guides/unpaid-leave-malaysia-salary-deduction", label: lang === "ms" ? "Cuti Tanpa Gaji: Potongan Gaji" : "Unpaid Leave: Salary Deduction" },
          { href: "/guides/understanding-employment-act-overtime-rules", label: "Understanding Overtime Rules" },
        ]}
      />
    </ToolPageShell>
  );
}

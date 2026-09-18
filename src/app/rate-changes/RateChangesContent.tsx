"use client";

import { Card } from "@/components/ui/Field";
import { getRates } from "@/lib/rates";
import { useLanguage } from "@/lib/i18n/context";

export default function RateChangesContent() {
  const { t } = useLanguage();
  const y2026 = getRates(2026);
  const y2025 = getRates(2025);

  const rows: { label: string; y2025: string; y2026: string; changed: boolean }[] = [
    {
      label: t("rateChangesPage.rowSocsoCeiling"),
      y2025: `RM${y2025.socso.wageCeiling.toLocaleString()}`,
      y2026: `RM${y2026.socso.wageCeiling.toLocaleString()}`,
      changed: y2025.socso.wageCeiling !== y2026.socso.wageCeiling,
    },
    {
      label: t("rateChangesPage.rowEpfNonMalaysian"),
      y2025: `${y2025.epf.nonMalaysian.employeePct}% + ${y2025.epf.nonMalaysian.employerPct}%`,
      y2026: `${y2026.epf.nonMalaysian.employeePct}% + ${y2026.epf.nonMalaysian.employerPct}%`,
      changed:
        y2025.epf.nonMalaysian.employeePct !== y2026.epf.nonMalaysian.employeePct ||
        y2025.epf.nonMalaysian.employerPct !== y2026.epf.nonMalaysian.employerPct,
    },
    {
      label: t("rateChangesPage.rowEpfBelow60"),
      y2025: `${y2025.epf.malaysianBelow60.lte5000.employeePct}% + ${y2025.epf.malaysianBelow60.lte5000.employerPct}%`,
      y2026: `${y2026.epf.malaysianBelow60.lte5000.employeePct}% + ${y2026.epf.malaysianBelow60.lte5000.employerPct}%`,
      changed: false,
    },
    {
      label: t("rateChangesPage.rowSocsoCat1"),
      y2025: `${y2025.socso.category1.employeePct}% + ${y2025.socso.category1.employerPct}%`,
      y2026: `${y2026.socso.category1.employeePct}% + ${y2026.socso.category1.employerPct}%`,
      changed: false,
    },
    {
      label: t("rateChangesPage.rowEisStandard"),
      y2025: `${y2025.eis.standard.employeePct}% + ${y2025.eis.standard.employerPct}%`,
      y2026: `${y2026.eis.standard.employeePct}% + ${y2026.eis.standard.employerPct}%`,
      changed: false,
    },
    {
      label: t("rateChangesPage.rowMinWage"),
      y2025: `RM${y2025.minimumWage.monthly.toLocaleString()}/month`,
      y2026: `RM${y2026.minimumWage.monthly.toLocaleString()}/month`,
      changed: y2025.minimumWage.monthly !== y2026.minimumWage.monthly,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("rateChangesPage.title")}</h1>
      <p className="mt-2 text-base text-muted">{t("rateChangesPage.subtitle")}</p>

      <Card className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="py-2 pr-4 font-medium">{t("rateChangesPage.rate")}</th>
                <th className="py-2 pr-4 font-medium">2025</th>
                <th className="py-2 font-medium">2026</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="py-2.5 pr-4">{r.label}</td>
                  <td className="py-2.5 pr-4 tabular-nums text-muted">{r.y2025}</td>
                  <td className={`py-2.5 tabular-nums font-medium ${r.changed ? "text-accent" : "text-foreground"}`}>
                    {r.y2026}
                    {r.changed && <span className="ml-1.5 rounded bg-accent-light px-1.5 py-0.5 text-[10px] font-semibold text-accent">{t("rateChangesPage.changed")}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-foreground">{t("rateChangesPage.whatChanged")}</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>{t("rateChangesPage.changeEpfForeign")}</li>
          <li>{t("rateChangesPage.changeSocsoCeiling")}</li>
        </ul>
        <p className="mt-4 text-xs text-muted">{t("rateChangesPage.sources")}: {y2026.sources.map((s) => s.label).join(" · ")}.</p>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import type { SalaryCalculationResult } from "@/lib/calc/types";
import { formatRM } from "@/lib/format";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/context";

export default function PdfReportButton({ result }: { result: SalaryCalculationResult }) {
  const [busy, setBusy] = useState(false);
  const { t, lang } = useLanguage();

  const handleDownload = async () => {
    setBusy(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const marginX = 48;
      let y = 56;

      const brand = "#0d7d6f";
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(brand);
      doc.text(SITE.name, marginX, y);
      doc.setFontSize(11);
      doc.setTextColor("#52645e");
      doc.setFont("helvetica", "normal");
      doc.text(t("pdf.subtitle"), marginX, (y += 18));
      doc.text(
        t("pdf.generated", { date: new Date().toLocaleDateString(lang === "ms" ? "ms-MY" : "en-MY"), year: result.rateYear }),
        marginX,
        (y += 14)
      );

      y += 20;
      doc.setDrawColor("#dde6e2");
      doc.line(marginX, y, 548, y);
      y += 26;

      const section = (title: string) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor("#10201c");
        doc.text(title, marginX, y);
        y += 16;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
      };

      const row = (label: string, value: string, bold = false) => {
        doc.setFont("helvetica", bold ? "bold" : "normal");
        doc.setTextColor("#10201c");
        doc.text(label, marginX, y);
        doc.text(value, 548, y, { align: "right" });
        y += 15;
      };

      const m = result.regularMonth;
      section(t("pdf.monthlyBreakdown"));
      row(t("pdf.grossSalary"), formatRM(m.gross));
      row(t("pdf.epfEmployee"), `- ${formatRM(m.epf.employee)}`);
      row(t("pdf.socsoEmployee"), `- ${formatRM(m.socso.employee)}`);
      row(t("pdf.eisEmployee"), `- ${formatRM(m.eis.employee)}`);
      row(t("pdf.pcb"), `- ${formatRM(m.pcb)}`);
      y += 4;
      doc.setDrawColor("#dde6e2");
      doc.line(marginX, y, 548, y);
      y += 16;
      row(t("pdf.netTakeHome"), formatRM(m.netPay), true);

      y += 26;
      section(t("pdf.employerContributions"));
      row(t("pdf.epfEmployer"), formatRM(m.epf.employer));
      row(t("pdf.socsoEmployer"), formatRM(m.socso.employer));
      row(t("pdf.eisEmployer"), formatRM(m.eis.employer));
      y += 4;
      doc.line(marginX, y, 548, y);
      y += 16;
      row(t("pdf.totalCostToEmployer"), formatRM(m.totalEmployerCost), true);

      y += 26;
      const a = result.annual;
      section(t("pdf.annualSummary"));
      row(t("pdf.annualGross"), formatRM(a.gross));
      row(t("pdf.annualDeductions"), formatRM(a.totalEmployeeDeductions));
      row(t("pdf.annualNet"), formatRM(a.netPay), true);
      row(t("pdf.annualChargeable"), formatRM(result.pcbDetail.chargeableIncome));
      row(t("pdf.annualTax"), formatRM(result.pcbDetail.annualTax));

      y += 30;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor("#52645e");
      const lines = doc.splitTextToSize(t("pdf.disclaimer"), 500);
      doc.text(lines, marginX, y);

      doc.save(`${SITE.name.toLowerCase()}-salary-estimate.pdf`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={busy}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand bg-brand-light px-4 py-2.5 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand hover:text-white hover:shadow-md disabled:opacity-60"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1.5v8m0 0-3-3m3 3 3-3M2.5 11v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {busy ? t("results.preparingPdf") : t("results.downloadPdf")}
    </button>
  );
}

"use client";

import { useState } from "react";
import type { SalaryCalculationResult } from "@/lib/calc/types";
import { formatRM } from "@/lib/format";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/context";

export default function PayslipPdfButton({
  employerName,
  employeeName,
  employeeId,
  periodLabel,
  basicSalary,
  allowances,
  result,
}: {
  employerName: string;
  employeeName: string;
  employeeId: string;
  periodLabel: string;
  basicSalary: number;
  allowances: number;
  result: SalaryCalculationResult;
}) {
  const [busy, setBusy] = useState(false);
  const { t } = useLanguage();

  const handleDownload = async () => {
    setBusy(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const marginX = 48;
      const rightX = 548;
      let y = 56;

      const brand = "#0d7d6f";
      const ink = "#10201c";
      const muted = "#52645e";
      const line = "#dde6e2";

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(muted);
      doc.text(t("payslipPage.payslipTitle"), marginX, y);
      doc.setFontSize(18);
      doc.setTextColor(ink);
      doc.text(employerName || SITE.name, marginX, (y += 22));

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10.5);
      doc.setTextColor(muted);
      doc.text(periodLabel, rightX, 56, { align: "right" });

      y += 20;
      doc.setDrawColor(line);
      doc.line(marginX, y, rightX, y);
      y += 24;

      const labelValue = (label: string, value: string) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(muted);
        doc.text(label, marginX, y);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(ink);
        doc.text(value || "—", marginX, (y += 14));
        y += 12;
      };

      labelValue(t("payslipPage.employeeLabel"), employeeName);
      labelValue(t("payslipPage.employeeIdLabel"), employeeId);

      y += 10;
      doc.setDrawColor(line);
      doc.line(marginX, y, rightX, y);
      y += 26;

      const colGap = 260;
      const leftColX = marginX;
      const rightColX = marginX + colGap;
      const sectionStartY = y;

      const section = (x: number, title: string) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(ink);
        doc.text(title, x, y);
        y += 16;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
      };

      const row = (x: number, width: number, label: string, value: string, bold = false) => {
        doc.setFont("helvetica", bold ? "bold" : "normal");
        doc.setTextColor(ink);
        doc.text(label, x, y);
        doc.text(value, x + width, y, { align: "right" });
        y += 15;
      };

      const m = result.regularMonth;

      // Earnings column
      y = sectionStartY;
      section(leftColX, t("payslipPage.earningsCol"));
      row(leftColX, 210, t("payslipPage.basicSalary"), formatRM(basicSalary));
      if (allowances > 0) row(leftColX, 210, t("payslipPage.allowances"), formatRM(allowances));
      y += 4;
      doc.setDrawColor(line);
      doc.line(leftColX, y, leftColX + 210, y);
      y += 15;
      row(leftColX, 210, t("payslipPage.grossPay"), formatRM(m.gross), true);
      const earningsEndY = y;

      // Deductions column
      y = sectionStartY;
      section(rightColX, t("payslipPage.deductionsCol"));
      row(rightColX, 210, t("results.epf"), formatRM(m.epf.employee));
      row(rightColX, 210, t("results.socso"), formatRM(m.socso.employee));
      row(rightColX, 210, t("results.eis"), formatRM(m.eis.employee));
      row(rightColX, 210, t("results.pcb"), formatRM(m.pcb));
      y += 4;
      doc.setDrawColor(line);
      doc.line(rightColX, y, rightColX + 210, y);
      y += 15;
      row(rightColX, 210, t("payslipPage.totalDeductions"), formatRM(m.totalEmployeeDeductions), true);
      const deductionsEndY = y;

      y = Math.max(earningsEndY, deductionsEndY) + 24;

      doc.setFillColor(brand);
      doc.roundedRect(marginX, y, rightX - marginX, 34, 6, 6, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor("#ffffff");
      doc.text(t("payslipPage.netPay"), marginX + 14, y + 22);
      doc.text(formatRM(m.netPay), rightX - 14, y + 22, { align: "right" });
      y += 34 + 26;

      section(leftColX, t("payslipPage.employerContributionsHeading"));
      row(leftColX, 460, t("results.epfEmployer"), formatRM(m.epf.employer));
      row(leftColX, 460, t("results.socsoEmployer"), formatRM(m.socso.employer));
      row(leftColX, 460, t("results.eisEmployer"), formatRM(m.eis.employer));
      y += 4;
      doc.setDrawColor(line);
      doc.line(leftColX, y, rightX, y);
      y += 15;
      row(leftColX, 460, t("payslipPage.totalEmployerContributions"), formatRM(m.epf.employer + m.socso.employer + m.eis.employer), true);

      y += 30;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(muted);
      const lines = doc.splitTextToSize(t("payslipPage.disclaimer"), rightX - marginX);
      doc.text(lines, marginX, y);

      const fileSlug = (employeeName || "payslip").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      doc.save(`${fileSlug || "payslip"}-${periodLabel.toLowerCase().replace(/\s+/g, "-")}.pdf`);
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
      {busy ? t("results.preparingPdf") : t("payslipPage.downloadButton")}
    </button>
  );
}

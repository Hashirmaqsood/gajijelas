import type { Metadata } from "next";
import PayslipGeneratorClient from "./PayslipGeneratorClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Payslip Template & Generator Malaysia";
const DESCRIPTION =
  "Free Malaysia payslip template — generate an itemised payslip with EPF, SOCSO, EIS and PCB calculated correctly, ready to preview or download as a PDF.";

const FAQ = [
  {
    q: "What must a Malaysian payslip legally include?",
    a: "Under Section 25A of the Employment Act 1955, a payslip must show the employer's details, the employee's name and identification, the pay period, an itemised breakdown of earnings (basic salary, allowances, overtime, bonuses), an itemised breakdown of statutory and other deductions (EPF, SOCSO, EIS, PCB, and any others), and the final net pay. A digital or PDF payslip is acceptable as long as it's accurate and accessible to the employee.",
  },
  {
    q: "Is this a legally valid payslip I can just issue to employees?",
    a: "This tool calculates the correct EPF, SOCSO, EIS and PCB figures and lays them out in standard payslip format, but you're responsible for verifying the details are accurate and complete for your specific employee before issuing it — including checking your payroll system's records match. It's built to remove the arithmetic error, not to replace your payroll compliance process entirely.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/payslip-generator",
    languages: {
      "en-MY": "https://gajijelas.com/payslip-generator",
      "ms-MY": "https://gajijelas.com/ms/payslip-generator",
      "x-default": "https://gajijelas.com/payslip-generator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/payslip-generator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <PayslipGeneratorClient />
    </>
  );
}

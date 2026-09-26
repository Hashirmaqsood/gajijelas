import type { Metadata } from "next";
import PayslipGeneratorClient from "@/app/payslip-generator/PayslipGeneratorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Templat & Penjana Slip Gaji Malaysia";
const DESCRIPTION =
  "Templat slip gaji Malaysia percuma — hasilkan slip gaji terperinci dengan EPF, SOCSO, EIS dan PCB dikira dengan betul, sedia dimuat turun sebagai PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/payslip-generator",
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
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/payslip-generator"))} />
      <PayslipGeneratorClient />
    </>
  );
}

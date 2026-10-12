import type { Metadata } from "next";
import PcbCalculatorClient from "./PcbCalculatorClient";
import en from "@/lib/i18n/en";
import { calculatorJsonLd, faqPageJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "PCB Calculator (MTD) Malaysia 2026";
const DESCRIPTION = "Free PCB calculator for Malaysia — estimate your monthly tax deduction (MTD) with individual, spouse, child, EPF and other LHDN tax reliefs applied.";

const p = en.pcbPage;
const FAQ = [
  { q: p.faqQ1, a: p.faqA1 },
  { q: p.faqQ2, a: p.faqA2 },
  { q: p.faqQ3, a: p.faqA3 },
  { q: p.faqQ4, a: p.faqA4 },
  { q: p.faqQ5, a: p.faqA5 },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/pcb-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/pcb-calculator",
      "ms-MY": "https://gajijelas.com/ms/pcb-calculator",
      "x-default": "https://gajijelas.com/pcb-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/pcb-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "PCB Calculator", path: "/pcb-calculator" }]))} />
      <PcbCalculatorClient />
    </>
  );
}

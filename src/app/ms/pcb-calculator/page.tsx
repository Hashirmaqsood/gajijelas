import type { Metadata } from "next";
import PcbCalculatorClient from "@/app/pcb-calculator/PcbCalculatorClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import ms from "@/lib/i18n/ms";

const TITLE = "Kalkulator PCB (MTD) Malaysia 2026";
const DESCRIPTION = "Kalkulator PCB percuma untuk Malaysia — anggarkan potongan cukai bulanan anda mengikut formula LHDN, termasuk pelepasan cukai anda.";

const p = ms.pcbPage;
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
    canonical: "/ms/pcb-calculator",
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
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/pcb-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <PcbCalculatorClient />
    </>
  );
}

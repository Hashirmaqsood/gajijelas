import type { Metadata } from "next";
import PcbCalculatorClient from "@/app/pcb-calculator/PcbCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator PCB (MTD) Malaysia";
const DESCRIPTION = "Kalkulator PCB percuma untuk Malaysia — anggarkan potongan cukai bulanan anda mengikut formula LHDN, termasuk pelepasan cukai anda.";

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
      <PcbCalculatorClient />
    </>
  );
}

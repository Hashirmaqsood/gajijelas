import type { Metadata } from "next";
import PcbCalculatorClient from "./PcbCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "PCB Calculator (MTD) Malaysia";
const DESCRIPTION = "Free PCB calculator for Malaysia — estimate your monthly tax deduction (MTD) with individual, spouse, child, EPF and other LHDN tax reliefs applied.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pcb-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/pcb-calculator"))} />
      <PcbCalculatorClient />
    </>
  );
}

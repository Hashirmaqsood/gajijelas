import type { Metadata } from "next";
import PcbCalculatorClient from "./PcbCalculatorClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "PCB Calculator (MTD) Malaysia 2026";
const DESCRIPTION = "Free PCB calculator for Malaysia — estimate your monthly tax deduction (MTD) with individual, spouse, child, EPF and other LHDN tax reliefs applied.";

const FAQ = [
  {
    q: "What is the minimum salary before PCB applies in Malaysia?",
    a: "For a single Malaysian employee with no children, claiming only the standard individual, EPF and SOCSO/EIS reliefs, PCB stays at RM0 up to around RM3,400 a month — above that it starts kicking in gradually. Below this point, the individual relief, EPF relief and RM400 tax rebate combine to bring your chargeable income under the taxable threshold entirely. This crossover point shifts higher if you're married or have children, and lower if you don't contribute to EPF.",
  },
  {
    q: "How much PCB will I pay for my salary?",
    a: "There's no single fixed PCB amount for a given salary — it depends on your marital status, number of children, EPF contribution and any additional reliefs you claim, since all of these reduce your chargeable income before tax applies. The lookup table above shows typical amounts for a single filer with no extra reliefs; use the calculator above with your own details for your exact figure.",
  },
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
      <PcbCalculatorClient />
    </>
  );
}

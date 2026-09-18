import type { Metadata } from "next";
import PcbCalculatorClient from "./PcbCalculatorClient";

export const metadata: Metadata = {
  title: "PCB / MTD Calculator Malaysia",
  description: "Estimate your monthly tax deduction (PCB/MTD) with individual, spouse, child, EPF and other LHDN tax reliefs applied.",
  alternates: { canonical: "/pcb-calculator" },
};

export default function Page() {
  return <PcbCalculatorClient />;
}

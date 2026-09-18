import type { Metadata } from "next";
import EpfCalculatorClient from "./EpfCalculatorClient";

export const metadata: Metadata = {
  title: "EPF / KWSP Calculator Malaysia",
  description: "Calculate your monthly EPF (KWSP) employee and employer contributions based on age, wage and nationality, using the current Third Schedule rates.",
  alternates: { canonical: "/epf-calculator" },
};

export default function Page() {
  return <EpfCalculatorClient />;
}

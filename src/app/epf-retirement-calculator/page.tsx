import type { Metadata } from "next";
import EpfRetirementClient from "./EpfRetirementClient";

export const metadata: Metadata = {
  title: "EPF Retirement & Dividend Calculator Malaysia 2026",
  description:
    "Project your EPF (KWSP) savings from today to retirement, including salary growth and compounding annual dividends.",
  alternates: { canonical: "/epf-retirement-calculator" },
};

export default function Page() {
  return <EpfRetirementClient />;
}

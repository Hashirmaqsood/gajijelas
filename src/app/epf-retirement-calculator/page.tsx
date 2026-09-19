import type { Metadata } from "next";
import EpfRetirementClient from "./EpfRetirementClient";

export const metadata: Metadata = {
  title: "EPF Retirement Goal Calculator Malaysia 2026 | Dividend Projection",
  description:
    "Free EPF retirement goal calculator — project your KWSP (EPF) savings from today to retirement, including salary growth and compounding annual dividends.",
  alternates: { canonical: "/epf-retirement-calculator" },
};

export default function Page() {
  return <EpfRetirementClient />;
}

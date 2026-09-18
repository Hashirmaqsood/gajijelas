import type { Metadata } from "next";
import CompareClient from "./CompareClient";

export const metadata: Metadata = {
  title: "Compare Two Salary Offers",
  description: "Compare two Malaysian salary offers side by side to see which one actually pays more after EPF, SOCSO, EIS and PCB deductions.",
  alternates: { canonical: "/compare" },
};

export default function Page() {
  return <CompareClient />;
}

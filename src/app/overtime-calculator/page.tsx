import type { Metadata } from "next";
import OvertimeClient from "./OvertimeClient";

export const metadata: Metadata = {
  title: "Overtime Pay Calculator Malaysia",
  description: "Calculate overtime pay for normal working days, rest days and public holidays under the Employment Act 1955.",
  alternates: { canonical: "/overtime-calculator" },
};

export default function Page() {
  return <OvertimeClient />;
}

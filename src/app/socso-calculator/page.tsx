import type { Metadata } from "next";
import SocsoCalculatorClient from "./SocsoCalculatorClient";

export const metadata: Metadata = {
  title: "SOCSO / PERKESO Calculator Malaysia",
  description: "Calculate SOCSO (PERKESO) employment injury and invalidity contributions, with the RM6,000 wage ceiling applied automatically.",
  alternates: { canonical: "/socso-calculator" },
};

export default function Page() {
  return <SocsoCalculatorClient />;
}

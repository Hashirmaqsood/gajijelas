import type { Metadata } from "next";
import SocsoCalculatorClient from "./SocsoCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "SOCSO Calculator (PERKESO & EIS) Malaysia";
const DESCRIPTION = "Free SOCSO calculator for Malaysia — work out your PERKESO employment injury, invalidity and EIS contributions, with the RM6,000 wage ceiling applied automatically.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/socso-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/socso-calculator"))} />
      <SocsoCalculatorClient />
    </>
  );
}

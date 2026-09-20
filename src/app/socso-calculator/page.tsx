import type { Metadata } from "next";
import SocsoCalculatorClient from "./SocsoCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "SOCSO / PERKESO Calculator Malaysia";
const DESCRIPTION = "Calculate SOCSO (PERKESO) employment injury and invalidity contributions, with the RM6,000 wage ceiling applied automatically.";

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

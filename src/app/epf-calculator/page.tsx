import type { Metadata } from "next";
import EpfCalculatorClient from "./EpfCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "EPF / KWSP Calculator Malaysia";
const DESCRIPTION = "Calculate your monthly EPF (KWSP) employee and employer contributions based on age, wage and nationality, using the current Third Schedule rates.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/epf-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/epf-calculator"))} />
      <EpfCalculatorClient />
    </>
  );
}

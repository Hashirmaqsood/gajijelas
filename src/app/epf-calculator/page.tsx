import type { Metadata } from "next";
import EpfCalculatorClient from "./EpfCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "EPF Calculator (KWSP) Malaysia";
const DESCRIPTION = "Free EPF calculator for Malaysia — work out monthly KWSP employee and employer contributions by age, wage and nationality, using official Third Schedule rates.";

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

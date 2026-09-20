import type { Metadata } from "next";
import EpfRetirementClient from "./EpfRetirementClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "EPF Retirement Goal Calculator Malaysia 2026 | Dividend Projection";
const DESCRIPTION =
  "Free EPF retirement goal calculator — project your KWSP (EPF) savings from today to retirement, including salary growth and compounding annual dividends.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/epf-retirement-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/epf-retirement-calculator"))} />
      <EpfRetirementClient />
    </>
  );
}

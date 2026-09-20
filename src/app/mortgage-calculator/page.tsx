import type { Metadata } from "next";
import MortgageClient from "./MortgageClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Mortgage Calculator Malaysia 2026 | Home Loan Installment & DSR";
const DESCRIPTION =
  "Free Malaysia mortgage calculator — work out your monthly home loan installment, total interest, and Debt Service Ratio (DSR) against your real take-home pay.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/mortgage-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/mortgage-calculator"))} />
      <MortgageClient />
    </>
  );
}

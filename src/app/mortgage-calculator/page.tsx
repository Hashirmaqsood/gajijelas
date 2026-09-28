import type { Metadata } from "next";
import MortgageClient from "./MortgageClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Mortgage Calculator Malaysia | Home Loan Installment & DSR";
const DESCRIPTION =
  "Free Malaysia mortgage calculator — work out your monthly home loan installment, total interest, and Debt Service Ratio (DSR) against your real take-home pay.";

const FAQ = [
  {
    q: "What DSR do Malaysian banks typically accept for a home loan?",
    a: "There's no single legal cap — each bank sets its own threshold. As a general pattern, a DSR under 30-40% is usually seen as comfortable, the 40-60% range gets closer scrutiny, and above 60-70% approval typically needs a strong income profile or collateral. Banks calculate this using your gross income and all existing debts combined, not just this one loan.",
  },
  {
    q: "Does this calculator include legal fees and stamp duty?",
    a: "No — this tool calculates only the loan installment, total interest and DSR for the loan itself. Legal fees, stamp duty, valuation fees and other one-off purchase costs are separate and aren't included here; budget for them on top of the figures above.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/mortgage-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/mortgage-calculator",
      "ms-MY": "https://gajijelas.com/ms/mortgage-calculator",
      "x-default": "https://gajijelas.com/mortgage-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/mortgage-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <MortgageClient />
    </>
  );
}

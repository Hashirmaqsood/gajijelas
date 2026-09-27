import type { Metadata } from "next";
import ProratedSalaryClient from "./ProratedSalaryClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Prorated Salary Calculator Malaysia";
const DESCRIPTION =
  "Free prorated salary calculator for Malaysia — partial-month pay for a mid-month start, resignation or unpaid leave, using the real Employment Act formula.";

const FAQ = [
  {
    q: "Is my employer allowed to use a fixed 30-day divisor instead?",
    a: "Yes, but only if the result is equal to or better than the statutory calendar-day formula. A fixed divisor that pays you less than the statutory amount for that specific month isn't compliant, even if it's written into your contract.",
  },
  {
    q: "Does this apply to a full month I worked completely?",
    a: "No — a full calendar month worked in full is paid at your full monthly salary regardless of whether that month has 28, 30 or 31 days. Proration only applies when you're being paid for less than the whole period.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/prorated-salary-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/prorated-salary-calculator",
      "ms-MY": "https://gajijelas.com/ms/prorated-salary-calculator",
      "x-default": "https://gajijelas.com/prorated-salary-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/prorated-salary-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <ProratedSalaryClient />
    </>
  );
}

import type { Metadata } from "next";
import OvertimeClient from "./OvertimeClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Overtime Pay Calculator Malaysia";
const DESCRIPTION = "Calculate overtime pay for normal working days, rest days and public holidays under the Employment Act 1955.";

const FAQ = [
  {
    q: "Does overtime apply to salaries above RM4,000?",
    a: "The statutory rates are guaranteed only to employees covered by the Employment Act's First Schedule — generally those earning RM4,000/month or less, plus manual/machinery-operating workers regardless of salary. Above that, your overtime entitlement comes from your employment contract instead.",
  },
  {
    q: "What if I work overtime on a rest day and exceed my normal hours?",
    a: "The rest-day calculation already accounts for this — up to a full normal day's hours earns a full day's wages, and any hours beyond that earn an additional 2× hourly rate on top, not the normal-day 1.5× multiplier.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/overtime-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/overtime-calculator",
      "ms-MY": "https://gajijelas.com/ms/overtime-calculator",
      "x-default": "https://gajijelas.com/overtime-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/overtime-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <OvertimeClient />
    </>
  );
}

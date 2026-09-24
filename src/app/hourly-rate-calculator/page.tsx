import type { Metadata } from "next";
import HourlyRateClient from "./HourlyRateClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Hourly & Daily Rate Calculator Malaysia";
const DESCRIPTION = "Convert your monthly salary into a daily and hourly rate using the Employment Act's 26-working-day convention.";

const FAQ = [
  {
    q: "Why 26 days and not the actual number of days in the month?",
    a: "The Employment Act uses 26 as a standard divisor regardless of whether the month has 28, 30 or 31 days, so your daily rate stays consistent year-round rather than fluctuating with the calendar.",
  },
  {
    q: "Does this rate include overtime or allowances?",
    a: "No — this converts your base monthly salary only. Bonuses, allowances and overtime pay are calculated separately and shouldn't be included in the salary figure you enter here.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hourly-rate-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/hourly-rate-calculator",
      "ms-MY": "https://gajijelas.com/ms/hourly-rate-calculator",
      "x-default": "https://gajijelas.com/hourly-rate-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/hourly-rate-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <HourlyRateClient />
    </>
  );
}

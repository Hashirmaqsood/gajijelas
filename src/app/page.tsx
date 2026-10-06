import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { SITE } from "@/lib/site";
import { computeSalaryExamples } from "@/lib/content/salaryExamples";
import { faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import en from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: "Salary Calculator Malaysia 2026 — Net Pay, EPF, SOCSO, PCB",
  description:
    "Free Malaysia salary & payroll calculator — see net take-home pay after EPF, SOCSO, EIS and PCB, plus employer cost. Official 2026 KWSP, PERKESO & LHDN rates.",
  alternates: {
    canonical: "/",
    languages: {
      "en-MY": "https://gajijelas.com/",
      "ms-MY": "https://gajijelas.com/ms",
      "x-default": "https://gajijelas.com/",
    },
  },
};

const FAQ = [
  { q: en.home.faqQ1, a: en.home.faqA1 },
  { q: en.home.faqQ2, a: en.home.faqA2 },
  { q: en.home.faqQ3, a: en.home.faqA3 },
  { q: en.home.faqQ4, a: en.home.faqA4 },
  { q: en.home.faqQ5, a: en.home.faqA5 },
];

export default function HomePage() {
  const rates = getRates(CURRENT_RATE_YEAR);
  const examples = computeSalaryExamples(rates);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: SITE.url,
    description: SITE.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <HomeContent rates={rates} examples={examples} />
    </>
  );
}

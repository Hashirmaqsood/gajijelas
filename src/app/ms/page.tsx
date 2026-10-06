import type { Metadata } from "next";
import HomeContent from "@/app/HomeContent";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { SITE } from "@/lib/site";
import { computeSalaryExamples } from "@/lib/content/salaryExamples";
import { faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import ms from "@/lib/i18n/ms";

export const metadata: Metadata = {
  title: "Kalkulator Gaji Malaysia 2026 — Kira Gaji Bersih, EPF & PCB",
  description:
    "Kalkulator gaji Malaysia percuma — kira gaji bersih (gaji bawa balik) selepas EPF, SOCSO, EIS dan PCB, serta kos majikan. Kadar rasmi KWSP, PERKESO & LHDN 2026.",
  alternates: {
    canonical: "/ms",
    languages: {
      "en-MY": "https://gajijelas.com/",
      "ms-MY": "https://gajijelas.com/ms",
      "x-default": "https://gajijelas.com/",
    },
  },
};

const FAQ = [
  { q: ms.home.faqQ1, a: ms.home.faqA1 },
  { q: ms.home.faqQ2, a: ms.home.faqA2 },
  { q: ms.home.faqQ3, a: ms.home.faqA3 },
  { q: ms.home.faqQ4, a: ms.home.faqA4 },
  { q: ms.home.faqQ5, a: ms.home.faqA5 },
];

export default function MsHomePage() {
  const rates = getRates(CURRENT_RATE_YEAR);
  const examples = computeSalaryExamples(rates);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: `${SITE.url}/ms`,
    description: metadata.description,
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

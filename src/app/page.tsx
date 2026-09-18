import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Malaysia Salary Calculator — EPF, SOCSO, EIS & PCB",
  description:
    "Calculate your exact Malaysian take-home pay after EPF, SOCSO, EIS and PCB/MTD deductions. Free, private, and updated with official KWSP, PERKESO and LHDN rates.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const rates = getRates(CURRENT_RATE_YEAR);

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
      <HomeContent rates={rates} />
    </>
  );
}

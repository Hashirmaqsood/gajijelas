import type { Metadata } from "next";
import HomeContent from "@/app/HomeContent";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kalkulator Gaji Malaysia — Gaji Bawa Balik Sebenar",
  description:
    "Masukkan gaji kasar anda sekali dan lihat gaji bersih sebenar selepas EPF, SOCSO, EIS dan PCB — dikira terus dalam pelayar anda, setiap Ringgit dijelaskan.",
  alternates: {
    canonical: "/ms",
    languages: {
      "en-MY": "https://gajijelas.com/",
      "ms-MY": "https://gajijelas.com/ms",
      "x-default": "https://gajijelas.com/",
    },
  },
};

export default function MsHomePage() {
  const rates = getRates(CURRENT_RATE_YEAR);

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
      <HomeContent rates={rates} />
    </>
  );
}

import type { Metadata } from "next";
import EpfAccountSplitClient from "@/app/epf-account-split-calculator/EpfAccountSplitClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Pecahan Akaun EPF Malaysia";
const DESCRIPTION = "Sejak Penstrukturan Semula Akaun EPF Mei 2024, setiap caruman dipecahkan kepada tiga akaun berbanding dua — lihat dengan tepat berapa banyak pergi ke mana.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/epf-account-split-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/epf-account-split-calculator",
      "ms-MY": "https://gajijelas.com/ms/epf-account-split-calculator",
      "x-default": "https://gajijelas.com/epf-account-split-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/epf-account-split-calculator"))} />
      <EpfAccountSplitClient />
    </>
  );
}

import type { Metadata } from "next";
import EpfCalculatorClient from "@/app/epf-calculator/EpfCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator EPF (KWSP) Malaysia";
const DESCRIPTION = "Kalkulator EPF percuma untuk Malaysia — kira caruman KWSP bulanan anda, apa yang ditolak daripada gaji anda dan apa yang ditambah oleh majikan anda.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/epf-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/epf-calculator",
      "ms-MY": "https://gajijelas.com/ms/epf-calculator",
      "x-default": "https://gajijelas.com/epf-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/epf-calculator"))} />
      <EpfCalculatorClient />
    </>
  );
}

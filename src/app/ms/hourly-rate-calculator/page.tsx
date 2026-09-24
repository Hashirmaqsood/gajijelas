import type { Metadata } from "next";
import HourlyRateClient from "@/app/hourly-rate-calculator/HourlyRateClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Kadar Sejam & Sehari Malaysia";
const DESCRIPTION = "Tukar gaji bulanan kepada kadar harian atau sejam — berguna untuk pro-rata gaji, mengira potongan cuti tanpa gaji, atau lebih masa.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/hourly-rate-calculator",
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
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/hourly-rate-calculator"))} />
      <HourlyRateClient />
    </>
  );
}

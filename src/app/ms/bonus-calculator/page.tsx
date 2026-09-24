import type { Metadata } from "next";
import BonusClient from "@/app/bonus-calculator/BonusClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Cukai Bonus Malaysia";
const DESCRIPTION = "Lihat berapa sebenarnya bonus anda selepas EPF dan cukai PCB tambahan yang dicetuskannya — bukan sekadar angka kasar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/bonus-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/bonus-calculator",
      "ms-MY": "https://gajijelas.com/ms/bonus-calculator",
      "x-default": "https://gajijelas.com/bonus-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/bonus-calculator"))} />
      <BonusClient />
    </>
  );
}

import type { Metadata } from "next";
import MortgageClient from "@/app/mortgage-calculator/MortgageClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Gadai Janji Malaysia";
const DESCRIPTION = "Kira ansuran bulanan pinjaman rumah anda dan lihat bagaimana ia dibandingkan dengan gaji bawa balik sebenar anda, bukan sekadar gaji kasar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/mortgage-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/mortgage-calculator",
      "ms-MY": "https://gajijelas.com/ms/mortgage-calculator",
      "x-default": "https://gajijelas.com/mortgage-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/mortgage-calculator"))} />
      <MortgageClient />
    </>
  );
}

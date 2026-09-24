import type { Metadata } from "next";
import SocsoCalculatorClient from "@/app/socso-calculator/SocsoCalculatorClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator SOCSO (PERKESO & EIS) Malaysia";
const DESCRIPTION = "Kalkulator SOCSO percuma untuk Malaysia — anggarkan caruman PERKESO dan EIS anda, dihadkan pada siling gaji RM6,000 yang sama.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/socso-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/socso-calculator",
      "ms-MY": "https://gajijelas.com/ms/socso-calculator",
      "x-default": "https://gajijelas.com/socso-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/socso-calculator"))} />
      <SocsoCalculatorClient />
    </>
  );
}

import type { Metadata } from "next";
import SocsoCalculatorClient from "./SocsoCalculatorClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "SOCSO Calculator (PERKESO & EIS) Malaysia 2026";
const DESCRIPTION = "Free SOCSO calculator for Malaysia — work out your PERKESO, EIS and new LINDUNG 24 Jam contributions, with the RM6,000 wage ceiling applied automatically.";

const FAQ = [
  {
    q: "What if my wage is above RM6,000?",
    a: "SOCSO and EIS are both capped at a RM6,000 wage ceiling, so contributions are calculated on RM6,000 regardless of how much more you actually earn.",
  },
  {
    q: "Is SOCSO the same as EPF?",
    a: "No — EPF is a retirement savings scheme where contributions stay in your own account, while SOCSO and EIS are insurance schemes that pool contributions to pay out benefits (medical, disability, unemployment) when something goes wrong. You don't get SOCSO or EIS contributions back as savings.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/socso-calculator",
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
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/socso-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <SocsoCalculatorClient />
    </>
  );
}

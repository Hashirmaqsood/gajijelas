import type { Metadata } from "next";
import BonusClient from "./BonusClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Bonus Tax Calculator Malaysia | Net Bonus After PCB & EPF";
const DESCRIPTION =
  "Free bonus calculator for Malaysia — see your real net bonus after the extra EPF and PCB tax a one-off bonus triggers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/bonus-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/bonus-calculator"))} />
      <BonusClient />
    </>
  );
}

import type { Metadata } from "next";
import EpfAccountSplitClient from "./EpfAccountSplitClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "EPF Account Split Calculator — Persaraan & Sejahtera";
const DESCRIPTION =
  "See exactly how your EPF contribution splits across Akaun Persaraan (75%), Akaun Sejahtera (15%) and Akaun Fleksibel (10%) under the 2024 account restructuring.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/epf-account-split-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/epf-account-split-calculator"))} />
      <EpfAccountSplitClient />
    </>
  );
}

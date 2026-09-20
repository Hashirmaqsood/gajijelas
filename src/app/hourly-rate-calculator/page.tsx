import type { Metadata } from "next";
import HourlyRateClient from "./HourlyRateClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Hourly & Daily Rate Calculator Malaysia";
const DESCRIPTION = "Convert your monthly salary into a daily and hourly rate using the Employment Act's 26-working-day convention.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hourly-rate-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/hourly-rate-calculator"))} />
      <HourlyRateClient />
    </>
  );
}

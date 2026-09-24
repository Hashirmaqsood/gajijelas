import type { Metadata } from "next";
import EpfRetirementClient from "./EpfRetirementClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "EPF Retirement Calculator Malaysia | Dividend Projection";
const DESCRIPTION =
  "Free EPF retirement goal calculator — project your KWSP (EPF) savings from today to retirement, including salary growth and compounding annual dividends.";

const FAQ = [
  {
    q: "How is my EPF dividend actually calculated?",
    a: "EPF calculates your dividend based on your daily aggregate balance throughout the year, not just a single balance snapshot. New contributions start earning dividends from the month after they're credited, and the annual payout is based on your savings as at 1 January. The declared rate — set once a year from EPF's actual investment performance — is then applied to that daily balance.",
  },
  {
    q: "Is the EPF dividend rate guaranteed?",
    a: "Only the minimum is — 2.50% a year for Simpanan Konvensional, set by law. The actual declared rate is usually higher and depends on EPF's real investment performance that year, so it varies annually and isn't something you can rely on beyond that legal floor for planning purposes.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/epf-retirement-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/epf-retirement-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <EpfRetirementClient />
    </>
  );
}

import type { Metadata } from "next";
import RateChangesContent from "./RateChangesContent";

export const metadata: Metadata = {
  title: "Rate Change History",
  description: "See what changed year over year in Malaysia's EPF, SOCSO, EIS and minimum wage rates, with sources.",
  alternates: { canonical: "/rate-changes" },
};

export default function RateChangesPage() {
  return <RateChangesContent />;
}

import type { Metadata } from "next";
import HourlyRateClient from "./HourlyRateClient";

export const metadata: Metadata = {
  title: "Hourly & Daily Rate Calculator Malaysia",
  description: "Convert your monthly salary into a daily and hourly rate using the Employment Act's 26-working-day convention.",
  alternates: { canonical: "/hourly-rate-calculator" },
};

export default function Page() {
  return <HourlyRateClient />;
}

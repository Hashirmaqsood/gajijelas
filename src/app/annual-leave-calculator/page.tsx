import type { Metadata } from "next";
import AnnualLeaveClient from "./AnnualLeaveClient";

export const metadata: Metadata = {
  title: "Annual Leave Entitlement Calculator Malaysia",
  description: "Work out your statutory annual leave entitlement and pro-rate it for a partial year of service under the Employment Act 1955.",
  alternates: { canonical: "/annual-leave-calculator" },
};

export default function Page() {
  return <AnnualLeaveClient />;
}

export const SITE = {
  name: "GajiJelas",
  tagline: "Know your real take-home pay",
  description:
    "A free, privacy-first Malaysian salary calculator. See your exact take-home pay after EPF, SOCSO, EIS and PCB/MTD — calculated entirely in your browser, with every number explained.",
  url: "https://gajijelas.vercel.app",
} as const;

/** Feedback/corrections channel — deliberately not a personal email. */
export const CONTACT_URL = "https://github.com/Hashirmaqsood/gajijelas/issues/new";

export const NAV_LINKS = [
  { href: "/", label: "Salary Calculator" },
  { href: "/compare", label: "Compare Offers" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
] as const;

export const TOOL_LINKS = [
  { href: "/", label: "Full Take-Home Salary Calculator", description: "Complete breakdown: EPF, SOCSO, EIS, PCB, and net pay." },
  { href: "/epf-calculator", label: "EPF / KWSP Calculator", description: "Employee & employer EPF contributions by age and wage." },
  { href: "/socso-calculator", label: "SOCSO / PERKESO Calculator", description: "Employment injury & invalidity contributions." },
  { href: "/pcb-calculator", label: "PCB / MTD Calculator", description: "Monthly tax deduction with reliefs applied." },
  { href: "/hourly-rate-calculator", label: "Hourly & Daily Rate Calculator", description: "Convert monthly salary to daily and hourly rates." },
  { href: "/overtime-calculator", label: "Overtime Pay Calculator", description: "Normal day, rest day and public holiday OT rates." },
  { href: "/annual-leave-calculator", label: "Annual Leave Calculator", description: "Entitlement and pro-rating under the Employment Act." },
] as const;

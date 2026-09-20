export const SITE = {
  name: "GajiJelas",
  tagline: "Know your real take-home pay",
  description:
    "A free, privacy-first Malaysian salary calculator. See your exact take-home pay after EPF, SOCSO, EIS and PCB/MTD — calculated entirely in your browser, with every number explained.",
  url: "https://gajijelas.com",
  contactEmail: "gajijelas@gmail.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Salary Calculator" },
  { href: "/compare", label: "Compare Offers" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
] as const;

export const TOOL_LINKS = [
  { href: "/", label: "Full Take-Home Salary Calculator", description: "Complete breakdown: EPF, SOCSO, EIS, PCB, and net pay." },
  { href: "/epf-calculator", label: "EPF / KWSP Calculator", description: "Employee & employer EPF contributions by age and wage." },
  { href: "/epf-retirement-calculator", label: "EPF Retirement & Dividend Calculator", description: "Project your EPF savings growth from today to retirement." },
  { href: "/epf-account-split-calculator", label: "EPF Account Split Calculator", description: "See your EPF contribution split across Akaun Persaraan, Sejahtera and Fleksibel." },
  { href: "/socso-calculator", label: "SOCSO / PERKESO Calculator", description: "Employment injury & invalidity contributions." },
  { href: "/pcb-calculator", label: "PCB / MTD Calculator", description: "Monthly tax deduction with reliefs applied." },
  { href: "/hourly-rate-calculator", label: "Hourly & Daily Rate Calculator", description: "Convert monthly salary to daily and hourly rates." },
  { href: "/overtime-calculator", label: "Overtime Pay Calculator", description: "Normal day, rest day and public holiday OT rates." },
  { href: "/annual-leave-calculator", label: "Annual Leave Calculator", description: "Entitlement and pro-rating under the Employment Act." },
  { href: "/mortgage-calculator", label: "Mortgage Calculator", description: "Home loan installment and Debt Service Ratio against your take-home pay." },
] as const;

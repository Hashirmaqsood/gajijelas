// English <-> Malay URL pairs for pages that have a real, indexable /ms
// counterpart (Phase 1: homepage + calculators only — guides aren't
// translated yet, so they're deliberately not listed here).
export const LOCALIZED_PATHS: [en: string, ms: string][] = [
  ["/", "/ms"],
  ["/epf-calculator", "/ms/epf-calculator"],
  ["/epf-retirement-calculator", "/ms/epf-retirement-calculator"],
  ["/epf-account-split-calculator", "/ms/epf-account-split-calculator"],
  ["/socso-calculator", "/ms/socso-calculator"],
  ["/pcb-calculator", "/ms/pcb-calculator"],
  ["/hourly-rate-calculator", "/ms/hourly-rate-calculator"],
  ["/overtime-calculator", "/ms/overtime-calculator"],
  ["/annual-leave-calculator", "/ms/annual-leave-calculator"],
  ["/mortgage-calculator", "/ms/mortgage-calculator"],
  ["/zakat-calculator", "/ms/zakat-calculator"],
  ["/bonus-calculator", "/ms/bonus-calculator"],
  ["/payslip-generator", "/ms/payslip-generator"],
];

/** Returns the other-language URL for a localized page, or null if this path has no counterpart. */
export function getAlternatePath(pathname: string): string | null {
  for (const [en, ms] of LOCALIZED_PATHS) {
    if (pathname === en) return ms;
    if (pathname === ms) return en;
  }
  return null;
}

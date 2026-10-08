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
  ["/prorated-salary-calculator", "/ms/prorated-salary-calculator"],
  ["/salary-increment-calculator", "/ms/salary-increment-calculator"],
  ["/income-tax-calculator", "/ms/income-tax-calculator"],
  ["/guides/epf-dividend-2025-rate-history", "/ms/dividen-kwsp-2025"],
  ["/guides/tax-relief-2026-malaysia-ya-2025", "/ms/pelepasan-cukai-2026"],
  ["/guides/resignation-notice-period-malaysia", "/ms/notis-berhenti-kerja"],
  ["/guides/epf-dividend-2026-what-we-know", "/ms/dividen-kwsp-2026"],
  ["/guides/what-is-perkeso-socso-same", "/ms/apa-itu-perkeso"],
  ["/guides/income-tax-malaysia-what-salary-is-taxable", "/ms/gaji-berapa-kena-cukai-pendapatan"],
  ["/guides/how-to-check-epf-balance-statement", "/ms/semak-penyata-kwsp"],
  ["/guides/income-tax-number-tin-malaysia", "/ms/no-cukai-pendapatan-tin"],
  ["/guides/gross-net-basic-salary-meaning-malaysia", "/ms/maksud-gaji-kasar-gaji-bersih"],
  ["/guides/daily-hourly-rate-calculation-malaysia", "/ms/cara-kira-gaji-sehari-sejam"],
  ["/guides/understanding-employment-act-overtime-rules", "/ms/kerja-lebih-masa-kadar-cara-kira"],
  ["/guides/employment-act-1955-employee-rights-summary", "/ms/akta-kerja-1955-hak-pekerja"],
  ["/guides/what-is-pcb-mtd-malaysia", "/ms/apa-itu-pcb"],
  ["/guides/how-much-salary-to-buy-a-house-malaysia", "/ms/berapa-gaji-untuk-beli-rumah"],
  ["/guides/minimum-wage-malaysia-2026-take-home-pay", "/ms/gaji-minimum-2026"],
  ["/guides/epf-contribution-table-2026-employee-employer", "/ms/jadual-caruman-kwsp-2026"],
  ["/guides/maternity-leave-malaysia-employment-act", "/ms/cuti-bersalin-swasta-akta-kerja"],
  ["/guides/paternity-leave-malaysia-employment-act", "/ms/cuti-paterniti-cuti-isteri-bersalin"],
  ["/guides/annual-leave-sick-leave-entitlement-malaysia", "/ms/cuti-tahunan-cuti-sakit-akta-kerja"],
  ["/guides/working-hours-malaysia-employment-act", "/ms/waktu-bekerja-akta-kerja"],
  ["/guides/unpaid-leave-malaysia-salary-deduction", "/ms/cuti-tanpa-gaji-potongan-gaji"],
  ["/guides/eis-perkeso-how-to-claim-benefits-malaysia", "/ms/eis-perkeso-cara-tuntut"],
];

/** Returns the other-language URL for a localized page, or null if this path has no counterpart. */
export function getAlternatePath(pathname: string): string | null {
  for (const [en, ms] of LOCALIZED_PATHS) {
    if (pathname === en) return ms;
    if (pathname === ms) return en;
  }
  return null;
}

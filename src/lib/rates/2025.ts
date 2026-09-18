import type { StatutoryRates } from "./types";
import rates2026 from "./2026";

/**
 * Statutory rates in force for salaries paid January–September 2025, before
 * the October 2025 changes. Kept mainly so the "compare years" toggle can
 * show a real, citable difference: non-Malaysian employees had no mandatory
 * EPF contribution in this period (rate below is the nominal RM0 / voluntary
 * arrangement, shown as 0% here), whereas the SOCSO/EIS RM6,000 ceiling
 * (effective Oct 2024) and PCB brackets were already the same as 2026.
 */
const rates2025: StatutoryRates = {
  ...rates2026,
  year: 2025,
  lastUpdated: "2026-09-18",
  effectiveFrom: "2025-01-01",
  epf: {
    ...rates2026.epf,
    nonMalaysian: { employeePct: 0, employerPct: 0 },
  },
  sources: [
    ...rates2026.sources,
    { label: "RinggitPlus – Mandatory EPF contributions for foreign workers begin Oct 2025", url: "https://ringgitplus.com/en/blog/personal-finance-news/mandatory-epf-contributions-for-foreign-workers-begin-oct-2025.html" },
  ],
};

export default rates2025;

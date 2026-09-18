import type { Lang } from "@/lib/i18n/context";

export interface PrivacySection {
  heading: string;
  body: string;
}

function buildEn(siteName: string): PrivacySection[] {
  return [
    {
      heading: "The short version",
      body: `${siteName}'s calculators run entirely in your browser. The salary, bonus, marital status, children and other figures you type in are never sent to our servers, never logged, and never stored anywhere outside your own device. Closing the tab or refreshing the page erases everything you entered.`,
    },
    {
      heading: "What we don't collect",
      body: "We do not require an account or any personal information to use any calculator on this site. We do not gate the calculation results behind a lead-generation form. We do not sell, share, or otherwise monetise the numbers you type into a calculator, because we never receive them in the first place.",
    },
    {
      heading: "The PDF report",
      body: "The PDF report feature generates your document locally in your browser using your device's own processing power. The file never passes through our servers, and downloading it does not send anything anywhere.",
    },
    {
      heading: "Analytics and cookies",
      body: "We may use privacy-respecting, aggregated analytics (such as page-view counts) to understand which tools are useful and which pages need improvement. This data is anonymised and is never linked to the salary figures you calculate, which — again — never leave your browser to begin with.",
    },
    {
      heading: "Your rights under the PDPA",
      body: "Malaysia's Personal Data Protection Act 2010 (PDPA) gives you rights over personal data that's collected about you. Because this site doesn't collect any personal data in the first place, there's nothing held about you to access, correct, or delete.",
    },
    {
      heading: "Changes to this policy",
      body: 'If this policy changes — for example, if we introduce a new feature that does collect personal data — we\'ll update this page and the "last updated" date above before that feature goes live.',
    },
  ];
}

function buildMs(siteName: string): PrivacySection[] {
  return [
    {
      heading: "Versi ringkas",
      body: `Kalkulator ${siteName} berjalan sepenuhnya dalam pelayar anda. Gaji, bonus, status perkahwinan, anak dan angka lain yang anda masukkan tidak pernah dihantar ke pelayan kami, tidak pernah direkodkan, dan tidak pernah disimpan di mana-mana luar peranti anda sendiri. Menutup tab atau menyegar semula halaman memadamkan semua yang anda masukkan.`,
    },
    {
      heading: "Apa yang kami tidak kumpul",
      body: "Kami tidak memerlukan akaun atau sebarang maklumat peribadi untuk menggunakan mana-mana kalkulator di laman ini. Kami tidak menyekat keputusan pengiraan di belakang borang penjanaan petunjuk (lead). Kami tidak menjual, berkongsi, atau mengewangkan angka yang anda masukkan ke dalam kalkulator, kerana kami tidak pernah menerimanya pada mulanya.",
    },
    {
      heading: "Laporan PDF",
      body: "Ciri laporan PDF menjana dokumen anda secara tempatan dalam pelayar anda menggunakan kuasa pemprosesan peranti anda sendiri. Fail tersebut tidak pernah melalui pelayan kami, dan memuat turunnya tidak menghantar apa-apa ke mana-mana.",
    },
    {
      heading: "Analitik dan kuki",
      body: "Kami mungkin menggunakan analitik agregat yang menghormati privasi (seperti kiraan paparan halaman) untuk memahami alat mana yang berguna dan halaman mana yang perlu diperbaiki. Data ini dinamakan semula (anonymised) dan tidak pernah dikaitkan dengan angka gaji yang anda kira, yang — sekali lagi — tidak pernah meninggalkan pelayar anda pada mulanya.",
    },
    {
      heading: "Hak anda di bawah PDPA",
      body: "Akta Perlindungan Data Peribadi 2010 Malaysia (PDPA) memberi anda hak ke atas data peribadi yang dikumpul tentang anda. Kerana laman ini tidak mengumpul sebarang data peribadi pada mulanya, tidak ada apa-apa yang disimpan tentang anda untuk diakses, dibetulkan, atau dipadamkan.",
    },
    {
      heading: "Perubahan kepada dasar ini",
      body: 'Jika dasar ini berubah — contohnya, jika kami memperkenalkan ciri baharu yang mengumpul data peribadi — kami akan mengemas kini halaman ini dan tarikh "terakhir dikemas kini" di atas sebelum ciri tersebut dilancarkan.',
    },
  ];
}

export function getPrivacySections(lang: Lang, siteName: string): PrivacySection[] {
  return lang === "ms" ? buildMs(siteName) : buildEn(siteName);
}

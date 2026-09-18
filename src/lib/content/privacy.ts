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
      body: "We do not require an account, an email address, or a phone number to use any calculator on this site. We do not gate the calculation results behind a lead-generation form. We do not sell, share, or otherwise monetise the numbers you type into a calculator, because we never receive them in the first place.",
    },
    {
      heading: "If you choose to download or email a report",
      body: "The PDF report feature generates your document locally in your browser using your device's own processing power — the file never passes through our servers either. If a future version of this site offers to email a copy of your report to you, that will always be a clearly optional, opt-in action that asks for your explicit consent and only collects the email address needed to send that one report, in line with Malaysia's Personal Data Protection Act 2010 (PDPA). We will never pre-tick that option or make it a condition of seeing your results.",
    },
    {
      heading: "Analytics and cookies",
      body: "We may use privacy-respecting, aggregated analytics (such as page-view counts) to understand which tools are useful and which pages need improvement. This data is anonymised and is never linked to the salary figures you calculate, which — again — never leave your browser to begin with.",
    },
    {
      heading: "Your rights under the PDPA",
      body: "If a future feature ever does collect personal data from you (for example, an opt-in report-by-email feature), you would have the right under the PDPA to access, correct, or request deletion of that data. Today, no such feature is active, and no personal data is collected in the first place.",
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
      body: "Kami tidak memerlukan akaun, alamat e-mel, atau nombor telefon untuk menggunakan mana-mana kalkulator di laman ini. Kami tidak menyekat keputusan pengiraan di belakang borang penjanaan petunjuk (lead). Kami tidak menjual, berkongsi, atau mengewangkan angka yang anda masukkan ke dalam kalkulator, kerana kami tidak pernah menerimanya pada mulanya.",
    },
    {
      heading: "Jika anda memilih untuk memuat turun atau menghantar laporan melalui e-mel",
      body: "Ciri laporan PDF menjana dokumen anda secara tempatan dalam pelayar anda menggunakan kuasa pemprosesan peranti anda sendiri — fail tersebut juga tidak pernah melalui pelayan kami. Jika versi masa depan laman ini menawarkan untuk menghantar salinan laporan anda melalui e-mel, itu akan sentiasa menjadi tindakan pilihan yang jelas dan memerlukan persetujuan (opt-in) yang meminta kebenaran jelas anda dan hanya mengumpul alamat e-mel yang diperlukan untuk menghantar laporan tersebut, selaras dengan Akta Perlindungan Data Peribadi 2010 Malaysia (PDPA). Kami tidak akan pernah menanda pra-pilih pilihan tersebut atau menjadikannya syarat untuk melihat keputusan anda.",
    },
    {
      heading: "Analitik dan kuki",
      body: "Kami mungkin menggunakan analitik agregat yang menghormati privasi (seperti kiraan paparan halaman) untuk memahami alat mana yang berguna dan halaman mana yang perlu diperbaiki. Data ini dinamakan semula (anonymised) dan tidak pernah dikaitkan dengan angka gaji yang anda kira, yang — sekali lagi — tidak pernah meninggalkan pelayar anda pada mulanya.",
    },
    {
      heading: "Hak anda di bawah PDPA",
      body: "Jika ciri masa depan pernah mengumpul data peribadi daripada anda (contohnya, ciri laporan-melalui-e-mel pilihan), anda akan mempunyai hak di bawah PDPA untuk mengakses, membetulkan, atau memohon pemadaman data tersebut. Pada masa ini, tiada ciri sedemikian aktif, dan tiada data peribadi dikumpul pada mulanya.",
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

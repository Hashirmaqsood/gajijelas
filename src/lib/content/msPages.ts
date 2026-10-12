export interface MsPageLink {
  href: string;
  title: string;
  description: string;
}

/** Malay-language articles, newest topics first within each theme. Used by the /ms/panduan hub. */
export const MS_ARTICLES: MsPageLink[] = [
  { href: "/ms/dividen-kwsp-2026", title: "Dividen KWSP 2026: Bila Diumumkan & Masuk Akaun?", description: "Bila dividen KWSP 2026 diumumkan dan dikreditkan, serta kadar yang dijangka." },
  { href: "/ms/dividen-kwsp-2025", title: "Dividen KWSP 2025: Kadar 6.15%, Sejarah & Cara Semak", description: "Kadar dividen KWSP 2025, sejarah kadar beberapa tahun dan cara menyemak dividen anda." },
  { href: "/ms/jadual-caruman-kwsp-2026", title: "Jadual Caruman KWSP 2026: Kadar Pekerja & Majikan", description: "Kadar caruman 11% pekerja dan 13% atau 12% majikan, dengan jadual mengikut gaji." },
  { href: "/ms/semak-penyata-kwsp", title: "Semak Penyata & Baki KWSP: Cara i-Akaun, Kiosk, IC", description: "Langkah menyemak baki dan penyata KWSP anda dalam talian." },
  { href: "/ms/gaji-minimum-2026", title: "Gaji Minimum 2026: RM1,700 dan Gaji Bersih", description: "Gaji minimum RM1,700 sebulan, potongan KWSP, PERKESO, EIS dan gaji bawa balik." },
  { href: "/ms/maksud-gaji-kasar-gaji-bersih", title: "Maksud Gaji Kasar, Gaji Bersih & Gaji Pokok: Beza", description: "Beza antara gaji pokok, gaji kasar dan gaji bersih pada slip gaji." },
  { href: "/ms/cara-kira-gaji-sehari-sejam", title: "Cara Kira Gaji Sehari & Sejam: Formula Akta Kerja", description: "Formula gaji sehari dan sejam mengikut Akta Kerja, dengan jadual contoh." },
  { href: "/ms/apa-itu-perkeso", title: "Apa Itu PERKESO? Maksud, Beza dengan SOCSO & EIS", description: "PERKESO dan SOCSO ialah organisasi yang sama; apa yang dilindungi dan siapa yang mencarum." },
  { href: "/ms/eis-perkeso-cara-tuntut", title: "EIS PERKESO: Cara Tuntut Faedah Selepas Hilang Kerja", description: "Siapa yang layak, tempoh 60 hari, jenis faedah EIS dan langkah memohon." },
  { href: "/ms/apa-itu-pcb", title: "Apa Itu PCB? Maksud Potongan Cukai Bulanan & Cara Kira", description: "Maksud PCB atau MTD, bagaimana ia dikira dan jadual PCB mengikut gaji." },
  { href: "/ms/gaji-berapa-kena-cukai-pendapatan", title: "Gaji Berapa Kena Cukai Pendapatan? Jadual Mengikut Gaji", description: "Jadual cukai pendapatan mengikut gaji bulanan bagi pekerja bujang." },
  { href: "/ms/no-cukai-pendapatan-tin", title: "No. Cukai Pendapatan (TIN): Cara Semak & Dapatkan", description: "Apa itu nombor cukai pendapatan, cara semak dan cara mendaftar." },
  { href: "/ms/pelepasan-cukai-2026", title: "Pelepasan Cukai 2026 (TA 2025): Senarai Penuh & Jumlah", description: "Senarai lengkap pelepasan cukai individu LHDN dengan jumlah terkini." },
  { href: "/ms/akta-kerja-1955-hak-pekerja", title: "Akta Kerja 1955: Ringkasan Hak Pekerja Terkini", description: "Waktu bekerja, kerja lebih masa, cuti, notis dan hak lain selepas pindaan 2022." },
  { href: "/ms/waktu-bekerja-akta-kerja", title: "Waktu Bekerja Mengikut Akta Kerja: Had Jam Sehari", description: "Had 8 jam sehari dan 45 jam seminggu, waktu rehat dan hari rehat." },
  { href: "/ms/kerja-lebih-masa-kadar-cara-kira", title: "Kerja Lebih Masa (OT): Kadar & Cara Kira Akta Kerja", description: "Kadar OT hari biasa, hari rehat dan cuti umum dengan contoh pengiraan." },
  { href: "/ms/cuti-tahunan-cuti-sakit-akta-kerja", title: "Cuti Tahunan & Cuti Sakit Pekerja Swasta 2026", description: "Kelayakan cuti tahunan 8, 12 atau 16 hari dan cuti sakit mengikut tempoh khidmat." },
  { href: "/ms/cuti-bersalin-swasta-akta-kerja", title: "Cuti Bersalin Swasta: 98 Hari & Syarat Layak", description: "Cuti bersalin 98 hari, elaun bersalin dan syarat perkhidmatan." },
  { href: "/ms/cuti-paterniti-cuti-isteri-bersalin", title: "Cuti Paterniti: 7 Hari Cuti Isteri Bersalin", description: "Cuti paterniti 7 hari, syarat 12 bulan perkhidmatan dan notis." },
  { href: "/ms/cuti-tanpa-gaji-potongan-gaji", title: "Cuti Tanpa Gaji: Berapa Potongan Gaji Sehari?", description: "Potongan gaji sehari untuk cuti tanpa gaji dan cara memohon." },
  { href: "/ms/notis-berhenti-kerja", title: "Notis Berhenti Kerja: Tempoh Notis & Gaji Akhir (Akta Kerja)", description: "Tempoh notis 4, 6 atau 8 minggu dan cara mengira gaji akhir." },
  { href: "/ms/berapa-gaji-untuk-beli-rumah", title: "Berapa Gaji Diperlukan untuk Beli Rumah? Jadual & Kiraan", description: "Gaji yang diperlukan mengikut harga rumah, ansuran dan DSR." },
];

/** Malay calculators, linked from the /ms/panduan hub. */
export const MS_CALCULATORS: MsPageLink[] = [
  { href: "/ms", title: "Kalkulator Gaji Malaysia", description: "Kira gaji bersih selepas KWSP, PERKESO, EIS dan PCB." },
  { href: "/ms/epf-calculator", title: "Kalkulator KWSP (EPF)", description: "Caruman pekerja dan majikan mengikut gaji." },
  { href: "/ms/socso-calculator", title: "Kalkulator PERKESO & EIS", description: "Jadual caruman PERKESO (SOCSO) dan EIS 2026." },
  { href: "/ms/pcb-calculator", title: "Kalkulator PCB (MTD)", description: "Anggaran potongan cukai bulanan." },
  { href: "/ms/income-tax-calculator", title: "Kalkulator Cukai Pendapatan", description: "Cukai pendapatan tahunan dan jalur cukai." },
  { href: "/ms/overtime-calculator", title: "Kalkulator Kerja Lebih Masa (OT)", description: "Bayaran OT mengikut Akta Kerja." },
  { href: "/ms/hourly-rate-calculator", title: "Kalkulator Gaji Sejam & Sehari", description: "Tukar gaji bulanan kepada kadar sehari dan sejam." },
  { href: "/ms/annual-leave-calculator", title: "Kalkulator Cuti Tahunan", description: "Kelayakan cuti tahunan mengikut tempoh khidmat." },
  { href: "/ms/prorated-salary-calculator", title: "Kalkulator Gaji Pro-rata", description: "Gaji untuk bulan yang tidak penuh." },
  { href: "/ms/mortgage-calculator", title: "Kalkulator Gadai Janji & DSR", description: "Ansuran rumah dan nisbah khidmat hutang." },
  { href: "/ms/bonus-calculator", title: "Kalkulator Cukai Bonus", description: "Bonus selepas cukai dan potongan." },
  { href: "/ms/zakat-calculator", title: "Kalkulator Zakat Pendapatan", description: "Anggaran zakat pendapatan." },
  { href: "/ms/payslip-generator", title: "Template & Penjana Slip Gaji", description: "Jana slip gaji percuma." },
  { href: "/ms/salary-increment-calculator", title: "Kalkulator Kenaikan Gaji", description: "Kesan kenaikan gaji kepada gaji bersih." },
  { href: "/ms/epf-retirement-calculator", title: "Kalkulator Sasaran Persaraan EPF", description: "Anggaran simpanan KWSP semasa bersara." },
  { href: "/ms/epf-account-split-calculator", title: "Kalkulator Pecahan Akaun EPF", description: "Pecahan caruman ke akaun KWSP." },
];

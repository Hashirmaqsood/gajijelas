import type { Lang } from "@/lib/i18n/context";

export interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_EN: FaqItem[] = [
  {
    question: "How accurate are these numbers?",
    answer:
      "We use the current published EPF, SOCSO, EIS and LHDN rates and the same annualisation logic LHDN's formula method uses for PCB. Two things can still cause a small gap from your real payslip: EPF's official table rounds to fixed bands for wages under RM20,000 (we use the exact percentage instead), and your employer's payroll software may apply company-specific allowances or deductions we don't know about. Treat this as a close estimate for planning, not a legal record.",
  },
  {
    question: "Do you store or see my salary information?",
    answer:
      "No. Every calculation runs in JavaScript inside your own browser tab. Nothing you type is sent to a server, logged, or saved anywhere — refresh the page and it's gone. The only exception would be if you explicitly choose a feature that emails you a report, which always asks for clear, separate consent first.",
  },
  {
    question: "Why does my PCB show RM0?",
    answer:
      "This is normal, not a bug. PCB is only owed once your annual chargeable income (income after reliefs) rises above the tax-free band — currently the first RM5,000 of chargeable income is taxed at 0%, and reliefs like the automatic RM9,000 individual relief and your EPF contribution often push moderate salaries below the taxable threshold entirely.",
  },
  {
    question: "I'm not a Malaysian citizen — do the same rules apply to me?",
    answer:
      "Partly. EPF became mandatory for non-Malaysian employees at 2%+2% from October 2025. SOCSO covers non-Malaysians under the Employment Injury Scheme only (employer-paid), and EIS doesn't apply to non-Malaysians at all. For tax, this calculator assumes non-Malaysian means non-resident (a flat rate, no reliefs) as a simplifying default — but tax residency actually depends on how many days you spend in Malaysia, not your passport. If you've been working here for more than about six months, you may in fact qualify as a resident for tax purposes and should check with LHDN or a tax agent.",
  },
  {
    question: "Why is there a ceiling on SOCSO and EIS but not EPF?",
    answer:
      "SOCSO and EIS are insurance schemes designed to replace a portion of income up to a reasonable level, so PERKESO caps the wage they're calculated on (RM6,000 since October 2024). EPF is a savings scheme, not insurance, so contributions scale with your full wage without a ceiling (aside from the banded-table rounding for lower wages).",
  },
  {
    question: "What's the difference between what I pay and what my employer pays?",
    answer:
      "Your share (the 'employee contribution') is deducted directly from your gross salary and is what actually reduces your take-home pay. Your employer's share (the 'employer contribution') is paid on top of your salary, out of the company's own funds — it doesn't touch your paycheck, but it is part of what you actually cost your employer to hire.",
  },
  {
    question: "Can I use this if I'm a freelancer or run my own business?",
    answer:
      "If you're genuinely self-employed (a contract for service, not a contract of service), EPF, SOCSO, EIS and PCB withholding don't apply to you the way they do to employees — you'd contribute to EPF voluntarily if you choose to, and pay tax annually via Form B rather than monthly. Select 'Self-employed / freelance' as your employment type and the calculator will reflect that.",
  },
  {
    question: "Does this replace my employer's payroll system or a tax agent?",
    answer:
      "No — treat every number here as a planning estimate. For your actual payslip, payroll deductions, or tax filing, always defer to your employer's payroll team, the official KWSP/PERKESO portals, or a licensed tax agent.",
  },
];

const FAQ_MS: FaqItem[] = [
  {
    question: "Sejauh mana ketepatan angka-angka ini?",
    answer:
      "Kami menggunakan kadar EPF, SOCSO, EIS dan LHDN yang diterbitkan secara rasmi dan logik tahunan yang sama seperti kaedah formula LHDN untuk PCB. Dua perkara masih boleh menyebabkan sedikit perbezaan daripada slip gaji sebenar anda: jadual rasmi EPF membundarkan caruman kepada jadual berjalur untuk gaji bawah RM20,000 (kami menggunakan peratusan tepat sebaliknya), dan perisian gaji majikan anda mungkin mengenakan elaun atau potongan khusus syarikat yang kami tidak ketahui. Anggap ini sebagai anggaran yang hampir tepat untuk perancangan, bukan rekod rasmi.",
  },
  {
    question: "Adakah anda menyimpan atau melihat maklumat gaji saya?",
    answer:
      "Tidak. Setiap pengiraan berjalan dalam JavaScript di dalam tab pelayar anda sendiri. Tidak ada apa-apa yang anda taip dihantar ke pelayan, direkodkan, atau disimpan di mana-mana — segar semula halaman dan semuanya hilang. Satu-satunya pengecualian adalah jika anda memilih secara jelas ciri yang menghantar laporan melalui e-mel, yang sentiasa meminta persetujuan yang jelas dan berasingan terlebih dahulu.",
  },
  {
    question: "Mengapa PCB saya menunjukkan RM0?",
    answer:
      "Ini adalah normal, bukan ralat. PCB hanya dikenakan sebaik sahaja pendapatan bercukai tahunan anda (pendapatan selepas pelepasan) meningkat melebihi jalur bebas cukai — pada masa ini RM5,000 pertama pendapatan bercukai dikenakan cukai 0%, dan pelepasan seperti pelepasan individu automatik RM9,000 serta caruman EPF anda selalunya menolak gaji sederhana ke bawah paras bercukai sepenuhnya.",
  },
  {
    question: "Saya bukan warganegara Malaysia — adakah peraturan yang sama dikenakan kepada saya?",
    answer:
      "Sebahagiannya. EPF menjadi mandatori untuk pekerja bukan warganegara Malaysia pada kadar 2%+2% bermula Oktober 2025. SOCSO melindungi bukan warganegara Malaysia di bawah Skim Bencana Pekerjaan sahaja (dibayar oleh majikan), dan EIS tidak dikenakan kepada bukan warganegara Malaysia sama sekali. Untuk cukai, kalkulator ini menganggap bukan warganegara Malaysia bermaksud bukan pemastautin (kadar rata, tiada pelepasan) sebagai lalai yang dipermudahkan — tetapi pemastautinan cukai sebenarnya bergantung kepada berapa hari anda berada di Malaysia, bukan pasport anda. Jika anda telah bekerja di sini lebih daripada kira-kira enam bulan, anda mungkin layak sebagai pemastautin untuk tujuan cukai dan perlu semak dengan LHDN atau ejen cukai.",
  },
  {
    question: "Mengapa ada siling untuk SOCSO dan EIS tetapi tidak untuk EPF?",
    answer:
      "SOCSO dan EIS adalah skim insurans yang direka untuk menggantikan sebahagian pendapatan sehingga tahap yang munasabah, jadi PERKESO menghadkan gaji yang digunakan untuk pengiraan (RM6,000 sejak Oktober 2024). EPF adalah skim simpanan, bukan insurans, jadi caruman berskala mengikut gaji penuh anda tanpa siling (kecuali pembundaran jadual berjalur untuk gaji lebih rendah).",
  },
  {
    question: "Apa perbezaan antara apa yang saya bayar dan apa yang majikan saya bayar?",
    answer:
      "Bahagian anda ('caruman pekerja') ditolak terus daripada gaji kasar anda dan inilah yang sebenarnya mengurangkan gaji bawa balik anda. Bahagian majikan anda ('caruman majikan') dibayar tambahan atas gaji anda, daripada dana syarikat sendiri — ia tidak menyentuh gaji anda, tetapi ia adalah sebahagian daripada kos sebenar majikan anda untuk mengambil anda bekerja.",
  },
  {
    question: "Bolehkah saya menggunakan ini jika saya seorang pekerja bebas atau menjalankan perniagaan sendiri?",
    answer:
      "Jika anda benar-benar bekerja sendiri (kontrak perkhidmatan, bukan kontrak perkhidmatan sebagai pekerja), potongan EPF, SOCSO, EIS dan PCB tidak dikenakan kepada anda seperti pekerja — anda boleh menyumbang kepada EPF secara sukarela jika anda pilih, dan membayar cukai secara tahunan melalui Borang B berbanding secara bulanan. Pilih 'Bekerja sendiri / bebas' sebagai jenis pekerjaan anda dan kalkulator akan menyesuaikannya.",
  },
  {
    question: "Adakah ini menggantikan sistem gaji majikan saya atau ejen cukai?",
    answer:
      "Tidak — anggap setiap angka di sini sebagai anggaran perancangan. Untuk slip gaji sebenar, potongan gaji, atau pemfailan cukai anda, sentiasa rujuk kepada pasukan gaji majikan anda, portal rasmi KWSP/PERKESO, atau ejen cukai berlesen.",
  },
];

export function getFaq(lang: Lang): FaqItem[] {
  return lang === "ms" ? FAQ_MS : FAQ_EN;
}

export const FAQ = FAQ_EN;

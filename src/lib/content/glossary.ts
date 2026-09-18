import type { Lang } from "@/lib/i18n/context";

export interface GlossaryTerm {
  term: string;
  definition: string;
}

const GLOSSARY_EN: GlossaryTerm[] = [
  {
    term: "Gross salary",
    definition:
      "Everything your employer agrees to pay you before any deduction — your base pay plus fixed allowances, but not one-off reimbursements like travel claims.",
  },
  {
    term: "Net salary (take-home pay)",
    definition: "What actually lands in your bank account after EPF, SOCSO, EIS and PCB have been deducted from your gross salary.",
  },
  {
    term: "EPF (KWSP)",
    definition:
      "The Employees Provident Fund — a mandatory retirement savings scheme. Both you and your employer contribute a percentage of your wage into an account that's yours, invested and paid out when you retire (or in specific approved circumstances earlier).",
  },
  {
    term: "SOCSO (PERKESO)",
    definition:
      "The Social Security Organisation. It runs two schemes for employees below 60 (Employment Injury and Invalidity Pension) and one for those 60 and above (Employment Injury only), covering workplace accidents, occupational disease and permanent disability.",
  },
  {
    term: "EIS (SIP)",
    definition:
      "The Employment Insurance System. A small monthly contribution that funds temporary financial help and job-search assistance if you're retrenched or lose your job involuntarily.",
  },
  {
    term: "PCB / MTD",
    definition:
      "Potongan Cukai Bulanan, or Monthly Tax Deduction — the amount your employer withholds each month as an advance payment toward your annual income tax, based on LHDN's formula.",
  },
  {
    term: "Chargeable income",
    definition:
      "Your annual income after subtracting all the tax reliefs you qualify for. This is the figure the progressive tax table is actually applied to — not your gross salary.",
  },
  {
    term: "Tax relief",
    definition:
      "An amount LHDN lets you subtract from your income before tax is calculated, to recognise specific spending or circumstances (like having children, buying insurance, or medical costs).",
  },
  {
    term: "Tax rebate",
    definition:
      "Unlike a relief (which reduces the income being taxed), a rebate is subtracted directly from the tax bill itself, and only applies below a certain chargeable income threshold.",
  },
  {
    term: "Wage ceiling",
    definition:
      "The maximum wage amount that SOCSO and EIS contributions are calculated on. Earn more than the ceiling, and your contribution stops increasing — it's capped at the ceiling amount.",
  },
  {
    term: "Statutory rate",
    definition: "A contribution or tax rate set by law (via KWSP, PERKESO or LHDN), as opposed to a rate your employer chooses voluntarily.",
  },
  {
    term: "Employer contribution",
    definition: "The portion of EPF, SOCSO and EIS that your employer pays on your behalf, on top of your salary — it doesn't reduce your take-home pay.",
  },
  {
    term: "Resident vs non-resident (tax)",
    definition:
      "A tax status based on how many days you're physically in Malaysia in a year — not your nationality. Residents get the progressive tax table and reliefs; non-residents are taxed at a flat rate with no reliefs.",
  },
];

const GLOSSARY_MS: GlossaryTerm[] = [
  {
    term: "Gaji kasar",
    definition:
      "Semua yang majikan anda bersetuju untuk bayar sebelum sebarang potongan — gaji asas anda ditambah elaun tetap, tetapi bukan bayaran balik sekali sahaja seperti tuntutan perjalanan.",
  },
  {
    term: "Gaji bersih (gaji bawa balik)",
    definition: "Apa yang sebenarnya masuk ke akaun bank anda selepas EPF, SOCSO, EIS dan PCB ditolak daripada gaji kasar anda.",
  },
  {
    term: "EPF (KWSP)",
    definition:
      "Kumpulan Wang Simpanan Pekerja — skim simpanan persaraan mandatori. Anda dan majikan anda kedua-duanya menyumbang peratusan gaji anda ke dalam akaun yang menjadi milik anda, dilaburkan dan dibayar semasa anda bersara (atau lebih awal dalam keadaan tertentu yang diluluskan).",
  },
  {
    term: "SOCSO (PERKESO)",
    definition:
      "Pertubuhan Keselamatan Sosial. Ia menjalankan dua skim untuk pekerja bawah 60 (Bencana Pekerjaan dan Persaraan Hilang Upaya) dan satu untuk mereka 60 dan ke atas (Bencana Pekerjaan sahaja), meliputi kemalangan tempat kerja, penyakit pekerjaan dan hilang upaya kekal.",
  },
  {
    term: "EIS (SIP)",
    definition:
      "Sistem Insurans Pekerjaan. Caruman bulanan kecil yang membiayai bantuan kewangan sementara dan bantuan mencari kerja jika anda diberhentikan atau kehilangan pekerjaan secara tidak sengaja.",
  },
  {
    term: "PCB / MTD",
    definition:
      "Potongan Cukai Bulanan — jumlah yang ditahan oleh majikan anda setiap bulan sebagai bayaran pendahuluan ke arah cukai pendapatan tahunan anda, berdasarkan formula LHDN.",
  },
  {
    term: "Pendapatan bercukai",
    definition:
      "Pendapatan tahunan anda selepas menolak semua pelepasan cukai yang anda layak. Ini adalah angka yang sebenarnya dikenakan jadual cukai progresif — bukan gaji kasar anda.",
  },
  {
    term: "Pelepasan cukai",
    definition:
      "Jumlah yang dibenarkan oleh LHDN untuk ditolak daripada pendapatan anda sebelum cukai dikira, untuk mengiktiraf perbelanjaan atau keadaan tertentu (seperti mempunyai anak, membeli insurans, atau kos perubatan).",
  },
  {
    term: "Rebat cukai",
    definition:
      "Berbeza dengan pelepasan (yang mengurangkan pendapatan yang dikenakan cukai), rebat ditolak terus daripada bil cukai itu sendiri, dan hanya dikenakan di bawah paras pendapatan bercukai tertentu.",
  },
  {
    term: "Siling gaji",
    definition:
      "Jumlah gaji maksimum yang digunakan untuk mengira caruman SOCSO dan EIS. Jika anda memperoleh lebih daripada siling, caruman anda tidak lagi meningkat — ia dihadkan pada jumlah siling tersebut.",
  },
  {
    term: "Kadar statutori",
    definition: "Kadar caruman atau cukai yang ditetapkan oleh undang-undang (melalui KWSP, PERKESO atau LHDN), berbeza dengan kadar yang majikan anda pilih secara sukarela.",
  },
  {
    term: "Caruman majikan",
    definition: "Bahagian EPF, SOCSO dan EIS yang dibayar oleh majikan anda bagi pihak anda, tambahan atas gaji anda — ia tidak mengurangkan gaji bawa balik anda.",
  },
  {
    term: "Pemastautin vs bukan pemastautin (cukai)",
    definition:
      "Status cukai berdasarkan berapa hari anda secara fizikal berada di Malaysia dalam setahun — bukan kerakyatan anda. Pemastautin mendapat jadual cukai progresif dan pelepasan; bukan pemastautin dikenakan cukai pada kadar rata tanpa pelepasan.",
  },
];

export function getGlossary(lang: Lang): GlossaryTerm[] {
  return lang === "ms" ? GLOSSARY_MS : GLOSSARY_EN;
}

export const GLOSSARY = GLOSSARY_EN;

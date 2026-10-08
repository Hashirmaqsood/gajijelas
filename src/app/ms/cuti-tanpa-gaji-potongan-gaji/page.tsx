import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { unpaidLeaveRows } from "@/lib/content/rateTables";

const PATH = "/ms/cuti-tanpa-gaji-potongan-gaji";
const EN_PATH = "/guides/unpaid-leave-malaysia-salary-deduction";
const TITLE = "Cuti Tanpa Gaji: Berapa Potongan Gaji Sehari?";
const DESCRIPTION =
  "Berapa gaji dipotong untuk cuti tanpa gaji? Lihat potongan sehari bagi gaji biasa menggunakan kaedah gaji bulanan dibahagi 26, dan cara memohon cuti tanpa gaji.";

const BODY = [
  "Cuti tanpa gaji bermaksud mengambil cuti tanpa bayaran, jadi majikan memotong hari anda tiada daripada gaji bulanan. Akta Kerja tidak memberi hak umum kepada cuti tanpa gaji, jadi ia biasanya bergantung pada kontrak, dasar syarikat dan kelulusan majikan anda.",
  "## Berapa dipotong sehari",
  "Kaedah biasa ialah gaji bulanan dibahagi 26 hari bekerja, didarab dengan bilangan hari cuti tanpa gaji. Jadual menunjukkan potongan bagi 1, 3 dan 5 hari pada gaji biasa.",
  "## Kaedah lain yang digunakan majikan",
  "Sesetengah majikan membahagi dengan hari kalendar sebenar dalam bulan itu atau dengan 30. Kaedah yang terpakai bergantung pada kontrak dan dasar syarikat, jadi semak surat tawaran anda. Panduan kami tentang 30 atau 31 hari menerangkan perbezaannya.",
  "## Kesan kepada KWSP dan PERKESO",
  "Caruman KWSP, PERKESO dan EIS mengikut gaji yang dibayar bagi bulan itu, jadi bulan dengan gaji lebih rendah kerana cuti tanpa gaji umumnya bermakna caruman yang sedikit lebih rendah.",
  "## Memohon cuti tanpa gaji",
  "Mohon secara bertulis seawal mungkin. Nyatakan tarikh, sebab dan siapa yang akan menggantikan kerja anda, dan minta pengesahan kelulusan daripada majikan. Contoh ayat permohonan: Saya ingin memohon cuti tanpa gaji dari (tarikh) hingga (tarikh) atas urusan peribadi. Saya akan menyerahkan tugas kepada (nama) sebelum bercuti.",
  "## Kira potongan anda sendiri",
  "Gunakan kalkulator gaji pro-rata untuk membandingkan kaedah 26 hari, 30 hari dan hari kalendar bagi gaji anda sendiri.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Gaji dipotong untuk cuti tanpa gaji (gaji bulanan ÷ 26 sehari)",
  headers: ["Gaji bulanan", "1 hari", "3 hari", "5 hari"],
  rows: unpaidLeaveRows(),
};

const FAQ = [
  {
    q: "Bagaimana cuti tanpa gaji dikira di Malaysia?",
    a: "Kaedah biasa ialah gaji bulanan dibahagi 26 hari bekerja, didarab dengan hari tanpa gaji. Sesetengah majikan menggunakan hari kalendar atau 30 hari, jadi semak kontrak anda.",
  },
  {
    q: "Adakah cuti tanpa gaji hak di bawah Akta Kerja?",
    a: "Akta Kerja tidak memberi hak umum kepada cuti tanpa gaji, jadi ia biasanya bergantung pada kontrak, dasar syarikat dan kelulusan majikan.",
  },
  {
    q: "Adakah cuti tanpa gaji menjejaskan KWSP dan PERKESO?",
    a: "Caruman berdasarkan gaji yang dibayar bagi bulan itu, jadi gaji lebih rendah akibat cuti tanpa gaji umumnya bermakna KWSP, PERKESO dan EIS yang sedikit lebih rendah.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": `https://gajijelas.com${EN_PATH}`,
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": `https://gajijelas.com${EN_PATH}`,
    },
  },
};

export default function Page() {
  return (
    <MsArticlePage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      publishedDate="2026-10-08"
      dateLabel="8 Oktober 2026"
      breadcrumbName="Cuti Tanpa Gaji"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/prorated-salary-calculator", label: "Kalkulator Gaji Pro-rata" },
        { href: "/ms/cuti-tahunan-cuti-sakit-akta-kerja", label: "Cuti Tahunan & Cuti Sakit" },
        { href: "/ms/cara-kira-gaji-sehari-sejam", label: "Cara Kira Gaji Sehari & Sejam" },
      ]}
    />
  );
}

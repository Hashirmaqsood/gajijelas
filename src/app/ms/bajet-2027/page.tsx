import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { budget2027TaxSavingRows } from "@/lib/content/rateTables";

const PATH = "/ms/bajet-2027";
const EN_PATH = "/guides/budget-2027-malaysia-salary-epf-socso";
const TITLE = "Bajet 2027: Gaji Minimum RM2,000 & Pelepasan Cukai";
const DESCRIPTION =
  "Bajet 2027 menaikkan gaji minimum kepada RM2,000 mulai Jun 2027 dan pelepasan individu kepada RM12,000. Apa yang diumumkan untuk gaji, cukai, KWSP dan PERKESO.";

const BODY = [
  "Bajet 2027 dibentangkan di Parlimen pada 9 Oktober 2026. Halaman ini meringkaskan pengumuman yang menjejaskan gaji, cukai pendapatan, KWSP dan PERKESO, berdasarkan laporan NST, SAYS dan Bernama. Ini adalah pengumuman, belum menjadi undang-undang, dan sesetengah butiran seperti Tahun Taksiran bagi perubahan cukai tidak dinyatakan, jadi semak dokumen Bajet rasmi dan LHDN sebelum bergantung padanya.",
  "## Gaji minimum: RM1,700 kepada RM2,000",
  "Gaji minimum dinaikkan daripada RM1,700 kepada RM2,000 sebulan mulai Jun 2027, dengan perusahaan mikro, kecil dan sederhana yang mempunyai jualan tahunan di bawah RM50 juta dilaporkan dikecualikan. Asas RM2,500 yang berasingan bagi pekerja separa mahir dan graduan juga diumumkan, tanpa tarikh. Sehingga kadar baharu diwartakan, RM1,700 kekal sebagai gaji minimum yang sah.",
  "## Cukai pendapatan: pelepasan individu lebih tinggi dan kadar lebih rendah",
  "Pelepasan individu asas dinaikkan daripada RM9,000 kepada RM12,000, kenaikan pertama sejak 2010. Kadar bagi jalur RM70,001 hingga RM100,000 turun satu mata peratusan kepada 18%, dan kadar bagi jalur RM100,001 hingga RM150,000 turun satu mata kepada 24%. Pelepasan turut diluaskan untuk penjagaan lepas bersalin, penjagaan ibu bapa dan datuk nenek, yuran tuisyen anak, pendidikan dalam semua bidang, kasut sukan, langganan perisian AI, vaksinasi dan yuran adopsi haiwan peliharaan daripada pusat berdaftar, serta pelepasan tambahan untuk caruman keselamatan sosial bekerja sendiri. Laporan tidak menyatakan Tahun Taksiran yang terpakai.",
  "## Berapa cukai yang mungkin dijimatkan",
  "Jadual membandingkan cukai hari ini dengan cukai di bawah pelepasan individu RM12,000 dan kadar 18% serta 24% yang lebih rendah, bagi pendapatan yang sama. Ia ilustrasi berdasarkan angka yang dilaporkan, bukan pengiraan rasmi LHDN. Seseorang dalam jalur 6% menjimatkan kira-kira RM180 setahun daripada pelepasan lebih tinggi sahaja, dan jalur lebih tinggi menjimatkan lebih banyak.",
  "## KWSP dan PERKESO",
  "Setiap warganegara Malaysia akan didaftarkan sebagai ahli KWSP pada umur 18 tahun, walaupun laporan tidak mengesahkan caruman automatik atau tarikh. Ahli KWSP berumur 55 dan 60 tahun boleh memilih skim pengeluaran bulanan i-Emas, dan ahli bawah 55 tahun boleh membayar premium MediAsas daripada Akaun Sejahtera. Bagi pekerja gig e-panggilan dan p-panggilan, caruman KWSP sehingga RM600 setahun (RM6,000 sepanjang hayat) diumumkan, bersama padanan PERKESO kerajaan 35%, meningkat kepada 50% jika platform turut mencarum. Pekerja sendiri dalam 17 sektor yang PERKESO tidak diwajibkan mendapat insentif padanan 70%. Tiada perubahan kepada kadar caruman KWSP, PERKESO atau EIS bagi pekerja dilaporkan.",
  "## Bantuan tunai dan langkah lain",
  "Peruntukan STR dan SARA ialah RM16 bilion, dengan penerima STR mendapat SARA sehingga RM150 sebulan (RM1,800 setahun). Dewasa berumur 18 tahun ke atas yang tidak menerima STR mendapat RM100 dua kali, sebelum Aidilfitri dan sebelum Merdeka. Pembeli rumah pertama mendapat pengecualian duti setem penuh bagi rumah sehingga RM500,000 dan pengecualian separa sehingga RM750,000 bagi perjanjian yang ditandatangani antara 1 Januari 2027 dan 31 Disember 2030. Pencen minimum dinaikkan daripada RM1,000 kepada RM1,350 sebulan.",
  "## Apa maksudnya untuk kalkulator di laman ini",
  "Kalkulator kami menggunakan kadar yang berkuat kuasa hari ini. Kami akan mengemas kini gaji minimum, pelepasan individu dan jalur cukai sebaik tarikh berkuat kuasa disahkan dan perubahan diwartakan, supaya anggaran gaji bawa balik anda kekal betul bagi tahun yang anda lihat. Sumber: laporan NST, SAYS dan Bernama mengenai ucapan Bajet 2027, 9 Oktober 2026.",
];

const TABLE: GuideTable = {
  afterIndex: 6,
  caption: "Ilustrasi penjimatan cukai tahunan (pelepasan individu RM12,000 dan kadar 18% / 24% lebih rendah)",
  headers: ["Pendapatan bercukai hari ini", "Cukai hari ini", "Cukai di bawah perubahan Bajet 2027", "Penjimatan setahun"],
  rows: budget2027TaxSavingRows(),
};

const FAQ = [
  {
    q: "Bila gaji minimum naik kepada RM2,000?",
    a: "Bajet 2027 mengumumkan kenaikan daripada RM1,700 kepada RM2,000 sebulan mulai Jun 2027. Perusahaan mikro, kecil dan sederhana dengan jualan tahunan di bawah RM50 juta dilaporkan dikecualikan. RM1,700 kekal sebagai gaji minimum yang sah sehingga kadar baharu diwartakan.",
  },
  {
    q: "Berapa pelepasan cukai individu baharu dalam Bajet 2027?",
    a: "Pelepasan individu asas dinaikkan daripada RM9,000 kepada RM12,000. Laporan tidak menyatakan Tahun Taksiran yang terpakai, jadi sahkan dengan LHDN sebelum bergantung padanya.",
  },
  {
    q: "Adakah kadar caruman KWSP atau PERKESO berubah selepas Bajet 2027?",
    a: "Tiada perubahan kepada kadar caruman KWSP, PERKESO atau EIS bagi pekerja dilaporkan. Bajet 2027 mengumumkan pendaftaran KWSP automatik pada umur 18 tahun dan sokongan KWSP serta PERKESO baharu bagi pekerja gig.",
  },
  {
    q: "Berapa cukai yang boleh saya jimat daripada Bajet 2027?",
    a: "Ia bergantung pada jalur cukai anda. Pelepasan RM3,000 lebih tinggi menjimatkan RM180 setahun dalam jalur 6% dan lebih dalam jalur lebih tinggi, dan pemotongan kadar 18% dan 24% menambah bagi pendapatan lebih tinggi. Laporan memetik anggaran kerajaan sehingga RM1,600 bagi kira-kira lima juta pembayar cukai.",
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
      publishedDate="2026-10-13"
      dateLabel="13 Oktober 2026"
      breadcrumbName="Bajet 2027"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/income-tax-calculator", label: "Kalkulator Cukai Pendapatan" },
        { href: "/ms/pcb-calculator", label: "Kalkulator PCB (MTD)" },
        { href: "/ms/gaji-minimum-2026", label: "Gaji Minimum 2026" },
        { href: "/ms/pelepasan-cukai-2026", label: "Pelepasan Cukai 2026" },
      ]}
    />
  );
}

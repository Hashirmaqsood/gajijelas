import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { minimumWageFigures, minimumWageRows } from "@/lib/content/rateTables";
import { formatRM } from "@/lib/format";

const PATH = "/ms/gaji-minimum-2026";
const EN_PATH = "/guides/minimum-wage-malaysia-2026-take-home-pay";
const TITLE = "Gaji Minimum 2026: RM1,700 dan Gaji Bersih";
const DESCRIPTION =
  "Gaji minimum Malaysia ialah RM1,700 sebulan (RM8.72 sejam). Lihat potongan KWSP, PERKESO dan EIS serta gaji bawa balik bagi gaji RM1,700.";

const mw = minimumWageFigures();

const BODY = [
  "Gaji minimum kebangsaan Malaysia ialah RM1,700 sebulan, atau RM8.72 sejam, di bawah Perintah Gaji Minimum 2024. Ia berkuat kuasa pada 1 Februari 2025, dengan tarikh mula yang lebih lewat iaitu 1 Ogos 2025 bagi majikan yang mempunyai kurang daripada lima pekerja.",
  "## Slip gaji bagi gaji RM1,700",
  "Jadual menggunakan enjin gaji kami bagi pekerja Malaysia berumur bawah 60 tahun tanpa pendapatan lain. Pada RM1,700 sebulan tiada potongan cukai bulanan (PCB), jadi potongan hanyalah KWSP, PERKESO dan EIS.",
  "## KWSP, PERKESO dan EIS pada gaji minimum",
  `Pekerja membayar KWSP 11% (${formatRM(mw.epfEmployee)}), PERKESO 0.5% (${formatRM(mw.socsoEmployee)}) dan EIS 0.2% (${formatRM(mw.eisEmployee)}). Selain gaji RM1,700, majikan membayar KWSP 13% (${formatRM(mw.epfEmployer)}), PERKESO 1.75% (${formatRM(mw.socsoEmployer)}) dan EIS 0.2% (${formatRM(mw.eisEmployer)}), jadi kos sebenar seorang pekerja bergaji minimum kepada majikan ialah kira-kira ${formatRM(mw.employerCost)} sebulan.`,
  "## Gaji sejam dan sehari",
  `Perintah menetapkan kadar minimum sejam RM8.72, iaitu RM1,700 dibahagi 195 jam dalam purata sebulan bagi minggu bekerja 45 jam. Dengan kaedah biasa 26 hari bekerja, RM1,700 sebulan bersamaan kira-kira ${formatRM(mw.daily)} sehari.`,
  "## Siapa yang dilindungi",
  "Gaji minimum terpakai kepada pekerja di bawah kontrak perkhidmatan, sama ada sepenuh masa atau separuh masa, tempatan atau asing. Pekerja domestik tidak dilindungi oleh Perintah ini.",
  "## Adakah kadar akan berubah?",
  "Kerajaan telah menyatakan ia sedang menyemak kadar RM1,700. Tiada apa yang berubah sehingga kadar baharu diwartakan, jadi sahkan angka semasa dengan Kementerian Sumber Manusia sebelum menggunakannya untuk gaji.",
  "## Semak gaji anda sendiri",
  "Masukkan sebarang gaji dalam kalkulator untuk melihat KWSP, PERKESO, EIS, cukai dan gaji bawa balik anda sendiri.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Gaji minimum RM1,700: potongan bulanan dan gaji bawa balik",
  headers: ["Perkara", "Jumlah sebulan"],
  rows: minimumWageRows({
    gross: "Gaji kasar sebulan",
    epf: "KWSP pekerja (11%)",
    socso: "PERKESO pekerja (0.5%)",
    eis: "EIS pekerja (0.2%)",
    pcb: "Cukai pendapatan (PCB)",
    net: "Gaji bawa balik",
    employerCost: "Jumlah kos kepada majikan (dengan KWSP, PERKESO, EIS majikan)",
  }),
};

const FAQ = [
  {
    q: "Berapa gaji minimum di Malaysia pada 2026?",
    a: "RM1,700 sebulan, atau RM8.72 sejam, di bawah Perintah Gaji Minimum 2024. Kerajaan telah menyatakan ia sedang menyemak kadar ini, tetapi tiada apa yang berubah sehingga kadar baharu diwartakan.",
  },
  {
    q: "Berapa gaji bawa balik bagi gaji RM1,700?",
    a: `Kira-kira ${formatRM(mw.net)} sebulan bagi pekerja Malaysia bawah 60 tahun, selepas ${formatRM(mw.epfEmployee)} KWSP, ${formatRM(mw.socsoEmployee)} PERKESO dan ${formatRM(mw.eisEmployee)} EIS. Tiada cukai bulanan dipotong pada paras ini.`,
  },
  {
    q: "Berapa potongan KWSP bagi gaji RM1,700?",
    a: `Bahagian pekerja ialah 11%, iaitu ${formatRM(mw.epfEmployee)}. Majikan membayar tambahan 13%, iaitu ${formatRM(mw.epfEmployer)}, di atas gaji.`,
  },
  {
    q: "Berapa gaji minimum sejam di Malaysia?",
    a: "RM8.72 sejam di bawah Perintah Gaji Minimum 2024.",
  },
  {
    q: "Adakah gaji minimum terpakai kepada pekerja asing?",
    a: "Ya, ia terpakai kepada pekerja tempatan dan asing di bawah kontrak perkhidmatan. Pekerja domestik tidak dilindungi oleh Perintah ini.",
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
      breadcrumbName="Gaji Minimum 2026"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
        { href: "/ms/hourly-rate-calculator", label: "Kalkulator Gaji Sejam & Sehari" },
        { href: "/ms/maksud-gaji-kasar-gaji-bersih", label: "Maksud Gaji Kasar & Gaji Bersih" },
        { href: "/ms/jadual-caruman-kwsp-2026", label: "Jadual Caruman KWSP 2026" },
      ]}
    />
  );
}

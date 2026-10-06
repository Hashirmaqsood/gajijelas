import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { dailyHourlyRows } from "@/lib/content/rateTables";

const PATH = "/ms/cara-kira-gaji-sehari-sejam";
const TITLE = "Cara Kira Gaji Sehari & Sejam: Formula Akta Kerja";
const DESCRIPTION =
  "Cara kira gaji sehari dan gaji sejam daripada gaji bulanan di Malaysia: formula 26 hari mengikut Akta Kerja, contoh dan jadual.";

const BODY = [
  "Untuk mengira kadar gaji sehari atau sejam di Malaysia, kaedah Akta Kerja membahagikan gaji bulanan dengan 26 hari bekerja untuk mendapat kadar sehari, kemudian membahagikan kadar sehari dengan waktu bekerja biasa sehari untuk mendapat kadar sejam. Ini dipanggil kadar gaji biasa.",
  "## Formula",
  "Kadar sehari = gaji bulanan ÷ 26. Kadar sejam = kadar sehari ÷ jam sehari, biasanya 8. Contohnya, gaji bulanan RM2,600 memberi kadar sehari RM100 dan kadar sejam RM12.50.",
  "## Kadar sehari dan sejam mengikut gaji bulanan",
  "Jadual menggunakan 26 hari bekerja dan 8 jam sehari.",
  "## Kenapa 26 hari dan bukan 30?",
  "Akta Kerja menggunakan 26 hari bekerja sebagai pembahagi piawai bagi kadar gaji biasa, iaitu asas bagi gaji kerja lebih masa dan bayaran seumpamanya. Ini berbeza daripada mengira gaji pro-rata bagi bulan yang tidak lengkap, di mana bilangan hari sebenar dalam bulan kalendar itu digunakan.",
  "## Di mana kadar sejam digunakan",
  "Kadar sejam ialah titik mula bagi gaji kerja lebih masa: 1.5 kali pada hari bekerja biasa, dengan kadar lebih tinggi pada hari rehat dan cuti umum.",
];

const TABLE: GuideTable = {
  afterIndex: 4,
  caption: "Kadar sehari dan sejam mengikut gaji bulanan",
  headers: ["Gaji bulanan", "Kadar sehari (÷ 26)", "Kadar sejam (÷ 8)"],
  rows: dailyHourlyRows(),
};

const FAQ = [
  {
    q: "Bagaimana cara kira gaji sehari daripada gaji bulanan di Malaysia?",
    a: "Bahagikan gaji bulanan anda dengan 26 hari bekerja. Contohnya, RM2,600 ÷ 26 = RM100 sehari.",
  },
  {
    q: "Bagaimana cara kira gaji sejam di Malaysia?",
    a: "Bahagikan kadar sehari anda dengan waktu bekerja biasa sehari, biasanya 8 jam. Kadar sehari RM100 memberi RM12.50 sejam.",
  },
  {
    q: "Kenapa Malaysia membahagi dengan 26 hari?",
    a: "Akta Kerja menggunakan bulan bekerja 26 hari sebagai pembahagi piawai bagi kadar gaji biasa, supaya gaji kerja lebih masa dan seumpamanya kekal konsisten tanpa mengira bilangan hari dalam bulan kalendar.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/daily-hourly-rate-calculation-malaysia",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/daily-hourly-rate-calculation-malaysia",
    },
  },
};

export default function Page() {
  return (
    <MsArticlePage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      publishedDate="2026-10-06"
      dateLabel="6 Oktober 2026"
      breadcrumbName="Cara Kira Gaji Sehari & Sejam"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/hourly-rate-calculator", label: "Kalkulator Kadar Sejam & Sehari" },
        { href: "/ms/overtime-calculator", label: "Kalkulator OT" },
        { href: "/ms/prorated-salary-calculator", label: "Kalkulator Gaji Pro-rata" },
      ]}
    />
  );
}

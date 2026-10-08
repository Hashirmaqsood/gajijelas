import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/waktu-bekerja-akta-kerja";
const EN_PATH = "/guides/working-hours-malaysia-employment-act";
const TITLE = "Waktu Bekerja Mengikut Akta Kerja: Had Jam Sehari";
const DESCRIPTION =
  "Waktu bekerja biasa di Malaysia ialah sehingga 8 jam sehari dan 45 jam seminggu. Lihat had rehat, hari rehat dan bila kerja lebih masa bermula.";

const BODY = [
  "Di bawah Akta Kerja 1955, seperti dipinda oleh Akta Kerja (Pindaan) 2022, waktu bekerja biasa seminggu di Malaysia ialah maksimum 45 jam. Ini menggantikan minggu 48 jam yang lama mulai 1 Januari 2023.",
  "## Had waktu bekerja sepintas lalu",
  "Jadual meringkaskan had utama dalam Akta. Terdapat pengecualian terhad, seperti susunan syif tertentu, jadi semak dengan majikan atau Jabatan Tenaga Kerja jika kerja anda luar biasa.",
  "## Adakah 8 jam sehari termasuk waktu rehat?",
  "Had 8 jam mengira jam bekerja, dan waktu rehat makan tidak dikira sebagai kerja. Akta juga mengehadkan berapa lama hari bekerja boleh dipanjangkan, jadi keseluruhan hari, termasuk waktu rehat, umumnya tidak boleh melebihi 10 jam.",
  "## Bila kerja lebih masa bermula",
  "Kerja melebihi waktu biasa ialah kerja lebih masa. Bagi pekerja yang dilindungi oleh peruntukan kerja lebih masa, iaitu bergaji RM4,000 sebulan atau kurang dan pekerja manual, kadarnya 1.5 kali kadar sejam pada hari bekerja biasa, dengan kadar lebih tinggi pada hari rehat dan cuti umum.",
  "## Halaman ini meliputi siapa",
  "Ini ringkasan umum bagi pekerja sektor swasta. Sabah dan Sarawak mempunyai Ordinan Buruh sendiri, dan sesetengah industri serta penjawat awam mengikut waktu bekerja yang berbeza.",
  "## Kira kerja lebih masa anda",
  "Gunakan kalkulator kerja lebih masa untuk menukar jam dan gaji anda kepada bayaran kerja lebih masa.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Had waktu bekerja di bawah Akta Kerja 1955",
  headers: ["Peraturan", "Had"],
  rows: [
    ["Jam sehari", "Sehingga 8 jam"],
    ["Jam seminggu", "Sehingga 45 jam"],
    ["Kerja berterusan", "Tidak lebih 5 jam berturut-turut tanpa rehat sekurang-kurangnya 30 minit"],
    ["Tempoh keseluruhan hari", "Tidak lebih 10 jam dari mula hingga tamat, termasuk waktu rehat"],
    ["Hari rehat", "Sekurang-kurangnya satu hari rehat penuh setiap minggu"],
    ["Kerja lebih masa", "1.5 kali kadar sejam pada hari biasa bagi pekerja yang dilindungi"],
  ],
};

const FAQ = [
  {
    q: "Berapa waktu bekerja biasa di Malaysia?",
    a: "Sehingga 8 jam sehari dan 45 jam seminggu di bawah Akta Kerja 1955 sejak 1 Januari 2023.",
  },
  {
    q: "Adakah waktu bekerja 8 jam termasuk waktu rehat?",
    a: "Tidak. Had 8 jam mengira jam bekerja. Keseluruhan hari bekerja, termasuk waktu rehat, umumnya tidak boleh melebihi 10 jam.",
  },
  {
    q: "Berapa lama boleh bekerja tanpa rehat di Malaysia?",
    a: "Tidak lebih 5 jam berturut-turut tanpa rehat sekurang-kurangnya 30 minit.",
  },
  {
    q: "Bila kerja lebih masa bermula di Malaysia?",
    a: "Selepas waktu bekerja biasa. Bagi pekerja yang dilindungi (RM4,000 sebulan atau kurang, dan pekerja manual) ia dibayar 1.5 kali kadar sejam pada hari bekerja biasa.",
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
      breadcrumbName="Waktu Bekerja"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/overtime-calculator", label: "Kalkulator Kerja Lebih Masa" },
        { href: "/ms/kerja-lebih-masa-kadar-cara-kira", label: "Kadar Kerja Lebih Masa & Cara Kira" },
        { href: "/ms/akta-kerja-1955-hak-pekerja", label: "Akta Kerja 1955: Hak Pekerja" },
        { href: "/ms/hourly-rate-calculator", label: "Kalkulator Gaji Sejam & Sehari" },
      ]}
    />
  );
}

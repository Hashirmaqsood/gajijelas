import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/kerja-lebih-masa-kadar-cara-kira";
const TITLE = "Kerja Lebih Masa (OT): Kadar & Cara Kira Akta Kerja";
const DESCRIPTION =
  "Kadar kerja lebih masa mengikut Akta Kerja: hari biasa 1.5 kali, hari rehat dan cuti umum, dengan contoh pengiraan OT langkah demi langkah.";

const BODY = [
  "Tanya kebanyakan pekerja berapa bayaran kerja lebih masa dan jawapannya satu: satu setengah kali. Itu betul bagi hari bekerja biasa, tetapi itu hanya satu pertiga daripada gambaran penuh. Akta Kerja 1955 menetapkan tiga keadaan kerja lebih masa yang berbeza.",
  "## Kadar kerja lebih masa mengikut jenis hari",
  "Jadual di bawah meringkaskan ketiga-tiga keadaan. Kadar sejam ialah kadar gaji biasa anda, iaitu gaji bulanan dibahagi 26 hari, kemudian dibahagi waktu bekerja biasa sehari.",
  "## Contoh kiraan OT hari biasa",
  "Gaji bulanan RM2,600 memberi kadar sehari RM100 (RM2,600 ÷ 26) dan kadar sejam RM12.50 (RM100 ÷ 8 jam). Jika anda bekerja 3 jam lebih masa pada hari biasa: 3 × RM12.50 × 1.5 = RM56.25.",
  "## Dapatkan kadar sejam yang betul dahulu",
  "Setiap pengiraan bergantung pada kadar gaji biasa anda. Jika asas ini salah, contohnya menggunakan 30 hari dan bukan 26 hari, setiap kiraan OT selepas itu turut tersasar walaupun pengganda yang digunakan betul.",
  "## Siapa yang dilindungi",
  "Pengganda berkanun ini dijamin kepada pekerja yang dilindungi Jadual Pertama Akta Kerja, iaitu mereka yang bergaji RM4,000 sebulan atau kurang, serta pekerja manual atau pengendali jentera tanpa mengira gaji. Jika gaji anda melebihi had itu dan anda tidak dalam kategori yang dilindungi, hak OT anda datang daripada kontrak pekerjaan anda.",
  "## Kesilapan yang biasa berlaku",
  "Sesetengah majikan mengira semua kerja lebih masa pada kadar 1.5 kali hari biasa. Jika anda bekerja pada hari rehat atau cuti umum, ini kemungkinan membayar anda kurang daripada formula berkanun. Kira dahulu dengan kalkulator OT sebelum berbincang dengan HR.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Kadar kerja lebih masa mengikut jenis hari",
  headers: ["Jenis hari", "Kadar kerja lebih masa"],
  rows: [
    ["Hari bekerja biasa", "1.5 kali kadar sejam bagi setiap jam melebihi waktu bekerja biasa"],
    ["Hari rehat", "Gaji setengah hari jika bekerja sehingga separuh waktu biasa; gaji sehari penuh jika sehingga waktu biasa penuh; gaji sehari penuh ditambah 2 kali kadar sejam bagi lebihan"],
    ["Cuti umum", "Gaji dua hari penuh jika bekerja sehingga waktu biasa; ditambah 3 kali kadar sejam bagi lebihan"],
  ],
};

const FAQ = [
  {
    q: "Berapakah kadar kerja lebih masa pada hari biasa di Malaysia?",
    a: "1.5 kali kadar gaji sejam anda bagi setiap jam yang melebihi waktu bekerja biasa sehari.",
  },
  {
    q: "Bagaimana cara kira kadar sejam untuk OT?",
    a: "Bahagikan gaji bulanan dengan 26 hari untuk mendapat kadar sehari, kemudian bahagikan dengan waktu bekerja biasa sehari, biasanya 8 jam.",
  },
  {
    q: "Adakah gaji melebihi RM4,000 layak OT berkanun?",
    a: "Pengganda berkanun dijamin kepada pekerja bergaji RM4,000 sebulan atau kurang dan pekerja manual. Di atas had itu, hak OT bergantung pada kontrak pekerjaan anda.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/understanding-employment-act-overtime-rules",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/understanding-employment-act-overtime-rules",
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
      breadcrumbName="Kerja Lebih Masa (OT)"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/overtime-calculator", label: "Kalkulator OT & Kiraan Kerja Lebih Masa" },
        { href: "/ms/hourly-rate-calculator", label: "Kalkulator Kadar Sejam & Sehari" },
        { href: "/ms/cara-kira-gaji-sehari-sejam", label: "Cara Kira Gaji Sehari & Sejam" },
      ]}
    />
  );
}

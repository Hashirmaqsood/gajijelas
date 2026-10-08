import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/eis-perkeso-cara-tuntut";
const EN_PATH = "/guides/eis-perkeso-how-to-claim-benefits-malaysia";
const TITLE = "EIS PERKESO: Cara Tuntut Faedah Selepas Hilang Kerja";
const DESCRIPTION =
  "Cara tuntut faedah EIS daripada PERKESO selepas hilang kerja di Malaysia: siapa yang layak, tempoh 60 hari, jenis faedah dan langkah memohon.";

const BODY = [
  "Sistem Insurans Pekerjaan (EIS), yang dikendalikan oleh PERKESO, membayar faedah kepada pekerja layak yang kehilangan kerja secara tidak sukarela. Anda dan majikan masing-masing mencarum 0.2% daripada gaji bulanan sehingga RM6,000, iaitu paling banyak RM12 sebulan setiap seorang.",
  "## Siapa yang dilindungi",
  "EIS melindungi warganegara dan pemastautin tetap Malaysia berumur 18 hingga 59 tahun. Pekerja asing tidak dilindungi.",
  "## Siapa yang boleh menuntut",
  "Anda mesti memohon dalam tempoh 60 hari selepas kehilangan kerja dan memenuhi syarat kelayakan caruman PERKESO. Kehilangan kerja kerana pemberhentian lebihan, pengurangan pekerja, penutupan syarikat atau skim pemisahan sukarela umumnya layak. Dibuang kerja kerana salah laku, berhenti secara sukarela dan bersara wajib tidak layak.",
  "## Faedah EIS",
  "Jadual meringkaskan lima faedah. Elaun Mencari Pekerjaan dibayar setiap bulan selama 3 hingga 6 bulan bergantung pada kelayakan, pada 80%, 50%, 40%, 40%, 30% dan 30% daripada gaji bulanan andaian anda sepanjang bulan tersebut. Selepas bulan pertama anda mesti menunjukkan bahawa anda aktif mencari kerja.",
  "## Cara menuntut langkah demi langkah",
  "Sediakan MyKad, surat penamatan (ia harus menyatakan sebab anda kehilangan kerja), slip gaji terkini dan butiran bank. Mohon dalam talian atau di pejabat PERKESO dalam tempoh 60 hari, dan daftar di portal MYFutureJobs untuk mencari kerja. Selepas diluluskan, lengkapkan Borang Penempatan Semula Pekerjaan. Dokumen dan portal yang diperlukan boleh berubah, jadi sahkan di perkeso.gov.my sebelum memohon.",
  "## Perubahan faedah sedang dikaji",
  "Kerajaan telah menyatakan ia sedang menyemak Akta EIS, dengan kemungkinan penambahbaikan kepada beberapa elaun. Semak PERKESO untuk kadar semasa sebelum memohon.",
  "## Semak caruman EIS anda",
  "Kalkulator PERKESO dan EIS menunjukkan caruman bulanan anda sendiri.",
];

const TABLE: GuideTable = {
  afterIndex: 6,
  caption: "Faedah EIS daripada PERKESO",
  headers: ["Faedah", "Apa yang anda dapat"],
  rows: [
    ["Elaun Mencari Pekerjaan", "Bayaran bulanan selama 3 hingga 6 bulan semasa anda mencari kerja"],
    ["Elaun Pendapatan Berkurangan", "Bagi mereka yang mempunyai lebih satu pekerjaan dan kehilangan sebahagiannya; dibayar sekali gus pada kadar dan tempoh yang sama dengan Elaun Mencari Pekerjaan"],
    ["Elaun Pekerjaan Semula Awal", "25% daripada Elaun Mencari Pekerjaan yang belum dibayar jika anda mendapat kerja semasa menerimanya"],
    ["Yuran Latihan", "Sehingga RM4,000 untuk latihan vokasional yang diluluskan, dibayar kepada penyedia latihan"],
    ["Elaun Latihan", "RM10 hingga RM20 sehari semasa menghadiri latihan yang diluluskan, bergantung pada gaji andaian terdahulu anda"],
  ],
};

const FAQ = [
  {
    q: "Bagaimana cara tuntut EIS PERKESO?",
    a: "Mohon dalam talian atau di pejabat PERKESO dalam tempoh 60 hari selepas kehilangan kerja, dengan MyKad, surat penamatan, slip gaji dan butiran bank, dan daftar di MYFutureJobs untuk mencari kerja.",
  },
  {
    q: "Berapa lama masa untuk tuntut EIS?",
    a: "60 hari dari tarikh anda kehilangan pekerjaan.",
  },
  {
    q: "Boleh tuntut EIS jika berhenti kerja sendiri?",
    a: "Tidak. Berhenti secara sukarela, dibuang kerja kerana salah laku dan bersara wajib bukan sebab kehilangan kerja yang layak.",
  },
  {
    q: "Berapa Elaun Mencari Pekerjaan EIS?",
    a: "Dibayar setiap bulan selama 3 hingga 6 bulan pada 80%, 50%, 40%, 40%, 30% dan 30% daripada gaji bulanan andaian anda sepanjang bulan tersebut.",
  },
  {
    q: "Berapa potongan EIS daripada gaji?",
    a: "0.2% daripada gaji bulanan sehingga RM6,000, iaitu paling banyak RM12 sebulan. Majikan anda membayar 0.2% lagi.",
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
      breadcrumbName="EIS PERKESO Cara Tuntut"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/socso-calculator", label: "Kalkulator PERKESO & EIS" },
        { href: "/ms/apa-itu-perkeso", label: "Apa Itu PERKESO?" },
        { href: "/ms/notis-berhenti-kerja", label: "Notis Berhenti Kerja" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/notis-berhenti-kerja";
const TITLE = "Notis Berhenti Kerja: Tempoh Notis & Gaji Akhir (Akta Kerja)";
const DESCRIPTION =
  "Berapa lama notis berhenti kerja di Malaysia? Tempoh minimum Akta Kerja (4, 6 atau 8 minggu), cara gaji akhir dikira dan apa yang perlu ada dalam surat.";

const BODY = [
  "Di Malaysia, tempoh notis yang perlu anda beri apabila berhenti kerja ditetapkan oleh kontrak pekerjaan anda. Jika kontrak tidak menyatakannya, Akta Kerja 1955 menetapkan tempoh notis minimum yang bergantung pada berapa lama anda telah berkhidmat dengan majikan.",
  "## Tempoh notis minimum mengikut Akta Kerja",
  "Jadual di bawah menunjukkan notis minimum apabila kontrak tidak menyatakannya. Tempoh notis yang sama terpakai kepada pekerja dan majikan, dan notis mesti diberi secara bertulis.",
  "## Notis manakah yang terpakai kepada anda?",
  "Kontrak anda diutamakan. Jika kontrak menyatakan tempoh notis, yang lazimnya satu hingga tiga bulan, ikut tempoh itu. Notis dikira dari hari anda memberinya, dan hari notis diberi dimasukkan dalam tempoh itu. Jika anda berhenti dengan notis yang kurang daripada yang diperlukan, anda mungkin perlu membayar gaji ganti notis bagi kekurangan itu, jadi semak kontrak anda.",
  "## Apa yang perlu ada dalam surat berhenti kerja",
  "Ringkas dan bertarikh: nama dan jawatan anda, pernyataan jelas bahawa anda berhenti, tarikh anda memberi notis, hari terakhir bekerja, dan tandatangan anda. Simpan satu salinan dan minta HR mengakui penerimaannya secara bertulis.",
  "## Gaji akhir jika anda berhenti pertengahan bulan",
  "Gaji bulan terakhir lazimnya dikira secara pro-rata mengikut hari anda bekerja. Mengikut kaedah Akta Kerja, gaji bulanan dibahagi dengan bilangan hari kalendar sebenar dalam bulan itu dan didarab dengan bilangan hari bekerja. Contohnya, gaji RM4,000 dan hari terakhir 15 September (bulan 30 hari): RM4,000 ÷ 30 × 15 = RM2,000. Gunakan kalkulator gaji pro-rata untuk mengira angka anda sendiri.",
  "## Cuti tahunan yang belum digunakan dan bayaran akhir lain",
  "Sama ada cuti tahunan yang belum digunakan dibayar apabila anda berhenti bergantung terutamanya pada kontrak dan polisi syarikat. Minta HR memberi pecahan bertulis bagi bayaran akhir anda supaya anda boleh menyemak setiap item.",
  "## Jika majikan menamatkan perkhidmatan anda",
  "Apabila majikan menamatkan kontrak, notis minimum yang sama terpakai. Jika pekerjaan tamat kerana lebihan pekerja, faedah penamatan berasingan mungkin terpakai di bawah Peraturan-Peraturan Kerja (Faedah Penamatan dan Pemberhentian) 1980.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Notis minimum jika kontrak tidak menyatakannya (Akta Kerja 1955, seksyen 12)",
  headers: ["Tempoh perkhidmatan", "Notis minimum"],
  rows: [
    ["Kurang 2 tahun", "4 minggu"],
    ["2 tahun hingga kurang 5 tahun", "6 minggu"],
    ["5 tahun atau lebih", "8 minggu"],
  ],
};

const FAQ = [
  {
    q: "Berapa lama notis yang perlu saya beri untuk berhenti kerja di Malaysia?",
    a: "Mengikut kontrak pekerjaan anda. Jika kontrak tidak menyatakannya, Akta Kerja menetapkan minimum 4 minggu bagi kurang 2 tahun berkhidmat, 6 minggu bagi 2 hingga kurang 5 tahun, dan 8 minggu bagi 5 tahun atau lebih.",
  },
  {
    q: "Adakah tempoh notis sama bagi majikan dan pekerja?",
    a: "Ya. Tempoh notis yang sama terpakai kepada kedua-dua pihak, dan notis mesti diberi secara bertulis.",
  },
  {
    q: "Bagaimana gaji bulan terakhir dikira jika saya berhenti pertengahan bulan?",
    a: "Ia dikira pro-rata: gaji bulanan dibahagi dengan bilangan hari kalendar sebenar dalam bulan itu, didarab dengan hari anda bekerja. Kalkulator gaji pro-rata kami mengiranya untuk anda.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/resignation-notice-period-malaysia",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/resignation-notice-period-malaysia",
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
      breadcrumbName="Notis Berhenti Kerja"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/prorated-salary-calculator", label: "Kalkulator Gaji Pro-rata" },
        { href: "/ms/annual-leave-calculator", label: "Kalkulator Cuti Tahunan" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
      ]}
    />
  );
}

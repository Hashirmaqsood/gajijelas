import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/apa-itu-perkeso";
const TITLE = "Apa Itu PERKESO? Maksud, Beza dengan SOCSO & EIS";
const DESCRIPTION =
  "PERKESO dan SOCSO ialah organisasi yang sama. Ketahui maksud PERKESO, apa itu EIS, skim yang ditadbir dan caruman pekerja serta majikan.";

const BODY = [
  "Ya, PERKESO dan SOCSO ialah organisasi yang sama. PERKESO bermaksud Pertubuhan Keselamatan Sosial, iaitu nama dalam bahasa Melayu, manakala SOCSO bermaksud Social Security Organisation, iaitu nama dalam bahasa Inggeris. Slip gaji, majikan dan borang kerajaan menggunakan kedua-dua nama ini silih berganti.",
  "## Apa yang ditadbir oleh PERKESO",
  "PERKESO menjalankan perlindungan keselamatan sosial untuk pekerja di bawah tiga undang-undang, seperti dalam jadual di bawah.",
  "## Apa itu EIS?",
  "EIS, atau Sistem Insurans Pekerjaan (SIP), ialah skim yang menyokong pekerja yang kehilangan pekerjaan. Ia dibiayai oleh caruman berasingan daripada pekerja dan majikan. EIS tidak sama dengan caruman SOCSO, tetapi kedua-duanya tertera pada slip gaji anda.",
  "## Berapa caruman pekerja dan majikan?",
  "Caruman SOCSO dan EIS dikira ke atas gaji bulanan sehingga siling RM6,000. Bagi pekerja bawah 60 tahun bergaji RM5,000 sebulan, pekerja membayar RM25.00 SOCSO dan RM10.00 EIS, manakala majikan membayar RM87.50 SOCSO dan RM10.00 EIS. Gaji melebihi RM6,000 tidak menaikkan caruman.",
  "## Kira caruman PERKESO anda sendiri",
  "Gunakan kalkulator PERKESO (SOCSO) untuk melihat jumlah caruman tepat bagi gaji anda, termasuk jadual caruman mengikut gaji.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Apa yang ditadbir oleh PERKESO (SOCSO)",
  headers: ["Skim", "Undang-undang", "Perlindungan"],
  rows: [
    ["Skim Bencana Kerja", "Akta Keselamatan Sosial Pekerja 1969 (Akta 4)", "Kemalangan di tempat kerja"],
    ["Skim Keilatan", "Akta Keselamatan Sosial Pekerja 1969 (Akta 4)", "Keilatan atau kematian yang tidak berkaitan kerja"],
    ["Skim Keselamatan Sosial Pekerjaan Sendiri", "Akta Keselamatan Sosial Pekerjaan Sendiri 2017 (Akta 789)", "Pekerja sendiri"],
    ["Sistem Insurans Pekerjaan (EIS)", "Akta Sistem Insurans Pekerjaan 2017 (Akta 800)", "Sokongan selepas kehilangan pekerjaan"],
  ],
};

const FAQ = [
  {
    q: "Adakah PERKESO dan SOCSO sama?",
    a: "Ya. PERKESO ialah nama Melayu (Pertubuhan Keselamatan Sosial) dan SOCSO ialah nama Inggeris (Social Security Organisation) bagi organisasi yang sama.",
  },
  {
    q: "Apakah maksud PERKESO?",
    a: "PERKESO bermaksud Pertubuhan Keselamatan Sosial, iaitu Social Security Organisation dalam bahasa Inggeris.",
  },
  {
    q: "Adakah EIS sebahagian daripada PERKESO?",
    a: "Ya. Sistem Insurans Pekerjaan (EIS atau SIP) ditadbir oleh PERKESO di bawah Akta Sistem Insurans Pekerjaan 2017 dan melindungi pekerja yang kehilangan pekerjaan.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/what-is-perkeso-socso-same",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/what-is-perkeso-socso-same",
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
      breadcrumbName="Apa Itu PERKESO"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/socso-calculator", label: "Kalkulator PERKESO (SOCSO) & EIS" },
        { href: "/ms/epf-calculator", label: "Kalkulator KWSP (EPF)" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
      ]}
    />
  );
}

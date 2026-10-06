import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/maksud-gaji-kasar-gaji-bersih";
const TITLE = "Maksud Gaji Kasar, Gaji Bersih & Gaji Pokok: Beza";
const DESCRIPTION =
  "Apa maksud gaji kasar, gaji bersih dan gaji pokok? Definisi mudah, beza antara ketiganya dan contoh bagaimana gaji kasar RM5,000 menjadi gaji bawa balik.";

const BODY = [
  "Tiga istilah gaji sering muncul dalam kontrak dan slip gaji di Malaysia: gaji pokok, gaji kasar dan gaji bersih. Ketiga-tiganya tidak sama, dan mengelirukannya boleh menyebabkan jangkaan yang salah tentang gaji bawa balik anda.",
  "## Maksud gaji pokok, gaji kasar dan gaji bersih",
  "Jadual di bawah meringkaskan setiap istilah. Slip gaji anda mungkin turut memaparkan item seperti elaun, kerja lebih masa dan bonus.",
  "## Contoh pengiraan",
  "Ambil gaji kasar RM5,000 sebulan bagi pekerja Malaysia bujang bawah 60 tahun. KWSP mengambil RM550, SOCSO RM25, EIS RM10 dan PCB RM108.25, jadi gaji bersih atau gaji bawa balik ialah RM4,306.75. Majikan membayar KWSP, SOCSO dan EIS di atas gaji kasar, sebab itu kos majikan lebih tinggi daripada gaji kasar.",
  "## Apa itu gaji hakiki?",
  "Dalam perkhidmatan awam, gaji hakiki merujuk kepada gaji bagi jawatan tetap (substantif) seseorang penjawat awam, tanpa elaun. Istilah ini jarang digunakan dalam sektor swasta.",
  "## Kenapa perbezaan ini penting",
  "Tawaran kerja dan kontrak biasanya menyebut gaji kasar, tetapi yang anda belanjakan ialah gaji bersih. Sesetengah faedah mungkin dikira atas gaji pokok, jadi semak kontrak anda. Caruman KWSP pula dikira atas gaji mengikut takrifan Akta KWSP, yang boleh merangkumi elaun dan komisen, bukan gaji pokok sahaja.",
  "## Kira gaji bersih anda sendiri",
  "Masukkan gaji kasar anda dalam kalkulator gaji untuk melihat gaji bersih, setiap potongan dan jumlah kos majikan.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Gaji pokok, gaji kasar dan gaji bersih",
  headers: ["Istilah", "Maksud", "Termasuk apa"],
  rows: [
    ["Gaji pokok", "Gaji asas tetap dalam kontrak anda", "Tidak termasuk elaun, kerja lebih masa dan bonus"],
    ["Gaji kasar", "Jumlah gaji sebelum sebarang potongan", "Gaji pokok ditambah elaun dan bayaran tetap lain"],
    ["Gaji bersih", "Jumlah yang masuk ke akaun bank anda", "Gaji kasar ditolak KWSP, SOCSO, EIS, PCB dan potongan lain"],
  ],
};

const FAQ = [
  {
    q: "Apakah beza gaji kasar dan gaji bersih?",
    a: "Gaji kasar ialah gaji sebelum sebarang potongan. Gaji bersih, atau gaji bawa balik, ialah jumlah yang anda terima selepas KWSP, SOCSO, EIS, PCB dan potongan lain ditolak.",
  },
  {
    q: "Apakah maksud gaji pokok?",
    a: "Gaji pokok ialah gaji asas tetap yang dinyatakan dalam kontrak anda, sebelum elaun, kerja lebih masa dan bonus.",
  },
  {
    q: "Adakah gaji dalam surat tawaran gaji kasar atau gaji bersih?",
    a: "Surat tawaran biasanya menyatakan gaji kasar, jadi gaji bawa balik anda akan lebih rendah. Semak ayatnya, dan gunakan kalkulator gaji untuk melihat angka bersih anda.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/gross-net-basic-salary-meaning-malaysia",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/gross-net-basic-salary-meaning-malaysia",
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
      breadcrumbName="Maksud Gaji Kasar & Bersih"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
        { href: "/ms/payslip-generator", label: "Penjana Slip Gaji" },
        { href: "/ms/epf-calculator", label: "Kalkulator KWSP (EPF)" },
      ]}
    />
  );
}

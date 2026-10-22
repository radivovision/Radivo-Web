import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Bagaimana cara memesan layanan RADIVO?',
      answer:
        'Cukup klik tombol "Pesan Sekarang" atau hubungi kami langsung via WhatsApp. Kirimkan foto yang ingin diproses dan jelaskan keinginan Anda. Admin kami akan memeriksa file, menyepakati konsep serta biaya, lalu memproses karya setelah disetujui.',
    },
    {
      question: 'Berapa lama proses pengerjaan?',
      answer:
        'Waktu pengerjaan bergantung pada jenis layanan dan kerumitan foto. Umumnya berkisar antara 1 hingga 3 hari kerja. Untuk video kenangan 2 menit atau restorasi foto dengan kerusakan fisik yang berat, estimasi waktu akan disampaikan di awal saat konsultasi.',
    },
    {
      question: 'Apakah foto hitam putih bisa dibuat berwarna?',
      answer:
        'Ya, kami dapat mewarnai foto hitam putih atau sepia dengan palet warna alami. Harap dicatat bahwa rekonstruksi warna digital merupakan pendekatan artistik yang disesuaikan dengan perkiraan historis dan warna kulit natural, bukan warna fisik asli yang terekam kamera saat itu.',
    },
    {
      question: 'Apakah foto buram bisa ditingkatkan menjadi HD?',
      answer:
        'Sebagian besar foto buram, berpiksel rendah, atau beresolusi kecil dapat ditingkatkan ketajamannya secara signifikan. Namun, hasil akhir sangat dipengaruhi oleh informasi visual yang tersisa pada foto sumber. Jika foto terlalu rusak atau buram total tanpa detail wajah sama sekali, hasil rekonstruksi mungkin tidak sepenuhnya presisi dengan aslinya.',
    },
    {
      question: 'Apakah hasil animasi AI selalu terlihat natural?',
      answer:
        'Animasi foto digerakkan dengan teknologi AI terkini untuk menciptakan kedipan dan gerakan kepala yang halus. Kami melakukan kurasi manual agar hasilnya tetap santun dan natural. Namun, perlu dipahami bahwa gerakan ini adalah rekonstruksi digital buatan komputer, bukan rekaman video asli masa lalu.',
    },
    {
      question: 'Apakah saya bisa meminta revisi?',
      answer:
        'Tentu. Paket Video 1 Menit mendapatkan 1x kesempatan revisi minor (seperti penyesuaian teks narasi atau durasi klip). Paket Video 2 Menit mendapatkan 2x kesempatan revisi minor. Untuk restorasi foto, revisi warna atau ketajaman wajar dapat dilakukan sebelum persetujuan final.',
    },
    {
      question: 'Bagaimana foto pribadi saya diproses dan disimpan?',
      answer:
        'Foto Anda diperlakukan dengan standar kerahasiaan tinggi. Kami hanya menggunakan foto Anda khusus untuk memproses pesanan yang disepakati. Kami tidak pernah mempublikasikan foto pribadi Anda ke media sosial atau publik tanpa izin tertulis eksplisit. Setelah pesanan selesai dan diterima dengan baik, file dapat dihapus secara permanen dari perangkat kerja kami sesuai permintaan Anda.',
    },
    {
      question: 'Apakah bisa konsultasi harga terlebih dahulu?',
      answer:
        'Tentu saja sangat bisa dan gratis! Anda bebas mengirimkan foto dan berdiskusi terlebih dahulu mengenai opsi paket, kelayakan foto, atau estimasi pengerjaan tanpa ada paksaan untuk memesan.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8F5EF] border-t border-[#E9E0D3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
            <span>Tanya Jawab</span>
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#171717] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed max-w-xl mx-auto">
            Penjelasan jujur dan transparan seputar metode pengerjaan, hasil akhir, serta keamanan berkas foto Anda.
          </p>
        </div>

        {/* Functional Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E9E0D3] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-[#171717] hover:text-[#C8A96B] transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 transition-transform duration-200 border border-[#E9E0D3] ${
                      isOpen ? 'rotate-180 bg-[#171717] text-white' : 'text-[#737373]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#525252] leading-relaxed border-t border-[#E9E0D3]/60 bg-[#F8F5EF]/30 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-[#E9E0D3] text-center space-y-3">
          <p className="text-sm text-[#525252]">
            Punya pertanyaan lain yang belum terjawab di atas?
          </p>
          <a
            href={createWhatsAppLink('Halo RADIVO, saya ada pertanyaan seputar layanan yang ingin saya tanyakan.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-md hover:bg-[#2b2b2b] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Tanya Langsung ke Admin via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

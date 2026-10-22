import { CheckCircle2, MessageSquare, Sparkles, FileCheck } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Pilih Layanan',
      description:
        'Tentukan layanan yang paling sesuai dengan kebutuhanmu, mulai dari video kenangan, animasi foto, restorasi foto jadul, hingga foto produk.',
      icon: Sparkles,
    },
    {
      number: '02',
      title: 'Kirim Foto via WhatsApp',
      description:
        'Kirimkan file foto yang ingin diproses melalui WhatsApp dan ceritakan cerita atau konsep yang ingin kamu wujudkan.',
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Sepakati Konsep & Biaya',
      description:
        'Admin RADIVO akan mengecek kelayakan foto, lalu menyepakati konsep kreatif, estimasi waktu, dan tarif final yang transparan.',
      icon: FileCheck,
    },
    {
      number: '04',
      title: 'Terima Hasil Jadi',
      description:
        'Hasil visual berkualitas tinggi dikirimkan langsung ke WhatsApp atau link unduh pribadi dengan jaminan revisi minor sesuai paket.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EF] border-t border-[#E9E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
            <span>Alur Pemesanan</span>
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#171717] tracking-tight">
            Pesan dengan Mudah
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Hanya butuh 4 langkah santai melalui WhatsApp tanpa formulir yang rumit.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-xl p-6 border border-[#E9E0D3] shadow-2xs relative flex flex-col justify-between group hover:border-[#C8A96B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#C8A96B]">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#171717] border border-[#E9E0D3]">
                      <Icon className="w-4 h-4 text-[#171717]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-[#171717] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#C8A96B]">
                    &rarr;
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#737373] max-w-xl mx-auto mb-5 italic">
            *Proses produksi resmi dimulai segera setelah rincian cakupan proyek, materi foto, dan biaya disetujui bersama.
          </p>
          <a
            href={createWhatsAppLink(WhatsAppMessages.generalConsultation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-md hover:bg-[#2b2b2b] transition-all shadow-xs"
          >
            <span>Mulai Ceritakan Kebutuhanmu Sekarang</span>
            <span className="text-[#C8A96B]">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

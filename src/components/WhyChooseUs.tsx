import { Heart, FileText, Layers, MessageCircle, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Pendekatan Personal',
      description:
        'Kami memahami bahwa setiap foto memiliki riwayat dan nilai sentimental yang berharga. Konsep visual disesuaikan dengan cerita yang ingin Anda abadikan.',
      icon: Heart,
    },
    {
      title: 'Transparansi Biaya & Ruang Lingkup',
      description:
        'Tarif dan batasan pengerjaan dijelaskan secara lugas di awal sebelum Anda melakukan transaksi. Tanpa biaya tersembunyi atau janji berlebihan.',
      icon: FileText,
    },
    {
      title: 'Layanan Visual Beragam',
      description:
        'Mulai dari restorasi foto fisik lama, pewarnaan arsip keluarga, animasi foto gerak halus, hingga visual estetis untuk kebutuhan promosi produk.',
      icon: Layers,
    },
    {
      title: 'Komunikasi Langsung dengan Admin',
      description:
        'Anda berkomunikasi langsung dengan admin penanggung jawab kreatif kami melalui WhatsApp, bukan bot kaku yang sulit memahami kebutuhan khusus.',
      icon: MessageCircle,
    },
    {
      title: 'Etika Privasi & Izin Foto',
      description:
        'Privasi Anda adalah prioritas mutlak. Foto pelanggan tidak akan pernah dipublikasikan atau dijadikan materi promosi tanpa persetujuan tertulis eksplisit dari Anda.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E9E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
            <span>Komitmen Layanan</span>
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#171717] tracking-tight">
            Mengapa Memilih RADIVO
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Menghadirkan kenyamanan, kejujuran proses, dan sentuhan visual yang menghargai setiap kenangan berharga Anda.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F8F5EF] border border-[#E9E0D3] hover:border-[#C8A96B] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E9E0D3] flex items-center justify-center mb-4 text-[#171717]">
                    <Icon className="w-5 h-5 text-[#C8A96B]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#171717] mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

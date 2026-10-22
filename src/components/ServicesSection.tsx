import { ArrowUpRight, Film, Sparkles, RefreshCw, Camera } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';
import videoImg from '../assets/images/service_video_memory_1791794334920.jpg';
import livingPhotoImg from '../assets/images/service_living_photo_1791794360383.jpg';
import restorationImg from '../assets/images/service_photo_restoration_1791794320868.jpg';
import productImg from '../assets/images/service_product_photography_1791794371189.jpg';

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  icon: typeof Film;
  priceDisplay: string;
  priceDetails: { label: string; price: string }[];
  methodNote: string;
  waMessage: string;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: 'video-kenangan',
      tag: 'Layanan Favorit',
      title: 'Video Kenangan AI',
      description:
        'Abadikan cerita dan kenangan bersama orang tersayang melalui video personal yang dirancang dengan bantuan teknologi AI.',
      image: videoImg,
      icon: Film,
      priceDisplay: 'Rp80.000 – Rp160.000',
      priceDetails: [
        { label: 'Video 1 Menit (Reguler)', price: 'Rp80.000' },
        { label: 'Video 2 Menit (Reguler)', price: 'Rp160.000' },
      ],
      methodNote:
        'Menggabungkan pemilihan musik, narasi cerita personal, transisi visual sinematik, dan bantuan AI visual.',
      waMessage: WhatsAppMessages.serviceVideoKenangan(),
    },
    {
      id: 'foto-hidup',
      tag: 'Animasi Halus',
      title: 'Foto Menjadi Hidup',
      description:
        'Ubah foto diam menjadi animasi pendek dengan gerakan lembut dan natural.',
      image: livingPhotoImg,
      icon: Sparkles,
      priceDisplay: 'Mulai Rp25.000',
      priceDetails: [
        { label: 'Animasi Wajah & Tatapan Alami', price: 'Mulai Rp25.000' },
        { label: 'Durasi Animasi Pendek (3–5 detik)', price: 'Tergantung Foto' },
      ],
      methodNote:
        'Rekonstruksi digital berbasis AI untuk menghasilkan kedipan lembut dan senyuman natural tanpa mengubah karakter asli.',
      waMessage: WhatsAppMessages.serviceFotoHidup,
    },
    {
      id: 'restorasi-foto',
      tag: 'Preservasi Memori',
      title: 'Restorasi Foto & HD',
      description:
        'Warnai foto hitam putih, tingkatkan kejernihan foto, dan perbaiki foto lama yang pudar atau rusak ringan.',
      image: restorationImg,
      icon: RefreshCw,
      priceDisplay: 'Rp20.000 – Rp50.000',
      priceDetails: [
        { label: 'Pewarnaan Foto Hitam Putih', price: 'Rp20.000 – Rp30.000' },
        { label: 'Peningkatan Kualitas Foto HD', price: 'Rp20.000 – Rp30.000' },
        { label: 'Restorasi Lengkap (Pembersihan Noda & Retak)', price: 'Rp30.000 – Rp50.000' },
      ],
      methodNote:
        'Dikerjakan dengan digital retouching teliti dan peningkatan detail resolusi tinggi untuk menjaga keaslian momen bersejarah.',
      waMessage: WhatsAppMessages.serviceRestorasi(),
    },
    {
      id: 'foto-produk',
      tag: 'Kebutuhan Bisnis',
      title: 'Foto Produk & Konten Kreatif',
      description:
        'Visual produk yang lebih menarik untuk katalog, toko online, dan kebutuhan promosi bisnis.',
      image: productImg,
      icon: Camera,
      priceDisplay: 'Konsultasikan Kebutuhanmu',
      priceDetails: [
        { label: 'Penataan Background & Lighting', price: 'Sesuai Brief' },
        { label: 'Format Siap Posting Media Sosial', price: 'Termasuk' },
      ],
      methodNote:
        'Disesuaikan dengan estetika brand Anda untuk meningkatkan daya tarik produk di marketplace dan media sosial.',
      waMessage: WhatsAppMessages.serviceFotoProduk,
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-[#F8F5EF] border-t border-[#E9E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
            <span>Katalog Layanan</span>
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#171717] tracking-tight">
            Karya Visual, Sesuai Ceritamu
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Metode pengerjaan disesuaikan dengan kebutuhan setiap karya — memadukan ketelitian tangan manusia dan kecanggihan teknologi digital modern untuk hasil yang berkarakter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col bg-white rounded-xl border border-[#E9E0D3] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group"
              >
                {/* Media Header */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#E9E0D3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Tag and Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="text-[11px] tracking-wider uppercase text-[#C8A96B] font-medium mb-1">
                        {service.tag}
                      </div>
                      <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                        <span>{service.title}</span>
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                      <IconComponent className="w-4 h-4 text-[#F8F5EF]" />
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-[#525252] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Transparent Price Breakdown */}
                    <div className="p-3.5 bg-[#F8F5EF] rounded-lg border border-[#E9E0D3]/80 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#171717]">
                        <span>Estimasi Tarif:</span>
                        <span className="text-[#C8A96B] font-serif font-bold text-sm">
                          {service.priceDisplay}
                        </span>
                      </div>
                      <div className="space-y-1 pt-1 border-t border-[#E9E0D3]/60">
                        {service.priceDetails.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between text-xs text-[#737373]"
                          >
                            <span>{detail.label}</span>
                            <span className="font-medium text-[#171717]">{detail.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Method Note */}
                    <div className="text-xs text-[#737373] italic">
                      <strong className="not-italic font-medium text-[#525252]">Catatan pengerjaan:</strong>{' '}
                      {service.methodNote}
                    </div>
                  </div>

                  {/* Functional Order Action */}
                  <div className="pt-2 border-t border-[#E9E0D3]/80">
                    <a
                      href={createWhatsAppLink(service.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-md transition-all duration-200 hover:bg-[#2b2b2b] hover:shadow-xs active:scale-98"
                    >
                      <span>Pesan & Konsultasi Layanan Ini</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A96B]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

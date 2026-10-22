import { Check, ArrowUpRight, MessageCircle, AlertCircle } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';

export default function PricingSection() {
  const packages = [
    {
      id: 'pkg-video-1m',
      name: 'Paket Video 1 Menit',
      category: 'Video Kenangan AI',
      badge: 'Paling Populer',
      regularPrice: 'Rp80.000',
      promoPrice: 'Rp80.000',
      promoNote: 'Pengerjaan teliti & alur cerita personal',
      features: [
        'Durasi video maksimal 1 menit',
        'Konsep visual personal sesuai brief',
        'Musik pengiring dan narasi teks cerita',
        '1x revisi minor (penyesuaian teks/timing)',
        'Format siap tayang Status WA / TikTok / IG Reels',
      ],
      isPopular: true,
      waMessage: WhatsAppMessages.pricingPackage('Paket Video 1 Menit', 'Rp80.000'),
    },
    {
      id: 'pkg-video-2m',
      name: 'Paket Video 2 Menit',
      category: 'Video Kenangan AI',
      badge: 'Storytelling Lengkap',
      regularPrice: 'Rp160.000',
      promoPrice: 'Rp160.000',
      promoNote: 'Kompilasi momen lebih banyak & alur mendalam',
      features: [
        'Durasi video maksimal 2 menit',
        'Alur cerita yang lebih mendalam & emosional',
        'Kompilasi lebih banyak momen foto',
        'Musik dan narasi terkoordinasi rapi',
        '2x revisi minor',
        'Resolusi jernih 1080p full HD',
      ],
      isPopular: false,
      waMessage: WhatsAppMessages.pricingPackage('Paket Video 2 Menit', 'Rp160.000'),
    },
    {
      id: 'pkg-restorasi',
      name: 'Restorasi & Pewarnaan Foto',
      category: 'Preservasi Memori',
      badge: 'Mulai Rp20.000',
      regularPrice: 'Fleksibel',
      promoPrice: 'Mulai Rp20.000',
      promoNote: 'Harga terjangkau per lembar foto',
      features: [
        'Pewarnaan foto hitam putih: Rp20.000 – Rp30.000',
        'Peningkatan kualitas foto HD: Rp20.000 – Rp30.000',
        'Restorasi lengkap (noda & retak): Rp30.000 – Rp50.000',
        'Konsultasi kelayakan foto sebelum proses',
        'File resolusi tinggi siap cetak ulang',
      ],
      isPopular: false,
      waMessage: WhatsAppMessages.pricingPackage('Layanan Restorasi Foto', 'Mulai Rp20.000'),
    },
  ];

  return (
    <section id="harga" className="py-20 bg-white border-t border-[#E9E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
            <span>Tarif Transparan</span>
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#171717] tracking-tight">
            Paket yang Sesuai Kebutuhanmu
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Biaya terjangkau dengan standar pengerjaan rapi dan penuh perhatian. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-[#171717] text-white shadow-xl ring-2 ring-[#C8A96B]/80 relative'
                  : 'bg-[#F8F5EF] text-[#171717] border border-[#E9E0D3] shadow-2xs hover:shadow-md'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A96B] text-[#171717] text-[11px] font-bold tracking-widest uppercase py-1 px-4 rounded-full shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b pb-5 mb-6 border-current/10">
                  <div
                    className={`text-xs uppercase tracking-wider font-semibold mb-1 ${
                      pkg.isPopular ? 'text-[#C8A96B]' : 'text-[#737373]'
                    }`}
                  >
                    {pkg.category}
                  </div>
                  <h3
                    className={`text-2xl font-bold font-serif ${
                      pkg.isPopular ? 'text-white' : 'text-[#171717]'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                </div>

                {/* Price block */}
                <div className="mb-6 space-y-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
                      {pkg.promoPrice}
                    </span>
                    {pkg.regularPrice !== 'Fleksibel' && pkg.regularPrice !== pkg.promoPrice && (
                      <span
                        className={`text-sm line-through ${
                          pkg.isPopular ? 'text-white/50' : 'text-[#737373]'
                        }`}
                      >
                        {pkg.regularPrice}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs ${
                      pkg.isPopular ? 'text-white/70' : 'text-[#737373]'
                    }`}
                  >
                    {pkg.promoNote}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8 text-xs sm:text-sm">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.isPopular
                            ? 'bg-[#C8A96B] text-[#171717]'
                            : 'bg-[#171717] text-[#F8F5EF]'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-3" />
                      </div>
                      <span className={pkg.isPopular ? 'text-white/90' : 'text-[#525252]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-current/10">
                <a
                  href={createWhatsAppLink(pkg.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 active:scale-98 ${
                    pkg.isPopular
                      ? 'bg-[#C8A96B] text-[#171717] hover:bg-[#d6b97c] shadow-md font-bold'
                      : 'bg-[#171717] text-white hover:bg-[#2b2b2b]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan Paket Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-12 bg-[#F8F5EF] rounded-xl p-5 sm:p-6 border border-[#E9E0D3] max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#525252] leading-relaxed">
              <p className="font-semibold text-[#171717]">
                Catatan Penting Penyesuaian Harga & Pengerjaan:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Harga akhir disesuaikan</strong> dengan kondisi fisik foto sumber, tingkat kerusakan/kerumitan, dan kebutuhan pengerjaan spesifik.
                </li>
                <li>
                  Kami tidak menjamin semua foto memenuhi syarat tarif terendah secara otomatis, demi menjaga standar ketelitian dan keindahan hasil akhir.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

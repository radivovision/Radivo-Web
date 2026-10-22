import { useState } from 'react';
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';
import heroImg from '../assets/images/hero_restored_memory_1791794306827.jpg';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToServices = () => {
    const servicesElement = document.querySelector('#layanan');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Subtle Brand Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
              <span className="w-8 h-[1px] bg-[#C8A96B]"></span>
              <span>Layanan Kreatif Digital</span>
            </div>

            {/* Emotional Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-serif leading-[1.2] text-balance">
              Setiap Foto Punya Cerita.{' '}
              <span className="italic font-normal text-[#171717]/90 block mt-1">
                Setiap Momen Layak Diabadikan.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl">
              Ubah foto lama menjadi lebih hidup, pulihkan kenangan dalam kualitas lebih baik, dan ciptakan karya visual personal bersama <strong className="text-[#171717] font-semibold">RADIVO</strong>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#171717] rounded-md transition-all duration-200 hover:bg-[#2b2b2b] hover:shadow-md active:scale-98"
              >
                <span>Jelajahi Layanan</span>
                <ArrowDown className="w-4 h-4 text-[#C8A96B]" />
              </button>

              <a
                href={createWhatsAppLink(WhatsAppMessages.generalConsultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#171717] bg-white border border-[#E9E0D3] rounded-md transition-all duration-200 hover:bg-[#F8F5EF] hover:border-[#C8A96B] active:scale-98 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Konsultasi Gratis</span>
              </a>
            </div>

            {/* Trust and Foundation Subtext */}
            <div className="pt-4 border-t border-[#E9E0D3]/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#737373]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8A96B]" />
                <span>Privasi Foto Terjaga</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#C8A96B]" />
                <span>Diskusi Langsung Tanpa Bot</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C8A96B]" />
                <span>AI & Sentuhan Manual Detail</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-End Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#E9E0D3] border border-[#E9E0D3] shadow-lg aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
              <img
                src={heroImg}
                alt="Proses restorasi dan perawatan foto kenangan vintage di studio RADIVO"
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02] ${
                  imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-xs'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Measured Editorial Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-black/10 pointer-events-none" />

              {/* Photo Frame Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                <div className="bg-[#171717]/85 backdrop-blur-md rounded-lg p-3.5 sm:p-4 border border-white/10 shadow-md">
                  <div className="flex items-center justify-between text-xs text-[#C8A96B] font-medium tracking-wider uppercase mb-1">
                    <span>Arsip & Restorasi Visual</span>
                    <span className="text-[11px] text-white/70 font-sans normal-case">Preservasi Memori</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F8F5EF] leading-snug font-serif italic">
                    "Menghidupkan kembali senyuman dan kehangatan keluarga dari masa ke masa."
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle floating accent frame behind for depth */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#C8A96B]/30 -z-10 pointer-events-none hidden sm:block" />
          </div>
        </div>

        {/* Highlight Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-[#E9E0D3] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#171717] tracking-tight">100%</div>
            <div className="text-xs text-[#737373] mt-1 font-medium">Privasi Foto Pelanggan Aman</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#171717] tracking-tight">Mulai 20rb</div>
            <div className="text-xs text-[#737373] mt-1 font-medium">Harga Transparan & Ramah</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#171717] tracking-tight">1–3 Hari</div>
            <div className="text-xs text-[#737373] mt-1 font-medium">Estimasi Waktu Pengerjaan</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#171717] tracking-tight">Personal</div>
            <div className="text-xs text-[#737373] mt-1 font-medium">Kurasi Detail Sesuai Cerita</div>
          </div>
        </div>
      </div>
    </section>
  );
}

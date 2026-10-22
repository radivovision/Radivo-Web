import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-[#E9E0D3] border-t border-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#262626]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col select-none">
              <span className="text-2xl font-bold tracking-widest text-white font-serif">
                RADIVO
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[#C8A96B] uppercase font-sans font-medium -mt-1">
                DIGITAL VISION
              </span>
            </div>

            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm">
              Layanan kreatif digital untuk merawat, mempercantik, dan menghidupkan kembali cerita berharga di balik foto Anda. Mengubah ide menjadi karya visual yang bermakna.
            </p>

            <div className="pt-2 text-xs text-[#737373]">
              <span>Didirikan oleh </span>
              <strong className="text-[#E9E0D3] font-medium">Radhitia Pratama Effendy</strong>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#beranda');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#layanan');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#portofolio');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Portofolio & Sampel
                </a>
              </li>
              <li>
                <a
                  href="#harga"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#harga');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Paket & Harga
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#faq');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Pertanyaan (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              <li>
                <a
                  href={createWhatsAppLink(WhatsAppMessages.serviceVideoKenangan())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Video Kenangan AI
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink(WhatsAppMessages.serviceFotoHidup)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Foto Menjadi Hidup
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink(WhatsAppMessages.serviceRestorasi())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Restorasi & HD Foto
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink(WhatsAppMessages.serviceFotoProduk)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Foto Produk & Brand
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & WhatsApp Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Koneksi & Media Sosial
            </h4>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              Temukan kami di platform media sosial favorit Anda atau hubungi langsung melalui WhatsApp resmi.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={createWhatsAppLink(WhatsAppMessages.generalConsultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {DISPLAY_WHATSAPP_NUMBER}</span>
              </a>

              {/* TikTok placeholder */}
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A3A3A3] hover:text-white transition-colors"
              >
                <span>TikTok: @radivo.vision</span>
                <ArrowUpRight className="w-3 h-3 text-[#C8A96B]" />
              </a>

              {/* Facebook placeholder */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A3A3A3] hover:text-white transition-colors"
              >
                <span>Facebook: RADIVO — Digital Vision</span>
                <ArrowUpRight className="w-3 h-3 text-[#C8A96B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] gap-4">
          <p>
            &copy; {currentYear} <strong>RADIVO — Digital Vision</strong>. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-center sm:text-right text-[11px] text-[#737373]">
            "Mengubah Ide Menjadi Karya Visual yang Bermakna"
          </p>
        </div>
      </div>
    </footer>
  );
}

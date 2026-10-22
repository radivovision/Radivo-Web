import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Harga', href: '#harga' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#E9E0D3]'
          : 'bg-[#F8F5EF] border-b border-[#E9E0D3]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#beranda"
            className="flex flex-col group select-none whitespace-nowrap shrink-0"
          >
            <span className="text-2xl font-bold tracking-widest text-[#171717] font-serif transition-colors group-hover:text-[#C8A96B]">
              RADIVO
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#737373] uppercase font-sans font-medium -mt-1">
              DIGITAL VISION
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525252]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap transition-colors hover:text-[#171717] hover:underline underline-offset-8 decoration-[#C8A96B] decoration-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={createWhatsAppLink(WhatsAppMessages.generalConsultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-md transition-all duration-200 hover:bg-[#2b2b2b] hover:shadow-md active:scale-95"
            >
              <span>Pesan Sekarang</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A96B]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] hover:text-[#C8A96B] focus:outline-hidden focus:ring-2 focus:ring-[#C8A96B] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E9E0D3] bg-[#F8F5EF] px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#171717] rounded-md hover:bg-[#E9E0D3]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E9E0D3]">
            <a
              href={createWhatsAppLink(WhatsAppMessages.generalConsultation)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-md shadow-xs active:scale-98 transition-all"
            >
              <span>Pesan Sekarang via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8A96B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

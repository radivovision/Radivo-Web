import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Kontak WhatsApp Cepat" className="fixed bottom-5 right-5 z-40">
      <a
        href={createWhatsAppLink(WhatsAppMessages.generalConsultation)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba59] transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-hidden focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Konsultasi cepat via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block pr-1">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
}

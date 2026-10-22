/**
 * WhatsApp Integration Utilities
 *
 * Silakan ganti nilai WHATSAPP_PHONE_NUMBER di bawah ini dengan nomor WhatsApp Anda.
 * Gunakan format nomor internasional tanpa tanda plus (+), contoh: '6281234567890'.
 */
export const WHATSAPP_PHONE_NUMBER = '6281933702037';
export const DISPLAY_WHATSAPP_NUMBER = '+62 819-3370-2037';

/**
 * Menghasilkan URL WhatsApp dengan pesan yang sudah di-encode
 */
export function createWhatsAppLink(message: string, phoneNumber = WHATSAPP_PHONE_NUMBER): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Template pesan default untuk berbagai kebutuhan pemesanan dan konsultasi
 */
export const WhatsAppMessages = {
  generalConsultation: 
    'Halo RADIVO, saya tertarik dengan layanan visual Anda dan ingin berkonsultasi gratis terlebih dahulu. Boleh minta informasi alurnya?',
  
  serviceVideoKenangan: (durasi?: string) => 
    `Halo RADIVO, saya ingin memesan layanan Video Kenangan AI${durasi ? ` (Paket ${durasi})` : ''}. Boleh tahu ketersediaan slot pengerjaan dan estimasi waktunya?`,
  
  serviceFotoHidup: 
    'Halo RADIVO, saya tertarik mengubah foto menjadi hidup (animasi pendek). Saya ingin kirim foto untuk dicek terlebih dahulu.',
  
  serviceRestorasi: (jenis?: string) => 
    `Halo RADIVO, saya ingin konsultasi layanan Restorasi Foto & HD${jenis ? ` (${jenis})` : ''}. Boleh saya kirimkan foto lama saya untuk dicek kondisinya?`,
  
  serviceFotoProduk: 
    'Halo RADIVO, saya ingin konsultasi kebutuhan foto produk & konten visual kreatif untuk brand/toko saya. Boleh kirimkan detail paketnya?',
  
  pricingPackage: (packageName: string, price: string) => 
    `Halo RADIVO, saya ingin memesan ${packageName} dengan estimasi harga ${price}. Mohon panduan untuk langkah berikutnya. Terima kasih!`,
  
  portfolioInquiry: (itemTitle: string) => 
    `Halo RADIVO, saya melihat contoh karya "${itemTitle}" di website Anda dan ingin membuat visual dengan gaya serupa. Apakah bisa dibantu?`,
};

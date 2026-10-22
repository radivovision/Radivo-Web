import { useState } from 'react';
import { ShieldCheck, Lock, EyeOff, Trash2, X, AlertTriangle } from 'lucide-react';

export default function PrivacyNotice() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C8A96B]" />
              <span>Etika & Privasi Pelanggan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
              Komitmen Perlindungan Privasi Foto Anda
            </h2>
            <p className="text-xs sm:text-sm text-[#E9E0D3]/80 leading-relaxed max-w-2xl mx-auto">
              Banyak foto yang kami kerjakan adalah kenangan mendalam bersama keluarga dan orang-orang tercinta yang telah berpulang. Kami menjaga amanah dan etika privasi tersebut dengan standar ketat.
            </p>
          </div>

          {/* Privacy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-md bg-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#F8F5EF]">
                Izin Pemrosesan Eksklusif
              </h3>
              <p className="text-xs text-[#E9E0D3]/70 leading-relaxed">
                Foto hanya diproses berdasarkan instruksi dan persetujuan yang disepakati langsung bersama Anda melalui saluran pesan privat.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-md bg-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] mb-3">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#F8F5EF]">
                Tanpa Publikasi Sembarangan
              </h3>
              <p className="text-xs text-[#E9E0D3]/70 leading-relaxed">
                Foto pelanggan tidak akan pernah diposting sebagai bahan iklan atau portofolio publik tanpa adanya izin tertulis terpisah dari Anda.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-md bg-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] mb-3">
                <Trash2 className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#F8F5EF]">
                Penghapusan File Sesuai Permintaan
              </h3>
              <p className="text-xs text-[#E9E0D3]/70 leading-relaxed">
                Setelah hasil akhir diserahkan dan disetujui, kami dapat menghapus berkas foto mentah secara permanen dari perangkat kerja kami kapan pun Anda meminta.
              </p>
            </div>
          </div>

          {/* Important Ethical Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-[#C8A96B]/40 text-xs text-[#E9E0D3]/90 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-white">
                Keterangan Mengenai Rekonstruksi Digital & AI:
              </p>
              <p className="leading-relaxed text-[#E9E0D3]/80">
                Seluruh animasi foto dan sintesis visual adalah bentuk <strong>rekonstruksi digital berbasis estimasi komputer</strong> untuk tujuan seni dan kenangan emosional, bukan rekaman visual otentik dari masa lampau. Kami tidak mengumpulkan berkas foto melalui form publik terbuka demi keamanan transmisi data pribadi Anda.
              </p>
            </div>
          </div>

          {/* Link to view full policy */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-xs text-[#C8A96B] hover:text-[#e4c480] underline underline-offset-4 font-medium transition-colors cursor-pointer"
            >
              Baca Selengkapnya: Kebijakan Privasi & Ketentuan Layanan RADIVO
            </button>
          </div>
        </div>
      </div>

      {/* Full Privacy Policy Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1e1e1e] border border-white/15 rounded-2xl p-6 text-white max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C8A96B]" />
                <h3 className="font-serif font-bold text-lg text-white">
                  Kebijakan Privasi & Penanganan Berkas — RADIVO
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
              <div>
                <h4 className="font-semibold text-[#C8A96B] mb-1">1. Pengumpulan dan Transmisi Berkas</h4>
                <p>
                  Kami hanya menerima kiriman foto pelanggan melalui jalur komunikasi langsung terenkripsi WhatsApp. Kami sengaja tidak menggunakan formulir upload web publik yang rentan terhadap kebocoran data pihak ketiga.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#C8A96B] mb-1">2. Tujuan Penggunaan</h4>
                <p>
                  Setiap materi visual yang dikirimkan hanya dipakai untuk keperluan editing, restorasi, pewarnaan, animasi, atau pembuatan video sesuai dengan instruksi yang disetujui pemesan.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#C8A96B] mb-1">3. Hak Cipta dan Kerahasiaan</h4>
                <p>
                  Hak kepemilikan foto sepenuhnya berada pada pelanggan. RADIVO berjanji tidak akan menjual, membagikan, atau memamerkan foto pelanggan tanpa persetujuan eksplisit.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#C8A96B] mb-1">4. Retensi dan Penghapusan Data</h4>
                <p>
                  Berkas foto disimpan sementara dalam media penyimpanan aman selama proses pengerjaan dan masa garansi revisi minor (maksimal 7 hari kalender setelah penyelesaian). Setelah itu, berkas akan dibersihkan secara berkala atau dihapus langsung begitu pelanggan mengonfirmasi hasil akhir.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#C8A96B] mb-1">5. Kontak Tanggung Jawab</h4>
                <p>
                  Untuk permohonan penghapusan segera atau pertanyaan perlindungan data, hubungi langsung Admin RADIVO di WhatsApp resmi kami.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-[#C8A96B] text-[#171717] font-semibold text-xs rounded-md hover:bg-[#d6b97c] transition-colors"
              >
                Saya Memahami
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

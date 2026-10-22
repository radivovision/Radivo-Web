import { useState } from 'react';
import { Eye, Play, Sparkles, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { createWhatsAppLink, WhatsAppMessages } from '../utils/whatsapp';

// Imported assets
import restorationImg from '../assets/images/service_photo_restoration_1791794320868.jpg';
import videoImg from '../assets/images/service_video_memory_1791794334920.jpg';
import videoFatherPoster from '../assets/images/video_father_poster.jpg';
import livingPhotoImg from '../assets/images/service_living_photo_1791794360383.jpg';
import productImg from '../assets/images/service_product_photography_1791794371189.jpg';
import afterImg from '../assets/images/after_restored_friends_1791798602975.jpg';
import beforeImg from '../assets/images/before_bw_friends_1791798602975.jpg';

type CategoryType =
  | 'Semua'
  | 'Restorasi Foto'
  | 'Peningkatan HD'
  | 'Foto Menjadi Hidup'
  | 'Video Kenangan'
  | 'Foto Produk';

interface PortfolioItem {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  image: string;
  description: string;
  details: string;
  estimatedTime: string;
  isVideoDemo?: boolean;
  videoUrl?: string;
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Semua');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const categories: CategoryType[] = [
    'Semua',
    'Restorasi Foto',
    'Peningkatan HD',
    'Foto Menjadi Hidup',
    'Video Kenangan',
    'Foto Produk',
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'port-1',
      title: 'Restorasi & Pewarnaan Foto Kenangan',
      category: 'Restorasi Foto',
      categoryLabel: 'Restorasi & Pewarnaan',
      image: afterImg,
      description:
        'Pemulihan foto berharga: mengangkat goresan debu, memperbaiki kontras pudar, dan merekonstruksi warna alami dengan kejernihan maksimal.',
      details:
        'Dikerjakan melalui penyesuaian kurva kontras manual, pembersihan retakan mikroskopis, dan pewarnaan lapis demi lapis untuk menjaga tekstur asli wajah dan pakaian.',
      estimatedTime: '1 - 3 hari kerja',
    },
    {
      id: 'port-2',
      title: 'Kompilasi Memori Keluarga & Momen Emas',
      category: 'Video Kenangan',
      categoryLabel: 'Video Kenangan AI',
      image: videoFatherPoster,
      videoUrl: '/assets/aistudio/lv_0_20261015190839_daca3ee3.mp4',
      description:
        'Video narasi emosional dari orang kesayangan kepada anak dan cucunya dengan latar belakang musik yang akustik.',
      details:
        'Format rasio 9:16 untuk TikTok/WhatsApp Status atau 16:9 untuk TV keluarga. Dilengkapi teks narasi puisi pendek dan kurasi transisi lembut.',
      estimatedTime: '1 - 3 hari kerja',
      isVideoDemo: true,
    },
    {
      id: 'port-3',
      title: 'Animasi Halus: Tatapan & Angin Lembut',
      category: 'Foto Menjadi Hidup',
      categoryLabel: 'Foto Menjadi Hidup',
      image: livingPhotoImg,
      description:
        'Foto potret perempuan diam dianimasikan menjadi gerakan halus berhembus angin sepoi-sepoi dengan kedipan mata natural.',
      details:
        'Menggunakan interpolasi gerakan AI terkontrol untuk mencegah distorsi wajah. Cocok untuk hadiah kenangan digital atau avatar profil dinamis.',
      estimatedTime: '1 - 3 hari kerja',
    },
    {
      id: 'port-4',
      title: 'Katalog Produk Parfum Mewah "AURORA"',
      category: 'Foto Produk',
      categoryLabel: 'Foto Produk & Promosi',
      image: productImg,
      description:
        'Penataan visual komersial produk botol keramik dan parfum pada lempengan batu travertine dengan pencahayaan samping bernuansa hangat.',
      details:
        'Penyempurnaan tekstur kemasan, pencahayaan refleksi kaca, dan grading warna elegan untuk meningkatkan persepsi nilai produk jualan online.',
      estimatedTime: '1 - 3 hari kerja',
    },
    {
      id: 'port-5',
      title: 'Peningkatan Kejernihan Potret Studio Klasik',
      category: 'Peningkatan HD',
      categoryLabel: 'Peningkatan Kualitas HD',
      image: restorationImg,
      description:
        'Meningkatkan ketajaman foto wajah yang buram atau beresolusi rendah agar dapat dicetak ulang pada pigura berukuran besar.',
      details:
        'Peningkatan ketajaman pori-pori kulit, detail mata, dan helai rambut tanpa efek cat minyak atau plastik berlebihan.',
      estimatedTime: '1 - 3 hari kerja',
    },
  ];

  const filteredItems =
    activeCategory === 'Semua'
      ? portfolioItems
      : portfolioItems.filter((item) => {
          if (activeCategory === 'Restorasi Foto') {
            return item.category === 'Restorasi Foto' || item.category === 'Peningkatan HD';
          }
          return item.category === activeCategory;
        });

  return (
    <section id="portofolio" className="py-20 bg-[#F8F5EF] border-t border-[#E9E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
            <span>Portofolio & Demonstrasi</span>
            <span className="w-6 h-[1px] bg-[#C8A96B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#171717] tracking-tight">
            Lihat Perbedaannya
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Eksplorasi sampel karya restorasi, rekonstruksi visual, animasi foto, dan tata visual produk. Seluruh contoh di bawah adalah sampel demonstrasi teknik pengerjaan RADIVO.
          </p>
        </div>

        {/* Interactive Before & After Feature Component */}
        <div className="mb-14">
          <BeforeAfterSlider />
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-md transition-all duration-150 ${
                  isActive
                    ? 'bg-[#171717] text-white shadow-2xs'
                    : 'bg-white text-[#525252] border border-[#E9E0D3] hover:text-[#171717] hover:border-[#C8A96B]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-xl border border-[#E9E0D3] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E9E0D3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#171717]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-xs font-semibold text-[#171717] flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {item.isVideoDemo ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-[#171717]" />
                        <span>Lihat Demo Video</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Perbesar Detail</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Quiet Unboxed Metadata overlay */}
                <div className="absolute top-3 left-3 bg-[#171717]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#C8A96B] tracking-wider uppercase">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#171717] group-hover:text-[#C8A96B] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#525252] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E9E0D3]/80 flex items-center justify-between text-[11px] text-[#737373]">
                  <span>Sampel Demonstrasi</span>
                  <span className="font-medium text-[#171717] group-hover:underline">
                    Lihat Spesifikasi &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171717]/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-white rounded-2xl border border-[#E9E0D3] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E9E0D3] bg-[#F8F5EF]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A96B] font-semibold">
                    {selectedItem.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#171717]">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(null);
                    setIsVideoPlaying(false);
                  }}
                  className="p-1.5 rounded-md text-[#737373] hover:text-[#171717] hover:bg-[#E9E0D3] transition-colors"
                  aria-label="Tutup preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
                {/* Visual Area */}
                {selectedItem.isVideoDemo ? (
                  <div className="relative rounded-xl overflow-hidden bg-[#0d0d0d] flex items-center justify-center min-h-[300px] max-h-[460px] sm:max-h-[520px] border border-[#2a2a2a]">
                    <video
                      key={selectedItem.videoUrl || selectedItem.id}
                      src={selectedItem.videoUrl || '/assets/aistudio/lv_0_20261015190839_daca3ee3.mp4'}
                      poster={selectedItem.image}
                      controls
                      playsInline
                      autoPlay
                      className="max-h-[440px] sm:max-h-[500px] w-auto max-w-full rounded-lg object-contain mx-auto shadow-2xl"
                    >
                      Browser Anda tidak mendukung pemutar video.
                    </video>
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden bg-[#171717] aspect-16/10 flex items-center justify-center">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Explanation Details */}
                <div className="space-y-3 text-sm text-[#525252] leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-[#171717] text-xs uppercase tracking-wider mb-1">
                      Deskripsi Karya
                    </h4>
                    <p>{selectedItem.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#171717] text-xs uppercase tracking-wider mb-1">
                      Metode & Proses Pengerjaan
                    </h4>
                    <p>{selectedItem.details}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#737373] pt-2 border-t border-[#E9E0D3]">
                    <Sparkles className="w-4 h-4 text-[#C8A96B]" />
                    <span>Estimasi Pengerjaan: <strong className="text-[#171717]">{selectedItem.estimatedTime}</strong></span>
                  </div>
                </div>
              </div>

              {/* Modal Footer / Direct WhatsApp Action */}
              <div className="p-4 sm:p-5 border-t border-[#E9E0D3] bg-[#F8F5EF] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#737373] text-center sm:text-left">
                  Ingin hasil visual dengan konsep dan kualitas seperti ini?
                </span>
                <a
                  href={createWhatsAppLink(WhatsAppMessages.portfolioInquiry(selectedItem.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-md hover:bg-[#2b2b2b] transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Tanya Gaya Ini via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A96B]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

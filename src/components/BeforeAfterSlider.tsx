import { useState, useRef, useCallback, useEffect } from 'react';
import { SlidersHorizontal, Info } from 'lucide-react';
import beforeImg from '../assets/images/before_bw_friends_1791798602975.jpg';
import afterImg from '../assets/images/after_restored_friends_1791798602975.jpg';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="bg-white rounded-2xl border border-[#E9E0D3] p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C8A96B] font-semibold">
            Komparasi Interaktif
          </span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-[#171717]">
            Restorasi Foto Hitam Putih & Pewarnaan Alami
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#737373] bg-[#F8F5EF] px-3 py-1.5 rounded-md border border-[#E9E0D3]">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8A96B]" />
          <span>Geser garis pemisah untuk melihat perubahan</span>
        </div>
      </div>

      {/* Slider Canvas */}
      <div
        ref={containerRef}
        className="relative w-full aspect-4/3 rounded-xl overflow-hidden select-none cursor-ew-resize bg-[#171717]"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* AFTER IMAGE (Background - Full Width) */}
        <img
          src={afterImg}
          alt="Hasil Restorasi dan Pewarnaan Foto Keluarga"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-4 right-4 z-10 bg-[#171717]/80 text-[#C8A96B] backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
          Hasil Restorasi & Warna
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt="Foto Asli Sebelum Restorasi"
            className="absolute top-0 left-0 max-w-none h-full object-cover pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* BEFORE BADGE */}
        <div className="absolute top-4 left-4 z-10 bg-[#171717]/80 text-[#F8F5EF] backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
          Foto Asli Sebelum Restorasi
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#C8A96B] shadow-[0_0_10px_rgba(200,169,107,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#171717] border-2 border-[#C8A96B] shadow-md flex items-center justify-center text-[#C8A96B]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Honest Demonstration Note */}
      <div className="mt-4 flex items-start gap-2 text-xs text-[#737373]">
        <Info className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#525252]">Contoh Demonstrasi Sampel:</strong> Foto di atas merupakan simulasi perbandingan pengerjaan restorasi detail dan pewarnaan. Hasil nyata pada foto Anda akan bergantung pada keutuhan resolusi awal, tekstur kertas fisik, dan tingkat kerusakan gambar sumber.
        </p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const banners = [banner1, banner2, banner3];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative mb-12 w-full">
      {/* Viền cam bằng đúng khung ảnh */}
      <div className="relative w-[95%] h-72 bg-orange-400 rounded-3xl mx-auto z-0" />

      {/* Ảnh banner đè lên phía trên, cùng kích thước */}
      <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-[97%] h-72 bg-white rounded-3xl overflow-hidden shadow z-10">
        <img
          src={banners[current]}
          alt={`banner-${current}`}
          className="w-full h-full object-cover"
        />

        {/* Overlay chữ */}
{/* Khung chữ căn giữa chiều dọc, lệch trái */}
<div className="absolute inset-0 flex items-center pl-20">
  <div className="bg-black/50 text-white p-4 rounded-3xl max-w-sm">
    <h1 className="text-2xl font-bold mb-1">G-Easy</h1>
    <p className="text-sm text-white/80 leading-relaxed">
      Learn English vocabulary with clear meanings, vivid examples, and accurate pronunciation.
      Your saved words are always ready to support your learning anytime.
    </p>
  </div>
</div>


        {/* Nút chuyển ảnh */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 text-white rounded-full w-6 h-6 flex items-center justify-center transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 text-white rounded-full w-6 h-6 flex items-center justify-center transition"
        >
          ›
        </button>

        {/* 3 chấm điều hướng ảnh */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

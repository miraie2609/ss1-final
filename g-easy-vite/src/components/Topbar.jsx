// src/components/Topbar.js
import React from 'react';
import { FiShoppingCart, FiBell } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';

export default function Topbar() {
  return (
    <div className="flex justify-end items-center gap-5">
      <TopIcon icon={<FiShoppingCart />} />
      <TopIcon icon={<BiMessageDetail />} />
      <TopIcon icon={<FiBell />} />
      <button
        onClick={() => alert('Login clicked')}
        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow transition"
      >
        Đăng nhập
      </button>
    </div>
  );
}

function TopIcon({ icon }) {
  return (
    <div className="text-[18px] text-gray-700 cursor-pointer hover:text-orange-500 transition">
      {icon}
    </div>
  );
}

// src/components/Sidebar.js
import logoImg from '../assets/Logo.png';
import React from 'react';
import { FaList, FaBookOpen, FaLink, FaUser, FaLeaf, FaRegFileAlt, FaHome } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="h-full w-64 bg-[#fff5e9] p-6 border-r border-gray-200 flex flex-col">
      {/* Logo */}

      <div className="flex justify-center mb-10">
  <div className="flex items-center gap-3">
    <img
      src={logoImg} // hoặc đường dẫn tương ứng
      alt="G-Easy Logo"
      className="w-54 h-54 object-contain"
    />
  </div>
</div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        <SidebarButton active icon={<FaHome />}>Home Page</SidebarButton>
        <SidebarButton icon={<FaLeaf />}>My Lists</SidebarButton>
        <SidebarButton icon={<FaBookOpen />}>Enter new words</SidebarButton>
        <SidebarButton icon={<FaRegFileAlt />}>References</SidebarButton>
        <SidebarButton icon={<FaUser />}>User Profile</SidebarButton>
      </nav>
    </aside>
  );
}

function SidebarButton({ icon, children, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200
        ${active ? 'bg-orange-400 text-white shadow' : 'text-gray-700 hover:bg-orange-300 hover:text-white'}`}
      onClick={() => alert(`${children} clicked`)} // Có thể thay bằng navigate sau
    >
      <span className="text-lg">{icon}</span>
      {children}
    </button>
  );
}

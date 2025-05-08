// src/components/ToolsSection.js
import React from 'react';
import { FaLeaf, FaBookOpen, FaRegFileAlt, FaUser } from 'react-icons/fa';

export default function ToolsSection() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-xl font-bold mb-3">G-Easy English</h2>
      <p className="text-xs text-600 leading-relaxed max-w-2xl mx-auto mb-8">
        We've gathered a collection of smart, easy-to-use tools to support your English learning journey.
        Whether you're reviewing vocabulary or practicing pronunciation, everything you need is right here at your fingertips!
      </p>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        <Tool icon={<FaLeaf />} label="My Lists" />
        <Tool icon={<FaBookOpen />} label="Enter New Words" />
        <Tool icon={<FaRegFileAlt />} label="Reference" />
        <Tool icon={<FaUser />} label="User Profile" />
      </div>
    </div>
  );
}

function Tool({ icon, label }) {
  return (
    <button
      onClick={() => alert(`${label} clicked`)}
      className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
    >
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center transition duration-200 group-hover:bg-gray-300">
        <div className="text-2xl text-gray-700 group-hover:text-black">{icon}</div>
      </div>
      <span className="text-sm text-gray-600 group-hover:text-black">{label}</span>
    </button>
  );
}

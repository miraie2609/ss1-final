import teamImg from '../assets/team.png';
import React from 'react';

const Button = ({ children }) => (
  <button className="border border-orange-400 text-orange-500 px-16 py-2 rounded-full hover:bg-orange-50 transition font-medium">
    {children}
  </button>
);

export default function AboutSection() {
  return (
    <div className="flex items-center justify-between gap-12 mb-16">
      <div className="max-w-xl flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-bold mb-3">About us</h2>
          <p className="text-xs text-600 mb-6 leading-relaxed">
  We build smart tools to help you learn English vocabulary more effectively. With accurate translations,
  AI-generated example sentences, and personal word lists, we make your learning journey easier, faster, and more fun.
</p>

        </div>
        {/* Nút nằm dưới bên phải */}
        <div className="flex justify-end">
          <Button>Details</Button>
        </div>
      </div>

      {/* Ảnh team với bo tròn đồng bộ */}
      <img src={teamImg} alt="team" className="rounded-3xl w-80 h-56 object-cover shadow" />
    </div>
  );
}

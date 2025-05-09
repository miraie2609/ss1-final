// src/components/PracticeSection.js
import practiceImg from '../assets/practice.png';
import React from 'react';

const Button = ({ children }) => (
  <button className="border border-orange-400 text-orange-500 px-16 py-2 rounded-full hover:bg-orange-50 transition">
    {children}
  </button>
);

export default function PracticeSection() {
  return (
    <div className="flex items-center justify-between gap-12 mb-20">
      <div className="max-w-xl flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-3">Practice English Vocabularies</h2>
          <p className="text-xs text-600 leading-relaxed mb-6">
            G-Easy helps you practice your English vocabularies every time, everywhere!
          </p>
        </div>
        <div className="flex justify-end mt-8 ">
  <Button>Check My Lists</Button>
</div>

      </div>
      <img
        src={practiceImg}
        alt="practice"
        className="rounded-3xl w-80 h-56 object-cover shadow"
      />
    </div>
  );
}


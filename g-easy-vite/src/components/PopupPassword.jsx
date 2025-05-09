import React, { useState } from 'react';
import logoImg from '../assets/Logo.png';

export default function PopupPassword({ onClose }) {
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // TODO: Gọi API hoặc xử lý password ở đây nếu cần
    console.log("New password:", password);
    onClose(); // Đóng popup
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-96 relative animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <img src={logoImg} alt="Icon" className="w-36 h-12" />
          <div>
            <h2 className="text-orange-500 font-bold text-lg">Good Morning!</h2>
            <p className="text-sm text-gray-600">Let’s learn English with G-easy every day</p>
          </div>
        </div>

        {/* Input */}
        <label className="block text-sm font-semibold mb-2 text-gray-700">Enter new password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Password"
        />

        {/* Save button */}
        <button
          onClick={handleSave}
          className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md font-semibold hover:bg-orange-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}
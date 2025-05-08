import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import ToolsSection from '../components/ToolsSection';
import PracticeSection from '../components/PracticeSection';
import Footer from '../components/Footer';
import PopupPassword from '../components/PopupPassword'; // 💡 THÊM COMPONENT POPUP

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(true); // ✅ Hiện popup khi mới vào trang

  return (
    <div className="flex bg-white min-h-screen">
      {/* Fixed Sidebar bên trái */}
      <div className="fixed top-0 left-0 h-full w-64 z-10">
        <Sidebar />
      </div>

      {/* Main content bên phải */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Topbar cố định trên cùng nội dung */}
        <div className="px-10 pt-6">
          <Topbar />
        </div>

        {/* Nội dung chính */}
        <main className="px-16 pt-4 pb-10 flex-1">
          <Banner />
          <AboutSection />
          <ToolsSection />
          <PracticeSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* ✅ Hiển thị popup nếu showPopup = true */}
      {showPopup && <PopupPassword onClose={() => setShowPopup(false)} />}
    </div>
  );
}
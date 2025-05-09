import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { HiOutlineMapPin } from 'react-icons/hi2';
import logoImg from '../assets/Logo.png'; // cập nhật đúng đường dẫn tới Logo.png

export default function Footer() {
  return (
    <footer className="bg-gray-200 w-full pt-6 border-t">
      <div className="flex justify-between items-start px-8">
        {/* Logo + Description */}
        <div className="flex flex-col items-start mt-[-50px]">
          <div className="mb-0">
            <img
              src={logoImg}
              alt="G-Easy Logo"
              className="w-36 h-36 object-contain"
            />
          </div>
          <p className="text-xs text-gray-500 mt-[-18px]">
            Convenient English vocabulary learning system for busy people
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex items-start">
          <div className="border-l border-gray-400 h-24 mx-4 hidden md:block"></div>

          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FiPhone className="text-gray-500 w-5 h-5" />
              <span className="text-gray-600">Contact</span>
            </div>
            <a href="tel:+841234567890" className="hover:underline hover:text-orange-500">
              +84 1234567890
            </a>

            <div className="flex items-center gap-2">
              <HiOutlineMapPin className="text-gray-500 w-5 h-5" />
              <span className="text-gray-600">Address</span>
            </div>
            <a href="#" className="hover:underline hover:text-orange-500">
              Nguyễn Trãi, Thanh Xuân, Hà Nội
            </a>

            <div className="flex items-center gap-2">
              <FiMail className="text-gray-500 w-5 h-5" />
              <span className="text-gray-600">Email</span>
            </div>
            <a href="mailto:abcd@gmail.com" className="hover:underline hover:text-orange-500">
              abcd@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Social buttons */}
      <div className="mt-6 bg-gray-300">
        <div className="px-8 py-2 flex justify-end space-x-2">
          <a href="#" className="w-7 h-7 bg-[#1877F2] rounded-lg flex items-center justify-center text-white hover:brightness-110 transition">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="w-7 h-7 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white hover:brightness-110 transition">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" className="w-7 h-7 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-orange-500 transition">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#EA4335">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

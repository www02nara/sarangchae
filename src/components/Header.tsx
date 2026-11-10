"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Phone, Calendar, Clock, Menu, X, ExternalLink } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking, openNonCovered } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "진료 과목", href: "#clinics" },
    { name: "원장 소개", href: "#doctor" },
    { name: "원내 시설", href: "#tour" },
    { name: "진료시간 & 오시는 길", href: "#location" },
    { name: "자주 묻는 질문", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar (Pastel Rose) */}
      <div className="bg-[#d97581] text-white text-xs py-2 px-4 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold bg-white/20 px-2.5 py-0.5 rounded-full text-white text-[11px]">
              <Clock className="w-3 h-3" />
              화 · 목 야간진료 (저녁 8시까지)
            </span>
            <span className="hidden sm:inline text-white/90">
              부산 사하구 하신중앙로 341, 1층 · 휴게시간 12:30~14:00 (14시 진료 시작)
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 font-bold text-white hover:text-white/80 transition"
            >
              <Phone className="w-3 h-3 text-white/90" />
              <span>{CLINIC_INFO.formattedPhone}</span>
            </a>
            <button
              onClick={openNonCovered}
              className="text-white/80 hover:text-white transition text-[11px] underline underline-offset-2"
            >
              비급여 안내
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#fce7ea]"
            : "bg-white py-4 shadow-2xs border-b border-[#fce7ea]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d97581] to-[#e88d98] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-serif text-lg font-bold text-white">
                愛
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#3d2428]">
                  경희사랑채<span className="font-normal text-[#9e636b]">한의원</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#fce7ea] text-[#d97581] rounded">
                  부산 하단
                </span>
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                Kyunghee Sarangchae Clinic
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#d97581] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={CLINIC_INFO.naverPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#03C75A] hover:bg-[#02b14f] transition flex items-center gap-1.5 shadow-2xs"
            >
              <span>네이버 플레이스</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => openBooking()}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#d97581] hover:bg-[#c9626e] transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>간편 예약</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBooking()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#d97581] sm:hidden"
            >
              예약
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 토글"
              className="p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-[#fce7ea]/50 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#fce7ea] shadow-xl px-5 py-6 space-y-4 animate-fade-in">
          <div className="space-y-1 divide-y divide-gray-100 text-sm font-semibold text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 hover:bg-[#fff0f2] rounded-lg hover:text-[#d97581] transition"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openNonCovered();
              }}
              className="block w-full text-left py-3 px-2 text-gray-600 hover:bg-[#fff0f2] rounded-lg text-xs font-medium"
            >
              비급여 진료비용 안내
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3 bg-[#d97581] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-2xs"
            >
              <Calendar className="w-4 h-4" />
              간편 진료 예약
            </button>
            <a
              href={CLINIC_INFO.naverPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#03C75A] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-2xs"
            >
              <ExternalLink className="w-4 h-4" />
              네이버 플레이스
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, Calendar, Clock, Menu, X, ExternalLink } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useModal();

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
      {/* Top Notification Bar (Almost White, Subtle Hint of Pink) */}
      <div className="bg-[#fefbfc] border-b border-[#f5e6e8] text-[#5c4046] text-xs py-1.5 px-3 sm:px-4 shadow-3xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 font-bold bg-white text-[#7d3543] px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] border border-[#f0d8dd] shadow-3xs shrink-0">
              <Clock className="w-3 h-3 text-[#a34c5b]" />
              화 · 목 야간진료
            </span>
            <span className="hidden md:inline text-[#6e555a] text-[11px] truncate">
              부산 사하구 하신중앙로 341, 1층 · 점심 12:30~14:00 (14시 진료 시작)
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 font-medium shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 font-bold text-[#2b2022] hover:text-[#7d3543] transition text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-[#a34c5b]" />
              <span>{CLINIC_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#f5e6e8]"
            : "bg-white py-4 shadow-3xs border-b border-[#f5e6e8]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img
              src={getAssetPath("/images/logo-full.png")}
              alt="경희사랑채한의원 부산 하단점"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <span className="text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 bg-[#fef7f9] text-[#7d3543] border border-[#f2dde1] rounded shrink-0 self-center">
              {CLINIC_INFO.branchName}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#7d3543] transition-colors py-1"
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
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#4a2e34] bg-[#fdf5f7] hover:bg-[#faebee] border border-[#edd2d7] transition flex items-center gap-1.5 shadow-3xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#a34c5b]" />
              <span>간편 예약</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              onClick={() => openBooking()}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#4a2e34] bg-[#fdf5f7] hover:bg-[#faebee] border border-[#edd2d7] sm:hidden"
            >
              예약
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 토글"
              className="p-1.5 sm:p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-[#fdf5f7] transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#5c4046]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#f5e6e8] shadow-xl px-5 py-6 space-y-4 animate-fade-in">
          <div className="space-y-1 divide-y divide-[#faf0f2] text-sm font-semibold text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 hover:bg-[#fdf5f7] rounded-lg hover:text-[#7d3543] transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3 bg-[#fdf5f7] hover:bg-[#faebee] text-[#4a2e34] border border-[#edd2d7] font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-3xs"
            >
              <Calendar className="w-4 h-4 text-[#a34c5b]" />
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

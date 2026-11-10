"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_INFO, OPERATING_HOURS } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking, openNonCovered } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "한의원 소개", href: "#intro" },
    { name: "진료 과목", href: "#clinics" },
    { name: "원장 소개", href: "#doctor" },
    { name: "치료 프로세스", href: "#process" },
    { name: "원내 시설", href: "#tour" },
    { name: "진료시간 & 오시는 길", href: "#location" },
    { name: "자주 묻는 질문", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#123e32] text-white text-xs py-2 px-4 border-b border-[#1b5344]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-medium bg-[#1b5344] px-2 py-0.5 rounded text-[#dfcaa7]">
              <Clock className="w-3 h-3" />
              월·수·금 야간진료 (밤 8시까지)
            </span>
            <span className="hidden sm:inline text-gray-200">
              하단역 1번 출구 도보 1분 · 2시간 무료 주차
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 font-bold text-white hover:text-[#dfcaa7] transition"
            >
              <Phone className="w-3 h-3 text-[#dfcaa7]" />
              <span>{CLINIC_INFO.formattedPhone}</span>
            </a>
            <button
              onClick={openNonCovered}
              className="text-gray-300 hover:text-white transition text-[11px] underline underline-offset-2"
            >
              비급여 수가 안내
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#123e32] to-[#1b5344] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif text-xl font-bold tracking-tighter text-[#dfcaa7]">
                愛
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#123e32]">
                  경희사랑채<span className="font-light text-gray-700">한의원</span>
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 bg-[#f4efe6] text-[#123e32] rounded">
                  부산점
                </span>
              </div>
              <p className="text-[10px] text-gray-500 tracking-wider uppercase font-medium">
                Kyunghee Sarangchae Korean Medicine Clinic
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#123e32] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#123e32] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={CLINIC_INFO.naverBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#03C75A] hover:bg-[#02b14f] transition flex items-center gap-1.5 shadow-sm"
            >
              <span>네이버 예약</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => openBooking()}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#123e32] hover:bg-[#1b5344] transition flex items-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#dfcaa7]" />
              <span>간편 예약 신청</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBooking()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#123e32] sm:hidden"
            >
              예약
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 토글"
              className="p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-5 py-6 space-y-4 animate-fade-in">
          <div className="space-y-1 divide-y divide-gray-100 text-sm font-semibold text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 hover:bg-gray-50 rounded-lg hover:text-[#123e32] transition"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openNonCovered();
              }}
              className="block w-full text-left py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-lg text-xs font-medium"
            >
              비급여 진료비용 안내 열기
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3 bg-[#123e32] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4 text-[#dfcaa7]" />
              간편 진료 예약 신청
            </button>
            <a
              href={CLINIC_INFO.naverBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#03C75A] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow"
            >
              <ExternalLink className="w-4 h-4" />
              네이버 실시간 예약
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full py-2.5 border border-gray-300 text-gray-800 font-bold rounded-xl text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#123e32]" />
              전화 바로 연결 ({CLINIC_INFO.formattedPhone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "진료시간 & 오시는 길", href: "#location" },
    { name: "자주 묻는 질문", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-200"
            : "bg-white py-4 shadow-3xs border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" title="하단 한의원 경희사랑채한의원">
            <img
              src={getAssetPath("/images/logo-full.webp")}
              alt="하단 한의원 경희사랑채한의원 (부산 사하구 하단역 8번 출구)"
              width={129}
              height={34}
              decoding="async"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <span className="text-xs font-bold px-2.5 py-0.5 bg-slate-50 text-slate-900 border border-slate-300 rounded-md shrink-0 self-center">
              {CLINIC_INFO.branchName}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-bold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0f70b1] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 토글"
              className="p-2 text-slate-800 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-5 py-6 space-y-4 animate-fade-in">
          <div className="space-y-1 divide-y divide-slate-100 text-base font-bold text-slate-900">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-2 hover:bg-[#f0f7fb] rounded-lg hover:text-[#0f70b1] transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

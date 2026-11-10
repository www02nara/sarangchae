"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Phone, Clock, ChevronRight, Heart } from "lucide-react";

export default function Footer() {
  const { openNonCovered } = useModal();

  return (
    <footer className="bg-[#fefbfc] text-[#6e585c] text-xs pt-12 pb-20 sm:pb-12 border-t border-[#f5e6e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#f5e6e8]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#fdf2f4] border border-[#f0d8dd] flex items-center justify-center text-[#7d3543] font-bold text-sm shadow-3xs">
                愛
              </div>
              <span className="text-xl font-bold text-[#261d1f] tracking-tight">
                {CLINIC_INFO.name}
              </span>
            </div>

            <p className="text-[#6e585c] text-xs leading-relaxed max-w-sm">
              {CLINIC_INFO.slogan}
              <br />
              경희대학교 한의과대학 출신 정병준 대표원장의 1:1 맞춤 진료
            </p>

            <div>
              <button
                onClick={openNonCovered}
                className="px-3 py-1.5 bg-white hover:bg-[#fef7f9] text-[#7d3543] border border-[#f0d8dd] rounded-lg transition font-semibold text-[11px] flex items-center gap-1 shadow-3xs"
              >
                <span>비급여 진료비용 안내</span>
                <ChevronRight className="w-3 h-3 text-[#a34c5b]" />
              </button>
            </div>
          </div>

          {/* Operating Hours Summary */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-[#261d1f] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#a34c5b]" />
              진료시간 안내
            </h4>
            <ul className="space-y-1 text-[#6e585c] text-[11px]">
              <li className="flex justify-between">
                <span className="text-[#7d3543] font-bold">화 · 목 (야간진료)</span>
                <span className="font-semibold text-[#261d1f]">09:30 ~ 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>월 · 수 · 금</span>
                <span>09:30 ~ 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>토 요 일 (연속진료)</span>
                <span>09:30 ~ 14:30</span>
              </li>
              <li className="flex justify-between text-[#8a4d56]">
                <span>휴게시간(점심)</span>
                <span>12:30 ~ 14:00 (14시 진료 시작)</span>
              </li>
              <li className="flex justify-between text-red-500 font-semibold">
                <span>일요일 (정기휴무)</span>
                <span>휴진</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-[#261d1f] uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#a34c5b]" />
              대표 문의
            </h4>
            <div className="text-xl font-black text-[#261d1f] tracking-tight">
              {CLINIC_INFO.formattedPhone}
            </div>
            <p className="text-[#6e585c] text-[11px] leading-relaxed">
              {CLINIC_INFO.address}
              <br />
              {CLINIC_INFO.addressDetail}
            </p>
          </div>
        </div>

        {/* Business & Legal info */}
        <div className="pt-6 space-y-2 text-[11px] text-[#8c7478]">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>상호명: {CLINIC_INFO.name}</span>
            <span>대표자: {CLINIC_INFO.representative}</span>
            <span>전화번호: {CLINIC_INFO.phone}</span>
            <span>사업자등록번호: {CLINIC_INFO.registrationNumber}</span>
            <span>소재지: {CLINIC_INFO.address}</span>
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-[#9e878b]">
            <div>&copy; 2025 {CLINIC_INFO.name}. All Rights Reserved.</div>
            <div className="flex items-center gap-3">
              <button onClick={openNonCovered} className="hover:text-[#261d1f] transition">
                비급여 수가표
              </button>
              <span>|</span>
              <a href="#location" className="hover:text-[#261d1f] transition">
                오시는 길
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

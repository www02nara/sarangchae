"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Phone, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
  const { openNonCovered } = useModal();

  return (
    <footer className="bg-[#423135] text-[#d6c7ca] text-xs pt-12 pb-20 sm:pb-12 border-t border-[#544044]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#594448]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#d97581] flex items-center justify-center text-white font-bold text-sm">
                愛
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {CLINIC_INFO.name}
              </span>
            </div>

            <p className="text-[#bfaeb1] text-xs leading-relaxed max-w-sm">
              {CLINIC_INFO.slogan}
              <br />
              경희대학교 한의과대학 출신 정병준 대표원장의 1:1 맞춤 진료
            </p>

            <div>
              <button
                onClick={openNonCovered}
                className="px-3 py-1.5 bg-[#543f43] hover:bg-[#634c51] text-[#fce7ea] rounded-lg transition font-semibold text-[11px] flex items-center gap-1"
              >
                <span>비급여 진료비용 고지</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Operating Hours Summary */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#fce7ea]" />
              진료시간 안내
            </h4>
            <ul className="space-y-1 text-[#bfaeb1] text-[11px]">
              <li className="flex justify-between">
                <span className="text-white font-semibold">화 · 목 (야간진료)</span>
                <span>09:30 ~ 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>월 · 수 · 금</span>
                <span>09:30 ~ 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>토 요 일 (연속진료)</span>
                <span>09:30 ~ 14:30</span>
              </li>
              <li className="flex justify-between text-[#e0a8b0]">
                <span>휴게시간(점심)</span>
                <span>12:30 ~ 14:00 (14시 진료 시작)</span>
              </li>
              <li className="flex justify-between text-[#f59ea8]">
                <span>일요일 (정기휴무)</span>
                <span>휴진</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#fce7ea]" />
              대표 문의
            </h4>
            <div className="text-xl font-black text-white">
              {CLINIC_INFO.formattedPhone}
            </div>
            <p className="text-[#bfaeb1] text-[11px]">
              {CLINIC_INFO.address}
              <br />
              {CLINIC_INFO.addressDetail}
            </p>
          </div>
        </div>

        {/* Business & Legal info */}
        <div className="pt-6 space-y-2 text-[11px] text-[#9c898c]">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>상호명: {CLINIC_INFO.name}</span>
            <span>대표자: {CLINIC_INFO.representative}</span>
            <span>전화번호: {CLINIC_INFO.phone}</span>
            <span>사업자등록번호: {CLINIC_INFO.registrationNumber}</span>
            <span>소재지: {CLINIC_INFO.address}</span>
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-[#8a777a]">
            <div>&copy; 2025 {CLINIC_INFO.name}. All Rights Reserved.</div>
            <div className="flex items-center gap-3">
              <button onClick={openNonCovered} className="hover:text-white transition">
                비급여 수가표
              </button>
              <span>|</span>
              <a href="#location" className="hover:text-white transition">
                오시는 길
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

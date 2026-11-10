"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, Clock, ChevronRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] text-slate-600 text-xs pt-12 pb-20 sm:pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src={getAssetPath("/images/logo-full.png")}
                alt={`${CLINIC_INFO.name} ${CLINIC_INFO.branchName}`}
                className="h-8 w-auto object-contain"
              />
              <span className="text-[10px] font-bold px-2 py-0.5 bg-white text-[#0f70b1] border border-[#d0e5f5] rounded-md shrink-0 self-center">
                {CLINIC_INFO.branchName}
              </span>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              {CLINIC_INFO.slogan}
              <br />
              부산 사하구 하단 한의원 경희사랑채 · 언제나 곁에서 든든하게, 나만의 주치 한의사가 되어 드리겠습니다.
            </p>
          </div>

          {/* Operating Hours Summary */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0f70b1]" />
              진료시간 안내
            </h4>
            <ul className="space-y-1 text-slate-600 text-[11px]">
              <li className="flex justify-between">
                <span className="text-[#0f70b1] font-bold">화 · 목 (야간진료)</span>
                <span className="font-semibold text-slate-900">09:30 ~ 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>월 · 수 · 금</span>
                <span>09:30 ~ 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>토 요 일 (연속진료)</span>
                <span>09:30 ~ 14:30</span>
              </li>
              <li className="flex justify-between text-[#c2410c] font-medium">
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
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0f70b1]" />
              대표 문의
            </h4>
            <div className="text-xl font-black text-slate-900 tracking-tight">
              {CLINIC_INFO.formattedPhone}
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {CLINIC_INFO.address}
              <br />
              {CLINIC_INFO.addressDetail}
            </p>
          </div>
        </div>

        {/* Business & Legal info */}
        <div className="pt-6 space-y-2 text-[11px] text-slate-500">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>상호명: {CLINIC_INFO.name}</span>
            <span>대표자: {CLINIC_INFO.representative}</span>
            <span>전화번호: {CLINIC_INFO.phone}</span>
            <span>사업자등록번호: {CLINIC_INFO.registrationNumber}</span>
            <span>소재지: {CLINIC_INFO.address} (하단동 589-18, 1층)</span>
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400">
            <div>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</div>
            <div className="flex items-center gap-3">
              <a href="#location" className="hover:text-slate-700 transition">
                하단 한의원 오시는 길
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

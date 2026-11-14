"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] text-slate-700 text-xs sm:text-sm pt-12 pb-20 sm:pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <img
                src={getAssetPath("/images/logo-full.webp")}
                alt={`${CLINIC_INFO.name} ${CLINIC_INFO.branchName}`}
                width={121}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xs font-bold px-2.5 py-0.5 bg-white text-slate-900 border border-slate-300 rounded-md shrink-0 self-center">
                {CLINIC_INFO.branchName}
              </span>
            </div>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-sm">
              {CLINIC_INFO.slogan}
              <br />
              부산 사하구 하단 한의원 경희사랑채 · 언제나 곁에서 든든하게, 나만의 주치 한의사가 되어 드리겠습니다.
            </p>
          </div>

          {/* Operating Hours Summary */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-900" />
              진료시간 안내
            </h3>
            <ul className="space-y-2 text-slate-900 text-xs sm:text-sm">
              <li className="flex justify-between">
                <span className="font-bold text-slate-900">화 · 목 (야간진료)</span>
                <span className="font-semibold text-slate-900">09:30 ~ 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-900">월 · 수 · 금</span>
                <span className="text-slate-900">09:30 ~ 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-900">토 요 일 (연속진료)</span>
                <span className="text-slate-900">09:30 ~ 14:30</span>
              </li>
              <li className="flex justify-between font-semibold text-slate-900">
                <span className="text-slate-900">휴게시간(점심)</span>
                <span className="text-slate-900">12:30 ~ 14:00 (14시 진료 시작)</span>
              </li>
              <li className="flex justify-between font-bold text-slate-900">
                <span className="text-slate-900">일요일 (정기휴무)</span>
                <span className="text-slate-900">휴진</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0f70b1]" />
              대표 문의
            </h3>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {CLINIC_INFO.formattedPhone}
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              {CLINIC_INFO.address}
              <br />
              {CLINIC_INFO.addressDetail}
            </p>
          </div>
        </div>

        {/* Business & Legal info */}
        <div className="pt-6 space-y-2 text-xs sm:text-[13px] text-slate-600 text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5">
            <span>상호명: {CLINIC_INFO.name}</span>
            <span>대표자: {CLINIC_INFO.representative}</span>
            <span>전화번호: {CLINIC_INFO.phone}</span>
            <span>사업자등록번호: {CLINIC_INFO.registrationNumber}</span>
            <span>소재지: {CLINIC_INFO.address} (하단동 589-18, 1층)</span>
          </div>

          <div className="pt-2 text-xs text-slate-600">
            <div>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

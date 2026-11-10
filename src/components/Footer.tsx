"use client";

import React from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Phone, MapPin, Clock, ShieldCheck, ChevronRight } from "lucide-react";

export default function Footer() {
  const { openNonCovered } = useModal();

  return (
    <footer className="bg-[#10241e] text-gray-300 text-xs pt-14 pb-20 sm:pb-12 border-t border-[#173a30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#1b3d32]">
          {/* Col 1: Clinic Brand & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1b5344] flex items-center justify-center text-white">
                <span className="font-serif text-lg font-bold text-[#dfcaa7]">愛</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {CLINIC_INFO.name}{" "}
                <span className="text-xs font-normal text-[#dfcaa7] border border-[#dfcaa7]/40 px-1.5 py-0.5 rounded ml-1">
                  {CLINIC_INFO.branchName}
                </span>
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              {CLINIC_INFO.slogan}
              <br />
              경희대학교 한의과대학 출신 전문 의료진이 정직과 신뢰를 바탕으로 환자분의 건강한 일상 회복을 위해 정성을 다합니다.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={openNonCovered}
                className="px-3 py-1.5 bg-[#1b3d32] hover:bg-[#254f42] text-[#dfcaa7] rounded-lg transition font-semibold text-[11px] flex items-center gap-1"
              >
                <span>비급여 진료비용 고지</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Col 2: Operating Hours Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#dfcaa7]" />
              진료시간 안내
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-xs">
              <li className="flex justify-between">
                <span className="text-white font-medium">월 · 수 · 금 (야간진료)</span>
                <span>09:30 ~ 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>화 · 목</span>
                <span>09:30 ~ 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white font-medium">토 요 일 (점심시간 없음)</span>
                <span>09:30 ~ 14:30</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>평일 점심시간</span>
                <span>13:00 ~ 14:00</span>
              </li>
              <li className="flex justify-between text-red-400">
                <span>일요일 / 공휴일</span>
                <span>휴진</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#dfcaa7]" />
              상담 및 예약
            </h4>
            <div className="text-2xl font-black text-white tracking-tight">
              {CLINIC_INFO.formattedPhone}
            </div>
            <p className="text-gray-400 text-xs">
              {CLINIC_INFO.address}
              <br />
              {CLINIC_INFO.addressDetail}
            </p>
            <p className="text-[11px] text-gray-500">
              {CLINIC_INFO.parkingInfo}
            </p>
          </div>
        </div>

        {/* Business & Medical Law Disclaimers */}
        <div className="pt-6 space-y-3 text-[11px] text-gray-500 leading-relaxed">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>상호명: {CLINIC_INFO.fullName}</span>
            <span>대표자: {CLINIC_INFO.representative}</span>
            <span>사업자등록번호: {CLINIC_INFO.registrationNumber}</span>
            <span>의료기관개설신고: 제{CLINIC_INFO.medicalInstitutionNumber}호</span>
            <span>소재지: {CLINIC_INFO.address}</span>
          </div>

          <p className="text-[10px] text-gray-500 border-t border-[#1b3d32]/60 pt-3">
            ※ 의료법 준수 안내: 본 홈페이지에 게시된 모든 치료 사진 및 후기는 환자의 동의를 얻어 게재되었으며, 의료법을 준수합니다. 개별 시술 및 치료 효과는 개인의 체질과 건강 상태에 따라 차이가 있을 수 있으며 부작용(멍, 붓기, 알레르기 반응 등)이 발생할 수 있으므로 시술 전 반드시 담당 한의사와 충분한 상담을 거치시기 바랍니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-2 text-[11px] text-gray-500 gap-2">
            <div>
              &copy; 2025 {CLINIC_INFO.fullName}. All Rights Reserved.
            </div>
            <div className="flex items-center gap-3">
              <button onClick={openNonCovered} className="hover:text-gray-300 transition">
                비급여 수가표
              </button>
              <span>|</span>
              <a href="#location" className="hover:text-gray-300 transition">
                오시는 길
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

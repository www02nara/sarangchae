"use client";

import React from "react";
import { DOCTOR_PROFILE, CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Award, CheckCircle2, Phone, Calendar, ExternalLink } from "lucide-react";

export default function DoctorIntro() {
  const { openBooking } = useModal();

  return (
    <section id="doctor" className="py-16 sm:py-20 bg-[#faf8f4] border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  src={getAssetPath("/images/doctor.jpg")}
                  alt="경희사랑채한의원 정병준 대표원장"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-[#123e32] text-white text-center">
                <div className="text-xs text-[#dfcaa7] font-semibold">경희대학교 한의과대학 출신</div>
                <div className="text-lg font-bold mt-0.5">정병준 대표원장</div>
              </div>
            </div>
          </div>

          {/* Doctor Information (Concise & Readable) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs font-bold text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Doctor Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 mb-2">
                “내 가족을 치료하는 마음으로
                <br />
                <span className="text-[#123e32]">정직하게 바른 치료</span>를 약속합니다.”
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                통증의 근본 원인을 면밀히 진단하고, 과잉 진료 없이 환자분께 꼭 필요한 맞춤 치료를 시행합니다.
              </p>
            </div>

            {/* 4 Core Qualifications */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200/80 shadow-2xs space-y-2.5">
              <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5 pb-1 border-b border-gray-100">
                <Award className="w-4 h-4 text-[#c5a47e]" />
                주요 약력 및 학회 활동
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>경희대학교 한의과대학 출신</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>척추신경추나의학회 인증의</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>대한한의학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>대한한방내과학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>사상체질의학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>현 경희사랑채한의원 대표원장</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#03C75A] hover:bg-[#02b14f] text-white text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shadow-2xs"
              >
                <span>네이버 플레이스 정보 확인</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => openBooking()}
                className="px-5 py-3 rounded-xl bg-[#123e32] hover:bg-[#1b5344] text-white text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#dfcaa7]" />
                <span>1:1 진료 예약 신청</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

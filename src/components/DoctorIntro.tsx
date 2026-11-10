"use client";

import React from "react";
import { DOCTOR_PROFILE, CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Award, CheckCircle2, Phone, Calendar, ExternalLink, Heart } from "lucide-react";

export default function DoctorIntro() {
  const { openBooking } = useModal();

  return (
    <section id="doctor" className="py-16 sm:py-20 bg-[#fff8f9] border-b border-[#fde5ea]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white">
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  src={getAssetPath("/images/doctor.jpg")}
                  alt="경희사랑채한의원 정병준 대표원장"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-[#f08998] text-white text-center">
                <div className="text-xs text-white/90 font-medium">경희대학교 한의과대학 출신</div>
                <div className="text-lg font-bold mt-0.5">정병준 대표원장</div>
              </div>
            </div>
          </div>

          {/* Doctor Information (Soft Light Pastel Pink) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs font-bold text-[#c9596b] bg-white px-3 py-1 rounded-full uppercase tracking-wider border border-[#fcd3db]">
                Doctor Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#362427] mt-3 mb-2">
                “내 가족을 치료하는 마음으로
                <br />
                <span className="text-[#f08998]">정직하고 바른 진료</span>를 약속합니다.”
              </h2>
              <p className="text-[#6b5256] text-sm leading-relaxed">
                환자 한 분 한 분의 체질과 증상을 깊이 헤아려 근본적인 원인을 치료합니다.
                과잉 진료 없이 꼭 필요한 정직한 한방 치료만을 시행합니다.
              </p>
            </div>

            {/* Core Qualifications */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#fde5ea] shadow-3xs space-y-2.5">
              <div className="text-xs font-bold text-[#362427] flex items-center gap-1.5 pb-1 border-b border-[#fde5ea]/60">
                <Award className="w-4 h-4 text-[#f08998]" />
                주요 약력 및 활동
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5c3e42]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f08998] shrink-0" />
                  <span>경희대학교 한의과대학 출신</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f08998] shrink-0" />
                  <span>대한한방소아과학회 회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f08998] shrink-0" />
                  <span>대한한의학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f08998] shrink-0" />
                  <span>대한한방내과학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f08998] shrink-0" />
                  <span>사상체질의학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f08998] shrink-0" />
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
                className="px-5 py-3 rounded-xl bg-[#03C75A] hover:bg-[#02b14f] text-white text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shadow-3xs"
              >
                <span>네이버 플레이스 보기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-5 py-3 rounded-xl bg-[#f08998] hover:bg-[#e87787] text-white text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shadow-3xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>원내 전화 상담</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { DOCTOR_PROFILE, CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Award, BookOpen, HeartHandshake, CheckCircle2, UserCheck, Calendar } from "lucide-react";

export default function DoctorIntro() {
  const { openBooking } = useModal();

  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Photo & Badge Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#123e32]/10 to-[#c5a47e]/25 rounded-3xl transform -rotate-1 blur-xs" />
              
              <div className="relative bg-[#f4efe6] rounded-2xl overflow-hidden border border-[#dfcaa7] shadow-xl">
                {/* Doctor Portrait Photo */}
                <div className="relative h-96 sm:h-[420px] overflow-hidden">
                  <img
                    src={getAssetPath("/images/doctor.jpg")}
                    alt="경희사랑채한의원 정병준 대표원장"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="inline-block px-3 py-1 bg-[#123e32] text-[#dfcaa7] text-xs font-bold rounded-full mb-1 w-fit">
                      대표원장 한의사
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">
                      {DOCTOR_PROFILE.name}{" "}
                      <span className="text-sm font-semibold text-gray-300">대표원장</span>
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      경희대학교 한의과대학 출신 · 척추신경추나의학회 인증의
                    </p>
                  </div>
                </div>

                {/* Bottom Trust Highlight */}
                <div className="bg-[#123e32] text-white p-5 text-center">
                  <p className="text-xs text-[#dfcaa7] font-semibold mb-1">
                    “1:1 전담 책임 진료의 약속”
                  </p>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    상담부터 치료, 처방, 사후 관리까지 의료진 교체 없이 대표원장이 직접 진료합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Greeting & Qualifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
                Medical Director
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-2">
                경희사랑채한의원 의료진 소개
              </h2>
              <p className="text-lg sm:text-xl font-bold text-[#123e32] font-serif leading-snug">
                {DOCTOR_PROFILE.greeting}
              </p>
            </div>

            {/* Philosophy Cards */}
            <div className="space-y-3 bg-[#fbf9f5] border border-[#e9e3d5] p-5 sm:p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#123e32]" />
                경희사랑채의 3대 진료 약속
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {DOCTOR_PROFILE.philosophy.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#123e32] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications & Careers */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#c5a47e]" />
                대표원장 주요 약력 & 학술활동
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {DOCTOR_PROFILE.careers.map((career, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => openBooking()}
                className="px-6 py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-bold rounded-xl transition shadow flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4 text-[#dfcaa7]" />
                <span>원장 1:1 상담 예약하기</span>
              </button>

              <a
                href={CLINIC_INFO.naverBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition text-sm flex items-center gap-2"
              >
                <span>네이버 리뷰 & 예약 확인</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

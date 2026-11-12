"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Award, CheckCircle2 } from "lucide-react";

export default function DoctorIntro() {
  return (
    <section id="doctor" className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-[#0f70b1] bg-white px-3 py-1 rounded-full uppercase tracking-wider border border-[#d0e5f5]">
            Doctor Profile
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
            대표원장 소개
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            부산 사하구 <strong>하단 한의원</strong> 경희사랑채는 내 가족을 치료하는 마음으로 정직하고 바른 진료만을 약속드립니다.
          </p>
        </div>

        {/* Top: Doctor Photo & Philosophy Calligraphy Image (Matched Height & Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white flex flex-col justify-between">
              <div className="relative flex-1 min-h-[300px] sm:min-h-[340px] overflow-hidden bg-slate-100">
                <img
                  src={getAssetPath("/images/doctor.webp")}
                  alt="경희사랑채한의원 정병준 대표원장"
                  width={384}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 text-center shrink-0">
                <div className="text-xs text-[#0f70b1] font-semibold">경희대학교 한의과대학 출신</div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">정병준 대표원장</div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Philosophy Calligraphy Image (Transparent Background) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="relative w-full h-full flex items-center justify-center px-2 py-4 sm:px-4 sm:py-6 lg:px-6">
              <img
                src={getAssetPath("/images/doctor-message.webp")}
                alt="화려함보다는 편안함을, 빠른 진료보다는 깊은 이야기를 나누고 싶습니다 - 경희사랑채한의원 정병준 대표원장 진료 철학"
                width={1221}
                height={681}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-full object-contain block"
              />
            </div>
          </div>

        </div>

        {/* Bottom: Core Qualifications & Career Details */}
        <div className="mt-6 sm:mt-8 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-3xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0f70b1]" />
              <span>정병준 대표원장 주요 약력 & 학회 활동</span>
            </div>
            <span className="text-xs text-[#0f70b1] font-semibold bg-[#f0f7fb] px-2.5 py-1 rounded-full border border-[#d0e5f5] hidden sm:inline">
              1:1 맞춤 책임진료
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4d7c1f] shrink-0" />
              <span>경희대학교 한의과대학 출신</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4d7c1f] shrink-0" />
              <span>척추·관절 및 침구치료 임상</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4d7c1f] shrink-0" />
              <span>대한한방소아과학회 회원</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4d7c1f] shrink-0" />
              <span>대한한의학회 정회원</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4d7c1f] shrink-0" />
              <span>대한한방내과학회 정회원</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4d7c1f] shrink-0" />
              <span>사상체질의학회 정회원</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2 lg:col-span-3 pt-2 border-t border-slate-100 font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-[#0f70b1] shrink-0" />
              <span>현 경희사랑채한의원 대표원장 (부산 사하구 하단)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

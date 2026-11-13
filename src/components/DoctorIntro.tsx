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

        {/* Main: Doctor Photo & Philosophy Calligraphy (Identical Vertical Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white group">
              <img
                src={getAssetPath("/images/doctor.webp")}
                alt="경희사랑채한의원 정병준 대표원장"
                width={656}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent pt-10 pb-3.5 px-4 text-center text-white">
                <div className="text-base sm:text-lg font-bold tracking-tight">정병준 대표원장</div>
                <div className="text-xs text-slate-200 font-medium">경희사랑채한의원</div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Philosophy Calligraphy Image */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full h-[360px] sm:h-[400px] flex items-center justify-center">
              <img
                src={getAssetPath("/images/doctor-message.webp")}
                alt="화려함보다는 편안함을, 빠른 진료보다는 깊은 이야기를 나누고 싶습니다 - 경희사랑채한의원 정병준 대표원장 진료 철학"
                width={1220}
                height={698}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain block"
              />
            </div>
          </div>

        </div>

        {/* Bottom: 4 Core Qualifications & Careers */}
        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 shadow-3xs flex items-center gap-3 hover:border-[#b9ddf5] transition">
              <div className="w-8 h-8 rounded-lg bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0 border border-[#d0e5f5]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">경희대학교 한의과대학</span>
            </div>

            <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 shadow-3xs flex items-center gap-3 hover:border-[#b9ddf5] transition">
              <div className="w-8 h-8 rounded-lg bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0 border border-[#d0e5f5]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">대한한의학회 정회원</span>
            </div>

            <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 shadow-3xs flex items-center gap-3 hover:border-[#b9ddf5] transition">
              <div className="w-8 h-8 rounded-lg bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0 border border-[#d0e5f5]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">대한면역약침학회 정회원</span>
            </div>

            <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 shadow-3xs flex items-center gap-3 hover:border-[#b9ddf5] transition">
              <div className="w-8 h-8 rounded-lg bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0 border border-[#d0e5f5]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">대한청년추나학회 정회원</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

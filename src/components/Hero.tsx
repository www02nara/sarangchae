"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0f7fb] text-[#0f70b1] text-xs font-bold border border-[#d0e5f5] max-w-full">
              <Heart className="w-3.5 h-3.5 text-[#ed5f21] fill-[#ed5f21] shrink-0" />
              <span className="truncate">언제나 곁에서 든든하게, 나만의 주치 한의사가 되어 드리겠습니다</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              몸과 마음이 편안한
              <br />
              <span>경희</span><span className="text-[#ed5f21]">사랑채</span><span className="font-light text-[#0f70b1]">한의원</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              증상에만 매달리지 않고 아픔의 뿌리를 바르게 치료합니다.
              <br className="hidden sm:inline" />
              내 가족을 치료하는 마음으로 꼭 필요한 정직한 진료만을 약속드립니다.
            </p>

            {/* 3 Simple Badges Echoing Logo Colors */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-2 max-w-lg text-center">
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-3xs">
                <div className="font-extrabold text-xs sm:text-sm text-[#0f70b1]">화 · 목 야간</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1">저녁 8시까지</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-3xs">
                <div className="font-extrabold text-xs sm:text-sm text-[#72b033]">한방소아과</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1">성장 · 면역</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-3xs">
                <div className="font-extrabold text-xs sm:text-sm text-[#ed5f21]">1층 단독</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1">편안한 방문</div>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[4/3] sm:aspect-[14/11]">
                <img
                  src={getAssetPath("/images/hero-clinic.jpg")}
                  alt="경희사랑채한의원"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-slate-200">{CLINIC_INFO.address}</div>
                  <div className="text-xl font-bold">{CLINIC_INFO.name}</div>
                  <div className="text-xs text-slate-300 mt-0.5">{CLINIC_INFO.representative} 대표원장</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

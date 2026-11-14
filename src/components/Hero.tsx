"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Clock, MapPin } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0f7fb] text-[#0f70b1] text-xs sm:text-sm font-bold border border-[#d0e5f5] max-w-full">
                <span className="truncate">부산 사하구 하단 한의원 · 언제나 곁에서 나만의 주치의</span>
              </div>

              <h1 className="tracking-tight leading-[1.25]">
                <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f70b1] mb-1 sm:mb-2">
                  몸과 마음이 편안한
                </span>
                <span className="sr-only">경희사랑채한의원</span>
                <img
                  src={getAssetPath("/images/logo-text.webp")}
                  alt="부산 사하구 하단 한의원 경희사랑채한의원"
                  width={302}
                  height={74}
                  decoding="async"
                  className="h-14 sm:h-18 lg:h-22 w-auto object-contain block max-w-full my-1.5"
                />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-xl leading-relaxed font-normal">
                경희사랑채한의원은 증상에만 매달리지 않고 아픔의 뿌리를 바르게 치료합니다.
                <br />
                하단역 8번 출구 앞, 내 가족을 치료하는 마음으로 꼭 필요한 정직한 진료만을 약속드립니다.
              </p>
            </div>

            {/* Core Info Highlights (야간진료, 1층 위치) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="bg-white p-4 sm:p-4.5 rounded-2xl border border-slate-200 shadow-3xs flex flex-col items-center justify-center text-center gap-2 hover:border-[#b9ddf5] transition">
                <div className="w-10 h-10 rounded-xl bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0 border border-[#d0e5f5]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg text-slate-900">화 · 목 야간진료</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">저녁 8시까지 진료</div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-4.5 rounded-2xl border border-slate-200 shadow-3xs flex flex-col items-center justify-center text-center gap-2 hover:border-[#b9ddf5] transition">
                <div className="w-10 h-10 rounded-xl bg-[#f2f9ec] text-[#4d7c1f] flex items-center justify-center shrink-0 border border-[#d7ecc7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg text-slate-900">1층 위치</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">계단 없는 편안한 내원</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image (Height matched to left text) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={getAssetPath("/images/hero-clinic.webp")}
                alt="부산 사하구 하단 한의원 경희사랑채한의원 외관 전경"
                width={680}
                height={680}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent pt-8 pb-3 sm:pb-3.5 px-4 sm:px-5 text-white">
                <div className="text-xs sm:text-sm font-medium text-slate-100 leading-tight mb-1">
                  {CLINIC_INFO.address}
                </div>
                <div className="text-base sm:text-lg font-bold flex items-center gap-2 leading-tight">
                  <span>{CLINIC_INFO.name}</span>
                  <span className="text-xs sm:text-sm font-normal text-slate-200">| {CLINIC_INFO.representative} 대표원장</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

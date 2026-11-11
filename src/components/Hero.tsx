"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Heart, Clock, MapPin } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0f7fb] text-[#0f70b1] text-xs font-bold border border-[#d0e5f5] max-w-full">
                <Heart className="w-3.5 h-3.5 text-[#ed5f21] fill-[#ed5f21] shrink-0" />
                <span className="truncate">부산 사하구 하단 한의원 · 언제나 곁에서 든든한 주치의</span>
              </div>

              <h1 className="tracking-tight leading-[1.25]">
                <span className="block text-lg sm:text-2xl lg:text-3xl font-bold text-[#0f70b1] mb-1 sm:mb-2">
                  몸과 마음이 편안한
                </span>
                <span className="sr-only">경희사랑채한의원</span>
                <img
                  src={getAssetPath("/images/logo-text.webp")}
                  alt="부산 사하구 하단 한의원 경희사랑채한의원"
                  width={400}
                  height={90}
                  fetchPriority="high"
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain block max-w-full my-1"
                />
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                부산 사하구 <strong>하단 한의원</strong> 경희사랑채는 증상에만 매달리지 않고 아픔의 뿌리를 바르게 치료합니다. 하단역 8번 출구 앞, 내 가족을 치료하는 마음으로 꼭 필요한 정직한 진료만을 약속드립니다.
              </p>
            </div>

            {/* Core Info Highlights (야간진료, 1층 위치) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-3xs flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">화 · 목 야간진료</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">저녁 8시까지 진료</div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-3xs flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#f2f9ec] text-[#4d7c1f] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">1층 위치</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">계단 없는 편안한 내원</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image (Height matched to left text) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-72 sm:h-96 lg:h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={getAssetPath("/images/hero-clinic.webp")}
                alt="부산 사하구 하단 한의원 경희사랑채한의원 외관 전경"
                width={1200}
                height={1068}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                <div className="text-xs font-semibold text-slate-200">{CLINIC_INFO.address}</div>
                <div className="text-xl font-bold">{CLINIC_INFO.name}</div>
                <div className="text-xs text-slate-200 mt-0.5">{CLINIC_INFO.representative} 대표원장</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

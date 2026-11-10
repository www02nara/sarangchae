"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Heart, Clock, MapPin, MessageCircle } from "lucide-react";

export default function Hero() {
  const { openBooking } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0f7fb] text-[#0f70b1] text-xs font-bold border border-[#d0e5f5] max-w-full">
                <Heart className="w-3.5 h-3.5 text-[#ed5f21] fill-[#ed5f21] shrink-0" />
                <span className="truncate">언제나 곁에서 든든하게, 나만의 주치 한의사가 되어 드리겠습니다</span>
              </div>

              <h1 className="tracking-tight leading-[1.25]">
                <span className="block text-lg sm:text-2xl lg:text-3xl font-bold text-[#0f70b1] mb-1.5 sm:mb-2.5">
                  몸과 마음이 편안한
                </span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">경희</span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ea4025]">사랑채</span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">한의원</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                증상에만 매달리지 않고 아픔의 뿌리를 바르게 치료합니다.
                <br className="hidden sm:inline" />
                내 가족을 치료하는 마음으로 꼭 필요한 정직한 진료만을 약속드립니다.
              </p>
            </div>

            {/* Core Info Highlights (야간진료, 1층 위치, 카카오톡 간편 예약 상담) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-3xs flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">화 · 목 야간진료</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">저녁 8시까지 진료</div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-3xs flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#f2f9ec] text-[#72b033] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">1층 위치</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">계단 없는 편안한 내원</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openBooking()}
                className="bg-white hover:bg-amber-50/50 transition-colors text-left p-3 sm:p-3.5 rounded-2xl border border-amber-200/80 shadow-3xs flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-1.5 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-[#fee500] text-[#3c1e1e] flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-[#3c1e1e]" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1">
                    <span>카카오톡 상담</span>
                    <span className="text-[10px] text-amber-700 bg-amber-100 px-1 py-0.2 rounded font-semibold">간편예약</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">간편한 1:1 예약 & 문의</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Visual Image (Height matched to left text) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-72 sm:h-96 lg:h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
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
    </section>
  );
}

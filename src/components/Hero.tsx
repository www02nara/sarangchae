"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, Calendar, ArrowRight, ExternalLink, Clock, MapPin } from "lucide-react";

export default function Hero() {
  const { openBooking } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f6f0] via-[#faf8f4] to-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text (Punchy & Clean) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123e32]/10 text-[#123e32] text-xs font-bold">
              <span>경희대 출신 한의사 정병준 대표원장 1:1 진료</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.2]">
              몸과 마음이 편안한
              <br />
              <span className="text-[#123e32]">경희사랑채한의원</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              증상에만 매달리지 않고 통증의 뿌리를 바르게 치료합니다.
              <br className="hidden sm:inline" />
              과잉 진료 없이 꼭 필요한 정직한 치료만을 약속드립니다.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-4 rounded-xl bg-[#123e32] hover:bg-[#1b5344] text-white font-bold text-sm sm:text-base transition shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#dfcaa7]" />
                <span>전화 상담 ({CLINIC_INFO.formattedPhone})</span>
              </a>

              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-sm sm:text-base transition shadow-md flex items-center gap-2"
              >
                <span>네이버 플레이스</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => openBooking()}
                className="px-5 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold text-sm sm:text-base transition shadow-2xs"
              >
                진료 예약 신청
              </button>
            </div>

            {/* 3 Simple Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200/70 max-w-lg text-center">
              <div className="bg-white/80 p-3 rounded-xl border border-gray-200/80">
                <div className="font-extrabold text-sm text-[#123e32]">화 · 목 야간</div>
                <div className="text-[11px] text-gray-500 mt-0.5">저녁 8시까지</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-gray-200/80">
                <div className="font-extrabold text-sm text-[#123e32]">1층 단독</div>
                <div className="text-[11px] text-gray-500 mt-0.5">편안한 방문</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-gray-200/80">
                <div className="font-extrabold text-sm text-[#123e32]">비수술 추나</div>
                <div className="text-[11px] text-gray-500 mt-0.5">건강보험 적용</div>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[14/11]">
                <img
                  src={getAssetPath("/images/hero-clinic.jpg")}
                  alt="경희사랑채한의원"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-sm font-semibold text-[#dfcaa7]">부산 사하구 하신중앙로 341 1층</div>
                  <div className="text-xl font-bold">경희사랑채한의원</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

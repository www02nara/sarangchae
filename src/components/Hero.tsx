"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, Calendar, ArrowRight, ExternalLink, Heart, Clock, MapPin, Smile } from "lucide-react";

export default function Hero() {
  const { openBooking } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf2f4] via-[#fff8f9] to-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-[#fce7ea]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text (Pastel Pink Tone & Clean) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fce7ea] text-[#c9626e] text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-[#d97581] fill-[#d97581]" />
              <span>경희대학교 한의과대학 출신 정병준 대표원장 1:1 맞춤 진료</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#382427] tracking-tight leading-[1.2]">
              몸과 마음이 편안한
              <br />
              <span className="text-[#d97581]">경희사랑채한의원</span>
            </h1>

            <p className="text-base sm:text-lg text-[#61494d] max-w-xl leading-relaxed">
              증상에만 매달리지 않고 아픔의 뿌리를 바르게 치료합니다.
              <br className="hidden sm:inline" />
              내 가족을 치료하는 마음으로 꼭 필요한 정직한 진료만을 약속드립니다.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-4 rounded-xl bg-[#d97581] hover:bg-[#c9626e] text-white font-bold text-sm sm:text-base transition shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-white/90" />
                <span>전화 상담 ({CLINIC_INFO.formattedPhone})</span>
              </a>

              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-sm sm:text-base transition shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>네이버 플레이스</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => openBooking()}
                className="px-5 py-4 rounded-xl bg-white hover:bg-[#fff0f2] text-[#4a3539] border border-[#fce7ea] font-bold text-sm sm:text-base transition shadow-2xs"
              >
                진료 예약 신청
              </button>
            </div>

            {/* 3 Simple Badges (No Chuna, Includes Pediatric & Night Clinic) */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#fce7ea] max-w-lg text-center">
              <div className="bg-white/90 p-3 rounded-xl border border-[#fce7ea] shadow-2xs">
                <div className="font-extrabold text-sm text-[#d97581]">화 · 목 야간</div>
                <div className="text-[11px] text-gray-500 mt-0.5">저녁 8시까지</div>
              </div>
              <div className="bg-white/90 p-3 rounded-xl border border-[#fce7ea] shadow-2xs">
                <div className="font-extrabold text-sm text-[#d97581]">한방소아과</div>
                <div className="text-[11px] text-gray-500 mt-0.5">우리아이 성장·면역</div>
              </div>
              <div className="bg-white/90 p-3 rounded-xl border border-[#fce7ea] shadow-2xs">
                <div className="font-extrabold text-sm text-[#d97581]">1층 단독</div>
                <div className="text-[11px] text-gray-500 mt-0.5">편안한 방문</div>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[14/11]">
                <img
                  src={getAssetPath("/images/hero-clinic.jpg")}
                  alt="경희사랑채한의원"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-[#fce7ea]">부산 사하구 하신중앙로 341 1층</div>
                  <div className="text-xl font-bold">경희사랑채한의원</div>
                  <div className="text-xs text-gray-200 mt-0.5">정병준 대표원장</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, Calendar, ArrowRight, ExternalLink, Heart, Clock, MapPin, Smile } from "lucide-react";

export default function Hero() {
  const { openBooking } = useModal();

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

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 font-bold text-sm sm:text-base transition shadow-3xs hover:shadow-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0f70b1]" />
                <span>전화 상담 ({CLINIC_INFO.formattedPhone})</span>
              </a>

              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-sm sm:text-base transition shadow-xs hover:shadow-md flex items-center justify-center gap-2"
              >
                <span>네이버 플레이스</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => openBooking()}
                className="flex-1 sm:flex-initial px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl bg-[#0f70b1] hover:bg-[#0c5c92] text-white font-bold text-sm sm:text-base transition shadow-xs hover:shadow-md flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>진료 예약 신청</span>
              </button>
            </div>

            {/* 3 Simple Badges Echoing Logo Colors */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-slate-200 max-w-lg text-center">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-3xs">
                <div className="font-extrabold text-xs sm:text-sm text-[#0f70b1]">화 · 목 야간</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">저녁 8시까지</div>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-3xs">
                <div className="font-extrabold text-xs sm:text-sm text-[#72b033]">한방소아과</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">성장 · 면역</div>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-3xs">
                <div className="font-extrabold text-xs sm:text-sm text-[#ed5f21]">1층 단독</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">편안한 방문</div>
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
                  <div className="text-xs font-semibold text-slate-200">부산 사하구 하신중앙로 341 1층</div>
                  <div className="text-xl font-bold">경희사랑채한의원</div>
                  <div className="text-xs text-slate-300 mt-0.5">정병준 대표원장</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const { openBooking } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f5ef] via-[#faf8f2] to-[#ffffff] pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-gray-100">
      {/* Background Subtle Traditional / Organic Graphic Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123e32_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-left">
            {/* Top Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123e32]/8 text-[#123e32] text-xs sm:text-sm font-semibold tracking-wide mb-6 border border-[#123e32]/15 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#c5a47e]" />
              <span>경희대학교 한의과대학 출신 정병준 대표원장 1:1 맞춤 진료</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="hidden sm:inline font-bold text-[#c5a47e]">부산 사하구 하단</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#111827] tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 font-sans">
              따뜻한 <span className="text-[#123e32] underline decoration-[#c5a47e] decoration-4 underline-offset-8">사랑채</span>처럼 머물고,
              <br />
              <span className="text-gray-900">경희의 바른 의술</span>로 회복합니다
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-normal">
              그때뿐인 통증 완화가 아닌, 틀어진 골격과 약해진 체질의 근본 원인을 바로잡습니다.
              풍부한 임상 경험을 가진 대표원장이 첫 상담부터 추나, 침구, 처방까지 끝까지 책임집니다.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <button
                onClick={() => openBooking()}
                className="px-7 py-4 rounded-xl bg-[#123e32] hover:bg-[#1b5344] text-white font-bold text-sm sm:text-base transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-[#dfcaa7]" />
                <span>간편 진료 예약 신청</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CLINIC_INFO.naverBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-sm sm:text-base transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>네이버 실시간 예약</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-5 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#123e32]" />
                <span>전화 문의</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium pt-2 border-t border-gray-200/60">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> 사하구 하신중앙로 341 1층
              </span>
              <span>•</span>
              <span>편안한 1층 진료</span>
              <span>•</span>
              <span className="text-[#123e32] font-semibold">화·목 저녁 8시 야간진료</span>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Glow Box */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#123e32]/20 to-[#c5a47e]/30 rounded-3xl transform rotate-2 blur-xs" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={getAssetPath("/images/hero-clinic.jpg")}
                  alt="경희사랑채한의원 부산점 원내 전경"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-bold text-[#dfcaa7] tracking-wider uppercase">
                    Kyunghee Sarangchae Clinic
                  </span>
                  <div className="text-lg font-bold">
                    부산 하단 경희사랑채한의원
                  </div>
                  <p className="text-xs text-gray-200">
                    편안함과 정성을 다하는 사랑채 공간
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-lg bg-[#123e32] text-[#dfcaa7] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">
                    경희대 출신 1:1
                  </div>
                  <div className="text-[11px] text-gray-500">
                    대표원장 직접 진료
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div className="text-xs font-bold text-gray-900">
                  자동차보험 100% 적용
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#123e32]/40 transition group">
            <div className="w-9 h-9 rounded-xl bg-[#123e32]/10 text-[#123e32] flex items-center justify-center mb-3 group-hover:bg-[#123e32] group-hover:text-white transition">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-sm sm:text-base text-gray-900 mb-1">
              경희대 출신 1:1 책임진료
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              의료진 교체 없이 대표원장이 진단부터 치료까지 전 과정 전담
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#123e32]/40 transition group">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-3 group-hover:bg-blue-800 group-hover:text-white transition">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-sm sm:text-base text-gray-900 mb-1">
              추나요법 건강보험 적용
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              디스크·협착증 비수술 교정, 연간 20회 건강보험 혜택
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#123e32]/40 transition group">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-800 group-hover:text-white transition">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-sm sm:text-base text-gray-900 mb-1">
              교통사고 본인부담금 0원
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              대인 접수번호 하나로 추나·약침·맞춤한약 100% 자동차보험 처리
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#123e32]/40 transition group">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-3 group-hover:bg-amber-800 group-hover:text-white transition">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-sm sm:text-base text-gray-900 mb-1">
              화·목 야간진료 (저녁 8시)
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              퇴근 후에도 여유롭게 진료받는 바쁜 직장인을 위한 배려
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

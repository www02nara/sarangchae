"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { Sparkles, Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const { openBooking } = useModal();

  return (
    <section id="intro" className="py-16 sm:py-24 bg-[#faf8f4] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#c5a47e]/20 rounded-3xl transform rotate-1 blur-xs" />
              
              <div className="relative bg-[#123e32] text-white rounded-2xl overflow-hidden shadow-xl">
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={getAssetPath("/images/hero-clinic.jpg")}
                    alt="경희사랑채한의원 로비"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123e32] via-[#123e32]/40 to-transparent" />
                  <div className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-[#dfcaa7] rounded-full text-xs font-bold tracking-wider">
                    CLINIC PHILOSOPHY
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                    “몸과 마음이 쉬어가는
                    <br />
                    가장 편안한 <span className="text-[#dfcaa7]">사랑채</span>가 되겠습니다”
                  </h3>

                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    예로부터 사랑채는 손님을 정성으로 맞이하고 따뜻한 온기를 나누던 소통의 공간이었습니다.
                    경희의 검증된 의술과 온 마음을 다한 정성으로 환자분의 건강한 내일을 함께 열어가겠습니다.
                  </p>

                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-[#dfcaa7] font-semibold">
                    <span>경희사랑채한의원 부산점</span>
                    <span>대표원장 김경희 배상</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
                About Kyunghee Sarangchae
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                기본에 충실한 한의학,
                <br />
                검증된 임상으로 증명합니다
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                부산 사하구 하단동에 새롭게 문을 연 경희사랑채한의원은 척추·관절 통증 비수술 치료부터 자동차보험 집중 케어, 식약처 인증 안심 보약 및 체질 다이어트까지 가족 주치의로서 평생 건강을 책임집니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-1">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>원칙 있는 정직한 진료</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  불필요한 과잉 진료 없이 꼭 필요한 침, 추나, 약침, 한약만을 정직하게 제안합니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-1">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>위생과 안전 최우선 원칙</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  1회용 멸균 침과 부항컵 전원 사용, 매일 철저한 원내 소독으로 안심 치료 환경을 유지합니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-1">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>체계적인 문진과 맥진</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  환자분의 이야기를 충분히 경청하고 정밀 맥진과 체형 진단을 통해 질환의 뿌리를 찾습니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-1">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>접근성과 편의성 극대화</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  하단역 1번 출구 도보 1분, 전용 2시간 무료 주차, 월·수·금 야간진료로 시간 부담 없이 내원 가능합니다.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => openBooking()}
                className="px-6 py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-bold rounded-xl transition shadow text-xs sm:text-sm flex items-center gap-2"
              >
                <span>진료 상담 예약하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

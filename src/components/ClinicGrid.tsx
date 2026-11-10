"use client";

import React from "react";
import { CLINIC_SERVICES, CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, ExternalLink } from "lucide-react";

export default function ClinicGrid() {
  const clinicImages: { [key: string]: string } = {
    "pain-joint": "/images/spine.jpg",
    "pediatrics": "/images/pediatric.jpg",
    "traffic-accident": "/images/traffic.jpg",
    "herbal-medicine": "/images/herbal.jpg",
    "diet-women": "/images/diet.jpg",
  };

  return (
    <section id="clinics" className="py-16 sm:py-20 bg-white border-b border-[#f5e6e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#7d3543] bg-[#fef7f9] border border-[#f0d8dd] px-3 py-1 rounded-full uppercase tracking-wider">
            Key Treatments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#261d1f] mt-3 mb-2">
            주요 진료 과목
          </h2>
          <p className="text-[#6e585c] text-sm sm:text-base">
            환자의 상태와 체질에 맞춘 1:1 정밀 한방 치료 프로그램을 운영합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#f5e6e8] shadow-3xs hover:border-[#edd2d7] hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getAssetPath(clinicImages[clinic.id] || "/images/spine.jpg")}
                    alt={clinic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#5c2d37] border border-[#edd2d7] text-xs font-bold px-2.5 py-1 rounded-lg shadow-3xs">
                    {clinic.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#261d1f]">
                    {clinic.title}
                  </h3>
                  <p className="text-[#6e585c] text-xs sm:text-sm leading-relaxed">
                    {clinic.shortDesc}
                  </p>

                  {/* Concise Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {clinic.symptoms.map((sym, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-[#fefbfc] text-[#4a3539] text-[11px] font-medium rounded-md border border-[#f5e6e8]"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-[11px] text-[#8c6b71]">
                <span>1:1 정밀 맞춤 처방 및 집중 케어</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Contact (Clean Whisper Blush Card) */}
          <div className="bg-gradient-to-b from-[#fefbfc] to-[#fdf5f7] border-2 border-[#edd2d7] rounded-2xl p-6 sm:p-8 text-[#261d1f] flex flex-col justify-between shadow-3xs">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#7d3543] bg-white border border-[#f0d8dd] px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
                Direct Contact
              </span>
              <h3 className="text-2xl font-bold text-[#261d1f]">
                진료 문의 & 상담
              </h3>
              <p className="text-[#6e585c] text-xs sm:text-sm leading-relaxed">
                궁금하신 점이나 예약 관련 문의는 언제든 편하게 전화해 주세요. 원내에서 정성껏 안내해 드립니다.
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <div className="text-2xl sm:text-3xl font-black text-[#261d1f] tracking-tight">
                {CLINIC_INFO.formattedPhone}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full py-3 bg-[#fdf5f7] hover:bg-[#faebee] text-[#4a2e34] border border-[#edd2d7] font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-3xs"
                >
                  <Phone className="w-4 h-4 text-[#a34c5b]" />
                  <span>전화 바로 연결</span>
                </a>
                <a
                  href={CLINIC_INFO.naverPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#03C75A] hover:bg-[#02b14f] text-white font-semibold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-3xs"
                >
                  <span>네이버 플레이스 보기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

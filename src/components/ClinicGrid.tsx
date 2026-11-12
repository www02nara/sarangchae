"use client";

import React from "react";
import { CLINIC_SERVICES, CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Phone, ExternalLink } from "lucide-react";

export default function ClinicGrid() {
  const clinicImages: { [key: string]: string } = {
    "pain-joint": "/images/acupuncture-webtoon.webp",
    "pediatrics": "/images/pediatric-webtoon.webp",
    "traffic-accident": "/images/cupping-webtoon.webp",
    "herbal-medicine": "/images/herbal-remedy-webtoon.webp",
    "diet-women": "/images/women-diet-webtoon.webp",
  };

  return (
    <section id="clinics" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0f70b1] bg-[#f0f7fb] border border-[#d0e5f5] px-3 py-1 rounded-full uppercase tracking-wider">
            Key Treatments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
            주요 진료 과목
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            <strong>하단 한의원</strong> 경희사랑채는 환자의 체질과 상태에 맞춰 근본 원인을 다스리는 1:1 맞춤 정밀 한방 치료 프로그램을 운영합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-3xs hover:border-[#b9ddf5] hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getAssetPath(clinicImages[clinic.id] || "/images/acupuncture-webtoon.webp")}
                    alt={`하단 한의원 ${clinic.title} - 경희사랑채한의원`}
                    width={400}
                    height={192}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0f70b1] border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-lg shadow-3xs">
                    {clinic.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {clinic.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {clinic.shortDesc}
                  </p>

                  {/* Concise Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {clinic.symptoms.map((sym, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-50 text-slate-700 text-[11px] font-medium rounded-md border border-slate-200"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Contact (Center Aligned) */}
          <div className="bg-gradient-to-br from-[#f0f7fb] via-white to-[#f0f7fb] border-2 border-[#b9ddf5] rounded-2xl p-6 sm:p-8 text-slate-900 flex flex-col justify-between items-center text-center shadow-3xs">
            <div className="space-y-3 flex flex-col items-center">
              <span className="text-xs font-bold text-[#0f70b1] bg-white border border-[#d0e5f5] px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
                Direct Contact
              </span>
              <h3 className="text-2xl font-bold text-slate-900 text-center">
                진료 문의 & 상담
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center max-w-sm">
                궁금하신 점이나 진료 관련 문의는 언제든 편하게 전화해 주세요. 원내에서 정성껏 안내해 드립니다.
              </p>
            </div>

            <div className="pt-6 space-y-3 w-full flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-black text-[#0f70b1] tracking-tight text-center">
                {CLINIC_INFO.formattedPhone}
              </div>
              <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full py-3 bg-[#0f70b1] hover:bg-[#0c5c92] text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-white" />
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

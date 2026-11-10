"use client";

import React from "react";
import { CLINIC_SERVICES, CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { getAssetPath } from "@/utils/assetPath";
import { ArrowRight, Phone } from "lucide-react";

export default function ClinicGrid() {
  const { openBooking } = useModal();

  const clinicImages: { [key: string]: string } = {
    "spine-joint": "/images/spine.jpg",
    "traffic-accident": "/images/traffic.jpg",
    "herbal-medicine": "/images/herbal.jpg",
    "diet": "/images/diet.jpg",
    "womens-health": "/images/facility1.jpg",
  };

  return (
    <section id="clinics" className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            Key Treatments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-2">
            주요 진료 과목
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            환자의 상태와 체질에 맞춘 1:1 맞춤 한방 치료 프로그램을 운영합니다.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-[#fbf9f5] rounded-2xl overflow-hidden border border-[#e9e3d5] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getAssetPath(clinicImages[clinic.id] || "/images/spine.jpg")}
                    alt={clinic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#123e32]/90 backdrop-blur-xs text-[#dfcaa7] text-xs font-bold px-3 py-1 rounded-lg">
                    {clinic.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {clinic.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {clinic.shortDesc}
                  </p>

                  {/* Concise Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {clinic.symptoms.slice(0, 3).map((sym, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white text-gray-700 text-[11px] font-medium rounded-md border border-gray-200"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                <button
                  onClick={() => openBooking(clinic.title)}
                  className="w-full py-2.5 bg-white hover:bg-[#123e32] text-gray-800 hover:text-white border border-gray-300 hover:border-[#123e32] font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>상담 및 예약</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: Contact & Phone Card */}
          <div className="bg-[#123e32] rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#dfcaa7] uppercase tracking-wider">
                Direct Contact
              </span>
              <h3 className="text-2xl font-bold text-white">
                진료 문의 및 예약
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                궁금하신 점이 있으시면 언제든 편하게 전화해 주세요. 친절하게 안내해 드립니다.
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <div className="text-2xl sm:text-3xl font-black text-[#dfcaa7]">
                {CLINIC_INFO.formattedPhone}
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-3 bg-white text-[#123e32] hover:bg-gray-100 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>전화 바로 연결</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

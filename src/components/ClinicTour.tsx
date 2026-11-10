"use client";

import React from "react";
import { getAssetPath } from "@/utils/assetPath";

export default function ClinicTour() {
  const tourItems = [
    {
      title: "1인 프라이빗 치료실",
      desc: "위생적인 1회용 침구와 멸균 시트를 갖춘 아늑한 치료 공간",
      image: "/images/facility1.jpg",
    },
    {
      title: "소아·가족 진료실",
      desc: "아이들과 부모님이 긴장하지 않고 편안하게 머무는 진료실",
      image: "/images/pediatric.jpg",
    },
    {
      title: "원내 청정 탕전실",
      desc: "식약처 GMP 인증 규격 한약재를 정성껏 달이는 탕전 시스템",
      image: "/images/herbal.jpg",
    },
    {
      title: "대기 라운지 & 검진실",
      desc: "따뜻하고 쾌적하게 쉴 수 있는 편안한 사랑채 공간",
      image: "/images/facility2.jpg",
    },
  ];

  return (
    <section id="tour" className="py-16 sm:py-20 bg-white border-b border-[#fde5ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#c9596b] bg-[#fff0f3] border border-[#fcd3db] px-3 py-1 rounded-full uppercase tracking-wider">
            Clinic Facility
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#362427] mt-3 mb-2">
            원내 시설 안내
          </h2>
          <p className="text-[#6b5256] text-xs sm:text-sm">
            쾌적함과 위생을 최우선으로 관리하는 경희사랑채한의원 공간입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tourItems.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-[#fde5ea] bg-white shadow-3xs hover:border-[#f9c2cc] hover:shadow-md transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={getAssetPath(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-base text-[#362427]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#73585c] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

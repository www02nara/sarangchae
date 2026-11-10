"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Sparkles, CheckCircle2, Shield, Heart, Eye } from "lucide-react";

export default function ClinicTour() {
  const [activeFacility, setActiveFacility] = useState(0);

  const facilities = [
    {
      title: "1인 프라이빗 치료실",
      subtitle: "남의 시선 없이 편안하게 힐링하는 독립 치료 공간",
      desc: "개별 칸막이와 온열 베드가 완비된 쾌적한 1인 치료실에서 아늑하고 위생적으로 침구, 부항, 물리치료를 받으실 수 있습니다. 매 환자마다 1회용 베개 시트와 소독을 철저히 진행합니다.",
      highlights: ["1회용 멸균 침 & 1회용 부항컵 전원 사용", "개별 온도 조절 온열 베드", "조용하고 아늑한 음악과 조도"],
      badge: "위생안심 1인실",
      image: "/images/facility1.jpg",
    },
    {
      title: "척추 추나 전용 교정실",
      subtitle: "신경 압박 해소와 골격 교정을 위한 첨단 추나베드",
      desc: "인체공학적으로 설계된 최신 척추 추나베드를 구비하여 목, 허리, 골반의 미세한 틀어짐까지 안전하고 정밀하게 교정합니다. 대표원장이 직접 체형을 정밀 분석한 후 1:1 맞춤 교정을 시행합니다.",
      highlights: ["척추신경추나의학회 정규 인증 추나베드", "경추·요추·골반 3단계 분절 드롭 교정", "건강보험 적용으로 부담 완화"],
      badge: "척추교정센터",
      image: "/images/spine.jpg",
    },
    {
      title: "원내 청정 안심 탕전실",
      subtitle: "식약처 GMP 인증 한약재를 정성껏 달이는 오픈형 탕전실",
      desc: "외주 탕전이 아닌, 원내에서 원장이 한약재를 직접 검수하고 조제하는 원내 안심 탕전 시스템을 운영합니다. 3중 정수 시스템의 청정수와 전통 압력 옹기 탕전기로 유효 성분을 온전히 추출합니다.",
      highlights: ["식약처 hGMP 인증 규격 한약재 100%", "중금속·잔류농약 안전성 검사 완료", "투명 유리창 오픈 탕전실 운영"],
      badge: "원내 직접 탕전",
      image: "/images/herbal.jpg",
    },
    {
      title: "체성분 검사실 & 힐링 라운지",
      subtitle: "정확한 데이터 기반의 진단과 따뜻한 사랑채 대기실",
      desc: "체수분, 근육량, 내장지방을 정밀 측정하는 최신 인바디 검사기와 혈압, 스트레스 지수를 측정하는 진단 장비를 완비했습니다. 대기 공간에는 따뜻한 한방차와 쾌적한 휴식 공간이 준비되어 있습니다.",
      highlights: ["최신 인바디(InBody) 정밀 체성분 측정", "자율신경 스트레스 및 혈관 탄성도 검사", "계절별 원내 프리미엄 한방차 무료 제공"],
      badge: "정밀 검진실",
      image: "/images/facility2.jpg",
    },
  ];

  const current = facilities[activeFacility];

  return (
    <section id="tour" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Clinic Facility
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            편안함과 위생을 최우선으로 한 원내 시설
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            사랑채처럼 따뜻하고 쾌적한 공간에서 진정한 치유와 쉼을 경험해보세요.
          </p>
        </div>

        {/* Facility Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {facilities.map((fac, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFacility(idx)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                activeFacility === idx
                  ? "bg-[#123e32] text-white border-[#123e32] shadow-md"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span
                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full inline-block mb-1.5 ${
                  activeFacility === idx
                    ? "bg-[#1b5344] text-[#dfcaa7]"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {fac.badge}
              </span>
              <div className="font-bold text-sm sm:text-base">{fac.title}</div>
            </button>
          ))}
        </div>

        {/* Detailed Facility Display */}
        <div className="bg-[#fbf9f5] border border-[#e9e3d5] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Photo Box */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] border-2 border-white">
              <img
                src={getAssetPath(current.image)}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#123e32]/90 text-[#dfcaa7] text-xs font-bold mb-2 backdrop-blur-xs w-fit">
                  {current.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {current.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Description & Points */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">공간 특징 안내</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {current.desc}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#123e32]">
                  Key Amenities & Standards
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {current.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-700" /> 1회용 멸균 의료기구 원칙
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#c5a47e]" /> 매일 청결 소독 관리
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { CLINIC_SERVICES } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import {
  CheckCircle,
  ArrowRight,
  Activity,
  Car,
  Feather,
  Flame,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export default function SymptomCheck() {
  const [activeTab, setActiveTab] = useState(0);
  const { openBooking } = useModal();

  const iconMap: { [key: string]: React.ReactNode } = {
    Activity: <Activity className="w-5 h-5" />,
    Car: <Car className="w-5 h-5" />,
    Feather: <Feather className="w-5 h-5" />,
    Flame: <Flame className="w-5 h-5" />,
    HeartPulse: <HeartPulse className="w-5 h-5" />,
  };

  const currentService = CLINIC_SERVICES[activeTab];

  return (
    <section id="symptoms" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Symptom Finder
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            어떤 문제로 찾아오셨나요?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            나의 증상에 맞는 맞춤 치료 로드맵을 확인해보세요.
            <br className="hidden sm:inline" />
            경희사랑채한의원이 일시적인 진통이 아닌 근본적인 원인을 정확히 치료합니다.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {CLINIC_SERVICES.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  isActive
                    ? "bg-[#123e32] text-white shadow-md scale-102"
                    : "bg-[#f4efe6]/60 text-gray-700 hover:bg-[#f4efe6] hover:text-gray-900"
                }`}
              >
                <span className={isActive ? "text-[#dfcaa7]" : "text-gray-500"}>
                  {iconMap[item.iconName] || <Activity className="w-4 h-4" />}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-[#fbf9f5] border border-[#e9e3d5] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-[#123e32] text-[#dfcaa7] text-xs font-bold rounded-lg mb-2">
                  {currentService.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {currentService.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {currentService.fullDesc}
                </p>
              </div>

              {/* Symptoms Checklist */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#c5a47e]" />
                  이런 증상이 있다면 사랑채 진료가 필요합니다
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.symptoms.map((symptom, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-200/70 text-xs sm:text-sm text-gray-700 font-medium shadow-2xs"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Treatment methods & Action */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#e9e3d5] shadow-md space-y-5">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-semibold text-[#123e32] tracking-wide uppercase">
                  Key Treatments
                </span>
                <h4 className="text-lg font-bold text-gray-900 mt-1">
                  사랑채 맞춤 치료 솔루션
                </h4>
              </div>

              <ul className="space-y-3">
                {currentService.treatmentMethods.map((tm, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-[#123e32]/10 text-[#123e32] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{tm}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => openBooking(currentService.title)}
                  className="w-full py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-md group text-sm"
                >
                  <span>{currentService.title} 1:1 맞춤 상담 신청</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

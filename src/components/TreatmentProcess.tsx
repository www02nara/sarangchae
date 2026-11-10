"use client";

import React from "react";
import { TREATMENT_STEPS } from "@/data/clinicData";
import { FileText, Cpu, Stethoscope, RefreshCw, ArrowRight } from "lucide-react";

export default function TreatmentProcess() {
  const stepIcons = [
    <FileText key="1" className="w-6 h-6" />,
    <Cpu key="2" className="w-6 h-6" />,
    <Stethoscope key="3" className="w-6 h-6" />,
    <RefreshCw key="4" className="w-6 h-6" />,
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#fbf9f5] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Treatment System
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            체계적이고 과학적인 4단계 진료 시스템
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            원인을 명확히 짚어내고 재발을 방지하는 경희사랑채한의원만의 1:1 맞춤 진료 프로세스입니다.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENT_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-[#e9e3d5] shadow-xs hover:shadow-md transition relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#123e32] text-[#dfcaa7] flex items-center justify-center shadow-xs">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif font-black text-3xl text-gray-200">
                    {step.step}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#c5a47e] uppercase tracking-wider mb-1">
                  STEP {step.step}
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#123e32] text-white flex items-center justify-center text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

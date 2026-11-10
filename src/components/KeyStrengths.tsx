"use client";

import React from "react";
import { CORE_VALUES } from "@/data/clinicData";
import { Award, Stethoscope, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export default function KeyStrengths() {
  const icons = [
    <Award key="1" className="w-6 h-6 text-[#123e32]" />,
    <Stethoscope key="2" className="w-6 h-6 text-[#123e32]" />,
    <ShieldCheck key="3" className="w-6 h-6 text-[#123e32]" />,
    <Clock key="4" className="w-6 h-6 text-[#123e32]" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Our Core Values
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            왜 경희사랑채한의원일까요?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            원칙을 지키는 정직한 치료로 환자분께 건강과 일상의 행복을 되돌려 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((item, idx) => (
            <div
              key={item.number}
              className="bg-[#fbf9f5] rounded-2xl p-6 sm:p-7 border border-[#e9e3d5] hover:border-[#123e32]/40 transition group relative shadow-2xs hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#dfcaa7] flex items-center justify-center shadow-2xs group-hover:bg-[#123e32] group-hover:text-white transition">
                  {icons[idx]}
                </div>
                <span className="font-serif font-black text-2xl text-[#c5a47e]/60 group-hover:text-[#c5a47e] transition">
                  {item.number}
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/utils/assetPath";
import { Award, CheckCircle2 } from "lucide-react";

export default function DoctorIntro() {
  return (
    <section id="doctor" className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white">
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  src={getAssetPath("/images/doctor.jpg")}
                  alt="경희사랑채한의원 정병준 대표원장"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 text-center">
                <div className="text-xs text-[#0f70b1] font-semibold">경희대학교 한의과대학 출신</div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">정병준 대표원장</div>
              </div>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs font-bold text-[#0f70b1] bg-white px-3 py-1 rounded-full uppercase tracking-wider border border-[#d0e5f5]">
                Doctor Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
                “내 가족을 치료하는 마음으로
                <br />
                <span className="text-[#0f70b1]">정직하고 바른 진료</span>를 약속합니다.”
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                부산 사하구 <strong>하단 한의원</strong> 경희사랑채는 환자 한 분 한 분의 체질과 기혈의 흐름을 깊이 헤아려 아픔의 뿌리를 치료합니다.
                과잉 진료 없이 꼭 필요한 정직한 한방 치료만을 시행합니다.
              </p>
            </div>

            {/* Core Qualifications */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-3xs space-y-2.5">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 pb-1 border-b border-slate-100">
                <Award className="w-4 h-4 text-[#0f70b1]" />
                주요 약력 및 활동
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>경희대학교 한의과대학 출신</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>척추·관절 및 침구치료 임상</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>대한한방소아과학회 회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>대한한의학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>대한한방내과학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>사상체질의학회 정회원</span>
                </div>
                <div className="flex items-center gap-1.5 sm:col-span-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033] shrink-0" />
                  <span>현 경희사랑채한의원 대표원장 (부산 사하구 하단)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

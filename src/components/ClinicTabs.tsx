"use client";

import React, { useState } from "react";
import { CLINIC_SERVICES, CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import {
  Activity,
  Car,
  Feather,
  Flame,
  HeartPulse,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ClinicTabs() {
  const [selectedId, setSelectedId] = useState(CLINIC_SERVICES[0].id);
  const { openBooking } = useModal();

  const selectedClinic =
    CLINIC_SERVICES.find((c) => c.id === selectedId) || CLINIC_SERVICES[0];

  const getClinicIcon = (id: string) => {
    switch (id) {
      case "spine-joint":
        return <Activity className="w-5 h-5" />;
      case "traffic-accident":
        return <Car className="w-5 h-5" />;
      case "herbal-medicine":
        return <Feather className="w-5 h-5" />;
      case "diet":
        return <Flame className="w-5 h-5" />;
      case "womens-health":
        return <HeartPulse className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="clinics" className="py-16 sm:py-24 bg-[#faf8f4] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Specialized Clinics
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            경희사랑채한의원 5대 특화 클리닉
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            환자의 상태와 체질에 맞춰 최적의 한의학 치료 프로그램을 1:1 맞춤 설계합니다.
            풍부한 임상경험과 검증된 치료 기법으로 통증의 원인을 뿌리 뽑습니다.
          </p>
        </div>

        {/* Clinic Select Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
          {CLINIC_SERVICES.map((clinic) => {
            const isSelected = clinic.id === selectedId;
            return (
              <button
                key={clinic.id}
                onClick={() => setSelectedId(clinic.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? "bg-[#123e32] text-white border-[#123e32] shadow-lg scale-102"
                    : "bg-white text-gray-800 border-gray-200/90 hover:border-[#123e32]/40 hover:bg-gray-50/80"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition ${
                    isSelected
                      ? "bg-[#1b5344] text-[#dfcaa7]"
                      : "bg-[#123e32]/8 text-[#123e32]"
                  }`}
                >
                  {getClinicIcon(clinic.id)}
                </div>
                <div
                  className={`text-[11px] font-bold uppercase tracking-wider mb-0.5 ${
                    isSelected ? "text-[#dfcaa7]" : "text-[#123e32]"
                  }`}
                >
                  {clinic.tag}
                </div>
                <div className="font-bold text-sm sm:text-base leading-snug">
                  {clinic.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Clinic Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                {selectedClinic.tag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {selectedClinic.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                {selectedClinic.fullDesc}
              </p>
            </div>

            <button
              onClick={() => openBooking(selectedClinic.title)}
              className="shrink-0 px-6 py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-bold rounded-xl transition shadow flex items-center justify-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4 text-[#dfcaa7]" />
              <span>{selectedClinic.title} 진료 예약</span>
            </button>
          </div>

          {/* 3-Column Detailed Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Box 1: Symptoms Checklist */}
            <div className="bg-[#fcfbf9] rounded-2xl p-6 border border-gray-200/70">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                  !
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  주요 진료 대상 및 증상
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                {selectedClinic.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Treatments */}
            <div className="bg-[#fcfbf9] rounded-2xl p-6 border border-gray-200/70">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#123e32]/10 text-[#123e32] flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  사랑채 핵심 치료법
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                {selectedClinic.treatmentMethods.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#123e32] shrink-0 mt-2" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Clinic Special Features */}
            <div className="bg-[#fcfbf9] rounded-2xl p-6 border border-gray-200/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    사랑채만의 진료 약속
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 mb-6">
                  {selectedClinic.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a47e] shrink-0 mt-2" />
                      <span className="font-medium text-gray-800">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call banner */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 text-center">
                <p className="text-xs text-gray-500 mb-1">궁금한 점이 있으신가요?</p>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="font-extrabold text-[#123e32] hover:text-[#1b5344] transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>{CLINIC_INFO.formattedPhone} 전화 문의</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

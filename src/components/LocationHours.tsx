"use client";

import React from "react";
import { CLINIC_INFO, OPERATING_HOURS_TABLE } from "@/data/clinicData";
import { Clock, MapPin, Phone, ExternalLink, Train, Car } from "lucide-react";
import { getAssetPath } from "@/utils/assetPath";

export default function LocationHours() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0f70b1] bg-white px-3 py-1 rounded-full uppercase tracking-wider border border-[#d0e5f5]">
            Hours & Location
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
            진료시간 & 오시는 길
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            <strong>부산 사하구 하단 한의원</strong> 경희사랑채 · 하신중앙로 341, 1층 (하단역 8번 출구 도보 1~2분)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Operating Hours Card (Clean Aligned Table, Vertical Alignment Optimized) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-3xs flex flex-col justify-between space-y-6 h-full">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center border border-[#d0e5f5]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">진료 시간표</h3>
                    <p className="text-xs text-[#0f70b1] font-semibold">화 · 목 저녁 8시까지 야간진료</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-[#fff7ed] text-[#c2410c] border border-[#ffedd5] rounded-full font-bold text-[11px] shrink-0">
                  점심 12:30~14:00
                </span>
              </div>

              {/* Timetable Rows (Strictly Aligned 3-Column Table) */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-3xs divide-y divide-slate-100">
                {/* Table Header (Desktop) */}
                <div className="hidden sm:grid sm:grid-cols-12 bg-slate-50/90 px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <div className="sm:col-span-3">진료 요일</div>
                  <div className="sm:col-span-4">진료 시간</div>
                  <div className="sm:col-span-5 text-left">휴게시간 (점심시간)</div>
                </div>

                {/* Rows */}
                {OPERATING_HOURS_TABLE.map((item, idx) => (
                  <div
                    key={idx}
                    className={`px-3.5 py-2.5 sm:px-4 sm:py-3 transition-colors ${
                      item.isNight
                        ? "bg-[#f0f7fb]/75"
                        : item.isClosed
                        ? "bg-rose-50/40"
                        : "hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-1 sm:gap-0 text-xs sm:text-sm">
                      {/* Column 1: Day & Badge */}
                      <div className="sm:col-span-3 flex items-center justify-between sm:justify-start gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className={`font-bold ${item.isClosed ? "text-rose-600" : item.isNight ? "text-[#0f70b1]" : "text-slate-800"}`}>
                            {item.day}
                          </span>
                          {item.isNight && (
                            <span className="text-[10px] bg-[#0f70b1] text-white px-1.5 py-0.5 rounded font-bold leading-none shrink-0">
                              야간
                            </span>
                          )}
                        </div>
                        {/* Mobile-only hours display right next to day */}
                        <span className={`sm:hidden font-extrabold ${item.isClosed ? "text-rose-600" : "text-slate-900"}`}>
                          {item.hours}
                        </span>
                      </div>

                      {/* Column 2: Hours (Desktop) */}
                      <div className={`hidden sm:block sm:col-span-4 font-bold tracking-tight ${item.isClosed ? "text-rose-600" : "text-slate-900"}`}>
                        {item.hours}
                      </div>

                      {/* Column 3: Break Time */}
                      <div className={`sm:col-span-5 text-[11px] sm:text-xs flex items-center justify-between sm:justify-start gap-1.5 ${item.isClosed ? "text-rose-400 font-medium" : "text-slate-500"}`}>
                        <span className="sm:hidden text-slate-400 font-medium">휴게:</span>
                        <span className="font-medium">{item.breakTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Consultation Direct Button */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 font-bold rounded-xl text-center text-xs sm:text-sm shadow-3xs flex items-center justify-center gap-2 transition shrink-0"
            >
              <Phone className="w-4 h-4 text-[#0f70b1]" />
              <span>전화 상담 및 문의 ({CLINIC_INFO.formattedPhone})</span>
            </a>
          </div>

          {/* Right Column: Directions & Accurate Naver-based Route Map (약도) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-3xs flex flex-col justify-between space-y-5 h-full">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center border border-[#d0e5f5]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">하단 한의원 오시는 길 & 약도</h3>
                    <p className="text-xs text-slate-500">{CLINIC_INFO.address} (하단동 589-18, 1층)</p>
                  </div>
                </div>

                <span className="px-3 py-1 bg-[#fff1f0] text-[#ea4025] border border-[#fecdd3] rounded-full font-bold text-[11px] self-start sm:self-center">
                  하단역 8번 출구 도보 1~2분
                </span>
              </div>

              {/* Official Clinic Route Map Graphic */}
              <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-3xs group">
                <img
                  src={getAssetPath("/images/clinic-map-official.jpg")}
                  alt="부산 사하구 하단 한의원 경희사랑채 오시는 길 약도 (하단역 8번 출구)"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>

              {/* Essential Transit & Parking Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>지하철 & 도보</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    부산 1호선 <strong>하단역 8번 출구</strong>(또는 6번 출구)에서 하신중앙로 방면으로 약 1~2분(100m) 직진하시면 1층에 위치해 있습니다.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#0f70b1]" />
                    <span>주차 안내</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    한의원 바로 앞 전용 주차 공간 및 인근 지정 주차장을 지원하여 자가용으로도 편리하게 방문하실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Map Navigation Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-xs sm:text-sm rounded-xl shadow-3xs flex items-center justify-center gap-1.5 transition"
              >
                <span>네이버 지도 길찾기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={CLINIC_INFO.kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#fee500] hover:bg-[#fdd835] text-[#3c1e1e] font-bold text-xs sm:text-sm rounded-xl shadow-3xs flex items-center justify-center gap-1.5 transition"
              >
                <span>카카오맵 길찾기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
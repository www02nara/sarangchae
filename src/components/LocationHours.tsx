"use client";

import React from "react";
import { CLINIC_INFO, OPERATING_HOURS_TABLE } from "@/data/clinicData";
import { Clock, MapPin, Phone, ExternalLink, Train, Car, Navigation, CheckCircle2 } from "lucide-react";

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
            부산 사하구 하신중앙로 341, 1층 (하단역 1번 출구 도보 5분)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Operating Hours Card (Clean, Non-redundant) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-3xs space-y-5">
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

            {/* Timetable Rows */}
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {OPERATING_HOURS_TABLE.map((item, idx) => (
                <div
                  key={idx}
                  className={`py-2.5 px-3 flex items-center justify-between rounded-lg transition ${
                    item.isNight
                      ? "bg-[#f0f7fb] font-bold text-[#0f70b1]"
                      : item.isClosed
                      ? "text-red-500 font-semibold"
                      : "text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2 w-20">
                    <span>{item.day}</span>
                    {item.isNight && (
                      <span className="text-[10px] bg-[#e0f0fa] text-[#0f70b1] border border-[#b9ddf5] px-1.5 py-0.2 rounded font-bold">
                        야간
                      </span>
                    )}
                  </div>
                  <div className="font-semibold">{item.hours}</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {item.breakTime}
                  </div>
                </div>
              ))}
            </div>

            {/* Concise Hours Notice */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 space-y-1 leading-relaxed">
              <p>• <strong>점심시간(휴게)</strong> : 12:30 ~ 14:00 (<strong>오후 14시 정각 진료 재개</strong>)</p>
              <p>• <strong>토요일</strong> : 점심시간 없이 오후 14:30까지 연속 진료</p>
              <p>• <strong>일요일</strong> : 정기휴무</p>
            </div>

            {/* Phone Consultation Direct Button */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 font-bold rounded-xl text-center text-xs sm:text-sm shadow-3xs flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-[#0f70b1]" />
              <span>전화 상담 및 문의 ({CLINIC_INFO.formattedPhone})</span>
            </a>
          </div>

          {/* Right Column: Directions & Schematic Transit Route Map (약도) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-3xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center border border-[#d0e5f5]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">오시는 길 & 약도</h3>
                  <p className="text-xs text-slate-500">{CLINIC_INFO.address} (하단동 589-18, 1층)</p>
                </div>
              </div>

              <span className="px-2.5 py-1 bg-[#f0f7fb] text-[#0f70b1] border border-[#d0e5f5] rounded-full font-bold text-[11px] shrink-0">
                하단역 1번 출구 도보 5분
              </span>
            </div>

            {/* Visual Schematic Route Map (약도) */}
            <div className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-3 sm:p-4 overflow-hidden shadow-3xs">
              <div className="text-[11px] font-bold text-slate-500 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#0f70b1]" />
                  경희사랑채한의원 주변 약도
                </span>
                <span className="text-[10px] text-slate-400">계단 없는 1층 · 전용 주차</span>
              </div>

              <svg viewBox="0 0 540 280" className="w-full h-auto select-none rounded-xl bg-[#f8fafc] border border-slate-200/80 shadow-2xs" xmlns="http://www.w3.org/2000/svg">
                {/* Background base */}
                <rect width="540" height="280" fill="#f8fafc" />

                {/* City Blocks with subtle soft colors */}
                {/* Block 1 (Top Left) */}
                <rect x="20" y="20" width="220" height="66" rx="10" fill="#e2e8f0" opacity="0.45" />
                <text x="130" y="58" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">하단 상가지구</text>

                {/* Block 2 (Top Right) */}
                <rect x="360" y="20" width="160" height="66" rx="10" fill="#e2e8f0" opacity="0.45" />
                <text x="440" y="58" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">하단오거리 방면 ➔</text>

                {/* Block 3 (Bottom Left) */}
                <rect x="20" y="145" width="220" height="115" rx="10" fill="#e2e8f0" opacity="0.45" />
                <text x="130" y="210" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">하단초등학교 방면</text>

                {/* Roads */}
                {/* Main Horizontal Road: Nakdong-daero */}
                <rect x="0" y="98" width="540" height="40" fill="#e2e8f0" />
                <line x1="0" y1="118" x2="540" y2="118" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="8 6" />
                <text x="440" y="112" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold">낙동대로 (대로변)</text>

                {/* Main Vertical Road: Hasin-jungang-ro */}
                <rect x="270" y="0" width="60" height="280" fill="#cbd5e1" />
                <line x1="300" y1="0" x2="300" y2="280" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 6" />
                
                {/* Road Labels (Clean badges) */}
                <g transform="translate(262, 12)">
                  <rect x="0" y="0" width="76" height="22" rx="11" fill="#475569" />
                  <text x="38" y="15" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">하신중앙로</text>
                </g>

                <g transform="translate(258, 250)">
                  <rect x="0" y="0" width="84" height="20" rx="10" fill="#64748b" />
                  <text x="42" y="14" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="600">신평역 방면 ⬇</text>
                </g>

                {/* Metro Line 1 - Hadan Station (하단역 1번 출구) */}
                <g transform="translate(45, 94)">
                  <rect x="0" y="0" width="155" height="48" rx="12" fill="#ffffff" stroke="#f97316" strokeWidth="2.5" filter="drop-shadow(0 3px 6px rgba(249,115,22,0.18))" />
                  <circle cx="26" cy="24" r="14" fill="#f97316" />
                  <text x="26" y="29" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900">1</text>
                  <text x="50" y="22" fill="#0f172a" fontSize="13" fontWeight="bold">하단역</text>
                  <text x="50" y="38" fill="#ea580c" fontSize="11" fontWeight="bold">1번 출구 (도보 5분)</text>
                </g>

                {/* Walking Route Dashed Line */}
                <path
                  d="M 200 118 L 300 118 L 300 190 L 350 190"
                  fill="none"
                  stroke="#0f70b1"
                  strokeWidth="4"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />

                {/* Walking Distance Badge */}
                <g transform="translate(245, 145)">
                  <rect x="0" y="0" width="110" height="24" rx="12" fill="#0f70b1" filter="drop-shadow(0 2px 4px rgba(15,112,177,0.2))" />
                  <text x="55" y="16" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    도보 약 5분 직진 🚶
                  </text>
                </g>

                {/* Kyunghee Sarangchae Clinic 1st Floor */}
                <g transform="translate(350, 149)">
                  <rect x="0" y="0" width="176" height="82" rx="12" fill="#ffffff" stroke="#0f70b1" strokeWidth="2.5" filter="drop-shadow(0 4px 12px rgba(15,112,177,0.22))" />
                  
                  {/* Floor Badge */}
                  <rect x="12" y="12" width="46" height="20" rx="6" fill="#f0f7fb" stroke="#0f70b1" strokeWidth="1" />
                  <text x="35" y="26" textAnchor="middle" fill="#0f70b1" fontSize="11" fontWeight="900">1층</text>
                  
                  {/* Clinic Name */}
                  <text x="66" y="27" fill="#0f172a" fontSize="13" fontWeight="900">경희사랑채한의원</text>
                  
                  {/* Address */}
                  <text x="12" y="50" fill="#64748b" fontSize="10" fontWeight="500">사하구 하신중앙로 341 (1층)</text>
                  
                  {/* Parking */}
                  <text x="12" y="68" fill="#0f70b1" fontSize="10" fontWeight="bold">🅿️ 한의원 전용 및 인근 주차 지원</text>
                </g>
              </svg>
            </div>

            {/* Essential Transit & Parking Summary (Non-redundant) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-[#f97316]" />
                  <span>지하철 & 도보</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  부산 1호선 <strong>하단역 1번 출구</strong>에서 하신중앙로 방면으로 약 5분간 직진하시면 1층에 바로 위치해 있습니다.
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

            {/* Direct Map Navigation Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
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

"use client";

import React from "react";
import { CLINIC_INFO, OPERATING_HOURS_TABLE } from "@/data/clinicData";
import { Clock, MapPin, Phone, ExternalLink, Train, Car } from "lucide-react";

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
            부산 사하구 하신중앙로 341, 1층 (하단역 8번 출구 도보 1~2분)
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
                    <h3 className="font-bold text-lg text-slate-900">오시는 길 & 약도</h3>
                    <p className="text-xs text-slate-500">{CLINIC_INFO.address} (하단동 589-18, 1층)</p>
                  </div>
                </div>

                <span className="px-3 py-1 bg-[#fff1f0] text-[#ea4025] border border-[#fecdd3] rounded-full font-bold text-[11px] self-start sm:self-center">
                  하단역 8번 출구 도보 1~2분
                </span>
              </div>

              {/* Accurate Naver-based Schematic Route Map (Unified) */}
              <div className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-2.5 sm:p-3 overflow-hidden shadow-3xs">
                <svg viewBox="0 0 560 330" className="w-full h-auto select-none rounded-xl bg-[#f8fafc]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="mapShadow" x="-10%" y="-10%" width="125%" height="130%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodOpacity="0.1" />
                    </filter>
                    <filter id="clinicShadow" x="-15%" y="-15%" width="135%" height="140%">
                      <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#ea4025" floodOpacity="0.22" />
                    </filter>
                  </defs>

                  {/* Map Base Background */}
                  <rect width="560" height="330" fill="#f8fafc" />

                  {/* City Blocks (Soft backgrounds matching real topography) */}
                  <rect x="15" y="15" width="530" height="42" rx="6" fill="#e2e8f0" opacity="0.4" />
                  <path d="M 15 125 L 305 125 L 180 320 L 15 320 Z" fill="#e2e8f0" opacity="0.35" />
                  <path d="M 375 125 L 545 125 L 545 320 L 255 320 Z" fill="#e2e8f0" opacity="0.35" />

                  {/* Horizontal Road: 낙동남로 (낙동대로) */}
                  <rect x="0" y="65" width="560" height="52" fill="#e2e8f0" />
                  <line x1="0" y1="91" x2="560" y2="91" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="8 6" />
                  <text x="35" y="78" fill="#64748b" fontSize="10" fontWeight="bold">낙동남로 (대로변)</text>

                  {/* Busan Metro Line 1 - Hadan Station Tube Bar */}
                  <g transform="translate(40, 75)">
                    <rect x="0" y="0" width="480" height="32" rx="16" fill="#ea580c" />
                    <circle cx="20" cy="16" r="11" fill="#ffffff" />
                    <text x="20" y="20" textAnchor="middle" fill="#ea580c" fontSize="11" fontWeight="900">1</text>
                    <text x="42" y="21" fill="#ffffff" fontSize="13" fontWeight="bold">부산 1호선  하단역</text>
                    <text x="380" y="20" fill="#ffedd5" fontSize="10" fontWeight="bold">하단교차로 방면 ➔</text>
                  </g>

                  {/* Diagonal Street: 하신중앙로 (Curves Southward to Shinpyeong) */}
                  <polygon points="315,117 375,117 255,330 195,330" fill="#cbd5e1" />
                  <line x1="345" y1="117" x2="225" y2="330" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 6" />

                  {/* Street Label */}
                  <g transform="translate(245, 295) rotate(-30)">
                    <rect x="0" y="0" width="105" height="20" rx="10" fill="#475569" />
                    <text x="52" y="14" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                      하신중앙로 (신평 ⬇)
                    </text>
                  </g>

                  {/* Cross Street: 하신중앙로335번길 */}
                  <rect x="15" y="248" width="190" height="18" fill="#cbd5e1" opacity="0.8" />
                  <text x="95" y="260" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">하신중앙로335번길</text>

                  {/* Surrounding Landmarks (North Side) */}
                  <g transform="translate(60, 24)">
                    <rect x="0" y="0" width="65" height="22" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                    <text x="32" y="15" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">스타벅스</text>
                  </g>
                  <g transform="translate(135, 24)">
                    <rect x="0" y="0" width="65" height="22" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                    <text x="32" y="15" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">올리브영</text>
                  </g>
                  <g transform="translate(425, 24)">
                    <rect x="0" y="0" width="65" height="22" rx="6" fill="#ffffff" stroke="#e2e8f0" />
                    <text x="32" y="15" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">하나은행</text>
                  </g>

                  {/* Subway Exits (North) */}
                  <circle cx="85" cy="58" r="8" fill="#f59e0b" />
                  <text x="85" y="62" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">3</text>
                  <circle cx="160" cy="58" r="8" fill="#f59e0b" />
                  <text x="160" y="62" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">5</text>
                  <circle cx="450" cy="58" r="8" fill="#f59e0b" />
                  <text x="450" y="62" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">7</text>

                  {/* Subway Exits (South) */}
                  <circle cx="95" cy="120" r="9" fill="#f59e0b" />
                  <text x="95" y="124" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">4</text>

                  <circle cx="185" cy="120" r="9" fill="#f59e0b" />
                  <text x="185" y="124" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">6</text>

                  {/* Exit 8 (Highlighted Exit) */}
                  <g transform="translate(320, 108)">
                    <rect x="0" y="0" width="48" height="26" rx="13" fill="#ea580c" filter="url(#mapShadow)" />
                    <text x="24" y="17" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">8번</text>
                  </g>

                  <circle cx="485" cy="120" r="9" fill="#f59e0b" />
                  <text x="485" y="124" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">10</text>

                  {/* South Landmarks */}
                  <g transform="translate(40, 142)">
                    <rect x="0" y="0" width="65" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                    <text x="32" y="16" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">우리은행</text>
                  </g>

                  <g transform="translate(145, 142)">
                    <rect x="0" y="0" width="88" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                    <text x="44" y="16" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">☕ 텐퍼센트커피</text>
                  </g>

                  <g transform="translate(380, 138)">
                    <rect x="0" y="0" width="90" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                    <text x="45" y="17" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">바바성형외과</text>
                  </g>

                  <g transform="translate(85, 275)">
                    <rect x="0" y="0" width="105" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                    <text x="52" y="16" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">충우드림아파트</text>
                  </g>

                  <g transform="translate(345, 235)">
                    <rect x="0" y="0" width="70" height="22" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                    <text x="35" y="15" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">동동국밥</text>
                  </g>

                  <g transform="translate(440, 190)">
                    <rect x="0" y="0" width="65" height="22" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                    <text x="32" y="15" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">부산은행</text>
                  </g>

                  {/* Walking Route Path from Exit 8 to Clinic */}
                  <path
                    d="M 344 136 L 340 180 L 302 210"
                    fill="none"
                    stroke="#0f70b1"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                  />

                  {/* Walking Time Badge */}
                  <g transform="translate(340, 172)">
                    <rect x="0" y="0" width="126" height="22" rx="11" fill="#0f70b1" filter="url(#mapShadow)" />
                    <text x="63" y="15" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                      8번 출구 도보 1~2분 🚶
                    </text>
                  </g>

                  {/* Destination: Kyunghee Sarangchae Clinic 1st Floor */}
                  <g transform="translate(125, 175)" filter="url(#clinicShadow)">
                    <rect x="0" y="0" width="175" height="80" rx="12" fill="#ffffff" stroke="#ea4025" strokeWidth="2.5" />
                    <rect x="12" y="12" width="42" height="20" rx="6" fill="#fff1f0" stroke="#ea4025" strokeWidth="1" />
                    <text x="33" y="26" textAnchor="middle" fill="#ea4025" fontSize="11" fontWeight="900">1층</text>
                    <text x="60" y="27" fill="#0f172a" fontSize="13" fontWeight="900">경희사랑채한의원</text>
                    <text x="12" y="50" fill="#64748b" fontSize="10" fontWeight="500">사하구 하신중앙로 341</text>
                    <text x="12" y="68" fill="#0f70b1" fontSize="10" fontWeight="bold">🅿️ 한의원 전용 주차 지원</text>
                  </g>

                  {/* Pin Pulse on Building */}
                  <g transform="translate(290, 202)">
                    <circle cx="10" cy="10" r="14" fill="#ea4025" opacity="0.25" />
                    <circle cx="10" cy="10" r="8" fill="#ea4025" />
                    <circle cx="10" cy="10" r="3.5" fill="#ffffff" />
                  </g>
                </svg>
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
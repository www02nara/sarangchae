"use client";

import React from "react";
import { CLINIC_INFO, OPERATING_HOURS_TABLE } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Clock, MapPin, Phone, ExternalLink, Train, CheckCircle2, Heart } from "lucide-react";

export default function LocationHours() {
  const { openBooking } = useModal();

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0f70b1] bg-white px-3 py-1 rounded-full uppercase tracking-wider border border-[#d0e5f5]">
            Hours & Location
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
            진료시간 & 오시는 길
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            부산 사하구 하신중앙로 341 1층 (하단동 589-18)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Operating Hours Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-3xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center border border-[#d0e5f5]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">진료 시간표</h3>
                  <p className="text-xs text-[#0f70b1] font-semibold">화·목 야간진료 (저녁 8시까지)</p>
                </div>
              </div>

              <div className="text-right text-xs">
                <span className="inline-block px-2.5 py-1 bg-[#fff7ed] text-[#c2410c] border border-[#ffedd5] rounded-full font-bold text-[11px]">
                  휴게시간 12:30~14:00 (14시 진료 시작)
                </span>
              </div>
            </div>

            {/* Timetable */}
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

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600 space-y-1">
              <p>• <strong>휴게시간(점심시간)</strong> : 12:30 ~ 14:00 (<strong>오후 14시 정각에 진료 시작</strong>)</p>
              <p>• <strong>토요일</strong> : 점심시간 없이 오후 14:30까지 연속 진료합니다.</p>
              <p>• <strong>일요일</strong> : 정기휴무</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold rounded-xl text-center text-xs sm:text-sm shadow-3xs flex items-center justify-center gap-1.5 transition"
              >
                <span>네이버 플레이스 정보</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex-1 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold rounded-xl text-center text-xs sm:text-sm shadow-3xs flex items-center justify-center gap-1.5 transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#0f70b1]" />
                <span>{CLINIC_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Location & 1st Floor Accessibility */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-3xs space-y-5">
            <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <div className="w-9 h-9 rounded-xl bg-[#f0f7fb] text-[#0f70b1] flex items-center justify-center border border-[#d0e5f5]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">오시는 길 안내</h3>
                <p className="text-xs text-slate-500">{CLINIC_INFO.addressDetail}</p>
              </div>
            </div>

            {/* Address Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <span className="text-xs font-bold text-[#0f70b1] uppercase">Clinic Location</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                {CLINIC_INFO.address}
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {CLINIC_INFO.addressDetail}
              </p>
            </div>

            {/* Accessibility & Transit Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72b033]" />
                  <span>1층 단독 편안한 진료</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  계단이나 엘리베이터 없이 1층에서 바로 진료받으실 수 있어 어르신과 유모차 동반 가족도 편안합니다.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-[#0f70b1]" />
                  <span>대중교통 & 주차</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  부산 1호선 하단역 인근 하신중앙로 방면, 한의원 전용 및 인근 주차 지원.
                </p>
              </div>
            </div>

            {/* Map Link Action Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div>
                <div className="font-bold text-sm text-slate-900">네이버 지도에서 길찾기</div>
                <div className="text-xs text-slate-500">스마트폰 네비게이션으로 바로 연결됩니다</div>
              </div>
              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-xs rounded-xl shadow-3xs flex items-center gap-1 transition shrink-0"
              >
                <span>길찾기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

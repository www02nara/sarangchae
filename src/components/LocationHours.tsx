"use client";

import React from "react";
import { CLINIC_INFO, OPERATING_HOURS_TABLE } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Clock, MapPin, Phone, ExternalLink, Train, CheckCircle2, Heart } from "lucide-react";

export default function LocationHours() {
  const { openBooking } = useModal();

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#fff5f6] border-b border-[#fce7ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#d97581] bg-white px-3 py-1 rounded-full uppercase tracking-wider border border-[#fce7ea]">
            Hours & Location
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#382427] mt-3 mb-2">
            진료시간 & 오시는 길
          </h2>
          <p className="text-[#695155] text-sm sm:text-base">
            부산 사하구 하신중앙로 341 1층 (하단동 589-18)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Operating Hours Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#fce7ea] shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-[#fce7ea] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#fce7ea] text-[#d97581] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#382427]">진료 시간표</h3>
                  <p className="text-xs text-[#d97581] font-semibold">화·목 야간진료 (저녁 8시까지)</p>
                </div>
              </div>

              <div className="text-right text-xs text-[#705458]">
                <span className="inline-block px-2 py-0.5 bg-[#fff0f2] text-[#c9626e] rounded font-bold text-[11px]">
                  휴게시간 12:30~14:00 (14시 진료 시작)
                </span>
              </div>
            </div>

            {/* Timetable Table */}
            <div className="divide-y divide-[#fce7ea]/70 text-xs sm:text-sm">
              {OPERATING_HOURS_TABLE.map((item, idx) => (
                <div
                  key={idx}
                  className={`py-2.5 px-3 flex items-center justify-between rounded-lg transition ${
                    item.isNight
                      ? "bg-[#fff0f2] font-bold text-[#c9626e]"
                      : item.isClosed
                      ? "text-red-500 font-semibold"
                      : "text-[#473437]"
                  }`}
                >
                  <div className="flex items-center gap-2 w-20">
                    <span>{item.day}</span>
                    {item.isNight && (
                      <span className="text-[10px] bg-[#d97581] text-white px-1.5 py-0.2 rounded font-bold">
                        야간
                      </span>
                    )}
                  </div>
                  <div className="font-semibold">{item.hours}</div>
                  <div className="text-[11px] text-gray-500 hidden sm:block">
                    {item.breakTime}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#fff9fa] border border-[#fce7ea] rounded-xl p-3 text-xs text-[#73585c] space-y-1">
              <p>• <strong>휴게시간(점심시간)</strong> : 12:30 ~ 14:00 (<strong>오후 14시 정각에 진료 시작</strong>)</p>
              <p>• <strong>토요일</strong> : 점심시간 없이 오후 14:30까지 연속 진료합니다.</p>
              <p>• <strong>일요일</strong> : 정기휴무</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold rounded-xl text-center text-xs sm:text-sm shadow-2xs flex items-center justify-center gap-1.5 transition"
              >
                <span>네이버 플레이스 정보</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex-1 py-3 bg-[#d97581] hover:bg-[#c9626e] text-white font-bold rounded-xl text-center text-xs sm:text-sm shadow-2xs flex items-center justify-center gap-1.5 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CLINIC_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Location & 1st Floor Accessibility */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#fce7ea] shadow-xs space-y-5">
            <div className="flex items-center gap-2.5 border-b border-[#fce7ea] pb-4">
              <div className="w-9 h-9 rounded-xl bg-[#fce7ea] text-[#d97581] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#382427]">오시는 길 안내</h3>
                <p className="text-xs text-gray-500">{CLINIC_INFO.addressDetail}</p>
              </div>
            </div>

            {/* Address Box */}
            <div className="bg-[#fff9fa] border border-[#fce7ea] rounded-2xl p-4">
              <span className="text-xs font-bold text-[#d97581] uppercase">Clinic Location</span>
              <div className="text-base sm:text-lg font-bold text-[#382427] mt-1">
                {CLINIC_INFO.address}
              </div>
              <p className="text-xs text-[#705458] mt-0.5">
                {CLINIC_INFO.addressDetail}
              </p>
            </div>

            {/* Accessibility & Transit Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#fff0f2] border border-[#fce7ea] space-y-1">
                <div className="font-bold text-[#b84e5b] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>1층 단독 편안한 진료</span>
                </div>
                <p className="text-[#6b5256] text-[11px] leading-relaxed">
                  계단이나 엘리베이터 없이 1층에서 바로 진료받으실 수 있어 어르신과 유모차 동반 가족도 편안합니다.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fff9fa] border border-[#fce7ea] space-y-1">
                <div className="font-bold text-[#4a3538] flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-[#d97581]" />
                  <span>대중교통 & 주차</span>
                </div>
                <p className="text-[#6b5256] text-[11px] leading-relaxed">
                  부산 1호선 하단역 인근 하신중앙로 방면, 한의원 전용 및 인근 주차 공간 지원.
                </p>
              </div>
            </div>

            {/* Map Link Action Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#fff0f2] to-[#fff9fa] border border-[#fce7ea] flex items-center justify-between gap-3">
              <div>
                <div className="font-bold text-sm text-[#382427]">네이버 지도에서 길찾기</div>
                <div className="text-xs text-[#805e63]">스마트폰 네비게이션으로 바로 연결됩니다</div>
              </div>
              <a
                href={CLINIC_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#03C75A] hover:bg-[#02b14f] text-white font-bold text-xs rounded-xl shadow-2xs flex items-center gap-1 transition shrink-0"
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

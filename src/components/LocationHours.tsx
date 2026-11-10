"use client";

import React from "react";
import { CLINIC_INFO, OPERATING_HOURS } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import {
  Clock,
  MapPin,
  Car,
  Navigation,
  Phone,
  Calendar,
  ExternalLink,
  Train,
  CheckCircle2,
} from "lucide-react";

export default function LocationHours() {
  const { openBooking } = useModal();

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#faf8f4] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Directions & Hours
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            진료시간 & 오시는 길
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            부산 하단역 1번 출구 바로 앞 도보 1분 거리에 위치하고 있습니다.
            <br className="hidden sm:inline" />
            월·수·금 저녁 8시 야간진료로 직장인도 퇴근 후 여유 있게 내원하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Operating Hours Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#123e32] text-[#dfcaa7] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-gray-900">진료시간 안내</h3>
                <span className="text-xs text-emerald-700 font-semibold">
                  월 · 수 · 금 야간진료 시행
                </span>
              </div>
            </div>

            {/* Hours list */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl">
                <div className="flex items-center justify-between font-bold text-gray-900 mb-0.5">
                  <span className="text-emerald-900">월 · 수 · 금 (야간진료)</span>
                  <span className="text-emerald-800">09:30 ~ 20:00</span>
                </div>
                <p className="text-[11px] text-emerald-700">
                  퇴근 후에도 여유로운 저녁 야간진료 (접수 마감 19:20)
                </p>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between font-semibold text-gray-800">
                <span>화 · 목</span>
                <span>09:30 ~ 19:00</span>
              </div>

              <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/60 flex items-center justify-between font-bold text-gray-900">
                <span className="text-amber-900">토 요 일</span>
                <span className="text-amber-800">09:30 ~ 14:30</span>
              </div>
              <p className="text-[11px] text-gray-500 pl-1">
                ※ 토요일은 환자분들의 편의를 위해 <strong className="text-gray-800">점심시간 없이 연속 진료</strong>합니다.
              </p>

              <div className="p-3 bg-gray-50 rounded-xl text-gray-600 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>평일 점심시간</span>
                  <span className="font-semibold text-gray-800">13:00 ~ 14:00</span>
                </div>
                <div className="flex justify-between text-red-600 font-semibold">
                  <span>일요일 · 공휴일</span>
                  <span>휴진</span>
                </div>
              </div>
            </div>

            {/* Quick Call & Reserve buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => openBooking()}
                className="w-full py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow text-sm"
              >
                <Calendar className="w-4 h-4 text-[#dfcaa7]" />
                <span>간편 진료 예약하기</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold rounded-xl transition flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#123e32]" />
                <span>전화 문의 ({CLINIC_INFO.formattedPhone})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Location, Subway, Parking & Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#123e32] text-[#dfcaa7] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-gray-900">오시는 길 & 주차 안내</h3>
                <span className="text-xs text-gray-500 font-medium">
                  {CLINIC_INFO.addressDetail}
                </span>
              </div>
            </div>

            {/* Address Box */}
            <div className="bg-[#fbf9f5] border border-[#e9e3d5] rounded-2xl p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#123e32] uppercase">
                    Clinic Address
                  </span>
                  <div className="text-base sm:text-lg font-bold text-gray-900 mt-1">
                    {CLINIC_INFO.address}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {CLINIC_INFO.addressDetail}
                  </p>
                </div>
              </div>
            </div>

            {/* Transit & Parking Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              {/* Subway & Bus */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <div className="font-bold text-gray-900 flex items-center gap-2">
                  <Train className="w-4 h-4 text-orange-600" />
                  <span>지하철 / 버스 이용 시</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">
                  • <strong>부산 1호선 하단역 1번 출구</strong> 나오셔서 직진 50m (도보 1분)
                  <br />
                  • 하단역 정류장 하차 (시내버스 58, 68, 126, 138, 338번 등 다수 정차)
                </p>
              </div>

              {/* Parking */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <div className="font-bold text-gray-900 flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-600" />
                  <span>자가용 주차 지원</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">
                  • <strong>건물 지하 자주식 주차장 완비</strong>
                  <br />
                  • 진료받으시는 모든 환자분께 <strong>2시간 무료 주차권</strong>을 지급해 드립니다.
                </p>
              </div>
            </div>

            {/* Map Visual & Navigation Link Buttons */}
            <div className="space-y-3">
              {/* Interactive Visual Map Representation */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-gray-200 bg-[#e8ece9] flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#123e32] text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-6 h-6 text-[#dfcaa7]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-gray-900">
                      {CLINIC_INFO.fullName}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      부산 1호선 하단역 1번 출구 앞 · 한서메디컬빌딩 3층
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <a
                      href={CLINIC_INFO.naverMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#03C75A] hover:bg-[#02b14f] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 transition"
                    >
                      <span>네이버 지도 길찾기</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={CLINIC_INFO.kakaoMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 transition"
                    >
                      <span>카카오맵 길찾기</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

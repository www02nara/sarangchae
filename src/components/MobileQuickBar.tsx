"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { Phone, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function MobileQuickBar() {
  const { openBooking } = useModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#fce7ea] px-3 py-2 sm:hidden shadow-lg">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Call button */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1 rounded-lg text-[#473437] active:bg-[#fff0f2] transition"
        >
          <div className="w-8 h-8 rounded-full bg-[#fce7ea] flex items-center justify-center text-[#d97581] mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold">전화상담</span>
        </a>

        {/* Naver Place button */}
        <a
          href={CLINIC_INFO.naverPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-lg text-[#473437] active:bg-[#fff0f2] transition"
        >
          <div className="w-8 h-8 rounded-full bg-[#03C75A]/15 flex items-center justify-center text-[#03C75A] mb-0.5 font-bold text-xs">
            N
          </div>
          <span className="text-[11px] font-semibold">플레이스</span>
        </a>

        {/* Quick Booking button */}
        <button
          onClick={() => openBooking()}
          className="flex flex-col items-center justify-center py-1 rounded-lg text-[#473437] active:bg-[#fff0f2] transition"
        >
          <div className="w-8 h-8 rounded-full bg-[#d97581] flex items-center justify-center text-white mb-0.5">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold text-[#d97581]">간편예약</span>
        </button>

        {/* Map / Directions button */}
        <a
          href="#location"
          className="flex flex-col items-center justify-center py-1 rounded-lg text-[#473437] active:bg-[#fff0f2] transition"
        >
          <div className="w-8 h-8 rounded-full bg-[#fff0f2] flex items-center justify-center text-[#c9626e] mb-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold">오시는길</span>
        </a>
      </div>
    </div>
  );
}

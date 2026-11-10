"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { CLINIC_INFO, CLINIC_SERVICES } from "@/data/clinicData";
import { X, Calendar, Clock, Phone, CheckCircle, ExternalLink } from "lucide-react";

export default function OnlineReservationModal() {
  const { isBookingOpen, closeBooking, selectedService } = useModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [service, setService] = useState(selectedService || CLINIC_SERVICES[0].title);
  const [memo, setMemo] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selectedService when modal opens
  React.useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      alert("이름, 연락처, 희망 날짜를 모두 입력해주세요.");
      return;
    }
    if (!agreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setMemo("");
    closeBooking();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#123e32] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#dfcaa7] uppercase">
              Online Appointment
            </span>
            <h3 className="text-xl font-bold mt-0.5">간편 진료 예약 & 상담 신청</h3>
          </div>
          <button
            onClick={closeBooking}
            aria-label="닫기"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                진료 예약 신청이 완료되었습니다!
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                <strong className="text-gray-900 font-semibold">{name}</strong>님, 접수해 주셔서 감사합니다.
                <br />
                원내 담당자가 진료 일정을 확인한 후 남겨주신 연락처(
                <span className="text-emerald-700 font-medium">{phone}</span>)로 신속히 확정 연락을 드리겠습니다.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 text-left space-y-1">
                <p className="font-semibold">※ 안내사항</p>
                <p>• 당일 빠른 진료를 원하실 경우 대표전화({CLINIC_INFO.formattedPhone})로 문의하시면 즉시 안내해 드립니다.</p>
                <p>• 취소 또는 일정 변경이 필요하신 경우 최소 2시간 전에 연락 부탁드립니다.</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-semibold rounded-xl transition shadow-md"
              >
                확인 및 닫기
              </button>
            </div>
          ) : (
            <>
              {/* Naver Booking Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="inline-block px-1.5 py-0.5 bg-[#03C75A] text-white rounded font-bold mr-1.5 text-[10px]">
                    NAVER
                  </span>
                  <span className="font-bold text-gray-900">네이버 실시간 예약</span>
                  <p className="text-gray-600 text-[11px] mt-0.5">
                    네이버 아이디로 원하는 시간대를 실시간 확정하고 싶으신가요?
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.naverBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 bg-[#03C75A] text-white text-xs font-semibold rounded-lg hover:bg-[#02b14f] transition flex items-center gap-1 shadow-sm"
                >
                  네이버 예약
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    환자 성함 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123e32] focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    연락처 (휴대폰) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123e32] focus:border-transparent text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" /> 희망 진료일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123e32] text-gray-900 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-500" /> 희망 시간대
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123e32] text-gray-900 text-xs sm:text-sm"
                    >
                      <option value="10:00">오전 10:00</option>
                      <option value="11:00">오전 11:00</option>
                      <option value="12:00">오전 12:00</option>
                      <option value="14:30">오후 02:30</option>
                      <option value="15:30">오후 03:30</option>
                      <option value="16:30">오후 04:30</option>
                      <option value="17:30">오후 05:30</option>
                      <option value="18:30">오후 06:30 (월·수·금)</option>
                      <option value="19:00">오후 07:00 (월·수·금 야간)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    진료 상담 분야
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123e32] text-gray-900"
                  >
                    {CLINIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.tag})
                      </option>
                    ))}
                    <option value="일반 한방 진료">기타 일반 한방 진료</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    증상 및 요청사항 (선택)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="불편하신 증상이나 사고 경위, 기타 문의사항을 편하게 적어주세요."
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123e32] text-gray-900 text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-gray-600">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-gray-300 text-[#123e32] focus:ring-[#123e32]"
                    />
                    <span>
                      진료 예약 상담 및 일정 안내를 위한 개인정보(이름, 연락처) 수집 및 이용에 동의합니다. (목적 달성 시 즉시 파기)
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#123e32] hover:bg-[#1b5344] text-white font-bold rounded-xl transition shadow-lg mt-3 text-base flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  진료 예약 신청하기
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f70b1] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-blue-100 uppercase">
              Online Appointment
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-0.5">간편 진료 예약 & 상담</h3>
          </div>
          <button
            onClick={closeBooking}
            aria-label="닫기"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-[#f0f7fb] text-[#0f70b1] rounded-full flex items-center justify-center mx-auto border border-[#d0e5f5]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                진료 예약 신청이 완료되었습니다!
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                <strong className="text-gray-900">{name}</strong>님, 접수해 주셔서 감사합니다.
                <br />
                원내에서 일정을 확인한 후 남겨주신 번호(
                <span className="text-[#0f70b1] font-semibold">{phone}</span>)로 안내 연락을 드리겠습니다.
              </p>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#0f70b1] hover:bg-[#0c5c92] text-white font-semibold rounded-xl transition shadow-2xs text-sm"
              >
                확인 및 닫기
              </button>
            </div>
          ) : (
            <>
              {/* Naver Place Direct Banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-slate-900">네이버 플레이스 예약 / 문의</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    네이버 지도로 바로 연결하시겠습니까?
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.naverPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 bg-[#03C75A] text-white text-xs font-semibold rounded-lg hover:bg-[#02b14f] transition flex items-center gap-1 shadow-2xs"
                >
                  플레이스
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    환자 성함 <span className="text-[#ed5f21]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b9ddf5] text-gray-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    연락처 <span className="text-[#ed5f21]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b9ddf5] text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      희망일 <span className="text-[#ed5f21]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b9ddf5] text-gray-900 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      희망 시간
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b9ddf5] text-gray-900 text-xs sm:text-sm"
                    >
                      <option value="10:00">오전 10:00</option>
                      <option value="11:00">오전 11:00</option>
                      <option value="12:00">오전 12:00</option>
                      <option value="14:00">오후 02:00 (진료 시작)</option>
                      <option value="15:00">오후 03:00</option>
                      <option value="16:00">오후 04:00</option>
                      <option value="17:00">오후 05:00</option>
                      <option value="18:30">오후 06:30 (화·목 야간)</option>
                      <option value="19:00">오후 07:00 (화·목 야간)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    진료 분야
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b9ddf5] text-gray-900"
                  >
                    {CLINIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="일반 한방 진료">기타 일반 진료</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    증상 및 메모 (선택)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="불편하신 증상이나 문의사항을 편하게 적어주세요."
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b9ddf5] text-gray-900 text-xs sm:text-sm resize-none"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-gray-500">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-gray-300 text-[#0f70b1] focus:ring-[#b9ddf5]"
                    />
                    <span>예약 안내를 위한 개인정보(이름, 연락처) 수집 및 이용에 동의합니다.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0f70b1] hover:bg-[#0c5c92] text-white font-bold rounded-xl transition shadow-md mt-2 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  예약 신청하기
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

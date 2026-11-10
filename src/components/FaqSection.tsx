"use client";

import React, { useState } from "react";
import { FAQ_LIST, CLINIC_INFO } from "@/data/clinicData";
import { useModal } from "@/context/ModalContext";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("전체");
  const { openBooking } = useModal();

  const categories = ["전체", "진료 및 예약", "추나요법", "교통사고", "맞춤한약", "오시는 길"];

  const filteredFaqs = FAQ_LIST.filter(
    (faq) => activeCategory === "전체" || faq.category === activeCategory
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            내원 전 환자분들께서 가장 궁금해하시는 질문들을 모았습니다.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                activeCategory === cat
                  ? "bg-[#123e32] text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-gray-50/80 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-sm sm:text-base text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#123e32]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed bg-[#fcfbf9] border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#123e32] text-[#dfcaa7] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="flex-1 text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 p-6 rounded-2xl bg-[#fbf9f5] border border-[#e9e3d5] text-center space-y-3">
          <p className="text-sm font-bold text-gray-900">
            더 궁금하신 점이나 진료 관련 상담이 필요하신가요?
          </p>
          <p className="text-xs text-gray-600">
            친절한 직원이 환자분의 궁금증을 신속하고 정확하게 안내해 드립니다.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-5 py-2.5 bg-[#123e32] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#1b5344] transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfcaa7]" />
              <span>전화 상담 ({CLINIC_INFO.formattedPhone})</span>
            </a>
            <button
              onClick={() => openBooking()}
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-800 text-xs font-bold rounded-xl hover:bg-gray-50 transition"
            >
              온라인 예약 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { FAQ_LIST, CLINIC_INFO } from "@/data/clinicData";
import { ChevronDown, Phone } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const topFaqs = FAQ_LIST.slice(0, 4);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-[#fde5ea]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#c9596b] bg-[#fff0f3] px-3 py-1 rounded-full uppercase tracking-wider border border-[#fcd3db]">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#362427] mt-3 mb-2">
            자주 묻는 질문
          </h2>
          <p className="text-[#6b5256] text-xs sm:text-sm">
            내원 전 환자분들이 가장 많이 질문하시는 내용입니다.
          </p>
        </div>

        {/* Compact Accordion */}
        <div className="space-y-3">
          {topFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#fde5ea] rounded-2xl overflow-hidden bg-white shadow-3xs hover:border-[#fcd3db] transition"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-[#fffbfc] transition text-sm sm:text-base font-bold text-[#362427]"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#fff0f3] text-[#f08998] text-xs font-extrabold flex items-center justify-center shrink-0 border border-[#fcd5dc]">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8c6b71] shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#f08998]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#5e484c] leading-relaxed border-t border-[#fde5ea]/70 bg-[#fffbfc]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

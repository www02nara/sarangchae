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
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-[#f5e6e8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#7d3543] bg-[#fef7f9] px-3 py-1 rounded-full uppercase tracking-wider border border-[#f0d8dd]">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#261d1f] mt-3 mb-2">
            자주 묻는 질문
          </h2>
          <p className="text-[#6e585c] text-xs sm:text-sm">
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
                className="border border-[#f5e6e8] rounded-2xl overflow-hidden bg-white shadow-3xs hover:border-[#edd2d7] transition"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-[#fefbfc] transition text-sm sm:text-base font-bold text-[#261d1f]"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#fef7f9] text-[#7d3543] text-xs font-extrabold flex items-center justify-center shrink-0 border border-[#f0d8dd]">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8c6b71] shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#a34c5b]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#5c4448] leading-relaxed border-t border-[#f5e6e8] bg-[#fefbfc]">
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

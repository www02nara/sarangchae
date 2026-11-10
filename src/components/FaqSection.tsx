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
    <section id="faq" className="py-14 sm:py-16 bg-[#faf8f4] border-b border-gray-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#123e32] bg-[#123e32]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-2 mb-1">
            자주 묻는 질문
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            내원 전 환자분들이 가장 많이 질문하시는 내용입니다.
          </p>
        </div>

        {/* Compact Accordion */}
        <div className="space-y-2.5">
          {topFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200/80 rounded-xl overflow-hidden bg-white shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-gray-50 transition text-sm font-bold text-gray-900"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#123e32]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fcfbf9]">
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

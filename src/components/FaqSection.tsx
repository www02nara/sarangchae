"use client";

import React, { useState } from "react";
import { FAQ_LIST, CLINIC_INFO } from "@/data/clinicData";
import { ChevronDown, Phone } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const topFaqs = FAQ_LIST;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#0f70b1] bg-[#f0f7fb] px-3 py-1 rounded-full uppercase tracking-wider border border-[#d0e5f5]">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            자주 묻는 질문
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
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
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-3xs hover:border-[#b9ddf5] transition"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition text-sm sm:text-base font-bold text-slate-900"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#f0f7fb] text-[#0f70b1] text-xs font-extrabold flex items-center justify-center shrink-0 border border-[#d0e5f5]">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#0f70b1]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f8fafc]">
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

"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { NON_COVERED_ITEMS, CLINIC_INFO } from "@/data/clinicData";
import { X, ShieldAlert, FileText, Search } from "lucide-react";

export default function NonCoveredModal() {
  const { isNonCoveredOpen, closeNonCovered } = useModal();
  const [activeCategory, setActiveCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");

  if (!isNonCoveredOpen) return null;

  const categories = ["전체", ...Array.from(new Set(NON_COVERED_ITEMS.map((item) => item.category)))];

  const filteredItems = NON_COVERED_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "전체" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.note && item.note.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#fce7ea]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#d97581] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-lg">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-wider text-white/80 uppercase">
                Medical Law Notice
              </span>
              <h3 className="text-lg font-bold">{CLINIC_INFO.name} 비급여 진료비용 안내</h3>
            </div>
          </div>
          <button
            onClick={closeNonCovered}
            aria-label="닫기"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice banner */}
        <div className="bg-[#fff5f6] px-6 py-2.5 border-b border-[#fce7ea] flex items-start gap-2 text-xs text-[#705256]">
          <ShieldAlert className="w-4 h-4 text-[#d97581] shrink-0 mt-0.5" />
          <p>
            의료법 제45조에 의거하여 {CLINIC_INFO.name}의 비급여 진료비용을 고지합니다.
            환자의 상태와 처방에 따라 차이가 있을 수 있으므로 진료 시 안내받으시기 바랍니다.
          </p>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#d97581] text-white shadow-2xs"
                    : "bg-[#fff0f2] text-[#6b4e52] hover:bg-[#fce7ea]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="항목 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d97581]"
            />
          </div>
        </div>

        {/* Table content */}
        <div className="p-4 overflow-y-auto flex-1">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#fff9fa] text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="py-2.5 px-3 w-28 sm:w-36">구분</th>
                  <th className="py-2.5 px-3">항목명 / 특징</th>
                  <th className="py-2.5 px-3 w-20 text-center">단위</th>
                  <th className="py-2.5 px-3 w-32 sm:w-36 text-right">비용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#fff9fa]/60 transition">
                    <td className="py-3 px-3 font-medium text-gray-500 text-xs">
                      {item.category}
                    </td>
                    <td className="py-3 px-3 font-medium text-gray-900">
                      <div>{item.name}</div>
                      {item.note && (
                        <div className="text-[11px] text-gray-400 font-normal mt-0.5">
                          {item.note}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center text-gray-600 text-xs">
                      {item.unit}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-[#b84e5b]">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#fff9fa] px-6 py-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={closeNonCovered}
            className="px-4 py-1.5 bg-[#543f43] hover:bg-[#423135] text-white text-xs font-semibold rounded-lg transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

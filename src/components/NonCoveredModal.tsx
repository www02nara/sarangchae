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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#123e32] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg">
              <FileText className="w-5 h-5 text-[#dfcaa7]" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#dfcaa7] uppercase">
                Medical Law Notice
              </span>
              <h3 className="text-xl font-bold">{CLINIC_INFO.name} 비급여 진료비용 안내</h3>
            </div>
          </div>
          <button
            onClick={closeNonCovered}
            aria-label="닫기"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Notice banner */}
        <div className="bg-amber-50 px-6 py-3 border-b border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            의료법 제45조 및 동법 시행규칙 제42조의2에 의거하여 {CLINIC_INFO.fullName}의 비급여 진료비용을 고지합니다.
            환자의 상태, 체질, 약재 함량 및 치료 부위에 따라 실제 비용에 차이가 있을 수 있으므로 담당 의료진과 충분한 상담 후 진료를 결정하시기 바랍니다.
          </p>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#123e32] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="항목 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123e32]"
            />
          </div>
        </div>

        {/* Table content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 w-28 sm:w-36">구분</th>
                  <th className="py-3 px-4">항목명 / 특징</th>
                  <th className="py-3 px-4 w-20 text-center">단위</th>
                  <th className="py-3 px-4 w-32 sm:w-40 text-right">비용 (부가세 포함)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-gray-400">
                      검색된 비급여 항목이 없습니다.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition">
                      <td className="py-3.5 px-4 font-medium text-gray-500 text-xs">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-gray-900">
                        <div>{item.name}</div>
                        {item.note && (
                          <div className="text-xs text-gray-500 font-normal mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center text-gray-600 text-xs">
                        {item.unit}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-emerald-800">
                        {item.price}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-gray-400 mt-4 text-center">
            최종 고지일자: 2025년 1월 기준 | 고지된 비용은 원내 사정에 따라 변동될 수 있습니다.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={closeNonCovered}
            className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold rounded-lg transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

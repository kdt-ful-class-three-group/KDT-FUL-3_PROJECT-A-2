// /src/components/StockAccordionList.tsx

"use client";
import React, { useState } from "react";

interface StockDetail {
  // evaluatedPL: number;    // 평가 손익 (원 단위)
  // returnRate: number;     // 수익률(%)
  quantity: string;       // 보유 수량(주 단위)
  avgPrice: string;       // 매수 평균가(원 단위)
}

interface StockAccordionItem {
  name: string;           // 종목명 (ex: '삼성전자')
  detail: StockDetail;
}

interface StockAccordionListProps {
  items: StockAccordionItem[];
}

export default function StockAccordionList({ items }: StockAccordionListProps) {
  // 어느 아이템이 열려있는지 관리 (열려 있으면 index, 아니면 null)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 숫자 -> 문자열(원 단위 + 콤마)
  const formatKRW = (num: number) =>
    num.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.name} className="border-b last:border-none">
            {/* 아코디언 헤더 */}
            <button
              className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-100 focus:outline-none"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className="text-xl text-gray-500">
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* 아코디언 본문 (열렸을 때만) */}
            {isOpen && (
              <div className="px-6 py-4 bg-gray-50 space-y-2 text-gray-700 text-sm">
                {/* <div className="flex justify-between">
                  <span>평가 손익</span>
                  <span
                    className={
                      item.detail.evaluatedPL >= 0
                        ? "text-red-500"
                        : "text-blue-500"
                    }
                  >
                    {formatKRW(item.detail.evaluatedPL)}원
                  </span>
                </div> */}
                {/* <div className="flex justify-between">
                  <span>수익률</span>
                  <span
                    className={
                      item.detail.returnRate >= 0
                        ? "text-red-500"
                        : "text-blue-500"
                    }
                  >
                    {item.detail.returnRate.toFixed(2)}%
                  </span>
                </div> */}
                <div className="flex justify-between">
                  <span>보유 수량</span>
                  <span>{item.detail.quantity.toLocaleString()}주</span>
                </div>
                <div className="flex justify-between">
                  <span>매수 평균가</span>
                  <span>{formatKRW(item.detail.avgPrice)}원</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";
import React from "react";

export default function StockBookUI() {
  const hogaData = Array(6).fill({
    price: "3,382",
    percent: "0.80%",
    quantity: "48,441,604",
  });

  const trades = Array(8).fill({ price: "328,000", qty: 2 });
  const buyCount = 6;
  const sellCount = 2;
  const vp = ((buyCount / sellCount) * 100).toFixed(0);

  return (
    <div className="font-sans text-[#222] max-w-[720px] mx-auto p-4 bg-[#f2f2f2] rounded-lg shadow-md">
      {/* 호가 + 정보 */}
      <div className="flex gap-4 items-start">
        {/* 파란 호가 */}
        <div className="flex-1 bg-[#e3f2ff] p-2 flex flex-col gap-2 rounded-md">
          {hogaData.map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-red-500 font-bold w-[55px]">3,382</span>
              <div className="relative bg-[#cce0f7] flex-1 h-5 rounded-md">
                <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-[#005baf] rounded-l-md" />
                <span className="absolute right-1 top-[2px] text-white text-[11px] font-bold">
                  48,441,604
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽 거래 정보 */}
        <div className="flex-1 bg-white p-3 text-sm leading-6 rounded-md shadow-sm">
          <div>
            <strong>거래량:</strong> 223,215,046 XRP
          </div>
          <div>
            <strong>거래금:</strong> 765,897백만원
          </div>
          <div>
            <strong>52주 최고:</strong> 4,984 (2025.01.20)
          </div>
          <div>
            <strong>52주 최저:</strong> 4,984 (2025.01.20)
          </div>
          <div>
            <strong>전일종가:</strong> 4,984
          </div>
          <div>
            <strong>당일고가:</strong> 4,984 (0.68%)
          </div>
          <div>
            <strong>당일저가:</strong> 4,984 (-1.55%)
          </div>
        </div>
      </div>

      {/* 하단 체결강도 & 매도 박스 (위치 바뀜) */}
      <div className="flex bg-white rounded-md mt-4 p-3 gap-4">
        {/* 1️⃣ 빨간 매도 체결 박스 왼쪽 */}
        <div className="flex-[1.5] flex flex-col gap-1">
          {trades.map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-red-100 text-sm p-2 rounded"
            >
              <span className="text-red-500 font-bold">3,382</span>
              <span className="text-gray-500 text-xs">0.80%</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                48,441,604
              </span>
            </div>
          ))}
        </div>

        {/* 2️⃣ 중앙 - 등락률만 표시 */}
        <div className="flex-1 flex flex-col gap-1 text-xs justify-start">
          {trades.map((_, i) => (
            <div key={i} className="flex justify-end text-gray-500">
              0.80%
            </div>
          ))}
        </div>

        {/* 3️⃣ 체결강도 + 체결가/체결량 오른쪽 */}
        <div className="flex-[0.8] text-xs pl-2">
          <div className="mb-2 font-semibold text-sm">
            체결강도 <span className="text-blue-600 font-bold ml-1">{vp}%</span>
          </div>
          {trades.map((t, i) => (
            <div
              key={i}
              className="flex justify-between bg-gray-50 px-2 py-1 rounded-sm mb-[2px]"
            >
              <span>{t.price}</span>
              <span>{t.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

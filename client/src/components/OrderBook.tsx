
// components/OderBook.tsx
"use client";
import React from "react";

export default function StockBookUI() {
  const hogaData = Array(30).fill({
    price: "3,382",
    percent: "0.80%",
    quantity: "48,441,604",
    ratio: 60, // 예시: 실제 로직에서는 ask 볼륨/전체 볼륨 * 100 값
  });

  const trades = Array(8).fill({ price: "328,000", qty: 2 });
  const buyCount = 6;
  const sellCount = 2;
  const vp = ((buyCount / sellCount) * 100).toFixed(0);

  return (
    <div className="font-sans text-[#222] max-w-[720px] mx-auto p-4 bg-[#f2f2f2]">
      {/* 상단: 매도호가 + 거래정보 */}
      <div className="flex">
        <div className="w-2/3 bg-[#e3f2ff] p-2 flex flex-col gap-2">
          {hogaData.map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex-shrink-0 w-[55px] flex flex-col">
                <span className="text-red-500 font-bold leading-tight">
                  {item.price}
                </span>
                <span className="text-[#555] text-[10px] leading-tight">
                  {item.percent}
                </span>
              </div>

              <div className="flex-1 flex items-center ml-2">
                {/* bar outer */}
                <div className="relative w-full h-5 bg-[#cce0f7] overflow-hidden">
                  {/* bar fill */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-[#005baf]"
                    style={{ width: `${item.ratio}%` }}
                  />
                  {/* 모바일/앱용: bar 위에 겹쳐서 수량 표시(640px 이상 화면에선 숨김) */}
                  <span className="absolute right-1 top-[1px] text-white text-[10px] font-bold sm:hidden">
                    {item.quantity}
                  </span>
                </div>
                {/* 웹용: 바 옆에 붙여서 수량 표시(640px 미만 화면에선 숨김) */}
                <span className="hidden sm:inline ml-2 text-[10px] font-bold whitespace-nowrap">
                  {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 bg-white p-3 text-xs leading-6 flex flex-col justify-end">
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

      {/* 하단: 매수호가 + 체결강도 */}
      <div className="flex mt-1">

        <div className="w-2/3 bg-[#FFD2D5] p-2 flex flex-col gap-2">
          {hogaData.map((item, i) => (
            <div key={i} className="flex items-center">
              {/* 가격 / 등락률 */}
              <div className="flex-shrink-0 w-[55px] flex flex-col">
                <span className="text-blue-500 font-bold leading-tight">
                  {item.price}
                </span>
                <span className="text-[#555] text-[10px] leading-tight">
                  {item.percent}
                </span>
              </div>

              {/* bar + 수량 */}
              <div className="flex-1 flex items-center ml-2">
                <div className="relative w-full h-5 bg-[#f6caca] overflow-hidden">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-[#df2424]"
                    style={{ width: `${item.ratio}%` }}
                  />
                  <span className="absolute right-1 top-[1px] text-white text-[10px] font-bold sm:hidden">
                    {item.quantity}
                  </span>
                </div>
                <span className="hidden sm:inline ml-2 text-[10px] font-bold whitespace-nowrap">
                  {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 bg-white p-3 text-xs">
          {/* 체결강도 헤더 */}
          <div className="text-sm font-bold text-gray-700 mb-1">
            체결강도 <span className="text-red-500">{vp}%</span>
          </div>
          {/* 체결목록 컬럼명 */}
          <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1 px-2">
            <span>체결가</span>
            <span>체결량</span>
          </div>
          {/* 체결목록 데이터 */}
          {trades.map((t, i) => (
            <div
              key={i}
              className="flex justify-between px-2 py-1 border-b border-gray-100 text-[10px]"
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

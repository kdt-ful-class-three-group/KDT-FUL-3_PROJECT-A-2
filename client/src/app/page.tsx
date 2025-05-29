"use client";
import React from "react";

export default function StockBookUI() {
  const hogaData = Array(20).fill({
    price: "3,382",
    percent: "0.80%",
    quantity: "48,441,604",
  });

  const trades = Array(8).fill({ price: "328,000", qty: 2 });
  const buyCount = 6;
  const sellCount = 2;
  const vp = ((buyCount / sellCount) * 100).toFixed(0);

  const infoList = [
    { label: "거래량", value: "223,215,046 XRP" },
    { label: "거래금", value: "765,897백만원" },
    { label: "52주 최고", value: "4,984 (2025.01.20)" },
    { label: "52주 최저", value: "4,984 (2025.01.20)" },
    { label: "전일종가", value: "4,984" },
    { label: "당일고가", value: "4,984 (0.68%)" },
    { label: "당일저가", value: "4,984 (-1.55%)" },
  ];
  return (
    <div className="font-sans text-[#222] max-w-[720px] mx-auto p-4 bg-[#f2f2f2]">
      {/* 💡 전체 레이아웃을 감싸는 wrapper: 위아래+좌우 rounded 처리 */}
      <div className="overflow-hidden rounded-md shadow-md border border-gray-200">
        {/* 🔵 상단: 파란 호가 + 거래 정보 */}
        <div className="flex">
          <div className="flex-1 bg-[#e3f2ff] p-2 flex flex-col-reverse gap-2">
            {hogaData.map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-red-500 font-bold w-[55px]">3,382</span>
                <span className="text-gray-500 text-xs">0.80%</span>
                <div className="relative bg-[#cce0f7] flex-1 h-5 rounded-md">
                  <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-[#005baf] rounded-l-md" />
                  {/* 위에는 데이터가 없어서 60퍼라고 넣은값 데이터 넣을때 아래 코드 보고 넣으면 됨 */}
                  {/* <div
                    className="absolute left-0 top-0 bottom-0 bg-[#005baf] rounded-l-md"
                    style={{ width: `${ratio * 100}%` }}
                  /> */}
                  <span className="absolute right-1 top-[2px] text-white text-[11px] font-bold">
                    48,441,604
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 거래 정보 박스 */}
          {/* <div className="flex-1 bg-white p-3 text-sm leading-6">
            <div className="flex justify-between">
              <strong>거래량:</strong> 223,215,046 XRP
            </div>
            <div className="flex justify-between">
              <strong>거래금:</strong> 765,897백만원
            </div>
            <div className="flex justify-between">
              <strong>52주 최고:</strong> 4,984 (2025.01.20)
            </div>
            <div className="flex justify-between">
              <strong>52주 최저:</strong> 4,984 (2025.01.20)
            </div>
            <div className="flex justify-between">
              <strong>전일종가:</strong> 4,984
            </div>
            <div className="flex justify-between">
              <strong>당일고가:</strong> 4,984 (0.68%)
            </div>
            <div className="flex justify-between">
              <strong>당일저가:</strong> 4,984 (-1.55%)
            </div>
          </div> */}

          <div className="flex-1 bg-white p-3 text-sm leading-tight h-48 flex items-end">
            <div className="w-full">
              {infoList.map((item, index) => (
                <div className="flex justify-between mb-1" key={index}>
                  <strong>{item.label}:</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔴 하단: 매도 박스 + 체결강도 박스 */}
        <div className="flex">
          {/* 매도 박스 */}
          <div className="flex-1 bg-[#FFD2D5] p-2 flex flex-col gap-2">
            {hogaData.map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-blue-500 font-bold w-[55px]">3,382</span>
                <span className="text-gray-500 text-xs">0.80%</span>
                <div className="relative bg-[#f6caca] flex-1 h-5 rounded-md">
                  <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-[#df2424] rounded-l-md" />
                  <span className="absolute right-1 top-[2px] text-white text-[11px] font-bold">
                    48,441,604
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 체결강도 박스 */}
          <div className="flex-1 bg-blue-50 p-3">
            <div className="text-sm font-bold text-blue-600 mb-2">
              체결강도 <span className="ml-1">{vp}%</span>
            </div>
            <div className="flex justify-between">
              <strong>체결가</strong>
              <strong>체결량</strong>
            </div>
            {trades.map((t, i) => (
              <div
                key={i}
                className="flex justify-between bg-blue-100 px-2 py-1 text-sm rounded mb-1"
              >
                {" "}
                <span>{t.price}</span>
                <span>{t.qty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md"></div>
    </div>
  );
}

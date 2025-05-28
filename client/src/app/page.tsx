"use client";
import React, { useState } from "react";

type TradeData = {
  time: string;
  price: string;
  volume: string;
};

type DailyData = {
  date: string;
  close: string;
  change: string;
  volume: string;
};

const tradeData: TradeData[] = new Array(25).fill(null).map(() => ({
  time: "16:37:13",
  price: "149,099,000",
  volume: "0.0033514",
}));

const dailyData: DailyData[] = new Array(25).fill(null).map(() => ({
  date: "5.16",
  close: "3,382",
  change: "0.56%/19",
  volume: "41,309,700.039",
}));

export default function MarketDetailPage() {
  const [activeTab, setActiveTab] = useState<"체결" | "일별">("체결");

  return (
    <div className="p-4">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-center mb-2">
          <h1 className="text-orange-500 text-xl font-bold">한화이글스</h1>
        </div>
        <div className="text-left">
          <div className="text-3xl font-bold text-red-500">3,382</div>
          <div className="text-sm text-pink-500">0.56%</div>
        </div>

        {/* 탭 메뉴 */}
        <div className="mt-4 flex gap-2 items-center justify-center">
          <button
            className={`px-4 py-1 rounded ${
              activeTab === "체결" ? "bg-blue-900 text-white" : "border"
            }`}
            onClick={() => setActiveTab("체결")}
          >
            체결
          </button>
          <button
            className={`px-4 py-1 rounded ${
              activeTab === "일별" ? "bg-blue-900 text-white" : "border"
            }`}
            onClick={() => setActiveTab("일별")}
          >
            일별
          </button>
        </div>
      </div>

      {/* 테이블 영역 */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {activeTab === "체결" ? (
            <table className="w-full text-sm table-fixed">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="py-2 w-1/3">체결시간</th>
                  <th className="w-1/3">체결가격</th>
                  <th className="w-1/3">체결량</th>
                </tr>
              </thead>
              <tbody>
                {tradeData.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{row.time}</td>
                    <td className="text-red-500">{row.price}</td>
                    <td
                      className={`${
                        idx % 2 === 0 ? "text-red-500" : "text-blue-500"
                      }`}
                    >
                      {row.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-sm table-fixed">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="py-2 w-1/4">일자</th>
                  <th className="w-1/4">종가</th>
                  <th className="w-1/4">전일대비</th>
                  <th className="w-1/4">거래량</th>
                </tr>
              </thead>
              <tbody>
                {dailyData.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{row.date}</td>
                    <td
                      className={`${
                        idx % 2 === 0 ? "text-red-500" : "text-blue-500"
                      }`}
                    >
                      {row.close}
                    </td>
                    <td className="text-pink-500">{row.change}</td>
                    <td>{row.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

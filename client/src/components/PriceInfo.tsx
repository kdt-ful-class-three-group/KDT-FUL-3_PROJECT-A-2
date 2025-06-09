"use client";
import Title from "@/components/Title";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "@/components/Spinner";

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

export default function PriceInfo({ stockCode }: PriceInfoProps) {
  const [activeTab, setActiveTab] = useState<"체결" | "일별">("체결");

  // fetch 체결 데이터
  const { data: tradeData = [], isLoading: isTradeLoading } = useQuery({
    queryKey: ["tradeData", stockCode],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:8000/interest/${stockCode}`
      );
      return res.data as TradeData[];
    },
    staleTime: 1000 * 30,
  });

  // fetch 일별 데이터
  const { data: dailyData = [], isLoading: isDailyLoading } = useQuery({
    queryKey: ["dailyData", stockCode],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:8000/interest/${stockCode}`
      );
      return res.data as DailyData[];
    },
    staleTime: 1000 * 60 * 5,
  });

  if (
    (activeTab === "체결" && isTradeLoading) ||
    (activeTab === "일별" && isDailyLoading)
  ) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        <div className="text-left"></div>

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

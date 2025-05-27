"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";

interface StockData {
  name: string;
  price: number;
  change: number;
  volume: string;
}

export default function ExchangePage() {
  const [search, setSearch] = useState("");
  const [portfolio] = useState({
    totalPurchase: 12,
    totalEvaluation: 12,
    profitLoss: 1200,
    profitRate: 10,
  });
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    setStocks([
      { name: "한화에어로스", price: 50000, change: 0.31, volume: "741,123백만" },
      { name: "삼성전자", price: 50000, change: 0.31, volume: "741,123백만" },
      { name: "삼성전자", price: 50000, change: 0.31, volume: "741,123백만" },
    ]);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getPriceColor = (stock: StockData) => {
    return stock.name.includes("삼성") ? "text-blue-400" : "text-red-400";
  };

  const getChangeColor = (change: number) => {
    return change < 0 ? "text-blue-400" : "text-red-400";
  };

  return (
    <div className="bg-white text-black min-h-screen p-4 m-auto">
      <Title title="거래소" />

      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-2xl shadow-lg">
        {/* 종목 검색 */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1 text-orange-600">종목 검색</label>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="종목 검색"
            className="w-full p-2 rounded bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* 사용자 요약 정보 */}
        <div className="bg-gray-200 p-4 rounded mb-4 text-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">총 매수</p>
              <p className="text-black font-bold">{portfolio.totalPurchase}</p>
            </div>
            <div>
              <p className="text-gray-600">평가손익</p>
              <p className="text-red-600 font-bold">{portfolio.profitLoss.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-600">총 평가</p>
              <p className="text-black font-bold">{portfolio.totalEvaluation}</p>
            </div>
            <div>
              <p className="text-gray-600">수익률</p>
              <p className="text-red-600 font-bold">{portfolio.profitRate}%</p>
            </div>
          </div>
        </div>

        {/* 종목 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-300 text-orange-600">
              <tr>
                <th className="p-2">종목</th>
                <th className="p-2 text-right">현재가</th>
                <th className="p-2 text-right">전일대비</th>
                <th className="p-2 text-right">거래대금</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stocks.map((stock, i) => (
                <tr key={i}>
                  <td className="p-2">{stock.name}</td>
                  <td className={`p-2 text-right ${getPriceColor(stock)}`}>
                    {stock.price.toLocaleString()}
                  </td>
                  <td className={`p-2 text-right ${getChangeColor(stock.change)}`}>
                    {stock.change}%
                  </td>
                  <td className="p-2 text-right text-blue-600">{stock.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Nav />
    </div>
  );
}

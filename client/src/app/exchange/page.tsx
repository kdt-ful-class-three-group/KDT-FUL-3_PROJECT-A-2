"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/input";
import { useRouter } from "next/navigation";

interface StockData {
  name: string;
  price: number;
  change: number;
  volume: string;
}

export default function ExchangePage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [portfolio] = useState({
    totalPurchase: 12,
    totalEvaluation: 12,
    profitLoss: 1200,
    profitRate: 10,
  });
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<StockData[]>([]);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  // 종목 코드와 이름을 매핑
  const stockNames: { [key: string]: string } = {
    "005930": "삼성전자",
    "000660": "SK 하이닉스",
    "035420": "NAVER(네이버)",
    "005380": "현대차",
    "051910": "LG화학",
    "035720": "카카오",
    "012330": "삼성생명",
    "003550": "삼성물산",
    "006400": "삼성전기",
    "005490": "POSCO(포스코)",
  };

  // 여러 종목 코드 배열
  const stockCodes = Object.keys(stockNames);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // 여러 종목 데이터를 비동기로 받아오기
        const stockDataPromises = stockCodes.map((code) =>
          fetch(`http://localhost:8000/stock/price/${code}`).then((res) => res.json())
        );

        // 모든 데이터가 준비될 때까지 기다림
        const stockDataResponses = await Promise.all(stockDataPromises);

        // 받은 데이터를 처리
        const stockItems = stockDataResponses.map((data, index) => {
          const stockData = data.output || data; // 응답 구조에 맞게 처리

          return {
            name: stockNames[stockCodes[index]], // 종목 이름을 매핑
            price: Number(stockData.stck_prpr), // 현재가
            change: Number(stockData.prdy_ctrt), // 전일대비 퍼센트 (%)
            volume: stockData.acml_tr_pbmn, // 거래대금 (단위: 원)
          };
        });

        setStocks(stockItems);
        setFilteredStocks(stockItems);
      } catch (err) {
        console.error("API 데이터 불러오기 실패:", err);
      }
    };

    fetchStocks();
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSearch(e.target.value);
  };

  const sortBy = (field: keyof StockData) => {
    const sorted = [...filteredStocks].sort((a, b) => {
      const aVal = field === "volume" ? parseInt(a[field].replace(/[^0-9]/g, "")) : a[field];
      const bVal = field === "volume" ? parseInt(b[field].replace(/[^0-9]/g, "")) : b[field];
      return sortAsc ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
    });
    setFilteredStocks(sorted);
    setSortField(field);
    setSortAsc(!sortAsc);
  };

  const getPriceColor = (stock: StockData) => {
    return stock.name.includes("삼성") ? "text-blue-400" : "text-red-400";
  };

  const getChangeColor = (change: number) => {
    return change < 0 ? "text-blue-400" : "text-red-400";
  };

  return (
    <div className="bg-white text-black min-h-screen p-4 text-xs">
      <Title title="거래소" />

      <div className="max-w-full mx-auto p-4 bg-gray-100 rounded-2xl shadow-lg">
        {/* 종목 검색 */}
        <div className="mb-4">
          <label className="block text-xs font-bold mb-1 text-orange-600">종목 검색</label>
          <Input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="종목 검색"
            className="w-full p-2 rounded bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* 사용자 요약 정보 */}
        <div className="bg-gray-200 p-4 rounded mb-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-gray-600">총 매수 : </p>
              <p className="text-black font-bold">{portfolio.totalPurchase}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">평가손익 :</p>
              <p className="text-red-600 font-bold">{portfolio.profitLoss.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-gray-600">총 평가 :</p>
              <p className="text-black font-bold">{portfolio.totalEvaluation}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">수익률 :</p>
              <p className="text-red-600 font-bold">{portfolio.profitRate}%</p>
            </div>
          </div>
        </div>

        {/* 종목 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-300 text-orange-600">
              <tr>
                <th className="p-2">종목</th>
                <th className="p-2 text-right">
                  현재가
                  <button onClick={() => sortBy("price")} className="ml-3 text-xs">▲▼</button>
                </th>
                <th className="p-2 text-right">
                  전일대비
                  <button onClick={() => sortBy("change")} className="ml-1 text-xs">▲▼</button>
                </th>
                <th className="p-2 text-right">
                  거래대금
                  <button onClick={() => sortBy("volume")} className="ml-1 text-xs">▲▼</button>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStocks.map((stock, i) => (
                <tr key={i} className="cursor-pointer" onClick={() => router.push("/stock-detail")}>
                  <td className="p-2">{stock.name}</td>
                  <td className={`p-2 text-right ${getPriceColor(stock)}`}>{stock.price.toLocaleString()}</td>
                  <td className={`p-2 text-right ${getChangeColor(stock.change)}`}>{stock.change}%</td>
                  <td className="p-2 text-right text-blue-600">{Number(stock.volume).toLocaleString()}백만</td>
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

// client/src/app/exchange/page.tsx
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
  const [favorites] = useState<Set<string>>(new Set());


//   useEffect(() => {
//   const fetchStocks = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/stocks"); 
//       const data = await res.json();
//       setStocks(data);
//       setFilteredStocks(data);
//     } catch (error) {
//       console.error("주식 데이터 불러오기 실패", error);
//     }
//   };

//   fetchStocks();
// }, []);

useEffect(() => {
  const fetchSamsung = async () => {
    try {
      const res = await fetch("http://localhost:8000/stock/price/005930");
      const data = await res.json();

      // 실제 응답 구조 확인 필수!
      const stockData = data.output || data; // 예: { output: { stck_prpr, ... } } or { stck_prpr, ... }

      const stockItem: StockData = {
        name: "삼성전자",
        price: Number(stockData.stck_prpr),       // 현재가
        change: Number(stockData.prdy_ctrt),      // 전일대비 퍼센트 (%)
        volume: stockData.acml_tr_pbmn,           // 거래대금 (단위: 원)
      };

      setStocks([stockItem]);
      setFilteredStocks([stockItem]);
    } catch (err) {
      console.error("API 데이터 불러오기 실패:", err);
    }
  };

  fetchSamsung();
}, []);




  // useEffect(() => {
  //   const initialStocks = [
  //     { name: "한화에어로스", price: 50000, change: 0.31, volume: "741123" },
  //     { name: "삼성전자", price: 60000, change: -0.41, volume: "812455" },
  //     { name: "LG화학", price: 45000, change: 1.12, volume: "512320" },
  //   ];
  //   setStocks(initialStocks);
  //   setFilteredStocks(initialStocks);
  // }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSearch(e.target.value);
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     const keyword = search.trim();
  //     const result = stocks.filter(stock => stock.name.includes(keyword));
  //     setFilteredStocks(result);
  //   }
  // };

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
      <Title title="거래소" bookmark={false} dictionary={false} />

      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-2xl shadow-lg">
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
        <div className="bg-gray-200 p-4 rounded mb-4 grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-gray-600">총 매수</p>
            <p className="text-black font-bold">{portfolio.totalPurchase}</p>
          </div>
          <div>
            <p className="text-gray-600">평가손익</p>
            <p className="text-red-600 font-bold">{portfolio.profitLoss.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">총 평가</p>
            <p className="text-black font-bold">{portfolio.totalEvaluation}</p>
          </div>
          <div>
            <p className="text-gray-600">수익률</p>
            <p className="text-red-600 font-bold">{portfolio.profitRate}%</p>
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

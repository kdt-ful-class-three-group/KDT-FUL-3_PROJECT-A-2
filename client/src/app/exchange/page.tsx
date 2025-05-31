"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import StockTitleList from "@/components/StockTitleList";
import StockPortfolio from "@/components/StockPortfolio";
import { useStockApi, StockData } from "@/hooks/useStockApi";
// import { useMockStockSimulator } from "@/hooks/useMockStockSimulator";

export default function ExchangePage() {
  const [search, setSearch] = useState("");
  const { allStocks } = useStockApi();
  const [sortField, setSortField] = useState<"mkp" | "fltRt" | "trPrc" | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [sortedStocks, setSortedStocks] = useState<StockData[]>([]);
  // const mockData = useMockStockSimulator(stocks);
  // 정렬 기준/방향/원본 데이터가 바뀔 때마다 정렬
  console.log(allStocks);
  useEffect(() => {
    if (!sortField) {
      setSortedStocks(allStocks);
      return;
    }
    const sorted = [...allStocks].sort((a, b) => {
      const stocksUp = parseFloat(a[sortField]);
      const stocksDown = parseFloat(b[sortField]);
      return sortOrder === "desc"
        ? stocksDown - stocksUp
        : stocksUp - stocksDown;
    });
    setSortedStocks(sorted);
  }, [allStocks, sortField, sortOrder]);

  const handleSort = (field: "mkp" | "fltRt" | "trPrc") => {
    let nextOrder: "desc" | "asc" = sortOrder;
    if (sortField === field) {
      nextOrder = sortOrder === "desc" ? "asc" : "desc";
    } else {
      nextOrder = "desc";
    }
    setSortField(field);
    setSortOrder(nextOrder);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Title title="거래소" bookmark={false} dictionary={false} />
      <div className="max-w-full">
        {/* 종목 검색 */}
        <div className="flex m-auto px-4">
          <img src="./image/search.svg" alt="" />
          <Input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="종목 검색"
            className="w-full p-2 text-black placeholder-gray-500 outline-none"
          />
        </div>
        {/* 사용자 요약 정보 */}
        <StockPortfolio />
        {/* 종목 테이블 */}
        <div className="overflow-x-auto mt-5">
          <StockTitleList
            sortedStocks={sortedStocks}
            sortField={sortField}
            sortOrder={sortOrder}
            handleSort={handleSort}
            stocks={allStocks}
          />
        </div>
        {/* <SimulatedStockTest /> */}
      </div>
      <Nav />
    </div>
  );
}

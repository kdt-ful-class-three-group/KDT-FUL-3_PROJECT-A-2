"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import StockTitleList from "@/components/StockTitleList"; // 종목 리스트 컴포넌트
import StockPortfolio from "@/components/StockPortfolio"; // 포트폴리오 컴포넌트

import { useStockApi, StockData } from "@/hooks/useStockApi"; // API 훅

export default function ExchangePage() {
  const [search, setSearch] = useState("");
  const { stocks } = useStockApi();
  console.log(stocks);
  const [sortField, setSortField] = useState<"mkp" | "fltRt" | "trPrc" | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [sortedStocks, setSortedStocks] = useState<StockData[]>([]);
  useEffect(() => {
    if (!sortField) {
      setSortedStocks(stocks);
      return;
    }
  }, [stocks]);

  const handleSort = (field: "mkp" | "fltRt" | "trPrc") => {
    let nextOrder: "desc" | "asc" = sortOrder;
    if (sortField === field) {
      nextOrder = sortOrder === "desc" ? "asc" : "desc";
    } else {
      nextOrder = "desc";
    }
    setSortField(field);
    setSortOrder(nextOrder);

    const sorted = [...sortedStocks].sort((a, b) => {
      const upNum = parseFloat(a[field]);
      const downNum = parseFloat(b[field]);
      return nextOrder === "desc" ? downNum - upNum : upNum - downNum;
    });
    setSortedStocks(sorted);
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
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
          <StockTitleList sortedStocks={sortedStocks} handleSort={handleSort} />
        </div>
      </div>

      <Nav />
    </div>
  );
}

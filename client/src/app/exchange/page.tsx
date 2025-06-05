"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import StockTitleList from "@/components/StockTitleList";
import StockPortfolio from "@/components/StockPortfolio";
import { useStockApi } from "@/hooks/useStockApi";

import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트

export default function ExchangePage() {
  const [search, setSearch] = useState("");
  const { allStocks, isLoading } = useStockApi();
  const [sortField, setSortField] = useState<"mkp" | "fltRt" | "trPrc" | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  if (isLoading) {
    return <Spinner />;
  }
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

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mb-25">
      <Title title="거래소" bookmark={false} dictionary={false} />
      <div className="max-w-full">
        {/* 종목 검색 */}
        <div className="flex w-full m-auto px-4">
          <img src="./image/search.svg" alt="" />
          <Input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            pattern={""}
            placeholder="종목 검색"
            className="w-full p-2 text-black placeholder-gray-500 outline-none"
            title=""
          />
        </div>
        {/* 사용자 요약 정보 */}
        <StockPortfolio />
        {/* 종목 테이블 */}
        <div className="overflow-x-auto mt-5">
          <StockTitleList
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

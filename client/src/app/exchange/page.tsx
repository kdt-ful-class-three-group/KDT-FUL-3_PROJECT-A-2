"use client";

import React, { useEffect, useState, useMemo } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import StockTitleList from "@/components/StockTitleList";
import StockPortfolio from "@/components/StockPortfolio";
import { useStockApi, StockData } from "@/hooks/useStockApi";
import { useMockStockSimulator } from "@/hooks/useMockStockSimulator";
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트
import { useStockStore } from "@/store/stockStore";
export default function ExchangePage() {
  const [search, setSearch] = useState("");
  const { prevStocks, nextStocks, isLoading } = useStockApi();
  const [sortField, setSortField] = useState<"mkp" | "fltRt" | "trPrc" | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  useMockStockSimulator(prevStocks, nextStocks);
  const simulatedList = useStockStore((state) => state.simulatedList);
  // zustand setter 가져오기
  const setFilteredStocks = useStockStore((state) => state.setFilteredStocks);

  // filteredStocks 계산
  const filteredStocks = useMemo(
    () => simulatedList.filter((stock) => stock.itmsNm.includes(search)),
    [simulatedList, search]
  );

  // zustand에 filteredStocks 저장
  useEffect(() => {
    setFilteredStocks(filteredStocks);
  }, [filteredStocks, setFilteredStocks]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
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
            placeholder="종목 검색"
            className="w-full p-2 text-black placeholder-gray-500 outline-none"
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
            stocks={filteredStocks}
          />
        </div>
        {/* <SimulatedStockTest /> */}
      </div>
      <Nav />
    </div>
  );
}

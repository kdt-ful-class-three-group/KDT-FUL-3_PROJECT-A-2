// client/src/app/watch-list/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
// import WatchListPage from "@/components/WatchListPage";
import StockPortfolio from "@/components/StockPortfolio";
import TitleList from "@/components/TitleList";
import StockPageLayout from "@/components/StockPageLayout";
import { useStockList } from "@/hooks/useStockList";
import { useStockApi } from "@/hooks/useStockApi";
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트

export default function Page() {
  const {
    stocks: sortedStocks,
    search,
    handleChange,
  } = useStockList("http://localhost:8000/interest");
  console.log("sortedStocks", sortedStocks);
  const { isLoading } = useStockApi(); //
  return (
    <div className="mb-25">
      <StockPageLayout title="관심" search={search} handleChange={handleChange}>
        {isLoading ? <Spinner /> : <TitleList sortedStocks={sortedStocks} />}
      </StockPageLayout>
    </div>
  );
}

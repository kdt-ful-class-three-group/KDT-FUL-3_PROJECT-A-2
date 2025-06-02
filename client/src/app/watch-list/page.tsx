// client/src/app/watch-list/page.tsx
"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
// import WatchListPage from "@/components/WatchListPage";
import StockPortfolio from "@/components/StockPortfolio";
import StockTitleList from "@/components/StockTitleList";
import { StockData } from "@/hooks/useStockApi";

export default function Page() {
  // Page 컴포넌트 안에서 useState 선언 (초기값은 빈 배열)
  const [sortedStocks, setSortedStocks] = useState<StockData[]>([]);

  return (
    <div className="p-4">
      {/* 상단 레이아웃 영역 */}
      <Title title="관심" bookmark={false} dictionary={false} />

      {/* 사용자 요약 정보 */}
      <StockPortfolio />

      {/* 종목테이블 */}
      <StockTitleList sortedStocks={sortedStocks} />

      {/* 관심종목 리스트 컴포넌트 */}
      {/* <WatchListPage /> */}

      {/* 네비게이션 */}
      <Nav />
    </div>
  );
}

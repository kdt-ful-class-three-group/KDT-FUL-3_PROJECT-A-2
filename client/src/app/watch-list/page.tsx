// client/src/app/watch-list/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
// import WatchListPage from "@/components/WatchListPage";
import StockPortfolio from "@/components/StockPortfolio";
import TitleList from "@/components/TitleList";
import { StockData } from "@/hooks/useStockApi";

export default function Page() {
  const [sortedStocks, setSortedStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/interest")
      .then((response) => response.json())
      .then((data) => {
        setSortedStocks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("관심 종목 DB 연결 오류:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-25">
      <Title title="관심" bookmark={false} dictionary={false} />
      <StockPortfolio />
      {/* 로딩 중일 때와 데이터가 없을 때 구분 */}
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <TitleList sortedStocks={sortedStocks}/>
      )}

      {/* 관심종목 리스트 컴포넌트 */}
      {/* <WatchListPage /> */}

      {/* 네비게이션 */}
      <Nav />
    </div>
  );
}

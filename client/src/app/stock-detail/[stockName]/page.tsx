// 예: stock-detail/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // URL 파라미터 가져오기
import Title from "@/components/Title";

import StockHeader from "@/components/StockHeader"; // 차트 내용 컴포넌트
import CompanyInfo from "@/components/CompanyInfo"; // 정보 탭 컴포넌트
import OrderPage from "@/components/OrderPage"; // 주문 탭 컴포넌트
import OrderBook from "@/components/OrderBook"; // 호가 탭 컴포넌트
import StockChart from "@/components/StockChart"; // 차트 탭 컴포넌트
import PriceInfo from "@/components/PriceInfo"; // 가격 정보 탭 컴포넌트
import { useStockApi } from "@/hooks/useStockApi"; // API 훅
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트

export default function StockDetailPage() {
  const { allStocks, isLoading } = useStockApi();
  const [tab, setTab] = useState("orderPage");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const params = useParams();
  const srtnCd = params?.stockName as string;

  // 종목 데이터에서 해당 종목 찾기
  const stock = allStocks.find((s) => s.srtnCd === srtnCd);

  // 관심종목 등록 여부 확인 (마운트 시)
  useEffect(() => {
    if (!stock) return;
    fetch(`http://localhost:8000/interest`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item: any) => item.stock_code === stock.srtnCd);
        setIsBookmarked(!!found);
      });
  }, [stock?.srtnCd]);

  // 북마크 클릭 시 관심종목 추가/삭제
  const handleBookmarkClick = async () => {
    if (!stock) return;
    if (!isBookmarked) {
      await fetch("http://localhost:8000/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // member_id: 1, 
          stock_code: stock.srtnCd,
          stock_name: stock.itmsNm,
        }),
      });
      setIsBookmarked(true);
    } else {
      await fetch(`http://localhost:8000/interest/${stock.srtnCd}`, {
        method: "DELETE",
      });
      setIsBookmarked(false);
    }
  };

  if (isLoading || !stock) {
    return <Spinner />;
  }

  return (
    <div>
      <Title
        title={stock.itmsNm}
        bookmark={isBookmarked}
        dictionary={false}
        onBookmarkClick={handleBookmarkClick}
      />
      <StockHeader
        onSelectTab={setTab}
        stockValue={stock}
      />
      <div className="p-4">
        {tab === "companyInfo" && <CompanyInfo />}
        {tab === "orderPage" && <OrderPage stockCode={srtnCd} />}
        {tab === "orderBook" && <OrderBook />}
        {tab === "stockChart" && <StockChart />}
        {tab === "priceInfo" && <PriceInfo />}
      </div>
    </div>
  );
}

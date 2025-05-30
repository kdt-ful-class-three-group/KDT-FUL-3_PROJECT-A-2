// 예: stock-detail/page.tsx
"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation"; // URL 파라미터 가져오기
import Title from "@/components/Title";

import StockHeader from "@/components/StockHeader"; // 차트 내용 컴포넌트
import CompanyInfo from "@/components/CompanyInfo"; // 정보 탭 컴포넌트
import OrderPage from "@/components/OrderPage"; // 주문 탭 컴포넌트
import OrderBook from "@/components/OrderBook"; // 호가 탭 컴포넌트
import StockChart from "@/components/StockChart"; // 차트 탭 컴포넌트
import PriceInfo from "@/components/PriceInfo"; // 가격 정보 탭 컴포넌트
import { useStockApi } from "@/hooks/useStockApi"; // API 훅

export default function StockDetailPage() {
  const { stocks } = useStockApi();
  const [tab, setTab] = useState("orderBook");
  const params = useParams();
  const srtnCd = params?.stockName as string;
  const stockNumFind = stocks.find((s) => s.srtnCd === srtnCd);

  if (!stockNumFind) {
    return <div>종목 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Title title={stockNumFind.itmsNm} bookmark={false} dictionary={false} />
      <StockHeader onSelectTab={setTab} stockValue={stockNumFind} />
      <div className="p-4">
        {tab === "companyInfo" && <CompanyInfo />}
        {tab === "orderForm" && <OrderPage />}
        {tab === "orderBook" && <OrderBook />}
        {tab === "stockChart" && <StockChart />}
        {tab === "priceInfo" && <PriceInfo />}
      </div>
    </div>
  );
}

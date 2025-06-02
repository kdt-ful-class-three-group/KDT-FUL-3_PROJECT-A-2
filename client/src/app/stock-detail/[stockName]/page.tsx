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
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트

export default function StockDetailPage() {
  const { stocks, isLoading } = useStockApi();
  const [tab, setTab] = useState("orderPage"); // 초기 탭은 주문 페이지로 설정
  const params = useParams();
  const srtnCd = params?.stockName as string;
  const stockNumFind = stocks.find((s) => s.srtnCd === srtnCd);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title={stockNumFind.itmsNm} bookmark={false} dictionary={false} />
      <StockHeader onSelectTab={setTab} stockValue={stockNumFind} />
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

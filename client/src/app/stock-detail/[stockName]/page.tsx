// src/app/stock-detail/[stockName]/page.tsx
"use client";

import React, {  useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Title from "@/components/Title";
import StockHeader from "@/components/StockHeader";
import CompanyInfo from "@/components/CompanyInfo";
import OrderForm from "@/components/OrderForm";
import OrderBook from "@/components/OrderBook";
import StockChart from "@/components/StockChart";
import PriceInfo from "@/components/PriceInfo";

export default function StockDetailPage() {
  const router = useRouter();
  const params = useParams(); // URL 파라미터 가져오기
  const stockName = decodeURIComponent(params.stockName as string); // "삼성전자" 등 한글 대응
  
  const [tab, setTab] = useState("orderBook");

  // 이전 버튼 미리 거래소 페이지를 프리페치
  // 이전 페이지로 돌아갈 때 로딩 시간을 줄이기 위함
  useEffect(() => {
    router.prefetch("/exchange");
  }, [router]);

  
  return (
    <div>
      <Title title={stockName} bookmark={false} dictionary={false} />
      <StockHeader
        onSelectTab={setTab}
        name={stockName}
        price={3382}
        percent={0.56}
      />

      <div className="p-4">
        {tab === "companyInfo" && <CompanyInfo />}
        {tab === "orderForm" && <OrderForm />}
        {tab === "orderBook" && <OrderBook />}
        {tab === "stockChart" && <StockChart />}
        {tab === "priceInfo" && <PriceInfo />}
      </div>
    </div>
  );
}

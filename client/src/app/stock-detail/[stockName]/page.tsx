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
import { useMockStockSimulator } from "@/hooks/useMockStockSimulator";
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트

export default function StockDetailPage() {
  const { prevStocks, nextStocks, isLoading } = useStockApi();
  const [tab, setTab] = useState("orderPage");
  const params = useParams();
  const srtnCd = params?.stockName as string;

  // 배열로 반환된 시뮬레이션 데이터에서 해당 종목 찾기
  const simulatedList = useMockStockSimulator(prevStocks, nextStocks);
  const simulated = simulatedList.find((s) => s.srtnCd === srtnCd);

  if (isLoading || !simulated) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title={simulated.itmsNm} bookmark={false} dictionary={false} />
      <StockHeader
        onSelectTab={setTab}
        stockValue={{
          ...simulated,
          fltRt: simulated.simulatedChangeRate.toString(),
          mkp: simulated.simulatedPrice.toString(),
          simulatedColor: simulated.simulatedColor, // 추가!
        }}
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

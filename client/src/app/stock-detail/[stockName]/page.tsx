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
// import { useMockStockSimulator } from "@/hooks/useMockStockSimulator";
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트
// import { useStockStore } from "@/store/stockStore";

export default function StockDetailPage() {
  const { allStocks, isLoading } = useStockApi();
  // useMockStockSimulator(prevStocks, nextStocks);
  const [tab, setTab] = useState("orderPage");
  const params = useParams();
  const srtnCd = params?.srtn_cd as string;
  // const simulatedList = useStockStore((state) => state.simulatedList);
  // 배열로 반환된 시뮬레이션 데이터에서 해당 종목 찾기
  // console.log("전역데이터관리", simulatedList);
  // const [simulatedList, priceHistoryMap] = useMockStockSimulator(
  //   prevStocks,
  //   nextStocks
  // );
  // console.log(priceHistoryMap);
  //* 종목코드 필터
  // const simulated = simulatedList.find((s) => s.srtnCd === srtnCd);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title={allStocks.itmsNm} bookmark={false} dictionary={false} />
      <StockHeader
        onSelectTab={setTab}
        stockValue={{
          ...allStocks,
          flt_rt: allStocks.flt_rt,
          mkp: allStocks.mkp,
        }}
      />
      <div className="p-4">
        {tab === "companyInfo" && <CompanyInfo />}
        {tab === "orderPage" && <OrderPage stockCode={srtnCd} />}
        {tab === "orderBook" && <OrderBook />}
        {tab === "stockChart" && (
          <StockChart
            stockNum={allStocks.srtn_cd}
            // stocks={[
            //   {
            //     ...simulated,
            //     fltRt: simulated.simulatedChangeRate.toString(),
            //     mkp: simulated.simulatedPrice.toString(),
            //     simulatedColor: simulated.simulatedColor,
            //   },
            // ]}
            // priceHistoryMap={priceHistoryMap}
          />
        )}
        {tab === "priceInfo" && <PriceInfo />}
      </div>
    </div>
  );
}

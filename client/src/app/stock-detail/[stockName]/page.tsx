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
// import { useMockStockSimulator } from "@/hooks/useMockStockSimulator";
import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트
// import { useStockStore } from "@/store/stockStore";

export default function StockDetailPage() {
  const { allStocks, isLoading } = useStockApi();
  // useMockStockSimulator(prevStocks, nextStocks);
  const [tab, setTab] = useState("orderPage");
  const [isStar, setIsStar] = useState(false);
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
  const srtnCd = params?.stockName as string;

  // 종목 데이터에서 해당 종목 찾기
  const stock = allStocks.find((s) => s.srtnCd === srtnCd);

  // 관심종목 등록 여부 확인 (마운트 시)
  useEffect(() => {
    if (sessionStorage.getItem("member_id") === null) return
    if (!stock) return;
    fetch(`http://localhost:8000/interest`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item: any) => item.stock_code === stock.srtnCd);
        setIsStar(!!found);
      });
  }, [stock?.srtnCd]);

  // 북마크 클릭 시 관심종목 추가/삭제
  const handleBookmarkClick = async () => {
    if (sessionStorage.getItem("member_id") === null) return
    if (!stock) return;
    if (!isStar) {
      await fetch("http://localhost:8000/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          member_id: sessionStorage.getItem("member_id"),
          stock_code: stock.srtnCd,
          stock_name: stock.itmsNm,
        }),
      });
      setIsStar(true);
    } else {
      await fetch(`http://localhost:8000/interest/${stock.srtnCd}`, {
        method: "DELETE",
      });
      setIsStar(false);
    }
  };

  if (isLoading || !stock) {
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
      <Title
        title={stock.itmsNm}
        bookmark={true}
        dictionary={false}
        onBookmarkClick={handleBookmarkClick}
        star={isStar}
      />
      <StockHeader
        onSelectTab={setTab}
        stockValue={stock}
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

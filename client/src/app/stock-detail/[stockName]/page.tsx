"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Title from "@/components/Title";
import StockHeader from "@/components/StockHeader";
import CompanyInfo from "@/components/CompanyInfo";
import OrderPage from "@/components/OrderPage";
import OrderBook from "@/components/OrderBook";
import StockChart from "@/components/StockChart";
import PriceInfo from "@/components/PriceInfo";
import { useStockApi, getFltRtColor } from "@/hooks/useStockApi";
import Spinner from "@/components/Spinner";

export default function StockDetailPage() {
  const { latestStocks, isLoading, stockHistories } = useStockApi();
  const [tab, setTab] = useState("orderPage");
  const [isStar, setIsStar] = useState(false);
  const params = useParams();
  const srtn_cd = params?.stockName as string;

  // 종목 데이터에서 해당 종목 찾기
  const stock = latestStocks.find((s) => s.srtn_cd === srtn_cd);

  useEffect(() => {
    if (sessionStorage.getItem("member_id") === null) return;
    if (!stock) return;
    fetch(`http://localhost:8000/interest`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item: any) => item.stock_code === stock.srtn_cd
        );
        setIsStar(!!found);
      });
  }, [stock?.srtn_cd]);

  const handleBookmarkClick = async () => {
    if (sessionStorage.getItem("member_id") === null) {
      console.log('로그인 후 이용가능 합니다.');
      return;
    }
    if (!stock) return;
    if (!isStar) {
      await fetch("http://localhost:8000/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          member_id: sessionStorage.getItem("member_id"),
          stock_code: stock.srtn_cd,
          stock_name: stock.itms_nm,
        }),
      });
      setIsStar(true);
    } else {
      await fetch(`http://localhost:8000/interest/${stock.srtn_cd}`, {
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
      <Title
        title={stock.itms_nm}
        bookmark={true}
        dictionary={false}
        onBookmarkClick={handleBookmarkClick}
        star={isStar}
      />
      <StockHeader
        onSelectTab={setTab}
        stocks={latestStocks}
        stockNum={stock.srtn_cd}
        stockValue={stock}
        getFltRtColor={getFltRtColor}
      />
      <div className="p-4">
        {tab === "companyInfo" && <CompanyInfo stockName={srtn_cd} />}
        {tab === "orderPage" && <OrderPage stock={stock} stockCode={srtn_cd} />}
        {tab === "orderBook" && <OrderBook />}
        {tab === "stockChart" && (
          <StockChart
            stocks={latestStocks}
            stockHistories={stockHistories[stock.srtn_cd] || []}
            stockNum={stock.srtn_cd}
          />
        )}
        {tab === "priceInfo" && <PriceInfo />}
      </div>
    </div>
  );
}

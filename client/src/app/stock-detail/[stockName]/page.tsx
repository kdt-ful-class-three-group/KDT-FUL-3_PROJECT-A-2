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
import { useStockApi } from "@/hooks/useStockApi";
import Spinner from "@/components/Spinner";

export default function StockDetailPage() {
  const { allStocks, isLoading } = useStockApi();
  const [tab, setTab] = useState("orderPage");
  const [isStar, setIsStar] = useState(false);
  const params = useParams();
  const srtnCd = params?.stockName as string;

  // 종목 데이터에서 해당 종목 찾기
  const stock = allStocks.find((s) => s.srtnCd === srtnCd);

  useEffect(() => {
    if (sessionStorage.getItem("member_id") === null) return;
    if (!stock) return;
    fetch(`http://localhost:8000/interest`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item: any) => item.stock_code === stock.srtnCd
        );
        setIsStar(!!found);
      });
  }, [stock?.srtnCd]);

  const handleBookmarkClick = async () => {
    if (sessionStorage.getItem("member_id") === null) return;
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
      <Title
        title={stock.itmsNm}
        bookmark={true}
        dictionary={false}
        onBookmarkClick={handleBookmarkClick}
        star={isStar}
      />
      <StockHeader onSelectTab={setTab} stockValue={stock} />
      <div className="p-4">
        {tab === "companyInfo" && <CompanyInfo />}
        {tab === "orderPage" && <OrderPage stockCode={srtnCd} />}
        {tab === "orderBook" && <OrderBook />}
        {tab === "stockChart" && <StockChart stockNum={stock.srtnCd} />}
        {/* {tab === "priceInfo" && <PriceInfo />} */}
        {tab === "priceInfo" && <PriceInfo stockCode={srtnCd} />}
      </div>
    </div>
  );
}

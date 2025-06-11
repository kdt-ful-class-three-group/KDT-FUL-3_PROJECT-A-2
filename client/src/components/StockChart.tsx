"use client";

import React from "react";
import Chart from "@/components/Chart";
import { StockData, useStockApi } from "@/hooks/useStockApi";
interface StockChartProps {
  stocks: StockData[];
  stockNum: string;
}

export default function StockChart({ stocks, stockNum }: StockChartProps) {
  const { allStocks } = useStockApi();
  const filteredStocks = allStocks
    .filter((stock) => stock.srtn_cd === stockNum)
    .slice(0, 100);
  console.log("filteredStocks", filteredStocks);
  // stockNum: 단일 종목 데이터(객체)
  // stocks: 전체 데이터(배열)
  console.log("stocks", stocks);
  console.log("stockNum", stockNum);
  const history = stocks.filter((s) => String(s.srtn_cd) === String(stockNum));
  console.log("history 확인", history);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">차트 페이지</h2>
      <Chart history={stocks} filteredStocks={filteredStocks} />
    </div>
  );
}

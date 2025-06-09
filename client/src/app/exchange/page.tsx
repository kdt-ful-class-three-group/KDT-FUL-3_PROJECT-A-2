"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import StockTitleList from "@/components/StockTitleList";
import StockPortfolio from "@/components/StockPortfolio";
import TitleList from "@/components/TitleList";
import { useStockList } from "@/hooks/useStockList";
import StockPageLayout from "@/components/StockPageLayout";
import { useStockApi, getFltRtColor } from "@/hooks/useStockApi";

import Spinner from "@/components/Spinner"; // 로딩 스피너 컴포넌트

export default function ExchangePage() {
  const { latestStocks, isLoading } = useStockApi(); //

  // 검색 상태
  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 검색된 종목만 필터링
  const filteredStocks = latestStocks.filter(
    (s) => s.itms_nm?.includes(search) || s.srtn_cd?.includes(search)
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mb-25">
      <StockPageLayout
        title="거래소"
        search={search}
        handleChange={handleChange}
      >
        <StockTitleList
          sortField={null}
          sortOrder="desc"
          handleSort={() => {}}
          stocks={filteredStocks}
          getFltRtColor={getFltRtColor}
        />
      </StockPageLayout>
    </div>
  );
}

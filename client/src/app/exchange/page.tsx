"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useStockApi, StockData } from "@/hooks/useStockApi"; // API 훅

// 소수점 앞에 0이 없으면 0을 붙여주는 함수
function formatFloat(value: string) {
  if (!value) return "0";
  if (value.startsWith(".")) return "0" + value;
  if (value.startsWith("-.")) return "-0" + value.slice(1);
  return value;
}

export default function ExchangePage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { stocks } = useStockApi();
  console.log(stocks);
  const [sortField, setSortField] = useState<"mkp" | "fltRt" | "trPrc" | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  // const [fltRtSortOrder, setFltRtSortOrder] = useState<"desc" | "asc" | null>(
  //   null
  // );
  const [sortedStocks, setSortedStocks] = useState<StockData[]>([]);
  useEffect(() => {
    if (!sortField) {
      setSortedStocks(stocks);
      return;
    }
  }, [stocks]);

  const [portfolio] = useState({
    totalPurchase: 12,
    totalEvaluation: 12,
    profitLoss: 1200,
    profitRate: 10,
  });

  const handleSort = (field: "mkp" | "fltRt" | "trPrc") => {
    let nextOrder: "desc" | "asc" = sortOrder;
    if (sortField === field) {
      nextOrder = sortOrder === "desc" ? "asc" : "desc";
    } else {
      nextOrder = "desc";
    }
    setSortField(field);
    setSortOrder(nextOrder);

    const sorted = [...sortedStocks].sort((a, b) => {
      const upNum = parseFloat(a[field]);
      const downNum = parseFloat(b[field]);
      return nextOrder === "desc" ? downNum - upNum : upNum - downNum;
    });
    setSortedStocks(sorted);
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
      <Title title="거래소" bookmark={false} dictionary={false} />

      <div className="max-w-full">
        {/* 종목 검색 */}
        <div className="flex m-auto px-4">
          <img src="./image/search.svg" alt="" />
          <Input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="종목 검색"
            className="w-full p-2 text-black placeholder-gray-500 outline-none"
          />
        </div>

        {/* 사용자 요약 정보 */}
        <div className="flex flex-col bg-[#EEEEEE] p-4 border-[#D9D9D9] border-t border-b">
          <div className="flex justify-between">
            <div className="flex items-center justify-between  w-[45%]">
              <p className="text-gray-600">총 매수</p>
              <p className="text-black font-bold">{portfolio.totalPurchase}</p>
            </div>
            <div className="flex items-center justify-between  w-[45%]">
              <p className="text-gray-600">평가손익</p>
              <p className="text-red-600 font-bold">
                {portfolio.profitLoss.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex items-center justify-between  w-[45%]">
              <p className="text-gray-600">총 평가</p>
              <p className="text-black font-bold">
                {portfolio.totalEvaluation}
              </p>
            </div>
            <div className="flex items-center justify-between  w-[45%]">
              <p className="text-gray-600">수익률</p>
              <p className="text-red-600 font-bold">{portfolio.profitRate}%</p>
            </div>
          </div>
        </div>

        {/* 종목 테이블 */}
        <div className="overflow-x-auto mt-5">
          <div className="flex justify-between px-2 mb-6">
            <div className="flex justify-center  w-full ">
              <p className="text-[#313131]">종목</p>
            </div>
            <div
              className="flex justify-center w-full"
              onClick={() => handleSort("mkp")}
            >
              <p className="text-[#313131] mr-1">현재가</p>

              <img
                src={
                  sortField === "mkp"
                    ? sortOrder === "desc"
                      ? "./image/arrow_up.svg"
                      : "./image/arrow_down.svg"
                    : "./image/tbArrow.svg"
                }
                alt="정렬"
              />
            </div>
            <div
              className="flex justify-center w-full"
              onClick={() => handleSort("fltRt")}
            >
              <p className="text-[#313131] mr-1">전일대비</p>
              <img
                src={
                  sortField === "fltRt"
                    ? sortOrder === "desc"
                      ? "./image/arrow_up.svg"
                      : "./image/arrow_down.svg"
                    : "./image/tbArrow.svg"
                }
                alt="정렬"
              />
            </div>
            <div
              className="flex justify-center w-full"
              onClick={() => handleSort("trPrc")}
            >
              <p className="text-[#313131] mr-1">거래대금</p>
              <img
                src={
                  sortField === "trPrc"
                    ? sortOrder === "desc"
                      ? "./image/arrow_up.svg"
                      : "./image/arrow_down.svg"
                    : "./image/tbArrow.svg"
                }
                alt="정렬"
              />
            </div>
          </div>
          {sortedStocks.map((stock, id) => (
            <div
              key={id}
              className="flex px-2 border-[#D9D9D9] py-5 border-b"
              onClick={() => router.push("/stock-detail/" + stock.itmsNm)}
            >
              <div className="flex justify-center w-full">
                <p className="text-[#313131]">{stock.itmsNm}</p>
              </div>
              <div className="flex justify-center w-full">
                <p
                  className={
                    stock.fltRt.startsWith("-")
                      ? "text-blue-500"
                      : "text-red-500"
                  }
                >
                  {stock.mkp.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-center w-full">
                <p
                  className={
                    stock.fltRt.startsWith("-")
                      ? "text-blue-500"
                      : "text-red-500"
                  }
                >
                  {formatFloat(stock.fltRt)}%
                </p>
              </div>
              <div className="flex justify-center w-full">
                <p
                  className={
                    stock.fltRt.startsWith("-")
                      ? "text-blue-500"
                      : "text-red-500"
                  }
                >
                  {stock.trPrc.toLocaleString()}백만
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Nav />
    </div>
  );
}

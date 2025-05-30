"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useStockApi } from "@/hooks/useStockApi"; // API 훅

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
  const [portfolio] = useState({
    totalPurchase: 12,
    totalEvaluation: 12,
    profitLoss: 1200,
    profitRate: 10,
  });

  useEffect(() => {}, []);

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
            <div className="flex justify-center w-full">
              <p className="text-[#313131] mr-1">현재가</p>
              <img src="./image/btarrow.svg" alt="" />
            </div>
            <div className="flex justify-center w-full">
              <p className="text-[#313131] mr-1">전일대비</p>
              <img src="./image/btarrow.svg" alt="" />
            </div>
            <div className="flex justify-center w-full w-full">
              <p className="text-[#313131] mr-1">거래대금</p>
              <img src="./image/btarrow.svg" alt="" />
            </div>
          </div>
          {stocks.map((stock, id) => (
            <div
              key={id}
              className="flex px-2 border-[#D9D9D9] py-5 border-b"
              onClick={() => router.push("/stock-detail/" + stock.itmsNm)}
            >
              <div className="flex justify-center w-full">
                <p className="text-[#313131]">{stock.itmsNm}</p>
              </div>
              <div className="flex justify-center w-full">
                <p className="text-[#313131]">{stock.mkp.toLocaleString()}</p>
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
                <p className="text-[#313131]">
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

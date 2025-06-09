import React, { useState, useEffect } from "react";
import Title from "@/components/Title";
import Input from "@/components/Input";
import StockPortfolio from "@/components/StockPortfolio";
import Nav from "@/components/Nav";

type Props = {
  title: string;
  handleSort?: (field: "mkp" | "fltRt" | "trPrc") => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string; // 추가
  getFltRtColor: (flt_rt: number) => string; // 추가
  children: React.ReactNode;
};

export default function StockPageLayout({
  title,
  handleSort,
  handleChange,
  search,
  getFltRtColor,
  children,
}: Props) {
  return (
    <div className="mb-25">
      <Title title={title} bookmark={false} dictionary={false} />
      <div className="max-w-full">
        {/* 종목 검색 */}
        <div className="flex w-full m-auto px-4">
          <img src="./image/search.svg" alt="" />
          <Input
            type="text"
            name="search"
            value={search}
            onChange={(e) =>
              handleChange({
                target: { name: e.target.name, value: e.target.value },
              } as any)
            }
            pattern={""}
            placeholder="종목 검색"
            className="w-full p-2 text-black placeholder-gray-500 outline-none"
            title=""
          />
        </div>
        {/* 사용자 요약 정보 */}
        <StockPortfolio />
        {/* 종목 테이블 */}
        <div className="overflow-x-auto mt-5">{children}</div>
      </div>
      <Nav />
    </div>
  );
}

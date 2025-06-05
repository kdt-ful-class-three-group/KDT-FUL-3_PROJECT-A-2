"use client";
import { useEffect, useState, useMemo } from "react";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

export interface StockData {
  id: number;
  bas_dt: string; // 기준일자 (YYYYMMDD)
  clpr: number; // 종가
  flt_rt: number; // 등락률
  hipr: number; // 고가
  itms_nm: string; // 종목명
  lopr: number; // 저가
  mkp: number; // 시가
  srtn_cd: string; // 단축코드
  tr_prc: string; // 거래대금
  trqu: string; // 거래량
  vs: number; // 전일 대비
}
const url = "http://localhost:8000/stock/simulated";
async function fetchStocks(
  url: string,
  storageKey: string
): Promise<StockData[]> {
  // 2. 없으면 API 호출
  const resStocks = await axios.get(url);
  const data = resStocks.data || [];
  // 3. 받아온 데이터 localStorage에 저장
  if (typeof window !== "undefined") {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  return data;
}
export function useStockApi() {
  const stockUrl = url;
  const stockStorageKey = "simulatedStocks";
  const { data: apiStocks = [], isLoading: isLoadingNext } = useQuery({
    queryKey: ["stocks", "next", stockUrl],
    queryFn: () => fetchStocks(stockUrl, stockStorageKey),
    staleTime: 1000 * 60 * 60, // 1시간 유지
  });
  const allStocks = apiStocks;
  console.log(allStocks);
  return {
    allStocks,
    isLoading: isLoadingNext,
  };
}

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
async function fetchStocks(url: string): Promise<StockData[]> {
  const resStocks = await axios.get(url);
  // resStocks.data가 이미 JSON 객체이므로 그대로 반환
  return resStocks.data || [];
}
export function useStockApi() {
  const stockUrl = url;
  const { data: apiStocks = [], isLoading: isLoadingNext } = useQuery({
    queryKey: ["stocks", stockUrl],
    queryFn: () => fetchStocks(stockUrl),
    staleTime: 1000 * 60 * 60, // 1시간 유지
  });
  const allStocks = apiStocks;
  // console.log(allStocks);
  const latestStocks = useMemo(() => {
    const map = new Map<string, StockData>();
    allStocks.forEach((s) => {
      map.set(s.srtn_cd, s); // 같은 종목코드끼리 중복 덮어씀
    });
    return Array.from(map.values());
  }, [allStocks]);
  console.log("memo 데이터 확인", latestStocks);
  return {
    latestStocks,
    isLoading: isLoadingNext,
  };
}

export function getFltRtColor(flt_rt: number) {
  return flt_rt < 0 ? "#1A68CC" : "#E23C4F";
}

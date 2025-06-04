"use client";
import { useEffect, useState, useMemo } from "react";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

export interface StockData {
  basDt: string; // 기준일자 (YYYYMMDD)
  clpr: string; // 종가
  fltRt: string; // 등락률
  hipr: string; // 고가
  isinCd: string; // ISIN 코드
  itmsNm: string; // 종목명
  lopr: string; // 저가
  lstgStCnt: string; // 상장주식수
  mkp: string; // 시가
  mrktCtg: string; // 시장구분
  mrktTotAmt: string; // 시가총액
  srtnCd: string; // 단축코드
  trPrc: string; // 거래대금
  trqu: string; // 거래량
  vs: string; // 전일 대비
}
const serviceKey =
  "%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D";

// 실제 메서드명(getStockPriceInfo)으로 수정
const prevUrl = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${serviceKey}&endBasDt=20250314&numOfRows=10&pageNo=1&resultType=json`;
// 실제 메서드명(getStockPriceInfo)으로 수정
const nextUrl = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${serviceKey}&endBasDt=20250315&numOfRows=10&pageNo=1&resultType=json`;
async function fetchStocks(
  url: string,
  storageKey: string
): Promise<StockData[]> {
  // 1. localStorage에 데이터가 있으면 우선 반환
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem(storageKey);
    if (cached) return JSON.parse(cached);
  }
  // 2. 없으면 API 호출
  const resStocks = await axios.get(url);
  const data = resStocks.data.response.body.items.item || [];
  // 3. 받아온 데이터 localStorage에 저장
  if (typeof window !== "undefined") {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  return data;
}
export function useStockApi() {
  //! 주식 데이터 가져올 때 로딩 상태
  // const [isLoading, setIsLoading] = useState(true);
  const prevStorageKey = "stock-prev-20250314";
  const nextStorageKey = "stock-next-20250315";
  const { data: prevStocks = [], isLoading: isLoadingPrev } = useQuery({
    queryKey: ["stocks", "prev", prevUrl],
    queryFn: () => fetchStocks(prevUrl, prevStorageKey),
    staleTime: 1000 * 60 * 60, // 1시간
  });
  const { data: nextStocks = [], isLoading: isLoadingNext } = useQuery({
    queryKey: ["stocks", "next", nextUrl],
    queryFn: () => fetchStocks(nextUrl, nextStorageKey),
    staleTime: 1000 * 60 * 60, // 1시간
  });

  const allStocks = useMemo(
    () => [...prevStocks, ...nextStocks],
    [prevStocks, nextStocks]
  );
  console.log("합친 데이터 확인", allStocks);
  return {
    allStocks,
    prevStocks,
    nextStocks,
    isLoading: isLoadingPrev || isLoadingNext,
  };
}

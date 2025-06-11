"use client";
import { useEffect, useState, useMemo } from "react";
import { useStockQuery, STOCK_API_URL } from "@/hooks/useStockQuery";

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
console.time("주식 데이터 api 호출 simulated");
export function useStockApi() {
  const { data: apiStocks = [], isLoading: isLoadingNext } =
    useStockQuery(STOCK_API_URL);

  // console.log("쿼리키:", ["stocks", stockUrl]);
  // console.log("Provider mount");

  const allStocks = apiStocks;
  // console.log(allStocks);
  const latestStocks = useMemo(() => {
    console.time("주식 데이터 가공 useMemo");
    const map = new Map<string, StockData>();
    allStocks.forEach((s) => {
      map.set(s.srtn_cd, s); // 같은 종목코드끼리 중복 덮어씀
    });
    console.timeEnd("주식 데이터 가공 useMemo");
    return Array.from(map.values());
  }, [allStocks]);
  // console.log("memo 데이터 확인", latestStocks);
  // const srtnCdList = allStocks.map((element) => element.srtn_cd);

  const [simulatedStocks, setSimulatedStocks] = useState<StockData[]>([]);
  const [stockHistories, setStockHistories] = useState<
    Record<string, StockData[]>
  >({});

  useEffect(() => {
    // latestStocks가 비어있지 않고, simulatedStocks가 비어있을 때만 초기화
    if (latestStocks.length && simulatedStocks.length === 0) {
      setSimulatedStocks(latestStocks);
    }
  }, [latestStocks]);

  useEffect(() => {
    if (!latestStocks.length) return;
    const interval = setInterval(() => {
      setSimulatedStocks((prev) => {
        const next = prev.map((stock) => {
          // 가격, 등락률 등만 랜덤하게 변동
          const randomChange = (Math.random() - 0.5) * 2; // -1 ~ +1
          const newClpr = Math.max(
            1,
            stock.clpr + Math.round(randomChange * 10)
          );
          const newFltRt = Number(
            (((newClpr - stock.clpr) / stock.clpr) * 100).toFixed(2)
          );
          return {
            ...stock,
            clpr: newClpr,
            flt_rt: newFltRt,
          };
        });

        // 히스토리 누적
        setStockHistories((prevHist) => {
          const updated = { ...prevHist };
          next.forEach((stock) => {
            const arr = updated[stock.srtn_cd] ?? [];
            // 최대 30개만 유지 (원하면 늘릴 수 있음)
            updated[stock.srtn_cd] = [
              ...arr,
              { ...stock, bas_dt: new Date().toLocaleTimeString() },
            ].slice(-30);
          });
          return updated;
        });

        return next;
      });
    }, 1000); // 1초마다 갱신

    return () => clearInterval(interval);
  }, [latestStocks]);

  return {
    latestStocks: simulatedStocks,
    stockHistories,
    isLoading: isLoadingNext,
    allStocks,
  };
}

export function getFltRtColor(flt_rt: number) {
  return flt_rt < 0 ? "#1A68CC" : "#E23C4F";
}

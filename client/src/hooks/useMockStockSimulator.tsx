import { useEffect, useState, useRef } from "react";
import { StockData } from "./useStockApi";

interface SimulatedStock {
  date: string;
  currentPrice: number;
  changeRate: number;
  tradeAmount: number;
}

type SimulatedMap = Record<string, SimulatedStock | null>;

export function useMockStockSimulator(stocks: StockData[]) {
  const [simulatedMap, setSimulatedMap] = useState<SimulatedMap>({});
  const [dayIndexMap, setDayIndexMap] = useState<Record<string, number>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!stocks || stocks.length < 2) return;

    // 종목코드별로 과거 데이터 분리
    const grouped: Record<string, StockData[]> = {};
    stocks.forEach((stock) => {
      if (!grouped[stock.srtnCd]) grouped[stock.srtnCd] = [];
      grouped[stock.srtnCd].push(stock);
    });

    // dayIndexMap 초기화
    const newDayIndexMap: Record<string, number> = {};
    Object.keys(grouped).forEach((srtnCd) => {
      newDayIndexMap[srtnCd] = dayIndexMap[srtnCd] ?? 1;
    });

    function simulateAll() {
      const newSimulatedMap: SimulatedMap = {};
      Object.entries(grouped).forEach(([srtnCd, arr]) => {
        const dayIndex = newDayIndexMap[srtnCd];
        const today = arr[dayIndex - 1];
        const prev = arr[dayIndex];
        if (!today || !prev) return;

        const todayHigh = Number(today.hipr);
        const todayLow = Number(today.lopr);
        const prevHigh = Number(prev.hipr);
        const prevLow = Number(prev.lopr);

        const minPrice = Math.min(todayLow, prevLow);
        const maxPrice = Math.max(todayHigh, prevHigh);

        const currentPrice = Number(
          (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)
        );

        const todayClose = Number(today.clpr);
        const prevClose = Number(prev.clpr);
        const changeRate =
          prevClose !== 0
            ? Number((((todayClose - prevClose) / prevClose) * 100).toFixed(2))
            : 0;

        newSimulatedMap[srtnCd] = {
          date: today.basDt,
          currentPrice,
          changeRate,
          tradeAmount: Number(today.trPrc),
        };
      });
      setSimulatedMap(newSimulatedMap);
    }

    simulateAll();

    timerRef.current = setTimeout(() => {
      // 각 종목별 dayIndex 증가
      const updatedDayIndexMap: Record<string, number> = { ...newDayIndexMap };
      Object.entries(grouped).forEach(([srtnCd, arr]) => {
        if (updatedDayIndexMap[srtnCd] < arr.length - 1) {
          updatedDayIndexMap[srtnCd] += 1;
        } else {
          updatedDayIndexMap[srtnCd] = 1;
        }
      });
      setDayIndexMap(updatedDayIndexMap);
    }, 1000 + Math.random() * 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [stocks, dayIndexMap]);

  return simulatedMap;
}

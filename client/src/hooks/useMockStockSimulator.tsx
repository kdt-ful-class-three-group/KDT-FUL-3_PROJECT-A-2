import { useEffect, useRef, useState } from "react";
import { StockData } from "./useStockApi";

export interface SimulatedStock extends StockData {
  simulatedPrice: number;
  simulatedChangeRate: number;
  simulatedTradeAmount: number;
  simulatedColor: string;
}

const STORAGE_KEY = "simulatedStockMap";

export function useMockStockSimulator(
  prevStocks: StockData[],
  nextStocks: StockData[]
): SimulatedStock[] {
  const [simulatedList, setSimulatedList] = useState<SimulatedStock[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    }
    return [];
  });
  const prevSimMapRef = useRef<Record<string, number>>({});
  const timersRef = useRef<Record<string, NodeJS.Timeout>>({});

  useEffect(() => {
    if (!prevStocks.length || !nextStocks.length) return;

    // 기존 타이머 모두 정리
    Object.values(timersRef.current).forEach(clearTimeout);
    timersRef.current = {};

    const prevMap = new Map<string, StockData>();
    prevStocks.forEach((stock) => prevMap.set(stock.srtnCd, stock));

    // 종목별로 랜덤 주기로 갱신
    nextStocks.forEach((stock) => {
      const updateSim = () => {
        const prev = prevMap.get(stock.srtnCd);
        if (!prev) return;

        function getTickSize(price: number): number {
          if (price < 1000) return 1; // 1,000원 미만
          if (price < 5000) return 5; // 1,000원 이상 ~ 4,990원
          if (price < 10000) return 10; // 5,000원 이상 ~ 9,990원
          if (price < 50000) return 50; // 10,000원 이상 ~ 49,950원
          if (price < 100000) return 100; // 50,000원 이상 ~ 99,950원
          if (price < 500000) return 500; // 100,000원 이상 ~ 499,000원
          return 1000; // 500,000원 이상
        }

        const prevClose = Number(prev.clpr);
        const lastSim = prevSimMapRef.current[stock.srtnCd];
        const basePrice = lastSim ?? prevClose;

        const tick = getTickSize(basePrice);
        const direction = Math.random() < 0.5 ? -1 : 1;
        let simulatedPrice =
          tick < 1
            ? Number((basePrice + direction * tick).toFixed(2)) // 소수점 2자리
            : Number((basePrice + direction * tick).toFixed(0)); // 정수

        const minPrice = Number((prevClose * 0.85).toFixed(2)); // -15%
        const maxPrice = Number((prevClose * 1.3).toFixed(2)); // +30%
        if (simulatedPrice < minPrice) simulatedPrice = minPrice;
        if (simulatedPrice > maxPrice) simulatedPrice = maxPrice;
        const simulatedChangeRate = prevClose
          ? Number(
              (((simulatedPrice - prevClose) / prevClose) * 100).toFixed(2)
            )
          : 0;

        const simulatedTradeAmount = Math.floor(
          Number(stock.trPrc) * (0.9 + Math.random() * 0.2)
        );

        // const simulatedColor = simulatedChangeRate < 0 ? "blue" : "red";
        const simulatedColor = simulatedChangeRate < 0 ? "#1A68CC" : "#E23C4F";

        prevSimMapRef.current[stock.srtnCd] = simulatedPrice;

        setSimulatedList((prevList) => {
          // 기존 시뮬레이션 값을 Map으로 변환
          const prevMap = new Map(prevList.map((s) => [s.srtnCd, s]));
          // 새 값으로 갱신
          prevMap.set(stock.srtnCd, {
            ...stock,
            simulatedPrice,
            simulatedChangeRate,
            simulatedTradeAmount,
            simulatedColor,
          });
          // 항상 nextStocks 순서대로 반환
          return nextStocks
            .map((s) => prevMap.get(s.srtnCd))
            .filter(Boolean) as SimulatedStock[];
        });

        // localStorage 저장
        if (typeof window !== "undefined") {
          const updatedList = simulatedList.filter(
            (s) => s.srtnCd !== stock.srtnCd
          );
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify([
              ...updatedList,
              {
                ...stock,
                simulatedPrice,
                simulatedChangeRate,
                simulatedTradeAmount,
                simulatedColor,
              },
            ])
          );
        }

        // 다음 갱신 예약 (0.5~2초 랜덤)
        const nextDelay = 500 + Math.random() * 1500;
        timersRef.current[stock.srtnCd] = setTimeout(updateSim, nextDelay);
      };

      // 최초 실행
      updateSim();
    });

    // 언마운트 시 타이머 정리
    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
      timersRef.current = {};
    };
    // eslint-disable-next-line
  }, [prevStocks, nextStocks]);

  return simulatedList;
}

import React from "react";
import { useStockApi } from "../hooks/useStockApi";
import { useMockStockSimulator } from "../hooks/useMockStockSimulator";

export default function SimulatedStockTest() {
  const { stocks, isLoading } = useStockApi();
  const simulated = useMockStockSimulator(stocks);

  // if (isLoading) return <div>로딩 중...</div>;
  // if (!simulated) return <div>데이터 없음</div>;

  return (
    <div>
      <h2>모의 투자 시뮬레이션</h2>
      <div>날짜: {simulated.date}</div>
      <div>현재가: {simulated.currentPrice}</div>
      <div>전일대비 등락률: {simulated.changeRate}%</div>
      <div>거래대금: {simulated.tradeAmount}</div>
    </div>
  );
}

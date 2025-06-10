// /src/investment/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import AssetSummary from "@/components/AssetSummary";
import AssetPieChart from "@/components/AssetPieChart";
import StockAccordionList from "@/components/StockAccordionList";
import Title from "@/components/Title";
import Nav from "@/components/Nav";

// 유저 데이터 — 실제로는 API 요청해서 가져올 수도 있음 현재는 예시임
// 시드머니 50,000,000원에서 이미 종목 몇 개를 샀다고 가정
const dummyCash = 14_000_000; // 현재 남은 현금 1,400만 원
const dummyHoldings = [
  {
    name: "삼성전자",
    value: 18_000_000, // 현재 가치 = 수량 * 현재가
    detail: {
      evaluatedPL: 250_000, // 평가 손익
      returnRate: 5, // 수익률(%)
      quantity: 100, // 보유 수량 100주
      avgPrice: 175_000, // 매수 평균가
    },
  },
  {
    name: "한화이글스",
    value: 18_000_000,
    detail: {
      evaluatedPL: -120_000,
      returnRate: -2.3,
      quantity: 50,
      avgPrice: 360_000,
    },
  },
  // 여기에 유저가 산 종목이 늘어나면 배열에 추가/ db에서 가져오면 됨
];

interface Holding {
  stock_code: string;
  stock_name: string;
  quantity: string;
  avg_price: string;
}

export default function InvestmentPage() {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const memberId = sessionStorage.getItem("member_id");
    if (!memberId) return;
    fetch(`http://localhost:8000/portfolio`, {
      credentials: "include",
    }).then((res) => res.json())
      .then((data) => {
        setHoldings(data);
        console.log;
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // holdingsValue: 보유 종목 가치 합
  const holdingsValue = dummyHoldings.reduce((acc, cur) => acc + cur.value, 0);

  // AssetSummary에 넘겨줄 props: cash, holdingsValue, profitLoss 총합(예시)
  // dummyHoldings의 평가 손익만 합치거나, 실제 로직대로 계산해도 됨
  const totalProfitLoss = dummyHoldings.reduce(
    (acc, cur) => acc + cur.detail.evaluatedPL,
    0
  );

  // Pie 차트에 넘겨줄 데이터: name + value
  const pieData = dummyHoldings.map((h) => ({
    name: h.name,
    value: h.value,
  }));

  // Accordion에 넘겨줄 데이터: name + detail
  const accordionItems = dummyHoldings.map((h) => ({
    name: h.name,
    detail: h.detail,
  }));

  return (
    <div className="min-h-screen bg-gray-100 mb-25">
      {/* 페이지 상단 타이틀 */}
      <Title title="투자내역" bookmark={false} dictionary={false} />

      <div className="container mx-auto px-4 pt-6 space-y-6">
        {/* 1) 파란 영역: 요약 + 파이 차트 */}
        <div className="space-y-6">
          {/* — 내 보유 자산 요약 */}
          {/* <AssetSummary
            cash={dummyCash}
            holdingsValue={holdingsValue}
            profitLoss={totalProfitLoss}
          /> */}

          {/* — 내 보유 자산 파이 차트 */}
          <AssetPieChart holdings={pieData} />
        </div>

        {/* 2) 연두색 영역: 종목별 아코디언 리스트 */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            내 보유 종목
          </h2>
          <StockAccordionList items={accordionItems} />
        </div>
      </div>

      {/* 하단 네비게이션 바 */}
      <Nav />
    </div>
  );
}

// /src/components/AssetSummary.tsx
import React from "react";

interface AssetSummaryProps {
  cash: number; // 현재 보유 현금(원 단위)
  holdingsValue: number; // 보유 종목들의 총 자산(원 단위)
  profitLoss: number; // 평가 손익(원 단위)
}

export default function AssetSummary({
  cash,
  holdingsValue,
  profitLoss,
}: AssetSummaryProps) {
  // 총 보유 자산 = 현금 + 보유 종목들의 총 자산
  const totalAssets = cash + holdingsValue;

  // 수익률 (%) = (평가 손익) / (투자원금) * 100
  // 여기서는 “투자원금 = holdingsValue - profitLoss”라고 가정
  const principal = holdingsValue - profitLoss;
  const returnRate =
    principal > 0 ? ((profitLoss / principal) * 100).toFixed(2) : "0.00";

  // 금액 포맷 함수 (예: 1234567 → "1,234,567")
  const formatKRW = (num: number) =>
    num.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">내 보유 자산</h2>
      <div className="space-y-2 text-gray-700">
        {/* 내 자산 (현금) */}
        <div className="flex justify-between">
          <span>내 자산</span>
          <span>{formatKRW(cash)}원</span>
        </div>
        {/* 총 보유 자산 */}
        <div className="flex justify-between">
          <span>총 보유 자산</span>
          <span>{formatKRW(totalAssets)}원</span>
        </div>
        {/* 평가 손익 */}
        <div className="flex justify-between">
          <span>평가 손익</span>
          <span
            className={`${profitLoss >= 0 ? "text-red-500" : "text-blue-500"}`}
          >
            {formatKRW(profitLoss)}원
          </span>
        </div>
        {/* 수익률 */}
        <div className="flex justify-between">
          <span>수익률</span>
          <span
            className={`${
              Number(returnRate) >= 0 ? "text-red-500" : "text-blue-500"
            }`}
          >
            {returnRate}%
          </span>
        </div>
      </div>
    </div>
  );
}

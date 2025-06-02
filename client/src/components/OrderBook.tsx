// components/OrderBook.tsx
"use client";

import React from "react";

interface OrderBookProps {
  stockCode: string;
}

export default function OrderBook({ stockCode }: OrderBookProps) {
  return (
    <div className="h-[500px] flex items-center justify-center text-gray-400">
      {/* 호가창 구현은 추후 작업 예정 */}
      <p>호가창 자리 구현 예정</p>
    </div>
  );
}

"use client";

import React from "react";
import Chart from "@/components/Chart";
export default function stockChart() {
  const dummyData = [
    { date: "2025-05-25", price: 125000 },
    { date: "2025-05-26", price: 128000 },
    { date: "2025-05-27", price: 127000 },
    { date: "2025-05-28", price: 130000 },
    { date: "2025-05-29", price: 129500 },
  ];
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">차트 페이지</h2>
      <Chart data={dummyData} />
    </div>
  );
}

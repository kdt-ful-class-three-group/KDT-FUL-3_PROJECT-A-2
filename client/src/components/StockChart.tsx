"use client";

import React from "react";
import Chart from "@/components/Chart";

export default function stockChart({ stockNum, priceHistoryMap }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">차트 페이지</h2>
      <Chart stockNum={stockNum} priceHistoryMap={priceHistoryMap} />
    </div>
  );
}

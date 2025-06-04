"use client";
import { useMockStockSimulator } from "@/hooks/useMockStockSimulator";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend
);

type ChartProps = {
  stockNum: string;
  priceHistoryMap: Record<
    string,
    { time: string; price: number; trPrc: number }[]
  >; // 종목별 시간당 데이터
};

// export default function Chart({ stockNum, priceHistoryMap }: ChartProps) {
export default function Chart({ stockNum, priceHistoryMap }: ChartProps) {
  // console.log(priceHistoryMap);
  console.log("차트 데이터 확인", priceHistoryMap, stockNum);
  const history = priceHistoryMap[stockNum] || [];
  const chartData = {
    labels: history.map((item) => item.time), // 시간 라벨
    datasets: [
      {
        label: stockNum,
        data: history.map((item) => item.price),
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const idx = context.dataIndex;
            const item = history[idx];
            return [
              `가격: ${item.price.toLocaleString()}원`,
              `거래대금: ${
                item.trPrc ? Number(item.trPrc).toLocaleString() : "-"
              }원`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        type: "category" as const, // "time" → "category"
        title: {
          display: true,
          text: "시간",
        },
      },
      y: {
        title: {
          display: true,
          text: "가격 (원)",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

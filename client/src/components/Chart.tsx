"use client";

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
import { Bar } from "react-chartjs-2";
import { StockData } from "@/hooks/useStockApi";
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
  history: any[];
  filteredStocks: StockData[];
};

export default function Chart({ filteredStocks }: ChartProps) {
  const chartData = {
    labels: filteredStocks.map((item) => item.bas_dt),
    datasets: [
      {
        label: filteredStocks[0]?.itms_nm ?? "종목",
        data: filteredStocks.map((item) => item.clpr),
        backgroundColor: "rgba(226,60,79,0.1)", // 투명하게
        borderColor: "#E23C4F",
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 5,
        tension: 0.3, // 곡선 효과
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const idx = context.dataIndex;
            const item = filteredStocks[idx];
            return [
              `가격: ${item.clpr.toLocaleString()}원`,
              `거래대금: ${Number(item.tr_prc).toLocaleString()}원`,
              `전일대비: ${item.flt_rt}%`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        type: "category" as const,
        title: { display: true, text: "날짜" },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          maxRotation: 45,
          minRotation: 30,
        },
        grid: { display: false },
      },
      y: {
        title: { display: true, text: "가격 (원)" },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

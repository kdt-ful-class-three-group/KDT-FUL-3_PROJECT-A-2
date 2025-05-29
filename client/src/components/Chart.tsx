"use client";
import { useStockApi } from "@/hooks/useStockApi";
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

// type Props = {
//   data: { date: string; price: number }[];
// };

export default function Chart() {
  const { stocks } = useStockApi();
  console.log(stocks);
  const validStocks = stocks.filter(
    (item) => typeof item.price === "number" && !isNaN(item.price)
  );

  const chartData = {
    labels: validStocks.map((item) => item.name),
    datasets: [
      {
        label: "주가",
        data: validStocks.map((item) => item.price),
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category" as const, // "time" → "category"
        title: {
          display: true,
          text: "종목명",
        },
      },
      y: {
        title: {
          display: true,
          text: "가격 (₩)",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

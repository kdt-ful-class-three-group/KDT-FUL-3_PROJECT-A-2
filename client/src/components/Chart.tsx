"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
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
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend
);

type Props = {
  data: { date: string; price: number }[];
};

export default function Chart({ data }: Props) {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "주가",
        data: data.map((item) => item.price),
        borderColor: "red",
        backgroundColor: "#F1F1F1",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    type: "bar",
    responsive: true,
    // scales: {
    //   x: {
    //     type: "time" as const,
    //     time: {
    //       unit: "day",
    //       tooltipFormat: "yyyy-MM-dd",
    //     },
    //     title: {
    //       display: true,
    //       text: "날짜",
    //     },
    //   },
    //   y: {
    //     title: {
    //       display: true,
    //       text: "가격 (₩)",
    //     },
    //   },
    // },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Floating Bar Chart",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

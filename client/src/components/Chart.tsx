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

type StockData = {
  bas_dt: string; // 기준일자
  itms_nm: string; // 종목명
  clpr: number; // 종가
  tr_prc: number; // 거래대금
  flt_rt: number; // 전일대비율
};

type ChartProps = {
  history: StockData[];
};

export default function Chart({ history }: ChartProps) {
  const chartData = {
    labels: history.map((item) => item.bas_dt), // 날짜(기준일자) 라벨
    datasets: [
      {
        label: history[0]?.itms_nm ?? "종목",
        data: history.map((item) => item.clpr), // 종가(현재가)
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const idx = context.dataIndex;
            const item = history[idx];
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
      },
      y: {
        title: { display: true, text: "가격 (원)" },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

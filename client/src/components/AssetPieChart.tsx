// /src/components/AssetPieChart.tsx
'use client';
import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";

// ArcElement, Tooltip, Legend 등록
// ArcElement = 차트에서 '조각(arc)'을 그려주는 엔진
// Tooltip = 마우스 오버 시 툴팁 표시
// Legend = 차트 옆에 범례(legend)를 표시
ChartJS.register(ArcElement, Tooltip, Legend);

interface Holding {
  name: string;      // ex: "삼성전자"
  value: string;     // 해당 종목의 평가금액(원 단위)
}

interface AssetPieChartProps {
  holdings: Holding[];
}

export default function AssetPieChart({ holdings }: AssetPieChartProps) {
  // 1) Pie 데이터 & 랜덤 색상
  const chartData = useMemo(() => {
    const labels = holdings.map((h) => h.name);
    const dataValues = holdings.map((h) => h.value);
    const randomColor = () => {
      const r = Math.floor(Math.random() * 156) + 100;
      const g = Math.floor(Math.random() * 156) + 100;
      const b = Math.floor(Math.random() * 156) + 100;
      return `rgba(${r}, ${g}, ${b}, 0.8)`;
    };
    const backgroundColors = holdings.map(() => randomColor());
    return {
      labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    };
  }, [holdings]);

  // 2) 내부 라벨 플러그인 (파이 안에 종목명+퍼센트)
  const customLabelPlugin: Plugin<"pie"> = {
    id: "customLabelPlugin",
    afterDatasetsDraw: (chart) => {
      const { ctx, data } = chart;
      const rawValues = data.datasets[0].data as number[];
      const totalValue = rawValues.reduce((a, b) => a + Number(b), 0);

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 12px sans-serif";

      const meta = chart.getDatasetMeta(0);
      meta.data.forEach((arc, index) => {
        // getCenterPoint()는 파이 조각의 중심 좌표를 반환
        const center = arc.getCenterPoint();
        const value = rawValues[index];
        const percent = ((value / totalValue) * 100).toFixed(1) + "%";
        const label = data.labels?.[index] as string;

        // 파이 위쪽에 종목명
        ctx.fillText(label, center.x, center.y - 6);
        // 파이 아래쪽에 퍼센트
        ctx.fillText(percent, center.x, center.y + 6);
      });
      ctx.restore();
    },
  };

  // 3) Pie 옵션
  const options: ChartOptions<"pie"> = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const current = ctx.parsed as number;
            const rawValues = ctx.dataset.data as number[];
            const totalValue = rawValues.reduce((a, b) => a + Number(b), 0);
            const pct = ((current / totalValue) * 100).toFixed(1) + "%";
            return `${ctx.label}: ${pct}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  // 4) 옆 레전드(컬러 + 퍼센트) 계산
  const legendItems = useMemo(() => {
    const bgColors = chartData.datasets[0].backgroundColor as string[];
    const totalQuantity = holdings.reduce((acc, cur) => acc + Number(cur.value), 0);
    return holdings.map((h, idx) => ({
      name: h.name,
      color: bgColors[idx],
      percent: ((Number(h.value) / totalQuantity) * 100).toFixed(1) + "%",
    }));
  }, [chartData, holdings]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">보유 비중(%)</h2>

      <div className="flex flex-row justify-center items-center">
        {/* Pie 차트 */}
        <div className="relative w-1/2 h-56">
          <Pie
            data={chartData}
            options={options}
            plugins={[customLabelPlugin]}
          />
        </div>

        {/* 레전드(범례) */}
        <div className="w-1/2 pl-4">
          {legendItems.map((item) => (
            <div key={item.name} className="flex items-center mb-2">
              {/* 색상 박스 */}
              <span
                className="w-4 h-4 rounded-sm mr-2"
                style={{ backgroundColor: item.color }}
              />
              {/* 종목명 + 퍼센트 */}
              <span className="text-gray-700 text-sm">
                {item.name} <span className="font-semibold">{item.percent}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

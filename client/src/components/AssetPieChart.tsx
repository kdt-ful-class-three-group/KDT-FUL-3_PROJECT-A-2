// /src/components/AssetPieChart.tsx
import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Chart.js 모듈 등록
ChartJS.register(ArcElement, Tooltip, Legend);

interface Holding {
  name: string;      // 종목 이름 (ex: '삼성전자')
  value: number;     // 해당 종목의 현재 총 가치 (원 단위)
}

interface AssetPieChartProps {
  holdings: Holding[];
}

export default function AssetPieChart({ holdings }: AssetPieChartProps) {
  // 파이 차트에 들어갈 레이블과 데이터 배열, 랜덤 색상 생성
  const chartData = useMemo(() => {
    const labels = holdings.map((h) => h.name);
    const dataValues = holdings.map((h) => h.value);

    // 랜덤 컬러 생성 함수
    const randomColor = () => {
      // RGB 각각 0~255 랜덤, alpha(투명도) 고정 0.8
      const r = Math.floor(Math.random() * 156) + 100; // [100,255) 사이
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

  // 옵션: 툴팁에 퍼센트 표시 등을 커스터마이징하고 싶으면 여기에 추가하시오
  const options: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 12,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = holdings.reduce((acc, h) => acc + h.value, 0);
            const current = context.parsed || 0;
            const percentage = ((current / total) * 100).toFixed(1) + "%";
            return `${context.label}: ${percentage}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">보유 비중(%)</h2>
      <div className="flex flex-col md:flex-row items-center">
        {/* 파이 차트 */}
        <div className="w-full md:w-1/2">
          <Pie data={chartData} options={options} />
        </div>

        {/* 오른쪽 레이블 (Legend 대체: 간단히 이름과 % 표시) */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          {holdings.map((h, idx) => {
            const total = holdings.reduce((acc, x) => acc + x.value, 0);
            const pct = ((h.value / total) * 100).toFixed(1);
            return (
              <div key={h.name} className="flex items-center mb-2">
                {/* 컬러 박스 */}
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{
                    backgroundColor:
                      // 차트에서 쓰인 색상과 동일하게 써야 함
                      (chartData.datasets[0].backgroundColor as string[])[idx],
                  }}
                ></span>
                <span className="text-sm text-gray-700">
                  {h.name} {pct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

/**
 * ! TODO 
 * npm install react chart.js chartjs-chart-financial chartjs-adapter-date-fns
npm install --save-dev @types/react @types/chart.js
 * 패키지를 설치해야 동작함
 * 
 */

/**
 * 주식 차트 데이터(캔들스틱) 단일 항목 인터페이스
 */
export interface CandleData {
  /** 날짜 (ISO 문자열 또는 Date 객체) */
  x: string | Date;
  /** 시가 */
  o: number;
  /** 고가 */
  h: number;
  /** 저가 */
  l: number;
  /** 종가 */
  c: number;
}

/**
 * 주식 차트 데이터 배열의 유효성 검사 함수
 * @param data 검증할 데이터 배열
 * @returns 데이터가 유효하면 true, 아니면 false
 */
export function isValidCandleDataArray(data: unknown): data is CandleData[] {
  if (!Array.isArray(data)) return false;
  return data.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      ("x" in item) &&
      typeof (item as any).o === "number" &&
      typeof (item as any).h === "number" &&
      typeof (item as any).l === "number" &&
      typeof (item as any).c === "number"
  );
}

/**
 * StockChartFeedBack 컴포넌트 Props
 */
export interface StockChartFeedBackProps {
  /** 차트에 표시할 캔들스틱 데이터 */
  data: CandleData[];
  /** 차트 제목(선택) */
  title?: string;
}

/**
 * Chart.js 기반의 독립형 캔들스틱 차트 컴포넌트
 * 
 * @example
 * <StockChartFeedBack data={yourCandleDataArray} title="삼성전자" />
 */
const StockChartFeedBack: React.FC<StockChartFeedBackProps> = ({
  data,
  title = "주식 차트",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!isValidCandleDataArray(data)) {
      // eslint-disable-next-line no-console
      console.error("유효하지 않은 차트 데이터입니다.");
      return;
    }

    // 기존 차트 인스턴스 제거(메모리 누수 방지)
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: title,
            data,
            barThickness: 15,
            categoryPercentage: 1.0,
            barPercentage: 1.0,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
              tooltipFormat: "yyyy-MM-dd",
              displayFormats: {
                day: "yyyy-MM-dd",
              },
            },
            title: {
              display: true,
              text: "날짜",
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: 10,
              },
              callback: function (value: any) {
                const date = new Date(value);
                return `${date.getMonth() + 1}월 ${date.getDate()}일`;
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "가격",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const { o, h, l, c } = context.raw;
                return `O: ${o}, H: ${h}, L: ${l}, C: ${c}`;
              },
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });

    // 언마운트 시 차트 인스턴스 제거
    return () => {
      chartRef.current?.destroy();
    };
  }, [data, title]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1000,
        margin: "0 auto",
        background: "#e0f7fa",
        padding: 16,
        borderRadius: 8,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 8 }}>{title}</h2>
      <canvas
        ref={canvasRef}
        width={1000}
        height={400}
        style={{ background: "aquamarine", borderRadius: 8 }}
        aria-label="주식 캔들차트"
      />
    </div>
  );
};

export default StockChartFeedBack;
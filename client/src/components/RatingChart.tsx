// /src/components/RatingChart.tsx
'use client';
import React from 'react';

interface RatingChartProps {
  userCreditGrade: number;   // 예: 1등급 (신용등급)
  userInvestGrade: number;   // 예: 1등급 (모의투자 등급)
  creditPercentile: number;  // 예: 4%  (“신용등급 – 상위 4%”)
  investPercentile: number;  // 예: 4%  (“모의투자 등급 – 상위 4%”)
}

export default function RatingChart({
  creditPercentile,
  investPercentile,
}: RatingChartProps) {
  // 등급 레이블(1~7)
  const gradeLabels = ['1', '2', '3', '4', '5', '6', '7'];

  // 각 등급별 점수 범위
  const gradeRanges = [
    '900 ~ 1000',
    '800 ~ 899',
    '700 ~ 799',
    '600 ~ 699',
    '500 ~ 599',
    '400 ~ 499',
    '300 ~', 
  ];

  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-center text-lg font-medium text-orange-500 mb-3">
        신용등급표
      </h3>
      <div className="grid grid-cols-7 items-center text-center">
        {gradeLabels.map((g) => (
          <span
            key={`label-${g}`}
            className="text-sm font-semibold text-gray-700"
          >
            {g}
          </span>
        ))}
      </div>

      <div className="mt-1">
        <div className="h-2 w-full rounded-full bg-gradient-to-r from-purple-300 to-purple-700" />
      </div>

        <div className="mt-1 grid grid-cols-7 text-center">
        {gradeRanges.map((range, idx) => (
          <span
            key={`range-${idx}`}
            className="text-[7px] sm:text-xs text-gray-600"
          >
        {range}
      </span>
       ))}
       </div>

      <div className="mt-4 flex justify-between items-center">
        {/* 좌측: 신용등급 – 상위 X% */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-800">
            신용등급 – 상위
          </span>
          <span className="mt-1 text-2xl font-bold text-orange-500">
            {creditPercentile}%
          </span>
        </div>

        {/* 우측: 모의투자 등급 – 상위 Y% */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-800">
            모의투자 등급 – 상위
          </span>
          <span className="mt-1 text-2xl font-bold text-orange-500">
            {investPercentile}%
          </span>
        </div>
      </div>
    </div>
  );
}

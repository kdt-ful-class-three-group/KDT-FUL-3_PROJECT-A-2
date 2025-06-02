// /src/components/RatingChart.tsx
'use client';
import React from 'react';

interface RatingChartProps {
  userCreditGrade: number;        // 사용자의 현재 “신용등급”을 나타내는 숫자
  userInvestGrade: number;        // 사용자의 현재 “모의투자 등급”을 나타내는 숫자
  creditPercentile: number;       // 전체 사용자 중 신용등급 - 상위 퍼센트 (예: 4%)
  investPercentile: number;       // 전체 사용자 중 모의투자 등급 - 상위 퍼센트 (예: 4%)
}

const gradeLabels = ['1', '2', '3', '4', '5', '6', '7'];

export default function RatingChart({
  userCreditGrade,
  userInvestGrade,
  creditPercentile,
  investPercentile,
}: RatingChartProps) {
  return (
    <div className="w-full mx-auto p-4">
      {/* 신용등급표 */}
      <div>
        <h3 className="text-sm font-medium mb-2">신용등급표</h3>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          {gradeLabels.map((g) => (
            <span key={`credit-label-${g}`}>{g}</span>
          ))}
        </div>
        <div className="flex h-4">
          {gradeLabels.map((g, idx) => {
            const gradeNum = idx + 1;
            const isActive = gradeNum === userCreditGrade; 
            return (
              <div
                key={`credit-bar-${g}`}
                className={`flex-1 border border-gray-200 ${
                  isActive ? 'bg-indigo-500' : 'bg-gray-100'
                }`}
              />
            );
          })}
        </div>
        <div className="text-center text-orange-500 mt-1 text-sm">
          신용등급 - 상위 {creditPercentile}%
        </div>
      </div>

      {/* 모의투자 등급표 */}
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">모의투자 등급표</h3>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          {gradeLabels.map((g) => (
            <span key={`invest-label-${g}`}>{g}</span>
          ))}
        </div>
        <div className="flex h-4">
          {gradeLabels.map((g, idx) => {
            const gradeNum = idx + 1;
            const isActive = gradeNum === userInvestGrade;
            return (
              <div
                key={`invest-bar-${g}`}
                className={`flex-1 border border-gray-200 ${
                  isActive ? 'bg-green-500' : 'bg-gray-100'
                }`}
              />
            );
          })}
        </div>
        <div className="text-center text-orange-500 mt-1 text-sm">
          모의투자 등급 - 상위 {investPercentile}%
        </div>
      </div>
    </div>
  );
}

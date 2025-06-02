// /src/components/ScoreCircle.tsx
'use client';
import React from 'react';

interface ScoreCircleProps {
  creditGrade: number;   // 1~7 등급
  creditScore: number;   // 0~1000 점수
}

export default function ScoreCircle({ creditGrade, creditScore }: ScoreCircleProps) {
  return (
    <div className="flex flex-col items-center justify-center w-36 h-36 rounded-full bg-blue-100">
      <span className="text-base text-gray-700">{creditGrade}등급</span>
      <span className="text-3xl font-bold text-black mt-1">{creditScore}점</span>
    </div>
  );
}

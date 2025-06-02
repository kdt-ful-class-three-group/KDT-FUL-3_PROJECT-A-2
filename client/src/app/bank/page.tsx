// app/page.tsx or app/bank/page.tsx
"use client";
import React, { useState } from "react";
import Title from "@/components/Title";
import Nav from "@/components/Nav";

export default function BankPage() {
  const [loanAmount, setLoanAmount] = useState("");

  const currentAssets = 34000000;
  const totalLoan = 10000000;
  const loanAvailable = 40000000;
  const currentDebt = 5000000;
  const remainingDays = 120;
  const maxLimit = 5000000;
  const creditGrade = 1;
  const interestRate = 5.0;

  const handleLoan = () => {
    alert(`${loanAmount} 대출 신청`);
  };

  const handleRepay = () => {
    alert("상환 요청");
  };

  return (
    <div className="m-auto">
      <Title title="은행" bookmark={false} dictionary={false} />

      {/* 여기에 회색 배경색 적용 */}
      <div className="bg-[#EEEEEE] min-h-screen p-4">
        <div className="bg-white rounded-md p-4 shadow-md">
          <div className="mb-6 space-y-2">
            <InfoItem label="현재 자산" value={currentAssets} />
            <InfoItem label="총대출금액" value={totalLoan} highlight />
            <InfoItem label="대출가능금액" value={loanAvailable} highlight />
          </div>

          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full p-3 border rounded-md mb-3 text-sm"
            placeholder="대출 할 금액을 입력하세요."
          />

          <div className="flex justify-between gap-4 mb-6">
            <button
              onClick={handleLoan}
              className="bg-red-500 text-white py-2 w-1/2 rounded-md"
            >
              대출하기
            </button>
            <button
              onClick={handleRepay}
              className="bg-blue-900 text-white py-2 w-1/2 rounded-md"
            >
              상환하기
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <RowItem label="내 빚" value={currentDebt} />
            <RowItem label="상환 남은 날짜" value={`${remainingDays}일`} />
            <RowItem label="최대한도" value={maxLimit} />
            <RowItem label="신용등급" value={creditGrade} />
            <RowItem label="현재 이자" value={`${interestRate.toFixed(1)}%`} />
          </div>
        </div>
      </div>

      <Nav />
    </div>
  );
}

function InfoItem({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className={`${highlight ? "text-blue-800 font-semibold" : ""}`}>
        {label}
      </span>
      <span className="font-bold text-black">₩ {value.toLocaleString()}</span>
    </div>
  );
}

function RowItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

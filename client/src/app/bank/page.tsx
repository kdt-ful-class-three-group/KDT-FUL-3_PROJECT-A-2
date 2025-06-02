"use client";
import React, { useState } from "react";
import Title from "@/components/Title";
import Nav from "@/components/Nav";

export default function BankPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [currentAssets, setCurrentAssets] = useState(0); //현재자산
  const [totalLoan, setTotalLoan] = useState(0); //총대출금액
  const [loanAvailable, setLoanAvailable] = useState(50000000); //대출가능한돈
  const currentDebt = totalLoan; // 내빛은 총대출금액과 같게 했음
  const remainingDays: number = 120; //남은 날짜
  const maxLimit: number = 50000000; //최대한도
  const [creditGrade, setCreditGrade] = useState("6"); //등급

  // 등급 → 이자율 계산 함수
  const getInterestRateByGrade = (grade: string): number => {
    const rateMap: { [key: string]: number } = {
      "1": 1.75,
      "2": 3.0,
      "3": 4.0,
      "4": 5.25,
      "5": 7.0,
      "6": 10.0,
      "7": 16.0,
    };
    return rateMap[grade] || 0;
  };

  const interestRate: number = getInterestRateByGrade(creditGrade);

  const handleLoan = () => {
    const loan = Number(loanAmount.replace(/,/g, ""));
    if (isNaN(loan) || loan <= 0) {
      alert("올바른 금액을 입력해주세요.");
      return;
    }
    if (loan > loanAvailable) {
      alert(`최대 대출 가능 금액은 ${loanAvailable.toLocaleString()}원입니다.`);
      return;
    }
    const newTotalLoan = totalLoan + loan;
    const newLoanAvailable = loanAvailable - loan;
    setTotalLoan(newTotalLoan);
    setLoanAvailable(newLoanAvailable);
    setCurrentAssets(currentAssets + loan);
    alert(
      `${loan.toLocaleString()}원 대출 신청 완료\n총 대출금액: ${newTotalLoan.toLocaleString()}원\n남은 대출 가능 금액: ${newLoanAvailable.toLocaleString()}원`
    );
  };

  const handleRepay = () => {
    const loan = Number(loanAmount.replace(/,/g, ""));
    if (isNaN(loan) || loan <= 0) {
      alert("올바른 금액을 입력해주세요.");
      return;
    }
    if (loan > totalLoan) {
      alert(
        `현재 총 대출금액 ₩${totalLoan.toLocaleString()}을 초과하여 상환할 수 없습니다.`
      );
      return;
    }
    if (loan > currentAssets) {
      alert("현재 자산보다 많은 금액은 상환할 수 없습니다.");
      return;
    }
    const newTotalLoan = totalLoan - loan;
    const newLoanAvailable = loanAvailable + loan;
    setTotalLoan(newTotalLoan);
    setLoanAvailable(newLoanAvailable);
    setCurrentAssets(currentAssets - loan);
    alert(
      `${loan.toLocaleString()}원 상환 완료\n총 대출금액: ${newTotalLoan.toLocaleString()}원\n남은 대출 가능 금액: ${newLoanAvailable.toLocaleString()}원`
    );
  };

  return (
    <div className="m-auto">
      <Title title="은행" bookmark={false} dictionary={false} />

      <div className="flex justify-between border-b border-[#D9D9D9] py-2 w-full"></div>
      <div className="bg-[#EEEEEE] rounded-md p-4 shadow-md min-h-[calc(100vh-100px)]">
        <div className="mb-6 space-y-2">
          <InfoItem label="현재 자산" value={currentAssets} />
          <InfoItem label="총대출금액" value={totalLoan} highlight />
          <InfoItem label="대출가능금액" value={loanAvailable} highlight />
        </div>
        <div className="flex justify-between border-b border-[#D9D9D9] py-2 w-full"></div>

        <input
          type="text"
          value={loanAmount.replace(/[^0-9,]/g, "")}
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, "");
            const formatted = Number(raw).toLocaleString();
            setLoanAmount(formatted);
          }}
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

        <div className="flex justify-between border-b border-[#D9D9D9] py-2 w-full"></div>

        <div className="space-y-2 text-sm">
          <RowItem label="내 빚" value={`₩ ${currentDebt.toLocaleString()}`} />
          <RowItem label="상환 남은 날짜" value={`${remainingDays}일`} />
          <RowItem label="최대한도" value={`₩ ${maxLimit.toLocaleString()}`} />
          <div className="flex justify-between border-b border-[#D9D9D9] py-2 w-full"></div>
          <RowItem label="신용등급" value={creditGrade} />
          <div className="flex justify-between border-b border-[#D9D9D9] py-2 w-full"></div>
          <RowItem label="현재 이자" value={`${interestRate.toFixed(1)}%`} />
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

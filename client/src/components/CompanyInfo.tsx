// src/components/CompanyInfo.tsx
"use client";

import React, { useEffect, useState } from "react";

interface Financial {
  revenue: string;
  operatingProfit: string;
  netProfit: string;
  debtRatio: string;
  totalAssets: string;
  high52w: string;
  low52w: string;
}

interface CompanyInfoType {
  code?: string;
  listingDate?: string;
  industry?: string;
  products?: string;
  ceo?: string;
  website?: string;
  financial?: Financial;
}

interface CompanyInfoProps {
  stockName: string;
}

export default function CompanyInfo({ stockName }: CompanyInfoProps) {
  const [info, setInfo] = useState<CompanyInfoType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadInfo() {
      setLoading(true);
      try {
        // TODO: 실제 API 경로로 교체
        const res = await fetch(`/api/company/${stockName}`);
        if (!res.ok) throw new Error("네트워크 오류");
        const data: CompanyInfoType = await res.json();
        setInfo(data);
      } catch (err) {
        console.error(err);
        setInfo({}); // 최소한 빈 객체라도 세팅
      } finally {
        setLoading(false);
      }
    }
    loadInfo();
  }, [stockName]);

  if (loading) return <div>로딩 중…</div>;

  const get = (val?: string) => (val && val !== "" ? val : "-");

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm space-y-6">
      {/* 1. 종목명 + 코드 */}
      <div className="flex items-center">
        <h3 className="text-xl font-bold">{stockName}</h3>
        <span className="ml-2 text-sm text-gray-500">
          {get(info?.code)} 코스피
        </span>
      </div>

      {/* 2. 기본 정보 */}
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
        <div>
          <dt className="font-medium">상장일</dt>
          <dd>{get(info?.listingDate)}</dd>
        </div>
        <div>
          <dt className="font-medium">업종</dt>
          <dd>{get(info?.industry)}</dd>
        </div>
        <div>
          <dt className="font-medium">주요제품</dt>
          <dd>{get(info?.products)}</dd>
        </div>
        <div>
          <dt className="font-medium">대표자명</dt>
          <dd>{get(info?.ceo)}</dd>
        </div>
        <div className="col-span-2">
          <dt className="font-medium">홈페이지</dt>
          <dd>
            {info?.website
              ? (
                <a
                  href={info.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {info.website}
                </a>
              )
              : "-"}
          </dd>
        </div>
      </dl>

      {/* 3. 재무정보 요약 */}
      <section>
        <h4 className="text-lg font-semibold mb-3">재무정보 요약</h4>
        <dl className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <dt>매출액</dt>
            <dd className="font-medium">{get(info?.financial?.revenue)}</dd>
          </div>
          <div>
            <dt>영업이익</dt>
            <dd className="font-medium">{get(info?.financial?.operatingProfit)}</dd>
          </div>
          <div>
            <dt>당기순이익</dt>
            <dd className="font-medium">{get(info?.financial?.netProfit)}</dd>
          </div>
          <div>
            <dt>부채비율</dt>
            <dd className="font-medium">{get(info?.financial?.debtRatio)}</dd>
          </div>
          <div>
            <dt>자산총계</dt>
            <dd className="font-medium">{get(info?.financial?.totalAssets)}</dd>
          </div>
          <div>
            <dt>52주 최고/최저가</dt>
            <dd className="font-medium">
              {info?.financial
                ? `${get(info.financial.high52w)} / ${get(info.financial.low52w)}`
                : "-"}
            </dd>
          </div>
        </dl>
      </section>

      {/* 4. 뉴스 영역 (스켈레톤) */}
      <section>
        <h4 className="text-lg font-semibold mb-3">뉴스</h4>
        <div className="h-32 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">
          뉴스 로딩 스켈레톤
        </div>
      </section>
    </div>
  );
}

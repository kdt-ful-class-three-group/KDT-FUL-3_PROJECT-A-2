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

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
}

interface CompanyInfoProps {
  stockName: string;
}

export default function CompanyInfo({ stockName }: CompanyInfoProps) {
  const [info, setInfo] = useState<CompanyInfoType | null>(null);
  const [loadingInfo, setLoadingInfo] = useState<boolean>(true);

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState<boolean>(true);

  // 값이 없으면 '-' 반환
  const get = (val?: string) => (val && val !== "" ? val : "-");

  // 1) 회사 기본 정보 로드
  useEffect(() => {
    setLoadingInfo(true);
    fetch(/api/company/${stockName})
      .then((res) => res.json())
      .then((data: CompanyInfoType) => setInfo(data))
      .catch(() => setInfo({}))
      .finally(() => setLoadingInfo(false));
  }, [stockName]);

  // 2) 뉴스 로드
  useEffect(() => {
    setLoadingNews(true);
    fetch(/api/news/${stockName})
      .then((res) => res.json())
      .then((json) => {
        console.log("🔍 newsList:", json.items); // 개발자 도구 콘솔에도 찍히도록
        setNewsList(json.items || []);
      })
      .catch(() => setNewsList([]))
      .finally(() => setLoadingNews(false));
  }, [stockName]);

  if (loadingInfo) return <div>정보 로딩 중…</div>;

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
            {info?.website ? (
              <a
                href={info.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {info.website}
              </a>
            ) : (
              "-"
            )}
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
                ? ${get(info.financial.high52w)} / ${get(info.financial.low52w)}
                : "-"}
            </dd>
          </div>
        </dl>
      </section>

      {/* 4. 뉴스 */}
      <section>
        <h4 className="text-lg font-semibold mb-3">뉴스</h4>
         {loadingNews ? (
          <div>뉴스 로딩 중…</div>
        ) : newsList.length === 0 ? (
          <div className="text-gray-500">뉴스가 없습니다.</div>
        ) : (
          <ul className="space-y-2">
            {newsList.map((n, i) => (
              <li key={i} className="text-sm">
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  {n.title.replace(/<[^>]+>/g, "")}
                </a>
                <p className="text-xs text-gray-500">{n.pubDate}</p>
              </li>
            ))}
          </ul>
        )}
        {/* ————————————————————————————— */}
        {/* 🔧 임시: raw JSON 확인용 */}
        {/* {!loadingNews && (
          <pre className="mt-4 p-2 bg-gray-100 text-xs overflow-auto">
            {JSON.stringify(newsList, null, 2)}
          </pre>
        )} */}
      </section>

    </div>
  );
}

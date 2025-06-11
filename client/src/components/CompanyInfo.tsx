"use client";

import React, { useEffect, useState } from "react";

// 재무정보 타입
interface Financial {
  revenue: string;
  operatingProfit: string;
  netProfit: string;
  debtRatio: string;
  totalAssets: string;
  high52w: string;
  low52w: string;
}

// 회사 기본정보 타입 정의
interface CompanyInfoType {
  code?: string;
  listingDate?: string;
  industry?: string;
  products?: string;
  ceo?: string;
  website?: string;
  financial?: Financial;
}

// 뉴스 아이템 타입 정리
interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
}

interface CompanyInfoProps {
  stockName: string;
}

export default function CompanyInfo({ stockName }: CompanyInfoProps) {
  // 회사 정보 상태
  const [info, setInfo] = useState<CompanyInfoType | null>(null);
  const [loadingInfo, setLoadingInfo] = useState<boolean>(true);

  // 뉴스 목록 상태
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState<boolean>(true);

  // 값이 없으면 '-' 반환하기
  const get = (val?: string) => (val && val !== "" ? val : "-");

  // 회사 기본 정보 fetch 로드
  useEffect(() => {
    setLoadingInfo(true);
    fetch(`/api/company/${stockName}`)
      .then((res) => res.json())
      .then((data: CompanyInfoType) => setInfo(data))
      .catch(() => setInfo({}))
      .finally(() => setLoadingInfo(false));
  }, [stockName]);

  // 뉴스 목록 fetch 로드
  useEffect(() => {
    setLoadingNews(true);
    fetch(`http://localhost:8000/news/${encodeURIComponent(stockName)}`)
      // 응답을 JSON으로 파싱
      .then((res) => res.json())
      // .then((items: any[]) => setNewsList(items))
      // .then((res) => res.json() as Promise<NewsItem[]>)
      // 파싱된 뉴스 배열을 상태로 설정하고 화면에 표시될 데이터 저장
      .then((items) => setNewsList(items))
      // 에러 발생 시 빈 배열로 설정하고 뉴스 없음 표시
      .catch(() => setNewsList([]))
      .finally(() => setLoadingNews(false));
  }, [stockName]);

  // 로딩 중 표시
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
      {/* <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
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
      </dl> */}

      {/* 3. 재무정보 요약 */}
      {/* <section>
        <h4 className="text-lg font-semibold mb-3">재무정보 요약</h4>
        <dl className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <dt>매출액</dt>
            <dd className="font-medium">{get(info?.financial?.revenue)}</dd>
          </div>
          <div>
            <dt>영업이익</dt>
            <dd className="font-medium">
              {get(info?.financial?.operatingProfit)}
            </dd>
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
                ? `${get(info.financial.high52w)} / ${get(
                    info.financial.low52w
                  )}`
                : "-"}
            </dd>
          </div>
        </dl>
      </section> */}

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
      </section>
    </div>
  );
}

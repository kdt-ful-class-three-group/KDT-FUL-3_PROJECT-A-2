import { useEffect, useState, useMemo } from "react";
import axios, { AxiosResponse } from "axios";

export interface StockData {
  basDt: string; // 기준일자 (YYYYMMDD)
  clpr: string; // 종가
  fltRt: string; // 등락률
  hipr: string; // 고가
  isinCd: string; // ISIN 코드
  itmsNm: string; // 종목명
  lopr: string; // 저가
  lstgStCnt: string; // 상장주식수
  mkp: string; // 시가
  mrktCtg: string; // 시장구분
  mrktTotAmt: string; // 시가총액
  srtnCd: string; // 단축코드
  trPrc: string; // 거래대금
  trqu: string; // 거래량
  vs: string; // 전일 대비
}
const serviceKey =
  "%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D";

// 실제 메서드명(getStockPriceInfo)으로 수정
const prevUrl = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${serviceKey}&endBasDt=20250314&numOfRows=100&pageNo=1&resultType=json`;
// 실제 메서드명(getStockPriceInfo)으로 수정
const nextUrl = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${serviceKey}&endBasDt=20250315&numOfRows=100&pageNo=1&resultType=json`;
export function useStockApi() {
  //! 주식 데이터 상태
  const [prevStocks, setPrevStocks] = useState<StockData[]>([]);
  const [nextStocks, setNextStocks] = useState<StockData[]>([]);
  //! 주식 데이터 가져올 때 로딩 상태
  const [isLoading, setIsLoading] = useState(true);
  console.log("전날 데이터 호출 완료", prevStocks);
  console.log("다음날 데이터 호출 완료", nextStocks);
  useEffect(() => {
    const prevStocksApi = async () => {
      try {
        const prevStocksResponse: AxiosResponse = await axios.get(prevUrl);
        const prevStocksItems =
          prevStocksResponse.data.response.body.items.item;
        setPrevStocks(prevStocksItems);
      } catch (err) {
        console.error("API 데이터 불러오기 실패:", err);
      }
    };
    const nextStocksApi = async () => {
      try {
        const nextStocksResponse: AxiosResponse = await axios.get(nextUrl);
        const nextStocksItems =
          nextStocksResponse.data.response.body.items.item;
        setNextStocks(nextStocksItems);
      } catch (err) {
        console.error("API 데이터 불러오기 실패:", err);
      }
    };
    Promise.all([prevStocksApi(), nextStocksApi()]).finally(() => {
      setIsLoading(false);
    });
  }, []);
  const allStocks = useMemo(
    () => [...(prevStocks || []), ...(nextStocks || [])],
    [prevStocks, nextStocks]
  );
  console.log("2일 맵핑", allStocks);
  return { allStocks, isLoading };
}

import { useEffect, useState } from "react";

export interface StockData {
  name: string;
  price: number;
  change: number;
  volume: string;
}

const stockNames: { [key: string]: string } = {
  "005930": "삼성전자",
  "000660": "SK 하이닉스",
  "035420": "NAVER(네이버)",
  "005380": "현대차",
  "051910": "LG화학",
  "035720": "카카오",
  "012330": "삼성생명",
  "003550": "삼성물산",
  "006400": "삼성전기",
  "005490": "POSCO(포스코)",
};

const stockCodes = Object.keys(stockNames);

export function useStockApi() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const stockDataPromises = stockCodes.map((code) =>
          fetch(`http://localhost:8000/stock/price/${code}`).then((res) =>
            res.json()
          )
        );
        const stockDataResponses = await Promise.all(stockDataPromises);
        const stockItems = stockDataResponses.map((data, index) => {
          const stockData = data.output || data;
          return {
            name: stockNames[stockCodes[index]],
            price: Number(stockData.stck_prpr) || 2,
            change: Number(stockData.prdy_ctrt) || 3,
            volume: stockData.acml_tr_pbmn || "0",
          };
        });
        setStocks(stockItems);
        setFilteredStocks(stockItems);
        console.log(stocks);
      } catch (err) {
        console.error("API 데이터 불러오기 실패:", err);
      }
    };

    fetchStocks();
  }, []);

  return { stocks, filteredStocks, setFilteredStocks };
}

// import { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";

// export interface StockData {
//   basDt: string; // 기준일자 (YYYYMMDD)
//   clpr: string; // 종가
//   fltRt: string; // 등락률
//   hipr: string; // 고가
//   isinCd: string; // ISIN 코드
//   itmsNm: string; // 종목명
//   lopr: string; // 저가
//   lstgStCnt: string; // 상장주식수
//   mkp: string; // 시가
//   mrktCtg: string; // 시장구분
//   mrktTotAmt: string; // 시가총액
//   srtnCd: string; // 단축코드
//   trPrc: string; // 거래대금
//   trqu: string; // 거래량
//   vs: string; // 전일 대비
// }
// // const serviceKey =
// //   "%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D";

// // 실제 메서드명(getStockPriceInfo)으로 수정
// const url = `http://localhost:8000/stock/stockCommon`;

// export function useStockApi() {
//   const [stocks, setStocks] = useState<StockData[]>([]);
//   useEffect(() => {
//     const StocksApi = async () => {
//       try {
//         const stocksResponse: AxiosResponse = await axios.get(url);
//         // const stocksItems = stocksResponse.data.response.body.items.item;
//         setStocks(stocksResponse.data);
//       } catch (err) {
//         console.error("API 데이터 불러오기 실패:", err);
//       }
//     };

//     StocksApi();
//   }, []);

//   return { stocks };
// }

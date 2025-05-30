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

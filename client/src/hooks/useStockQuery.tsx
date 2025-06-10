import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { StockData } from "@/hooks/useStockApi";

export const STOCK_API_URL = "http://localhost:8000/stock/simulated";

export function useStockQuery(url: string = STOCK_API_URL) {
  return useQuery<StockData[]>({
    queryKey: ["stocks", url],
    queryFn: async () => {
      const start = Date.now();
      console.log("API 요청 발생:", url);
      const resStocks = await axios.get(url);
      const end = Date.now();
      console.log(`api 호출 시간: ${end - start}ms`);
      return resStocks.data || [];
    },
    staleTime: Infinity, // 최초 1회만 호출, 이후 캐시 영구 유지
    // cacheTime: Infinity, // (선택) 언마운트 후에도 캐시 영구 유지
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}

import { useState, useEffect } from "react";
import axios from "axios";
import { useStockApi, StockData } from "@/hooks/useStockApi";

export function useStockList(fetchUrl: string) {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<"mkp" | "fltRt" | "trPrc" | null>(
    null
  );

  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        console.log("fetch data", res.data);
        setStocks(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [fetchUrl]);

  const handleSort = (field: "mkp" | "fltRt" | "trPrc") => {
    let nextOrder: "desc" | "asc" = sortOrder;
    if (sortField === field) {
      nextOrder = sortOrder === "desc" ? "asc" : "desc";
    } else {
      nextOrder = "desc";
    }
    setSortField(field);
    setSortOrder(nextOrder);
  };

  // 검색/정렬된 데이터 반환
  const filtered = stocks.filter((s) => s.itms_nm?.includes(search));
  console.log("검색어", filtered);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return {
    stocks,
    loading,
    search,
    setSearch,
    handleChange,
    sortField,
    sortOrder,
    handleSort,
  };
}

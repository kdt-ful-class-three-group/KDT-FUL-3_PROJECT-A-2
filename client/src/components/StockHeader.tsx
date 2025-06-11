"use client";
import { StockData } from "@/hooks/useStockApi";

interface Props {
  onSelectTab: (tab: string) => void;
  stockValue: StockData & { simulatedColor?: string };
  stockNum: string;
  stocks: StockData[];
  getFltRtColor: (flt_rt: number) => string;
}

export default function StockHeader({
  onSelectTab,
  stocks,
  stockNum,
  stockValue,
  getFltRtColor,
}: Props) {
  const history = stocks.filter((s) => String(s.srtn_cd) === String(stockNum));
  const latest = history[history.length - 1];
  console.log("history", history);
  const tabs = [
    { name: "주문", key: "orderPage" },
    // { name: "호가", key: "orderBook" },
    { name: "차트", key: "stockChart" },
    // { name: "시세", key: "priceInfo" },
    // { name: "정보", key: "companyInfo" },
  ];

  return (
    <div className="bg-white shadow">
      <div className="text-xl font-bold pl-5 pt-5  text-black mb-2">
        {stockValue.itms_nm}
      </div>
      <div className=" pl-5 mb-3">
        <span className="text-2 font-bold text-red-500 mr-2">
          <span
            className="text-2xl font-bold mr-2"
            style={{ color: getFltRtColor(latest.flt_rt) }}
          >
            {latest.flt_rt}%
          </span>
        </span>
        <span
          className={`text-sm  "text-red-500"`}
          style={{ color: getFltRtColor(latest.flt_rt) }}
        >
          {latest.clpr}
        </span>
      </div>

      <div className="flex justify-around border-t text-sm text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onSelectTab(tab.key)}
            className="hover:text-black p-4"
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}

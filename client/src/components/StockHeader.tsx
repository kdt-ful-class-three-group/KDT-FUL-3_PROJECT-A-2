import { StockData } from "@/hooks/useStockApi";

interface Props {
  onSelectTab: (tab: string) => void;
  stockValue: StockData;
}

export default function StockHeader({ onSelectTab, stockValue }: Props) {
  const tabs = [
    { name: "주문", key: "orderPage" },
    { name: "호가", key: "orderBook" },
    { name: "차트", key: "stockChart" },
    { name: "시세", key: "priceInfo" },
    { name: "정보", key: "companyInfo" },
  ];

  return (
    <div className="bg-white p-4 shadow">
      <div className="text-xl font-bold  text-black mb-2">
        {stockValue.itmsNm}
      </div>
      <div className=" mb-3">
        <span className="text-2 font-bold text-red-500 mr-2">
          <span className="text-2xl font-bold text-red-500 mr-2">
            {stockValue.fltRt}
          </span>
        </span>
        <span className={`text-sm  "text-red-500"`}>{stockValue.mkp}</span>
      </div>

      <div className="flex justify-around border-t pt-1 text-sm text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onSelectTab(tab.key)}
            className="hover:text-black"
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}

interface Props {
  onSelectTab: (tab: string) => void;
  name: string;
  price: number;
  percent: number;
}

export default function StockHeader({ onSelectTab, name, price, percent }: Props) {
  const isUp = percent >= 0;

  const tabs = [
    { name: "주문", key: "orderForm" },
    { name: "호가", key: "orderBook" },
    { name: "차트", key: "stockChart" },
    { name: "시세", key: "priceInfo" },
    { name: "정보", key: "companyInfo" },
  ];

  return (
    <div className="bg-white p-4 shadow">
      <div className="text-xl font-bold  text-black mb-2">{name}</div>
      <div className=" mb-3">
        <span className="text-2 font-bold text-red-500 mr-2">
          <span className="text-2xl font-bold text-red-500 mr-2">
            {price ? price.toLocaleString() + "원" : "-"}
          </span>
        </span>
        <span className={`text-sm ${isUp ? "text-red-500" : "text-blue-500"}`}>
          {isUp ? "▲" : "▼"} {Math.abs(percent).toFixed(2)}%
        </span>
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

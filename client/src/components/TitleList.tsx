// components/StockTitleList.tsx
"use client";
import { useRouter } from "next/navigation";
import { StockData } from "@/hooks/useStockApi"; // API 훅

type Props = {
  sortedStocks: StockData[];
  sortField: "mkp" | "fltRt" | "trPrc" | null;
  sortOrder: "desc" | "asc";
  handleSort: (field: "mkp" | "fltRt" | "trPrc") => void;
};
function TitleList({
  sortedStocks,
  sortField,
  sortOrder,
  handleSort,
}: Props) {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between px-2 mb-6">
        <div className="flex justify-center  w-full ">
          <p className="text-[#313131]">종목</p>
        </div>
        <div
          className="flex justify-center w-full"
          onClick={() => handleSort("mkp")}
        >
          <p className="text-[#313131] mr-1">현재가</p>

          <img
            src={
              sortField === "mkp"
                ? sortOrder === "desc"
                  ? "/image/arrow_up.svg"
                  : "/image/arrow_down.svg"
                : "/image/tbArrow.svg"
            }
            alt="정렬"
          />
        </div>
        <div
          className="flex justify-center w-full"
          onClick={() => handleSort("fltRt")}
        >
          <p className="text-[#313131] mr-1">전일대비</p>
          <img
            src={
              sortField === "fltRt"
                ? sortOrder === "desc"
                  ? "/image/arrow_up.svg"
                  : "/image/arrow_down.svg"
                : "/image/tbArrow.svg"
            }
            alt="정렬"
          />
        </div>
        <div
          className="flex justify-center w-full"
          onClick={() => handleSort("trPrc")}
        >
          <p className="text-[#313131] mr-1">거래대금</p>
          <img
            src={
              sortField === "trPrc"
                ? sortOrder === "desc"
                  ? "/image/arrow_up.svg"
                  : "/image/arrow_down.svg"
                : "/image/tbArrow.svg"
            }
            alt="정렬"
          />
        </div>
      </div>
      {sortedStocks.map((stock, id) => (
        <div
          key={id}
          className="flex px-2 border-[#D9D9D9] py-5 border-b"
          onClick={() => router.push("/stock-detail/" + stock.stock_code)}
        >
          <div className="flex justify-center w-full">
            <p className="text-[#313131]">{stock.stock_name}</p>
          </div>
          <div className="flex justify-center w-full">
            <p>{stock.mkp}</p>
          </div>
          <div className="flex justify-center w-full">
            <p>{stock.vs}</p>
          </div>
          <div className="flex justify-center w-full">
            <p>{stock.trPrc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TitleList;

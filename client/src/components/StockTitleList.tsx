"use client";
import { useRouter } from "next/navigation";
import { StockData } from "@/hooks/useStockApi"; // API 훅

// import { useMockStockSimulator } from "@/hooks/useMockStockSimulator"; // 모의 투자 훅

type Props = {
  sortField: "mkp" | "fltRt" | "trPrc" | null;
  sortOrder: "desc" | "asc";
  handleSort: (field: "mkp" | "fltRt" | "trPrc") => void;
  stocks: StockData[];
  getFltRtColor: (flt_rt: number) => string;
};
function StockTitleList({
  sortField,
  sortOrder,
  handleSort,
  stocks,
  getFltRtColor,
}: Props) {
  const router = useRouter();
  console.log(stocks);
  // 종목코드 기준으로 중복 제거 (가장 첫 번째 데이터만 남김)
  // const uniqueStocks = Array.from(
  //   new Map(stocks.map((s) => [s.srtn_cd, s])).values()
  // );

  // 이름순 정렬 (원하면)
  // uniqueStocks.sort((a, b) => a.itms_nm.localeCompare(b.itms_nm));

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
      {stocks.map((stock, id) => (
        <div
          key={id}
          className="flex px-2 border-[#D9D9D9] py-5 border-b"
          onClick={() => router.push("/stock-detail/" + stock.srtn_cd)}
        >
          <div className="flex justify-center w-full">
            <p className="text-[#313131]">{stock.itms_nm}</p>
          </div>
          <div className="flex justify-center w-full">
            <p style={{ color: getFltRtColor(stock.flt_rt) }}>{stock.clpr}</p>
          </div>
          <div className="flex justify-center w-full">
            <p style={{ color: getFltRtColor(stock.flt_rt) }}>
              {stock.flt_rt}%
            </p>
          </div>
          <div className="flex justify-center w-full">
            <p style={{ color: getFltRtColor(stock.flt_rt) }}>
              {stock.tr_prc}백만
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StockTitleList;

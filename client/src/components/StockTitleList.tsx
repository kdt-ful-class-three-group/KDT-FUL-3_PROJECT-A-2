import { useRouter } from "next/navigation";
import { StockData } from "@/hooks/useStockApi"; // API 훅
type Props = {
  sortedStocks: StockData[];
  sortField: "mkp" | "fltRt" | "trPrc" | null;
  sortOrder: "desc" | "asc";
  handleSort: (field: "mkp" | "fltRt" | "trPrc") => void;
};
// 소수점 앞에 0이 없으면 0을 붙여주는 함수
function formatFloat(value: string) {
  if (!value) return "0";
  if (value.startsWith(".")) return "0" + value;
  if (value.startsWith("-.")) return "-0" + value.slice(1);
  return value;
}
function StockTitleList({
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
                  ? "./image/arrow_up.svg"
                  : "./image/arrow_down.svg"
                : "./image/tbArrow.svg"
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
                  ? "./image/arrow_up.svg"
                  : "./image/arrow_down.svg"
                : "./image/tbArrow.svg"
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
                  ? "./image/arrow_up.svg"
                  : "./image/arrow_down.svg"
                : "./image/tbArrow.svg"
            }
            alt="정렬"
          />
        </div>
      </div>
      {sortedStocks.map((stock, id) => (
        <div
          key={id}
          className="flex px-2 border-[#D9D9D9] py-5 border-b"
          onClick={() => router.push("/stock-detail/" + stock.srtnCd)}
        >
          <div className="flex justify-center w-full">
            <p className="text-[#313131]">{stock.itmsNm}</p>
          </div>
          <div className="flex justify-center w-full">
            <p
              className={
                stock.fltRt.startsWith("-") ? "text-blue-500" : "text-red-500"
              }
            >
              {stock.mkp.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-center w-full">
            <p
              className={
                stock.fltRt.startsWith("-") ? "text-blue-500" : "text-red-500"
              }
            >
              {formatFloat(stock.fltRt)}%
            </p>
          </div>
          <div className="flex justify-center w-full">
            <p
              className={
                stock.fltRt.startsWith("-") ? "text-blue-500" : "text-red-500"
              }
            >
              {stock.trPrc.toLocaleString()}백만
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StockTitleList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderBookBoard.css"; // 스타일은 아래 별도 제공

const OrderBookBoard = ({ symbol }: { symbol: string }) => {
  const [priceRows, setPriceRows] = useState<any[]>([]);
  const [vp, setVp] = useState(0);
  const [stats, setStats] = useState<any>({});

  useEffect(() => {
    axios.get(`/api/stocks/${symbol}/order-book`).then((res) => {
      setPriceRows(res.data.rows);
    });

    axios.get(`/api/stocks/${symbol}/price-stats`).then((res) => {
      setStats(res.data);
    });

    axios.get(`/api/stocks/${symbol}/vp`).then((res) => {
      setVp(res.data.vp);
    });
  }, [symbol]);

  return (
    <div className="board">
      <div className="header">
        <div>📈 체결강도: {vp.toFixed(2)}%</div>
        <div>💰 거래량: {stats.volume} BTC</div>
        <div>💵 거래금액: {stats.amount} 백만원</div>
        <div>📌 52주최고: {stats.yearHigh?.toLocaleString()}원</div>
        <div>📉 52주최저: {stats.yearLow?.toLocaleString()}원</div>
        <div>🕐 전일종가: {stats.prevClose?.toLocaleString()}원</div>
        <div>
          📍 고가: {stats.high?.toLocaleString()}원 / 저가:{" "}
          {stats.low?.toLocaleString()}원
        </div>
      </div>

      <div className="price-table">
        {priceRows.map((row, idx) => (
          <div key={idx} className="price-row">
            <div className="left">
              {row.buyQty > 0 ? row.buyQty.toFixed(3) : ""}
            </div>
            <div className={`center ${row.type === "buy" ? "blue" : "red"}`}>
              {row.price.toLocaleString()}
            </div>
            <div className="right">
              {row.sellQty > 0 ? row.sellQty.toFixed(3) : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBookBoard;

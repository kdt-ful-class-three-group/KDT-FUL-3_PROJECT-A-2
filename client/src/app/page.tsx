import React from "react";

const dummyData = {
  vp: 107.73,
  volume: "1,131.856 BTC",
  amount: "170,374백만원",
  yearHigh: "163,325,000",
  yearLow: "72,100,000",
  prevClose: "150,280,000",
  high: "151,089,000",
  low: "150,015,000",
  priceRows: [
    { price: "150,912,000", rate: "0.42%", qty: "0.024", type: "sell" },
    { price: "150,864,000", rate: "0.39%", qty: "0.028", type: "sell" },
    { price: "150,855,000", rate: "0.38%", qty: "1.321", type: "sell" },
    { price: "150,800,000", rate: "0.35%", qty: "0.068", type: "buy" },
    { price: "150,790,000", rate: "0.34%", qty: "0.006", type: "buy" },
    { price: "150,786,000", rate: "0.34%", qty: "0.230", type: "buy" },
    { price: "150,773,000", rate: "0.33%", qty: "0.001", type: "buy" },
  ],
};

const StockDashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h2 style={styles.title}> 실시간 호가판</h2>

      <div style={styles.headerInfo}>
        <div>
          체결강도: <span style={styles.highlight}>{dummyData.vp}%</span>
        </div>
        <div>거래량: {dummyData.volume}</div>
        <div>거래금액: {dummyData.amount}</div>
        <div>52주 최고: {dummyData.yearHigh}원</div>
        <div>52주 최저: {dummyData.yearLow}원</div>
        <div>전일종가: {dummyData.prevClose}원</div>
        <div>
          고가: {dummyData.high} / 저가: {dummyData.low}
        </div>
      </div>

      <div style={styles.priceTable}>
        {dummyData.priceRows.map((row, idx) => (
          <div key={idx} style={styles.priceRow}>
            <div
              style={{
                ...styles.qty,
                color: row.type === "buy" ? "#00bfff" : "#ff4d4d",
              }}
            >
              {row.qty}
            </div>
            <div
              style={{
                ...styles.price,
                color: row.type === "buy" ? "#00bfff" : "#ff4d4d",
              }}
            >
              {row.price}
            </div>
            <div style={styles.rate}>{row.rate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  dashboard: {
    background: "#0a0f24",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    borderRadius: "10px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  headerInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "6px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  highlight: {
    color: "#00ffcc",
    fontWeight: "bold",
  },
  priceTable: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    background: "#101630",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "13px",
  },
  qty: {
    width: "20%",
    textAlign: "left",
  },
  price: {
    width: "50%",
    textAlign: "center",
    fontWeight: "bold",
  },
  rate: {
    width: "30%",
    textAlign: "right",
  },
};

export default StockDashboard;

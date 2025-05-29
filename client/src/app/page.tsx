import React from "react";

const dummyRows = Array(7).fill({
  price: "3,382",
  percent: "0.80%",
  quantity: "48,441,604",
});

const StockBookUI = () => {
  return (
    <div style={styles.wrapper}>
      {/* 상단 정보 */}
      <div style={styles.header}>
        <div style={styles.company}>한화이글스</div>
        <div style={styles.priceBox}>
          <div style={styles.currentPrice}>3,382</div>
          <div style={styles.percentChange}>0.56%</div>
        </div>
      </div>

      {/* 중앙 호가 테이블 */}
      <div style={styles.bookContainer}>
        {/* 매수 영역 */}
        <div style={styles.buySide}>
          {dummyRows.map((row, i) => (
            <div key={i} style={styles.row}>
              <div style={styles.redText}>{row.price}</div>
              <div style={styles.barBoxBlue}>
                <div style={styles.barInnerBlue}></div>
                <div style={styles.barLabel}>{row.quantity}</div>
              </div>
              <div style={styles.grayText}>{row.percent}</div>
            </div>
          ))}
        </div>

        {/* 통계 영역 */}
        <div style={styles.infoBox}>
          <div>📈 거래량: 223,215,046 XRP</div>
          <div>💰 거래금: 765,897백만원</div>
          <div>📅 52주 최고: 4,984 (2025.01.20)</div>
          <div>📉 52주 최저: 4,984 (2025.01.20)</div>
          <div>📍 전일종가: 4,984</div>
          <div>📈 당일고가: 4,984 (0.68%)</div>
          <div>📉 당일저가: 4,984 (-1.55%)</div>
        </div>

        {/* 매도 영역 */}
        <div style={styles.sellSide}>
          {dummyRows.map((row, i) => (
            <div key={i} style={{ ...styles.row, backgroundColor: "#ffe5e5" }}>
              <div style={styles.grayText}>{row.percent}</div>
              <div style={styles.redText}>{row.price}</div>
              <div style={styles.barBoxRed}>
                <div style={styles.barInnerRed}></div>
                <div style={styles.barLabel}>{row.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 체결 정보 */}
      <div style={styles.bottom}>
        <div style={styles.bottomLeft}>
          <div>
            체결강도: <span style={styles.vp}>68%</span>
          </div>
          <div style={{ marginTop: "8px" }}>
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={i} style={styles.tradeRow}>
                  <span>328,000</span>
                  <span>2</span>
                </div>
              ))}
          </div>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.bottomTotalLeft}>850,264,435</div>
          <div style={styles.bottomTotalRight}>938,759,927</div>
        </div>
      </div>
    </div>
  );
};

export default StockBookUI;

// 🎨 스타일 정의
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: "#f5f5f5",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    color: "#222",
    maxWidth: "720px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "12px",
  },
  company: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "orange",
  },
  priceBox: {
    marginTop: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    gap: "10px",
  },
  currentPrice: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#d03b3b",
  },
  percentChange: {
    fontSize: "16px",
    color: "#d03b3b",
  },
  bookContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
  },
  buySide: {
    flex: 1,
    backgroundColor: "#e3f2ff",
    padding: "10px",
    borderRadius: "6px",
  },
  sellSide: {
    flex: 1,
    backgroundColor: "#ffe5e5",
    padding: "10px",
    borderRadius: "6px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "6px",
  },
  redText: {
    color: "#d03b3b",
    fontWeight: "bold",
    width: "60px",
  },
  grayText: {
    fontSize: "12px",
    color: "#888",
    width: "50px",
    textAlign: "right",
  },
  barBoxBlue: {
    flex: 1,
    backgroundColor: "#cfe5ff",
    margin: "0 6px",
    height: "18px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  barBoxRed: {
    flex: 1,
    backgroundColor: "#ffcaca",
    margin: "0 6px",
    height: "18px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  barInnerBlue: {
    width: "60%",
    height: "100%",
    backgroundColor: "#0f4dbf",
    borderRadius: "4px 0 0 4px",
  },
  barInnerRed: {
    width: "60%",
    height: "100%",
    backgroundColor: "#ff3c3c",
    borderRadius: "0 4px 4px 0",
  },
  barLabel: {
    position: "absolute",
    right: "8px",
    fontSize: "12px",
    color: "#fff",
    fontWeight: "bold",
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "10px",
    fontSize: "13px",
    lineHeight: "1.6",
    borderRadius: "6px",
  },
  bottom: {
    marginTop: "16px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "6px",
  },
  bottomLeft: {
    fontSize: "13px",
    marginBottom: "12px",
  },
  vp: {
    fontWeight: "bold",
    color: "#3366ff",
  },
  tradeRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    padding: "2px 0",
    borderBottom: "1px dotted #ddd",
  },
  bottomRight: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    marginTop: "8px",
    color: "#999",
  },
  bottomTotalLeft: {},
  bottomTotalRight: {},
};

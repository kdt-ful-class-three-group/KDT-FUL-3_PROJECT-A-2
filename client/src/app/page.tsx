import React from "react";

const StockBookUI = () => {
  const hogaData = Array(6).fill({
    price: "3,382",
    percent: "0.80%",
    quantity: "48,441,604",
  });

  const trades = Array(8).fill({ price: "328,000", qty: 2 });
  const buyCount = 6;
  const sellCount = 2;
  const vp = ((buyCount / sellCount) * 100).toFixed(0); // 체결강도 계산

  return (
    <div style={styles.container}>
      {/* 상단 제목
      <div style={styles.header}>
        <div style={styles.company}>한화이글스</div>
        <div style={styles.priceBox}>
          <span style={styles.price}>3,382</span>
          <span style={styles.percent}>0.56%</span>
        </div>
      </div> */}

      {/* 호가 + 정보 */}
      <div style={styles.orderSection}>
        {/* 파란 호가 */}
        <div style={styles.hogaBlockLeft}>
          {hogaData.map((_, i) => (
            <div key={i} style={styles.blueRow}>
              <span style={styles.hogaPriceRed}>3,382</span>
              <div style={styles.hogaBarBoxBlue}>
                <div style={styles.hogaBarBlue}></div>
                <span style={styles.hogaQty}>48,441,604</span>
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽 거래 정보 */}
        <div style={styles.marketInfoBox}>
          <div>
            <strong>거래량:</strong> 223,215,046 XRP
          </div>
          <div>
            <strong>거래금:</strong> 765,897백만원
          </div>
          <div>
            <strong>52주 최고:</strong> 4,984 (2025.01.20)
          </div>
          <div>
            <strong>52주 최저:</strong> 4,984 (2025.01.20)
          </div>
          <div>
            <strong>전일종가:</strong> 4,984
          </div>
          <div>
            <strong>당일고가:</strong> 4,984 (0.68%)
          </div>
          <div>
            <strong>당일저가:</strong> 4,984 (-1.55%)
          </div>
        </div>
      </div>

      {/* 하단 체결강도 & 체결내역 */}
      <div style={styles.tradeBox}>
        {/* 왼쪽 체결강도 + 체결가/체결량 */}
        <div style={styles.tradeLeft}>
          <div style={styles.vpTitle}>
            체결강도 <span style={styles.tradeVP}>{vp}%</span>
          </div>
          {trades.map((t, i) => (
            <div key={i} style={styles.tradeRow}>
              <span>{t.price}</span>
              <span>{t.qty}</span>
            </div>
          ))}
        </div>

        {/* 가운데 현재가/등락률 */}
        <div style={styles.tradeCenter}>
          {trades.map((_, i) => (
            <div key={i} style={styles.centerRow}>
              {/* <span>3,382</span> */}
              <span style={styles.percentGray}>0.80%</span>
            </div>
          ))}
        </div>

        {/* 오른쪽 매도 체결 박스 */}
        <div style={styles.tradeRight}>
          {trades.map((_, i) => (
            <div key={i} style={styles.sellBox}>
              <span style={styles.hogaPriceRed}>3,382</span>
              <span style={styles.percentGray}>0.80%</span>
              <span style={styles.hogaQtyBox}>48,441,604</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockBookUI;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "16px",
    backgroundColor: "#f2f2f2",
    color: "#222",
    maxWidth: "720px",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.05)",
  },
  header: {
    textAlign: "center",
    marginBottom: "16px",
  },
  company: {
    fontSize: "20px",
    color: "#ff6600",
    fontWeight: "bold",
  },
  priceBox: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    fontSize: "20px",
    color: "#d03b3b",
  },
  price: { fontWeight: "bold", fontSize: "28px" },
  percent: { fontSize: "16px" },

  orderSection: {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
  },
  hogaBlockLeft: {
    flex: 1,
    backgroundColor: "#e3f2ff",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderRadius: "6px",
  },
  blueRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  hogaPriceRed: {
    color: "#d03b3b",
    fontWeight: "bold",
    width: "55px",
  },
  hogaBarBoxBlue: {
    backgroundColor: "#cce0f7",
    flex: 1,
    height: "18px",
    borderRadius: "4px",
    position: "relative",
  },
  hogaBarBlue: {
    width: "60%",
    height: "100%",
    backgroundColor: "#005baf",
    borderRadius: "4px 0 0 4px",
  },
  hogaQty: {
    fontSize: "11px",
    color: "#fff",
    position: "absolute",
    right: "6px",
    top: "2px",
    fontWeight: "bold",
  },
  marketInfoBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "12px",
    fontSize: "13px",
    lineHeight: "1.6",
    borderRadius: "6px",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
  },

  // 하단 체결 내역
  tradeBox: {
    display: "flex",
    marginTop: "16px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "6px",
  },
  tradeLeft: {
    flex: 0.8,
    fontSize: "12px",
    paddingRight: "6px",
  },
  vpTitle: {
    fontWeight: "bold",
    marginBottom: "6px",
    fontSize: "13px",
  },
  tradeRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2px 0",
    padding: "2px 4px",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
  },
  tradeCenter: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "13px",
  },
  centerRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  percentGray: {
    color: "#888",
    fontSize: "12px",
  },
  tradeRight: {
    flex: 1.5,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  sellBox: {
    backgroundColor: "#ffe5e5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 6px",
    borderRadius: "4px",
    fontSize: "13px",
  },
  hogaQtyBox: {
    backgroundColor: "#ff3c3c",
    padding: "2px 6px",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  tradeVP: {
    fontWeight: "bold",
    color: "#3366ff",
    marginLeft: "4px",
  },
};

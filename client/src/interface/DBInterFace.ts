// 주문 유형
export enum OrderType {
  BUY = "BUY", // 매수 주문
  SELL = "SELL", // 매도 주문
}

// 주문 상태
export enum OrderStatus {
  PENDING = "PENDING", // 주문 접수됨 (미체결)
  FILLED = "FILLED", // 주문 체결 완료
  CANCELLED = "CANCELLED", // 주문 취소됨
}

// 사용자(회원)
export interface User {
  id: number; // 사용자 고유 ID
  username: string; // 아이디 (4~12자, 영문+숫자)
  nickname: string; // 사용자 닉네임
  phoneNumber: string; // 휴대폰 번호
  creditScore: number; // 신용 등급 (정수)
  createdAt?: string; // 가입일시 (서버에서 생성)
}

// 주문 내역
export interface StockOrder {
  id: number; // 주문 고유 ID
  userId: number; // 주문한 사용자 ID
  stockCode: string; // 종목 코드 (예: 005930)
  stockName: string; // 종목명 (예: 삼성전자)
  orderType: OrderType; // 주문 유형 (BUY, SELL)
  quantity: number; // 주문 수량
  price: number; // 주문 가격
  status: OrderStatus; // 주문 상태
  orderedAt?: string; // 주문 일시
}

// 보유 종목 포트폴리오
export interface Portfolio {
  id: number; // 포트폴리오 ID
  userId: number; // 사용자 ID
  stockCode: string; // 종목 코드
  stockName: string; // 종목명
  quantity: number; // 보유 수량
  avgPrice: number; // 평균 매입가
  updatedAt?: string; // 마지막 업데이트 일시
}

// 관심 종목
export interface InterestStock {
  id: number; // 관심 종목 ID
  userId: number; // 사용자 ID
  stockCode: string; // 종목 코드
  stockName: string; // 종목명
  addedAt?: string; // 등록 일시
}

// 자산 및 대출 정보(은행)
export interface Bank {
  id: number; // 은행 정보 ID
  userId: number; // 사용자 ID
  cashBalance: number; // 보유 현금
  loanAmount: number; // 현재 대출금
  maxLoanLimit: number; // 최대 대출 가능 금액
  creditGrade: number; // 신용 등급 (ex: 1000, 800, 500)
  interestRate: number; // 대출 이자율 (%)
  repayment: number; // 상환금
  repaymentDue: string; // 상환 기한 (ISO 날짜 문자열)
  createdAt?: string; // 생성일시
  updatedAt?: string; // 수정일시
}

// ! input 컴포넌트 매개변수
export interface inputProps {
  className?: string;
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
}

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## 📦 프론트엔드 컴포넌트 구조 (React 기준)

| 페이지 이름 | 컴포넌트 이름 | 설명 |
| --- | --- | --- |
| 거래소 | `ExchangePage` | 종목 리스트, 검색, 정렬 포함 |
| 종목 상세 | `StockDetailPage` | 주문, 호가, 차트, 시세, 정보 탭 |
| 주문 | `OrderForm`, `OrderSummary` | 매수/매도 주문 UI |
| 호가 | `OrderBook` | 매도/매수 잔량 표시 |
| 차트 | `StockChart` | 시간별 차트 UI |
| 시세 | `PriceInfo` | 체결 정보 표시 |
| 회사정보 | `CompanyInfo` | 종목 관련 회사 정보 |
| 관심종목 | `WatchListPage` | 관심 등록 종목 리스트 |
| 투자내역 | `InvestmentPage` | 자산 차트, 보유 종목, 손익률 등 |
| 은행 | `BankPage`, `LoanInputForm` | 대출 입력 및 정보 확인 |
| 마이페이지 | `MyPage`, `CreditGradeTable` | 사용자 정보 및 신용 등급 표시 |
| 로그인/회원가입 | `LoginPage`, `SignupPage` | 로그인 및 회원가입 UI |
| 거래내역 | `TransactionHistoryPage` | 체결/미체결 탭 구성 |

## 📂 폴더/컴포넌트 구조 명세서

| 경로 | 타입 | 설명 |
| --- | --- | --- |
| `src/app/exchange/page.tsx` | 페이지 | 거래소 페이지 (종목 리스트, 검색, 정렬) |
| `src/app/stock-detail/page.tsx` | 페이지 | 종목 상세 페이지 (주문, 호가, 차트, 시세, 정보 탭) |
| `src/app/watch-list/page.tsx` | 페이지 | 관심종목 페이지 (관심 등록 종목 리스트) |
| `src/app/investment/page.tsx` | 페이지 | 투자내역 페이지 (자산 차트, 보유 종목, 손익률 등) |
| `src/app/bank/page.tsx` | 페이지 | 은행 페이지 (대출 입력 및 정보 확인) |
| `src/app/my-page/page.tsx` | 페이지 | 마이페이지 (사용자 정보 및 신용 등급 표시) |
| `src/app/login/page.tsx` | 페이지 | 로그인 페이지 |
| `src/app/signup/page.tsx` | 페이지 | 회원가입 페이지 |
| `src/app/transaction-history/page.tsx` | 페이지 | 거래내역 페이지 (체결/미체결 탭) |
| `src/components/ExchangePage.tsx` | 컴포넌트 | 거래소 메인 컴포넌트 |
| `src/components/StockDetailPage.tsx` | 컴포넌트 | 종목 상세 메인 컴포넌트 |
| `src/components/OrderForm.tsx` | 컴포넌트 | 주문 입력 폼 (매수/매도) |
| `src/components/OrderSummary.tsx` | 컴포넌트 | 주문 요약 정보 |
| `src/components/OrderBook.tsx` | 컴포넌트 | 호가(매수/매도 잔량) |
| `src/components/StockChart.tsx` | 컴포넌트 | 종목 차트 |
| `src/components/PriceInfo.tsx` | 컴포넌트 | 시세(체결 정보) |
| `src/components/CompanyInfo.tsx` | 컴포넌트 | 회사 정보 |
| `src/components/WatchListPage.tsx` | 컴포넌트 | 관심종목 리스트 |
| `src/components/InvestmentPage.tsx` | 컴포넌트 | 투자내역(자산 차트, 보유 종목 등) |
| `src/components/BankPage.tsx` | 컴포넌트 | 은행 정보 |
| `src/components/LoanInputForm.tsx` | 컴포넌트 | 대출 입력 폼 |
| `src/components/MyPage.tsx` | 컴포넌트 | 마이페이지 메인 |
| `src/components/CreditGradeTable.tsx` | 컴포넌트 | 신용 등급 테이블 |
| `src/components/LoginPage.tsx` | 컴포넌트 | 로그인 UI |
| `src/components/SignupPage.tsx` | 컴포넌트 | 회원가입 UI |
| TransactionHistoryPage.tsx | 컴포넌트 | 거래내역 메인 컴포넌트 |

---
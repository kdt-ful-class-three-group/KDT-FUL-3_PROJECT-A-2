
```
KDT-FUL-3_PROJECT-A-2
├─ client
│  ├─ eslint.config.mjs
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ image
│  │  │  ├─ bank.svg
│  │  │  ├─ bookmark.svg
│  │  │  ├─ home.svg
│  │  │  ├─ investment.svg
│  │  │  ├─ leftArrow.svg
│  │  │  ├─ login.svg
│  │  │  ├─ mypage.svg
│  │  │  └─ titlebookmark.svg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ bank
│  │  │  │  └─ page.tsx
│  │  │  ├─ exchange
│  │  │  │  └─ page.tsx
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ investment
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ login
│  │  │  │  └─ page.tsx
│  │  │  ├─ my-page
│  │  │  │  └─ page.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ signup
│  │  │  │  └─ page.tsx
│  │  │  ├─ stock-detail
│  │  │  │  └─ page.tsx
│  │  │  ├─ transaction-history
│  │  │  │  └─ page.tsx
│  │  │  └─ watch-list
│  │  │     └─ page.tsx
│  │  ├─ components
│  │  │  ├─ BankPage.tsx
│  │  │  ├─ CompanyInfo.tsx
│  │  │  ├─ CreditGradeTable.tsx
│  │  │  ├─ ExchangePage.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ InvestmentPage.tsx
│  │  │  ├─ LoanInputForm.tsx
│  │  │  ├─ LoginPage.tsx
│  │  │  ├─ MyPage.tsx
│  │  │  ├─ Nav.tsx
│  │  │  ├─ OrderBook.tsx
│  │  │  ├─ OrderForm.tsx
│  │  │  ├─ OrderSummary.tsx
│  │  │  ├─ PriceInfo.tsx
│  │  │  ├─ SignupPage.tsx
│  │  │  ├─ StockChart.tsx
│  │  │  ├─ StockDetailPage.tsx
│  │  │  ├─ Title.tsx
│  │  │  ├─ TransactionHistoryPage.tsx
│  │  │  └─ WatchListPage.tsx
│  │  ├─ interface
│  │  │  └─ DBInterFace.ts
│  │  └─ stories
│  │     └─ assets
│  ├─ tailwind.config.js
│  └─ tsconfig.json
└─ nest
   ├─ .env
   ├─ .prettierrc
   ├─ dist
   │  ├─ app.controller.d.ts
   │  ├─ app.controller.js
   │  ├─ app.controller.js.map
   │  ├─ app.module.d.ts
   │  ├─ app.module.js
   │  ├─ app.module.js.map
   │  ├─ app.service.d.ts
   │  ├─ app.service.js
   │  ├─ app.service.js.map
   │  ├─ auth
   │  │  ├─ auth.controller.d.ts
   │  │  ├─ auth.controller.js
   │  │  ├─ auth.controller.js.map
   │  │  ├─ auth.module.d.ts
   │  │  ├─ auth.module.js
   │  │  ├─ auth.module.js.map
   │  │  ├─ auth.service.d.ts
   │  │  ├─ auth.service.js
   │  │  ├─ auth.service.js.map
   │  │  └─ dto
   │  │     ├─ login.dto.d.ts
   │  │     ├─ login.dto.js
   │  │     ├─ login.dto.js.map
   │  │     ├─ signup.dto.d.ts
   │  │     ├─ signup.dto.js
   │  │     └─ signup.dto.js.map
   │  ├─ bank
   │  │  ├─ bank.controller.d.ts
   │  │  ├─ bank.controller.js
   │  │  ├─ bank.controller.js.map
   │  │  ├─ bank.module.d.ts
   │  │  ├─ bank.module.js
   │  │  ├─ bank.module.js.map
   │  │  ├─ bank.service.d.ts
   │  │  ├─ bank.service.js
   │  │  ├─ bank.service.js.map
   │  │  ├─ dto
   │  │  │  ├─ update-bank.dto.d.ts
   │  │  │  ├─ update-bank.dto.js
   │  │  │  └─ update-bank.dto.js.map
   │  │  └─ entities
   │  │     ├─ bank.entity.d.ts
   │  │     ├─ bank.entity.js
   │  │     └─ bank.entity.js.map
   │  ├─ common
   │  │  ├─ enums
   │  │  │  ├─ order-status.enum.d.ts
   │  │  │  ├─ order-status.enum.js
   │  │  │  ├─ order-status.enum.js.map
   │  │  │  ├─ order-type.enum.d.ts
   │  │  │  ├─ order-type.enum.js
   │  │  │  └─ order-type.enum.js.map
   │  │  └─ utils
   │  │     ├─ date-format.util.d.ts
   │  │     ├─ date-format.util.js
   │  │     └─ date-format.util.js.map
   │  ├─ DB
   │  │  ├─ DB.d.ts
   │  │  ├─ DB.js
   │  │  └─ DB.js.map
   │  ├─ history
   │  │  ├─ history.controller.d.ts
   │  │  ├─ history.controller.js
   │  │  ├─ history.controller.js.map
   │  │  ├─ history.module.d.ts
   │  │  ├─ history.module.js
   │  │  ├─ history.module.js.map
   │  │  ├─ history.service.d.ts
   │  │  ├─ history.service.js
   │  │  └─ history.service.js.map
   │  ├─ interest
   │  │  ├─ entities
   │  │  │  ├─ interest-stock.entity.d.ts
   │  │  │  ├─ interest-stock.entity.js
   │  │  │  └─ interest-stock.entity.js.map
   │  │  ├─ interest.controller.d.ts
   │  │  ├─ interest.controller.js
   │  │  ├─ interest.controller.js.map
   │  │  ├─ interest.module.d.ts
   │  │  ├─ interest.module.js
   │  │  ├─ interest.module.js.map
   │  │  ├─ interest.service.d.ts
   │  │  ├─ interest.service.js
   │  │  └─ interest.service.js.map
   │  ├─ main.d.ts
   │  ├─ main.js
   │  ├─ main.js.map
   │  ├─ orders
   │  │  ├─ dto
   │  │  │  ├─ create-order.dto.d.ts
   │  │  │  ├─ create-order.dto.js
   │  │  │  └─ create-order.dto.js.map
   │  │  ├─ entities
   │  │  │  ├─ order.entity.d.ts
   │  │  │  ├─ order.entity.js
   │  │  │  └─ order.entity.js.map
   │  │  ├─ orders.controller.d.ts
   │  │  ├─ orders.controller.js
   │  │  ├─ orders.controller.js.map
   │  │  ├─ orders.module.d.ts
   │  │  ├─ orders.module.js
   │  │  ├─ orders.module.js.map
   │  │  ├─ orders.service.d.ts
   │  │  ├─ orders.service.js
   │  │  └─ orders.service.js.map
   │  ├─ portfolio
   │  │  ├─ entities
   │  │  │  ├─ portfolio.entity.d.ts
   │  │  │  ├─ portfolio.entity.js
   │  │  │  └─ portfolio.entity.js.map
   │  │  ├─ portfolio.controller.d.ts
   │  │  ├─ portfolio.controller.js
   │  │  ├─ portfolio.controller.js.map
   │  │  ├─ portfolio.module.d.ts
   │  │  ├─ portfolio.module.js
   │  │  ├─ portfolio.module.js.map
   │  │  ├─ portfolio.service.d.ts
   │  │  ├─ portfolio.service.js
   │  │  └─ portfolio.service.js.map
   │  ├─ stocks
   │  │  ├─ dto
   │  │  │  ├─ fetch-stock.dto.d.ts
   │  │  │  ├─ fetch-stock.dto.js
   │  │  │  └─ fetch-stock.dto.js.map
   │  │  ├─ stocks.controller.d.ts
   │  │  ├─ stocks.controller.js
   │  │  ├─ stocks.controller.js.map
   │  │  ├─ stocks.module.d.ts
   │  │  ├─ stocks.module.js
   │  │  ├─ stocks.module.js.map
   │  │  ├─ stocks.service.d.ts
   │  │  ├─ stocks.service.js
   │  │  └─ stocks.service.js.map
   │  ├─ tsconfig.build.tsbuildinfo
   │  └─ users
   │     ├─ dto
   │     │  ├─ update-user.dto.d.ts
   │     │  ├─ update-user.dto.js
   │     │  └─ update-user.dto.js.map
   │     ├─ entities
   │     │  ├─ user.entity.d.ts
   │     │  ├─ user.entity.js
   │     │  └─ user.entity.js.map
   │     ├─ users.controller.d.ts
   │     ├─ users.controller.js
   │     ├─ users.controller.js.map
   │     ├─ users.module.d.ts
   │     ├─ users.module.js
   │     ├─ users.module.js.map
   │     ├─ users.service.d.ts
   │     ├─ users.service.js
   │     └─ users.service.js.map
   ├─ eslint.config.mjs
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ src
   │  ├─ app.controller.spec.ts
   │  ├─ app.controller.ts
   │  ├─ app.module.ts
   │  ├─ app.service.ts
   │  ├─ auth
   │  │  ├─ auth.controller.ts
   │  │  ├─ auth.module.ts
   │  │  ├─ auth.service.ts
   │  │  └─ dto
   │  │     ├─ login.dto.ts
   │  │     └─ signup.dto.ts
   │  ├─ bank
   │  │  ├─ bank.controller.ts
   │  │  ├─ bank.module.ts
   │  │  ├─ bank.service.ts
   │  │  ├─ dto
   │  │  │  └─ update-bank.dto.ts
   │  │  └─ entities
   │  │     └─ bank.entity.ts
   │  ├─ common
   │  │  ├─ decorators
   │  │  ├─ enums
   │  │  │  ├─ order-status.enum.ts
   │  │  │  └─ order-type.enum.ts
   │  │  ├─ filters
   │  │  ├─ interceptors
   │  │  └─ utils
   │  │     └─ date-format.util.ts
   │  ├─ database
   │  ├─ DB
   │  │  └─ DB.ts
   │  ├─ history
   │  │  ├─ history.controller.ts
   │  │  ├─ history.module.ts
   │  │  └─ history.service.ts
   │  ├─ interest
   │  │  ├─ entities
   │  │  │  └─ interest-stock.entity.ts
   │  │  ├─ interest.controller.ts
   │  │  ├─ interest.module.ts
   │  │  └─ interest.service.ts
   │  ├─ main.ts
   │  ├─ orders
   │  │  ├─ dto
   │  │  │  └─ create-order.dto.ts
   │  │  ├─ entities
   │  │  │  └─ order.entity.ts
   │  │  ├─ orders.controller.ts
   │  │  ├─ orders.module.ts
   │  │  └─ orders.service.ts
   │  ├─ portfolio
   │  │  ├─ entities
   │  │  │  └─ portfolio.entity.ts
   │  │  ├─ portfolio.controller.ts
   │  │  ├─ portfolio.module.ts
   │  │  └─ portfolio.service.ts
   │  ├─ stocks
   │  │  ├─ dto
   │  │  │  └─ fetch-stock.dto.ts
   │  │  ├─ stocks.controller.ts
   │  │  ├─ stocks.module.ts
   │  │  └─ stocks.service.ts
   │  └─ users
   │     ├─ dto
   │     │  └─ update-user.dto.ts
   │     ├─ entities
   │     │  └─ user.entity.ts
   │     ├─ users.controller.ts
   │     ├─ users.module.ts
   │     └─ users.service.ts
   ├─ test
   │  ├─ app.e2e-spec.ts
   │  └─ jest-e2e.json
   ├─ tsconfig.build.json
   └─ tsconfig.json

```
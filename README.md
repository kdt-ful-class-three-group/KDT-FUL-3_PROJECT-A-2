
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
```
KDT-FUL-3_PROJECT-A-2
├─ client
│  ├─ .next
│  │  ├─ app-build-manifest.json
│  │  ├─ build
│  │  │  └─ chunks
│  │  │     ├─ postcss_config_mjs_transform_ts_f0ffbaad._.js
│  │  │     ├─ postcss_config_mjs_transform_ts_f0ffbaad._.js.map
│  │  │     ├─ [root-of-the-server]__04d7a048._.js
│  │  │     ├─ [root-of-the-server]__04d7a048._.js.map
│  │  │     ├─ [root-of-the-server]__05f88b00._.js
│  │  │     ├─ [root-of-the-server]__05f88b00._.js.map
│  │  │     ├─ [turbopack]_runtime.js
│  │  │     └─ [turbopack]_runtime.js.map
│  │  ├─ build-manifest.json
│  │  ├─ cache
│  │  │  └─ .rscinfo
│  │  ├─ fallback-build-manifest.json
│  │  ├─ package.json
│  │  ├─ server
│  │  │  ├─ app
│  │  │  │  ├─ bank
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ exchange
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ favicon.ico
│  │  │  │  │  ├─ route
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  └─ build-manifest.json
│  │  │  │  │  ├─ route.js
│  │  │  │  │  └─ route.js.map
│  │  │  │  ├─ my-page
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  ├─ stock-detail
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  │  └─ [stockName]
│  │  │  │  │     ├─ page
│  │  │  │  │     │  ├─ app-build-manifest.json
│  │  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │  │     │  ├─ build-manifest.json
│  │  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │  │     ├─ page.js
│  │  │  │  │     ├─ page.js.map
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  ├─ transaction-history
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ watch-list
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  └─ _not-found
│  │  │  │     ├─ page
│  │  │  │     │  ├─ app-build-manifest.json
│  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │     │  ├─ build-manifest.json
│  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │     ├─ page.js
│  │  │  │     ├─ page.js.map
│  │  │  │     └─ page_client-reference-manifest.js
│  │  │  ├─ app-paths-manifest.json
│  │  │  ├─ chunks
│  │  │  │  ├─ ssr
│  │  │  │  │  ├─ src_app_a4430781._.js
│  │  │  │  │  ├─ src_app_a4430781._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__0a46983d._.js
│  │  │  │  │  ├─ [root-of-the-server]__0a46983d._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__104cca26._.js
│  │  │  │  │  ├─ [root-of-the-server]__104cca26._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__1421aff5._.js
│  │  │  │  │  ├─ [root-of-the-server]__1421aff5._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__16ea7f20._.js
│  │  │  │  │  ├─ [root-of-the-server]__16ea7f20._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__489648d2._.js
│  │  │  │  │  ├─ [root-of-the-server]__489648d2._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__495183b3._.js
│  │  │  │  │  ├─ [root-of-the-server]__495183b3._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__4c58c055._.js
│  │  │  │  │  ├─ [root-of-the-server]__4c58c055._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__52d325a9._.js
│  │  │  │  │  ├─ [root-of-the-server]__52d325a9._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__6302eb5e._.js
│  │  │  │  │  ├─ [root-of-the-server]__6302eb5e._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__86e7898f._.js
│  │  │  │  │  ├─ [root-of-the-server]__86e7898f._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__a7c45282._.js
│  │  │  │  │  ├─ [root-of-the-server]__a7c45282._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__ae95dc4a._.js
│  │  │  │  │  ├─ [root-of-the-server]__ae95dc4a._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__c48b8a56._.js
│  │  │  │  │  ├─ [root-of-the-server]__c48b8a56._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__c4fa2dc5._.js
│  │  │  │  │  ├─ [root-of-the-server]__c4fa2dc5._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__c75c51b7._.js
│  │  │  │  │  ├─ [root-of-the-server]__c75c51b7._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__e4bb6431._.js
│  │  │  │  │  ├─ [root-of-the-server]__e4bb6431._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__e606e07b._.js
│  │  │  │  │  ├─ [root-of-the-server]__e606e07b._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__ef82b0e7._.js
│  │  │  │  │  ├─ [root-of-the-server]__ef82b0e7._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__fe41f92a._.js
│  │  │  │  │  ├─ [root-of-the-server]__fe41f92a._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_47e9154f._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_47e9154f._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_5d3fe311._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_5d3fe311._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_852cfec7._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_852cfec7._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_a9be4187._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_a9be4187._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_beefda5f._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_beefda5f._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_cd763190._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_cd763190._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d91d11b1._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d91d11b1._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_dbb86263._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_dbb86263._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_f962853e._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_f962853e._.js.map
│  │  │  │  │  ├─ [turbopack]_runtime.js
│  │  │  │  │  ├─ [turbopack]_runtime.js.map
│  │  │  │  │  ├─ _0318f402._.js
│  │  │  │  │  ├─ _0318f402._.js.map
│  │  │  │  │  ├─ _0388379d._.js
│  │  │  │  │  ├─ _0388379d._.js.map
│  │  │  │  │  ├─ _0551f577._.js
│  │  │  │  │  ├─ _0551f577._.js.map
│  │  │  │  │  ├─ _05f7b655._.js
│  │  │  │  │  ├─ _05f7b655._.js.map
│  │  │  │  │  ├─ _0928dfd7._.js
│  │  │  │  │  ├─ _0928dfd7._.js.map
│  │  │  │  │  ├─ _19443b9c._.js
│  │  │  │  │  ├─ _19443b9c._.js.map
│  │  │  │  │  ├─ _276dbaad._.js
│  │  │  │  │  ├─ _276dbaad._.js.map
│  │  │  │  │  ├─ _29d9bb82._.js
│  │  │  │  │  ├─ _29d9bb82._.js.map
│  │  │  │  │  ├─ _3c3ef710._.js
│  │  │  │  │  ├─ _3c3ef710._.js.map
│  │  │  │  │  ├─ _4daa48a7._.js
│  │  │  │  │  ├─ _4daa48a7._.js.map
│  │  │  │  │  ├─ _5f904819._.js
│  │  │  │  │  ├─ _5f904819._.js.map
│  │  │  │  │  ├─ _711872ce._.js
│  │  │  │  │  ├─ _711872ce._.js.map
│  │  │  │  │  ├─ _86f85d3b._.js
│  │  │  │  │  ├─ _86f85d3b._.js.map
│  │  │  │  │  ├─ _b8137dd5._.js
│  │  │  │  │  ├─ _b8137dd5._.js.map
│  │  │  │  │  ├─ _c4dba485._.js
│  │  │  │  │  ├─ _c4dba485._.js.map
│  │  │  │  │  ├─ _d9028e79._.js
│  │  │  │  │  ├─ _d9028e79._.js.map
│  │  │  │  │  ├─ _d9d29352._.js
│  │  │  │  │  ├─ _d9d29352._.js.map
│  │  │  │  │  ├─ _e43a8dcd._.js
│  │  │  │  │  ├─ _e43a8dcd._.js.map
│  │  │  │  │  ├─ _f003608d._.js
│  │  │  │  │  ├─ _f003608d._.js.map
│  │  │  │  │  ├─ _f89f6f12._.js
│  │  │  │  │  └─ _f89f6f12._.js.map
│  │  │  │  ├─ [root-of-the-server]__48b32c58._.js
│  │  │  │  ├─ [root-of-the-server]__48b32c58._.js.map
│  │  │  │  ├─ [turbopack]_runtime.js
│  │  │  │  └─ [turbopack]_runtime.js.map
│  │  │  ├─ interception-route-rewrite-manifest.js
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ next-font-manifest.js
│  │  │  ├─ next-font-manifest.json
│  │  │  ├─ pages
│  │  │  │  ├─ _app
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ pages-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _app.js.map
│  │  │  │  ├─ _document
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ pages-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ _document.js
│  │  │  │  ├─ _document.js.map
│  │  │  │  ├─ _error
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ pages-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ _error.js
│  │  │  │  └─ _error.js.map
│  │  │  ├─ pages-manifest.json
│  │  │  ├─ server-reference-manifest.js
│  │  │  └─ server-reference-manifest.json
│  │  ├─ static
│  │  │  ├─ chunks
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ _app.js
│  │  │  │  │  └─ _error.js
│  │  │  │  ├─ pages__app_5771e187._.js
│  │  │  │  ├─ pages__app_9114105e._.js
│  │  │  │  ├─ pages__app_9114105e._.js.map
│  │  │  │  ├─ pages__error_5771e187._.js
│  │  │  │  ├─ pages__error_ec6747c0._.js
│  │  │  │  ├─ pages__error_ec6747c0._.js.map
│  │  │  │  ├─ src_app_exchange_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_favicon_ico_mjs_8a7a8fdc._.js
│  │  │  │  ├─ src_app_globals_css_f9ee138c._.single.css
│  │  │  │  ├─ src_app_globals_css_f9ee138c._.single.css.map
│  │  │  │  ├─ src_app_layout_tsx_c0237562._.js
│  │  │  │  ├─ src_app_my-page_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_stock-detail_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_stock-detail_[stockName]_page_tsx_8450df25._.js
│  │  │  │  ├─ [next]_internal_font_google_geist_e531dabc_module_css_f9ee138c._.single.css
│  │  │  │  ├─ [next]_internal_font_google_geist_e531dabc_module_css_f9ee138c._.single.css.map
│  │  │  │  ├─ [next]_internal_font_google_geist_mono_68a01160_module_css_f9ee138c._.single.css
│  │  │  │  ├─ [next]_internal_font_google_geist_mono_68a01160_module_css_f9ee138c._.single.css.map
│  │  │  │  ├─ [root-of-the-server]__49fd8634._.js
│  │  │  │  ├─ [root-of-the-server]__49fd8634._.js.map
│  │  │  │  ├─ [root-of-the-server]__8df7605f._.js
│  │  │  │  ├─ [root-of-the-server]__8df7605f._.js.map
│  │  │  │  ├─ [root-of-the-server]__8ebb6d4b._.css
│  │  │  │  ├─ [root-of-the-server]__8ebb6d4b._.css.map
│  │  │  │  ├─ [root-of-the-server]__923cb372._.js
│  │  │  │  ├─ [root-of-the-server]__923cb372._.js.map
│  │  │  │  ├─ [root-of-the-server]__e2c08166._.js
│  │  │  │  ├─ [root-of-the-server]__e2c08166._.js.map
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._.js
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._.js.map
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_66796270._.js
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_fd44f5a4._.js
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_fd44f5a4._.js.map
│  │  │  │  ├─ _21b051f3._.js
│  │  │  │  ├─ _21b051f3._.js.map
│  │  │  │  ├─ _443b0666._.js
│  │  │  │  ├─ _443b0666._.js.map
│  │  │  │  ├─ _4d9d127e._.js
│  │  │  │  ├─ _4d9d127e._.js.map
│  │  │  │  ├─ _4f0a7276._.js
│  │  │  │  ├─ _4f0a7276._.js.map
│  │  │  │  ├─ _52d17e69._.js
│  │  │  │  ├─ _52d17e69._.js.map
│  │  │  │  ├─ _54c30f93._.js
│  │  │  │  ├─ _54c30f93._.js.map
│  │  │  │  ├─ _58c68e14._.js
│  │  │  │  ├─ _58c68e14._.js.map
│  │  │  │  ├─ _6d1d51dd._.js
│  │  │  │  ├─ _6d1d51dd._.js.map
│  │  │  │  ├─ _76ead016._.js
│  │  │  │  ├─ _76ead016._.js.map
│  │  │  │  ├─ _7b893089._.js
│  │  │  │  ├─ _7b893089._.js.map
│  │  │  │  ├─ _82da709f._.js
│  │  │  │  ├─ _82da709f._.js.map
│  │  │  │  ├─ _93808211._.js
│  │  │  │  ├─ _93808211._.js.map
│  │  │  │  ├─ _994d0d4e._.js
│  │  │  │  ├─ _994d0d4e._.js.map
│  │  │  │  ├─ _9c455b03._.js
│  │  │  │  ├─ _9c455b03._.js.map
│  │  │  │  ├─ _a017be8b._.js
│  │  │  │  ├─ _a017be8b._.js.map
│  │  │  │  ├─ _b69654fb._.js
│  │  │  │  ├─ _b69654fb._.js.map
│  │  │  │  ├─ _bd70c723._.js
│  │  │  │  ├─ _bd70c723._.js.map
│  │  │  │  ├─ _c3fb7c9b._.js
│  │  │  │  ├─ _c3fb7c9b._.js.map
│  │  │  │  ├─ _e69f0d32._.js
│  │  │  │  ├─ _edd46e13._.js
│  │  │  │  ├─ _edd46e13._.js.map
│  │  │  │  ├─ _f6310af9._.js
│  │  │  │  └─ _f6310af9._.js.map
│  │  │  ├─ development
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  ├─ _clientMiddlewareManifest.json
│  │  │  │  └─ _ssgManifest.js
│  │  │  └─ media
│  │  │     ├─ favicon.45db1c09.ico
│  │  │     ├─ gyByhwUxId8gMEwcGFWNOITd-s.p.da1ebef7.woff2
│  │  │     ├─ gyByhwUxId8gMEwSGFWNOITddY4-s.81df3a5b.woff2
│  │  │     ├─ gyByhwUxId8gMEwYGFWNOITddY4-s.b7d310ad.woff2
│  │  │     ├─ or3nQ6H_1_WfwkMZI_qYFrcdmhHkjko-s.p.be19f591.woff2
│  │  │     ├─ or3nQ6H_1_WfwkMZI_qYFrkdmhHkjkotbA-s.e32db976.woff2
│  │  │     └─ or3nQ6H_1_WfwkMZI_qYFrMdmhHkjkotbA-s.cb6bbcb1.woff2
│  │  ├─ trace
│  │  ├─ transform.js
│  │  ├─ transform.js.map
│  │  └─ types
│  ├─ eslint.config.mjs
│  ├─ next-env.d.ts
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
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [stockName]
│  │  │  │     └─ page.tsx
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
│  │  │  ├─ StockHeader.tsx
│  │  │  ├─ Title.tsx
│  │  │  ├─ TransactionHistoryPage.tsx
│  │  │  └─ WatchListPage.tsx
│  │  ├─ interface
│  │  │  └─ DBInterFace.ts
│  │  └─ stories
│  │     └─ assets
│  ├─ tailwind.config.js
│  └─ tsconfig.json
├─ nest
│  ├─ .env
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ auth
│  │  │  ├─ auth.controller.d.ts
│  │  │  ├─ auth.controller.js
│  │  │  ├─ auth.controller.js.map
│  │  │  ├─ auth.module.d.ts
│  │  │  ├─ auth.module.js
│  │  │  ├─ auth.module.js.map
│  │  │  ├─ auth.service.d.ts
│  │  │  ├─ auth.service.js
│  │  │  ├─ auth.service.js.map
│  │  │  └─ dto
│  │  │     ├─ login.dto.d.ts
│  │  │     ├─ login.dto.js
│  │  │     ├─ login.dto.js.map
│  │  │     ├─ signup.dto.d.ts
│  │  │     ├─ signup.dto.js
│  │  │     └─ signup.dto.js.map
│  │  ├─ bank
│  │  │  ├─ bank.controller.d.ts
│  │  │  ├─ bank.controller.js
│  │  │  ├─ bank.controller.js.map
│  │  │  ├─ bank.module.d.ts
│  │  │  ├─ bank.module.js
│  │  │  ├─ bank.module.js.map
│  │  │  ├─ bank.service.d.ts
│  │  │  ├─ bank.service.js
│  │  │  ├─ bank.service.js.map
│  │  │  ├─ dto
│  │  │  │  ├─ update-bank.dto.d.ts
│  │  │  │  ├─ update-bank.dto.js
│  │  │  │  └─ update-bank.dto.js.map
│  │  │  └─ entities
│  │  │     ├─ bank.entity.d.ts
│  │  │     ├─ bank.entity.js
│  │  │     └─ bank.entity.js.map
│  │  ├─ common
│  │  │  ├─ enums
│  │  │  │  ├─ order-status.enum.d.ts
│  │  │  │  ├─ order-status.enum.js
│  │  │  │  ├─ order-status.enum.js.map
│  │  │  │  ├─ order-type.enum.d.ts
│  │  │  │  ├─ order-type.enum.js
│  │  │  │  └─ order-type.enum.js.map
│  │  │  └─ utils
│  │  │     ├─ date-format.util.d.ts
│  │  │     ├─ date-format.util.js
│  │  │     └─ date-format.util.js.map
│  │  ├─ DB
│  │  │  ├─ DB.d.ts
│  │  │  ├─ DB.js
│  │  │  └─ DB.js.map
│  │  ├─ history
│  │  │  ├─ history.controller.d.ts
│  │  │  ├─ history.controller.js
│  │  │  ├─ history.controller.js.map
│  │  │  ├─ history.module.d.ts
│  │  │  ├─ history.module.js
│  │  │  ├─ history.module.js.map
│  │  │  ├─ history.service.d.ts
│  │  │  ├─ history.service.js
│  │  │  └─ history.service.js.map
│  │  ├─ interest
│  │  │  ├─ entities
│  │  │  │  ├─ interest-stock.entity.d.ts
│  │  │  │  ├─ interest-stock.entity.js
│  │  │  │  └─ interest-stock.entity.js.map
│  │  │  ├─ interest.controller.d.ts
│  │  │  ├─ interest.controller.js
│  │  │  ├─ interest.controller.js.map
│  │  │  ├─ interest.module.d.ts
│  │  │  ├─ interest.module.js
│  │  │  ├─ interest.module.js.map
│  │  │  ├─ interest.service.d.ts
│  │  │  ├─ interest.service.js
│  │  │  └─ interest.service.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  ├─ orders
│  │  │  ├─ dto
│  │  │  │  ├─ create-order.dto.d.ts
│  │  │  │  ├─ create-order.dto.js
│  │  │  │  └─ create-order.dto.js.map
│  │  │  ├─ entities
│  │  │  │  ├─ order.entity.d.ts
│  │  │  │  ├─ order.entity.js
│  │  │  │  └─ order.entity.js.map
│  │  │  ├─ orders.controller.d.ts
│  │  │  ├─ orders.controller.js
│  │  │  ├─ orders.controller.js.map
│  │  │  ├─ orders.module.d.ts
│  │  │  ├─ orders.module.js
│  │  │  ├─ orders.module.js.map
│  │  │  ├─ orders.service.d.ts
│  │  │  ├─ orders.service.js
│  │  │  └─ orders.service.js.map
│  │  ├─ portfolio
│  │  │  ├─ entities
│  │  │  │  ├─ portfolio.entity.d.ts
│  │  │  │  ├─ portfolio.entity.js
│  │  │  │  └─ portfolio.entity.js.map
│  │  │  ├─ portfolio.controller.d.ts
│  │  │  ├─ portfolio.controller.js
│  │  │  ├─ portfolio.controller.js.map
│  │  │  ├─ portfolio.module.d.ts
│  │  │  ├─ portfolio.module.js
│  │  │  ├─ portfolio.module.js.map
│  │  │  ├─ portfolio.service.d.ts
│  │  │  ├─ portfolio.service.js
│  │  │  └─ portfolio.service.js.map
│  │  ├─ stocks
│  │  │  ├─ dto
│  │  │  │  ├─ fetch-stock.dto.d.ts
│  │  │  │  ├─ fetch-stock.dto.js
│  │  │  │  └─ fetch-stock.dto.js.map
│  │  │  ├─ stocks.controller.d.ts
│  │  │  ├─ stocks.controller.js
│  │  │  ├─ stocks.controller.js.map
│  │  │  ├─ stocks.module.d.ts
│  │  │  ├─ stocks.module.js
│  │  │  ├─ stocks.module.js.map
│  │  │  ├─ stocks.service.d.ts
│  │  │  ├─ stocks.service.js
│  │  │  └─ stocks.service.js.map
│  │  ├─ tsconfig.build.tsbuildinfo
│  │  └─ users
│  │     ├─ dto
│  │     │  ├─ create-user.dto.d.ts
│  │     │  ├─ create-user.dto.js
│  │     │  ├─ create-user.dto.js.map
│  │     │  ├─ update-user.dto.d.ts
│  │     │  ├─ update-user.dto.js
│  │     │  └─ update-user.dto.js.map
│  │     ├─ entities
│  │     │  ├─ user.entity.d.ts
│  │     │  ├─ user.entity.js
│  │     │  └─ user.entity.js.map
│  │     ├─ users.controller.d.ts
│  │     ├─ users.controller.js
│  │     ├─ users.controller.js.map
│  │     ├─ users.module.d.ts
│  │     ├─ users.module.js
│  │     ├─ users.module.js.map
│  │     ├─ users.service.d.ts
│  │     ├─ users.service.js
│  │     └─ users.service.js.map
│  ├─ eslint.config.mjs
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ auth
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ auth.service.ts
│  │  │  └─ dto
│  │  │     ├─ login.dto.ts
│  │  │     └─ signup.dto.ts
│  │  ├─ bank
│  │  │  ├─ bank.controller.ts
│  │  │  ├─ bank.module.ts
│  │  │  ├─ bank.service.ts
│  │  │  ├─ dto
│  │  │  │  └─ update-bank.dto.ts
│  │  │  └─ entities
│  │  │     └─ bank.entity.ts
│  │  ├─ common
│  │  │  ├─ decorators
│  │  │  ├─ enums
│  │  │  │  ├─ order-status.enum.ts
│  │  │  │  └─ order-type.enum.ts
│  │  │  ├─ filters
│  │  │  ├─ interceptors
│  │  │  └─ utils
│  │  │     └─ date-format.util.ts
│  │  ├─ database
│  │  ├─ DB
│  │  │  └─ DB.ts
│  │  ├─ history
│  │  │  ├─ history.controller.ts
│  │  │  ├─ history.module.ts
│  │  │  └─ history.service.ts
│  │  ├─ interest
│  │  │  ├─ entities
│  │  │  │  └─ interest-stock.entity.ts
│  │  │  ├─ interest.controller.ts
│  │  │  ├─ interest.module.ts
│  │  │  └─ interest.service.ts
│  │  ├─ main.ts
│  │  ├─ orders
│  │  │  ├─ dto
│  │  │  │  └─ create-order.dto.ts
│  │  │  ├─ entities
│  │  │  │  └─ order.entity.ts
│  │  │  ├─ orders.controller.ts
│  │  │  ├─ orders.module.ts
│  │  │  └─ orders.service.ts
│  │  ├─ portfolio
│  │  │  ├─ entities
│  │  │  │  └─ portfolio.entity.ts
│  │  │  ├─ portfolio.controller.ts
│  │  │  ├─ portfolio.module.ts
│  │  │  └─ portfolio.service.ts
│  │  ├─ stocks
│  │  │  ├─ dto
│  │  │  │  └─ fetch-stock.dto.ts
│  │  │  ├─ stocks.controller.ts
│  │  │  ├─ stocks.module.ts
│  │  │  └─ stocks.service.ts
│  │  └─ users
│  │     ├─ dto
│  │     │  ├─ create-user.dto.ts
│  │     │  └─ update-user.dto.ts
│  │     ├─ entities
│  │     │  └─ user.entity.ts
│  │     ├─ users.controller.ts
│  │     ├─ users.module.ts
│  │     └─ users.service.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ README.md

```
```
KDT-FUL-3_PROJECT-A-2
├─ client
│  ├─ .next
│  │  ├─ app-build-manifest.json
│  │  ├─ build
│  │  │  └─ chunks
│  │  │     ├─ postcss_config_mjs_transform_ts_f0ffbaad._.js
│  │  │     ├─ postcss_config_mjs_transform_ts_f0ffbaad._.js.map
│  │  │     ├─ [root-of-the-server]__04d7a048._.js
│  │  │     ├─ [root-of-the-server]__04d7a048._.js.map
│  │  │     ├─ [root-of-the-server]__05f88b00._.js
│  │  │     ├─ [root-of-the-server]__05f88b00._.js.map
│  │  │     ├─ [turbopack]_runtime.js
│  │  │     └─ [turbopack]_runtime.js.map
│  │  ├─ build-manifest.json
│  │  ├─ cache
│  │  │  └─ .rscinfo
│  │  ├─ fallback-build-manifest.json
│  │  ├─ package.json
│  │  ├─ server
│  │  │  ├─ app
│  │  │  │  ├─ bank
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ exchange
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ favicon.ico
│  │  │  │  │  ├─ route
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  └─ build-manifest.json
│  │  │  │  │  ├─ route.js
│  │  │  │  │  └─ route.js.map
│  │  │  │  ├─ my-page
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  ├─ stock-detail
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  │  └─ [stockName]
│  │  │  │  │     ├─ page
│  │  │  │  │     │  ├─ app-build-manifest.json
│  │  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │  │     │  ├─ build-manifest.json
│  │  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │  │     ├─ page.js
│  │  │  │  │     ├─ page.js.map
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  ├─ transaction-history
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ watch-list
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  └─ _not-found
│  │  │  │     ├─ page
│  │  │  │     │  ├─ app-build-manifest.json
│  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │     │  ├─ build-manifest.json
│  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │     ├─ page.js
│  │  │  │     ├─ page.js.map
│  │  │  │     └─ page_client-reference-manifest.js
│  │  │  ├─ app-paths-manifest.json
│  │  │  ├─ chunks
│  │  │  │  ├─ ssr
│  │  │  │  │  ├─ src_app_a4430781._.js
│  │  │  │  │  ├─ src_app_a4430781._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__0a46983d._.js
│  │  │  │  │  ├─ [root-of-the-server]__0a46983d._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__104cca26._.js
│  │  │  │  │  ├─ [root-of-the-server]__104cca26._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__1421aff5._.js
│  │  │  │  │  ├─ [root-of-the-server]__1421aff5._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__16ea7f20._.js
│  │  │  │  │  ├─ [root-of-the-server]__16ea7f20._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__489648d2._.js
│  │  │  │  │  ├─ [root-of-the-server]__489648d2._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__495183b3._.js
│  │  │  │  │  ├─ [root-of-the-server]__495183b3._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__4c58c055._.js
│  │  │  │  │  ├─ [root-of-the-server]__4c58c055._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__52d325a9._.js
│  │  │  │  │  ├─ [root-of-the-server]__52d325a9._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__6302eb5e._.js
│  │  │  │  │  ├─ [root-of-the-server]__6302eb5e._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__86e7898f._.js
│  │  │  │  │  ├─ [root-of-the-server]__86e7898f._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__a7c45282._.js
│  │  │  │  │  ├─ [root-of-the-server]__a7c45282._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__ae95dc4a._.js
│  │  │  │  │  ├─ [root-of-the-server]__ae95dc4a._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__c48b8a56._.js
│  │  │  │  │  ├─ [root-of-the-server]__c48b8a56._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__c4fa2dc5._.js
│  │  │  │  │  ├─ [root-of-the-server]__c4fa2dc5._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__c75c51b7._.js
│  │  │  │  │  ├─ [root-of-the-server]__c75c51b7._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__e4bb6431._.js
│  │  │  │  │  ├─ [root-of-the-server]__e4bb6431._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__e606e07b._.js
│  │  │  │  │  ├─ [root-of-the-server]__e606e07b._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__ef82b0e7._.js
│  │  │  │  │  ├─ [root-of-the-server]__ef82b0e7._.js.map
│  │  │  │  │  ├─ [root-of-the-server]__fe41f92a._.js
│  │  │  │  │  ├─ [root-of-the-server]__fe41f92a._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_47e9154f._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_47e9154f._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_5d3fe311._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_5d3fe311._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_852cfec7._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_852cfec7._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_a9be4187._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_a9be4187._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_beefda5f._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_beefda5f._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_cd763190._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_cd763190._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d91d11b1._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d91d11b1._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_dbb86263._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_dbb86263._.js.map
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_f962853e._.js
│  │  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_f962853e._.js.map
│  │  │  │  │  ├─ [turbopack]_runtime.js
│  │  │  │  │  ├─ [turbopack]_runtime.js.map
│  │  │  │  │  ├─ _0318f402._.js
│  │  │  │  │  ├─ _0318f402._.js.map
│  │  │  │  │  ├─ _0388379d._.js
│  │  │  │  │  ├─ _0388379d._.js.map
│  │  │  │  │  ├─ _0551f577._.js
│  │  │  │  │  ├─ _0551f577._.js.map
│  │  │  │  │  ├─ _05f7b655._.js
│  │  │  │  │  ├─ _05f7b655._.js.map
│  │  │  │  │  ├─ _0928dfd7._.js
│  │  │  │  │  ├─ _0928dfd7._.js.map
│  │  │  │  │  ├─ _19443b9c._.js
│  │  │  │  │  ├─ _19443b9c._.js.map
│  │  │  │  │  ├─ _276dbaad._.js
│  │  │  │  │  ├─ _276dbaad._.js.map
│  │  │  │  │  ├─ _29d9bb82._.js
│  │  │  │  │  ├─ _29d9bb82._.js.map
│  │  │  │  │  ├─ _3c3ef710._.js
│  │  │  │  │  ├─ _3c3ef710._.js.map
│  │  │  │  │  ├─ _4daa48a7._.js
│  │  │  │  │  ├─ _4daa48a7._.js.map
│  │  │  │  │  ├─ _5f904819._.js
│  │  │  │  │  ├─ _5f904819._.js.map
│  │  │  │  │  ├─ _711872ce._.js
│  │  │  │  │  ├─ _711872ce._.js.map
│  │  │  │  │  ├─ _86f85d3b._.js
│  │  │  │  │  ├─ _86f85d3b._.js.map
│  │  │  │  │  ├─ _b8137dd5._.js
│  │  │  │  │  ├─ _b8137dd5._.js.map
│  │  │  │  │  ├─ _c4dba485._.js
│  │  │  │  │  ├─ _c4dba485._.js.map
│  │  │  │  │  ├─ _d9028e79._.js
│  │  │  │  │  ├─ _d9028e79._.js.map
│  │  │  │  │  ├─ _d9d29352._.js
│  │  │  │  │  ├─ _d9d29352._.js.map
│  │  │  │  │  ├─ _e43a8dcd._.js
│  │  │  │  │  ├─ _e43a8dcd._.js.map
│  │  │  │  │  ├─ _f003608d._.js
│  │  │  │  │  ├─ _f003608d._.js.map
│  │  │  │  │  ├─ _f89f6f12._.js
│  │  │  │  │  └─ _f89f6f12._.js.map
│  │  │  │  ├─ [root-of-the-server]__48b32c58._.js
│  │  │  │  ├─ [root-of-the-server]__48b32c58._.js.map
│  │  │  │  ├─ [turbopack]_runtime.js
│  │  │  │  └─ [turbopack]_runtime.js.map
│  │  │  ├─ interception-route-rewrite-manifest.js
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ next-font-manifest.js
│  │  │  ├─ next-font-manifest.json
│  │  │  ├─ pages
│  │  │  │  ├─ _app
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ pages-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _app.js.map
│  │  │  │  ├─ _document
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ pages-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ _document.js
│  │  │  │  ├─ _document.js.map
│  │  │  │  ├─ _error
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ pages-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ _error.js
│  │  │  │  └─ _error.js.map
│  │  │  ├─ pages-manifest.json
│  │  │  ├─ server-reference-manifest.js
│  │  │  └─ server-reference-manifest.json
│  │  ├─ static
│  │  │  ├─ chunks
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ _app.js
│  │  │  │  │  └─ _error.js
│  │  │  │  ├─ pages__app_5771e187._.js
│  │  │  │  ├─ pages__app_9114105e._.js
│  │  │  │  ├─ pages__app_9114105e._.js.map
│  │  │  │  ├─ pages__error_5771e187._.js
│  │  │  │  ├─ pages__error_ec6747c0._.js
│  │  │  │  ├─ pages__error_ec6747c0._.js.map
│  │  │  │  ├─ src_app_exchange_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_favicon_ico_mjs_8a7a8fdc._.js
│  │  │  │  ├─ src_app_globals_css_f9ee138c._.single.css
│  │  │  │  ├─ src_app_globals_css_f9ee138c._.single.css.map
│  │  │  │  ├─ src_app_layout_tsx_c0237562._.js
│  │  │  │  ├─ src_app_my-page_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_stock-detail_page_tsx_8450df25._.js
│  │  │  │  ├─ src_app_stock-detail_[stockName]_page_tsx_8450df25._.js
│  │  │  │  ├─ [next]_internal_font_google_geist_e531dabc_module_css_f9ee138c._.single.css
│  │  │  │  ├─ [next]_internal_font_google_geist_e531dabc_module_css_f9ee138c._.single.css.map
│  │  │  │  ├─ [next]_internal_font_google_geist_mono_68a01160_module_css_f9ee138c._.single.css
│  │  │  │  ├─ [next]_internal_font_google_geist_mono_68a01160_module_css_f9ee138c._.single.css.map
│  │  │  │  ├─ [root-of-the-server]__49fd8634._.js
│  │  │  │  ├─ [root-of-the-server]__49fd8634._.js.map
│  │  │  │  ├─ [root-of-the-server]__8df7605f._.js
│  │  │  │  ├─ [root-of-the-server]__8df7605f._.js.map
│  │  │  │  ├─ [root-of-the-server]__8ebb6d4b._.css
│  │  │  │  ├─ [root-of-the-server]__8ebb6d4b._.css.map
│  │  │  │  ├─ [root-of-the-server]__923cb372._.js
│  │  │  │  ├─ [root-of-the-server]__923cb372._.js.map
│  │  │  │  ├─ [root-of-the-server]__e2c08166._.js
│  │  │  │  ├─ [root-of-the-server]__e2c08166._.js.map
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._.js
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._.js.map
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_66796270._.js
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_fd44f5a4._.js
│  │  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_fd44f5a4._.js.map
│  │  │  │  ├─ _21b051f3._.js
│  │  │  │  ├─ _21b051f3._.js.map
│  │  │  │  ├─ _443b0666._.js
│  │  │  │  ├─ _443b0666._.js.map
│  │  │  │  ├─ _4d9d127e._.js
│  │  │  │  ├─ _4d9d127e._.js.map
│  │  │  │  ├─ _4f0a7276._.js
│  │  │  │  ├─ _4f0a7276._.js.map
│  │  │  │  ├─ _52d17e69._.js
│  │  │  │  ├─ _52d17e69._.js.map
│  │  │  │  ├─ _54c30f93._.js
│  │  │  │  ├─ _54c30f93._.js.map
│  │  │  │  ├─ _58c68e14._.js
│  │  │  │  ├─ _58c68e14._.js.map
│  │  │  │  ├─ _6d1d51dd._.js
│  │  │  │  ├─ _6d1d51dd._.js.map
│  │  │  │  ├─ _76ead016._.js
│  │  │  │  ├─ _76ead016._.js.map
│  │  │  │  ├─ _7b893089._.js
│  │  │  │  ├─ _7b893089._.js.map
│  │  │  │  ├─ _82da709f._.js
│  │  │  │  ├─ _82da709f._.js.map
│  │  │  │  ├─ _93808211._.js
│  │  │  │  ├─ _93808211._.js.map
│  │  │  │  ├─ _994d0d4e._.js
│  │  │  │  ├─ _994d0d4e._.js.map
│  │  │  │  ├─ _9c455b03._.js
│  │  │  │  ├─ _9c455b03._.js.map
│  │  │  │  ├─ _a017be8b._.js
│  │  │  │  ├─ _a017be8b._.js.map
│  │  │  │  ├─ _b69654fb._.js
│  │  │  │  ├─ _b69654fb._.js.map
│  │  │  │  ├─ _bd70c723._.js
│  │  │  │  ├─ _bd70c723._.js.map
│  │  │  │  ├─ _c3fb7c9b._.js
│  │  │  │  ├─ _c3fb7c9b._.js.map
│  │  │  │  ├─ _e69f0d32._.js
│  │  │  │  ├─ _edd46e13._.js
│  │  │  │  ├─ _edd46e13._.js.map
│  │  │  │  ├─ _f6310af9._.js
│  │  │  │  └─ _f6310af9._.js.map
│  │  │  ├─ development
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  ├─ _clientMiddlewareManifest.json
│  │  │  │  └─ _ssgManifest.js
│  │  │  └─ media
│  │  │     ├─ favicon.45db1c09.ico
│  │  │     ├─ gyByhwUxId8gMEwcGFWNOITd-s.p.da1ebef7.woff2
│  │  │     ├─ gyByhwUxId8gMEwSGFWNOITddY4-s.81df3a5b.woff2
│  │  │     ├─ gyByhwUxId8gMEwYGFWNOITddY4-s.b7d310ad.woff2
│  │  │     ├─ or3nQ6H_1_WfwkMZI_qYFrcdmhHkjko-s.p.be19f591.woff2
│  │  │     ├─ or3nQ6H_1_WfwkMZI_qYFrkdmhHkjkotbA-s.e32db976.woff2
│  │  │     └─ or3nQ6H_1_WfwkMZI_qYFrMdmhHkjkotbA-s.cb6bbcb1.woff2
│  │  ├─ trace
│  │  ├─ transform.js
│  │  ├─ transform.js.map
│  │  └─ types
│  ├─ eslint.config.mjs
│  ├─ next-env.d.ts
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
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [stockName]
│  │  │  │     └─ page.tsx
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
│  │  │  ├─ StockHeader.tsx
│  │  │  ├─ Title.tsx
│  │  │  ├─ TransactionHistoryPage.tsx
│  │  │  └─ WatchListPage.tsx
│  │  ├─ interface
│  │  │  └─ DBInterFace.ts
│  │  └─ stories
│  │     └─ assets
│  ├─ tailwind.config.js
│  └─ tsconfig.json
├─ nest
│  ├─ .env
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ auth
│  │  │  ├─ auth.controller.d.ts
│  │  │  ├─ auth.controller.js
│  │  │  ├─ auth.controller.js.map
│  │  │  ├─ auth.module.d.ts
│  │  │  ├─ auth.module.js
│  │  │  ├─ auth.module.js.map
│  │  │  ├─ auth.service.d.ts
│  │  │  ├─ auth.service.js
│  │  │  ├─ auth.service.js.map
│  │  │  └─ dto
│  │  │     ├─ login.dto.d.ts
│  │  │     ├─ login.dto.js
│  │  │     ├─ login.dto.js.map
│  │  │     ├─ signup.dto.d.ts
│  │  │     ├─ signup.dto.js
│  │  │     └─ signup.dto.js.map
│  │  ├─ bank
│  │  │  ├─ bank.controller.d.ts
│  │  │  ├─ bank.controller.js
│  │  │  ├─ bank.controller.js.map
│  │  │  ├─ bank.module.d.ts
│  │  │  ├─ bank.module.js
│  │  │  ├─ bank.module.js.map
│  │  │  ├─ bank.service.d.ts
│  │  │  ├─ bank.service.js
│  │  │  ├─ bank.service.js.map
│  │  │  ├─ dto
│  │  │  │  ├─ update-bank.dto.d.ts
│  │  │  │  ├─ update-bank.dto.js
│  │  │  │  └─ update-bank.dto.js.map
│  │  │  └─ entities
│  │  │     ├─ bank.entity.d.ts
│  │  │     ├─ bank.entity.js
│  │  │     └─ bank.entity.js.map
│  │  ├─ common
│  │  │  ├─ enums
│  │  │  │  ├─ order-status.enum.d.ts
│  │  │  │  ├─ order-status.enum.js
│  │  │  │  ├─ order-status.enum.js.map
│  │  │  │  ├─ order-type.enum.d.ts
│  │  │  │  ├─ order-type.enum.js
│  │  │  │  └─ order-type.enum.js.map
│  │  │  └─ utils
│  │  │     ├─ date-format.util.d.ts
│  │  │     ├─ date-format.util.js
│  │  │     └─ date-format.util.js.map
│  │  ├─ DB
│  │  │  ├─ DB.d.ts
│  │  │  ├─ DB.js
│  │  │  └─ DB.js.map
│  │  ├─ history
│  │  │  ├─ history.controller.d.ts
│  │  │  ├─ history.controller.js
│  │  │  ├─ history.controller.js.map
│  │  │  ├─ history.module.d.ts
│  │  │  ├─ history.module.js
│  │  │  ├─ history.module.js.map
│  │  │  ├─ history.service.d.ts
│  │  │  ├─ history.service.js
│  │  │  └─ history.service.js.map
│  │  ├─ interest
│  │  │  ├─ entities
│  │  │  │  ├─ interest-stock.entity.d.ts
│  │  │  │  ├─ interest-stock.entity.js
│  │  │  │  └─ interest-stock.entity.js.map
│  │  │  ├─ interest.controller.d.ts
│  │  │  ├─ interest.controller.js
│  │  │  ├─ interest.controller.js.map
│  │  │  ├─ interest.module.d.ts
│  │  │  ├─ interest.module.js
│  │  │  ├─ interest.module.js.map
│  │  │  ├─ interest.service.d.ts
│  │  │  ├─ interest.service.js
│  │  │  └─ interest.service.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  ├─ orders
│  │  │  ├─ dto
│  │  │  │  ├─ create-order.dto.d.ts
│  │  │  │  ├─ create-order.dto.js
│  │  │  │  └─ create-order.dto.js.map
│  │  │  ├─ entities
│  │  │  │  ├─ order.entity.d.ts
│  │  │  │  ├─ order.entity.js
│  │  │  │  └─ order.entity.js.map
│  │  │  ├─ orders.controller.d.ts
│  │  │  ├─ orders.controller.js
│  │  │  ├─ orders.controller.js.map
│  │  │  ├─ orders.module.d.ts
│  │  │  ├─ orders.module.js
│  │  │  ├─ orders.module.js.map
│  │  │  ├─ orders.service.d.ts
│  │  │  ├─ orders.service.js
│  │  │  └─ orders.service.js.map
│  │  ├─ portfolio
│  │  │  ├─ entities
│  │  │  │  ├─ portfolio.entity.d.ts
│  │  │  │  ├─ portfolio.entity.js
│  │  │  │  └─ portfolio.entity.js.map
│  │  │  ├─ portfolio.controller.d.ts
│  │  │  ├─ portfolio.controller.js
│  │  │  ├─ portfolio.controller.js.map
│  │  │  ├─ portfolio.module.d.ts
│  │  │  ├─ portfolio.module.js
│  │  │  ├─ portfolio.module.js.map
│  │  │  ├─ portfolio.service.d.ts
│  │  │  ├─ portfolio.service.js
│  │  │  └─ portfolio.service.js.map
│  │  ├─ stocks
│  │  │  ├─ dto
│  │  │  │  ├─ fetch-stock.dto.d.ts
│  │  │  │  ├─ fetch-stock.dto.js
│  │  │  │  └─ fetch-stock.dto.js.map
│  │  │  ├─ stocks.controller.d.ts
│  │  │  ├─ stocks.controller.js
│  │  │  ├─ stocks.controller.js.map
│  │  │  ├─ stocks.module.d.ts
│  │  │  ├─ stocks.module.js
│  │  │  ├─ stocks.module.js.map
│  │  │  ├─ stocks.service.d.ts
│  │  │  ├─ stocks.service.js
│  │  │  └─ stocks.service.js.map
│  │  ├─ tsconfig.build.tsbuildinfo
│  │  └─ users
│  │     ├─ dto
│  │     │  ├─ create-user.dto.d.ts
│  │     │  ├─ create-user.dto.js
│  │     │  ├─ create-user.dto.js.map
│  │     │  ├─ update-user.dto.d.ts
│  │     │  ├─ update-user.dto.js
│  │     │  └─ update-user.dto.js.map
│  │     ├─ entities
│  │     │  ├─ user.entity.d.ts
│  │     │  ├─ user.entity.js
│  │     │  └─ user.entity.js.map
│  │     ├─ users.controller.d.ts
│  │     ├─ users.controller.js
│  │     ├─ users.controller.js.map
│  │     ├─ users.module.d.ts
│  │     ├─ users.module.js
│  │     ├─ users.module.js.map
│  │     ├─ users.service.d.ts
│  │     ├─ users.service.js
│  │     └─ users.service.js.map
│  ├─ eslint.config.mjs
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ auth
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ auth.service.ts
│  │  │  └─ dto
│  │  │     ├─ login.dto.ts
│  │  │     └─ signup.dto.ts
│  │  ├─ bank
│  │  │  ├─ bank.controller.ts
│  │  │  ├─ bank.module.ts
│  │  │  ├─ bank.service.ts
│  │  │  ├─ dto
│  │  │  │  └─ update-bank.dto.ts
│  │  │  └─ entities
│  │  │     └─ bank.entity.ts
│  │  ├─ common
│  │  │  ├─ decorators
│  │  │  ├─ enums
│  │  │  │  ├─ order-status.enum.ts
│  │  │  │  └─ order-type.enum.ts
│  │  │  ├─ filters
│  │  │  ├─ interceptors
│  │  │  └─ utils
│  │  │     └─ date-format.util.ts
│  │  ├─ database
│  │  ├─ DB
│  │  │  └─ DB.ts
│  │  ├─ history
│  │  │  ├─ history.controller.ts
│  │  │  ├─ history.module.ts
│  │  │  └─ history.service.ts
│  │  ├─ interest
│  │  │  ├─ entities
│  │  │  │  └─ interest-stock.entity.ts
│  │  │  ├─ interest.controller.ts
│  │  │  ├─ interest.module.ts
│  │  │  └─ interest.service.ts
│  │  ├─ main.ts
│  │  ├─ orders
│  │  │  ├─ dto
│  │  │  │  └─ create-order.dto.ts
│  │  │  ├─ entities
│  │  │  │  └─ order.entity.ts
│  │  │  ├─ orders.controller.ts
│  │  │  ├─ orders.module.ts
│  │  │  └─ orders.service.ts
│  │  ├─ portfolio
│  │  │  ├─ entities
│  │  │  │  └─ portfolio.entity.ts
│  │  │  ├─ portfolio.controller.ts
│  │  │  ├─ portfolio.module.ts
│  │  │  └─ portfolio.service.ts
│  │  ├─ stocks
│  │  │  ├─ dto
│  │  │  │  └─ fetch-stock.dto.ts
│  │  │  ├─ stocks.controller.ts
│  │  │  ├─ stocks.module.ts
│  │  │  └─ stocks.service.ts
│  │  └─ users
│  │     ├─ dto
│  │     │  ├─ create-user.dto.ts
│  │     │  └─ update-user.dto.ts
│  │     ├─ entities
│  │     │  └─ user.entity.ts
│  │     ├─ users.controller.ts
│  │     ├─ users.module.ts
│  │     └─ users.service.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ README.md

```
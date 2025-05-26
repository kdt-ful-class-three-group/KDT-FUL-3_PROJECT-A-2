import React from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Bank from "@/app/bank/page";
import Exchange from "@/app/exchange/page";
import Login from "@/app/login/page";
import MyPage from "@/app/my-page/page";
import Singup from "@/app/signup/page";
import Stockdetail from "@/app/stock-detail/page";
import Transationhistory from "@/app/transaction-history/page";
import WatchList from "@/app/watch-list/page";

export default function Home() {
  return (
    <div className="m-auto">
      {/* body 컬러 변경해야함 */}
      <Title title="한화이글스" />
      <Bank />
      <Exchange />
      <Login /> 
      <MyPage />
      <Singup />
      <Stockdetail />
      <Transationhistory />
      <WatchList />
      {/* 네비게이션 바 */}

      <Nav />
    </div>
  );
}

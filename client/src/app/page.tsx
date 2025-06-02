import React from "react";
import Nav from "@/components/Nav";
import Exchange from "@/app/exchange/page";

import ApiProviders from "@/app/Provider/ApiProviders";
export default function Home() {
  return (
    <div className="m-auto">
      {/* body 컬러 변경해야함 */}
      <ApiProviders>
        <Exchange />
      </ApiProviders>

      {/* 네비게이션 바 */}
      <Nav />
    </div>
  );
}

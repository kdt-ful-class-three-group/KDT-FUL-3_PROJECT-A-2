import React from "react";
import Nav from "@/components/Nav";
import Exchange from "@/app/exchange/page";

export default function Home() {
  return (
    <div className="m-auto">
      {/* body 컬러 변경해야함 */}
      <Exchange />
      {/* 네비게이션 바 */}
      <Nav />
    </div>
  );
}

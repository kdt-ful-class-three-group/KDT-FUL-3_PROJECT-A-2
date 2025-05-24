import React from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";
export default function Home() {
  return (
    <div className="m-auto">
      {/* body 컬러 변경해야함 */}
      <Title title="한화이글스" />

      <Nav />
    </div>
  );
}

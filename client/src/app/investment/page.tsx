// src/app/investment/page.tsx

"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Title from "@/components/Title";

export default function invextmentPage() {
  return (
    <div>
      {/* 상단 레이아웃 영역 */}
      <Title title="투자내역" bookmark={false} dictionary={false} />



      {/* 네비게이션 */}
      <Nav />
    </div>

  )
}

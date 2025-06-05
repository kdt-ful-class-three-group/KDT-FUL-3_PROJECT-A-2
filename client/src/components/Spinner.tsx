"use client";
import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Spinner() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <ClimbingBoxLoader
        color="#36d7b7" // 스피너 색상
        // loading={loading} // 로딩 여부
        size={30} // 크기
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="text-[#313131] text-2xl mt-5">로딩 중..</p>
    </div>
  );
}

export default Spinner;

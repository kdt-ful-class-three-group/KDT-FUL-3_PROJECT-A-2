// Nav.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isExistsToken, setIsExistsToken] = useState<boolean | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      setIsExistsToken(true);
    } else {
      setIsExistsToken(false);
    }

    const handleStorage = () =>
      setIsExistsToken(sessionStorage.getItem("token") === null);
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-5 flex bg-[#1E3E62] justify-between items-center">
      <Link
        href="/"
        className="cursor-pointer flex flex-col items-center"
        onClick={() => setTab("exchange")}
      >
        <img src="/image/home.svg" alt="" />
        <p className="mt-2 text-white">거래소</p>
      </Link>
      <Link
        href="/watch-list"
        onClick={() => setTab("watch")}
        className="cursor-pointer flex flex-col items-center"
      >
        <img src="/image/bookmark.svg" alt="" />
        <p className="mt-2 text-white">관심</p>
      </Link>
      <Link
        href="/investment"
        className="cursor-pointer flex flex-col items-center"
      >
        <img src="/image/investment.svg" alt="" />
        <p className="mt-2 text-white">투자내역</p>
      </Link>
      <Link href="bank" className="cursor-pointer flex flex-col items-center">
        <img src="/image/bank.svg" alt="" />
        <p className="mt-2 text-white">은행</p>
      </Link>
      {isExistsToken ? (
        <Link
          href="/my-page"
          className="cursor-pointer flex flex-col items-center"
        >
          <img src="/image/mypage.svg" alt="" />
          <p className="mt-2 text-white">마이페이지</p>
        </Link>
      ) : (
        <Link
          href="/login"
          className="cursor-pointer flex flex-col items-center"
        >
          <img src="/image/mypage.svg" alt="" />
          <p className="mt-2 text-white">로그인</p>
        </Link>
      )}
    </div>
  );
}

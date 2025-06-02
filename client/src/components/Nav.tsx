// Nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute bottom-0 p-5 flex bg-[#1E3E62] w-full justify-between items-center">
      <Link href="/" className="cursor-pointer flex flex-col items-center">
        <img src="/image/home.svg" alt="" />
        <p className="mt-2 text-white">거래소</p>
      </Link>
      <Link
        href="/watch-list"
        className="cursor-pointer flex flex-col items-center"
      >
        <img src="/image/bookmark.svg" alt="" />
        <p className="mt-2 text-white">관심</p>
      </Link>
      <Link
        href="/transaction-history"
        className="cursor-pointer flex flex-col items-center"
      >
        <img src="/image/investment.svg" alt="" />
        <p className="mt-2 text-white">투자내역</p>
      </Link>
      <Link href="bank" className="cursor-pointer flex flex-col items-center">
        <img src="/image/bank.svg" alt="" />
        <p className="mt-2 text-white">은행</p>
      </Link>
      <Link
        href="/my-page"
        className="cursor-pointer flex flex-col items-center"
      >
        <img src="/image/mypage.svg" alt="" />
        <p className="mt-2 text-white">마이페이지</p>
      </Link>
      {/* 로그인 푤요하다면 사용 */}
      {/* <button className="cursor-pointer flex flex-col items-center">
        <img src="./image/login.svg" alt="" />
        <p className="mt-2 text-white">로그인</p>
      </button> */}
    </div>
  );
}

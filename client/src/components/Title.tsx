"use client";

import { useRouter } from "next/navigation";

type TitleProps = {
  title: string;
  bookmark: boolean;
  dictionary: boolean;
};

export default function Title({ title, bookmark, dictionary }: TitleProps) {
  const router = useRouter();

  return (
    <div className="w-[95%] flex items-center justify-center relative m-auto p-5">
      <img
        className="absolute left-0 cursor-pointer"
        src="/image/leftArrow.svg"
        alt="이전버튼"
        onClick={() => router.push("/")}
      />
      <h2 className="text-[#FC4F00] text-2xl font-bold">{title}</h2>
      <div className="absolute right-0">
        {bookmark && <img src="/image/titlebookmark.svg" alt="북마크" />}
        {dictionary && <img src="/image/dictionary.svg" alt="사전" />}
      </div>
    </div>
  );
}

"use client"
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useState } from "react";

export default function ChangePw() {
  const [passwordMatch, setPasswordMatch] = useState<null | boolean>(null);

  const handleSubmit = () => {
    console.log("클릭");
  }


  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="비밀번호 변경" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10 mb-10">
        <label className="text-[#FC4F00] mb-3">비밀번호 변경</label>
        <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full max-w-xs mt-5">
            <div>
              <Input
                className="pl-2 rounded-lg border py-2 w-full mb-3"
                type="password"
                placeholder="비밀번호"
                name="password"
                value={""}
                onChange={(e) => { e.target.value }}
              />
              <Input
                className="pl-2 rounded-lg border py-2 w-full mb-3"
                type="password"
                placeholder="비밀번호 확인"
                name="passwordCheck"
                value={""}
                onChange={(e) => { e.target.value }}
              />
              <p className="text-[#1E3E62] text-[60%]">
                6~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합
              </p>
              {passwordMatch === false && (
                <p className="text-red-500 text-xs mt-1">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
              {passwordMatch === true && (
                <p className="text-green-600 text-xs mt-1">
                  비밀번호가 일치합니다.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
            >
              비밀번호 변경
            </button>
          </div>
        </form>
      </div>
    </div >
  );
}

"use client"
import Input from "@/components/input";
import Title from "@/components/Title"
import { SignupForm } from "@/interface/SignupForm";
import { useState } from "react";

export default function SignupPage() {

  const [form, setForm] = useState<SignupForm>({
    userid: "",
    password: "",
    passwordCheck: "",
    phone: "",
    code: "",
    nickname: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        window.location.href = "/login";
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("에러 발생 : ", err);
    }
  };

  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="회원가입" bookmark={false} dictionary={false} />
      <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full max-w-xs">
          <label className="text-[#FC4F00] mb-3">아이디</label>
          <div className="flex w-full justify-between">
            <Input
              className="pl-2 rounded-lg border w-full py-2"
              type="text"
              placeholder="아이디"
              name="userid"
              value={form.userid}
              onChange={handleChange}
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg px-2"
              type="button"
            >
              중복확인
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">비밀번호</label>
          <div>
            <Input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="password"
              placeholder="비밀번호"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <Input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="password"
              placeholder="비밀번호 확인"
              name="passwordCheck"
              value={form.passwordCheck}
              onChange={handleChange}
            />
            <p className="text-[#1E3E62] text-[60%]">
              6~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">휴대폰 번호</label>
          <div className="flex w-full justify-between mb-3">
            <Input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="휴대폰 번호"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg"
              type="button"
            >
              인증번호 받기
            </button>
          </div>
          <div>
            <Input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="text"
              placeholder="인증번호 입력"
              name="code"
              value={form.code}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">닉네임</label>
          <div className="w-full justify-around">
            <Input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="text"
              placeholder="닉네임"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
            />
            <p className="text-[#1E3E62] text-[70%]">사용 가능한 닉네임 입니다.</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
        >
          가입하기
        </button>
      </form>
    </div>
  )
}

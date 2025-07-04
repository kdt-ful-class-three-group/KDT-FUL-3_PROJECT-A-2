
"use client"
import Input from "@/components/Input";
import Title from "@/components/Title";
import { LoginForm } from "@/interface/LoginForm";
import { REGEX } from "@/utils/regex";
import { useState } from "react";



export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ userid: "", password: "" });
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        sessionStorage.setItem("token", data.token.access_token);
        sessionStorage.setItem("member_id", data.user.id);
        window.location.href = "/";
      } else {
        console.log(data.message || "로그인 실패");
        setIsLogin(false);
      }
    } catch (err) {
      console.log("서버 오류");
    }
  };

  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="로그인" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10 mb-10">
        <p className="text-3xl text-[#1E3E62]">안녕하세요.<br />모투샷입니다.</p>
      </div>
      <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
        <div className="w-full max-w-xs mb-5">
          <Input
            className="pl-2 rounded-lg border w-full py-2"
            type="text"
            placeholder="아이디"
            name="userid"
            value={form.userid}
            onChange={handleChange}
            pattern={REGEX.general.source}
          />
        </div>
        <div className="w-full max-w-xs">
          <Input
            className="pl-2 rounded-lg border w-full py-2"
            type="password"
            placeholder="비밀번호"
            name="password"
            value={form.password}
            onChange={handleChange}
            pattern={REGEX.password.source}
          />
        </div>
        {isLogin === false && (
          <p className="text-red-500 mt-1">
            아이디와 비밀번호가 일치하지 않습니다.
          </p>
        )}
        <button
          type="submit"
          className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
        >
          로그인
        </button>
      </form>
      <div className="flex justify-between w-full max-w-xs mt-10 mb-10">
        <a href="/searchId">아이디 찾기</a>
        <a href="/searchpw">비밀번호 찾기</a>
        <a href="/signup">회원가입</a>
      </div>
    </div>
  )
}

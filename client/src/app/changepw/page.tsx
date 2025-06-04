"use client"
import Title from "@/components/Title";
import SignupPasswordInput from "@/components/SignupPasswordInput";
import { usePasswordMatch } from "@/hooks/usePasswordMatch";
import React, { useState } from "react";
import { useEffect } from "react";

export default function ChangePw() {
  const [form, setForm] = useState<{ password: string, passwordCheck: string, userId: string }>({
    userId: "",
    password: "",
    passwordCheck: "",
  });
  const { passwordMatch } = usePasswordMatch(form.password, form.passwordCheck);

  useEffect(() => {
    if (sessionStorage.getItem("userId") === null) {
      window.location.replace("/");
    }
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!passwordMatch) {
      console.log("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      window.location.replace("/");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/users/change-pw", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: form.password,
        }),
      });
      const data = await res.json();

      if (data.ok) {
        console.log("비밀번호가 성공적으로 변경되었습니다.");
        sessionStorage.removeItem("userId");
        window.location.replace("/");
      } else {
        console.log("비밀번호 변경에 실패했습니다.");
      }
    } catch (error) {
      console.log("오류가 발생했습니다.", error);
    }
  }


  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="비밀번호 변경" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10 mb-10">
        <SignupPasswordInput
          password={form.password}
          passwordCheck={form.passwordCheck}
          onChange={handleChange}
          passwordMatch={passwordMatch}
        />
        <button
          type="button"
          className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
          onClick={handleSubmit}
        >
          비밀번호 변경
        </button>
      </div>
    </div >
  );
}

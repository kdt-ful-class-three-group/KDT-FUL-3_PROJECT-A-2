"use client"
import Title from "@/components/Title";
import SignupPasswordInput from "@/components/SignupPasswordInput";
import { usePasswordMatch } from "@/hooks/usePasswordMatch";
import React, { useState } from "react";

export default function ChangePw() {
  const [form, setForm] = useState<{ password: string, passwordCheck: string }>({
    password: "",
    passwordCheck: "",
  });

  const { passwordMatch } = usePasswordMatch(form.password, form.passwordCheck);
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("테스트");
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

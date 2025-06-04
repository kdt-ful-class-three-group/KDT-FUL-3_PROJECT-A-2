"use client"
import Input from "@/components/Input";
import SignupEmailInput from "@/components/SignupEmailInput";
import Title from "@/components/Title";
import { useEmailVerification } from "@/hooks/useEmailVerification";
import { useState } from "react";

export default function SearchPw() {
  const [form, setForm] = useState<{ userid: string, email: string, code: string }>({
    userid: "",
    email: "",
    code: "",
  });
  const { handleEmail, isEmailCodeMatch } = useEmailVerification(form.email, form.code);
  const [showId, setShowId] = useState(false);

  const handleChange = (e: { target: { name: string, value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

  }

  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="비밀번호 찾기" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10 mb-10">
        <label className="text-[#FC4F00] mb-3">아이디</label>
        <div className="flex flex-col w-full max-w-xs">
          <Input
            className="pl-2 rounded-lg border py-2 w-full"
            type="text"
            placeholder="아이디"
            name="userid"
            value={form.userid}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <SignupEmailInput
            email={form.email}
            code={form.code}
            onChange={handleChange}
            onRequestCode={handleEmail}
            isEmailCodeMatch={isEmailCodeMatch}
          />
          <button
            type="button"
            className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
            onClick={handleSubmit}
          >
            비밀번호 찾기
          </button>
          {showId && (
            <p className="">
              아이디 : yun
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

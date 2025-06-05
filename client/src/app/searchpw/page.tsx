"use client"
import Input from "@/components/Input";
import SignupEmailInput from "@/components/SignupEmailInput";
import Title from "@/components/Title";
import { useEmailVerification } from "@/hooks/useEmailVerification";
import { REGEX } from "@/utils/regex";
import { useState } from "react";

export default function SearchPw() {
  const [form, setForm] = useState<{ userId: string, email: string, code: string }>({
    userId: "",
    email: "",
    code: "",
  });
  const { handleEmail, isEmailCodeMatch } = useEmailVerification(form.email, form.code);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: string, value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!isEmailCodeMatch) {
      setIsError(true);
      setError("이메일 인증을 완료해주세요.");
      return;
    }

    fetch("http://localhost:8000/users/search-pw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: form.userId,
        email: form.email,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.ok) {
          setIsError(false);
          sessionStorage.setItem("userId", form.userId);
          window.location.href = "/changepw";
        } else {
          setIsError(true);
          setError(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setError("요청에 실패했습니다. 다시 시도해주세요.");
      });
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
            name="userId"
            value={form.userId}
            onChange={handleChange}
            pattern={REGEX.general.source}
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
          {isError && (
            <p className="text-red-500 text-xs">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

"use client"
import SignupEmailInput from "@/components/SignupEmailInput";
import Title from "@/components/Title";
import { useEmailVerification } from "@/hooks/useEmailVerification";
import { useState } from "react";

export default function SearchId() {
  const [emailForm, setEmailForm] = useState<{ email: string, code: string }>({
    email: "",
    code: "",
  });
  const { handleEmail, isEmailCodeMatch } = useEmailVerification(emailForm.email, emailForm.code);
  const [showId, setShowId] = useState(false);

  const handleChange = (e: { target: { name: string, value: string } }) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEmailCodeMatch) {
      setShowId(true);
    } else {
      setShowId(false);
    }
  }

  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="아이디 찾기" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10 mb-10">
        <SignupEmailInput
          email={emailForm.email}
          code={emailForm.code}
          onChange={handleChange}
          onRequestCode={handleEmail}
          isEmailCodeMatch={isEmailCodeMatch}
        />
        <button
          type="button"
          className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
          onClick={handleSubmit}
        >
          아이디 찾기
        </button>
      </div>
      {showId && (
        <p className="">
          아이디 : yun
        </p>
      )}
    </div>
  );
}

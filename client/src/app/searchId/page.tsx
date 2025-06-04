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
        {/* <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">휴대폰 번호</label>
          <div className="flex w-full justify-between mb-3">
            <Input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="휴대폰 번호"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
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
              value={code}
              onChange={handleCodeChange}
            />
          </div>
        </div> */}
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

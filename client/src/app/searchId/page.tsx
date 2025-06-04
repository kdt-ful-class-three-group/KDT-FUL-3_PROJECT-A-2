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
      fetch("http://localhost:8000/users/search-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailForm.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.ok) {
            console.log(data.user_id);
            setShowId(true);
            console.log("아이디 검색 성공");
          } else {
            console.log("아이디 검색 실패");
            setShowId(false);
          }
        })
        .catch((err) => {
          setShowId(false);
          console.log("요청 실패");
        });
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

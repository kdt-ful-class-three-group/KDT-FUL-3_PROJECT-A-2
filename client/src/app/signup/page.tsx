"use client";
import Input from "@/components/Input";
import SignupEmailInput from "@/components/SignupEmailInput";
import SignupPasswordInput from "@/components/SignupPasswordInput";
import Title from "@/components/Title";
import { useEmailVerification } from "@/hooks/useEmailVerification";
import { usePasswordMatch } from "@/hooks/usePasswordMatch";
import { SignupForm } from "@/interface/SignupForm";
import { useEffect, useState } from "react";
import { REGEX } from "@/utils/regex";

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    userid: "",
    password: "",
    passwordCheck: "",
    email: "",
    code: "",
    nickname: "",
  });

  const [userIdAvailable, setUserIdAvailable] = useState<null | boolean>(null);
  const [userNickAvailable, setUserNickAvailable] = useState<null | boolean>(null);
  const { passwordMatch } = usePasswordMatch(form.password, form.passwordCheck);
  const { handleEmail, isEmailCodeMatch } = useEmailVerification(form.email, form.code);

  const checkUserId = async () => {
    if (!form.userid) {
      setUserIdAvailable(null);
      return;
    }
    try {
      const res = await fetch(`http://localhost:8000/users/check-id/${form.userid}`);
      const data = await res.json();
      if (data.exists) {
        setUserIdAvailable(false);
      } else {
        setUserIdAvailable(true);
      }
    } catch (err) {
      setUserIdAvailable(null);
      console.log("아이디 중복 확인 에러:", err);
    }
  };

  const checkNick = async () => {
    if (!form.nickname) {
      setUserNickAvailable(null);
      return;
    }
    try {
      const res = await fetch(`http://localhost:8000/users/check-nick/${form.nickname}`);
      const data = await res.json();
      if (data.exists) {
        setUserNickAvailable(false);
      } else {
        setUserNickAvailable(true);
      }
    } catch (err) {
      setUserNickAvailable(null);
      console.log("아이디 중복 확인 에러:", err);
    }
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "userid") {
      setUserIdAvailable(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userIdAvailable && userNickAvailable && passwordMatch && isEmailCodeMatch) {
      try {
        const res = await fetch("http://localhost:8000/users/register", {
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
    } else {
      console.log("유효성 검사 실패");
    }
  };

  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="회원가입" bookmark={false} dictionary={false} />
      <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full max-w-xs">
          <label className="text-[#FC4F00] mb-3">아이디</label>
          <div className="flex justify-between">
            <Input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="아이디"
              name="userid"
              value={form.userid}
              onChange={handleChange}
              pattern={REGEX.general.regex.source}
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg px-2 ml-2"
              type="button"
              onClick={checkUserId}
            >
              중복확인
            </button>
          </div>
          {userIdAvailable === true && (
            <p className="text-green-600 text-xs mt-1">
              사용 가능한 아이디입니다.
            </p>
          )}
          {userIdAvailable === false && (
            <p className="text-red-500 text-xs mt-1">
              사용할 수 없는 아이디입니다.
            </p>
          )}
        </div>
        <SignupPasswordInput
          password={form.password}
          passwordCheck={form.passwordCheck}
          onChange={handleChange}
          passwordMatch={passwordMatch}
        />
        <SignupEmailInput
          email={form.email}
          code={form.code}
          onChange={handleChange}
          onRequestCode={handleEmail}
          isEmailCodeMatch={isEmailCodeMatch}
        />
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">닉네임</label>
          <div className="flex justify-between">
            <Input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="닉네임"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              pattern={REGEX.general.regex.source}
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg px-2 ml-2"
              type="button"
              onClick={checkNick}
            >
              중복확인
            </button>
          </div>
          {userNickAvailable === true && (
            <p className="text-green-600 text-xs mt-1">
              사용 핤 수 있는 닉네임 입니다.
            </p>
          )}
          {userNickAvailable === false && (
            <p className="text-red-500 text-xs mt-1">
              사용 할 수 없는 닉네임 입니다.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

"use client";
import Input from "@/components/Input";
import SignupPasswordInput from "@/components/SignupPasswordInput";
import Title from "@/components/Title";
import { SignupForm } from "@/interface/SignupForm";
import { useEffect, useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    userid: "",
    password: "",
    passwordCheck: "",
    email: "",
    code: "",
    nickname: "",
  });

  const [passwordMatch, setPasswordMatch] = useState<null | boolean>(null);
  const [userIdAvailable, setUserIdAvailable] = useState<null | boolean>(null);
  const [userNickAvailable, setUserNickAvailable] = useState<null | boolean>(null);
  const [isEmailCodeMatch, setIsEmailCodeMatch] = useState<null | boolean>(null);

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

  const handleEmail = () => {
    fetch("http://localhost:8000/auth/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ email: form.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          console.log(data.message);
        } else {
          console.log("이메일 인증 요청에 실패했습니다.");
        }
      })
      .catch((err) => {
        console.error("이메일 인증 요청 오류.", err);
      });
  }

  const handleEmailCode = useEffect(() => {
    if (form.code === "") {
      return
    }
    fetch("http://localhost:8000/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ code: form.code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          console.log(data.message);
          setIsEmailCodeMatch(data.ok);
        } else {
          console.log(data.message);
          setIsEmailCodeMatch(data.ok)
        }
      })
      .catch((err) => {
        console.error("이메일 인증 요청 오류.", err);
      });
  }, [form.code])

  useEffect(() => {
    if (form.password && form.passwordCheck) {
      setPasswordMatch(form.password === form.passwordCheck);
    } else {
      setPasswordMatch(null);
    }
  }, [form.password, form.passwordCheck]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "userid") {
      setUserIdAvailable(null);
    }
    if (e.target.name === "code") {
      handleEmailCode
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        <SignupPasswordInput password={form.password} passwordCheck={form.passwordCheck} onChange={handleChange} passwordMatch={passwordMatch} />
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">이메일</label>
          <div className="flex w-full justify-between mb-3">
            <Input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="example@exmaple.com"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg"
              type="button"
              onClick={handleEmail}
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
          {isEmailCodeMatch === false && (
            <p className="text-red-500 text-xs">
              인증번호가 일치하지 않습니다.
            </p>
          )}
          {isEmailCodeMatch === true && (
            <p className="text-green-600 text-xs">
              인증번호가 일치 합니다.
            </p>
          )}
        </div>
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
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg px-2 ml-2"
              type="button"
              onClick={checkNick}
            >
              중복확인
            </button>
          </div>
          {userNickAvailable === false && (
            <p className="text-red-500 text-xs mt-1">
              사용 할 수 없는 닉네임 입니다.
            </p>
          )}
          {userNickAvailable === true && (
            <p className="text-green-600 text-xs mt-1">
              사용 핤 수 있는 닉네임 입니다.
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

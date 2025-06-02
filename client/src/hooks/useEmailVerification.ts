import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useEmailVerification(email: string, code: string): {
  handleEmail: () => void;
  isEmailCodeMatch: boolean | null;
} {
  const [isEmailCodeMatch, setIsEmailCodeMatch] = useState<boolean | null>(null);

  // 인증번호 발송
  const handleEmail = () => {
    fetch("http://localhost:8000/auth/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ email }),
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
  };

  // 인증번호 검증
  useEffect(() => {
    if (!code) return;
    fetch("http://localhost:8000/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsEmailCodeMatch(data.ok);
        if (data.ok) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      })
      .catch((err) => {
        console.error("이메일 인증 요청 오류.", err);
      });
  }, [code]);

  return { handleEmail, isEmailCodeMatch };
}

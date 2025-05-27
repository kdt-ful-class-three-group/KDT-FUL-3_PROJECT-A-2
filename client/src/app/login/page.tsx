import Title from "@/components/Title";

export default function LoginPage() {
  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="로그인" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10 mb-10">
        <p className="text-3xl text-[#1E3E62]">안녕하세요.<br />모투샷입니다.</p>
      </div>
      <div className="w-full max-w-xs mb-5">
        <input
          className="pl-2 rounded-lg border w-full py-2"
          type="text"
          placeholder="아이디"
          name="userid"
        />
      </div>
      <div className="w-full max-w-xs">
        <input
          className="pl-2 rounded-lg border w-full py-2"
          type="password"
          placeholder="비밀번호"
          name="password"
        />
      </div>
      <button
        type="submit"
        className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
      >
        로그인
      </button>
      <div className="flex justify-between w-full max-w-xs mt-10 mb-10">
        <a href="">아이디 찾기</a>
        <a href="">비밀번호 찾기</a>
        <a href="">회원가입</a>
      </div>
    </div>
  )
}

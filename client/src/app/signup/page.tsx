import Title from "@/components/Title"

export default function SignupPage() {
  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="회원가입" bookmark={false} dictionary={false} />
      <form
        className="flex flex-col items-center w-full"
        action="http://localhost:8000/users/register"
        method="POST"
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="text-[#FC4F00] mb-3">아이디</label>
          <div className="flex justify-between">
            <input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="아이디"
              name="userid"
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg px-4"
              type="button"
            >
              중복확인
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">비밀번호</label>
          <div className="w-full justify-around">
            <input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="password"
              placeholder="비밀번호"
              name="password"
            />
            <input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="password"
              placeholder="비밀번호 확인"
            />
            <p className="text-[#1E3E62] text-[60%]">
              6~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">휴대폰 번호</label>
          <div className="flex w-full justify-between mb-3">
            <input
              className="pl-2 rounded-lg border py-2"
              type="text"
              placeholder="휴대폰 번호"
              name="phone"
            />
            <button
              className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg"
              type="button"
            >
              인증번호 받기
            </button>
          </div>
          <div>
            <input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="text"
              placeholder="인증번호 입력"
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs mt-5">
          <label className="text-[#FC4F00] mb-3">닉네임</label>
          <div className="w-full justify-around">
            <input
              className="pl-2 rounded-lg border py-2 w-full mb-3"
              type="text"
              placeholder="닉네임"
              name="nickname"
            />
            <p className="text-[#1E3E62] text-[70%]">사용 가능한 닉네임 입니다.</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full max-w-xs mt-5 border-1 text-center bg-[#1E3E62] text-[#FFFFFF] p-2 rounded-lg"
        >
          가입하기
        </button>
      </form>
    </div>
  )
}

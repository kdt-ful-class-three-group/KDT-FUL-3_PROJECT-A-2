import Input from "@/components/input"
import Title from "@/components/Title"

export default function SignupPage() {
  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="회원가입" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs">
        <label className="text-[#FC4F00] mb-3">아이디</label>
        <div className="flex w-full justify-around">
          <input
            className="pl-2 rounded-lg border"
            type="text"
            placeholder="아이디"
            name="userid"
          />
          <button
            className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg py-3 px-5"
            type="button"
          >
            중복확인
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xs mt-10">
        <label className="text-[#FC4F00] mb-3">비밀번호</label>
        <div className="w-full justify-around">
          <input
            className="pl-2 rounded-lg border py-2 w-full mb-3"
            type="text"
            placeholder="비밀번호"
            name="userid"
          />
          <input
            className="pl-2 rounded-lg border py-2 w-full mb-3"
            type="text"
            placeholder="비밀번호 확인"
            name="userid"
          />
          <p className="text-[#1E3E62] text-[70%]">6~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합</p>
        </div>
      </div>
    </div>
  )
}

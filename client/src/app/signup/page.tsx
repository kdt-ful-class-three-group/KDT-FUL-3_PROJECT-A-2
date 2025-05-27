import Input from "@/components/input"
import Title from "@/components/Title"

export default function SignupPage() {
  return (
    <div className="m-auto flex flex-col items-center w-full px-5">
      <Title title="회원가입" bookmark={false} dictionary={false} />
      <div className="flex flex-col w-full max-w-xs mt-10">
        <label className="text-[#FC4F00] mb-5">아이디</label>
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
    </div>
  )
}

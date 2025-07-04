import Input from "@/components/Input";
import { REGEX } from "@/utils/regex";

interface SignupPasswordInputProps {
  password: string;
  passwordCheck: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  passwordMatch: boolean | null;
}

export default function SignupPasswordInput({
  password,
  passwordCheck,
  onChange,
  passwordMatch,
}: SignupPasswordInputProps) {
  return (
    <div className="flex flex-col w-full max-w-xs mt-5">
      <label className="text-[#FC4F00] mb-3">비밀번호</label>
      <div>
        <Input
          className="pl-2 rounded-lg border py-2 w-full mb-3"
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
          pattern={REGEX.password.regex.source}
          title={REGEX.password.title}
        />
        <Input
          className="pl-2 rounded-lg border py-2 w-full mb-3"
          type="password"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChange}
          pattern={REGEX.password.regex.source}
          title={REGEX.password.title}
        />
        <p className="text-[#1E3E62] text-[60%]">
          8~20자/영문자, 숫자, 특수문자 조합
        </p>
        {passwordMatch === false && (
          <p className="text-red-500 text-xs mt-1">
            비밀번호가 일치하지 않습니다.
          </p>
        )}
        {passwordMatch === true && (
          <p className="text-green-600 text-xs mt-1">
            비밀번호가 일치합니다.
          </p>
        )}
      </div>
    </div>
  )
}
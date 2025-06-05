import Input from "@/components/Input";
import { REGEX } from "@/utils/regex";

interface SignupEmailInputProps {
  email: string;
  code: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  onRequestCode: () => void;
  isEmailCodeMatch: boolean | null;
}

export default function SignupEmailInput({
  email,
  code,
  onChange,
  onRequestCode,
  isEmailCodeMatch,
}: SignupEmailInputProps) {
  return (
    <div className="flex flex-col w-full max-w-xs mt-5">
      <label className="text-[#FC4F00] mb-3">이메일</label>
      <div className="flex w-full justify-between mb-3">
        <Input
          className="pl-2 rounded-lg border py-2"
          type="text"
          placeholder="example@exmaple.com"
          name="email"
          value={email}
          onChange={onChange}
          pattern={REGEX.email.source}
        />
        <button
          className="bg-[#E5E5E5] text-[#1E3E62] rounded-lg"
          type="button"
          onClick={onRequestCode}
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
          onChange={onChange}
          pattern={REGEX.general.source}
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
  );
}
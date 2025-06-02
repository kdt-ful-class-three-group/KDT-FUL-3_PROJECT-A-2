import { useState } from "react";
import { ChangeEvent } from "react";
import { inputProps } from "../interface/DBInterFace";
const forbiddenPattern = /[`<>\/]|script|onerror|onload|alert|<|>|\\/gi; //* 정규식 패턴

function Input({
  className,
  type,
  placeholder,
  name,
  value,
  onChange,
}: inputProps) {
  const [inputPattern, setInputPattern] = useState(true);
  //! ChangeEvent<HTMLInputElement> : React에서 input onChange 이벤트 타입 지정할 때 사용하는 타입
  const inputForbiddenPattern = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    const hasInputForbiddenPattern = forbiddenPattern.test(inputValue);
    if (hasInputForbiddenPattern) {
      setInputPattern(false);
      alert("허용되지 않는 문자가 포함되어 있습니다.");
      inputValue = inputValue.replace(forbiddenPattern, "");
      return;
    } else {
      setInputPattern(true);
    }
    onChange({ target: { name, value: inputValue } });
  };
  return (
    <div>
      <input
        className={className}
        autoFocus
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={inputForbiddenPattern}
        required
      />
    </div>
  );
}

export default Input;

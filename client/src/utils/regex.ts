export const REGEX = {
  general: {
    regex: /^[a-zA-Z0-9]+$/,
    title: "영문 대소문자와 숫자만 입력 가능합니다."
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    title: "유효한 이메일 형식을 입력하세요. 예: example@example.com"
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    title: "8자 이상, 영문자, 숫자, 특수문자(!@#$%^&*)를 모두 포함해야 합니다."
  }
};
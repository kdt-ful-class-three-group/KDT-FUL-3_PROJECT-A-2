import { useEffect, useState } from "react";

export function usePasswordMatch(password: string, passwordCheck: string) {
  const [passwordMatch, setPasswordMatch] = useState<null | boolean>(null);

  useEffect(() => {
    if (password && passwordCheck) {
      setPasswordMatch(password === passwordCheck);
    } else {
      setPasswordMatch(null);
    }
  }, [password, passwordCheck]);

  return { passwordMatch };
}

import React from "react";
import { useRouter } from "next/router";
import S from "./styles";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";

export default function SigningForm() {
  const router = useRouter();
  const isSignupPage = router.pathname.includes("signup");

  const {
    inputValue: { username, email, password },
    handleChange,
  } = useInput({});

  const [isAllValid] = useValidation({ username, email, password });

  return (
    <S.Wrapper>
      <S.Input
        name={"username"}
        value={username}
        placeholder={"Username (영문, 숫자, 언더바, 하이픈 조합 4~15자)"}
        onChange={handleChange}
      />
      <S.Input
        name={"email"}
        value={email}
        placeholder={"Email"}
        onChange={handleChange}
      />
      <S.Input
        name={"password"}
        value={password}
        placeholder={"Password (영문, 숫자 조합 8~20자)"}
        onChange={handleChange}
      />
      <S.ButtonWrapper>
        <S.Button
          disabled={!isAllValid()}
          onClick={() => console.log("submit")}
        >
          {isSignupPage ? "Sign up" : "Sign in"}
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

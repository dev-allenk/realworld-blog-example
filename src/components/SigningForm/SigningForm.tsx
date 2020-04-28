import React from "react";
import { useRouter } from "next/router";
import S from "./styles";
import useInput from "../../hooks/useInput";

export default function SigningForm() {
  const router = useRouter();
  const isSignupPage = router.pathname.includes("signup");

  const {
    inputValue: { username, email, password },
    handleChange,
  } = useInput({});

  return (
    <S.Wrapper>
      <S.Input
        name={"username"}
        value={username}
        placeholder={"Username"}
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
        placeholder={"Password"}
        onChange={handleChange}
      />
      <S.ButtonWrapper>
        <S.Button>{isSignupPage ? "Sign up" : "Sign in"}</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

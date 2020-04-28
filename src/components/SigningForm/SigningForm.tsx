import React from "react";
import { useRouter } from "next/router";
import S from "./styles";

export default function SigningForm() {
  const router = useRouter();
  const isSignupPage = router.pathname.includes("signup");

  return (
    <S.Wrapper>
      <S.Input placeholder={"Username"} />
      <S.Input placeholder={"Email"} />
      <S.Input placeholder={"Password"} />
      <S.ButtonWrapper>
        <S.Button>{isSignupPage ? "Sign up" : "Sign in"}</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

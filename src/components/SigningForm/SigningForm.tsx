import React from "react";
import { useRouter } from "next/router";
import S from "./styles";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";
import useFetch from "../../hooks/useFetch";
import api, { UserSignup, UserSignin } from "../../api";

const SIGNUP_VALUES = { username: "", email: "", password: "" };
const SIGNIN_VALUES = { email: "", password: "" };

export default function SigningForm() {
  const router = useRouter();
  const isSignupPage = router.pathname.includes("signup");

  const { inputValue, handleChange } = useInput(
    isSignupPage ? SIGNUP_VALUES : SIGNIN_VALUES
  );
  const { username, email, password } = inputValue;

  const [status, isAllValid] = useValidation(inputValue);

  const onRequest = (value: UserSignup | UserSignin) => {
    return isSignupPage
      ? api.signup(value as UserSignup)
      : api.signin(value as UserSignin);
  };

  const { request } = useFetch({
    onRequest,
    onSuccess: () => router.push("/"),
  });

  return (
    <S.Wrapper>
      {isSignupPage && (
        <S.Input
          name={"username"}
          value={username}
          placeholder={"Username (영문, 숫자, 언더바, 하이픈 조합 4~15자)"}
          onChange={handleChange}
          isValid={status.username.isValid}
          isEmpty={status.username.isEmpty}
        />
      )}
      <S.Input
        name={"email"}
        value={email}
        placeholder={"Email"}
        onChange={handleChange}
        isValid={status.email.isValid}
        isEmpty={status.email.isEmpty}
      />
      <S.Input
        name={"password"}
        value={password}
        placeholder={"Password (영문, 숫자 조합 8~20자)"}
        onChange={handleChange}
        isValid={status.password.isValid}
        isEmpty={status.password.isEmpty}
      />
      <S.ButtonWrapper>
        <S.Button
          disabled={!isAllValid()}
          onClick={() =>
            isSignupPage
              ? request({ user: { username, email, password } })
              : request({ user: { email, password } })
          }
        >
          {isSignupPage ? "Sign up" : "Sign in"}
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

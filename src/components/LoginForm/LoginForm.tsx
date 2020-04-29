import React from "react";
import { useRouter } from "next/router";
import S from "./styles";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";
import useFetch from "../../hooks/useFetch";
import api, { RegisterPayload, LoginPayload } from "../../api";

const REGISTER_VALUES = { username: "", email: "", password: "" };
const LOGIN_VALUES = { email: "", password: "" };

export default function LoginForm() {
  const router = useRouter();
  const isLoginPage = router.pathname.includes("login");

  const { inputValue, handleChange } = useInput(
    isLoginPage ? LOGIN_VALUES : REGISTER_VALUES
  );
  const { username, email, password } = inputValue;

  const [status, isAllValid] = useValidation(inputValue);

  const onRequest = (value: RegisterPayload | LoginPayload) => {
    return isLoginPage
      ? api.register(value as RegisterPayload)
      : api.login(value as LoginPayload);
  };

  const { request } = useFetch({
    onRequest,
    onSuccess: () => router.push("/"),
  });

  return (
    <S.Wrapper>
      {!isLoginPage && (
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
            isLoginPage
              ? request({ user: { email, password } })
              : request({ user: { username, email, password } })
          }
        >
          {isLoginPage ? "Sign in" : "Sign up"}
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

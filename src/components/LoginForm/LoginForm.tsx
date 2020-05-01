import React, { useEffect } from "react";
import { useRouter } from "next/router";
import S from "./styles";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest, loginRequest } from "../../modules/auth";
import { RootState } from "../../modules";
import Button from "../Button";

const REGISTER_VALUES = { username: "", email: "", password: "" };
const LOGIN_VALUES = { email: "", password: "" };

export default function LoginForm() {
  const router = useRouter();
  const isLoginPage = router.pathname.includes("login");

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const { inputValue, handleChange } = useInput(
    isLoginPage ? LOGIN_VALUES : REGISTER_VALUES
  );
  const { username, email, password } = inputValue;

  const [status, isAllValid] = useValidation(inputValue);

  const request = () => {
    return isLoginPage
      ? dispatch(loginRequest({ user: { email, password } }))
      : dispatch(registerRequest({ user: { username, email, password } }));
  };

  useEffect(() => {
    isLoggedIn && router.push("/");
  }, [isLoggedIn]);

  return (
    <S.Wrapper>
      {!isLoginPage && (
        <S.Input
          name={"username"}
          value={username}
          placeholder={"Username (영문, 숫자, 언더바, 하이픈 조합 4~15자)"}
          onChange={handleChange}
          {...status.username}
        />
      )}
      <S.Input
        name={"email"}
        value={email}
        placeholder={"Email"}
        onChange={handleChange}
        {...status.email}
      />
      <S.Input
        name={"password"}
        value={password}
        placeholder={"Password (영문, 숫자 조합 8~20자)"}
        onChange={handleChange}
        {...status.password}
      />
      <Button disabled={!isAllValid()} onClick={request}>
        {isLoginPage ? "Sign in" : "Sign up"}
      </Button>
    </S.Wrapper>
  );
}

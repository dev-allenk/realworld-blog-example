import React, { useEffect } from "react";
import { useRouter } from "next/router";
import S from "./styles";
import useInput from "@hooks/useInput";
import useValidation from "@hooks/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest, loginRequest } from "@modules/auth";
import { RootState } from "@modules";
import Button from "../Button";
import Loader from "@components/Loader";
import Modal from "@components/Modal";

const REGISTER_VALUES = { username: "", email: "", password: "" };
const LOGIN_VALUES = { email: "", password: "" };

interface Values {
  [idx: string]: string;
  username: string;
  email: string;
  password: string;
}

const USERNAME_REGEXP = /^[A-Za-z0-9_-]{4,15}$/;
const PASSWORD_REGEXP = /^[A-Za-z0-9]{8,20}$/;
const EMAIL_REGEXP = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[a-zA-Z]{2,3}$/;

const validConditions = {
  username(username: string) {
    return USERNAME_REGEXP.test(username) && !/\s/.test(username);
  },
  email(email: string) {
    return EMAIL_REGEXP.test(email) && !/\s/.test(email);
  },
  password(password: string) {
    return PASSWORD_REGEXP.test(password) && !/\s/.test(password);
  },
};
export default function LoginForm() {
  const router = useRouter();
  const isLoginPage = router.pathname.includes("login");

  const { isLoggedIn, isLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const { inputValue, handleChange } = useInput(
    isLoginPage ? (LOGIN_VALUES as Values) : REGISTER_VALUES
  );
  const { username, email, password } = inputValue;

  const [status, isAllValid] = useValidation(inputValue, validConditions);

  const request = () => {
    return isLoginPage
      ? dispatch(loginRequest({ user: { email, password } }))
      : dispatch(registerRequest({ user: { username, email, password } }));
  };

  useEffect(() => {
    isLoggedIn && router.push("/");
  }, [isLoggedIn]);

  return (
    <>
      {isLoading ? (
        <Modal>
          <Loader color={"#ffffff"} />
        </Modal>
      ) : (
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
      )}
    </>
  );
}

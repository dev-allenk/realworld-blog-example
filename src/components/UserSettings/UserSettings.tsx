import React, { useEffect } from "react";
import S from "./styles";
import Button from "../Button";
import useInput from "@hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { updateRequest, getRequest } from "@modules/user";
import { RootState } from "@modules";
import { logoutRequest } from "@modules/auth";
import { useRouter } from "next/router";

const initialValues = {
  image: "",
  username: "",
  bio: "",
  email: "",
  password: "",
};

export default function UserSettings() {
  const { inputValue, handleChange, setInputValue } = useInput(initialValues);
  const { image, username, bio, email, password } = inputValue;

  const { isLoggedIn, user } = useSelector((state: RootState) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.user,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const requestUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateRequest({ user: { image, username, bio, email, password } })
    );
  };

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  useEffect(() => {
    setInputValue({
      image: user.image,
      username: user.username,
      bio: user.bio,
      email: user.email,
    });
  }, [user]);

  useEffect(() => {
    isLoggedIn || router.push("/");
  }, [isLoggedIn]);

  return (
    <S.Wrapper>
      <h1>Your Settings</h1>
      <form onSubmit={requestUpdate}>
        <S.Input
          name={"image"}
          value={image}
          onChange={handleChange}
          placeholder={"URL of profile picture"}
        />
        <S.Input
          name={"username"}
          value={username}
          onChange={handleChange}
          placeholder={"Username"}
        />
        <S.TextArea
          name={"bio"}
          value={bio}
          onChange={handleChange}
          placeholder={"Please introduce yourself!"}
        />
        <S.Input
          name={"email"}
          value={email}
          onChange={handleChange}
          placeholder={"Email"}
        />
        <S.Input
          name={"password"}
          value={password}
          onChange={handleChange}
          placeholder={"New Password"}
        />
        <Button type="submit">Update Settings</Button>
      </form>
      <Button type="button" onClick={() => dispatch(logoutRequest())}>
        Logout
      </Button>
    </S.Wrapper>
  );
}

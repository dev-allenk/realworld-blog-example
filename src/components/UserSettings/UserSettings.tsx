import React, { useEffect } from "react";
import S from "./styles";
import Button from "../Button";
import useInput from "@hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { updateRequest, getRequest } from "@modules/user";
import { RootState } from "@modules";

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

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

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
      image: user.image!,
      username: user.username,
      bio: user.bio!,
      email: user.email,
    });
  }, [user]);

  //TODO: 비로그인 시 메인 페이지로 리디렉션
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
    </S.Wrapper>
  );
}

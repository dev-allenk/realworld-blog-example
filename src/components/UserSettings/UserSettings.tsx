import React from "react";
import S from "./styles";
import Button from "../Button";
import useInput from "../../hooks/useInput";

const initialValues = {
  image: "",
  username: "",
  bio: "",
  email: "",
  password: "",
};

export default function UserSettings() {
  const { inputValue, handleChange } = useInput(initialValues);
  const { image, username, bio, email, password } = inputValue;

  return (
    <S.Wrapper>
      <h1>Your Settings</h1>
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
        placeholder={"Password"}
      />
      <Button>Update Settings</Button>
    </S.Wrapper>
  );
}

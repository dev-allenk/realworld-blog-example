import React from "react";
import S from "./styles";
import Button from "../Button";

export default function UserSettings() {
  return (
    <S.Wrapper>
      <h1>Your Settings</h1>
      <S.Input placeholder={"URL of profile picture"} />
      <S.Input placeholder={"Username"} />
      <S.TextArea placeholder={"Please introduce yourself!"} />
      <S.Input placeholder={"Email"} />
      <S.Input placeholder={"Password"} />
      <Button>Update Settings</Button>
    </S.Wrapper>
  );
}

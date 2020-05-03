import React from "react";
import S from "./styles";
import Button from "@components/Button";

export default function Editor() {
  return (
    <S.Wrapper>
      <S.Input placeholder="Article Title" />
      <S.Input placeholder="What's this article about?" />
      <S.TextArea placeholder="Write your article (Markdown supported)" />
      <S.Input placeholder="Enter tags" />
      <Button>Publish Article</Button>
    </S.Wrapper>
  );
}

import React from "react";
import * as S from "./styles";

export default function Pagination() {
  return (
    <S.Wrapper>
      <S.Button>{"<"}</S.Button>
      <S.Button></S.Button>
      <S.Button></S.Button>
      <S.Button></S.Button>
      <S.Button></S.Button>
      <S.Button></S.Button>
      <S.Button>{">"}</S.Button>
    </S.Wrapper>
  );
}

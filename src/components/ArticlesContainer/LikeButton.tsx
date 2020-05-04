import React from "react";
import * as S from "./likeButtonStyles";

export default function LikeButton() {
  return (
    <S.Button>
      <S.Heart></S.Heart>
      <S.Span>0</S.Span>
    </S.Button>
  );
}

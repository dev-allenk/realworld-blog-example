import React, { useState } from "react";
import * as S from "./likeButtonStyles";

export default function LikeButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <S.Heart isHovered={isHovered}></S.Heart>
      <S.Span isHovered={isHovered}>0</S.Span>
    </S.Button>
  );
}

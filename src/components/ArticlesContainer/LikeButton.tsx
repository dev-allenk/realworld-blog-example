import React, { useState } from "react";
import * as S from "./likeButtonStyles";

interface Props {
  favorited: boolean;
  favoritesCount: number;
}

export default function LikeButton({
  favorited = false,
  favoritesCount = 0,
}: Props) {
  const [isHovered, setIsHovered] = useState(favorited);
  return (
    <S.Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <S.Heart isHovered={isHovered}></S.Heart>
      <S.Span isHovered={isHovered}>{favoritesCount}</S.Span>
    </S.Button>
  );
}

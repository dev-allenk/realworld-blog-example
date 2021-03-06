import React, { useState } from "react";
import * as S from "./likeButtonStyles";

interface Props {
  favorited: boolean;
  favoritesCount: number;
  onClick(): void;
}

export default function LikeButton({
  favorited = false,
  favoritesCount = 0,
  onClick,
}: Props) {
  const [isHovered, setIsHovered] = useState(favorited);
  return (
    <S.Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      favorited={favorited}
      isHovered={isHovered}
    >
      <S.Heart isHovered={isHovered} favorited={favorited}></S.Heart>
      <S.Span isHovered={isHovered} favorited={favorited}>
        {favoritesCount}
      </S.Span>
    </S.Button>
  );
}

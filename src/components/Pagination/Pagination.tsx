import React, { useState } from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@modules";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesCount = useSelector(
    (state: RootState) => state.article.articlesCount
  );
  const pageCount = Array(Math.floor(articlesCount / 10) + 1).fill(null);
  return (
    <S.Wrapper>
      <S.Button>{"<"}</S.Button>
      {pageCount.map((item, idx) => (
        <S.Button key={idx + 1} isActive={idx === currentPage}>
          {idx + 1}
        </S.Button>
      ))}
      <S.Button>{">"}</S.Button>
    </S.Wrapper>
  );
}

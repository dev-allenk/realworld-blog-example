import React, { useState } from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@modules";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination() {
  const { pathname, query } = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const articlesCount = useSelector(
    (state: RootState) => state.article.articlesCount
  );
  const pageCount = Array(Math.floor(articlesCount / 10) + 1).fill(null);

  const handleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(currentTarget.dataset.index));
  };
  return (
    <S.Wrapper>
      <S.Button>{"<"}</S.Button>
      {pageCount.map((item, idx) => (
        <Link key={idx + 1} href={`/?offset=${idx * 10}`} as={pathname}>
          <S.Button
            isActive={idx === currentPage}
            data-index={idx}
            onClick={handleClick}
          >
            {idx + 1}
          </S.Button>
        </Link>
      ))}
      <S.Button>{">"}</S.Button>
    </S.Wrapper>
  );
}

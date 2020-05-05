import React, { useMemo } from "react";
import * as S from "./styles";
import AuthorMeta from "@components/AuthorMeta";
import { useSelector } from "react-redux";
import { RootState } from "@modules";

export default function ArticleHeader() {
  const { article, isLoading } = useSelector(
    (state: RootState) => state.article
  );
  return (
    <S.HeaderWrapper>
      {!isLoading && (
        <>
          <S.Title>{article.title}</S.Title>
          <AuthorMeta
            src={article.author?.image}
            username={article.author?.username}
            createdAt={article.createdAt}
          />
        </>
      )}
    </S.HeaderWrapper>
  );
}

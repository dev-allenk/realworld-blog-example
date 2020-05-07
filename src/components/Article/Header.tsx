import React from "react";
import * as S from "./styles";
import AuthorMeta from "@components/AuthorMeta";
import { useSelector } from "react-redux";
import { RootState } from "@modules";
import Loader from "@components/Loader";
import { Container } from "@components/Layout/Container";

export default function ArticleHeader() {
  const { article, isLoading } = useSelector(
    (state: RootState) => state.article
  );
  return (
    <S.HeaderWrapper>
      {isLoading ? (
        <Loader size={60} />
      ) : (
        <S.HeaderInnerWrapper>
          <S.Title>{article.title}</S.Title>
          <AuthorMeta
            src={article.author?.image}
            username={article.author?.username}
            createdAt={article.createdAt}
          />
        </S.HeaderInnerWrapper>
      )}
    </S.HeaderWrapper>
  );
}

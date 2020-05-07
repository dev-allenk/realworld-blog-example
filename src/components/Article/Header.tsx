import React from "react";
import * as S from "./styles";
import AuthorMeta from "@components/AuthorMeta";
import { useSelector } from "react-redux";
import { RootState } from "@modules";
import Loader from "@components/Loader";
import { ButtonWithIcon } from "@components/Button";
import { RED_DARK } from "@constants/colors";

export default function ArticleHeader() {
  const { article, isLoading, username } = useSelector(
    ({ article, auth }: RootState) => ({
      article: article.article,
      isLoading: article.isLoading,
      username: auth.username,
    })
  );
  const isMyArticle = username === article.author?.username;
  return (
    <S.HeaderWrapper>
      {isLoading ? (
        <Loader size={60} />
      ) : (
        <S.HeaderInnerWrapper>
          <S.Title>{article.title}</S.Title>
          <S.MetaWrapper>
            <AuthorMeta
              src={article.author?.image}
              username={article.author?.username}
              createdAt={article.createdAt}
            />
            {isMyArticle && (
              <S.ButtonWrapper>
                <ButtonWithIcon pencil>Edit Article</ButtonWithIcon>
                <ButtonWithIcon trashCan color={RED_DARK}>
                  Delete Article
                </ButtonWithIcon>
              </S.ButtonWrapper>
            )}
          </S.MetaWrapper>
        </S.HeaderInnerWrapper>
      )}
    </S.HeaderWrapper>
  );
}

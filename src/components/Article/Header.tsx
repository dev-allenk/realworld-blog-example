import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import * as S from "./styles";
import { RootState } from "@modules";
import { deleteArticle, resetStatus } from "@modules/article";
import { ButtonWithIcon } from "@components/Button";
import AuthorMeta from "@components/AuthorMeta";
import Loader from "@components/Loader";
import Modal from "@components/Modal";
import path from "@constants/routingPaths";
import { RED_DARK } from "@constants/colors";

const DELETE_COMFIRM_MESSAGE = "정말 삭제하시겠어요?";
const DELETE_FAILURE_MESSAGE =
  "삭제 과정에서 에러가 발생했습니다. 잠시 후에 다시 시도해주세요.";

export default function ArticleHeader() {
  const {
    article,
    isLoading,
    isInitialRendering,
    error,
    username,
  } = useSelector(({ article, auth }: RootState) => ({
    article: article.article,
    isLoading: article.isLoading,
    isInitialRendering: article.isInitialRendering,
    error: article.error,
    username: auth.username,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isInitialRendering) return;
    error ? alert(DELETE_FAILURE_MESSAGE) : router.push("/");
    return () => {
      dispatch(resetStatus());
    };
  }, [error, isInitialRendering]);

  const isMyArticle = username === article.author?.username;

  const handleClick = async () => {
    if (confirm(DELETE_COMFIRM_MESSAGE)) {
      dispatch(deleteArticle.request(article.slug));
    }
  };
  return (
    <S.HeaderWrapper>
      {isLoading ? (
        <Modal>
          <Loader size={60} color="#ffffff" />
        </Modal>
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
                <Link href={path.editor} as={path.editorAs(article.slug)}>
                  <a>
                    <ButtonWithIcon pencil>Edit Article</ButtonWithIcon>
                  </a>
                </Link>
                <ButtonWithIcon trashCan color={RED_DARK} onClick={handleClick}>
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

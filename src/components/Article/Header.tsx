import React, { useMemo, useRef } from "react";
import * as S from "./styles";
import AuthorMeta from "@components/AuthorMeta";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@modules";
import Loader from "@components/Loader";
import { ButtonWithIcon } from "@components/Button";
import { RED_DARK } from "@constants/colors";
import Link from "next/link";
import path from "@constants/routingPaths";
import { deleteArticle } from "@modules/article";
import Modal from "@components/Modal";
import { useRouter } from "next/router";
import { TArticle } from "@types";

const DELETE_COMFIRM_MESSAGE = "정말 삭제하시겠어요?";
const DELETE_FAILURE_MESSAGE =
  "삭제 과정에서 에러가 발생했습니다. 잠시 후에 다시 시도해주세요.";

export default function ArticleHeader() {
  const { article, isLoading, isDeleting, error, username } = useSelector(
    ({ article, auth }: RootState) => ({
      article: article.article,
      isLoading: article.isLoading,
      isDeleting: article.isDeleting,
      error: article.error,
      username: auth.username,
    })
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const articleRef = useRef<TArticle | null>(null);
  useMemo(() => (articleRef.current = article), [article]);

  const isMyArticle = username === article.author?.username;

  const handleClick = () => {
    if (confirm(DELETE_COMFIRM_MESSAGE)) {
      dispatch(deleteArticle.request(article.slug));

      articleRef.current?.slug
        ? router.push("/")
        : alert(DELETE_FAILURE_MESSAGE);
    }
  };
  return (
    <S.HeaderWrapper>
      {isDeleting && (
        <Modal>
          <Loader size={60} color="#ffffff" />
        </Modal>
      )}
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

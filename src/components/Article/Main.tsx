import React, { useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getSingleArticle, resetStatus } from "@modules/article";
import { useRouter } from "next/router";
import { RootState } from "@modules";
import ReactMarkDown from "react-markdown";

export default function Main() {
  const { asPath } = useRouter();
  const slug = asPath.replace("/article/", "");

  const { article } = useSelector((state: RootState) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    if (article.body) return;
    dispatch(getSingleArticle.request(slug));
    return () => {
      dispatch(resetStatus());
    };
  }, []);

  return (
    <S.Wrapper>
      <ReactMarkDown>{article.body}</ReactMarkDown>
      <S.HorizontalLine />
    </S.Wrapper>
  );
}

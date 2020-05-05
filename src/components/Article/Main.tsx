import React, { useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getSingleArticle } from "@modules/article";
import { useRouter } from "next/router";
import { RootState } from "@modules";

export default function Main() {
  const { asPath } = useRouter();
  const slug = asPath.replace("/article/", "");

  const { article } = useSelector((state: RootState) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleArticle.request(slug));
  }, []);

  return <S.Wrapper>{article.body}</S.Wrapper>;
}

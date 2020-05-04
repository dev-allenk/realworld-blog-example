import React, { useEffect } from "react";
import ArticlePreview from "./ArticlePreview";
import S from "./styles";
import FeedNav from "./FeedNav";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "@modules/article";
import { RootState } from "@modules";

export default function ArticlesContainer() {
  const articles = useSelector(
    (state: RootState) => state.article.articles || []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  return (
    <S.Container>
      <FeedNav />
      <S.PreviewContainer>
        {articles.map((article) => (
          <ArticlePreview key={article.slug} {...article} />
        ))}
      </S.PreviewContainer>
    </S.Container>
  );
}

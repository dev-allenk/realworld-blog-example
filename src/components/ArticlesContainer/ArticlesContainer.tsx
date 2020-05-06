import React, { useEffect } from "react";
import ArticlePreview from "./ArticlePreview";
import S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "@modules/article";
import { RootState } from "@modules";
import { useRouter } from "next/router";

export default function ArticlesContainer() {
  const router = useRouter();
  const { pathname, query } = router;
  const articles = useSelector(
    (state: RootState) => state.article.articles || []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query.follow) {
      dispatch(
        getRequest({
          shouldGetFeeds: false,
          query: { offset: query.offset as string, limit: "10" },
        })
      );
    }
    dispatch(getRequest({ shouldGetFeeds: true, query: { limit: "10" } }));
  }, [query]);

  return (
    <S.Container>
      <S.PreviewContainer>
        {articles.map((article) => (
          <ArticlePreview key={article.slug} {...article} />
        ))}
      </S.PreviewContainer>
    </S.Container>
  );
}

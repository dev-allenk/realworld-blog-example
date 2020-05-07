import React, { useEffect } from "react";
import ArticlePreview from "./ArticlePreview";
import S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "@modules/article";
import { RootState } from "@modules";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Loader from "@components/Loader";

export default function ArticlesContainer() {
  const router = useRouter();
  const { pathname, query } = router;
  const { articles, isLoading } = useSelector((state: RootState) => ({
    isLoading: state.article.isLoading,
    articles: state.article.articles || [],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.favorited) {
      dispatch(
        getRequest({ shouldGetFeeds: false, query: queries.favorited(query) })
      );
      return;
    }
    if (query.follow) {
      dispatch(
        getRequest({ shouldGetFeeds: true, query: queries.follow(query) })
      );
      return;
    }
    dispatch(
      getRequest({ shouldGetFeeds: false, query: { ...query, limit: "10" } })
    );
  }, [query]);

  const queries = {
    favorited: ({ author, ...restQueries }: ParsedUrlQuery) => ({
      ...restQueries,
      limit: "10",
    }),
    follow: ({ follow, ...restQueries }: ParsedUrlQuery) => ({
      ...restQueries,
      limit: "10",
    }),
  };
  return (
    <S.Container>
      {isLoading ? (
        <Loader size={80} />
      ) : (
        <S.PreviewContainer>
          {articles.map((article) => (
            <ArticlePreview key={article.slug} {...article} />
          ))}
        </S.PreviewContainer>
      )}
    </S.Container>
  );
}

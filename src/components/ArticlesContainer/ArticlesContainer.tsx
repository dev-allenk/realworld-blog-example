import React, { useEffect } from "react";
import ArticlePreview from "./ArticlePreview";
import S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "@modules/article";
import { RootState } from "@modules";
import { useRouter } from "next/router";
import { isEmpty } from "@utils";

export default function ArticlesContainer() {
  const router = useRouter();
  const { pathname, query } = router;
  const articles = useSelector(
    (state: RootState) => state.article.articles || []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(query)) {
      dispatch(getRequest({ shouldGetFeeds: false }));
    }
    dispatch(getRequest({ shouldGetFeeds: true }));
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

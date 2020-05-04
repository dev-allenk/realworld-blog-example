import React from "react";
import ArticlePreview from "./ArticlePreview";
import S from "./styles";
import FeedNav from "./FeedNav";

const articles = ["123", "123", "123", "123"];

export default function ArticlesContainer() {
  return (
    <S.Container>
      <FeedNav />
      <S.PreviewContainer>
        {articles.map((item) => (
          <ArticlePreview />
        ))}
      </S.PreviewContainer>
    </S.Container>
  );
}

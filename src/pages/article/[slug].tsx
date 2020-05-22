import React from "react";
import Article from "@components/Article";
import { TArticle } from "@types";
import api from "@api";
import { GetStaticPaths } from "next";
import { wrapper } from "src/store";
import { getSingleArticle } from "@modules/article";
import { END } from "redux-saga";

const ArticlePage = () => {
  return (
    <>
      <Article.Header />
      <Article.Main />
    </>
  );
};
export default ArticlePage;

async function getArticleSlugs() {
  const res = await api.getArticles({ limit: "10" });
  const { articles } = await res.json();
  return articles.map((article: TArticle) => ({
    params: {
      slug: article.slug,
    },
  }));
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getArticleSlugs();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    store.dispatch(getSingleArticle.request(params?.slug as string));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

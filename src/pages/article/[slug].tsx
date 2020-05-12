import React, { useMemo } from "react";
import Article from "@components/Article";
import { TArticle } from "@types";
import api from "@api";
import { GetStaticPaths, NextPage } from "next";
import { wrapper } from "src/store";
import { useDispatch } from "react-redux";
import { setArticle } from "@modules/article";

interface Props {
  [idx: string]: any;
  article: TArticle;
}

const ArticlePage: NextPage<Props> = (props: Props) => {
  const dispatch = useDispatch();
  useMemo(() => dispatch(setArticle(props.article)), [props]);
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
    fallback: false,
  };
};

async function getArticleData(slug: string) {
  const res = await api.getSingleArticle(slug);
  const { article } = await res.json();
  return article;
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ params }: any) => {
    const article = await getArticleData(params?.slug as string);
    return {
      props: {
        article,
      },
    };
  }
);

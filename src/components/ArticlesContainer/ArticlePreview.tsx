import React from "react";
import S from "./styles";
import LikeButton from "./LikeButton";
import { TArticle } from "@types";
import AuthorMeta from "@components/AuthorMeta";
import path from "@constants/routingPaths";
import Link from "next/link";

export default function ArticlePreview(props: TArticle) {
  const {
    slug,
    title,
    description,
    body,
    tagList,
    createdAt,
    updatedAt,
    favorited,
    favoritesCount,
    author: { username, bio, image, following },
  } = props;
  return (
    <S.PreviewItemWrapper>
      <S.Header>
        <AuthorMeta src={image} username={username} createdAt={createdAt} />
        <LikeButton favorited={favorited} favoritesCount={favoritesCount} />
      </S.Header>
      <Link href={path.article} as={path.articleAs(slug)}>
        <S.Link>
          <S.Title>{title}</S.Title>
          <S.Desc>{description}</S.Desc>
          <S.ReadMore>Read more...</S.ReadMore>
        </S.Link>
      </Link>
    </S.PreviewItemWrapper>
  );
}

import React from "react";
import S from "./styles";
import LikeButton from "./LikeButton";
import { TArticle } from "@types";
import AuthorMeta from "@components/AuthorMeta";
import path from "@constants/routingPaths";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { favoriteArticle } from "@modules/article";

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

  const dispatch = useDispatch();

  const updateFavorite = () => {
    dispatch(favoriteArticle.request(slug));
  };

  return (
    <S.PreviewItemWrapper>
      <S.Header>
        <AuthorMeta src={image} username={username} createdAt={createdAt} />
        <LikeButton
          favorited={favorited}
          favoritesCount={favoritesCount}
          onClick={updateFavorite}
        />
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

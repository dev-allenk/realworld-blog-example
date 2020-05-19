import React, { useState } from "react";
import S from "./styles";
import LikeButton from "./LikeButton";
import { TArticle } from "@types";
import AuthorMeta from "@components/AuthorMeta";
import path from "@constants/routingPaths";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { favoriteArticle } from "@modules/article";

interface TFavoriteState {
  viewerHasFavorited: boolean;
  count: number;
}

const update = (state: TFavoriteState): TFavoriteState => {
  const prevFavoritedStatus = state.viewerHasFavorited;
  return {
    viewerHasFavorited: !prevFavoritedStatus,
    count: prevFavoritedStatus ? state.count - 1 : state.count + 1,
  };
};

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

  const [favorite, setFavorite] = useState<TFavoriteState>({
    viewerHasFavorited: favorited,
    count: favoritesCount,
  });

  const dispatch = useDispatch();

  const updateFavorite = () => {
    //TODO: 비로그인 시 로그인 필요하다는 toast ui 띄우기
    setFavorite(update);
    dispatch(favoriteArticle.request(slug));
  };

  return (
    <S.PreviewItemWrapper>
      <S.Header>
        <AuthorMeta src={image} username={username} createdAt={createdAt} />
        <LikeButton
          favorited={favorite.viewerHasFavorited}
          favoritesCount={favorite.count}
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

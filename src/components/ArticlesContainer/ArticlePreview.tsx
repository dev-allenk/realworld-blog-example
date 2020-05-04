import React from "react";
import S from "./styles";
import ProfileImage from "@components/ProfileImage";
import LikeButton from "./LikeButton";
import { TArticle } from "@types";

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
        <S.Meta>
          <ProfileImage small src={image} />
          <S.MetaInfo>
            <S.Username>{username}</S.Username>
            <S.Date>{createdAt.split("T")[0]}</S.Date>
          </S.MetaInfo>
        </S.Meta>
        <LikeButton favorited={favorited} favoritesCount={favoritesCount} />
      </S.Header>
      <a>
        <S.Title>{title}</S.Title>
        <S.Desc>{description}</S.Desc>
        <S.ReadMore>Read more...</S.ReadMore>
      </a>
    </S.PreviewItemWrapper>
  );
}

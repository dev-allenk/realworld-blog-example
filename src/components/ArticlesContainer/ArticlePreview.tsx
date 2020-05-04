import React from "react";
import S from "./styles";
import ProfileImage from "@components/ProfileImage";
import LikeButton from "./LikeButton";

export default function ArticlePreview() {
  return (
    <S.PreviewItemWrapper>
      <S.Header>
        <S.Meta>
          <ProfileImage small />
          <S.MetaInfo>
            <S.Username>username</S.Username>
            <S.Date>date</S.Date>
          </S.MetaInfo>
        </S.Meta>
        <LikeButton />
      </S.Header>
      <a>
        <S.Title>title</S.Title>
        <S.Desc>desc</S.Desc>
        <S.ReadMore>Reac more...</S.ReadMore>
      </a>
    </S.PreviewItemWrapper>
  );
}

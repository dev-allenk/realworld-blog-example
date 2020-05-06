import React from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";

interface Props {
  src: string;
  username: string;
  createdAt: string;
}

export default function AuthorMeta({ src, username, createdAt = "" }: Props) {
  return (
    <S.Meta>
      <ProfileImage small src={src} />
      <S.MetaInfo>
        <S.Username>{username}</S.Username>
        <S.Date>{createdAt?.split("T")[0]}</S.Date>
      </S.MetaInfo>
    </S.Meta>
  );
}

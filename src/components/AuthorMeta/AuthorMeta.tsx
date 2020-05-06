import React from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";
import Link from "next/link";
import path from "@constants/routingPaths";

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
        <Link href={path.profile} as={path.profileAs(username)}>
          <S.Username>{username}</S.Username>
        </Link>
        <S.Date>{createdAt?.split("T")[0]}</S.Date>
      </S.MetaInfo>
    </S.Meta>
  );
}

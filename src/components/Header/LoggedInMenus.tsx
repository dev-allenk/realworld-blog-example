import React from "react";
import S from "./styles";
import Link from "next/link";
import path from "@constants/routingPaths";

export default function LoggedInMenus({ username }: { username: string }) {
  return (
    <S.LinkWrapper>
      <Link href={path.newArticle}>
        <S.Link>New Article</S.Link>
      </Link>
      <Link href={path.settings}>
        <S.Link>Settings</S.Link>
      </Link>
      <Link href={path.profile} as={path.profileAs(username)}>
        <S.Link>{username}</S.Link>
      </Link>
    </S.LinkWrapper>
  );
}

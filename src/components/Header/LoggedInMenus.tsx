import React from "react";
import S from "./styles";
import Link from "next/link";

export default function LoggedInMenus({ username }: { username: string }) {
  return (
    <S.LinkWrapper>
      <Link href={"/editor/new"}>
        <S.Link>New Article</S.Link>
      </Link>
      <Link href={"/user/settings"}>
        <S.Link>Settings</S.Link>
      </Link>
      <Link href={"/profile"}>
        <S.Link>{username}</S.Link>
      </Link>
    </S.LinkWrapper>
  );
}

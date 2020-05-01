import React from "react";
import S from "./styles";
import Link from "next/link";
import path from "../../constants/routingPaths";

export default function LoggedOutMenus() {
  return (
    <S.LinkWrapper>
      <Link href={path.login}>
        <S.Link>Sign in</S.Link>
      </Link>
      <Link href={path.register}>
        <S.Link>Sign up</S.Link>
      </Link>
    </S.LinkWrapper>
  );
}

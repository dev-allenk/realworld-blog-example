import React from "react";
import S from "./styles";
import Link from "next/link";

export default function LoggedOutMenus() {
  return (
    <S.LinkWrapper>
      <Link href={"/user/login"}>
        <S.Link>Sign in</S.Link>
      </Link>
      <Link href={"/user/register"}>
        <S.Link>Sign up</S.Link>
      </Link>
    </S.LinkWrapper>
  );
}

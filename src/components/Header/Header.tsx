import React from "react";
import Link from "next/link";
import S from "./styles";

function Header() {
  return (
    <S.Wrapper>
      <Link href={"/"}>
        <S.Title>Mebium</S.Title>
      </Link>
      <S.LinkWrapper>
        <Link href={"/login"} as={"/user/login"}>
          <S.Link>Sign in</S.Link>
        </Link>
        <Link href={"/register"} as={"/user/register"}>
          <S.Link>Sign up</S.Link>
        </Link>
      </S.LinkWrapper>
    </S.Wrapper>
  );
}

export default Header;

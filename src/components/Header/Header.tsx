import React from "react";
import S from "./styles";

function Header() {
  return (
    <S.Wrapper>
      <S.Title>Mebium</S.Title>
      <S.LinkWrapper>
        <S.Link>Sign in</S.Link>
        <S.Link>Sign up</S.Link>
      </S.LinkWrapper>
    </S.Wrapper>
  );
}

export default Header;

import React from "react";
import Link from "next/link";
import S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import LoggedOutMenus from "./LoggedOutMenus";
import LoggedInMenus from "./LoggedInMenus";

function Header() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <S.Wrapper>
      <Link href={"/"}>
        <S.Title>Mebium</S.Title>
      </Link>
      {isLoggedIn ? <LoggedInMenus /> : <LoggedOutMenus />}
    </S.Wrapper>
  );
}

export default Header;

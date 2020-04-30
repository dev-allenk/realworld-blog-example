import React from "react";
import Link from "next/link";
import S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import LoggedOutMenus from "./LoggedOutMenus";
import LoggedInMenus from "./LoggedInMenus";

function Header() {
  const { isLoggedIn, username } = useSelector((state: RootState) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
  }));
  return (
    <S.Wrapper>
      <Link href={"/"}>
        <S.Title>Mebium</S.Title>
      </Link>
      {isLoggedIn ? <LoggedInMenus username={username} /> : <LoggedOutMenus />}
    </S.Wrapper>
  );
}

export default Header;

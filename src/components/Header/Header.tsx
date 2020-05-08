import React, { useEffect } from "react";
import Link from "next/link";
import S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@modules";
import LoggedOutMenus from "./LoggedOutMenus";
import LoggedInMenus from "./LoggedInMenus";
import { loginCheck } from "@modules/auth";

function Header() {
  const { isLoggedIn, username } = useSelector((state: RootState) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCheck.request());
  }, []);
  return (
    <S.Wrapper>
      <Link href={"/"}>
        <S.Title>Wedium</S.Title>
      </Link>
      {isLoggedIn ? <LoggedInMenus username={username} /> : <LoggedOutMenus />}
    </S.Wrapper>
  );
}

export default Header;

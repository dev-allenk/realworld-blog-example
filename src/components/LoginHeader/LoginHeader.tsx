import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import S from "./styles";
import path from "../../constants/routingPaths";

export default function LoginHeader() {
  const router = useRouter();
  const isLoginPage = router.pathname.includes("login");

  const { title, href, texts } = isLoginPage
    ? {
        title: "Sign In",
        href: path.register,
        texts: "Need an account?",
      }
    : {
        title: "Sign Up",
        href: path.login,
        texts: "Have an account?",
      };

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <Link href={href}>
        <S.Link>{texts}</S.Link>
      </Link>
    </S.Wrapper>
  );
}

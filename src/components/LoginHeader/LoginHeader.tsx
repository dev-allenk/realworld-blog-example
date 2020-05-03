import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import S from "./styles";

export default function LoginHeader() {
  const router = useRouter();
  const isLoginPage = router.pathname.includes("login");

  const { title, href, hrefAs, texts } = isLoginPage
    ? {
        title: "Sign In",
        href: "/signup",
        hrefAs: "/user/signup",
        texts: "Need an account?",
      }
    : {
        title: "Sign Up",
        href: "/signin",
        hrefAs: "/user/signin",
        texts: "Have an account?",
      };

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <Link href={href} as={hrefAs}>
        <S.Link>{texts}</S.Link>
      </Link>
    </S.Wrapper>
  );
}

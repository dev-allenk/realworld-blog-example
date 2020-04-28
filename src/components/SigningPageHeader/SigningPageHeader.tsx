import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import S from "./styles";

export default function SigningPageHeader() {
  const router = useRouter();
  const isSignupPage = router.pathname.includes("signup");

  const { title, href, hrefAs, texts } = isSignupPage
    ? {
        title: "Sign Up",
        href: "/signin",
        hrefAs: "/user/signin",
        texts: "Have an account?",
      }
    : {
        title: "Sign In",
        href: "/signup",
        hrefAs: "/user/signup",
        texts: "Need an account?",
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

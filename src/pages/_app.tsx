import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'NanumSquare', sans-serif !important;
  }`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

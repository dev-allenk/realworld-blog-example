import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "@components/Header";

import App, { AppInitialProps } from "next/app";
import { wrapper } from "../store";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'NanumSquare', sans-serif !important;
  }`;

class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);

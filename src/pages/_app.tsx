import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import App, { AppContext } from "next/app";
import { Provider } from "react-redux";
import { makeStore } from "../store";
import { RootState } from "../modules";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'NanumSquare', sans-serif !important;
  }`;

class MyApp extends App<ReduxWrapperAppProps<RootState>> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = (await Component.getInitialProps?.(ctx)) || {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);

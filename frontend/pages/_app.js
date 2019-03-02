import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import GlobalStyle from "../components/styles/global";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,600,800"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;

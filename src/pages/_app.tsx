import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { useApollo } from '../utils/apollo';

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Dashboard</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

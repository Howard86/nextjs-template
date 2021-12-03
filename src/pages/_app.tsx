import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';

import store from '@/redux/store';
import theme from '@/theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Next App</title>
      <link href="/favicon.ico" rel="icon" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width"
        name="viewport"
      />
    </Head>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  </>
);

export default App;

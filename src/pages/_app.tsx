import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalProviders from '@/components/GlobalProviders';

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
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  </>
);

export default App;

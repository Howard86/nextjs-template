import React from 'react';

import type { AppProps } from 'next/app';

import GlobalProviders from '@/common/components/GlobalProviders';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../../mocks');
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <GlobalProviders>
    <Component {...pageProps} />
  </GlobalProviders>
);

export default App;

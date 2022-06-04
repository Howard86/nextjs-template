import React from 'react';

import type { AppProps } from 'next/app';

import GlobalProviders from '@/common/components/GlobalProviders';
import { isApiMocked } from '@/common/config';

if (isApiMocked) {
  require('../../mocks');
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <GlobalProviders>
    <Component {...pageProps} />
  </GlobalProviders>
);

export default App;

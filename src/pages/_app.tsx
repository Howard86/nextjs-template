import { Provider as ReduxProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import store from '@/app/redux/store';
import theme from '@/app/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

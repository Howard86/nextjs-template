import React, { ChildrenProps } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '@/app/redux/store';
import theme from '@/app/theme';

const GlobalProviders = ({ children }: ChildrenProps) => (
  <ReduxProvider store={store}>
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  </ReduxProvider>
);

export default GlobalProviders;

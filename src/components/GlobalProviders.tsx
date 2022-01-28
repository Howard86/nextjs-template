import React, { ReactNode } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import { Provider as ReduxProvider } from 'react-redux';

import store from '@/redux/store';
import theme from '@/theme';

interface GlobalProvidersProps {
  children: ReactNode;
}

const GlobalProviders = ({ children }: GlobalProvidersProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </ReduxProvider>
);

export default GlobalProviders;

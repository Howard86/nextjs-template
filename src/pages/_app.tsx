import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'

import store from '@/common/redux/store'
import theme from '@/common/theme'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  )
}

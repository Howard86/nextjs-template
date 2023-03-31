import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import type { ChildrenProps } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { configureAppStore, type RootState } from '@/common/redux/store'

export type AppRenderOption = Parameters<typeof render>[1] & {
  preloadedState?: DeepPartial<RootState>
}

export const appRender = (
  ui: JSX.Element,
  { preloadedState, ...options }: AppRenderOption = {}
) => {
  function AppProvider({ children }: ChildrenProps) {
    return (
      <ReduxProvider store={configureAppStore(preloadedState)}>
        <ChakraProvider>{children}</ChakraProvider>
      </ReduxProvider>
    )
  }

  return render(ui, { wrapper: AppProvider, ...options })
}

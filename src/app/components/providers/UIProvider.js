'use client'

import { extendTheme } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
const customTheme = extendTheme({
  colors: {
    text: {
      default: '#2167ae',
      _dark: '#ade3b8'
    },
    primary: {
      default: '#FF0080',
      _dark: '#fbec8f'
    }
  }
})
const UIProvider = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider >
  )
}
export default UIProvider;
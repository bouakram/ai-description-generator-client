import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../config/themeconfg'

type ChakraProvidersPropsType = {
  children: React.ReactNode
}

const ChakraProviders = ({ children }: ChakraProvidersPropsType) => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}

export default ChakraProviders
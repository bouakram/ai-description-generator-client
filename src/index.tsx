import React from 'react';
import ReactDOM from 'react-dom/client';

// * dependencies 
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './config/themeconfg'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// * pages
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

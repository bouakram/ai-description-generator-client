import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ColorModeScript } from '@chakra-ui/react'
import theme from './config/themeconfg'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App';
import cookie from 'react-cookies'
import Home from './pages/home/homePage';
import Welcome from './pages/welcome/welcomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const TOKEN = cookie.load('token')
console.log(TOKEN)

const router = createBrowserRouter([
  {
    path: "/",
    // element: TOKEN ? <App /> : <Welcome />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

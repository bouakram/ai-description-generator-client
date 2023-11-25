import React from 'react';
import ReactDOM from 'react-dom/client';
// * providers
import ChakraProviders from './providers/ChakraProviders';
import ReactQueryProviders from './providers/ReactQueryProviders';

// * pages
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProviders>
      <ReactQueryProviders>
        <App />
      </ReactQueryProviders>
    </ChakraProviders>
  </React.StrictMode>
);

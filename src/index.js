import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>

    <App />,
    <Navbar/>,
    <Hero/>
    </ChakraProvider>
  </React.StrictMode>
);


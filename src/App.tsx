import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { extendTheme } from '@chakra-ui/react';
import '../index.css';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#BCFF87',
      200: '#A5F171',
      300: '#8EDA5C',
      400: '#78C446',
      500: '#61AD31',
      600: '#4A9818',
      700: '#338300',
      800: '#176E00',
      900: '#005A00',
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path={'/dashboard'} element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { extendTheme } from '@chakra-ui/react';
import '../index.css';
import History from './pages/history/History';
import { UserRoute, AdminRoute } from './components/ProtectedRoute';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Book from './pages/book/Book';
import Booking from './pages/booking/Booking';

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
          <Route element={<UserRoute />}>
            <Route path={'/home'} element={<Dashboard />} />
            <Route path={'/history:id'} element={<History />} />
            <Route path={'/books/:id'} element={<Book />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path={'/admin'} element={<AdminDashboard />} />
            <Route path={'/admin/books'} element={<Dashboard />} />
            <Route path={'/admin/books/:id'} element={<Book />} />
            <Route path={'/admin/bookings'} element={<Booking />} />
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

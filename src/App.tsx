import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { extendTheme } from '@chakra-ui/react';
import '../index.css';
import { UserRoute, AdminRoute } from './components/ProtectedRoute';
import Layout from './components/Layout';
import AdminContent from './components/dashboard/AdminContent';
import MyBooks from './components/bookRegistration/MyBooksUI';
import BookUI from './components/bookRegistration/BookUI';
import BookingUI from './components/booking/BookingUI';
import Content from './components/dashboard/Content';
import BookedBooks from './components/booking/BookedBooks';

const queryClient = new QueryClient();
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
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
});

const App = () => {
  // getting Chakra theme and setting it to the ChakraProvider component
  // also setting the routes for the application
  // if the user is logged in then only he can access the books page
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<UserRoute />}>
              <Route element={<Layout />}>
                <Route path={'/home'} element={<Content />} />
                <Route path={'/home/books/:id'} element={<BookUI />} />
                <Route path={'/mybooks'} element={<MyBooks />} />
                <Route path={'/mybooks/:id'} element={<BookedBooks />} />
                <Route path={'*'} element={<h1>404</h1>} />
              </Route>
            </Route>
            <Route element={<AdminRoute />}>
              <Route element={<Layout />}>
                <Route path={'/admin'} element={<AdminContent />} />
                <Route path={'/admin/books'} element={<Content />} />
                <Route path={'/admin/books/:id'} element={<BookUI />} />
                <Route path={'/admin/bookings'} element={<BookingUI />} />
                <Route path={'*'} element={<h1>404</h1>} />
              </Route>
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={'*'} element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;

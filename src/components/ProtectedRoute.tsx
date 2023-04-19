import React, { useEffect, useMemo, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from '../store/store';
import { useGetBooksQuery } from '../slice/api/books/bookApiSlice';
import { addBook } from '../slice/api/books/bookSlice';
import { Spinner } from '@chakra-ui/react';

const UserRoute = () => {
  // getting authdata from the local storage and also getting cookies
  const [cookies] = useCookies(['user']);
  const authdata = JSON.parse(localStorage.getItem('authdata'));
  // getting all books from the database
  // adding all books to the redux store

  // if the user is logged in then only he can access the books page
  if (cookies.user && cookies.user[1] === true && cookies.user[0] === 'user') {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

const AdminRoute = () => {
  // getting authdata from the local storage and also getting cookies
  const [cookies] = useCookies(['user']);
  // getting all books from the database

  // if the user is logged in then only he can access the books page
  if (cookies.user[1] === true && cookies.user[0] === 'admin') {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export { UserRoute, AdminRoute };

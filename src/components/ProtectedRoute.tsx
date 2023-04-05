import React, { useEffect, useMemo, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from '../store/store';
import { useGetBooksQuery } from '../books/bookApiSlice';
import { addBook } from '../books/bookSlice';
import { Spinner } from '@chakra-ui/react';

const UserRoute = () => {
  // getting authdata from the local storage and also getting cookies
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['user']);
  const authdata = JSON.parse(localStorage.getItem('authdata'));
  // getting all books from the database
  const { data: allbooks } = useGetBooksQuery(null);
  // adding all books to the redux store
  useEffect(() => {
    if (allbooks) {
      dispatch(addBook(allbooks));
    }
  }, [allbooks]);
  // if the user is logged in then only he can access the books page
  if (cookies.user && cookies.user[1] === true && cookies.user[0] === 'user') {
    dispatch({ type: 'auth/login', payload: authdata });
    return <>{allbooks === undefined ? <Spinner /> : <Outlet />}</>;
  } else {
    return <Navigate to="/" />;
  }
};

const AdminRoute = () => {
  // getting authdata from the local storage and also getting cookies
  const [cookies] = useCookies(['user']);
  const dispatch = useAppDispatch();
  const authdata = JSON.parse(localStorage.getItem('authdata'));
  // getting all books from the database
  const { data: allbooks } = useGetBooksQuery(null);
  // adding all books to the redux store
  useEffect(() => {
    if (allbooks) {
      dispatch(addBook(allbooks));
    }
  }, [allbooks]);
  // if the user is logged in then only he can access the books page
  if (cookies.user[1] === true && cookies.user[0] === 'admin') {
    dispatch({ type: 'auth/login', payload: authdata });

    return <>{allbooks === undefined ? <Spinner /> : <Outlet />}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export { UserRoute, AdminRoute };

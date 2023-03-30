import React, { useEffect, useMemo, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from '../store/store';
import { useGetBooksQuery } from '../books/bookApiSlice';
import { addBook } from '../books/bookSlice';
import { Spinner } from '@chakra-ui/react';

const UserRoute = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['user']);
  const authdata = JSON.parse(localStorage.getItem('authdata'));
  const { data: allbooks } = useGetBooksQuery(null);
  if (cookies.user[1] === true && cookies.user[0] === 'user') {
    dispatch({ type: 'auth/login', payload: authdata });

    useMemo(() => {
      if (allbooks) {
        dispatch(addBook(allbooks));
      }
    }, [allbooks]);
    return <>{allbooks === undefined ? <Spinner /> : <Outlet />}</>;
  } else {
    return <Navigate to="/" />;
  }
};

const AdminRoute = () => {
  const [cookies] = useCookies(['user']);
  const dispatch = useAppDispatch();
  const authdata = JSON.parse(localStorage.getItem('authdata'));
  const { data: allbooks } = useGetBooksQuery(null);
  if (cookies.user[1] === true && cookies.user[0] === 'admin') {
    dispatch({ type: 'auth/login', payload: authdata });
    useMemo(() => {
      if (allbooks) {
        dispatch(addBook(allbooks));
      }
    }, [allbooks]);

    return <>{allbooks === undefined ? <Spinner /> : <Outlet />}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export { UserRoute, AdminRoute };

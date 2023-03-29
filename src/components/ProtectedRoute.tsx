import React, { useEffect, Suspense } from 'react';
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
  if (cookies.user[1] === true && cookies.user[0] === 'user') {
    dispatch({ type: 'auth/login', payload: authdata });
    const { data: allbooks } = useGetBooksQuery(null);

    useEffect(() => {
      if (allbooks) {
        dispatch(addBook(allbooks));
      }
    }, [allbooks]);
    return (
      <>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

const AdminRoute = () => {
  const [cookies] = useCookies(['user']);
  const dispatch = useAppDispatch();
  const authdata = JSON.parse(localStorage.getItem('authdata'));
  if (cookies.user[1] === true && cookies.user[0] === 'admin') {
    dispatch({ type: 'auth/login', payload: authdata });
    const { data: allbooks } = useGetBooksQuery(null);
    useEffect(() => {
      if (allbooks) {
        dispatch(addBook(allbooks));
      }
    }, [allbooks]);
    console.log(allbooks);

    return <>{allbooks === undefined ? <Spinner /> : <Outlet />}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export { UserRoute, AdminRoute };

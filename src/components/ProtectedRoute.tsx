import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const UserRoute = () => {
  // getting authdata from the local storage and also getting cookies
  const [cookies] = useCookies(['user']);
  // getting all books from the database
  // adding all books to the redux store

  // if the user is logged in then only he can access the books page
  if (
    (cookies.user && cookies.user[1] === true && cookies.user[0] === 'user') ||
    cookies.user[0] === 'teacher'
  ) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

const AdminRoute = () => {
  // getting authdata from the local storage and also getting cookies
  const [cookies] = useCookies(['user']);
  // getting all books from the database
  console.log(cookies.user[0]);

  // if the user is logged in then only he can access the books page
  if (
    (cookies.user && cookies.user[1] === true && cookies.user[0] === 'admin') ||
    cookies.user[0] === 'superadmin'
  ) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export { UserRoute, AdminRoute };

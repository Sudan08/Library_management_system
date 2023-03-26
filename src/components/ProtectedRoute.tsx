import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const UserRoute = () => {
  const [cookies] = useCookies(['user']);
  if (cookies.user[1] === true && cookies.user[0] === 'user') {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

const AdminRoute = () => {
  const [cookies] = useCookies(['user']);
  if (cookies.user[1] === true && cookies.user[0] === 'admin') {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export { UserRoute, AdminRoute };

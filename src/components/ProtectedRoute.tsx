import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Dashboard from '../pages/dashboard/Dashboard';

const ProtectedRoute = () => {
  const [cookies] = useCookies(['user']);

  if (cookies.user === 'admin' && cookies.isAuthenticated === true) {
    return <Outlet />;
  } else if (cookies.user === 'user' && cookies.isAuthenticated === true) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;

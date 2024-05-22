import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // Check if the user is logged in (replace with your authentication logic)
  const isLoggedIn = localStorage.getItem('token');

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

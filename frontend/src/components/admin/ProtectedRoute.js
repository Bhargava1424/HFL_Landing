import React from 'react';
import { Navigate, Outlet, useLocation  } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('token');
  const location = useLocation(); 

  // Store the current path the user tried to access
  if (!isAuthenticated && location.pathname !== '/login') {
    localStorage.setItem('redirectPath', location.pathname); 
  }

  return isAuthenticated ? (
    <Outlet /> 
  ) : (
    <Navigate to="/login" replace /> 
  );
};

export default ProtectedRoute;
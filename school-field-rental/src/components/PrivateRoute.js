import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // or use Redux's useSelector

const PrivateRoute = ({ children, role }) => {
    const { user } = useAuth(); 

  
  if (!user) {
    return <Navigate to="./pages/login" />;
  }

  // If user role doesn't match, show access denied or redirect
  if (user.role !== role) {
    return <h1>Access Denied</h1>;
  }

  // If all checks pass, render the child component
  return children;
};

export default PrivateRoute;

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../contexts/user';

const ProtectedRoute = ({ children }) => {
  const data = useGlobalContext();
  const [user, setUser] = useState(true);

  console.log(data);

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

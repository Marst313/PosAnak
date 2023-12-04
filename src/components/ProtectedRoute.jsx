import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalUser } from '../contexts/userContext';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(true);

  const { data } = useGlobalUser();

  if (!data.email) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

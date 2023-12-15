import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(true);

  // const { data } = useGlobalUser();
  const data = true;

  // if (!data.email) {
  if (!data) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

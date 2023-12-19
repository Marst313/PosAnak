import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(true);

  const { token, uuid } = useSelector((store) => store.user);

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

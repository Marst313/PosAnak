import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useContext } from 'react';

export const UserPosyanduContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({ name: '', email: '', role: 'admin' });

  return <UserPosyanduContext.Provider value={{ setData, data }}>{children}</UserPosyanduContext.Provider>;
};
export const useGlobalUser = () => {
  return useContext(UserPosyanduContext);
};

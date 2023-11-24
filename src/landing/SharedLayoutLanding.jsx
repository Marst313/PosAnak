import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayoutLanding = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayoutLanding;

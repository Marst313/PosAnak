import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { getDataAnak } from '../features/kids/kids';
import { getDataKeluarga } from '../features/family/family';
import { getDataKegiatan } from '../features/activity/activity';

const SharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAnak());
    dispatch(getDataKeluarga());
    dispatch(getDataKegiatan());
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-coldWhite ">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Outlet sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default SharedLayout;

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { getDataAnak } from '../features/kids/kids';
import { getDataKeluarga } from '../features/family/family';
import { getDataBerita } from '../features/news/news';

const SharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(getDataAnak());
      await dispatch(getDataKeluarga());
      await dispatch(getDataBerita());
    }

    fetchData();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-coldWhite ">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="fixed bottom-10 right-20">Chat Bot</div>

      <Outlet sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default SharedLayout;

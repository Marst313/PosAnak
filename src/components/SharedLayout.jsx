import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { getDataAnak } from '../features/kids/kids';
import { getDataKeluarga } from '../features/family/family';
import { getDataBerita } from '../features/news/news';
import { getDataKegiatan } from '../features/activity/activity';

import Cookies from 'js-cookie';
import { getSingleUser, setToken } from '../features/users/user';
import { jwtDecode } from 'jwt-decode';

const SharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await dispatch(getDataAnak());
      // await dispatch(getDataKeluarga());
      await dispatch(getDataKegiatan());
      await dispatch(getDataBerita());
    }

    fetchData();

    const jwt = Cookies.get('jwt');

    if (!jwt) {
      navigate('/');
    } else {
      const { id } = jwtDecode(jwt);
      dispatch(setToken({ jwt, id }));

      async function getDataUser(id) {
        try {
          await dispatch(getSingleUser(id));
        } catch (error) {
          console.log(error);
        }
      }

      getDataUser(id);
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-coldWhite ">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Outlet sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="fixed bottom-10 right-20">Chat Bot</div>
    </div>
  );
};

export default SharedLayout;

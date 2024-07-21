import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Sidebar, Header, PopUpChatBot } from "./";
import { useDispatch } from "react-redux";
import { getDataAnak } from "../features/kids/kids";
import { getDataBerita } from "../features/news/news";
import { getDataKegiatan } from "../features/activity/activity";

import Cookies from "js-cookie";
import { getAllUser, getSingleUser, setToken } from "../features/users/user";
import { jwtDecode } from "jwt-decode";

const SharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jwt = Cookies.get("jwt");

  useEffect(() => {
    if (!jwt) {
      navigate("/");
    } else {
      const { id } = jwtDecode(jwt);
      dispatch(setToken({ jwt, id }));

      function getDataUser(id) {
        dispatch(getSingleUser(id));
        dispatch(getDataAnak());
        dispatch(getAllUser());
        dispatch(getDataKegiatan());
        dispatch(getDataBerita());
      }

      getDataUser(id);
    }
  }, [jwt]);

  return (
    <div className="bg-coldWhite flex h-screen overflow-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Outlet sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <PopUpChatBot />
    </div>
  );
};

export default SharedLayout;

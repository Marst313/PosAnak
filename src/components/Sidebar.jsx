import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

import logo from "../images/logo-posyandu.webp";
import logoutIcon from "../images/nav/logout.svg";
import profilePict from "../images/contohProfile.jpeg";
import { navLinks, navLinksAdmin } from "../utils/link";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { role, profile } = useSelector((store) => store.user);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  const handleLogout = () => {
    Cookies.remove("jwt");
    navigate("/");
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`no-scrollbar lg:sidebar-expanded:!w-64 absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll bg-white p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto 2xl:!w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="my-5 flex justify-between pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-darkGreen lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink
            end
            to="/dashboard/menu"
            className="flex w-full items-center justify-center gap-5"
          >
            <img src={logo} alt="logo poysandu" width="32px" />
            <h1 className="text-2xl lg:text-3xl">
              <span className="text-lightGreen">Pos</span>anak
            </h1>
          </NavLink>
        </div>

        <hr />

        {/* Profile */}
        <Link
          className="hover:bg-lightGreen/10 my-5 flex flex-col items-center justify-center gap-3"
          to="profile"
        >
          <div className="border-lightGreen rounded-full border p-1">
            <img
              src={profile.photo}
              alt="gambar profile"
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl capitalize">{profile.name}</h2>
          <h5>{profile.email}</h5>
        </Link>

        <hr />

        {/* Links */}
        <div className="mt-5 space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-darkGreen pl-3 font-semibold">
              <span
                className="lg:sidebar-expanded:hidden text-darkGreen-6 hidden lg:block 2xl:hidden"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:sidebar-expanded:block lg:hidden 2xl:block">
                Menu
              </span>
            </h3>

            {role === "admin" ? (
              <ul className="mt-3">
                {/* SIDEBAR */}
                {navLinksAdmin.map((item) => {
                  return (
                    <li
                      className="text-darkGreen lg:sidebar-expanded:opacity-100 ml-3 block truncate py-1 transition duration-150 lg:opacity-0 2xl:opacity-100"
                      key={item.id}
                    >
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? "active-nav" : "nav";
                        }}
                        to={item.path}
                      >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
                <li
                  className="text-darkGreen lg:sidebar-expanded:opacity-100 ml-3 block truncate py-1 transition duration-150 lg:opacity-0 2xl:opacity-100"
                  onClick={() => setOpen(true)}
                >
                  <NavLink className="nav">
                    <img src={logoutIcon} alt="logout icon" />
                    <p>Keluar</p>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="mt-3">
                {/* SIDEBAR */}
                {navLinks.map((item) => {
                  return (
                    <li
                      className="text-darkGreen lg:sidebar-expanded:opacity-100 ml-3 block truncate py-1 transition duration-150 lg:opacity-0 2xl:opacity-100"
                      key={item.id}
                    >
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? "active-nav" : "nav";
                        }}
                        to={item.path}
                      >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
                <li
                  className="text-darkGreen lg:sidebar-expanded:opacity-100 ml-3 block w-full truncate py-1 transition duration-150 lg:opacity-0 2xl:opacity-100"
                  onClick={() => setOpen(true)}
                >
                  <NavLink className="nav">
                    <img src={logoutIcon} alt="logout icon" />
                    <p>Keluar</p>
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="mt-auto hidden justify-end pt-3 lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="sidebar-expanded:rotate-180 h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-darkGreen"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-darkGreen" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Expand / collapse button */}
      </div>

      {/* LOGOUT */}
      <div
        className={`absolute right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-white/30 backdrop-blur-sm md:inset-0 ${open ? "flex" : "hidden"} `}
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setOpen(false)}
            >
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 text-center md:p-5">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Apakah Kamu Yakin Mau Keluar?
              </h3>
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={() => setOpen(false)}
                className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* LOGOUT */}
    </div>
  );
}

export default Sidebar;

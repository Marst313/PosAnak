import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import logo from '../images/logo-posyandu.webp';
import logoutIcon from '../images/nav/logout.svg';
import profilePict from '../images/contohProfile.jpeg';
import { navLinks, navLinksAdmin } from '../utils/link';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { email, name, role } = useSelector((store) => store.user);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  const handleLogout = () => {
    Cookies.remove('jwt');

    navigate('/');
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto  transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between my-5 pr-3 sm:px-2">
          {/* Close button */}
          <button ref={trigger} className="lg:hidden text-darkGreen " onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}>
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/dashboard/menu" className="flex items-center justify-center w-full gap-5">
            <img src={logo} alt="logo poysandu" width="32px" />
            <h1 className="text-2xl lg:text-3xl">
              <span className="text-lightGreen">Pos</span>anak
            </h1>
          </NavLink>
        </div>

        <hr />

        {/* Profile */}
        <Link className="flex flex-col justify-center items-center my-5 gap-3 hover:bg-lightGreen/10" to="profile">
          <div className="p-1 border-lightGreen border rounded-full">
            <img src={profilePict} alt="gambar profile" className="rounded-full w-32 h-32 " />
          </div>
          <h2 className="text-2xl capitalize">{name}</h2>
          <h5>{email}</h5>
        </Link>

        <hr />

        {/* Links */}
        <div className="space-y-8 mt-5">
          {/* Pages group */}
          <div>
            <h3 className="text-darkGreen  font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-darkGreen-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Menu</span>
            </h3>

            {role === 'admin' ? (
              <ul className="mt-3">
                {/* SIDEBAR */}
                {navLinksAdmin.map((item) => {
                  return (
                    <li className=" block text-darkGreen truncate transition duration-150 py-1   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100" key={item.id}>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? 'active-nav' : 'nav';
                        }}
                        to={item.path}
                      >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
                <li className=" block text-darkGreen truncate transition duration-150 py-1   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100" onClick={() => setOpen(true)}>
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
                    <li className=" block text-darkGreen truncate transition duration-150 py-1   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100" key={item.id}>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? 'active-nav' : 'nav';
                        }}
                        to={item.path}
                      >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
                <li className=" block text-darkGreen truncate transition duration-150 py-1   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100" onClick={() => setOpen(true)}>
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
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-darkGreen" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-darkGreen" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Expand / collapse button */}
      </div>

      {/* LOGOUT */}
      <div className={`overflow-y-auto overflow-x-hidden absolute left-36 top-0 right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  bg-white/30 backdrop-blur-sm ${open ? 'flex' : 'hidden'} `}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setOpen(false)}
            >
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to logout?</h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={() => setOpen(false)}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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

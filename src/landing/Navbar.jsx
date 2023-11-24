import React, { useState } from 'react';
import logoPosyandu from '../images/logo-posyandu.png';
import { Link, NavLink } from 'react-router-dom';
import { navLinksLanding } from '../utils/link';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="bg-white  shadow-lg z-20 relative">
      <div className="flex  justify-between  xl:px-60  items-center p-4  ">
        <Link className="flex items-center ">
          <img src={logoPosyandu} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold ml-3">Posyandu</span>
        </Link>

        <button className="lg:hidden" onClick={() => setOpenNav(true)} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h22M5 16h22M5 24h22" />
          </svg>
        </button>

        {/* MOBILE VIEW */}
        {openNav && (
          <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm h-screen w-screen flex flex-col items-center justify-center lg:hidden">
            <div className="flex flex-col gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm h-screen w-screen  items-center justify-center  relative">
              <button className="absolute top-0 right-0 p-4" onClick={() => setOpenNav(false)} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 256 256">
                  <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
                </svg>
              </button>
              {navLinksLanding.map((item) => {
                return (
                  <li key={item.name}>
                    <NavLink
                      className={({ isActive }) => {
                        return isActive ? 'text-greenStabilo' : 'text-navBlack';
                      }}
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}

              <button className="border-greenPrimary border whitespace-nowrap py-2 rounded-full text-greenPrimary font-semibold hover:bg-greenPrimary hover:text-white w-32 h-10 ">Masuk</button>
              <button className="bg-greenPrimary rounded-full text-white font-semibold whitespace-nowrap hover:bg-white hover:border-greenPrimary hover:border hover:text-greenPrimary py-2 w-32 h-10">Daftar</button>
            </div>
          </ul>
        )}

        <ul className="lg:flex gap-10 hidden items-center justify-between ">
          {navLinksLanding.map((item) => {
            return (
              <li key={item.name}>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'text-greenPrimary' : 'text-navBlack';
                  }}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="lg:flex gap-3  hidden   ">
          <button className="border-greenPrimary border whitespace-nowrap py-2 rounded-full text-greenPrimary font-semibold hover:bg-greenPrimary hover:text-white w-32 ">Masuk</button>
          <button className="bg-greenPrimary rounded-full text-white font-semibold whitespace-nowrap hover:bg-white hover:border-greenPrimary hover:border hover:text-greenPrimary py-2 w-32 ">Daftar</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

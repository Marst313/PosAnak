import React, { useState } from "react";
import { Link } from "react-router-dom";

import { chat, faq, pengaturan, logoWhite, defaultProfile } from "../images/";

import {
  arrowLeft,
  iconChatBotBook,
  arrowtop,
  arrowbottom,
} from "../images/icons";
import { useSelector } from "react-redux";
const SidebarChatbot = ({
  isOpen,
  isSidebarOpen,
  setIsSidebarOpen,
  setIsOpen,
}) => {
  const { profile } = useSelector((store) => store.user);

  // Dropdown navbar
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className="mr-5 flex w-[25%] flex-col">
      {/* Header ASIDE */}
      <div className="flex items-center justify-start gap-10">
        <Link to="/dashboard/menu">
          <img src={arrowLeft} alt="back icon" />
        </Link>

        <Link className="flex items-center gap-5" to="/dashboard/menu">
          <img src={logoWhite} alt="logo putih" className="w-10" />
          <h1 className="text-2xl text-white">Posanak</h1>
        </Link>

        <img
          src={iconChatBotBook}
          alt="logo buku"
          className="w-10 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      {/* Header ASIDE */}

      <div className="mb-2 mt-10 h-[70%]">
        <ul>
          <li className="my-2 flex cursor-pointer" onClick={toggleDropdown}>
            <img
              src={isOpen ? arrowtop : arrowbottom}
              alt="arrow image"
              className="mx-2"
            />
            <p>Menu Utama</p>
          </li>
          {isOpen && (
            <ul className="absolute mt-2 w-72 rounded-lg bg-white p-2 shadow-lg">
              <li className="text-darkGreen p-2">Coming Soon</li>
              <li className="text-darkGreen p-2">Coming Soon</li>
              <li className="text-darkGreen p-2">Coming Soon</li>
            </ul>
          )}
          <li
            className={`my-5 flex h-10 items-center rounded-xl bg-[#036346] transition-transform duration-500 ${
              isOpen ? "translate-y-36" : "translate-y-0"
            }`}
          >
            <img src={chat} alt="chat image" className="mx-2 h-6 w-6" />
            <p className="text-white">Chatbot</p>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex">
          <img src={faq} alt="faq image" className="h-5 w-5" />
          <p className="mx-2 text-sm text-white">FAQ</p>
        </div>

        <div className="my-5 flex">
          <img src={pengaturan} alt="pengaturan image" className="h-5 w-5" />
          <p className="mx-2 text-sm text-white">Pengaturan</p>
        </div>

        <div className="rounded-xl bg-[#036346] p-2">
          <section className="flex p-2">
            <img
              src={profile.photo || defaultProfile}
              alt="user images profile"
              className="mx-2 h-10 w-10 rounded-full object-cover"
            />
            <div className="mx-2">
              <p className="text-sm text-white">{profile.name}</p>
              <p className="text-sm text-white/50">{profile.email}</p>
            </div>
          </section>
          <button className="h-10 w-full rounded-xl bg-white">
            <p className="text-semibold">Membuat ChatBot Baru</p>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarChatbot;

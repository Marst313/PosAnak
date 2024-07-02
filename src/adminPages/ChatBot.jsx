import React, { useEffect, useState } from "react";
import {
  arrowLeft,
  iconChatBotBook,
  arrowtop,
  arrowbottom,
  send,
} from "../images/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import logoWhite from "../images/logoWhite.png";
import pengaturan from "../images/pengaturan.png";
import faq from "../images/faq.png";
import chat from "../images/chat.png";
import defaultProfile from "../images/defaultProfile.png";
import { useDispatch, useSelector } from "react-redux";
import {
  generateNewChat,
  generateNextChat,
  getCurrentUserChat,
  getSingleChat,
  setChat,
  setCurrentChat,
} from "../features/chat/chat";
import HistoryChatBot from "../components/HistoryChatBot";
import ContentChatBot from "../components/ContentChatBot";
import Cookies from "js-cookie";

import { getSingleUser, setToken } from "../features/users/user";
import { jwtDecode } from "jwt-decode";
import Loading from "../components/Loading";

const ChatBot = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const jwt = Cookies.get("jwt");
  const { id } = jwtDecode(jwt);

  const { message, allChat, isLoading, idChat } = useSelector(
    (store) => store.chat,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  async function getDataUser(id) {
    try {
      await dispatch(getSingleUser(id));
    } catch (error) {
      console.log(error);
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Change message text
  const handleOnChange = (e) => {
    dispatch(setChat(e.target.value));
  };

  // Submit message
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await dispatch(generateNextChat({ id: params.id, message }));
      await dispatch(getSingleChat(params.id));
      await dispatch(setChat(""));
    } else {
      await dispatch(generateNewChat(message));
      await dispatch(setChat(""));
    }
  };

  useEffect(() => {
    if (idChat) {
      navigate(`/chatbot/${idChat}`);
      dispatch(getSingleChat(idChat));
    }
  }, [idChat]);

  useEffect(() => {
    dispatch(setCurrentChat(allChat.length - 1));
  }, [allChat]);

  useEffect(() => {
    if (params.id) {
      dispatch(getSingleChat(params.id));
    } else {
      dispatch(setToken({ jwt, id }));

      getDataUser(id);
    }
  }, [params.id]);

  // initial render
  useEffect(() => {
    if (!jwt) {
      navigate("/");
    } else {
      dispatch(setToken({ jwt, id }));
      dispatch(getCurrentUserChat(id));
      getDataUser(id);
    }
  }, []);

  return (
    <div className="bg-bgChatBot relative flex h-screen p-10 text-white">
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
                src={defaultProfile}
                alt="user images profile"
                className="mx-2 h-10 w-10 rounded-full"
              />
              <div className="mx-2">
                <p className="text-sm text-white">Sumarni</p>
                <p className="text-sm text-white/50">Sumarni@gmail.com</p>
              </div>
            </section>
            <button className="h-10 w-full rounded-xl bg-white">
              <p className="text-semibold">Membuat ChatBot Baru</p>
            </button>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div
        className={`bg-darkGreen hidden w-full rounded-3xl transition-all duration-500 lg:flex ${isSidebarOpen ? "ml-0" : "-ml-"}`}
      >
        <div className="flex w-3/4 flex-col">
          {/* HEADER CONTENT */}
          <div className="h-20 border-b-2 border-b-black/20 px-12 py-5">
            <h1 className="text-4xl font-semibold text-white">Chatbot</h1>
          </div>
          {/* HEADER CONTENT */}

          {/* CHAT CONTENT */}
          {params.id && <ContentChatBot />}
          {/* CHAT CONTENT */}

          {isLoading ? (
            <Loading />
          ) : (
            <form
              className="relative bottom-0 left-0 m-4 flex h-24 w-full items-center justify-center"
              onSubmit={handleSubmit}
            >
              <input
                onChange={handleOnChange}
                value={message}
                disabled={isLoading}
                type="text"
                placeholder="Kirim pesan ke Chatbot"
                className="bg-darkGreen border-bgChatBot focus:border-bgChatBot h-full w-[54.2%] translate-x-5 rounded-lg border placeholder:text-white focus:ring-0"
              />
              <button
                className={`absolute right-48 w-5 ${isLoading ? "opacity-80" : "opacity-100"}`}
              >
                <img src={send} alt="icon send" />
              </button>
            </form>
          )}
        </div>

        {/* HEADER RIGHT */}
        <div className="flex w-72 flex-col">
          <div className="flex h-20 w-full items-center justify-center gap-5 border-b-2 border-b-black/20 px-12 py-7">
            <img
              src={defaultProfile}
              alt="user images profile"
              className="h-10 w-10 rounded-full"
            />
            <button className="text-darkGreen mx-2 rounded-lg bg-white px-5 py-2 font-semibold">
              Share
            </button>
          </div>

          {/* HISTORY CHAT */}
          <div className="h-fit w-72 px-4 py-2 text-sm">
            <div className="flex w-full">
              <h1 className="text-white">Chat History</h1>
              <p className="mx-2 rounded bg-[#033828] px-2 text-white">
                {allChat.length}/20
              </p>
            </div>

            <HistoryChatBot />
            {/* HISTORY CHAT */}

            {/* BUTTON CHAT */}
            <div className="bottom-0 left-0 mt-4 flex h-24 w-full items-center justify-center">
              <Link
                className="mx-2 flex h-10 w-full items-center justify-center rounded-xl bg-white"
                to="/chatbot"
              >
                <p className="text-semibold">Membuat ChatBot Baru</p>
              </Link>
            </div>
          </div>
        </div>
        {/* HEADER RIGHT */}
      </div>
    </div>
  );
};

export default ChatBot;

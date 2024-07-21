import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  generateNewChat,
  generateNextChat,
  getCurrentUserChat,
  getSingleChat,
  setChat,
  setCurrentChat,
  setIdChat,
} from "../features/chat/chat";

import { send } from "../images/icons";
import { defaultProfile } from "../images/";

import {
  SidebarChatbot,
  HistoryChatBot,
  ContentChatBot,
  Loading,
} from "../components";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getSingleUser } from "../features/users/user";

const ChatBot = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const jwt = jwtDecode(Cookies.get("jwt"));

  const { message, allChat, isLoading, idChat } = useSelector(
    (store) => store.chat,
  );
  const { profile } = useSelector((store) => store.user);

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const initialRender = async () => {
    try {
      await dispatch(getCurrentUserChat(jwt.id));
      await dispatch(getSingleUser(jwt.id));
      dispatch(setIdChat(0));
    } catch (error) {
      console.log(error);
    }
  };

  // CHandle Change message
  const handleOnChange = (e) => {
    dispatch(setChat(e.target.value));
  };

  // Create new chat or next chat
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await dispatch(generateNextChat({ id: params.id, message }));
      await dispatch(getSingleChat(params.id));
      await dispatch(setChat(""));
    } else {
      await dispatch(generateNewChat(message));
      await dispatch(getCurrentUserChat(params.id));
      await dispatch(setCurrentChat(allChat.length));
      await dispatch(setChat(""));
    }

    await dispatch(getCurrentUserChat(jwt.id));
  };

  useEffect(() => {
    if (idChat) {
      navigate(`/chatbot/${idChat}`);
      dispatch(getSingleChat(idChat));
    }
  }, [idChat]);

  useEffect(() => {
    initialRender();
  }, []);

  return (
    <div className="bg-bgChatBot relative flex h-screen p-10 text-white">
      <SidebarChatbot
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
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
              disabled={isLoading}
              className={`absolute right-48 w-5 ${isLoading ? "opacity-80" : "opacity-100"}`}
            >
              <img src={send} alt="icon send" />
            </button>
          </form>
        </div>

        {/* HEADER RIGHT */}
        <div className="flex w-72 flex-col">
          <div className="flex h-20 w-full items-center justify-center gap-5 border-b-2 border-b-black/20 px-12 py-7">
            <img
              src={profile.photo || defaultProfile}
              alt="user images profile"
              className="h-10 w-10 rounded-full object-cover"
            />
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

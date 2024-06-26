import React, { useEffect, useState } from "react";
import {
  arrowLeft,
  iconChatBotBook,
  editChat,
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

const ChatBot = () => {
  const dispatch = useDispatch();
  const { message, allChat, currentActive, multiChat, isLoading } = useSelector(
    (store) => store.chat,
  );

  const { id } = useParams();

  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  // Change history chat
  const handleChangeChat = (id) => {
    dispatch(setCurrentChat(id));
  };

  // Submit message
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await dispatch(generateNextChat({ id, message }));
      await dispatch(getSingleChat(id));
    } else {
      await dispatch(generateNewChat(message));
    }

    await dispatch(setChat(""));
  };

  useEffect(() => {
    if (id) {
      dispatch(getSingleChat(id));
    } else {
      dispatch(setCurrentChat(0));
    }
  }, [id]);

  useEffect(() => {
    dispatch(getCurrentUserChat());
  }, []);

  return (
    <div className="bg-bgChatBot relative flex h-screen p-10 text-white">
      <aside className="mr-5 flex w-[25%] flex-col">
        {/* Header ASIDE */}
        <div className="flex items-center justify-start gap-10">
          <button onClick={handleClickBack}>
            <img src={arrowLeft} alt="back icon" />
          </button>

          <div className="flex items-center gap-5">
            <img src={logoWhite} alt="logo putih" className="w-10" />
            <h1 className="text-2xl text-white">Posanak</h1>
          </div>

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
          {id && (
            <ul className="custom-scrollbar flex h-fit w-full flex-col gap-5 overflow-y-auto border-r-2 border-r-black/20 px-12 pb-20">
              {/* Single Chat */}
              {multiChat.map((item, index) => {
                return (
                  <li className="flex flex-col gap-5 py-5" key={index}>
                    <div className="bg-bgChatBot flex w-full flex-col gap-5 rounded-3xl p-5">
                      <div className="bg-darkGreen flex w-full items-center gap-5 rounded-xl px-5 py-2">
                        <img
                          src={defaultProfile}
                          alt="user images profile"
                          className="h-10 w-10 rounded-full"
                        />
                        <p className="text-white">{item.question}</p>

                        <img
                          src={editChat}
                          alt="icon edit"
                          className="ml-auto h-7 w-7"
                        />
                      </div>

                      <p className="text-justify text-white">{item.answer}</p>
                    </div>

                    <div className="flex items-center gap-5">
                      <p className="text-white">Baru Saja</p>

                      <button className="bg-bgChatBot h-8 w-16 rounded-md">
                        Copy
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

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

            {/* HISTORY CHAT */}
            <ul className="custom-scrollbar mt-5 flex h-96 w-full flex-col gap-5 overflow-y-auto p-2">
              {allChat.map((chat, index) => {
                const jsonHistory = JSON.parse(chat.history);

                // Filter untuk mendapatkan parts dari objek dengan role 'model'
                const modelParts = jsonHistory
                  .filter((item) => item.role === "model")
                  .map((item) => item.parts.map((part) => part.text).join(" "))
                  .join(" ");

                return (
                  <Link
                    to={`/chatbot/${chat._id}`}
                    key={chat._id}
                    onClick={() => handleChangeChat(index)}
                  >
                    <li
                      className={`flex rounded-xl border p-4 ${currentActive === index ? "bg-[#033828]" : "border-bgChatBot border"}`}
                    >
                      <div>
                        <h3 className="capitalize text-white">
                          {chat.question}
                        </h3>
                        <p className="line-clamp-2 text-white/30">
                          {modelParts}
                        </p>
                        <div className="mt-3 flex justify-between">
                          <img
                            src={defaultProfile}
                            alt="user images profile"
                            className="h-5 w-5 rounded-full"
                          />
                          <p
                            className={`${currentActive === index ? "" : "text-bgChatBot text-sm"}`}
                          >
                            Baru saja
                          </p>
                        </div>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>

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
      </div>
    </div>
  );
};

export default ChatBot;

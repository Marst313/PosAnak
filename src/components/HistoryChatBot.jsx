import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import defaultProfile from "../images/defaultProfile.png";
import {
  deleteSingleChat,
  getCurrentUserChat,
  getSingleChat,
  setCurrentChat,
} from "../features/chat/chat";
import { deleteIcon } from "../images/dataanak";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const HistoryChatBot = () => {
  const { allChat, currentActive } = useSelector((store) => store.chat);

  const navigate = useNavigate();
  const jwt = jwtDecode(Cookies.get("jwt"));

  const dispatch = useDispatch();

  // Change History
  const handleChangeChat = async (index, idChat) => {
    await dispatch(getSingleChat(idChat));
    await dispatch(setCurrentChat(index));
  };

  // Delete history
  const handleDeleteChat = async (id) => {
    await dispatch(deleteSingleChat(id));
    await dispatch(getCurrentUserChat(jwt.id));
    navigate("/chatbot");
  };

  return (
    <ul className="custom-scrollbar mt-5 flex h-96 w-full flex-col gap-5 overflow-y-auto overflow-x-hidden p-2">
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
            onClick={() => handleChangeChat(index, chat._id)}
            className="relative"
          >
            <li
              className={`flex rounded-xl border p-4 ${currentActive === index ? "bg-[#033828]" : "border-bgChatBot border"}`}
            >
              <div>
                <h3 className="capitalize text-white">{chat.question}</h3>
                <p className="line-clamp-2 text-white/30">{modelParts}</p>
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
            <button
              onClick={() => handleDeleteChat(chat._id)}
              className="absolute right-2 top-2 h-5 w-5"
            >
              <img src={deleteIcon} alt="delete chat bot" className="w-full" />
            </button>
          </Link>
        );
      })}
    </ul>
  );
};

export default HistoryChatBot;

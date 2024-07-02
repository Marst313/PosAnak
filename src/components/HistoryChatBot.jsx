import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import defaultProfile from "../images/defaultProfile.png";
import { setCurrentChat } from "../features/chat/chat";

const HistoryChatBot = () => {
  const { allChat, currentActive } = useSelector((store) => store.chat);

  const dispatch = useDispatch();

  const handleChangeChat = (index) => {
    dispatch(setCurrentChat(index));
  };
  return (
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
          </Link>
        );
      })}
    </ul>
  );
};

export default HistoryChatBot;

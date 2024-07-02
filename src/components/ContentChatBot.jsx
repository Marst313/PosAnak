import React from "react";
import { useSelector } from "react-redux";

import { editChat } from "../images/icons";
import defaultProfile from "../images/defaultProfile.png";
import Loading from "./Loading";

const ContentChatBot = () => {
  const { multiChat } = useSelector((store) => store.chat);
  return (
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

              <button className="bg-bgChatBot h-8 w-16 rounded-md">Copy</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContentChatBot;

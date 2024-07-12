import React from "react";
import { useSelector } from "react-redux";

import { editChat } from "../images/icons";
import defaultProfile from "../images/defaultProfile.png";
import Loading from "./Loading";

const ContentChatBot = () => {
  const { multiChat, isLoading } = useSelector((store) => store.chat);

  if (isLoading) {
    return <Loading />;
  }

  const parseAnswer = (answer) => {
    const lines = answer.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("## ")) {
        // Handle top-level headers
        return (
          <h2 key={index} className="mb-2 font-bold text-white">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("**")) {
        // Handle numbered titles
        const [num, ...rest] = line.replaceAll("**", "").split(". ");
        const title = rest.join(". ");
        return (
          <p key={index} className="mb-2 font-bold text-white">
            {num}. {title}
          </p>
        );
      } else if (line.startsWith("* **")) {
        // Handle list items with bold titles
        const [title, ...rest] = line.replaceAll("**", "").split(":");
        const explanation = rest?.join(":")?.trim();
        return (
          <p key={index} className="mb-2 text-white">
            * <strong>{title.substring(2)}</strong>: {explanation}
          </p>
        );
      } else if (line.trim() !== "") {
        // Handle regular paragraphs with bold text
        const parts = line.split(/(\*\*.*?\*\*)/);
        return (
          <p key={index} className="mb-2 text-white">
            {parts.map((part, i) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={i}>{part.slice(2, -2)}</strong>
              ) : (
                part
              ),
            )}
          </p>
        );
      } else {
        return <br key={index} />;
      }
    });
  };

  return (
    <ul className="custom-scrollbar flex h-fit w-full flex-col gap-5 overflow-y-auto border-r-2 border-r-black/20 px-12 pb-20">
      {/* Single Chat */}
      {multiChat?.map((item, index) => (
        <li className="flex flex-col gap-5 py-5" key={index}>
          <div className="bg-bgChatBot flex w-full flex-col gap-5 rounded-3xl p-5 shadow-lg">
            <div className="bg-darkGreen flex items-center gap-5 rounded-xl px-5 py-2">
              <img
                src={defaultProfile}
                alt="user profile"
                className="h-10 w-10 rounded-full"
              />
              <p className="flex-1 text-white">{item.question}</p>
              <button>
                <img src={editChat} alt="edit icon" className="h-7 w-7" />
              </button>
            </div>
            <div className="text-justify text-white">
              {parseAnswer(item.answer)}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-white">Baru Saja</p>

            <button className="bg-bgChatBot h-8 w-16 rounded-md">Copy</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContentChatBot;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconAi from "../images/icons/aiLogo.png";
import { useSelector } from "react-redux";

const PopUpChatBot = () => {
  const [guide, setGuide] = useState(true);

  const handleCloseMessage = () => {
    setGuide(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setGuide(false);
    }, 10 * 1000);
  }, []);

  return (
    <>
      <Link
        to={`/chatbot/`}
        className="bg-greenPrimary group fixed bottom-10 right-3 flex h-12 w-24 animate-bounce items-center justify-center rounded-full p-1 text-white hover:animate-none lg:right-20"
      >
        Chat Bot
      </Link>

      <div
        className={`fixed bottom-24 right-10 flex items-start gap-2.5 text-white transition-all duration-1000 lg:right-32 ${guide ? "max-h-[500px] p-4 opacity-100" : "max-h-0 p-0 opacity-0"}`}
      >
        <div className="leading-1.5 from-darkGreen via-greenPrimary to-lightGreen flex w-full max-w-[320px] flex-col rounded-s-xl rounded-se-xl border-gray-200 bg-gradient-to-r p-4">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold">AI CHAT BOT</span>
            <img src={iconAi} alt="logo ai" className="h-8 w-8" />
          </div>
          <p className="py-2.5 text-sm font-semibold text-white/80">
            Silahkan tanya seputar anak di chat bot dengan fitur kecerdasan
            buatan 😄
          </p>
          <button
            className="text-greenPrimary start-0 w-20 rounded-md bg-white p-2 text-sm font-semibold hover:bg-white/90"
            onClick={handleCloseMessage}
          >
            Mengerti
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUpChatBot;

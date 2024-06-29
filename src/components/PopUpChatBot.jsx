import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconAi from '../images/icons/aiLogo.png';
import { useSelector } from 'react-redux';

const PopUpChatBot = () => {
  const [guide, setGuide] = useState(true);
  const { uuid } = useSelector((store) => store.user);

  const handleCloseMessage = () => {
    setGuide(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setGuide(false);
    }, 15 * 1000);
  }, []);

  return (
    <>
      <Link to={`/chatbot/${uuid}`} className="fixed bottom-10 right-3 lg:right-20 bg-greenPrimary w-24 p-1 text-white h-12 rounded-full flex items-center justify-center animate-bounce hover:animate-none group ">
        Chat Bot
      </Link>

      <div className={`flex items-start gap-2.5 fixed bottom-24 right-10 lg:right-32 text-white  transition-all duration-1000 ${guide ? 'opacity-100 max-h-[500px] p-4' : 'opacity-0 max-h-0 p-0'}`}>
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gradient-to-r from-darkGreen via-greenPrimary    to-lightGreen rounded-s-xl rounded-se-xl ">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold  ">AI CHAT BOT</span>
            <img src={iconAi} alt="logo ai" className="w-8 h-8" />
          </div>
          <p className="text-sm  py-2.5 text-white/80 font-semibold">Silahkan tanya seputar anak di chat bot dengan fitur kecerdasan buatan 😄</p>
          <button className="text-sm start-0 w-20 bg-white text-greenPrimary p-2 font-semibold hover:bg-white/90 rounded-md" onClick={handleCloseMessage}>
            Mengerti
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUpChatBot;

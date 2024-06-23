import React, { useState } from 'react';

const PopUp = ({ message, open, type }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [text, setText] = useState(message);
  const [status, setStatus] = useState(type);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`overflow-y-auto overflow-x-hidden absolute left-36 top-0 right-0 z-10 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  bg-white/30 backdrop-blur-sm ${isOpen ? 'flex' : 'hidden'} `}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{text}</h3>
            <button
              onClick={closeModal}
              type="button"
              className={`${
                status === 'success' ? 'bg-green-600 hover:bg-green-800 focus:ring-green-300' : 'bg-red-600 hover:bg-red-800 focus:ring-red-300'
              } text-white  focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center`}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

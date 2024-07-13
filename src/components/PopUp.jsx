import React from "react";
import { useDispatch } from "react-redux";
import { setMessageOpen } from "../features/kids/kids";
import { setMessageOpenProfile } from "../features/users/user";

const PopUp = ({ message, open, type }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setMessageOpen(false));
    dispatch(setMessageOpenProfile(false));
  };

  return (
    <div
      className={`absolute left-36 right-0 top-0 z-10 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-white/30 backdrop-blur-sm md:inset-0 ${open ? "flex" : "hidden"} `}
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={closeModal}
            className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 text-center md:p-5">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
            <button
              onClick={closeModal}
              type="button"
              className={`${
                type === "success"
                  ? "bg-green-600 hover:bg-green-800 focus:ring-green-300"
                  : "bg-red-600 hover:bg-red-800 focus:ring-red-300"
              } inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4`}
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

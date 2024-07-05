import React, { useState } from "react";
import profile from "../images/contohProfile.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";

const Profiles = () => {
  const dispatch = useDispatch();

  const { isLoading, profile } = useSelector((store) => store.user);
  const [edit, setEdit] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex w-full flex-col items-center overflow-auto bg-white pb-14 lg:items-stretch lg:rounded-3xl lg:px-20">
      {edit ? (
        <EditProfile />
      ) : (
        <>
          <div className="mb-10 mt-5 items-start justify-between px-4 pt-10 sm:px-6 lg:mt-0 lg:flex lg:px-0">
            <h1 className="text-center text-2xl font-semibold lg:mt-0 lg:text-start">
              Informasi Profile
            </h1>

            <img
              src={profile.photo}
              alt="hero image"
              className="border-lightGreen mt-10 h-56 w-56 rounded-full border p-1 lg:mt-16"
            />
            <button
              type="button"
              onClick={() => setEdit(true)}
              className="hover:border-greenPrimary hover:text-greenPrimary mt-10 hidden gap-3 rounded-3xl border bg-[#F9A319] px-5 py-2 font-semibold text-white transition-all hover:bg-white lg:mt-0 lg:flex"
            >
              <svg
                width={24}
                className="fill-current"
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0399 3.02025L8.15988 10.9003C7.85988 11.2003 7.55988 11.7903 7.49988 12.2203L7.06988 15.2303C6.90988 16.3203 7.67988 17.0803 8.76988 16.9303L11.7799 16.5003C12.1999 16.4403 12.7899 16.1403 13.0999 15.8403L20.9799 7.96025C22.3399 6.60025 22.9799 5.02025 20.9799 3.02025C18.9799 1.02025 17.3999 1.66025 16.0399 3.02025Z"
                  stroke="#FFFFFF"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039"
                  stroke="#FFFFFF"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit
            </button>
          </div>
          <hr />

          <div className="mt-5 p-2">
            <h1 className="text-2xl font-semibold">Informasi Profile</h1>

            <div className="mt-5 flex justify-between gap-5">
              <div className="flex w-full flex-col">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  id="nama"
                  value={profile.name}
                  className="border-grey mt-2 rounded-xl focus:ring-0"
                  disabled
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between gap-5">
              <div className="flex w-full flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="border-grey mt-2 rounded-xl focus:ring-0"
                  value={profile.email}
                  disabled
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setEdit(true)}
              className="hover:border-greenPrimary hover:text-greenPrimary mt-5 flex gap-3 rounded-3xl border bg-[#F9A319] px-5 py-2 font-semibold text-white transition-all hover:bg-white lg:mt-0 lg:hidden"
            >
              <svg
                width={24}
                className="fill-current"
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0399 3.02025L8.15988 10.9003C7.85988 11.2003 7.55988 11.7903 7.49988 12.2203L7.06988 15.2303C6.90988 16.3203 7.67988 17.0803 8.76988 16.9303L11.7799 16.5003C12.1999 16.4403 12.7899 16.1403 13.0999 15.8403L20.9799 7.96025C22.3399 6.60025 22.9799 5.02025 20.9799 3.02025C18.9799 1.02025 17.3999 1.66025 16.0399 3.02025Z"
                  stroke="#FFFFFF"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039"
                  stroke="#FFFFFF"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Profiles;

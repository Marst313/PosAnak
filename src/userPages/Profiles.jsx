import React, { useEffect, useState } from "react";
import profile from "../images/contohProfile.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profiles = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const {
    isLoading,

    profile,
  } = useSelector((store) => store.user);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (user !== null) {
      setDataProfile({
        email: profile.email,
        name: profile.name,
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex w-full flex-col items-center overflow-auto bg-white pb-14 lg:items-stretch lg:rounded-3xl lg:px-20">
      {edit ? (
        <div className="justify-between\\\\\\ mb-10 mt-5 flex flex-col px-4 pt-10 sm:px-6 lg:mt-0 lg:items-start lg:px-0">
          <h1 className="text-center text-2xl font-semibold lg:text-start">
            Edit Profile
          </h1>

          <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row">
            <img
              src={profile.photo}
              alt="image"
              className="border-lightGreen rounded-full border p-1"
            />

            <form className="flex gap-3" onClick={handleSubmit}>
              <input
                type="file"
                src=""
                alt=""
                accept="image/png, image/jpeg, image/jpg"
                className="bg-yellowPrimary hover:border-greenPrimary hover:text-greenPrimary flex items-center gap-3 rounded-full border px-5 py-2 text-white transition-all duration-500 hover:bg-white"
              />

              <button className="bg-yellowPrimary hover:border-greenPrimary hover:text-greenPrimary flex items-center gap-3 rounded-full border px-5 py-2 text-white transition-all duration-500 hover:bg-white">
                <svg
                  className="fill-current"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9997 13.3333C13.4724 13.3333 14.6663 12.1394 14.6663 10.6667C14.6663 9.19391 13.4724 8 11.9997 8C10.5269 8 9.33301 9.19391 9.33301 10.6667C9.33301 12.1394 10.5269 13.3333 11.9997 13.3333Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.3337 2.66602H12.0003C5.33366 2.66602 2.66699 5.33268 2.66699 11.9993V19.9993C2.66699 26.666 5.33366 29.3327 12.0003 29.3327H20.0003C26.667 29.3327 29.3337 26.666 29.3337 19.9993V13.3327"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.5195 3.45288L20.6795 8.29288C20.4929 8.47955 20.3062 8.83955 20.2795 9.10622L20.0129 10.9595C19.9195 11.6262 20.3862 12.0929 21.0529 11.9995L22.9062 11.7329C23.1595 11.6929 23.5329 11.5195 23.7195 11.3329L28.5595 6.49288C29.3995 5.65288 29.7862 4.69288 28.5595 3.46622C27.3195 2.21288 26.3595 2.61288 25.5195 3.45288Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.8271 4.14648C25.2405 5.61315 26.3871 6.75982 27.8538 7.17315"
                    stroke="white"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.55957 25.2661L10.1329 20.8528C11.1862 20.1461 12.7062 20.2261 13.6529 21.0394L14.0929 21.4261C15.1329 22.3194 16.8129 22.3194 17.8529 21.4261L23.3996 16.6661C24.4396 15.7728 26.1196 15.7728 27.1596 16.6661L29.3329 18.5328"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Unggah Foto
              </button>
            </form>
          </div>

          <hr className="my-5 w-full border" />

          <h1 className="text-center text-2xl font-semibold lg:text-start">
            Edit Informasi
          </h1>

          <div className="mt-5 flex justify-between gap-5">
            <div className="flex w-full flex-col">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                id="nama"
                name="name"
                value={profile.name}
                className="border-grey mt-2 rounded-xl focus:ring-0"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-5">
            <div className="flex w-full flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="border-grey mt-2 rounded-xl focus:ring-0"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <hr className="my-5 w-full border" />

          <h1 className="text-2xl font-semibold">Ubah Kata Sandi</h1>

          <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row">
            <div className="flex w-full flex-col">
              <label htmlFor="password">Kata Sandi Baru</label>
              <input
                type="password"
                id="password"
                className="border-grey mt-2 rounded-xl focus:ring-0"
                name="password"
              />
            </div>

            <div className="flex w-full flex-col">
              <label htmlFor="kataSandiBaru">Konfirmasi Kata Sandi Baru</label>
              <input
                type="password"
                id="kataSandiBaru"
                name="passwordConfirm"
                className="border-grey mt-2 rounded-xl focus:ring-0"
              />
            </div>
          </div>

          <button
            type="button"
            className="bg-lightGreen hover:border-greenPrimary hover:text-greenPrimary mx-auto mt-10 rounded-full border px-10 py-2 text-white transition-all duration-500 hover:bg-white"
            onClick={() => setEdit(false)}
          >
            Simpan
          </button>
        </div>
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
